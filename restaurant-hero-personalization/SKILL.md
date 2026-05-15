---
name: restaurant-hero-personalization
description: Orchestrates the image-first hero personalization pass within MC stage 6 (`template_fork_build`) of the autonomous restaurant-website agency pipeline. Two-phase, human-in-the-loop. PHASE 1 (autonomous, openclaw-driven) — generate inspo image + clean plate + hero loop video, upload all 3 to the agency-hero-assets Supabase Storage bucket, POST URLs to MC via /api/agency/leads/:leadId/build, generate the art bible, set personalization.enabled=true. PHASE 2 (paused — human review) — operator opens the lead in the CRM, reviews the 3 assets in the Lead Detail panel, manually flips personalization.ready_to_build=true. PHASE 3 (resumes autonomously) — skill detects the flag flip, codes the hero UX on top of the clean plate, applies the art bible to the rest of the fork, then proceeds to fork-build completion. The MC server gate enforces the wait: any attempt to advance past `building` while personalization is enabled and not ready returns 400. Loads when restaurant-template-fork is in Personalized mode for a register-fit lead.
---

# Restaurant Hero Personalization

This skill is the orchestrator for the image-first hero personalization pass. It runs INSIDE MC stage 6 (`template_fork_build`), AFTER `restaurant-template-fork` creates the empty fork workspace.

It does NOT do generation itself — it sequences calls to the 4 primitive skills and enforces the human-in-the-loop verification gate via Mission Control.

## Three-phase flow

### Phase 1 — Autonomous generation + upload (openclaw / Codex drives)

The skill runs these steps without human intervention:

1. Read lead state from MC: `GET /api/agency/leads/:leadId` to confirm audit complete, route locked, fork created
2. Read `lead.metadata.personalization` — if `enabled === false` and the lead is in personalized-fork mode, set `enabled = true` via the build API
3. Invoke `image-first-hero-generation` → produces `sites/<slug>/public/images/raw/inspo.{jpg,png}` and `plate.{jpg,png}` (16:9 center-balanced, no humans — either extension is valid, use whichever the generator returned)
4. Invoke `art-bible-extraction` with the approved inspo image → produces `sites/<slug>/art-bible.md`
5. Invoke `restaurant-hero-video-generation` with the approved clean plate → produces `sites/<slug>/public/videos/raw/hero.mp4` (no humans, ambient motion only)
6. Invoke `asset-pipeline-supabase` to upload all 3 assets to the `agency-hero-assets` bucket as `<lead_id>/inspo.{jpg,png}`, `<lead_id>/plate.{jpg,png}`, `<lead_id>/hero.mp4` (image extensions preserved from source)
7. POST the public URLs + art bible markdown to MC via `/api/agency/leads/:leadId/build` (all in one request — `personalization_enabled: true` + `personalization_assets: { inspo_image_url, clean_plate_image_url, hero_video_url }` + `personalization_art_bible_markdown`)

### Phase 2 — Human verification (skill pauses)

8. Skill prints a single handoff message:

```
Hero personalization for [RESTAURANT NAME] ready for review.

3 assets uploaded to the agency-hero-assets Supabase bucket and visible in the CRM Lead Detail panel:
  - Inspo (verification): {inspo_image_url}
  - Clean plate (production): {clean_plate_image_url}
  - Hero loop video (production): {hero_video_url}

Open the lead in the CRM → Personalization section → review the 3 assets.

When satisfied, flip "Ready to build" to true. The skill will detect the flag flip on next poll and resume.
```

9. Skill polls `GET /api/agency/leads/:leadId` every 60 seconds (or sleeps and re-fires via the `loop` mechanism). Waits for `metadata.personalization.ready_to_build === true`.

   - During this wait, attempting to advance past `building` via the build API returns 400 with `missing: ['personalization_ready_to_build']`. This is enforced server-side by `checkPersonalizationGate` in `~/mission-control/src/lib/agency/writeback.ts`.

### Phase 3 — Autonomous build resume (after operator flips ready_to_build)

