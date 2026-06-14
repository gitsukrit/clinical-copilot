# Clinical Copilot — Guardrails-as-a-Service Prototype

This is a Next.js application that implements a medication-conflict and clinical triage workflow with a Human-in-the-Loop (HITL) override gate. The core premise is straightforward: a clinician submits a patient intake (manual form or PDF upload), an external n8n pipeline runs drug-drug interaction checks and AI triage, and if the AI assigns an ESI level of 1 or 2 — or finds a severe contraindication — it freezes and waits for a physician to explicitly authorize before proceeding. The interesting parts of this codebase are not the UI; they are the security and audit architecture around that human approval step: the resume token is never exposed to the browser, concurrent approvals are blocked at the database layer, every override is written to an immutable audit log inside the same transaction, and the physician identity comes only from the server-side session.

---

## Status

Working prototype. The PostgreSQL schema is fully multi-tenant with row-level security markers enforced at the Supabase layer via `set_config('app.current_tenant', ...)` on every query. The UI is single-tenant: `tenant_id` and `physician_id` are hardcoded for demo purposes. Auth is a single hardcoded credential set (see Prototype Credentials below). No automated tests exist. Not production-ready.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router), TypeScript |
| ORM / DB client | Prisma 6.19, PostgreSQL + pgvector on Supabase |
| Auth | NextAuth 4.24 (CredentialsProvider, JWT sessions) |
| PDF extraction | pdf2json 4.0 (server-side, Node runtime) |
| AI orchestration | n8n (external, not in this repo) |
| LLM | Anthropic Claude (inside n8n) |
| Observability | Langfuse (inside n8n) |
| Embeddings | Ollama (inside n8n, feeds pgvector) |
| Styling | Tailwind CSS 4 |

---

## API Surface

All routes live under `app/api/`. The Next.js layer makes **no direct LLM calls** — it only handles intake, security, and database writes.

| Route | Method | Auth required | Description |
|---|---|---|---|
| `/api/auth/[...nextauth]` | GET, POST | — | NextAuth.js catch-all; handles sign-in/sign-out via JWT session |
| `/api/triage` | POST | No | Rate-limited (10 req/min per IP). Validates patient payload, defines the ESI JSON schema server-side, generates a `session_id`, and forwards the sanitized payload to n8n via shared-secret webhook. Returns the AI clinical result to the client. |
| `/api/upload` | POST | No | Accepts a multipart PDF, extracts raw text server-side via pdf2json, and returns the text string for use in the triage form. |
| `/api/patient` | GET | No | EHR lookup by MRN. Checks a hardcoded mock dataset first (demo scenarios), then `patient_history` in Postgres. Registers net-new patients on first visit. |
| `/api/override` | POST | Yes (`session.user.id`) | HITL override gate. Fetches `resume_url` from DB by `session_id` (never from the client). Runs a Prisma transaction: updates session status to `approved_by_doctor`, nulls the token, writes an immutable audit log entry, and optionally writes HPI + ICD-10 codes to `patient_history`. Returns 409 if a concurrent approval race is detected. Then POSTs to n8n to thaw the pipeline. |
| `/api/history` | POST | Yes (`session.user.id`) | Writes a completed (auto-approved) HPI and ICD-10 codes to `patient_history`. Used for the non-HITL path. |
| `/api/ledger` | GET | Yes (`session.user.id`) | Fetches all `global_ledger` rows with `resolution_state = 'Flagged (Pending Review)'` via Supabase REST. Used by the auditor dashboard. |
| `/api/ledger` | PATCH | Yes (`session.user.id`) | Updates a `global_ledger` row to `Overridden (Human)` or `Denied (Human)`. Note: `action` field is not validated server-side beyond the ternary — any unrecognized value resolves to `Denied`. |

---

## Architecture Invariants

These are properties that the code enforces today, not aspirational:

1. **Zero LLM calls from Next.js.** All model routing, RAG, and AI agent logic lives inside the n8n workflow. This repo contains no Anthropic SDK import, no LangChain, no direct model calls of any kind.

2. **`resume_url` is server-only.** When n8n freezes on a HITL gate, it stores a `resume_url` token in the `triage_sessions` table. That token is never sent to the browser. `/api/override` fetches it from the database by `session_id`, then nulls it inside the same Prisma transaction that writes the audit log. The client has no path to obtain or replay the token.

3. **`physician_id` comes from the session, not the request body.** The override route reads `physician_id` exclusively from `authSession.user.id` (the server-side NextAuth JWT). The client cannot supply or substitute a physician identity.

4. **Concurrent approval protection.** The override transaction uses `updateMany` with a `where: { id: session_id, status: 'processing' }` condition. If two physicians submit simultaneously, one will find `count === 0` (session already transitioned) and receive a 409 with a human-readable message.

