# Ciao Baby! — first preview build notes

Date: 2026-05-04  
Branch: `chore/ciao-baby-fork-build`  
Template: `gusto-01`  
Local preview: `http://127.0.0.1:3084`

## What changed

- Forked/merged `restaurant-website-system/templates/gusto-01` into the existing `sites/ciao-baby` folder without deleting audit, review, screenshot, or scrape evidence.
- Replaced template content with Ciao Baby-specific `content.ts`.
- Updated all template imports away from `content.example`.
- Added Ciao Baby-specific nav/call handoffs, footer, heritage stamp, contact page direct handoffs, private-party proof, and accurate source caveats.
- Allowed Wix-hosted official imagery in `next.config.mjs`.
- Added a first-preview capture script: `scrapes/capture-preview-evidence.mjs`.

## Factual safety decisions

- Call CTA uses `(847) 381-3555`; no fake reservation widget.
- Contact page avoids a fake inquiry form and points guests to phone, directions, and public source links.
- Hours are labeled as posted/needs confirmation because public sources conflict.
- Menu rows distinguish source-backed priced items from review-mentioned proof items marked `Ask`.
- The two public-domain caveat remains visible in docs/links: `https://www.ciaobabyonline.com/` and `https://ciaobaby.net/` both appear official-looking and need owner confirmation before launch.

## Verification

- `npm ci` completed; audit still reports inherited Next.js dependency vulnerabilities: `2 vulnerabilities (1 moderate, 1 critical)`.
- `npm run typecheck` passed.
- `npm run build` passed.
- Browser/CDP preview evidence captured all core routes:
  - `screenshots/preview-home-desktop-2026-05-04.png`
  - `screenshots/preview-home-mobile-2026-05-04.png`
  - `screenshots/preview-menu-desktop-2026-05-04.png`
  - `screenshots/preview-menu-mobile-2026-05-04.png`
  - `screenshots/preview-about-desktop-2026-05-04.png`
  - `screenshots/preview-about-mobile-2026-05-04.png`
  - `screenshots/preview-contact-desktop-2026-05-04.png`
  - `screenshots/preview-contact-mobile-2026-05-04.png`
- Metrics saved in `scrapes/first-preview-browser-checks-2026-05-04.json` show zero horizontal overflow offenders on desktop and mobile for `/`, `/menu`, `/about`, `/contact`.
- Screenshot PNGs remain local evidence because `**/screenshots/` is ignored; tracked manifest `screenshot-inventory-first-preview-2026-05-04.json` records paths, sizes, and hashes.

## Next gate

Move to `improving`: run a focused improvement pass on mobile conversion strength, visual sellability, and proof hierarchy before top-three improvements.