10. Skill detects `ready_to_build === true` AND all 3 asset URLs present
11. Reads `art_bible_markdown` from `lead.metadata.personalization` (or from local `sites/<slug>/art-bible.md`)
12. Codes the hero UX in the fork:
    - `<video>` element with `src` = `hero_video_url`, `autoPlay muted loop playsInline`
    - Background poster = `clean_plate_image_url`
    - CSS: `object-fit: cover; object-position: center; height: 100dvh;` (mobile-handles via center-crop)
    - Overlays the wordmark + eyebrow + sub in code per the audit's Hero Lock
    - Conversion floor is protected by the **multi-anchor pattern** (see structural rules below): `FloatingHeaderPill` (top, always visible on desktop) + `MobileActionBar` (bottom-sticky on mobile). Hero-internal CTA pills are added ONLY when the brand has multi-destination routing (e.g. two locations needing separate entry points) — otherwise omit, the header pill is enough.
13. Applies the art bible across the rest of the fork:
    - Palette → `tailwind.config.ts` theme.colors + `app/globals.css` CSS variables
    - Typography → font imports in `app/layout.tsx` + Tailwind font-family tokens + per-element type scale
    - Spacing rhythm → Tailwind spacing tokens + container max-width
    - Component register notes → direct edits in `components/Nav.tsx`, `MenuList.tsx`, `ReviewCarousel.tsx`, `Footer.tsx`, `AboutContent.tsx`
    - Cross-checks every non-hero section against the art bible's IS / IS NOT list before commit

    **Decomposition guidance (prefer, not strict).** As register-specific styling and copy accumulate, prefer extracting each major non-hero region into its own component rather than expanding the existing page-experience container. The container's job is to orchestrate sections; its job is NOT to hold their markup. Standard split for a personalized fork:

    - `LocationsPanel.tsx` — the locations grid + per-location card (drives links into `/locations/[slug]`)
    - `MenuPreview.tsx` — the menu teaser block linking to `/menu`
    - `ProofSection.tsx` — reviews / press carousel (per `restaurant-fork-improvement` Section 1.1)
    - `AboutBlock.tsx` — story / heritage paragraph
    - `MinimalFooter.tsx` — single-line address + hours + phone + wordmark anchor

    Signal to extract: a single component is accumulating multiple sections of art-bible-driven copy AND its markup is no longer the kind of thing you can hold in your head while editing it. When that happens, extract — don't keep adding. The bistro-wasabi rebuild collapsed locations + menu + plan-your-visit into one ~550-line `HomeExperience.tsx`; that's the failure mode to avoid.
14. Runs `npm run dev`, takes Playwright screenshots (desktop + iPhone 13), visual verification
15. Updates the local checklist + mirrors evidence to MC via `/api/agency/leads/:leadId/build`
16. Returns control to `restaurant-template-fork` for the standard fork-stage completion (commit, push, deploy preview)

## When to use

- Inside MC stage 6 (`template_fork_build`), AFTER `restaurant-template-fork`'s `fork-template.sh` has created the empty fork
- The lead passes the visual-reality register-fit check (per `feedback_lead_fit_qualification.md`)
- Personalized-fork mode is enabled for this lead

## When NOT to use

- Standard-fork mode (high-volume batched speculative outbound where fork-time matters more than personalization)
- The audit's photography tier verdict is Tier-1 AND the restaurant has 30+ real shots — real photos beat generated
- Misfit lead that didn't pass the register-fit check — no fork at all

## Prerequisites

1. **Audit complete**: `sites/<slug>/audit.md` exists with Hero Lock 4-tuple + photo tier verdict
2. **Route locked**: `sites/<slug>/checklist.{md,json}` has `template_slug`
3. **Fork created**: `sites/<slug>/` exists with forked template
4. **MC env vars** (for the writeback API):
   - `MC_API_BASE_URL` — MC origin
   - `MC_AGENCY_AUTOMATION_TOKEN` — bearer token
5. **Supabase Storage env vars** (for the upload):
   - `MC_SUPABASE_URL` — Supabase project URL
   - `MC_SUPABASE_SERVICE_ROLE_KEY` — service-role key with Storage write access
6. **OpenAI API key** for image gen (Codex/openclaw uses this) — `OPENAI_API_KEY`
7. **Higgsfield access** for video gen — either Higgsfield Plus subscription (manual fallback Mode B) or Higgsfield API access (autonomous Mode A)

