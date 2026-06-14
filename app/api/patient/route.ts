import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

// Mock EHR Database indexed strictly by MRN (Kept for your existing demo tests)
const MOCK_EHR_DATABASE: Record<string, any> = {
  "MRN-77892": {
    name: "Mark Smith",
    dob: "1982-05-14",
    conditions: ["Severe Hypertension (Diagnosed 2024)", "Type 2 Diabetes"],
    active_medications: ["Lisinopril 20mg daily", "Metformin 500mg daily"]
  },
  "MRN-44321": {
    name: "Eleanor Vance",
    dob: "1990-11-02",
    conditions: ["None documented"],
    active_medications: ["None documented"]
  },
  "MRN-99812": {
    name: "James Chen",
    dob: "1955-08-12",
    conditions: ["Atrial Fibrillation"],
    active_medications: ["Warfarin 5mg daily", "Metoprolol 25mg daily", "Atorvastatin 40mg daily"]
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const mrn = searchParams.get('mrn');

    if (!mrn || mrn.trim() === "") {
      return NextResponse.json({ error: "MRN parameter is required." }, { status: 400 });
    }

    const formattedMrn = mrn.trim().toUpperCase();

    // 1. Check Mock Data first (for your LinkedIn demo scenarios)
    if (MOCK_EHR_DATABASE[formattedMrn]) {
      return NextResponse.json(MOCK_EHR_DATABASE[formattedMrn], { status: 200 });
    }

    // 2. Check the real Prisma Database for previous visits
    const existingHistory = await prisma.patient_history.findFirst({
      where: { patient_mrn: formattedMrn },
      orderBy: { visit_date: 'desc' }
    });

    if (existingHistory) {
      return NextResponse.json({
        name: existingHistory.patient_name,
        dob: "On File",
        conditions: existingHistory.icd10_codes ? ["Prior ICD-10 Codes on file"] : ["None documented"],
        active_medications: ["Review prior HPI for details"] 
      }, { status: 200 });
    }

    // 3. Net-New Patient: Register them in the database instantly
    await prisma.patient_history.create({
      data: {
        patient_mrn: formattedMrn,
        patient_name: "New Unregistered Patient",
        hpi_record: "Initial System Registration",
        icd10_codes: []
      }
    });

    // Return a clean slate to n8n so the workflow doesn't crash
    return NextResponse.json({
      name: "New Unregistered Patient",
      dob: "Not Provided",
      conditions: ["None documented"],
      active_medications: ["None documented"]
    }, { status: 200 });

  } catch (error) {
    console.error("EHR Lookup API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}