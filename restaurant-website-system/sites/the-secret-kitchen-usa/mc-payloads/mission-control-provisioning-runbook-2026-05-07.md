# The Secret Kitchen USA — Mission Control provisioning runbook

- Date: 2026-05-07
- Site slug: `the-secret-kitchen-usa`
- Restaurant: The Secret Kitchen USA
- Recommended archetype: **Bamzi**
- Purpose: safely turn the local Secret Kitchen seed packet into Mission Control lead + canonical website-workflow tasks once protected agency auth and founder approval are available.
- Current status: **not applied** — this runtime still lacks `AGENCY_AUTONOMY_API_KEY` / bearer auth and the protected planner returns `401 Unauthorized`.

## Why this exists

Secret Kitchen now has the full local seed ladder in `skills`, but Mission Control has no matching `agency_leads` row yet. The safe next handoff is:

1. create or confirm the MC lead row from the local seed payload;
2. provision/backfill canonical website workflow tasks for that lead through the protected MC route;
3. keep the build state seed-ready until founder approval and owner confirmations are resolved.

Do not use raw Supabase mutations as the replay path while protected MC routes/UI flows exist.

## Local artifacts

- Lead seed payload: `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/seed-provisioning-payload-2026-05-07.json`
- Canonical workflow request: `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json`
- Founder decision brief: `restaurant-website-system/sites/the-secret-kitchen-usa/outreach/founder-seed-decision-brief-2026-05-07.md`
- Owner confirmation request: `restaurant-website-system/sites/the-secret-kitchen-usa/outreach/owner-confirmation-request-2026-05-07.md`
- Build-readiness brief: `restaurant-website-system/sites/the-secret-kitchen-usa/research/build-readiness-menu-conversion-brief-2026-05-07.md`
- Evidence packet: `restaurant-website-system/research/lead-qualification/the-secret-kitchen-usa-evidence-2026-05-07/`

## Prerequisites

1. Ethan/founder approves creating the Secret Kitchen seed in MC.
2. The runtime has one of:
   - `AGENCY_AUTONOMY_API_KEY`
   - `OPENCLAW_WEBHOOK_SECRET`
3. MC duplicate check still finds no existing Secret Kitchen lead.
4. A Mission Control lead row exists before workflow provisioning is attempted.
   - Current read-only checks found zero matching rows for `The Secret Kitchen`, `thesecretkitchenusa.com`, and `secret-kitchen`.
   - If a protected lead-create/upsert route exists by the time this runbook is used, prefer that route.
   - If not, create the lead through the authenticated MC UI from the seed payload, then copy the resulting `agency_leads.id` into the commands below.
5. The `agency_leads` row should be sales-status `lead` until Ethan intentionally moves it forward. Build progress belongs in workflow task metadata, not in `agency_leads.status`.

## Lead seed values

Use the seed payload as source of truth. The minimum MC lead row should preserve:

```json
{
  "name": "The Secret Kitchen USA",
  "status": "lead",
  "website_url": "https://thesecretkitchenusa.com/",
  "address": "1411 W Schaumburg Rd, Schaumburg, IL 60194",
  "city": "Schaumburg",
  "state": "IL",
  "contact_email": "info@thesecretkitchenusa.com",
  "contact_phone": "(630) 635-2854",
  "metadata": {
    "namespace": "agency_website_workflow_seed",
    "site_slug": "the-secret-kitchen-usa",
    "recommended_archetype": "Bamzi",
    "fit_score": 4.4,
    "pipeline_state": "seed_ready_pending_founder_approval_owner_confirmation_and_mc_provisioning",
    "primary_conversion_path": "reserve a table + explore menu + directions/contact + chef/story credibility"
  }
}
```

Do not invent Google rating/review counts, awards, capacity, private-room names, lunch service, photo rights, or reservation alternatives.

## Dry-run after lead exists

Replace `LEAD_ID` with the actual MC `agency_leads.id`.

```bash
export MC_API_BASE_URL="https://hq.ethantalreja.com"
export LEAD_ID="REPLACE_WITH_SECRET_KITCHEN_AGENCY_LEAD_ID"

node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id "$LEAD_ID" \
  --payload restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json \
  --trigger the-secret-kitchen-usa-seed-workflow-provisioning
```

Expected dry-run behavior:

- No network write is sent.
- Output points to `POST /api/agency/leads/:leadId/website-workflow`.
- Payload summary includes `site_slug: the-secret-kitchen-usa` and `template_slug` / selected archetype `Bamzi`.

## Apply after lead exists

Only run after prerequisites are true:

```bash
export MC_API_BASE_URL="https://hq.ethantalreja.com"
export AGENCY_AUTONOMY_API_KEY="***"
export LEAD_ID="REPLACE_WITH_SECRET_KITCHEN_AGENCY_LEAD_ID"

node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id "$LEAD_ID" \
  --payload restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json \
  --trigger the-secret-kitchen-usa-seed-workflow-provisioning \
  --apply
```

Expected successful MC response:

- `ok: true`
- `created_count` is positive on first provisioning, or lower/zero on idempotent backfill
- `workflow.root_task_id` is non-null
- `workflow.child_count` equals the canonical workflow step count
- `workflow.missing_steps` is empty

If apply returns `401`, stop and fix bearer auth. Do not downgrade to a raw database mutation.

## Post-apply verification

After apply, inspect MC for the Secret Kitchen lead and workflow tasks. They should preserve:

- `agency_lead_id: <LEAD_ID>` on root and child task metadata
- `site_slug: the-secret-kitchen-usa`
- `template_slug` / selected archetype: `Bamzi`
- current stage: `claimed` / seed-ready until approvals are resolved
- source artifact paths from the seed and workflow payloads
- child tasks for claimed, auditing, reviews, routing, building, QA rounds, packaging, and delivery
- blockers/confirmations for founder approval, photo rights, exact brand name, menu currentness, GetSeat, private dining, awards, lunch status, dietary positioning, and owner priority

## Guardrails

- Do not mark this lead build-ready from local packet existence alone.
- Do not contact the restaurant from this artifact.
- Do not publish a public preview unless Ethan explicitly approves a speculative pre-MC preview lane or owner confirmations are gathered.
- Do not invent third-party proof: ratings, review snippets, awards, capacities, press permissions, or photo rights.
- Keep `Bamzi` as the route lock unless a later audit documents an archetype mismatch.