If any prerequisite is missing, surface a single combined blocker and stop. Don't run partial workflows.

## Load order

1. `restaurant-build-checklist` — read `sites/<slug>/checklist.json`
2. `image-first-hero-generation` — Phase 1 step 3
3. `art-bible-extraction` — Phase 1 step 4
4. `restaurant-hero-video-generation` — Phase 1 step 5
5. `asset-pipeline-supabase` — Phase 1 step 6 + 7

## Quality gates summary — personalization is "done" when

- All 3 source assets approved (inspo, plate, hero video — single 16:9 aspect each)
- Art bible MD exists with all 8 sections populated
- All 3 Supabase URLs return HTTP 200 + correct Content-Type
- URLs wired into the fork's `content.ts`
- `lead.metadata.personalization.ready_to_build === true` (operator manually flipped)
- Rest of the fork visually inherits the art bible register (dev server screenshot pass)
- `100dvh` hero confirmed on iPhone 13 viewport with sticky CTA visible
- Conversion-floor verification passes
- No human bodies/faces/arms in any AI-generated asset. Cropped hands are allowed only when the operator explicitly requests them; default to no hands.
- Checklist + MC evidence updated

## Conversion-floor structural rules (V2 — validated on bistro-wasabi)

Apply to every personalized hero:

- Hero height: `100dvh` (NOT `100vh`) — handles mobile browser chrome
- Optional underclamp to `92–95dvh` for scroll affordance
- **Multi-anchor conversion floor:**
  - `FloatingHeaderPill` — top-floating, always-visible CTA pill (desktop primary entry, visible at every scroll position)
  - `MobileActionBar` — bottom-sticky action bar (mobile primary entry)
  - Hero-internal CTA pills — ADDED ONLY when the brand has multi-destination routing (e.g. two locations needing separate entry points). For single-destination brands omit the in-hero CTAs entirely — the header pill is sufficient and three corner CTAs is redundant.
- Restaurant name remains wordmark anchor (per `feedback_hero_pattern_name_anchor.md`)
- Aliveness mandatories (LiveOpenStatus, LiveMapEmbed, ScrollReveal) all still ship — `BackgroundVideoAliveness` is additive
- ONE 16:9 source asset, CSS center-crops on mobile

Earlier drafts of this skill prescribed "sticky CTA pinned in hero corner." That was replaced 2026-05-12 after the bistro-wasabi build proved a corner CTA was redundant with `FloatingHeaderPill` + `MobileActionBar`. The corner-CTA version is now considered a fallback for templates that don't ship a floating header pill.

## Generation prompt contracts

Use these prompt contracts when `image-first-hero-generation` or `restaurant-hero-video-generation` needs manual fallback prompts, or when the operator asks Codex to draft prompts for ChatGPT image gen / Higgsfield. The output must still satisfy the same asset contract: `inspo.{jpg,png}`, `plate.{jpg,png}`, and `hero.mp4`.

### YouTube-style clean-plate prompt

When working from a reference image, use this direct structure:

```
Create me an image like this in 8K. Remove any text, buttons, any logos, cards, rectangles, UI, signage, browser chrome, and readable labels. I just want the exact same background, same camera angle, same composition, same object positioning, and same lighting. No zoom in or zoom out. No redesign. No new objects. Just the clean production hero background.

Business: [restaurant name, cuisine/register, location].

Preserve: [the exact objects and positions to preserve].
Remove: [all overlay text / logos / UI / unwanted objects].
Leave: [negative space location for website copy overlay].

Strict constraints:
No readable text. No logos. No UI. No humans, faces, or arms. No hands unless explicitly requested. No synthetic glossy AI look. No unrelated food items unless they are part of the chosen hero concept.
```

Use this for clean backgrounds before adding website typography in code. Do not ask image gen to render final website copy unless the operator specifically wants a design reference rather than a production background.

### Exact-first-frame image-to-video prompt

When animating a still image, the first two paragraphs must be explicit. Higgsfield-style video prompts drift if the starting frame contract is soft.

