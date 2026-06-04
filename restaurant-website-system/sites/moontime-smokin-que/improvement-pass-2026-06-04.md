# Moontime Smokin' Que Improvement Pass

Date: 2026-06-04
Lead ID: `788d0e2a-8fea-4a88-9d28-bbc0263959a6`
Task ID: `a969f455-cb55-4b45-b77d-f0aaca12a671`
Workflow step: `improvement_pass`
Template: `bramble-01`

## Top 3 Improvements

1. Added the anonymous auto-moving `ReviewCarousel` proof pattern.
   - Replaced the lighter review phrase rail with a real swipeable proof surface.
   - Uses duplicated cards for seamless wrap, `requestAnimationFrame` scroll, pause-on-hover/interaction, hidden scrollbars, and reduced-motion opt-out.
   - Cards render only stars, short review fragments, and `Google Review`; no reviewer names, initials, dates, avatars, or categories.

2. Tightened Moontime-specific copy in `content.example.ts`.
   - Shortened the hero proof line around Primitive Pits, blueberry chipotle ribs, smoked wings, and 20-300 guest catering.
   - Reworked the owner/story line around Heather and Joe Cummings, the 2017 catering/carryout start, and the downtown smokehouse/bar.
   - Sharpened the menu, proof, catering, and footer copy without changing verified links or adding unsupported claims.

3. Added small bramble-fit motion polish.
   - Added reduced-motion-aware hero parallax on the existing slideshow image.
   - Added a subtle hover lift/image zoom on the existing menu centerpiece.
   - Kept the existing section structure; no redesign, new animation library, reservation path, or new unverified conversion path.

## Before / After Notes

| Area | Before first preview | After improvement pass |
| --- | --- | --- |
| Review proof | Static phrase strip with short themes like `Hidden gem` and `Texas-approved brisket`. | Auto-moving, user-scrollable anonymous Google review carousel with 10 short quote cards duplicated for seamless wrap. |
| Hero / story copy | Dense proof and story lines with more list-like phrasing. | Shorter, more specific BBQ/catering pitch around Primitive Pits, smoked wings, blueberry chipotle ribs, and the 2017 owner story. |
| Catering path | Present in nav and info block, but less prominent in proof language. | Catering is reinforced in hero, proof strip, info block, CTA copy, email path, and footer links. |
| Motion | Bramble slideshow and existing reveal/polaroid motion. | Added light parallax and menu hover zoom while preserving the bramble rhythm. |

## Audit Finding Coverage Map

| Audit finding | Coverage in this pass | Evidence |
| --- | --- | --- |
| Homepage needed more trust evidence above/near first scroll. | Added review carousel and tightened proof strip copy around captured Google rating/reviews and review-backed smoke quality. | `components/ReviewCarousel.tsx`, `content.example.ts`, `improvement-preview-check-2026-06-04.json` |
| Catering deserved a stronger front-door path. | Reinforced 20-300 guest catering in hero, proof strip, info block, CTA, email, and footer. | `content.example.ts`, `components/ConversionFloor.tsx`, `components/BrambleWordmarkFooter.tsx` |
| Visitors need clear choices between dine-in, carryout, catering, gift cards, rewards, and directions. | Verified order, menu, catering/contact, call, email, directions, gift cards, rewards, Facebook, and Instagram links in static export. | `improvement-preview-check-2026-06-04.json` |
| Menu specifics should become a skimmable sales case. | Reframed menu heading and labels around ribs, wings, brisket, sandwiches, sides, sauces, and review-named sides/sauce. | `content.example.ts`, `components/DualServiceMenusSplit.tsx` |
| Small polish issues reduced confidence. | Tightened capitalization/phrasing and added restrained motion polish without changing the template architecture. | `content.example.ts`, `components/HeroSlideshow.tsx`, `components/DualServiceMenusSplit.tsx` |

## Conversion Path Verification

Verified in `out/index.html` and recorded in `improvement-preview-check-2026-06-04.json`:

| Path | Status | URL / target |
| --- | --- | --- |
| Order online | Passed | `https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a` |
| Menu | Passed | `https://moontimebbq.com/menu/` plus in-page `#menus` anchor |
| Catering / events | Passed | `https://moontimebbq.com/contact/` |
| Call | Passed | `tel:+17799947119` |
| Email | Passed | `mailto:catering@moontimebbq.com` |
| Directions | Passed | Google Maps search link for Moontime at `88 Railroad Street Unit A, Crystal Lake, IL 60014` |
| Gift cards | Passed | `https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/giftcards` |
| Rewards | Passed | `https://www.toasttab.com/moontime-smokin-que-88-railroad-street-unit-a/rewardsSignup` |
| Facebook | Passed | `https://www.facebook.com/moontimebbq/` |
| Instagram | Passed | `https://www.instagram.com/smokininthemoontime/` |
| Reservations | Not added | No verified reservation URL exists. Static check confirms no reservation/book-table path was introduced. |

## Mobile Check

Screenshot capture is blocked in this sandbox:

- Browser path: blocked with `Browser is not available: iab`.
- Dev server path: blocked with `listen EPERM: operation not permitted 127.0.0.1:3000`.

Static mobile-sensitive checks passed:

- `out/index.html` exists and includes the review carousel content.
- Mobile action bar keeps two primary actions and three secondary actions in fixed grids with stable button heights.
- Review cards use `w-[85vw] md:w-[440px]` so one card fits mobile width while desktop shows multiple cards.
- Review quotes are 8-18 words and anonymous; no reviewer names from the captured packet appear in the export.
- Carousel is not wrapped in `ScrollRevealScrapbook` / `whileInView`, avoiding opacity-stuck mobile preview behavior.

## Verification

- `npm run typecheck` - passed.
- `npm run build` - passed, generating static output under `out/`.
- Static export check - passed; see `improvement-preview-check-2026-06-04.json`.

Preview URL after pass:

- `file:///Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/moontime-smokin-que/out/index.html`

Evidence:

- `restaurant-website-system/sites/moontime-smokin-que/improvement-pass-2026-06-04.md`
- `restaurant-website-system/sites/moontime-smokin-que/improvement-check-output-2026-06-04.txt`
- `restaurant-website-system/sites/moontime-smokin-que/improvement-preview-check-2026-06-04.json`
- `restaurant-website-system/sites/moontime-smokin-que/out/index.html`

## Writeback / PR Status

- Mission Control PATCH payload is prepared at `restaurant-website-system/sites/moontime-smokin-que/mc-payloads/improvement-pass-build-writeback-2026-06-04.json`.
- Mission Control writeback is blocked in this sandbox because `hq.ethantalreja.com` does not resolve (`curl` exit 6); response captures are saved under `mc-payloads/`.
- PR creation is blocked before branch creation: a safe temporary-index commit from `origin/main` failed because Git could not insert objects into the repository database (`unable to create temporary file: Operation not permitted`).
