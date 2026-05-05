# Tasty Bistro — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `4a61843f-7ce4-42d1-9971-1452aa311c47`
- Root task ID: `b19181d6-a00f-4d82-9c38-707c9dcb5372`
- Local completed gate: `auditing` evidence captured
- Local status: `blocked`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/tasty-bistro/mc-build-writeback-blocked-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

Expected headers:

```
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Expected effect:

- Root task `metadata.build_stage` / `metadata.currentStage` moves from `auditing` to `blocked`.
- Current-site audit requirement is marked passed with the evidence paths in the payload.
- Lead-fit/current-executability remains blocked because current browser/Google evidence says Crystal Lake Tasty Bistro closed/consolidated into Tasty Sushi/Cary.
- MC/founder should decide whether to retire the Crystal Lake workflow or create a new Cary-scoped Tasty Sushi workflow before any reviews/build work.
