# Golden Rolls — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `e5048ba5-21d5-4400-8673-f92e16954560`
- Root task ID: `c98d74ad-1a44-4df4-b313-bd20d675ae71`
- Local completed gate: `auditing`
- Next gate: `reviews`

## Blocker

The trusted Mission Control base URL is reachable at `https://hq.ethantalreja.com`, but this OpenClaw runtime does not expose a usable `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` bearer token. A no-bearer request with `x-agency-runtime: openclaw` returns `HTTP/2 401`, so the agency API writeback was not submitted. Raw Supabase task mutation was intentionally skipped for agency workflow state. Latest check: `restaurant-website-system/sites/golden-rolls/mc-api-access-check-2026-05-05.md`.

## Payload

Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-auditing-complete-2026-05-05.json` to `https://hq.ethantalreja.com/api/agency/leads/e5048ba5-21d5-4400-8673-f92e16954560/build` once agency auth is configured.

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

Google Reviews Highest evidence is now captured locally. Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-reviews-complete-2026-05-05.json` to `https://hq.ethantalreja.com/api/agency/leads/e5048ba5-21d5-4400-8673-f92e16954560/build` once agency auth is configured. Expected effect: mark `reviews` passed, attach the review packet/screenshot/themes evidence, and move root `metadata.build_stage` / `metadata.currentStage` to `routing` (or the next build gate after routing if MC treats the existing template route as already satisfied).

## Packaging-progress payload

Golden Rolls has locally advanced through QA3 and packaging. Submit `restaurant-website-system/sites/golden-rolls/mc-build-writeback-packaging-progress-2026-05-05.json` to `POST https://hq.ethantalreja.com/api/agency/leads/e5048ba5-21d5-4400-8673-f92e16954560/build` once agency bearer auth is configured.

Fresh access evidence:

- Public preview check: `restaurant-website-system/sites/golden-rolls/public-preview-access-check-2026-05-06.md`
- MC API check: `restaurant-website-system/sites/golden-rolls/mc-api-access-check-2026-05-06.md`

Delivery must stay blocked until the Vercel preview is public/shareable or a bypass token exists, MC evidence is mirrored, and owner-changing facts are confirmed.
