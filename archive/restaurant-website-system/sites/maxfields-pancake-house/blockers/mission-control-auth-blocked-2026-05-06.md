# Mission Control sync blocker — Maxfield's Pancake House

Captured: 2026-05-06 CDT

## Blocker

Mission Control agency API write/read is blocked because neither required auth secret is available in this OpenClaw environment:

- `AGENCY_AUTONOMY_API_KEY`: missing
- `OPENCLAW_WEBHOOK_SECRET`: missing

Per `agency-mission-control-sync`, agency lead/build workflow updates must use Mission Control APIs with:

- `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY`
- `x-agency-runtime: openclaw`
- `Content-Type: application/json`

Direct Supabase writes were intentionally not used.

## Probe results

Saved probe artifact: `scrapes/mc-api-probe-2026-05-06.txt`

Observed API responses without auth:

- `http://localhost:3010/api/agency/website-workflow/next?limit=20` → HTTP 401 `Unauthorized.`
- `http://localhost:3000/api/agency/website-workflow/next?limit=20` → no local server connection
- `https://hq.ethantalreja.com/api/agency/website-workflow/next?limit=20` → HTTP 401 `Unauthorized.`

## Impact

- Could not verify whether Maxfield already exists as a Mission Control agency lead/workflow root.
- Could not create/provision the lead if missing.
- Could not set/refresh `build_stage` to `auditing` in MC.
- Local checklist, audit, evidence, screenshots, and exact prepared writeback payload were created so replay can happen once auth is available.

## Required unblock

Provide/export `AGENCY_AUTONOMY_API_KEY` for this environment, then replay the prepared payload:

- `mc-build-writeback-auditing-2026-05-06.json`

Potential target routes once the lead ID is known/provisioned:

- `GET /api/agency/leads/:leadId`
- `POST/PATCH /api/agency/leads/:leadId/build`
- `PATCH /api/agency/leads/:leadId`
- `POST /api/heartbeat`
