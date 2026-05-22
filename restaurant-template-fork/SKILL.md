---
name: restaurant-template-fork
description: Fork a selected restaurant catalog template into `<slug>/` using the local fork script, preserve catalog structure, avoid generated files, and hand off to the build checklist.
---

# Restaurant Template Fork

Use after the route is locked.

## Command

```bash
cd /Users/ethantalreja/skills/archive/restaurant-website-system
./scripts/fork-template.sh --template gusto-01 --slug restaurant-slug
```

The fork tooling lives in `archive/restaurant-website-system`, but it now writes active website folders to the repo root.

Use `--force` only when Mission Control explicitly says to overwrite an existing local fork.

## Workflow

1. Update MC build stage to `forking`.
2. Run the fork script.
3. Run `restaurant-build-checklist` immediately after the fork.
4. **Decide fork mode** — Standard vs Personalized. Default to Personalized for any lead that passed the register-fit visual-reality check (per `feedback_lead_fit_qualification.md`). Standard is for batched high-volume sweeps where personalization time would block shipping the batch. See "Two fork modes" below.
5. If Personalized: invoke `restaurant-hero-personalization` skill to run the image-first hero pass + art bible extraction + Supabase upload + rest-of-fork styling. Higgsfield video is a later handoff after OpenClaw marks the site ready for Ethan.
6. Install dependencies inside the fork only if needed.
7. Keep template code style and content boundaries intact.
8. Do not copy `node_modules`, `.next`, screenshots, videos, or capture frames into the new fork.

## Two fork modes

The fork script creates the workspace shell. What happens next depends on mode.

### Standard fork (fast batched speculative outbound)
- After fork script + checklist: audit content (Hero Lock 4-tuple, owner-voice phrases, photos) is pasted into the template's `content.ts`
- Template's default hero pattern is used (no bespoke hero composition)
- Aliveness mandatories (LiveOpenStatus, LiveMapEmbed, ScrollReveal) ship
- `restaurant-fork-improvement` runs next for v1 → v2 polish (ReviewCarousel, copy tightening, animations)

### Personalized fork (default for register-fit leads)
- After fork script + checklist: invoke `restaurant-hero-personalization`, which runs in three phases:
  - **Phase 1 (autonomous)**: image-first hero generation (one 16:9 center-balanced inspo + clean plate), art bible extraction, upload the 2 image assets to the Supabase `agency-hero-assets` bucket, POST URLs + art bible MD to MC via `/api/agency/leads/:leadId/build`, set `personalization.enabled = true`
  - **Phase 2 (autonomous continuation)**: immediately codes hero UX on top of the clean plate (wordmark + eyebrow + sub + sticky CTA, `100dvh`, CSS center-crop on mobile), applies art bible to rest of fork. There is no human review pause after the hero images.
  - **Phase 3 (end handoff)**: final Higgsfield/manual video is deferred until OpenClaw marks `ready_for_higgsfield_video`.
- Then audit content is pasted into the personalized fork's `content.ts`
- Then `restaurant-fork-improvement` layers v1 → v2 polish on top

The personalization skill manages its own quality gates (no humans in any generated asset, `100dvh` hero with sticky CTA, art bible cohesion test, etc.). The MC build API enforces the gate server-side only when required hero assets or the art bible are missing.

## Fork Output

The fork should create:

- `<slug>/`
- package name updated to `<slug>`
- `.agency-template.json` describing template source and creation time
- no generated dependencies or build output

Personalized fork additionally creates:
- `<slug>/public/images/raw/` — raw generated images (`.gitignore`d from the deploy bundle but archived locally)
- `<slug>/public/videos/raw/` — raw generated videos (`.gitignore`d; archived only)
- `<slug>/art-bible.md` — design-system spec driving non-hero styling
- `<slug>/content.ts` — references Supabase image URLs for the clean plate/poster and a hero video URL only after Ethan/Higgsfield supplies one
