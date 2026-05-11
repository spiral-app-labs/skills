# Frato's Culinary Kitchen — Tooling Hardening — 2026-05-08

## Summary

Resolved the earlier non-blocking ESLint tooling gap and reduced package risk without changing the selected `Cuisine` / `pepper-01` design direction.

## Changes

- Added ESLint tooling required by `next lint` / `next build`:
  - `eslint@^8.57.1`
  - `eslint-config-next@^14.2.35`
- Upgraded Next within the current major line:
  - `next` from `14.2.15` to `^14.2.35`
- Upgraded direct PostCSS dev dependency:
  - `postcss` from `8.4.47` to `8.4.49`
- Updated `package-lock.json`.

## Verification

- `npm run lint` — passed with no warnings/errors
  - `evidence/lint-after-tooling-hardening-2026-05-08.txt`
- `npm run typecheck` — passed
  - `evidence/typecheck-after-tooling-hardening-2026-05-08.txt`
- `npm run build` — passed; previous missing-ESLint warning is gone
  - `evidence/build-after-tooling-hardening-2026-05-08.txt`
- Post-upgrade CDP screenshot smoke check passed with no horizontal overflow:
  - `qa/post-next-upgrade-cdp-capture-2026-05-08.jsonl`
  - `qa/screenshots/fratos-post-next-upgrade-home-mobile-390x844-2026-05-08.png`
  - `qa/screenshots/fratos-post-next-upgrade-home-desktop-1440x900-2026-05-08.png`

## Audit note

- `npm audit` no longer reports the previous critical Next.js item after the 14.2.35 upgrade.
- Remaining audit findings still require a semver-major jump to `next@16.2.6` / `eslint-config-next@16.2.6`; that is intentionally not applied inside this delivery pass because it would be a framework-major migration.
- Current audit evidence:
  - `evidence/npm-audit-after-postcss-8-4-49-2026-05-08.json`

## Delivery impact

- The local delivery package should be regenerated after this change because `package.json` / `package-lock.json` changed.
- Full Mission Control delivery remains blocked on protected agency auth and a public preview URL.
