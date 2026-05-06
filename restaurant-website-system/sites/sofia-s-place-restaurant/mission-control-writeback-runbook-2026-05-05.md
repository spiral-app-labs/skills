# Sofia's Place Restaurant — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `ad091f40-f7c7-48bb-bd00-7c6b9c7b7dec`
- Root task ID: `e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/sofia-s-place-restaurant/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

Expected headers:

```
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Expected effect:

- Root task `metadata.build_stage` / `metadata.currentStage` moves from `auditing` to `reviews`.
- Current-site audit requirement is marked passed with the evidence paths in the payload.
- Previous browser blocker about `No supported browser found` is cleared.
- Preserve the new blocker: address/current-location confirmation is required before build/fork copy because Google/marketplaces point to Wauconda while Restaurantji/Yelp/web snippets still point to Island Lake.
