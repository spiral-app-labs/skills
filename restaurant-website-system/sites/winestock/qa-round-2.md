# Winestock QA Round 2 — mobile polish + conversion clarity

Date: 2026-05-05
Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
Template/archetype: `bramble-01` / Bramble
Local preview checked: `http://127.0.0.1:3094`

## Gate result

**Pass.** QA2 is complete with a separate screenshot set, fixes, build/typecheck evidence, and Mission Control writeback.

## Evidence captured

- Browser capture manifest: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/capture-manifest.json`
- Desktop home screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-desktop-full.png`
- Mobile home screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-full.png`
- 320px mobile home screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/home-mobile-320-full.png`
- Desktop contact/reserve screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-desktop-full.png`
- Mobile contact/reserve screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-full.png`
- 320px mobile contact/reserve screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-2-browser-2026-05-05/reserve-mobile-320-full.png`

## Checks run

- `git diff --check` — passed
- `npm run typecheck` — passed
- `npm run build` — passed
- Playwright/Chromium screenshot capture — passed for `/` and `/reserve` at 1440×900, 390×844, and 320×720
- Screenshot QA image review — pass, no severe blockers

## Findings before fixes

1. Some mobile hours/body text remained harder to read than the rest of the page.
2. The cream scrapbook/hours region felt more spacious than necessary after QA1, creating a mild unfinished-spacer risk.
3. Conversion handoffs were correct, but QA2 rechecked them after copy changes to make sure contact/bottle/Facebook/directions remained clear.

## Fixes applied

1. Rebuilt the Opening Times block into readable cards with larger time text and a tighter section rhythm.
2. Tightened the scrapbook/polaroid strip vertical padding so the cream section feels intentional rather than blank.
3. Rebuilt and recaptured desktop/mobile/320px evidence after the spacing/readability fixes.

## Post-fix QA observations

- `/` and `/reserve` returned HTTP 200 at all tested viewports.
- No horizontal overflow was detected at 1440px, 390px, or 320px.
- Placeholder/internal-copy scan returned no hits for `lorem`, `placeholder`, `TODO`, `TBD`, `sample`, `pretend`, `fake`, or `invent` in captured page text.
- Link audit recorded 20 handoffs/anchors. Email, phone, Facebook, Google Maps, and in-page menu/section anchors remain the intentional public conversion paths.
- Screenshot review found no severe blockers. Minor notes left for QA3: some small review/card/footer copy can still be improved; a large desktop cream band should be checked one more time; confirm footer date is intentional.

## Requirement status

- `qa-round-2`: **passed**

## Remaining blockers

- QA3 still needs a final sell-readiness pass and evidence before packaging.
- Public deploy/preview URL is still not attached locally; packaging/delivery must remain blocked until a real preview URL exists.
- Founder-only gates remain outside this local QA pass: site-specific Anthropic key and Ethan human review.
