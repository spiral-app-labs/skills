# Mackey's Hideout — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `742a8ab1-4205-49e0-9206-b97700045a79`
- Root task ID: `503320f6-a3e2-4286-887b-a7900ffaaed8`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/mackey-s-hideout/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

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
