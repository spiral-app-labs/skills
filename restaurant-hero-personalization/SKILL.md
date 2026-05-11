---
name: restaurant-hero-personalization
description: Orchestrates the image-first hero personalization pass within MC stage 6 (`template_fork_build`) of the autonomous restaurant-website agency pipeline. Called by `restaurant-template-fork` after the fork script runs, when the lead has been flagged for personalized-fork mode (default for all leads passing visual-reality register-fit check). Chains the 4 primitive skills end-to-end: image-first hero generation → art bible extraction → hero video generation → asset pipeline (Bunny.net upload). Manages Mode A (manual handoff) vs Mode B (autonomous API) per step, drop-folder conventions, filename validation, and quality-gate enforcement. Produces fork-ready assets + an art bible MD that drives the rest of the fork's styling.
---

# Restaurant Hero Personalization

This skill is the orchestrator that ties together the four image-first primitives into a complete personalization pass for a single forked restaurant site. It does NOT do any generation itself — it sequences calls to the primitive skills and enforces quality gates between them.

## When to use

- Inside MC stage 6 (`template_fork_build`), AFTER `restaurant-template-fork`'s `fork-template.sh` has created the empty fork
- The lead passes the visual-reality register-fit check (per `feedback_lead_fit_qualification.md`)
- Personalized-fork mode is enabled for this lead (default for register-fit leads; can be skipped for batched standard-fork sweeps)

## When NOT to use

- Standard-fork mode (high-volume batched speculative outbound where fork-time matters more than personalization)
- The audit's photography tier verdict is Tier-1 AND the restaurant has 30+ real shots — real photos beat generated stylized ones at that tier
- Misfit lead that didn't pass the register-fit check — no fork at all, not even personalized

## Prerequisites (must be true before invocation)

1. **Audit complete**: `sites/<slug>/audit.md` exists with the Hero Lock 4-tuple (wordmark, eyebrow, sub, hero_photo_subject) AND the photography tier verdict
2. **Route locked**: `sites/<slug>/checklist.{md,json}` has `template_slug` set
3. **Fork created**: `sites/<slug>/` exists with the forked template (output of `./scripts/fork-template.sh`)
4. **Bunny.net env vars** set: `BUNNY_STORAGE_ZONE`, `BUNNY_STORAGE_KEY`, `BUNNY_CDN_HOST`
5. **ChatGPT image gen access** (Mode A: user has ChatGPT Pro; Mode B: `OPENAI_API_KEY` in env)
6. **Higgsfield Plus subscription** active (Mode A is the default for video)

If any prerequisite is missing, surface a single combined blocker and stop. Don't run partial workflows.

## Load order

1. `restaurant-build-checklist` — read current `sites/<slug>/checklist.json` to confirm fork stage + template slug + audit evidence paths
2. `image-first-hero-generation` — primitive for steps 1-2 below
3. `art-bible-extraction` — primitive for step 3
4. `restaurant-hero-video-generation` — primitive for step 4
5. `asset-pipeline-bunny` — primitive for step 5

## The 6-step personalization sequence

### Step 1 — Hero composition generation

Invoke `image-first-hero-generation`. Pass the audit's Hero Lock 4-tuple + register from site-router + photography tier verdict as inputs.

**Output expected:**
- `sites/<slug>/public/images/raw/hero-reference-desktop.jpg`
- `sites/<slug>/public/images/raw/hero-reference-mobile.jpg`
- `sites/<slug>/public/images/raw/hero-plate-desktop.jpg`
- `sites/<slug>/public/images/raw/hero-plate-mobile.jpg`

**Gate:** All 4 files exist + restaurant name visible in references + no humans in any image + plates match references in lighting.

**Failure mode:** If after 5 iterations the user/API can't land a register-appropriate hero, log a blocker (`personalization_iteration_ceiling_hit`) and fall back to Standard fork. Don't loop forever.

### Step 2 — Custom imagery pass (optional, register-dependent)

Invoke `image-first-hero-generation` again with the custom-stills prompt template, for the dishes named in audit Block 2 Secret Sauce (top 2–4 signature items) and 1–3 space shots if needed.

**Skip this step if:**
- The audit's photography tier verdict is Tier-1 or Tier-2 (real photos exist + are usable — don't substitute generated)
- Register is lunch-bright-casual (real photos beat generated stylized for freshness)

