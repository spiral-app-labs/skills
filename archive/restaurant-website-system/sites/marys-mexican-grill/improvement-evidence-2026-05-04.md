# Mary's Mexican Grill improvement evidence - 2026-05-04

## Top changes

1. Added an anonymous home-page `ReviewCarousel` sourced from `scrapes/google-reviews-highest-30.json` with short Google-only quote fragments, duplicated cards, JS `scrollLeft` marquee behavior, pause on hover/focus/touch, and reduced-motion auto-scroll disable.
2. Tightened key copy in `content.example.ts` so the hero, mission, big headline, proof section, and supporting page headers read like Mary's instead of internal operator notes.
3. Added a subtle floating hero-plate motion treatment in `DarkLeafHero` using CSS only, which keeps bamzi-01's tone and disables itself under reduced motion.

## Before / after notes

- Before: The home page relied on a named testimonial block and did not have the required anonymous review proof pattern.
- After: The home page now includes a dedicated anonymous review carousel with platform-only tags and no reviewer names, dates, initials, or avatars.

- Before: Several sections said things like "signals Mary's should own on its own site" and "a stronger first tap," which read like internal agency language.
- After: Key sections now lead with guest-facing language about Woodstock Square, standout dishes, service, and easy visit paths.

- Before: The hero was static once loaded.
- After: The hero plate now has a restrained float animation that matches the existing visual system without changing layout or adding another animation library.

## Mobile evidence

- `ReviewCarousel` uses `overflow-x-auto`, fixed-width cards (`w-[280px]`), and touch pause/resume so the section remains usable on narrow screens.
- The carousel duplicates cards for continuous scroll but still allows manual swipe/scroll interaction on mobile.
- Reduced-motion users do not get auto-scroll, and hover-only card motion is disabled under `prefers-reduced-motion`.

## Audit finding coverage

- Proof patterns first: covered by the anonymous home-page review carousel built from the 30-review packet.
- Copy tightening: covered by the hero, mission, headline, blog/proof, about, menu, news, and contact copy edits.
- Animation upgrade: covered by the hero plate float interaction and the carousel lift treatment.
- Conversion-path accuracy: preserved existing truthful Menu / DoorDash / Call / Directions paths and kept the known phone-number conflict note intact.

## Files changed

- `restaurant-website-system/sites/marys-mexican-grill/components/ReviewCarousel.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/app/page.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/components/DarkLeafHero.tsx`
- `restaurant-website-system/sites/marys-mexican-grill/app/globals.css`
- `restaurant-website-system/sites/marys-mexican-grill/content.example.ts`
- `restaurant-website-system/sites/marys-mexican-grill/checklist.md`
- `restaurant-website-system/sites/marys-mexican-grill/checklist.json`
- `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-improving-2026-05-04.json`
- `restaurant-website-system/sites/marys-mexican-grill/improvement-evidence-2026-05-04.md`

## Commands run

1. `git config user.name`
2. `git config user.email`
3. `npm ci`
4. `npm run typecheck`
5. `npm run build`

## Results

- `git config user.name` -> `Ethan Talreja`
- `git config user.email` -> `64980375+EthanTalreja@users.noreply.github.com`
- `npm ci` succeeded.
- `npm run typecheck` succeeded.
- `npm run build` succeeded with Next.js `14.2.35`.

## Remaining blockers

- Mission Control API writeback is still blocked in this runtime because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable, so the improving-stage payload is recorded locally only.
- No direct MC/Supabase write was attempted.