5. **ESI schema is server-enforced.** The `/api/triage` route defines the full `ESI_TARGET_SCHEMA` JSON object on the server and injects it into the n8n payload. The client sends only patient data; it cannot influence the schema that constrains the AI output. ESI level 1 or 2 automatically sets `requires_hitl: true`.

6. **RLS at the database layer.** `getTenantPrisma()` in `lib/prisma.ts` calls `set_config('app.current_tenant', tenantId, TRUE)` as a local transaction-scoped setting before every query, activating Supabase row-level security policies on `triage_sessions`, `audit_logs`, and `clinical_alerts`.

---

## UI Routes

| Route | Component | Description |
|---|---|---|
| `/` | `app/page.tsx` | Physician triage view: manual intake form + PDF upload, clinical result display, HITL override panel |
| `/auditor` | `app/auditor/page.tsx` | Medical Director Inbox: two-panel review interface over `global_ledger`, showing AI clinical reasoning, CPT codes, ICD-10 codes, and Approve/Deny controls with a required resolution note |

---

## Prisma Schema Overview

8 models in `prisma/schema.prisma`. RLS is enforced at the Supabase layer on three of them.

| Model | RLS | Key fields |
|---|---|---|
| `triage_sessions` | Yes | `tenant_id`, `session_id`, `status`, `resume_url` (nulled after HITL), `expires_at` |
| `audit_logs` | Yes | `tenant_id`, `session_id`, `physician_id`, `action_taken`, `override_justification`, `ip_address`, `timestamp` |
| `clinical_alerts` | Yes | `tenant_id`, `session_id`, `alert_type`, `severity`, `description`, `recommendation`, `status` |
| `patient_history` | No | `patient_mrn`, `patient_name`, `hpi_record`, `icd10_codes` (Json), `visit_date` |
| `tenants` | No | `clinic_name` |
| `clinic_guidelines` | No | `text`, `metadata`, `embedding` (pgvector `vector` type — RAG source) |
| `agent_memory` | No | `session_id`, `message` (Json), `tenant_id` — n8n Postgres chat memory |
| `patient_intake` | No | `patient_status`, `primary_concerns`, `medications_noted` |

---

## n8n Orchestration (not in this repo)

The n8n workflow receives the payload from `/api/triage` and runs the following sequence:

1. **Webhook trigger** — receives patient data + ESI schema from this app via `x-webhook-secret` header.
2. **Patient history lookup** — queries `patient_history` in Postgres for prior visits and ICD-10 history.
3. **DDI check** — drug-drug interaction evaluation against known medications.
4. **AI Agent** — Anthropic Claude with Langfuse observability, Postgres chat memory (`agent_memory` table), pgvector RAG over `clinic_guidelines`, and Ollama embeddings.
5. **NCCI violation router** — routes flagged sessions based on National Correct Coding Initiative rules.
6. **HITL gate** — if `requires_hitl` is true, the workflow pauses on a Wait node and writes a `resume_url` token to `triage_sessions`. The workflow thaws only when `/api/override` POSTs to that URL.
7. **Slack notification** — alerts the on-call physician when a session is waiting for review.
8. **Session expiration job** — cleans up stale sessions after the `expires_at` threshold.

---

## What Is NOT Implemented Yet

- **Inbound HMAC webhook verification.** This app sends an outbound `x-webhook-secret` shared-secret header to n8n. There is no inbound signature verification on callbacks from n8n — the app trusts the content of n8n's response without cryptographic proof. A proper implementation would use `crypto.createHmac` + `timingSafeEqual` on inbound requests.
- **Automated tests.** There are no test files of any kind. No Jest, Vitest, or Playwright configuration exists.
- **Full PATCH body validation on `/api/ledger`.** The `action` field is not validated against an allowlist. Any value other than `"approve"` silently resolves to `"Denied (Human)"`.
- **Multi-tenant UI.** The database schema is fully multi-tenant, but the UI hardcodes a single `tenant_id`. Tenant switching, tenant registration, and per-tenant auth are not implemented.
- **RAG wired to the frontend.** The `clinic_guidelines` table with pgvector embeddings exists and is used inside the n8n AI agent, but there is no frontend interface to query, browse, or upload to the RAG index.
- **CI/CD.** No GitHub Actions, Vercel pipeline, or deployment configuration is committed to this repo.

---

## Prototype Credentials

> **These are demo-only hardcoded values. Do not use in production.**

| What | Value |
|---|---|
| Login username | `dr_house` |
| Login password | `medconflict123` |
| Physician ID (from session) | `dr_house_8991` |
| Hardcoded tenant ID | `56d66db8-42da-4cb2-aea7-f91ae85f19f7` |

Auth is handled by NextAuth `CredentialsProvider` in `lib/authOptions.ts`. The credentials are checked against hardcoded strings — there is no user table or bcrypt comparison.
