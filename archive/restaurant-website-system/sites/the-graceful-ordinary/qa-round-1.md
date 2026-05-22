# The Graceful Ordinary — QA Round 1

- Date: 2026-05-06
- Round: 1
- Gate: `qa_round_1`
- Focus: build correctness + content truth/source fidelity
- Local preview: `http://127.0.0.1:3025`
- Public preview recorded in MC: `https://graceful-ordinary-redesign.vercel.app`

## Evidence

- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-1/desktop-full.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-1/mobile-full.png`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-1-cdp-2026-05-06.mjs`
- Build: `npm run build` passed on 2026-05-06
- Typecheck: `npm run typecheck` passed on 2026-05-06
- Route checks: `/`, `/menu`, `/about`, `/contact` returned HTTP 200 locally
- Chat API safety check: `/api/chat` dietary prompt returned a call handoff marker

## Findings

1. **Below-hero content initially captured as blank in full-page QA evidence.** Framer Motion `initial={{ opacity: 0 }}` / `whileInView` sections were not revealed in CDP full-page screenshot capture without scroll-triggered intersection, making the site look incomplete in QA evidence and crawler/no-scroll contexts.
2. **Nested animated cards also stayed hidden in evidence captures.** The signature card grid and other nested motion elements still used opacity-zero initial state after the first ScrollReveal fix.
3. **Factual/source string scan passed.** Local rendered pages did not expose `1776`, `OpenTable`, `Crystal Lake`, `Jill Vedaa`, `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, or `4.8★` strings.
4. **Conversion source fidelity passed.** Local rendered pages include the exact Resy path `https://resy.com/cities/stc/the-graceful-ordinary`.
5. **Remaining visual polish items should move to QA round 2.** Mobile still shows spacing/cropping issues in the “New, yet familiar” section, clipped review carousel cards, an awkward quote crop, horizontal marquee edge clipping, and some low-contrast small text.

## Fixes applied in round 1

- Updated `components/ScrollReveal.tsx` to keep content visible before interaction (`initial={false}`) so full-page screenshots and no-scroll/crawler contexts do not capture blank below-hero sections.
- Updated nested motion components to avoid opacity-zero initial states in source/evidence capture:
  - `components/FeaturedCardGrid.tsx`
  - `components/MoreThanAMealSplit.tsx`
  - `components/QuoteOnPhotoOverlay.tsx`
  - `components/MultiChannelReservationStrip.tsx`
  - `components/StoryTimeline.tsx`
  - `components/PartnerList.tsx`
  - `components/MenuTabbedList.tsx`
- Re-captured QA round 1 desktop/mobile screenshots after the fixes.
- Re-ran `npm run typecheck` and `npm run build`; both passed.

## Pass/fail

QA round 1 passes for build correctness and factual/source fidelity after the visibility fixes. QA round 2 should focus on mobile visual polish and conversion flow: tighten vertical spacing, review carousel clipping, quote crop, marquee edge handling, and small-text contrast.
