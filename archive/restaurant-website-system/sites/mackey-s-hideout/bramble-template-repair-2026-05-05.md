# Mackey's Hideout — Bramble Template Repair

- Date: 2026-05-05
- Site slug: `mackey-s-hideout`
- Locked template route: `bramble-01`
- Scope: site-local repair only

## What was fixed

- Kept the `bramble-01` page structure intact: `TopTriptychHeader`, `HeroSlideshow`, tagline strip, `PolaroidStrip`, opening-times block, dark mood sections, contact/map block, and visit-planning close all remain in the same template rhythm.
- Repaired the Mackey hero by moving copy and CTAs into a protected bottom content panel instead of dropping a giant static `MACKEY'S` wordmark across text-heavy event posters.
- Changed the hero image treatment to `object-contain` on smaller screens so portrait poster art no longer gets aggressively cropped on mobile.
- Added stronger hero scrims and darker button backgrounds in the top header so `Shows` and `Beer` remain readable without colliding with poster typography.
- Let the social strip stack on smaller screens to reduce another avoidable mobile squeeze point.

## Below-hero tagline mobile fix

- Removed `ScrollRevealScrapbook` from the Mackey below-hero tagline only, site-local, because the shared scrapbook reveal adds a `rotate={-2}` transform that can widen the mobile scroll area before the first content strip settles.
- Locked the tagline section to `max-w-[100vw] overflow-x-hidden` so the strip itself cannot become the horizontal overflow source on narrow screens.
- Changed the tagline paragraph to `mx-auto max-w-[calc(100vw-32px)] break-words whitespace-normal` with a smaller mobile-first `text-[clamp(28px,8vw,38px)] leading-tight`, while preserving the original Bramble desktop treatment through `md:max-w-2xl md:text-tagline-h2`.
- Kept the section in the same position between `HeroSlideshow` and `PolaroidStrip`, so the Mackey page still follows the original `bramble-01` narrative flow.

## Second-pass mobile fix

- Reworked the Mackey hero into a mobile-specific Bramble-safe arrangement: the poster now sits in its own portrait card and the copy/CTA panel lives below it, instead of forcing the desktop full-screen poster overlay to survive at `390px`.
- Removed the mobile `object-contain` letterboxing path that created a large black gap above the poster. Desktop still keeps the full-bleed Bramble hero treatment; mobile now uses a contained poster panel with `object-cover` and `object-top`.
- Tightened the mobile top header into a centered stacked treatment so both `Shows` and `Beer` remain visible inside the viewport while preserving the Bramble top-header concept.
- Reduced mobile hero copy length and kept the title in a narrower measure so `Mackey's Hideout` wraps instead of clipping or forcing horizontal overflow.
- Increased desktop hero panel opacity and paragraph contrast so the first-screen copy remains readable over dense event art.

## Final overflow and contrast cleanup

- Locked the mobile hero shell to `w-full max-w-[calc(100vw-32px)]` with `min-w-0` and `overflow-hidden` so the Mackey card cannot exceed a `390px` viewport once padding and borders are applied.
- Removed the forced mobile `max-w-sm` sizing path, reduced the poster aspect ratio, and set both CTAs to full width so the right edge, borders, and labels stay fully visible inside the card.
- Allowed the mobile title and eyebrow to wrap naturally with `break-words` instead of relying on a fixed `ch` measure that could still create awkward overflow pressure.
- Shortened the mobile support copy to a single visible proof line so the hero reads complete on first load instead of looking cropped between the poster and CTA stack.
- Darkened the desktop copy panel again and pushed the paragraph to full cream text so the supporting line remains readable against the high-detail poster background.

## Hard mobile width and wrap fix

- Replaced the remaining class-only mobile card width logic with an explicit inline viewport-safe width: `style={{ width: 'calc(100vw - 32px)', maxWidth: '358px' }}` on the Mackey mobile hero card, while keeping `mx-auto`, `min-w-0`, and `box-border`.
- Removed `overflow-hidden` from the mobile copy panel so the title can wrap instead of being clipped inside the dark text box.
- Forced the hero title into a safer mobile range with `text-[clamp(31px,9vw,40px)]`, `whitespace-normal`, and `overflowWrap: 'anywhere'` so `Mackey's Hideout` either fits or breaks cleanly at `390px`.
- Kept the CTA stack full width and added `whitespace-normal`, `break-words`, and `leading-snug` to both buttons so label text cannot push the panel past the right edge.
- Explicitly marked the poster wrapper as `w-full max-w-full min-w-0` so the image panel cannot become the overflow source on narrow screens.

## Viewport-anchored mobile card fix

- Removed `mx-auto` from the Mackey mobile hero card so it no longer centers against a potentially oversized document width created elsewhere in the Bramble page.
- Anchored the card to the actual viewport with `style={{ width: 'calc(100vw - 32px)', maxWidth: '358px', marginLeft: '16px', marginRight: '16px' }}`, which guarantees a `16px` inset on a `390px` mobile screen even if page `scrollWidth` is larger.
- Removed horizontal padding from the mobile hero shell so the explicit card margins are the only centering mechanism on small screens.
- Added `max-w-[100vw] overflow-x-hidden` at the Mackey hero section level, site-local only, to prevent unrelated Bramble overflow from shifting the mobile hero card off the visible viewport.

## Final tagline viewport anchor fix

- Removed the Mackey tagline strip's horizontal padding and replaced the previous class-only width logic with a viewport-anchored section style: `width: 100vw`, `maxWidth: 100vw`, `overflowX: hidden`, `boxSizing: border-box`.
- Moved the paragraph sizing to a site-local `.mackeys-tagline-copy` rule so mobile now uses `width: calc(100vw - 48px)`, `max-width: 342px`, and fixed `24px` left/right margins instead of `mx-auto`.
- Added `overflow-wrap: anywhere` with `word-break: normal` and tightened the mobile type to `text-[clamp(24px,7vw,32px)] leading-tight` so the copy wraps cleanly inside a `390px` viewport.
- Restored desktop-centered behavior in a scoped `@media (min-width: 768px)` override, returning the paragraph to `margin-left/right: auto` with a `max-width: 42rem` while keeping the same Bramble placement between hero and polaroids.

## Why this is still `bramble-01`

- The repair does not change the route, template slug, or overall section architecture.
- The fix stays inside Mackey's fork and only adjusts the hero presentation where Mackey's official art differs from Bramble's cleaner source photography.
- The page still uses Bramble's core conversion pattern: full-screen mood hero, editorial strip, scrapbook imagery, hours block, dark proof sections, and visit-planning close.

## Evidence and copy constraints

- Hero/supporting copy still relies on the existing Mackey evidence set already cited in:
  - `build-scaffold-2026-05-05.md`
  - `browser-evidence-audit-2026-05-05.md`
  - `routing-template-decision-2026-05-05.md`
- CTA scope remains truthful: live music schedule, beer menu, phone, directions, and the already-verified outdoor-show ticket link elsewhere on the page.
- No reservation, ordering, full-kitchen, or guaranteed live-open-status claim was introduced.

## Local verification

- `npm run build`: passed
- `npm run typecheck`: passed after the build regenerated `.next/types`

## Screenshots

- Orchestrator screenshot recapture is required again after this second-pass mobile fix.
- This run does not include new local screenshots; validation should use a fresh desktop/mobile capture pass from orchestrator against the updated Mackey fork.
