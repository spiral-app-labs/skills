# Winestock Market & Lounge — First Fork Build Evidence

- Date: 2026-05-04
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Template: `bramble-01` / Bramble
- Local stage after this pass: `building`

## What was built

Forked the Bramble bar/lounge template into the existing Winestock site workspace without deleting checklist, scrape, routing, or Google review evidence. The first fork now uses Winestock-specific content: Cass Street address, phone/email/Facebook, wine market + lounge positioning, small plates/flatbreads/sandwiches/charcuterie, Google review proof, live-music/local-room language, and safe contact CTAs.

## First-fork personalization

- Replaced template brand/copy with `Winestock Market & Lounge` / `WINESTOCK`.
- Added a review-proof section: 4.9 Google snapshot, 52 reviews, 30 Highest-sort written reviews captured.
- Replaced fake reservation emphasis with contact/visit paths because the public sources confirm email, phone, Facebook, and address but not a dedicated reservation flow.
- Fixed template residue (`BRAMBLE MENU`) to use Winestock language.
- Fixed mobile overflow by hiding the desktop marquee on mobile and tightening the footer wordmark.

## Verification

- `npm install` completed for the fork.
- `npm run typecheck` passed.
- `npm run build` passed.
- Browser evidence captured from local production server at `http://127.0.0.1:3092`.
- Visual QA caveat: acceptable first fork; still sparse and needs improvement pass before sell-ready.

## Evidence

- `restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/capture-manifest.json`
- `restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/home-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/home-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/contact-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/first-fork-browser-2026-05-04/contact-mobile-full.png`
- `restaurant-website-system/sites/winestock/content.ts`
- `restaurant-website-system/sites/winestock/app/page.tsx`
- `restaurant-website-system/sites/winestock/components/DualServiceMenusSplit.tsx`
- `restaurant-website-system/sites/winestock/components/HorizontalMarquee.tsx`
- `restaurant-website-system/sites/winestock/components/BrambleWordmarkFooter.tsx`
- `restaurant-website-system/sites/winestock/app/globals.css`

