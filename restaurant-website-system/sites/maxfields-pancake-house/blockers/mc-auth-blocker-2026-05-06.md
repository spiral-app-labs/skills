# Maxfield's Pancake House — MC Auth Blocker

Date: 2026-05-06

## Blocker

Mission Control agency API writeback could not be completed from this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are not present. Authenticated MC agency endpoints returned `401 Unauthorized` with `x-agency-runtime: openclaw`.

## What was tried

- Checked local/runtime env for agency auth presence.
- Called `/api/agency/website-workflow/next?limit=20` on localhost and production with `x-agency-runtime: openclaw`; both returned 401.
- Per agency rules, no raw Supabase writes were performed. A read-only check found no existing `agency_leads` row matching Maxfield.

## Local work completed

- Current-site/public-presence audit created.
- Official domain and non-www domain captured as Wix `ConnectYourDomain` / HTTP 404.
- Browser/CDP screenshots saved for official domain desktop/mobile and public source evidence.
- Checklist artifacts generated locally.
- Exact writeback payload prepared at `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-auditing-2026-05-06.json`.

## Next unblock action

Expose the agency API secret to OpenClaw or manually provision the Maxfield agency lead/workflow in Mission Control, then submit the prepared build payload and continue to the Google Reviews gate.
