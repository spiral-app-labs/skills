# Ciao Baby! — improvement pass

Date: 2026-05-04  
Stage: `improving`  
Template: `gusto-01`  
Local preview: `http://127.0.0.1:3084`

## Goal

Tighten the first fork for mobile conversion, factual safety, and sellability without drifting away from the `gusto-01` structure.

## Fixes implemented

1. **Phone-first conversion clarity**
   - Changed the hero sidebar CTA from “Call for a table” to “Call Ciao Baby.”
   - Updated the template CTA icon so `tel:` links show a phone glyph instead of a calendar/reservation glyph.
   - Added mobile nav pills for `Menu`, `Directions`, and `Parties` under the sticky header.
   - Added a higher `Get directions` CTA inside the contact address card.

2. **Factual-safety cleanup**
   - Removed unsourced aggregate rating/review-count display from hero/menu proof cards.
   - Replaced it with a sourced proof label: “Praise themes from 30 written Google reviews.”
   - Softened menu review-derived language: `Review-mentioned proof` became `Customer-mentioned favorites`, and availability notes now say to call to confirm.
   - Replaced customer-facing “hours conflict” phrasing with calmer “hours may vary — call to confirm.”
   - Renamed hours headings to `Publicly listed hours`.

3. **Mobile/readability polish**
   - Strengthened the contact hero overlay opacity to prevent the exterior logo/photo from competing with the `Visit Ciao Baby` title.
   - Hid the long hero address/phone stamp on mobile to avoid awkward phone-number wrapping.
   - Added `whitespace-nowrap` to footer phone link.
   - Removed confusing footer source/domain labels from the public footer action row and replaced them with Call, Directions, and Menu.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Restarted local preview at `http://127.0.0.1:3084`.
- Captured desktop + mobile evidence for `/`, `/menu`, `/about`, `/contact`.
- `scrapes/improvement-pass-browser-checks-2026-05-04.json` reports zero horizontal overflow offenders across all captured routes/viewports.
- Visual QA of updated mobile home/contact screenshots found no blocker to marking the improvement pass complete.

## Evidence

- `restaurant-website-system/sites/ciao-baby/improvement-pass-2026-05-04.md`
- `restaurant-website-system/sites/ciao-baby/scrapes/improvement-pass-browser-checks-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-improvement-pass-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-home-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-menu-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-about-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/improvement-pass-contact-mobile-2026-05-04.png`

## Remaining caveats

- Public deploy URL is still TBD; evidence is local-preview based.
- Mission Control remote sync is pending official API auth in this runtime.
- Owner still needs to verify preferred domain, exact current hours, and whether any source-backed prices changed.
