# La Hacienda Mexican Restaurant — Mission Control Writeback Runbook

- Date: 2026-05-05
- Lead ID: `7cba3fe2-8f65-4516-b46b-05c2c07ab235`
- Root task ID: `fd7f4976-daac-42aa-8c9a-1ddb09a9d12f`
- Local completed gate: `qa_round_3`
- Current gate: `delivery_package`
- Delivery status: blocked after local packaging

## Blocker

The trusted Mission Control base URL is reachable at `https://hq.ethantalreja.com`, but this OpenClaw runtime does not expose a usable `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` bearer token. A no-bearer request with `x-agency-runtime: openclaw` returns `HTTP/2 401`, so the agency API writeback was not submitted. Raw Supabase workflow-state mutation was intentionally skipped. Latest check: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/mc-api-access-check-2026-05-05.md`.

Final delivery is also blocked until an owner-shareable public preview URL exists and owner-sensitive facts are confirmed.

## Prepared payload

Submit `restaurant-website-system/sites/la-hacienda-mexican-restaurant/mission-control-writeback-payload-2026-05-05.json` to `https://hq.ethantalreja.com/api/agency/leads/7cba3fe2-8f65-4516-b46b-05c2c07ab235/build` once agency auth is configured.

Expected headers:

```
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Expected effect:

- Root task `metadata.build_stage` / `metadata.currentStage` remains or moves to `delivery_package`.
- Root task `metadata.lead_metadata` mirrors the audit-derived contact/location/order/review fields and their evidence.
- Root task `metadata.ready_to_pitch` stays `false` until founder review is explicitly recorded.
- Requirements through `qa-round-3` are marked passed with evidence paths.
- `delivery-package` remains blocked/pending until public preview URL, owner confirmation, and MC evidence mirroring are complete.
- The prepared local package, package manifest, owner confirmation packet, public preview runbook, pitch doc, battle cards, checklist, and QA evidence are attached/mirrored.

## Local package

- Archive: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-artifacts/la-hacienda-mexican-restaurant-local-package-2026-05-05.tar.gz`
- Manifest: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-artifacts/package-manifest-2026-05-05.md`
- Delivery package draft: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/delivery-package-2026-05-05.md`

## Do not mark delivered until

1. Public owner-shareable preview URL is attached.
2. Mission Control writeback succeeds through agency API.
3. Owner confirms or Ethan approves conservative handling for hours, order/provider flow, current menu/prices, review-count language, and public claims.
