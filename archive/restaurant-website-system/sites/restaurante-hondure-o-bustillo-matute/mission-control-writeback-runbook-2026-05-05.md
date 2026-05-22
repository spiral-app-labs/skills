# Restaurante Hondureño Bustillo Matute — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `56fc8804-0359-4db2-b248-97e3e0191e32`
- Root task ID: `cc4330f0-b3e9-4ed5-8036-292649576916`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/restaurante-hondure-o-bustillo-matute/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

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
