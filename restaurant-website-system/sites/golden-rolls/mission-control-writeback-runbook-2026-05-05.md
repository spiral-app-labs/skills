# Golden Rolls — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `e5048ba5-21d5-4400-8673-f92e16954560`
- Root task ID: `c98d74ad-1a44-4df4-b313-bd20d675ae71`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase task mutation was intentionally skipped for agency workflow state.

## Payload

Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

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
- Do not mark ready_to_pitch; founder review and site-specific Anthropic key remain later blockers.


## Reviews-complete payload

Google Reviews Highest evidence is now captured locally. Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-reviews-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured. Expected effect: mark `reviews` passed, attach the review packet/screenshot/themes evidence, and move root `metadata.build_stage` / `metadata.currentStage` to `routing` (or the next build gate after routing if MC treats the existing template route as already satisfied).
