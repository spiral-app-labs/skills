# Winestock Market & Lounge — Top 3 Improvements

- Date: 2026-05-04
- Updated: 2026-05-05T02:29:29Z
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Template: `bramble-01` / Bramble
- Local stage after this pass: `concierge`

## Top 3 improvements implemented

### 1. Above-fold conversion clarity

Before: the hero was mostly atmospheric with the Winestock wordmark, so a cold prospect could admire the mood but not immediately know what to do.

After: the hero now states the actual Winestock use case — Woodstock Square wine market + lounge — and adds two truthful actions: plan a visit by email and get directions. No fake reservations or ordering path were introduced.

### 2. Practical visit handoffs

Before: the page had proof and contact links, but visitors still had to infer whether Winestock was best for bottle help, lounge nights, or boards to bring home.

After: a new `VisitPlanner` section routes visitors into three real public-source use cases: bottle picks, live-music/lounge updates, and boards. Each card links to an actual public handoff: email or Facebook.

### 3. Mobile readability and CTA polish

Before: mobile QA accepted the first improvement pass with caveats around small secondary text.

After: secondary offer/contact copy was increased from small-body sizing where it mattered, the hero CTA stack was checked on 390px and 320px mobile widths, and link validation confirmed no broken in-page anchors.

## Before/after evidence

- **Above-fold conversion clarity** — before `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-mobile-full.png` / after `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-full.png`
- **Practical visit handoffs** — before `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-desktop-full.png` / after `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-desktop-full.png`
- **Mobile readability and smallest-width check** — before `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-mobile-full.png` / after `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-320-full.png`

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser screenshots captured from local production server at `http://127.0.0.1:3094`.
- Mobile visual QA passed at 390px with caveats and no fatal blockers.
- 320px mobile QA passed with caveats and no fatal blockers.
- Link check passed: no bad anchors; public email/call/Facebook/directions handoffs present.

## Evidence

- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/capture-manifest.json`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-320-full.png`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-desktop-text.txt`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/home-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-desktop-text.txt`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/contact-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/top-3-improvements-browser-2026-05-04/link-check.txt`
- `restaurant-website-system/sites/winestock/content.ts`
- `restaurant-website-system/sites/winestock/app/page.tsx`
- `restaurant-website-system/sites/winestock/components/HeroSlideshow.tsx`
- `restaurant-website-system/sites/winestock/components/VisitPlanner.tsx`
- `restaurant-website-system/sites/winestock/components/DualServiceMenusSplit.tsx`
- `restaurant-website-system/sites/winestock/components/InlineInfoSplit.tsx`
- `restaurant-website-system/sites/winestock/components/MailingListBlock.tsx`
- `restaurant-website-system/sites/winestock/app/reserve/page.tsx`