**Output expected:**
- `sites/<slug>/public/images/raw/food-{dish-slug}.jpg` × 2–4
- `sites/<slug>/public/images/raw/space-{detail-slug}.jpg` × 0–3 (only if hero plate doesn't already carry the interior register)

**Gate:** No humans in any image. Each image's grading matches the hero plate's grading.

### Step 3 — Art bible extraction

Invoke `art-bible-extraction` with `hero-reference-desktop.jpg` as input.

**Output expected:** `sites/<slug>/art-bible.md` with all 8 required sections populated.

**Gate:** All hex values are real hex (not descriptions). All typefaces are real Google Fonts / system fonts. Section 7 has both IS and IS NOT lists populated.

### Step 4 — Hero background video generation

Invoke `restaurant-hero-video-generation` with `hero-plate-desktop.jpg` as input (and `hero-plate-mobile.jpg` if mobile composition differs significantly).

**Skip this step if:**
- Register is lunch-bright-casual (skip motion, keep still hero)
- Audit specified a human-action hero subject and no real footage is available (log a fallback note: "hero remains a still photo because real human-action footage is required and not available")

**Output expected:**
- `sites/<slug>/public/videos/raw/hero-loop.mp4` (8-sec 1080p)
- Optionally `sites/<slug>/public/videos/raw/hero-loop-mobile.mp4` (separate 9:16 take)

**Gate:** No humans in any frame. Loop seam invisible. File size under 10MB. Motion intensity matches register.

### Step 5 — Asset upload to Bunny.net

Invoke `asset-pipeline-bunny` for each approved video. Upload to Bunny path `<slug>/<filename>`.

**Output expected:**
- Public CDN URLs returned, e.g. `https://${BUNNY_CDN_HOST}/<slug>/hero-loop.mp4`
- URLs written into `sites/<slug>/content.ts` (or the template's equivalent config) under stable keys like `home.heroVideo` / `home.heroVideoMobile`

**Gate:** HEAD request to each CDN URL returns 200 + `Content-Type: video/mp4`. URLs are in `content.ts`, not inline in components.

### Step 6 — Art-bible-driven page personalization

Apply the art bible's tokens to the rest of the forked template.

**This step is executed by the calling coding agent (Claude Code), guided by the art bible.** This skill's role is to ensure the art bible exists and is consumable; the actual code changes are within the fork's repo.

Coding agent reads `sites/<slug>/art-bible.md` and applies:
- Palette → `tailwind.config.ts` theme.colors + `app/globals.css` CSS variables
- Typography → font imports in `app/layout.tsx` + Tailwind font-family tokens + per-element type scale
- Spacing rhythm → Tailwind spacing tokens + container max-width
- Motion philosophy → animation token decisions per `restaurant-template-animations` matrix
- Component register notes → `components/Nav.tsx`, `components/MenuList.tsx`, `components/ReviewCarousel.tsx`, `components/Footer.tsx`, `components/AboutContent.tsx` direct edits
- Cohesion test → verify each section against the art bible's IS / IS NOT list

**Gate:** Dev server renders the fork without runtime errors. Hero plays the Bunny video. All sections visually inherit the art bible register (verify via Playwright screenshot pass — desktop + iPhone 13 viewport).

## Conversion-floor structural rules

Apply to every personalized hero, enforced before the fork is considered personalization-complete:

- Hero height: `100dvh` (NOT `100vh`) — handles mobile browser chrome correctly
- Underclamp option: `92–95dvh` to leave a sliver of next section visible (scroll affordance)
- Sticky CTA pinned in hero corner (top-right OR bottom-right) — conversion floor protected regardless of scroll
- Restaurant name remains the wordmark anchor (per `feedback_hero_pattern_name_anchor.md`) — never replaced by a tagline
- Aliveness mandatories (LiveOpenStatus, LiveMapEmbed, ScrollReveal) still ship — `BackgroundVideoAliveness` is additive, not a replacement
- Two source assets (desktop 16:9 + mobile 9:16) referenced — `<picture>` + `<video>` with media-query sources

## Execution modes — when to use which

Per-step decision (skill defaults to Mode A unless explicitly enabled otherwise):

| Step | Mode A (manual) | Mode B (autonomous) | Default |
|---|---|---|---|
| 1. Hero composition | User generates in ChatGPT Pro UI, drops files | OpenAI Images API direct call | Mode A |
| 2. Custom imagery | User generates in ChatGPT Pro UI | OpenAI Images API direct call | Mode A |
| 3. Art bible | Claude Code reads image + writes MD | Same as Mode A | Always automated by Claude |
| 4. Hero video | User generates in Higgsfield UI | Higgsfield API (if subscribed) | Mode A |
| 5. Bunny upload | curl PUT (always automated, no human in loop) | Same | Always automated |
| 6. Page personalization | Claude Code reads art bible + edits fork | Same | Always automated by Claude |

Mode B (autonomous image + video) is wired up later, not on day one. The plan calls for Mode A validation on 3–5 real leads first.

## Manual handoff conventions

When a step is in Mode A, the orchestration emits a clean handoff message to the user:

```
Restaurant Hero Personalization — Step [N] of 6: [STEP_NAME]

Generating: [description]

PROMPT(S) TO PASTE INTO [ChatGPT Pro / Higgsfield]:
---
[prompt body 1]
---
[prompt body 2]
---

Expected output(s):
  - <absolute path to drop file>

When done, reply "step [N] done" or drop the file at the path and I'll pick it up.
```

The orchestration polls the drop folder every 30 seconds (or accepts the user signal) and continues when all expected files are present.

## Standard workflow (the full sequence)

1. Confirm prerequisites (audit + route + fork + env vars). Stop on any missing.
2. Read audit's Hero Lock + register + photo tier from `sites/<slug>/audit.md`
3. Run Step 1 (hero composition) — emit prompts in Mode A, await files
4. Validate Step 1 outputs (4 files, no humans, plates match references)
5. Run Step 2 (custom imagery) — skip per register/tier rules
6. Validate Step 2 outputs
7. Run Step 3 (art bible extraction) — automated, write `sites/<slug>/art-bible.md`
8. Validate Step 3 output (hex values, real fonts, IS/IS NOT lists)
9. Run Step 4 (hero video) — emit Higgsfield prompts in Mode A, await files
10. Validate Step 4 outputs (no humans, loop seam clean, <10MB)
11. Run Step 5 (Bunny upload) — automated, curl PUTs, write URLs into `content.ts`
12. Validate Step 5 (HEAD 200 + Content-Type: video/mp4 + URLs in content.ts)
13. Run Step 6 (page personalization) — automated, Claude Code applies art bible
14. Run dev server, take Playwright screenshots (desktop + iPhone 13), visual verification
15. Update `sites/<slug>/checklist.{md,json}` with personalization evidence
16. Mirror evidence to MC via `/api/agency/leads/:leadId/build` → `evidence_urls` + `artifact_urls`
17. Return control to `restaurant-template-fork` for the standard fork-stage completion (commit, push, deploy preview)

## Evidence to capture (mirror to MC build evidence)

- `art_bible_path`: `sites/<slug>/art-bible.md`
- `hero_reference_paths`: array of the 4 reference + plate images
- `hero_video_cdn_url`: Bunny URL of the approved hero loop
- `personalization_screenshots`: desktop + mobile Playwright captures of the personalized fork
- `personalization_log`: a brief narrative summary of which steps ran, how many takes per step, what landed

These all map to existing MC `/build` accepted fields (`evidence_urls`, `artifact_urls`) — no schema changes needed.

## Quality gates summary (the personalization is "done" when)

- All 4 hero source images approved (references + plates, both aspects)
- Art bible MD exists with all 8 sections populated correctly
- Hero video uploaded to Bunny, URL responds 200, URL wired into `content.ts`
- Rest of the fork visually inherits the art bible register (dev server screenshot pass)
- `100dvh` hero with sticky CTA confirmed on iPhone 13 viewport
- Conversion-floor verification: hero CTA visible without scroll, scroll affordance visible
- No human bodies/hands/faces in any AI-generated asset
- Checklist + MC evidence updated

## Anti-patterns

- **Don't run personalization without an audit's Hero Lock.** The 4-tuple is the brief. Without it you're decorating in a vacuum.
- **Don't skip the art bible step.** Personalized hero + un-personalized rest-of-fork = the "sticker on someone else's site" failure mode.
- **Don't generate custom food shots when the restaurant has Tier-1 real photos.** Generated dishes are a coherence-layer for the hero composition, not a substitute for real food photography.
- **Don't loop forever on hero iteration.** 5 takes ceiling, then log a blocker and fall back to Standard fork.
- **Don't burn Higgsfield premium credits on every fork.** Seedance 1.5 Pro is unlimited on Plus — reserve Veo 3.1 / Seedance 2.0 for marquee builds.
- **Don't deliver a personalized fork that violates conversion floor.** A beautiful hero with no visible CTA on mobile is a failure, not a feature.

## Related skills

- **Called by**: `restaurant-template-fork` (when personalized-fork mode is enabled for the lead)
- **Calls into**: `image-first-hero-generation`, `art-bible-extraction`, `restaurant-hero-video-generation`, `asset-pipeline-bunny`
- **Reads from**: `restaurant-website-audit` outputs (Hero Lock, photo tier verdict), `restaurant-site-router` outputs (chosen template slug, register), `restaurant-build-checklist` (slug, MC task IDs, stage)
- **Updates**: `restaurant-build-checklist` (adds personalization evidence rows), `sites/<slug>/content.ts` (wires CDN URLs)
- **Follows into**: `restaurant-fork-improvement` (the v1 → v2 polish pass runs AFTER personalization — proof patterns, copy tightening, animation upgrades layer on top of the personalized base)
- **Strategic backing**: `restaurant-website-system/research/restaurant-website-strategic-principles.md` (Part 5 first-viewport floor + Part 2 register signaling)

## Lineage

Created 2026-05-11 alongside the four primitive skills (`image-first-hero-generation`, `art-bible-extraction`, `restaurant-hero-video-generation`, `asset-pipeline-bunny`) and the `BackgroundVideoAliveness` pattern row in `restaurant-template-animations`. Stack: ChatGPT Pro + Higgsfield Plus ($34/mo) + Bunny.net Storage Zone. Initial validation target: end-to-end on one register-fit lead from the speculative outbound queue.
