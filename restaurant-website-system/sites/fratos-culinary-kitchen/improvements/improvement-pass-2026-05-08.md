# Frato's Culinary Kitchen — Improvement Pass — 2026-05-08

## Scope

- Lead: `Frato's Culinary Kitchen`
- Lead ID: `cec3f7af-ab8d-4785-af76-e57e743cdf25`
- MC root task ID: `fdead14c-0079-4168-b6b7-c8b80218a681`
- Improvement child task ID: `1a97a775-1ff9-42c5-bd07-a804a1d13890`
- Template: `Cuisine` / `pepper-01`
- Local stage: `improving`

## Top 3 improvements implemented

### 1. Interactive anonymous proof

- Replaced the old static testimonial band on the homepage with a required anonymous `scrollLeft` review marquee in `components/AnonReviewCarousel.tsx`.
- Quotes come from the captured `scrapes/google-reviews-highest-30.json` packet and stay source-safe: stars, quote, platform tag only.
- Review fragments stay short, dish/vibe specific, and anonymous: giant mozzarella stick, cheese pull, fresh-made portions, online-ahead utility, ghost pepper wings, chill atmosphere, burger-of-the-month proof.
- Behavior matches the improvement contract:
  - `requestAnimationFrame` + `scrollLeft`
  - duplicate wrap for seamless loop
  - pause on hover
  - pause for 4 seconds on pointer/touch/wheel interaction
  - reduced-motion disables auto-scroll
  - hidden scrollbar and dark edge fades

Before:
- Static chef/testimonial block read more like generic template proof than live Frato's proof.
- Identity leaned on summary copy instead of scanning real guest language.

After:
- The proof section now feels active and restaurant-specific without exposing reviewer identity.
- The most pitchable Google themes surface immediately: giant mozz, cheese pull, fresh-made food, pizza, burgers, and vibe.

### 2. Hero appetizingness + CTA hierarchy

- Strengthened the hero image treatment in `components/ConfettiHero.tsx` with warmer overlays, stronger contrast/saturation, a more rectangular food frame, and a deeper shadow so the food reads less gray and more craveable.
- Added compact proof pills above the headline: `4.2 stars / 554 Google reviews`, `Since 1975`, and `Online pickup + delivery`.
- Made `Order Online` clearly dominant with brand-red fill and shadow.
- Demoted `View Menu` to a readable outlined treatment so the order-first path stays primary.
- Removed the first-load Framer opacity fade on the hero so headless/mobile captures do not catch a half-rendered, washed-out first fold.

Before:
- The hero image felt dim/flat in the captured preview.
- The CTA pair felt too equal for an order-first casual restaurant.

After:
- The food has more warmth and contrast without changing the `pepper-01` composition.
- The order CTA wins at a glance, while the menu remains available as the secondary browse action.

### 3. Mobile exploration + conversion polish

- Added a compact mobile quick-link rail in `components/TopNavSimple.tsx` under the sticky header.
- Quick links now expose verified paths without bloating the nav: `Menu`, `Catering`, `Directions`, `Call`.
- Added a verified directions path to `content.example.ts` and surfaced it in the location accordion.

Before:
- Mobile first fold mostly exposed logo + order CTA.
- Catering/directions/call/menu exploration required more scrolling than it should.

After:
- Mobile users can still hit `Order Online` immediately, but can also reach menu/catering/directions/call in one tap from the sticky chrome.
- Conversion paths are more evenly covered without adding a new section or fake utility.

## Changed files

- `app/page.tsx`
- `app/globals.css`
- `components/AnonReviewCarousel.tsx`
- `components/ChefTestimonialBand.tsx`
- `components/ConfettiHero.tsx`
- `components/TopNavSimple.tsx`
- `content.example.ts`
- `checklist.md`
- `checklist.json`
- `improvements/improvement-pass-2026-05-08.md`
- `improvements/improvement-pass-check-2026-05-08.json`

## Conversion path coverage map

- Order online: `https://orderstart.com/fratospizza`
  - sticky header CTA
  - hero primary CTA
  - menu/deals cards as supporting order handoff
  - contact page action card
- Menu: `/#menu`
  - mobile quick link
  - hero secondary CTA
  - desktop nav `Favorites`
- Catering: `https://fratoscatering.com/`
  - desktop nav
  - mobile quick link
  - deal stack corporate lunch card
  - closing CTA path remains catering-specific
- Catering inquiry: `https://fratoscatering.com/catering-inquiry-form/`
  - closing CTA primary
  - contact page action card
- Call: `tel:8478952122`
  - mobile quick link
  - contact page action card
  - footer
- Directions: `https://www.google.com/maps/dir/?api=1&destination=42.0152588,-88.0810177`
  - mobile quick link
  - contact page live map CTA
  - location accordion copy

## Mobile check notes

- Improvement work specifically targeted the weak first-fold mobile exploration noted in the pre-improvement screenshot.
- The sticky header now retains fast ordering while exposing compact secondary actions.
- The anonymous review carousel uses `w-[85vw]` cards and manual horizontal scroll support, so one full card remains readable on mobile.
- The hero CTA stack collapses vertically on narrow screens instead of compressing into two equal-weight pills.
- Parent runtime captured updated mobile screenshots via CDP device metrics after the stale/bad command-line headless capture was identified.

## Commands / checks

- `npm run build`
  - Result: passed
  - Notes: Next built `/`, `/about`, and `/contact` successfully after the improvement pass.
- `npm run typecheck`
  - Result: passed
- `npm run lint`
  - Result: blocked, non-blocking tooling gap
  - Notes: `next lint` still exits with `ESLint must be installed: npm install --save-dev eslint`.
- `npm run dev -- --port 3210`
  - Result: passed in parent runtime
  - Notes: refreshed screenshots captured from `http://127.0.0.1:3210/` with CDP device metrics for desktop and mobile.

## Preview / screenshots

- Before screenshots already available:
  - `build/screenshots/fratos-local-preview-home-desktop-2026-05-08.png`
  - `build/screenshots/fratos-local-preview-home-mobile-2026-05-08.png`
- Improvement after-screenshots captured and QA'd from parent runtime via CDP device metrics:
  - `improvements/screenshots/fratos-improvement-home-desktop-2026-05-08.png` — 1440×1600, 717273 bytes, document/body width 1440
  - `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png` — 390×1400, 207593 bytes, document/body width 390, hero right edge 370, image right edge 366
- Final image QA verdict: pitch-ready overall; no real blockers. Minor non-blockers: mobile hero density and tight mobile quick-link rail.

## Requirement judgment

- `improvement-pass-complete`: passed locally
  - implementation notes written
  - changed files and requirement evidence recorded
- `conversion-paths`: passed locally
  - order, menu, catering, catering inquiry, call, and directions are all reachable through verified paths
- `mobile-check`: passed with parent-runtime visual evidence
  - CDP screenshot capture fixed the earlier bad mobile artifact caused by headless Chrome's command-line viewport behavior
  - document/body width matched the 390px viewport, with hero text and image inside the viewport
- `desktop-check`: passed with parent-runtime visual evidence
  - desktop screenshot is styled, CTA hierarchy is strong, and the hero image treatment is pitch-ready

## Parent follow-up

- Preview validation is complete locally.
- Protected Mission Control agency writeback remains pending because this runtime does not have `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` set. Do not mutate agency state through raw Supabase; mark the improvement child complete through MC once protected agency auth is restored.
