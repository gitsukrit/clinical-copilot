export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { checkRateLimit } from '../../../utils/rateLimiter';

export async function POST(request: Request) {
  try {
    // --- NEW RATE LIMITING LOGIC ---
    // Extract the IP address from the headers, or fallback to localhost for local testing
    const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    
    // Check if this IP is allowed (Limit: 10 requests per 60,000 milliseconds / 1 minute)
    const isAllowed = checkRateLimit(ip, 10, 60000);
    
    if (!isAllowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." }, 
        { status: 429 } // HTTP 429: Too Many Requests
      );
    }
    // -------------------------------

    const body = await request.json();
    const { tenant_id, patient_data } = body; // Notice we dropped target_schema from here

    // 1. Basic Sanitization & Validation Guardrails
    if (!patient_data || !patient_data.name || !patient_data.notes) {
      return NextResponse.json({ error: "Missing required patient data." }, { status: 400 });
    }

    // 2. Define the strict ESI schema SERVER-SIDE so the client cannot manipulate it
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

    // 3. Generate the UUID securely on the backend
    const session_id = crypto.randomUUID();

    // 4. Assemble the sanitized payload for n8n
    const n8nPayload = {
      tenant_id,
      session_id,
      patient_name: patient_data.name,
      known_medications: patient_data.history,
      intake_notes: patient_data.notes,
      target_schema: ESI_TARGET_SCHEMA // Forcing the server-side schema
    };

    // 5. Fire the webhook securely
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

    // 1. Unwrap the array if n8n sent one
    const unwrappedData = Array.isArray(n8nData) ? n8nData[0] : n8nData;

    // 2. Dig out the actual clinical AI data
    const finalClinicalData = unwrappedData.original_ai_data ? unwrappedData.original_ai_data : unwrappedData;

    // 3. Send the clean object to the React frontend
    return NextResponse.json({
      ...finalClinicalData,
      session_id: session_id
    });

  } catch (error) {
    console.error("Triage API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}