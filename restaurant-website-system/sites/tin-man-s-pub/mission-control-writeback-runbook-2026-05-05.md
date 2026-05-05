# Tin Man's Pub — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `016b951a-6ed7-4687-ad56-3dd34d97a6ca`
- Root task ID: `173436b8-bcc1-4ebd-85ac-44b2541409dc`
- Local completed gate: `auditing` evidence captured
- Local status: `blocked` / hold for MC decision

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/tin-man-s-pub/mc-build-writeback-blocked-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

Expected headers:

```
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Expected effect:

- Root task `metadata.build_stage` / `metadata.currentStage` moves from `auditing` to `blocked`.
- Current-site audit requirement is marked passed with the evidence paths in the payload.
- Lead-fit/current-executability remains blocked because browser evidence shows weak fit/reputation/menu proof risk.
- MC/founder should decide skip/nurture vs explicitly approved stripped-down Bramble pub build before any reviews/build work.