```
Use the provided image as the exact first frame of the video. Do not redesign it, do not recreate it, do not change the composition, and do not replace any objects.

This is an image-to-video animation task. Preserve the exact same background, camera angle, crop, lighting, object positions, reflections, and object placement from the starting image.

Create a subtle [4/8]-second cinematic website hero loop by animating only [the natural motion source]:
- [motion detail 1]
- [motion detail 2]
- [motion detail 3]

Keep all solid objects physically locked in place. Nothing should slide, morph, resize, drift, or change shape.

Camera should be locked. No zoom, no pan, no orbit, no reframing.

Strict constraints:
No new objects. No humans. No faces. No arms. No readable text. No logos. No signage. No UI. No surreal physics. No object drifting. No background changes.

The result should look like the exact original still photograph quietly coming alive for a premium restaurant website hero.
```

For a beer-only Sammy's style loop, use beer motion only: tiny bubbles rise continuously, foam slowly swells over the rim, one or two slow foam trails roll down the outside of the glass, condensation and amber highlights shimmer, and the beer surface moves slightly with realistic liquid physics. Do not add a pouring stream unless the starter image already contains one. Do not mention fish or other food unless that food is the chosen hero subject.

### Four-second menu motion prompt

Use this for separate Higgsfield 4s hero cutdowns based on menu items. These should feel like premium restaurant product cinematography, not plates sliding into frame.

```
Create a 4-second cinematic restaurant hero video for [restaurant name].

Subject: the menu item "[menu item]" - [brief ingredients from the real menu].

Scene: [surface/environment], warm restaurant lighting, shallow depth of field, soft background bokeh.

Action:
[One clear physical action. Examples: pretzels fall and settle, burger ingredients fall into place, beer foam overflows, wok tosses food over flame, steak flares on grill, pasta gets twirled/plated.]

Camera:
Locked camera or very slight slow push-in. 16:9 horizontal. Close-up product cinematography.

Physics:
[Object-specific physics: heavy/soft pretzel bounce, burger ingredient weight, liquid viscosity, flame behavior, steam, salt scatter.]

Strict constraints:
No full humans, no faces, no arms. No hands unless explicitly requested. No readable text, logos, signage, or UI. No impossible floating objects. No messy chaotic splatter. No cartoon style. No object morphing. Keep it realistic, warm, and craveable.
```

Sammy's examples:

```
Create a 4-second cinematic restaurant hero video for Sammy's Restaurant & Bar.

Subject: the menu item "Giant Pretzel" - oversized warm soft pretzels with coarse salt, served with beer cheese and mustard.

Scene: dark glossy wooden bar counter, warm amber tavern lighting, shallow depth of field, soft bar bokeh in the background.

Action:
A few giant soft pretzels fall into frame in slow motion and land on the wooden bar counter or a wooden serving board. They hit with realistic weight, bounce slightly once, then settle naturally. Coarse salt crystals scatter and catch the warm light. A small ramekin of beer cheese and mustard sits nearby, already on the counter, and does not move.

Camera:
Locked camera or very slight slow push-in. 16:9 horizontal. Close-up product cinematography, like premium bar-food slow motion.

Physics:
Pretzels should feel heavy, soft, and real. No floating. No impossible bounce. Salt falls naturally. The final frame should be a clean appetizing hero shot.

Strict constraints:
No humans, no hands, no faces, no arms. No readable text, no logos, no signage, no UI. No cartoon style. No giant surreal pretzels. No food morphing. No camera shake. Keep it realistic, warm, and craveable.
```

```
Create a 4-second cinematic restaurant hero video for Sammy's Restaurant & Bar.

Subject: the menu item "Hickory Burger" - 1/2 lb Angus beef burger with bacon, cheddar cheese, and BBQ sauce.

Scene: dark glossy wooden bar counter, warm amber tavern lighting, shallow depth of field, soft bar bokeh in the background.

Action:
Build the burger in slow motion from falling ingredients. Start with the bottom bun already on the counter or plate. A hot beef patty drops onto the bun and bounces subtly. A slice of cheddar lands on the patty and begins to soften. Crispy bacon strips fall on top with a small natural bounce. A glossy ribbon of BBQ sauce drizzles over the bacon. The top bun drops last and settles into the finished burger.

Camera:
Locked camera or very slight slow push-in. 16:9 horizontal. Macro restaurant product cinematography, warm and appetizing.

Physics:
Each ingredient must move with realistic gravity and weight. Small bounce only. The burger should assemble cleanly, not explode or float. Cheese softens slightly from heat. BBQ sauce should stretch and land naturally.

Strict constraints:
No humans, no hands, no faces, no arms. No readable text, no logos, no signage, no UI. No impossible floating ingredients. No messy splatter. No cartoon style. No object morphing. Keep it realistic, warm, and craveable.
```

