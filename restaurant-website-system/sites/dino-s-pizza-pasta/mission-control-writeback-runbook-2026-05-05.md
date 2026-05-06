# Dino's Pizza & Pasta — Mission Control Writeback Runbook

- Date prepared: 2026-05-05
- Lead ID: `da8188e5-7830-43ec-b908-661cf2e56b30`
- MC parent task ID: `0d4123df-83b0-4d81-bc75-88263ebb402b`
- Payload file: `restaurant-website-system/sites/dino-s-pizza-pasta/mission-control-writeback-payload-2026-05-05.json`

## Current state

Dino’s is in `packaging` locally. All build/QA gates through `qa_round_3` have passed locally. Delivery is blocked, not delivered.

## Why this runbook exists

Mission Control API writeback is required. This runtime now has a trusted Mission Control base URL candidate (`https://hq.ethantalreja.com`), but it does not have a usable agency API bearer token configured (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`). The old `https://os.ethan.com` example still fails TLS hostname validation. Raw Supabase writes are forbidden for agency work.

This file prepares the exact payloads to submit once a trusted MC agency API token is available. Latest access check: `restaurant-website-system/sites/dino-s-pizza-pasta/mc-api-access-check-2026-05-05.md`.

## Required API auth

Use the agency API only:

```http
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Do not use raw Supabase writes.

## Writeback order

1. Read lead first:
   - `GET https://hq.ethantalreja.com/api/agency/leads/da8188e5-7830-43ec-b908-661cf2e56b30`
2. Submit build payload from `build_payload`:
   - `POST https://hq.ethantalreja.com/api/agency/leads/da8188e5-7830-43ec-b908-661cf2e56b30/build`
   - If POST is not accepted, use `PATCH` on the same route.
3. Submit all three `qa_round_payloads`:
   - `POST https://hq.ethantalreja.com/api/agency/leads/da8188e5-7830-43ec-b908-661cf2e56b30/qa-rounds`
4. Submit heartbeat/activity payload if the build/QA routes do not already log enough activity:
   - `POST https://hq.ethantalreja.com/api/heartbeat`
   - optional `POST https://hq.ethantalreja.com/api/activity`
5. Re-read the lead and verify MC mirrors:
   - `build_stage/currentStage = packaging`
   - checklist paths
   - passed requirement IDs through `qa-round-3`
   - blocked delivery requirements
   - blockers for preview URL, MC writeback, and owner confirmation
   - local package/archive and runbook paths

## Delivery must remain blocked until

- Public owner-shareable preview URL is available.
- Owner-sensitive facts are confirmed.
- MC contains/persists all evidence paths and QA rounds.

## Payload note

The payload intentionally includes `preview_url: null` / `vercel_preview_url: null` because a public preview URL is still missing. Do not replace that with the local `http://127.0.0.1:3076` URL for owner delivery.
