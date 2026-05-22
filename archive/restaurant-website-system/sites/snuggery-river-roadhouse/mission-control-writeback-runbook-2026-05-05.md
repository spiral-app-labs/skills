# Snuggery River Roadhouse — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `713dec87-03c2-4782-ad16-93d72368d130`
- Root task ID: `28641d8b-ed9c-4fc3-9326-9c3436bbdc31`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/snuggery-river-roadhouse/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

Expected headers:

```
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Expected effect:

- Root task `metadata.build_stage` / `metadata.currentStage` moves from `auditing` to `reviews`.
- Current-site audit requirement is marked passed with the evidence paths in the payload.
- Previous browser blocker about `No supported browser found` is cleared/replaced by the next reviews-gate requirement.
- Audit notes should preserve the nuance that Snuggery has a real current site; the opportunity is conversion/technical-access improvement, not a no-site claim.
