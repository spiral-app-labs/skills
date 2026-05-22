# Winestock QA Round 1 — factual accuracy + source fidelity

Date: 2026-05-05
Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
Template/archetype: `bramble-01` / Bramble
Local preview checked: `http://127.0.0.1:3094`

## Gate result

**Pass after fixes.** QA1 is complete with screenshots, source-fidelity findings, fixes applied, and build/typecheck evidence.

## Evidence captured

- Browser capture manifest: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/capture-manifest.json`
- Desktop home screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-desktop-full.png`
- Mobile home screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-mobile-full.png`
- Desktop contact/reserve screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-desktop-full.png`
- Mobile contact/reserve screenshot: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/reserve-mobile-full.png`
- Page text extracts: `restaurant-website-system/sites/winestock/evidence/qa-round-1-browser-2026-05-05/home-desktop-text.txt`, `home-mobile-text.txt`, `reserve-desktop-text.txt`, `reserve-mobile-text.txt`

## Checks run

- `npm run typecheck` — passed
- `npm run build` — passed
- Playwright/Chromium screenshot capture — passed for `/` and `/reserve` at 1440×900 and 390×844
- Screenshot QA image review — pass after fixes, no severe blockers

## Findings before fixes

1. **Opening strip felt broken** — the animated repeated “Opening Times” marquee read as clipped/repeated heading noise instead of a clear section title.
2. **Hero legibility needed a stronger sell-safe treatment** — overlay copy was readable but close to weak on mobile/photo backgrounds.
3. **Photo/polaroid area looked unfinished in browser evidence** — remote image cards could read like blank placeholders, weakening trust.
4. **Public-facing copy was too internal** — contact and concierge language referenced preview/fake/invented-claim guardrails instead of sounding like hospitality copy.

## Fixes applied

1. Replaced the animated repeated opening marquee with a single centered “Opening Times” title to avoid clipped-heading risk.
2. Strengthened the hero scrim and added a subtle content card/backdrop for more reliable contrast on desktop/mobile.
3. Reworked the scrapbook/polaroid strip into intentional branded Winestock moment cards so the section no longer depends on remote stock images and does not look like missing-image placeholders.
4. Rewrote contact and concierge copy into guest-facing hospitality language while preserving truthful handoffs for hours, pricing, availability, reservations, orders, events, and allergy questions.
5. Rebuilt and recaptured browser evidence after fixes.

## Post-fix QA observations

- `/` and `/reserve` returned HTTP 200 on desktop and mobile.
- No horizontal overflow was detected on 1440px desktop or 390px mobile.
- Placeholder/internal-copy scan returned no hits for `lorem`, `placeholder`, `TODO`, `TBD`, `sample`, `pretend`, `fake`, or `invent` in captured page text.
- Link audit recorded 20 handoffs/anchors. Mail, phone, Facebook, and Google Maps remain the truthful public conversion paths.
- A single browser console 404 was observed without an associated failed page response; no captured route returned an HTTP error. Treat as a non-blocking browser asset warning for QA1.
- Screenshot review found no severe blockers. Minor notes left for later QA rounds: some smaller body/hours text could be more readable on mobile; one cream spacing band may be tightened; mobile scrapbook cards intentionally clip at edges.

## Source-fidelity verdict

The page remains specific to Winestock Market & Lounge: Woodstock Square, Cass Street, wine market + lounge, small plates/boards/flatbreads/sandwiches, craft beer, live music, email/phone/Facebook/directions handoffs, and review-backed neighborhood-room tone. It does not add unverified ordering, reservation, pricing, private-event, or availability promises.

## Requirement status

- `qa-round-1`: **passed**

## Remaining blockers

- Public deploy/preview URL is still not attached locally; packaging/delivery must remain blocked until a real preview URL exists.
- QA2 and QA3 still need separate rounds and evidence before packaging/delivery.
