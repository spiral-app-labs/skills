# V's House — Mission Control Writeback Blocker

- Date: 2026-05-04
- Lead ID: `1006c1ea-5a06-4703-9994-117bc90d9dba`
- MC parent task: `41da188d-4629-4cb2-91f3-6be31d6b9b6d`
- PR: https://github.com/spiral-app-labs/skills/pull/1
- Vercel preview: `https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app`

## Current state

Packaging evidence exists locally and in the skills PR, including checklist files, audit, Google Highest 30 written-review packet, pitch doc, battle cards, outreach draft, delivery package, all three QA rounds, screenshots, local concierge runtime evidence, and protected-preview smoke evidence.

## MC API probe

Unauthenticated route probe against `https://hq.ethantalreja.com` showed:

- `GET /api/agency/leads/1006c1ea-5a06-4703-9994-117bc90d9dba` returns `401 Unauthorized`, route exists.
- `GET /api/agency/leads/1006c1ea-5a06-4703-9994-117bc90d9dba/qa-rounds` returns `401 Unauthorized`, route exists.
- `GET /api/agency/leads/1006c1ea-5a06-4703-9994-117bc90d9dba/build` returns `404`, so the `/build` route described in the sync contract is not present on the deployed MC app at probe time.
- `POST /api/heartbeat` succeeded and recorded heartbeat row `37972128-9264-435e-96de-284380246c0c` plus activity row `c3138254-7216-4c66-89da-4ded7d593401`.

## Blocker

OpenClaw does not currently have `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` in the runtime environment, so it cannot perform the authenticated lead/QA writeback. Per agency rules, no raw Supabase write was attempted while MC APIs exist.

## Prepared payload

See `restaurant-website-system/sites/vs-house/mc-writeback-payload-2026-05-04.json` for the exact lead patch and heartbeat payload to send once the agency API key is available or the MC writeback route is repaired.

## Next unblock action

Provide `AGENCY_AUTONOMY_API_KEY` to this OpenClaw runtime, or add/restore the documented `/api/agency/leads/:leadId/build` route and expose the key through the approved runtime secret path. Then send the prepared payload and mirror QA rounds/evidence to MC before delivery.
