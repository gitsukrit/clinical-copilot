export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/authOptions';
import { getTenantPrisma } from '../../../lib/prisma';

const TENANT_ID = '56d66db8-42da-4cb2-aea7-f91ae85f19f7';

export async function POST(request: Request) {
  const authSession = await getServerSession(authOptions);
  if (!authSession?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const physician_id = authSession.user.id;

  try {
    const body = await request.json();
    const { tenant_id, session_id, justification, hpi_draft, icd10_codes, patient_name, patient_mrn } = body;

    if (!justification || justification.length < 10) {
      return NextResponse.json({ error: "Valid justification required" }, { status: 400 });
    }

    const db = getTenantPrisma(TENANT_ID);

    const session = await db.triage_sessions.findUnique({
      where: { id: session_id },
      select: { resume_url: true }
    });

    if (!session || !session.resume_url) {
      return NextResponse.json({ error: "Invalid session or missing/expired resume token." }, { status: 400 });
    }

    const secure_resume_url = session.resume_url;

    // Database Transaction: Update status, write audit log, DESTROY token, and WRITE TO EHR
    await db.$transaction(async (tx) => {
      const updateResult = await tx.triage_sessions.updateMany({
        where: { id: session_id, status: 'processing' },
        data: { status: 'approved_by_doctor', resume_url: null }
      });

      if (updateResult.count === 0) {
        throw new Error("RACE_CONDITION: Session already approved, expired, or not found.");
      }

      await tx.audit_logs.create({
        data: {
          tenant_id: tenant_id,
          session_id: session_id,
          physician_id: physician_id,
          action_taken: 'MANUAL_OVERRIDE_AUTHORIZED',
          override_justification: justification,
        }
      });

      // NEW: Prisma EHR Write-Back integrated into the transaction
      if (hpi_draft) {
        await tx.patient_history.create({
          data: {
            patient_mrn: patient_mrn || 'UNKNOWN',
            patient_name: patient_name || 'UNKNOWN',
            hpi_record: hpi_draft,
            icd10_codes: icd10_codes || [],
          }
        });
      }
    });

    const n8nResponse = await fetch(secure_resume_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": process.env.N8N_WEBHOOK_SECRET ?? '',
      },
      body: JSON.stringify({
        status: "approved_by_doctor",
        justification: justification,
        timestamp: new Date().toISOString()
      })
    });

    if (!n8nResponse.ok) {
      throw new Error("Failed to thaw n8n pipeline");
    }

    return NextResponse.json({ success: true, message: "Override logged, EHR updated, and pipeline resumed." });

  } catch (error: any) {
    console.error("Override API Error:", error);
    if (error.message?.includes("RACE_CONDITION")) {
      return NextResponse.json({ error: "This session has already been reviewed by another physician." }, { status: 409 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}