## Evidence to capture (mirror to MC build evidence)

These all map to existing MC `/build` accepted fields — no schema changes needed:

- `personalization_assets.{inspo,clean_plate,hero_video}_image_url` (via personalization writeback)
- `personalization_art_bible_markdown` (via personalization writeback)
- Playwright personalization screenshots → `evidence_urls`
- Personalization narrative summary → `blocker` if fallback ran, otherwise referenced from `checklist.md`

## Anti-patterns

- **Don't run personalization without an audit's Hero Lock.** The 4-tuple is the brief.
- **Don't skip the art bible step.** Personalized hero + un-personalized rest-of-fork = "sticker on someone else's site" failure mode.
- **Don't loop forever on hero iteration.** 5 takes ceiling per primitive, then log a blocker and fall back to Standard fork.
- **Don't flip `ready_to_build` from openclaw side.** That toggle is human-only — the whole point of the gate is operator verification.
- **Don't poll the lead more than once per minute** during Phase 2. The wait is for human eyes, not for tight loops.
- **Don't deliver a personalized fork that violates conversion floor.** A beautiful hero with no visible CTA on mobile is a failure.

## Manual fallback if openclaw isn't autonomous

If Codex/openclaw can't drive end-to-end yet, the skill emits stepwise prompts and waits for the user to drop assets locally. Same downstream contract — same Supabase paths, same MC writeback URLs. Just slower iteration loop.

## Related skills

- **Called by**: `restaurant-template-fork` (when personalized-fork mode is enabled)
- **Calls into**: `image-first-hero-generation`, `art-bible-extraction`, `restaurant-hero-video-generation`, `asset-pipeline-supabase`
- **Reads from**: `restaurant-website-audit` outputs (Hero Lock, photo tier), `restaurant-site-router` outputs (template, register), `restaurant-build-checklist` (slug, MC task IDs, stage)
- **Updates**: `restaurant-build-checklist` (personalization evidence rows), `sites/<slug>/content.ts` (Supabase URLs), `agency_leads.metadata.personalization` (via build API)
- **Follows into**: `restaurant-fork-improvement` (v1 → v2 polish layers on top of the personalized base)
- **Strategic backing**: `restaurant-website-system/research/restaurant-website-strategic-principles.md` (Part 5 first-viewport floor + Part 2 register signaling)
- **Multi-location brand pattern**: when the lead has 2+ locations under one brand with separate ops, follow `restaurant-website-system/research/multi-location-brand-pattern.md` — that pattern dictates the `LocationsPanel.tsx` + dynamic `/locations/[slug]` split and the hero CTA Configuration A (in-hero location pills)

## Server-side enforcement

The MC build API enforces the gate via `checkPersonalizationGate` in `~/mission-control/src/lib/agency/writeback.ts`. Behavior:

- If `personalization.enabled === false` → all stage transitions allowed
- If `personalization.enabled === true && ready_to_build === true && all 3 URLs present` → all stage transitions allowed
- If `personalization.enabled === true && (ready_to_build === false || any URL missing)` → transitions to stages AFTER `building` are rejected with HTTP 400 + `missing: [...]`

This is the server-side backstop. The skill should respect the gate client-side (poll and wait), but if openclaw misbehaves and tries to advance, MC blocks it.

## Lineage

Created 2026-05-11. Stack: ChatGPT Pro (Codex image gen) + Higgsfield Plus ($34/mo, Seedance 1.5 Pro) + Supabase Storage (replaces Bunny.net from earlier draft).

Architecture decision: assets go to Supabase Storage (not Bunny CDN) so the CRM displays them natively from the same DB ecosystem — one URL, two purposes (verification + production). Bunny was rejected because keeping verification + production assets in one place was worth more than the minor CDN performance edge.
