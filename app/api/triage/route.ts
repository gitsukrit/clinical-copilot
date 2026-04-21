export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tenant_id, patient_data, target_schema } = body;

    // 1. Basic Sanitization & Validation Guardrails
    if (!patient_data || !patient_data.name || !patient_data.notes) {
      return NextResponse.json({ error: "Missing required patient data." }, { status: 400 });
    }

    // 2. Generate the UUID securely on the backend
    const session_id = crypto.randomUUID();

    // 3. Assemble the sanitized payload for n8n
    const n8nPayload = {
      tenant_id,
      session_id,
      patient_name: patient_data.name,
      known_medications: patient_data.history,
      intake_notes: patient_data.notes,
      target_schema
    };

    // 4. Fire the webhook securely
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || "http://localhost:5678/webhook-test/d7cc4c21-5d83-46f4-81ba-c270cfb43f6e";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(n8nPayload)
    });

    if (!n8nResponse.ok) {
      throw new Error("Failed to reach the orchestration pipeline.");
    }

    const n8nData = await n8nResponse.json();

    return NextResponse.json({
      ...n8nData,
      session_id: session_id
    });

  } catch (error) {
    console.error("Triage API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}