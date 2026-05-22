# Frato's Culinary Kitchen — Delivery Artifact Manifest — 2026-05-08

This local artifact bundle is a handoff/preview package only. It is not a public preview URL.

## Bundle

- `delivery-artifacts/fratos-culinary-kitchen-local-delivery-2026-05-08.tar.gz`
- Size: ~61 MB
- SHA256: see `delivery-artifacts/fratos-culinary-kitchen-local-delivery-2026-05-08.tar.gz.sha256`

## Included

- Site source: `app/`, `components/`, `lib/`, config files, package files, content files
- Pitch/delivery artifacts: pitch doc, battle cards, top-three improvements, concierge KB/transcript, delivery package
- QA reports and screenshots
- Evidence logs and MC replay payloads
- Replay helper: `scripts/replay-fratos-mc-payloads.mjs`

## Excluded

- `node_modules/`
- `.next/`
- transient browser/cache files

## Recreate/check

```sh
cd restaurant-website-system/sites/fratos-culinary-kitchen
npm install
npm run typecheck
npm run build
```

ESLint tooling was added on 2026-05-08. `npm run lint`, `npm run typecheck`, and `npm run build` pass on `next@14.2.35`.

## MC replay once protected auth is restored

```sh
cd restaurant-website-system/sites/fratos-culinary-kitchen
AGENCY_AUTONOMY_API_KEY=... node scripts/replay-fratos-mc-payloads.mjs --apply
# or
OPENCLAW_WEBHOOK_SECRET=... node scripts/replay-fratos-mc-payloads.mjs --apply
```

Full delivery still needs a public preview/deploy URL before MC should be marked delivered.
