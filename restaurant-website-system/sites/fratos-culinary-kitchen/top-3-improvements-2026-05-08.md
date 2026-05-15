# Frato's Culinary Kitchen — Top 3 Improvements Evidence — 2026-05-08

## Scope

- Lead: `Frato's Culinary Kitchen`
- Lead ID: `cec3f7af-ab8d-4785-af76-e57e743cdf25`
- MC root task ID: `fdead14c-0079-4168-b6b7-c8b80218a681`
- Prior gate: `improvement_pass` / `improving`
- Current gate: `top_three_improvements` / `top_3_improvements`
- Template/archetype: `Cuisine` / `pepper-01`

This artifact formalizes the three highest-leverage v2 improvements that were implemented and validated after the first fork build. It does not redesign the site or change the archetype; it preserves the order-first casual pizza/takeout structure and upgrades proof, first-fold conversion, and mobile exploration.

## 1. Anonymous Google-review proof carousel

### Why this mattered

The initial proof section read like a static template testimonial band. Frato's strongest pitch asset is real guest language around the giant mozzarella stick, cheese pull, ghost pepper wings, fresh-made portions, burgers, pizza, and casual vibe. Moving that proof into an interactive anonymous carousel makes the page feel more alive and more specific to Frato's.

### What changed

- Homepage now uses `AnonReviewCarousel` instead of the static testimonial band.
- Reviews render without names, avatars, dates, or fake attribution.
- Cards show only stars, a short quote fragment, and `Google Review` platform tagging.
- Carousel uses JS `scrollLeft` auto-scroll, duplicated items for seamless wrap, user drag/swipe support, hover pause, 4-second pause after touch/pointer/wheel, and reduced-motion safety.

### Evidence

- `components/AnonReviewCarousel.tsx`
- `app/page.tsx`
- `google-reviews/google-reviews-highest-30-2026-05-08.json`
- `google-reviews/google-reviews-summary-2026-05-08.md`
- `improvements/screenshots/fratos-improvement-home-desktop-2026-05-08.png`
- `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png`

## 2. Stronger first-fold CTA hierarchy and appetizing hero treatment

### Why this mattered

Frato's primary conversion path is online ordering. The first pass had the correct order-first structure, but the hero CTA hierarchy and image treatment were too soft in screenshot QA. The v2 pass needed to make ordering obvious while keeping menu browsing available.

### What changed

- `Order Online` now uses the locked Frato's/pepper brand red as the dominant first-fold CTA.
- `View Menu` is a readable outlined secondary CTA instead of competing equally with order.
- Hero image overlay was reduced and image contrast/saturation tuned so the food reads warmer and less washed out.
- First-load hero opacity animation was disabled to avoid headless/mobile captures catching a half-rendered, faded first fold.
- Proof pills above the headline now read: `4.2 stars / 554 Google reviews`, `Since 1975`, and `Online pickup + delivery`.

### Evidence

- `components/ConfettiHero.tsx`
- `content.example.ts`
- `theme.ts`
- `improvements/screenshots/fratos-improvement-home-desktop-2026-05-08.png`
- `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png`

## 3. Mobile conversion/exploration polish

### Why this mattered

The mobile first fold needs to keep ordering immediate while also exposing menu, catering, directions, and call paths without forcing a scroll hunt. This is especially important for a neighborhood carryout/delivery restaurant with catering and office-lunch upside.

### What changed

- Sticky mobile chrome now keeps the primary `Order Online` CTA visible.
- Added a compact quick-link rail for `Menu`, `Catering`, `Directions`, and `Call`.
- Added verified directions path into site content and supporting sections.
- Added global horizontal overflow guard and tightened header CTA spacing for mobile.
- Re-captured mobile evidence through CDP device metrics after the first command-line headless screenshot produced a false clipping artifact.

### Evidence

- `components/TopNavSimple.tsx`
- `app/globals.css`
- `content.example.ts`
- `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png`
- `improvements/improvement-pass-check-2026-05-08.json`

## Validation summary

- `npm run typecheck` — passed
  - Evidence: `evidence/typecheck-improvement-2026-05-08.txt`
- `npm run build` — passed
  - Evidence: `evidence/build-improvement-2026-05-08-rerun.txt`
  - Note: build still prints the known ESLint tooling warning because ESLint is not installed in this fork.
- `npm run lint` — blocked by tooling gap
  - Evidence: `evidence/lint-improvement-2026-05-08.txt`
  - Blocker: `ESLint must be installed: npm install --save-dev eslint`
- Screenshot QA — passed
  - Desktop: `1440x1600`, document/body width `1440`, pitch-ready.
  - Mobile: `390x1400`, document/body width `390`, hero right edge `370`, image right edge `366`, pitch-ready.

## Final judgment

`top_three_improvements` is locally complete and evidence-backed. The site is stronger, more restaurant-specific, more conversion-forward, and mobile-pitch-ready without changing the chosen `Cuisine` / `pepper-01` archetype.

## Mission Control status

Protected Mission Control agency writeback remains pending because this runtime does not have `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` available. Do not mutate agency workflow state through raw Supabase. Use this artifact as the MC evidence path once protected agency auth is restored.
