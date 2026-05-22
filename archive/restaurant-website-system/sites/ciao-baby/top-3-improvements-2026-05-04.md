# Ciao Baby! — top 3 improvements

Date: 2026-05-04  
Stage: `top_3_improvements`  
Template: `gusto-01`

## Selection basis

Top-three fixes were selected from first-preview screenshot QA, browser metrics, and factual-safety review. The goal was to make the preview more sellable without changing the chosen `gusto-01` archetype.

## 1. Phone-first conversion instead of fake reservation expectation

**Problem before:** The hero/sidebar CTA said “Call for a table” and used a calendar icon, which implied a reservation flow even though the site intentionally avoids fake reservations.

**Implementation:**
- Changed the primary hero/sidebar CTA to “Call Ciao Baby.”
- Updated `BookATableButton` so `tel:` links render a phone icon.
- Added mobile quick nav pills: `Menu`, `Directions`, `Parties`.
- Added a higher `Get directions` CTA in the contact address card.

**Before evidence:**
- `scrapes/first-preview-browser-checks-2026-05-04.json`
- `screenshot-inventory-first-preview-2026-05-04.json`
- `screenshots/preview-home-mobile-2026-05-04.png`
- `screenshots/preview-contact-mobile-2026-05-04.png`

**After evidence:**
- `scrapes/improvement-pass-browser-checks-2026-05-04.json`
- `screenshot-inventory-improvement-pass-2026-05-04.json`
- `screenshots/improvement-pass-home-mobile-2026-05-04.png`
- `screenshots/improvement-pass-contact-mobile-2026-05-04.png`

## 2. Sourced review/menu proof instead of unsupported aggregate claims

**Problem before:** The first fork displayed `4.5 (324 Reviews)` and used labels like `Review-mentioned proof`, which could read as unsupported or invented unless tied to a specific source.

**Implementation:**
- Removed unsourced aggregate rating/review-count display from hero/menu proof cards.
- Replaced with a grounded label: “Praise themes from 30 written Google reviews.”
- Renamed `Review-mentioned proof` to `Customer-mentioned favorites`.
- Added “call to confirm current availability” language for review-derived/Ask-price items.

**Before evidence:**
- `content.ts` first-preview state referenced `rating: 4.5`, `reviewCount: 324`.
- `screenshots/preview-home-mobile-2026-05-04.png`
- `screenshots/preview-menu-mobile-2026-05-04.png`

**After evidence:**
- `components/StarRating.tsx`
- `components/HeroTestimonialCard.tsx`
- `content.ts`
- `screenshots/improvement-pass-home-mobile-2026-05-04.png`
- `screenshots/improvement-pass-menu-mobile-2026-05-04.png`

## 3. Mobile trust polish around hours, footer, and contact hero readability

**Problem before:** Mobile QA found customer-facing “hours conflict” wording, awkward long phone/address wrapping, confusing footer source labels, and contact hero readability risk from the exterior logo/photo behind the overlay.

**Implementation:**
- Replaced “hours conflict” wording with calmer “Hours may vary — call to confirm.”
- Renamed hours headings to `Publicly listed hours`.
- Swapped live open/closed status for a safer static verification pill.
- Strengthened the contact hero overlay opacity.
- Hid the long hero address/phone stamp on mobile and prevented footer phone wrapping.
- Replaced footer source/domain labels with useful guest actions: call, directions, menu.

**Before evidence:**
- `screenshots/preview-home-mobile-2026-05-04.png`
- `screenshots/preview-contact-mobile-2026-05-04.png`

**After evidence:**
- `screenshots/improvement-pass-home-mobile-2026-05-04.png`
- `screenshots/improvement-pass-contact-mobile-2026-05-04.png`
- Visual QA found no blocker after the second improvement capture.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed.
- Improvement-pass browser capture covered `/`, `/menu`, `/about`, `/contact` at desktop and mobile.
- `scrapes/improvement-pass-browser-checks-2026-05-04.json` reports zero horizontal overflow offenders across all routes/viewports.

## Remaining caveats

- Current hours, preferred domain, and any changed menu pricing still need owner verification before final delivery.
- Evidence is local-preview based until a public preview URL is created.
- Mission Control remote sync is pending official API auth; local payloads are prepared.
