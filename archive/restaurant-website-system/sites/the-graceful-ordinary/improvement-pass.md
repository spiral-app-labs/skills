# The Graceful Ordinary — Improvement Pass Notes

- Date: 2026-05-06
- Preview: `https://graceful-ordinary-redesign.vercel.app`
- Selected archetype: `roma`
- Evidence captured:
  - `screenshots/current-preview-desktop-full.png`
  - `screenshots/current-preview-mobile-fold.png`
  - `scrapes/current-preview-dom-text.txt`

## Current preview strengths

- It already preserves the core brand line: “There is grace in the ordinary.”
- It correctly moves the site toward a cleaner, faster editorial structure than the official site.
- It includes chef/owner Chris Curren, Megan, hearth cooking, St. Charles, menu highlights, cocktails, reviews, and a reservation-led CTA.
- It visually points toward Roma/editorial rather than a generic casual restaurant template.

## Required improvement pass before this can be sell-ready

1. **Fix factual conversion links.** Preview Reserve links point to generic `https://resy.com`; replace with the exact official Resy path from source: `https://resy.com/cities/st-charles-il/venues/the-graceful-ordinary` or the official contact-page Resy URL. Generic Resy links are not acceptable.
2. **Fix rating/review facts.** Preview displays `4.8★ / 200+ Reviews`; Google Maps evidence captured this heartbeat shows `4.6` and `593 reviews`. Use the live Google number or avoid a numeric count if it may change.
3. **Remove/verify unsupported claims.** Preview says “AAA Three-Diamond-recognized team” and includes TripAdvisor/AAA quote language. The captured official site/Google evidence does not support those exact claims. Replace with supported press proof from the official press page unless separately verified.
4. **Replace fake/composite review quotes.** Preview includes quotes attributed to “TripAdvisor Guest,” “Verified Diner,” and “Google Review” that are not in the captured Google packet. Use themes or exact captured quotes only.
5. **Tighten owner/team copy.** Preserve Chris + Megan Curren and Jack Sonin/wine credentials from source, but avoid overclaiming “farm-driven” unless source-backed. Official phrase is “refined rustic” and weekly-changing menus.
6. **Bring press proof onto homepage.** Add a concise “As featured / awarded by” strip from the official press archive: Kane County Choice Awards, Chicago Magazine, FSR Magazine, Chicago Tribune, Eater Chicago, New York Times, Forbes, Daily Herald, etc.
7. **Strengthen mobile conversion.** Current preview mobile fold is image-heavy; add early Reserve / Menu / Directions / Call actions and consider sticky bottom actions.
8. **Clarify hours safely.** Official site has Saturday wording variance; do not invent simplified hours without reconciling. Use concise “Tue–Sun; reservations recommended” plus contact/details, or quote official blocks carefully.
9. **Preserve menu specificity.** Keep real items like Maytag Bleu Cheese, Humboldt Fog, Sea Bass, ribeye, mussels, Fig and the Furious, En Fuego, N/A options; avoid fake seasonal claims not currently sourced.
10. **Remove generic/template residue.** Official source has its own placeholder artifact on the menu page; the preview must be cleaner than the current site and should not introduce new placeholder/fake proof.

## Top 3 improvement candidates

1. **Truth-safe proof + reviews cleanup:** replace unsupported numeric/award/review claims with live Google evidence, exact review packet themes, and official press proof.
2. **Reservation conversion repair:** exact Resy URL, visible Reserve/Menu/Directions/Call above the fold and on mobile.
3. **Roma-specific homepage refinement:** turn the hero/story/menu/reviews flow into a restrained editorial narrative around refined-rustic hearth cooking, special occasions, and riverfront St. Charles ambience.

## Status

Improvement pass is started, not completed. The next implementation step should modify the preview/build source, then capture before/after screenshots and update MC with passed requirement IDs only after changes are actually deployed or visible in preview.

## Local v2 implementation update — 2026-05-06

Implemented a local improved fork under `sites/the-graceful-ordinary/` using the Roma-aligned `1776-redesign-01` scaffold while preserving existing audit/review artifacts.

### Changes made

- Added local app scaffold, components, theme, package files, and `.agency-template.json` pointing to `1776-redesign-01` with `archetype: roma`.
- Replaced template placeholder content in `content.example.ts` with Graceful Ordinary-specific source-truth copy.
- Repaired conversion links to the official Resy URL: `https://resy.com/cities/stc/the-graceful-ordinary` and `tel:+13312355803`.
- Replaced unsupported/composite review claims with anonymous short quotes from the captured Highest-filter Google packet.
- Changed the review block into the improvement-skill anonymous auto-scroll review carousel.
- Surfaced official press proof as a homepage marquee/list rather than unsupported awards language.
- Added official Webflow CDN images to Next image config so source assets render.
- Fixed mobile/header/hero rendering issues found in first screenshot pass by shortening header wordmark, bounding the floating pill, improving responsive type sizes, and deepening the hero scrim.

### Verification

- `npm run typecheck` — passed.
- `npm run build` — passed.
- Local dev server `http://127.0.0.1:3025` returned HTTP 200 for `/`, `/menu`, `/about`, `/contact`.
- After screenshots:
  - `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-desktop-v2.png`
  - `restaurant-website-system/sites/the-graceful-ordinary/screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`
- Image inspection after responsive fixes found no major rendering breakage. Remaining minor notes: the source image is soft/cropped on mobile and a light section begins immediately below the dark hero.

### Public-preview caveat

The local v2 fork is implemented and build-clean, but the public Vercel preview URL in MC (`https://graceful-ordinary-redesign.vercel.app`) has not been redeployed from this local source in this heartbeat. Do not treat the founder-facing preview as updated until deployment/preview evidence is captured.
