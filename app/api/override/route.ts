export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/authOptions';
import { prisma } from '../../../lib/prisma';

export async function POST(request: Request) {
  // Auth gate: block unauthenticated requests
  const authSession = await getServerSession(authOptions);
  if (!authSession?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // physician_id comes from the verified server session, never from the client payload
  const physician_id = authSession.user.id;

  try {
    const body = await request.json();
    const { tenant_id, session_id, justification } = body;

    if (!justification || justification.length < 10) {
      return NextResponse.json({ error: "Valid justification required" }, { status: 400 });
    }

    // Fetch the secure URL directly from the database
    const session = await prisma.triage_sessions.findUnique({
      where: { id: session_id },
      select: { resume_url: true }
    });

    if (!session || !session.resume_url) {
      return NextResponse.json({ error: "Invalid session or missing/expired resume token." }, { status: 400 });
    }

    const secure_resume_url = session.resume_url;

    // Database Transaction: Update status, write audit log, and DESTROY the token
    await prisma.$transaction(async (tx) => {
      const updateResult = await tx.triage_sessions.updateMany({
        where: {
          id: session_id,
          status: 'processing' // Optimistic concurrency guard
        },
        data: {
          status: 'approved_by_doctor',
          resume_url: null // Instantly invalidate the token so it cannot be reused
        }
      });

      if (updateResult.count === 0) {
        throw new Error("RACE_CONDITION: Session already approved, expired, or not found.");
      }

      await tx.audit_logs.create({
        data: {
          tenant_id: tenant_id,
          session_id: session_id,
          physician_id: physician_id, // sourced from server session, not client payload
          action_taken: 'MANUAL_OVERRIDE_AUTHORIZED',
          override_justification: justification,
        }
      });
    });

    // Thaw the n8n pipeline using the secure DB URL
    const n8nResponse = await fetch(secure_resume_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "approved_by_doctor",
        justification: justification,
        timestamp: new Date().toISOString()
      })
    });

    if (!n8nResponse.ok) {
      throw new Error("Failed to thaw n8n pipeline");
    }

    return NextResponse.json({ success: true, message: "Override logged and pipeline resumed." });

  } catch (error: any) {
    console.error("Override API Error:", error);

    if (error.message?.includes("RACE_CONDITION")) {
      return NextResponse.json({ error: "This session has already been reviewed by another physician." }, { status: 409 });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
