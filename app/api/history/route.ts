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

  try {
    const body = await request.json();
    const { hpi_draft, icd10_codes, patient_name, patient_mrn } = body;

    if (!hpi_draft) {
      return NextResponse.json({ error: "Missing HPI Draft" }, { status: 400 });
    }

    const db = getTenantPrisma(TENANT_ID);

    await db.patient_history.create({
      data: {
        patient_mrn: patient_mrn || 'UNKNOWN',
        patient_name: patient_name || 'UNKNOWN',
        hpi_record: hpi_draft,
        icd10_codes: icd10_codes || [],
      }
    });

    return NextResponse.json({ success: true, message: "Auto-approval saved to EHR history." });

  } catch (error: any) {
    console.error("Auto-Approval Write-Back API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}