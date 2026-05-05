# Winestock Market & Lounge — Improvement Pass

- Date: 2026-05-04
- Updated: 2026-05-05T02:22:47Z
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Template: `bramble-01` / Bramble
- Local stage after this pass: `top_3_improvements`

## Improvements completed

1. **Sharper Winestock story** — added a restaurant-specific “three reasons locals return” section: market bottles, lounge nights, and boards/bites. This moves the first fork away from generic wine-bar copy and into the public-source Winestock identity.
2. **Review proof made sellable** — turned the captured Google Reviews Highest packet into visible proof: 4.9 / 52 / 30 stats plus exact review excerpts from the attached packet.
3. **Menu/offer clarity** — expanded the menu section with factual public-source categories: flatbreads, sandwiches, charcuterie + cheese boards, artisanal wines, craft beer, spirits, and non-alcoholic drinks.
4. **No fake conversion paths** — replaced the pretend email/signup and contact form with real public handoffs: mailto, phone, Facebook, directions, and in-page anchors.
5. **Screenshot reliability** — changed reveal wrappers so full-page screenshots do not hide below-fold content, while preserving the Bramble rhythm.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser screenshots captured from local production server at `http://127.0.0.1:3093`.
- Mobile visual QA: acceptable with caveats; no fatal overflow/clipping/fake-form blockers.
- Link check: no bad in-page anchors on `/` or `/reserve`; public email/call/Facebook/directions handoffs are present.

## Evidence

- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/capture-manifest.json`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-desktop-text.txt`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/home-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-desktop-text.txt`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/contact-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/improvement-pass-browser-2026-05-04/link-check.txt`
- `restaurant-website-system/sites/winestock/content.ts`
- `restaurant-website-system/sites/winestock/app/page.tsx`
- `restaurant-website-system/sites/winestock/app/reserve/page.tsx`
- `restaurant-website-system/sites/winestock/components/MailingListBlock.tsx`
- `restaurant-website-system/sites/winestock/components/DualServiceMenusSplit.tsx`
- `restaurant-website-system/sites/winestock/components/InlineInfoSplit.tsx`
- `restaurant-website-system/sites/winestock/components/TopTriptychHeader.tsx`
- `restaurant-website-system/sites/winestock/components/ScrollReveal.tsx`
- `restaurant-website-system/sites/winestock/components/OpeningTimesBlock.tsx`
- `restaurant-website-system/sites/winestock/components/PolaroidStrip.tsx`

