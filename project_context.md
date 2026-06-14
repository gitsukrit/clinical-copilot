# Project Database & API Context
Generated: 2026-05-19

---

## Database Layer

This project does NOT use the Supabase JS client. All database access goes through Prisma.

---

## 1. `lib/prisma.ts` — Prisma Client Singleton + Tenant Scoping

```ts
import { PrismaClient } from '../prisma/generated/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export function getTenantPrisma(tenantId: string) {
  return prisma.$extends({
    query: {
      $allModels: {
        async $allOperations({ args, query }) {
          await prisma.$executeRawUnsafe(
            "SELECT set_config('app.current_tenant', $1, TRUE)",
            tenantId
          );
          return query(args);
        },
      },
    },
  });
}
```

---

## 2. `prisma/schema.prisma` — Full Schema

> NOTE: The file on disk is duplicated (the full block appears twice). The canonical schema is below (one copy).

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model agent_memory {
  id         Int     @id @default(autoincrement())
  session_id String  @db.VarChar(255)
  message    Json
  tenant_id  String? @db.VarChar

  @@index([tenant_id], map: "ix_agent_memory_tenant_id")
}

/// This model contains row level security and requires additional setup for migrations.
model audit_logs {
  id                     String           @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid
  tenant_id              String           @db.Uuid
  session_id             String           @db.Uuid
  alert_id               String?          @db.Uuid
  physician_id           String           @db.VarChar(255)
  action_taken           String           @db.VarChar(100)
  override_justification String?
  ip_address             String?          @db.Inet
  timestamp              DateTime?        @default(now()) @db.Timestamptz(6)
  clinical_alerts        clinical_alerts? @relation(fields: [alert_id], references: [id], onDelete: NoAction, onUpdate: NoAction)
  triage_sessions        triage_sessions  @relation(fields: [session_id], references: [id], onDelete: NoAction, onUpdate: NoAction)
  tenants                tenants          @relation(fields: [tenant_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
}

model clinic_guidelines {
  id        String                 @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  text      String?
  metadata  Json?
  embedding Unsupported("vector")?
}

/// This model contains row level security and requires additional setup for migrations.
model clinical_alerts {
  id              String          @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid
  session_id      String          @db.Uuid
  tenant_id       String          @db.Uuid
  alert_type      String          @db.VarChar(100)
  severity        String          @db.VarChar(20)
  description     String
  recommendation  String
  status          String?         @default("pending") @db.VarChar(50)
  created_at      DateTime?       @default(now()) @db.Timestamptz(6)
  audit_logs      audit_logs[]
  triage_sessions triage_sessions @relation(fields: [session_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
  tenants         tenants         @relation(fields: [tenant_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
}

model patient_intake {
  id                Int       @id @default(autoincrement())
  patient_status    String?   @db.VarChar(50)
  primary_concerns  Json?
  medications_noted Json?
  created_at        DateTime? @default(now()) @db.Timestamp(6)
}

model tenants {
  id              String            @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid
  clinic_name     String            @db.VarChar(255)
  created_at      DateTime?         @default(now()) @db.Timestamptz(6)
  audit_logs      audit_logs[]
  clinical_alerts clinical_alerts[]
  triage_sessions triage_sessions[]
}

/// This model contains row level security and requires additional setup for migrations.
model triage_sessions {
  id                String            @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid
  tenant_id         String            @db.Uuid
  patient_name      String            @db.VarChar(255)
  intake_notes      String?
  known_medications String?
  status            String?           @default("processing") @db.VarChar(50)
  resume_url        String?
  expires_at        DateTime          @db.Timestamptz(6)
  created_at        DateTime?         @default(now()) @db.Timestamptz(6)
  audit_logs        audit_logs[]
  clinical_alerts   clinical_alerts[]
  tenants           tenants           @relation(fields: [tenant_id], references: [id], onDelete: Cascade, onUpdate: NoAction)
}
```

> ⚠️ SCHEMA GAP: `app/api/override/route.ts` calls `tx.patient_history.create(...)` but there is NO `patient_history` model in this schema. This will throw a Prisma runtime error when the EHR write-back path is hit.

---

## 3. `app/api/patient/route.ts` — Mock EHR Lookup

```ts
import { NextResponse } from 'next/server';

// Mock EHR Database indexed strictly by MRN
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
    const patientData = MOCK_EHR_DATABASE[formattedMrn];

    if (patientData) {
      return NextResponse.json(patientData, { status: 200 });
    } else {
      return NextResponse.json({ error: "EHR SYSTEM ERROR: No patient record found matching that MRN." }, { status: 404 });
    }

  } catch (error) {
    console.error("EHR Lookup API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
```

---

## 4. `app/api/triage/route.ts` — Patient Intake → n8n Pipeline

```ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { checkRateLimit } from '../../../utils/rateLimiter';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    const isAllowed = checkRateLimit(ip, 10, 60000);

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { tenant_id, patient_data } = body;

    if (!patient_data || !patient_data.name || !patient_data.notes) {
      return NextResponse.json({ error: "Missing required patient data." }, { status: 400 });
    }

    const ESI_TARGET_SCHEMA = {
      "type": "object",
      "properties": {
        "esi_level": {
          "type": "integer",
          "description": "The assigned ESI level (1-5)."
        },
        "clinical_reasoning": {
          "type": "string",
          "description": "Step-by-step evaluation of the symptoms and the specific ESI rule applied."
        },
        "tool_findings": {
          "type": "string",
          "description": "Summary of any severe interactions or warnings found by the EHR or FDA tools. If none, state 'None'."
        },
        "requires_hitl": {
          "type": "boolean",
          "description": "MUST be true if ESI is 1 or 2, OR if tools returned a severe warning/contraindication."
        },
        "proposed_cpt": {
          "type": "array",
          "items": { "type": "string" },
          "description": "List of recommended CPT/HCPCS procedure codes based on the clinical narrative. Output an empty array if no procedures are recommended."
        },
        "proposed_icd10": {
          "type": "array",
          "items": { "type": "string" },
          "description": "List of recommended ICD-10 diagnosis codes based on the symptoms. Output an empty array if none."
        },
        "differential_diagnoses": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "condition": {
                "type": "string",
                "description": "The name of the suspected condition"
              },
              "rationale": {
                "type": "string",
                "description": "A 1-sentence clinical rationale explaining why this diagnosis fits the presentation"
              }
            },
            "required": ["condition", "rationale"]
          }
        },
        "hpi_draft": {
          "type": "string",
          "description": "A professionally formatted History of Present Illness (HPI) paragraph synthesizing the patient's presentation, vitals, and medical history, ready for EHR documentation."
        }
      },
      "required": ["esi_level", "clinical_reasoning", "tool_findings", "requires_hitl", "proposed_cpt", "proposed_icd10", "differential_diagnoses", "hpi_draft"]
    };

    const session_id = crypto.randomUUID();

    const n8nPayload = {
      tenant_id,
      session_id,
      patient_name: patient_data.name,
      known_medications: patient_data.history,
      intake_notes: patient_data.notes,
      target_schema: ESI_TARGET_SCHEMA
    };

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || "http://localhost:5678/webhook-test/d7cc4c21-5d83-46f4-81ba-c270cfb43f6e";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': process.env.N8N_WEBHOOK_SECRET ?? '',
      },
      body: JSON.stringify(n8nPayload)
    });

    if (!n8nResponse.ok) {
      throw new Error("Failed to reach the orchestration pipeline.");
    }

    const n8nData = await n8nResponse.json();
    const unwrappedData = Array.isArray(n8nData) ? n8nData[0] : n8nData;
    const finalClinicalData = unwrappedData.original_ai_data ? unwrappedData.original_ai_data : unwrappedData;

    return NextResponse.json({
      ...finalClinicalData,
      session_id: session_id
    });

  } catch (error) {
    console.error("Triage API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
```

---

## 5. `app/api/override/route.ts` — HITL Physician Override

```ts
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

    // Prisma transaction: update status, write audit log, destroy token, write to EHR
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

      // EHR Write-Back — NOTE: patient_history model is not yet in schema.prisma
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
```

---

## Known Issues (for the AI receiving this context)

1. **`patient_history` model is missing from schema.prisma.** `override/route.ts` calls `tx.patient_history.create(...)` but this model does not exist in the Prisma schema. This will cause a runtime error on the EHR write-back path. The model needs to be added to `schema.prisma` and migrated before this path can work.

2. **`schema.prisma` is duplicated on disk.** The entire schema block appears twice in the file. Only one copy is valid; the duplicate should be removed.

3. **`triage/route.ts` does not write a `triage_sessions` record.** It generates a `session_id` and forwards it to n8n, but never writes to the database itself. The assumption is that n8n writes the session record (including `resume_url`) back to Supabase directly. `override/route.ts` then reads that record by `session_id`.
