# Winestock Packaging Packet

Date: 2026-05-05
Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
Current MC stage: `packaging`
Template/archetype: `bramble-01`

## Packaging status

**In progress / blocked for final delivery.**

The local sell-readiness package is assembled, and all three QA rounds have passed with evidence. Final delivery must remain blocked until a real public preview/deploy URL is attached and founder/operator gates are complete.

## Public preview URL

- Status: **missing / required before delivery**
- Blocker source: `packaging_preview_url`
- Required next action: attach the real Vercel/public preview URL in Mission Control; do not invent or backfill from dashboard/check URLs.

## Founder/operator gates still required

- Site-specific Anthropic key setup for the concierge production path.
- Ethan human review.

## Included artifacts

### Core checklist

- `restaurant-website-system/sites/winestock/checklist.md`
- `restaurant-website-system/sites/winestock/checklist.json`

### Source/evidence

- Current-site/public source scrape: `restaurant-website-system/sites/winestock/scrapes/current-site-text.txt`
- Google Reviews Highest packet: `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.json`
- Google Reviews markdown packet: `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md`
- Google Highest filter screenshot: `restaurant-website-system/sites/winestock/scrapes/google-highest-sort-visible-2026-05-04.png`

### Routing/build

- Template routing rationale: `restaurant-website-system/sites/winestock/routing.md`
- Build evidence: `restaurant-website-system/sites/winestock/build-evidence-2026-05-04.md`
- Selected template: `bramble-01`

### Concierge

- Concierge route: `restaurant-website-system/sites/winestock/app/api/concierge/route.ts`
- Concierge UI: `restaurant-website-system/sites/winestock/components/TruthfulConcierge.tsx`
- Concierge KB: `restaurant-website-system/sites/winestock/lib/concierge-kb.ts`

### Pitch collateral

- Pitch doc: `restaurant-website-system/sites/winestock/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/winestock/battle-cards.md`

### QA Round 1

- Report: `restaurant-website-system/sites/winestock/qa-round-1.md`
- Manifest: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/capture-manifest.json`
- Screenshots:
  - `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-mobile-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-mobile-full.png`
- MC writebacks:
  - `restaurant-website-system/sites/winestock/mc-qa-round-1-writeback-2026-05-05.json`
  - `restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-2026-05-05.json`
  - `restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-1-clear-blocker-2026-05-05.json`

### QA Round 2

- Report: `restaurant-website-system/sites/winestock/qa-round-2.md`
- Manifest: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/capture-manifest.json`
- Screenshots:
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-320-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-320-full.png`
- MC writebacks:
  - `restaurant-website-system/sites/winestock/mc-qa-round-2-writeback-2026-05-05.json`
  - `restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-2-2026-05-05.json`

### QA Round 3

- Report: `restaurant-website-system/sites/winestock/qa-round-3.md`
- Manifest: `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/capture-manifest.json`
- Screenshots:
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/home-mobile-320-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-desktop-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-full.png`
  - `restaurant-website-system/sites/winestock/evidence/qa-round-3-browser-2026-05-05/reserve-mobile-320-full.png`
- MC writebacks:
  - `restaurant-website-system/sites/winestock/mc-qa-round-3-writeback-2026-05-05.json`
  - `restaurant-website-system/sites/winestock/mc-build-writeback-qa-round-3-packaging-blocker-2026-05-05.json`

## Build/test gates

Most recent gates:

- `git diff --check` — passed
- `npm run typecheck` — passed
- `npm run build` — passed
- QA3 Playwright/Chromium capture — passed
- QA3 final screenshot review — passed, no severe sellability blockers

## Delivery rule

Do **not** mark delivered until Mission Control includes the public preview URL, all packaging evidence, site-specific Anthropic key status, and Ethan human review.
