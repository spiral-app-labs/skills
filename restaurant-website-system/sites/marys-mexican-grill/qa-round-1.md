# Mary's Mexican Grill QA Round 1

- Scope note: This document records QA round 1 only. QA rounds 2 and 3, packaging, and delivery remain pending.
- Date: 2026-05-04
- Site: `marys-mexican-grill`
- Template/archetype: `bamzi-01`
- MC root task ID: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`

## Findings

1. Mobile header used desktop-sized brand and CTA treatment, which pushed the CTA off the right edge.
2. The hero eyebrow and headline did not constrain tightly enough on narrow screens, so text clipped instead of wrapping comfortably.
3. The primary CTA row stayed too wide on mobile and needed a stacked layout.
4. Hero meta badges and quick-action cards used spacing that was safe on desktop but crowded narrow viewports.
5. The bottom sticky action rail was too dense at four equal large labels and clipped at mobile widths.
6. The first desktop viewport ended with an awkward empty band below the hero stack.
7. The page needed an explicit no-horizontal-scroll guard at the root.

## Fixes Applied

1. Updated [SplitHeader.tsx](./components/SplitHeader.tsx) so mobile uses a compact header: smaller brand text, reduced CTA padding, and a short `Menu` label below `sm`.
2. Updated [DarkLeafHero.tsx](./components/DarkLeafHero.tsx) to enforce safer mobile wrapping for the eyebrow and headline, stack CTAs on small screens, stack meta badges vertically on mobile, and keep quick-action cards inside the viewport gutters.
3. Updated [MobileStickyActions.tsx](./components/MobileStickyActions.tsx) to use tighter spacing, smaller labels, and a shortened `Map` label for Directions so the four actions fit cleanly.
4. Updated [globals.css](./app/globals.css) to lock root horizontal overflow, preserve a minimum mobile width, and add mobile-only body padding so the sticky nav does not overlap content.
5. The home hero now uses a more intentional mobile/desktop minimum height balance, which also reduces the large empty desktop band in the first screen.

## Evidence Paths

- Post-fix desktop screenshot captured with Playwright: `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-1-desktop-2026-05-04.png`
- Post-fix mobile screenshot captured with Playwright mobile viewport: `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-1-mobile-2026-05-04.png`
- Post-fix homepage scrape: `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-1-homepage-html-2026-05-04.html`
- Browser dimension check: desktop `innerWidth=1440`, `scrollWidth=1440`; mobile `innerWidth=390`, `scrollWidth=390`, confirming no horizontal overflow in the captured viewport.
- Local QA payload: `restaurant-website-system/sites/marys-mexican-grill/mc-qa-round-1-writeback-2026-05-04.json`
- Local build-stage payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-qa-round-1-2026-05-04.json`

## Commands Run

- `npm run typecheck`
- `npm run build`
- `node -e "JSON.parse(require('fs').readFileSync('restaurant-website-system/sites/marys-mexican-grill/checklist.json', 'utf8')); JSON.parse(require('fs').readFileSync('restaurant-website-system/sites/marys-mexican-grill/mc-qa-round-1-writeback-2026-05-04.json', 'utf8')); JSON.parse(require('fs').readFileSync('restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-qa-round-1-2026-05-04.json', 'utf8')); console.log('json ok')"`
- Playwright screenshot recapture using production `next start` on `127.0.0.1:4318` for desktop `1440x1200` and mobile `390x1200` viewports.

## Remaining Risks / Blockers

- Browser screenshot recapture completed locally with Playwright; the browser dimension check showed no horizontal overflow at desktop or mobile widths.
- Mission Control writeback is blocked in this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable, so round-1 sync is recorded locally only.
