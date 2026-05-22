# Codex brief — Frato's Culinary Kitchen improvement pass

You are executing the `improvement_pass` gate for Spiral's restaurant website agency. This is a post-fork polish pass, not a redesign.

## Context

- Repo root: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system`
- Site path: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen`
- Lead: `Frato's Culinary Kitchen`
- Lead ID: `cec3f7af-ab8d-4785-af76-e57e743cdf25`
- MC root task ID: `fdead14c-0079-4168-b6b7-c8b80218a681`
- Improvement child task ID: `1a97a775-1ff9-42c5-bd07-a804a1d13890`
- Selected route/template: `Cuisine` / `pepper-01`
- Current MC stage has already been advanced to `improving`.

## Read first

- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-fork-improvement/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/skills/website-agency-system/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/website-agency-operator/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-build-checklist/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/agency-mission-control-sync/SKILL.md`

## Inputs/evidence to inspect

- `audit.md`, `audit.json`
- `routing.md`, `routing.json`
- `scrapes/google-reviews-highest-30.md`, `scrapes/google-reviews-highest-30.json`
- `build/fork-build-evidence-2026-05-08.md`
- `build/fork-preview-check-2026-05-08.json`
- Before screenshots:
  - `build/screenshots/fratos-local-preview-home-desktop-2026-05-08.png`
  - `build/screenshots/fratos-local-preview-home-mobile-2026-05-08.png`
- Reference anonymous review carousel:
  - `../maax-asian-bbq/components/AnonReviewCarousel.tsx` if present

## Improvement goals

The first fork is functional and specific, but the improvement pass should make it more pitch-ready without changing archetype or section count.

Implement the top 3 improvements:

1. **Interactive anonymous proof**
   - Add the required anonymous auto-scroll review carousel pattern from `restaurant-fork-improvement`.
   - Use only source-safe anonymous review fragments from `scrapes/google-reviews-highest-30.json` / `.md`.
   - Cards render only stars, quote, and platform tag. No names, initials, dates, avatars, categories, or invented attribution.
   - Quotes should be short (8–18 words), dish/vibe specific, and truncated with ellipsis if needed.
   - Use `scrollLeft` + `requestAnimationFrame`, pause-on-interaction, seamless duplicate wrap, reduced-motion support, hidden scrollbar, edge fades.

2. **Hero appetizingness + CTA hierarchy**
   - The before screenshot's hero food image reads a bit dim/gray. Improve image treatment/contrast/overlay so food feels more appetizing while preserving `pepper-01` structure.
   - Make `Order Online` clearly dominant and `View Menu` secondary/outlined/lower weight.
   - Keep the order-first conversion path and verified OrderStart link.

3. **Mobile exploration/conversion polish**
   - Before mobile screenshot only exposes logo + `Order Online`; add compact mobile access to key paths/anchors (`Menu`, `Catering`, `Contact`/call/directions) without bloating the header.
   - Preserve fast order CTA.
   - Ensure conversion links are verified and no fake forms/promises are introduced.

## Requirements to satisfy

Only the parent orchestrator should mark MC completion after preview validation, but your local work should satisfy:

- `improvement-pass-complete`: implementation notes and changed-file evidence exist
- `conversion-paths`: order/call/directions/catering paths are accurate and easy to reach
- `mobile-check`: mobile UI has been explicitly considered; parent will capture after screenshot if local bind is blocked in Codex sandbox

## Implementation rules

- Do **not** redesign or switch templates.
- Do **not** add a huge new unrelated section. The review carousel can replace/refine the existing proof/testimonial area or live within the current proof section rhythm.
- Keep content in `content.example.ts` where practical; do not scatter restaurant copy inline unless component structure requires constants.
- Preserve verified facts: Google `4.2 / 554`, giant mozzarella stick / one-pound slice / scratch comfort-food energy, order/call/catering/directions flows.
- Do not expose reviewer identity.
- Do not delete evidence artifacts or MC JSON files.

## Validation/artifacts

Run:

- `npm run build`
- `npm run typecheck`
- `npm run lint` if feasible; if eslint package gap remains, document it as non-blocking tooling gap.

Create/update:

- `improvements/improvement-pass-2026-05-08.md`
  - top 3 improvements
  - before/after notes
  - conversion path coverage map
  - mobile check notes
  - commands/checks and results
- `improvements/improvement-pass-check-2026-05-08.json`
  - requirement status for `improvement-pass-complete`, `conversion-paths`, `mobile-check`
  - screenshot paths expected after parent validation
- update `checklist.md` and `checklist.json` locally with the improvement pass status/evidence, but do **not** claim MC completion if you could not capture preview screenshots.

If you can run local preview and capture screenshots, save:

- `improvements/screenshots/fratos-improvement-home-desktop-2026-05-08.png`
- `improvements/screenshots/fratos-improvement-home-mobile-2026-05-08.png`

If Codex sandbox cannot bind localhost, leave screenshots pending and clearly state parent should validate via parent runtime.

Do not write raw Supabase. If you create a MC completion payload, save it but do not depend on it unless the requirements and preview evidence are truly complete.

## Done response

Return concise summary:

- changed files
- top 3 improvements implemented
- commands/checks and results
- preview/screenshot status
- whether parent can run preview validation and MC completion next
