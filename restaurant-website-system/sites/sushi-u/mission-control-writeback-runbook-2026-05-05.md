# Sushi U — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `8dce758b-d6d8-45b9-9971-70e6810569fb`
- Root task ID: `b5ce710c-c4b4-431e-a258-82fb71ab60a0`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

This OpenClaw runtime does not expose `AGENCY_AUTONOMY_API_KEY` or a trusted Mission Control base URL, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped.

## Payload

Submit `restaurant-website-system/sites/sushi-u/mc-build-writeback-auditing-complete-2026-05-05.json` to the Mission Control agency build writeback route once auth/base URL are configured.

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
- Preserve the audit nuance: Sushi U has a real site/order path; the sell story is SSL/crawler + PDF-menu/mobile-search friction and conversion polish, not no-site.
