# The Graceful Ordinary — Top 3 Sellability Improvements

- Date: 2026-05-06
- Stage: `top_3_improvements`
- Selected archetype/template direction: `roma` / local scaffold `1776-redesign-01`
- Public preview currently recorded in MC: `https://graceful-ordinary-redesign.vercel.app`
- Local verification preview used for implementation evidence: `http://127.0.0.1:3025`

## Ranked top 3

### 1. Truth-safe proof system: reviews + press

**Owner-visible value:** The restaurant already has serious credibility, but the old/current preview used unsupported/composite proof. A sellable version should make Ethan look careful and trustworthy: exact Google review themes, no reviewer names, no fake platform labels, no unsupported AAA/TripAdvisor-style claims, and official press proof surfaced on the homepage.

**Implemented locally:**

- Replaced named/static testimonial grid with an anonymous auto-scrolling Google review carousel in `components/TestimonialCardGrid.tsx`.
- Used short fragments from the captured Highest-filter Google packet only.
- Added official press signals to the marquee and about/menu proof sections.
- Removed unsupported/composite proof language from local content.

**Evidence:**

- Before/current public preview screenshot: `screenshots/current-preview-desktop-full.png`
- Source review packet: `reviews/google-reviews-highest.md`
- After source: `content.example.ts`, `components/TestimonialCardGrid.tsx`
- After screenshots: `screenshots/improvement-pass/local-improved-home-desktop-v2.png`, `screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`

### 2. Conversion repair: exact reservation/call paths + mobile legibility

**Owner-visible value:** The main CTA must not send diners to generic Resy. The improved source needs exact reserve, call, menu, and contact paths so the redesign can credibly claim better conversion.

**Implemented locally:**

- Replaced generic `https://resy.com` with `https://resy.com/cities/stc/the-graceful-ordinary`.
- Added `tel:+13312355803` call CTAs.
- Verified `/`, `/menu`, `/about`, and `/contact` return HTTP 200 locally.
- Fixed mobile/header/hero rendering issues from the first screenshot pass: bounded the floating header pill, shortened the mobile wordmark, improved responsive display type, and deepened the hero scrim for legibility.

**Evidence:**

- Before/current preview DOM text: `scrapes/current-preview-dom-text.txt`
- After source: `content.example.ts`, `components/FloatingHeaderPill.tsx`, `components/FullBleedHero.tsx`, `components/DisplayHeading.tsx`
- After screenshots: `screenshots/improvement-pass/local-improved-home-desktop-v2.png`, `screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`
- Verification: `npm run typecheck`, `npm run build`, and local route 200 checks passed on 2026-05-06.

### 3. Roma-specific repositioning: refined-rustic editorial identity

**Owner-visible value:** The pitch should not feel like a generic premium restaurant reskin. The improved fork should feel like The Graceful Ordinary: refined rustic, open hearth, Chris + Megan Curren, St. Charles/Fox River, wine/cocktail credibility, seasonal menu specificity, and special-occasion review language.

**Implemented locally:**

- Forked/copied the warm editorial `1776-redesign-01` scaffold into the site workspace, preserving all audit/review artifacts.
- Wrote Graceful Ordinary-specific source-truth content across homepage, menu, about, and contact.
- Used real menu/review items: Maytag Bleu Cheese, Sea Bass, Venison, The Fig and the Furious, TGO Clover, Cabin Fever, beignets, press archive names.
- Preserved factual caution around Saturday lunch/brunch inconsistency instead of inventing simplified hours.

**Evidence:**

- Route decision: `routing.md`
- Local template metadata: `.agency-template.json`
- After source: `content.example.ts`
- After screenshots: `screenshots/improvement-pass/local-improved-home-desktop-v2.png`, `screenshots/improvement-pass/local-improved-home-mobile-fold-v2.png`

## Verification gates passed locally

- `npm run typecheck` passed.
- `npm run build` passed.
- Local dev route checks returned 200 for `/`, `/menu`, `/about`, `/contact` on `127.0.0.1:3025`.
- Screenshot/image inspection found no major rendering breakage after the v2 responsive fixes.

## Remaining caveat before this is founder-facing

The three improvements are implemented in the local source workspace and evidenced with local screenshots, but the MC public preview URL still points to `https://graceful-ordinary-redesign.vercel.app`. Do **not** claim the public preview has these top-three changes until it is redeployed or replaced with an updated preview URL and screenshots.
