# CLAUDE.md

## Who I Am
Sukrit Chakravarty — Senior Configuration Analyst at SF Health Plan, 14+ years in healthcare IT (QNXT, Epic Radiant, claims adjudication, regulatory compliance). Transitioning to Healthcare AI Workflow Architect. H1B visa holder.

## How I Work
I am a domain expert and architect, not a software engineer. I understand logic, business rules, and system design deeply. I use AI to write code. When I describe what I want, I mean the architecture and behavior — you handle the implementation. Ask me about healthcare domain logic, not about syntax preferences.

## This Repository
This codebase is the **Guardrails-as-a-Service prototype** — a Next.js + Prisma application. It is not a general monorepo. Do not assume FastAPI, Alembic, CPT logic, or any other stack from separate projects exists here.

## Active Projects

### 1. Guardrails-as-a-Service API ← THIS REPO
- **Stack**: Next.js 16 (frontend + API routes), n8n (external orchestration), PostgreSQL + pgvector on Supabase (DB via Prisma), Tailwind CSS 4, TypeScript
- **What the Next.js layer does**: Accepts patient intake via PDF upload or manual form. Extracts PDF text server-side (`pdf2json`). Generates a `session_id` and writes the initial `triage_sessions` record to Supabase before forwarding to n8n. Handles the HITL override flow via `/api/override`.
- **What n8n handles**: All AI processing and model routing. The Next.js frontend makes no direct LLM calls. The specific LLM provider and any RAG/embedding logic are configured inside the n8n workflow, which is not committed to this repo.
- **HITL security architecture**: When `medication_conflict` is true, n8n freezes on a Wait node and stores a `resume_url` token in the `triage_sessions` table. This token is **never returned to the frontend**. The `/api/override` route fetches it directly from the database using the `session_id`, runs a Prisma transaction (update status → `approved_by_doctor`, write immutable audit log, null the token), then POSTs to the URL to thaw the pipeline. The client is fully isolated from pipeline orchestration tokens.
- **Multi-tenancy**: The PostgreSQL schema is fully multi-tenant — `triage_sessions`, `clinical_alerts`, and `audit_logs` all carry `tenant_id` and have row-level security markers. The current UI prototype uses a single hardcoded `tenant_id` (`56d66db8-42da-4cb2-aea7-f91ae85f19f7`) and a hardcoded `physician_id` (`dr_house_8991`). Auth and tenant-switching are not yet implemented.
- **Current state**: Working prototype. Core HITL pipeline functional end-to-end. Architecture hardened with concurrency guard (optimistic lock via `updateMany` status check → 409 on race condition) and immutable audit logging.

### 2. Regulatory Change Impact Analyzer
- **Stack**: React (JSX artifact), Claude API
- **What it does**: Paste a CMS/DHCS regulatory bulletin, AI analyzes configuration impact across 4 areas: Provider Config, Fee Schedules, Service Groups, Provider Contracts. Outputs structured JSON, renders dependency graph with impact coloring.
- **Domain rules baked in**:
  - Contracts is the central hub — everything flows through contracts
  - Fee schedules are NOT always needed — single-code rates go directly on contract terms
  - Service groups are NOT always needed — individual codes can go on contract terms
  - NO direct link between Fee Schedules and Provider Config — always through Contracts
  - Watch for secondary impacts (e.g., needing new contracts, not just updates)

### 3. Regulatory Manual RAG Tool (Planned)
- **Concept**: Upload CMS/DHCS billing manuals and provider manuals (PDFs). Ask questions, get answers with exact source citations. Single-purpose — no general conversation, purely manual-focused Q&A.

## Domain Knowledge — Healthcare Payer Configuration

### Configuration Dependency Tree (4 core areas I work in daily)
```
Service Groups (CPT/HCPCS/Dx/Modifier groupings)
├── connects to → Fee Schedules (for bulk/grouped code pricing)
├── connects to → Provider Config (sometimes, for group assignments)
└── connects to → Contracts (sometimes direct, sometimes through fee schedules)

Fee Schedules (RBRVS, MCFS, custom fee tables)
└── connects to → Contracts (fee schedules feed into contract terms)

Provider Configuration (flags, taxonomy, MIPS, QP status)
└── connects to → Contracts (provider type determines contract assignment)

Provider Contracts (CENTRAL HUB — all payments flow through here)
├── can reference fee schedules OR direct per-unit rates
├── can reference service groups OR individual codes/rev codes
├── can be provider-specific, Global LOA, or generic (e.g., 80% MCFS for NONPAR)
└── NO direct link to Fee Schedules ↔ Provider Config (always through contracts)
```

### Key regulatory sources
- CMS Final Rules, QPP updates, RBRVS fee schedule releases (quarterly)
- DHCS All Plan Letters (APLs), Medi-Cal Fee Schedule (MCFS, monthly)
- DSNP/D-SNP Policy Guides, SMAC requirements

---

## Core Behavioral Rules

### 1. No Sycophancy
- Do not say "Great idea!", "You're absolutely right!", or any filler praise.
- Respond to instructions with action or a specific objection. Not both. Not neither.
- If you disagree, say so clearly and once. Then do what was asked unless it would cause data loss or a security issue.

### 2. Minimal Footprint
- Only touch files and lines directly related to the task.
- Do NOT refactor, rename, reformat, or "clean up" anything that wasn't part of the request.
- If you notice something unrelated that seems wrong, note it in a comment at the end of your response. Do not fix it.

### 3. Verification Before "Done"
- Never say "done," "complete," or "finished" unless you have:
  1. Written or updated a test that covers the change
  2. Run that test (or stated explicitly why it cannot be run)
  3. Confirmed no existing tests were broken
- If you cannot verify, say: "I believe this is correct but have not verified."

### 4. No Reversions Without Declaration
- If you are about to revert or undo something from a previous turn, you MUST say so explicitly before doing it.
- Format: "⚠️ REVERSION: I am about to undo [X] because [reason]. Confirm?"

### 5. Scope Discipline
- Before starting any task, state in one sentence what you will change and what you will NOT change.
- If the task scope is ambiguous, ask one clarifying question. Just one.

### 6. Correction Memory
- When the user corrects you, add the correction to the Project Learnings section below.
- Format: `[DATE] [topic]: what you learned`

## Preferred Patterns
- **Tests first**: Write the failing test, then the implementation.
- **Small commits**: One logical change per response. Do not bundle.
- **Explicit over implicit**: State assumptions. Don't guess file paths, variable names, or intent.
- **Error handling**: Always handle the error case. Never write `catch (e) {}` or swallow exceptions silently.

## What "Done" Means Here
- [ ] The code compiles / the script runs without error
- [ ] The specific behavior requested works as described
- [ ] Existing tests still pass
- [ ] You have stated what you tested and how

---

## Project Learnings

[2026-04-19] resume_url security: The token is never returned to the frontend. /api/override fetches it directly from the DB by session_id, nulls it in the same transaction, then calls n8n. Any description of resume_url flowing to the client describes the old insecure design.

[2026-04-19] LLM stack: Next.js makes no direct LLM calls. All AI/model routing is inside the n8n workflow, which is not in this repo. Do not assume Ollama or Claude API are wired into the Next.js layer.

[2026-04-19] Multi-tenancy scope: The DB schema is multi-tenant (tenant_id on all core tables, RLS markers). The UI is single-tenant prototype with hardcoded IDs. Do not describe this as a functioning multi-tenant system.

[2026-04-19] Project scope: This repo is the Guardrails-as-a-Service Next.js prototype only. FastAPI, Alembic, CPT extraction, and NCCI compliance belong to a separate project that does not exist in this directory.
