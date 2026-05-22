# Skill Seeds

Proposed narrow skills, each with a clear scope, trigger, and artifact contract. **Skills only get promoted out of this file into `skills/[skill-name]/SKILL.md` when a real workflow has used them ≥2 times** — this prevents speculative skill bloat.

> **Status:** seeded with candidates from the original spec. Promote and refine as workflows mature.
> **Promotion target:** `/Users/ethantalreja/skills/[skill-name]/SKILL.md` (lives alongside the rest of the skills library).

---

## Skill seed schema

```
### [skill-name]
- **What it does:** (one sentence)
- **When it triggers:** (specific situation)
- **Inputs needed:**
- **Outputs / artifacts:**
- **Backed by:** instructions-only / starter-kit code / shared component
- **Promotion status:** seed / drafted / promoted (link to SKILL.md)
- **Replaces / supersedes:** (any existing skill it carves out of)
```

---

## 1. Routing skills

### restaurant-site-router
- **What it does:** given a brief, walks `research/site-router.md` and recommends a template + modifiers.
- **When it triggers:** new restaurant project, brief in hand, no template chosen yet.
- **Inputs needed:** completed brief intake (cuisine, price point, atmosphere, service type, day-part, conversion priorities).
- **Outputs / artifacts:** template recommendation + modifier list + reasoning, written into the fork's README.
- **Backed by:** instructions-only (the router doc does the heavy lifting).
- **Promotion status:** seed
- **Replaces:** ad-hoc template-picking from `agency-website-design/SKILL.md` §6.9

### restaurant-archetype-classifier
- **What it does:** given partial brief data, classifies the restaurant into one or more archetypes from `restaurant-archetypes.md`.
- **When it triggers:** brief is fuzzy, archetype unclear, before invoking the router.
- **Inputs needed:** any signals available (existing site, social media, Google reviews, menu).
- **Outputs / artifacts:** ranked archetype matches with confidence + missing-data questions.
- **Backed by:** instructions-only.
- **Promotion status:** seed

---

## 2. Section / pattern selection skills

### restaurant-hero-selector
- **What it does:** picks the right hero variant (fullbleed video / editorial split / quiet / moody overlay / asymmetric) for a given archetype + photo asset quality.
- **When it triggers:** building a fork, hero needs to be specified.
- **Inputs needed:** archetype, available photo/video assets, motion intensity tolerance.
- **Outputs / artifacts:** hero variant choice + asset spec + fallback if assets are weak.
- **Backed by:** instructions + reference to template hero implementations.
- **Promotion status:** seed

### restaurant-menu-layout
- **What it does:** picks menu presentation pattern (magazine / tabbed / accordion / pdf-link / featured-only) for a given archetype + menu size.
- **When it triggers:** building a fork, menu needs to be presented.
- **Inputs needed:** archetype, number of menu sections, item counts, dietary tag complexity.
- **Outputs / artifacts:** menu layout choice + content schema + mobile pattern.
- **Backed by:** instructions + reference to template menu implementations.
- **Promotion status:** seed

### restaurant-section-sequencer
- **What it does:** decides the homepage section order for a fork, based on archetype + conversion priorities.
- **When it triggers:** fork is starting, section order needs locking.
- **Inputs needed:** archetype, primary conversion goal, day-part, multi-service flag.
- **Outputs / artifacts:** ordered section list + rationale per section.
- **Backed by:** instructions + the section-order archetypes in `pattern-library.md`.
- **Promotion status:** seed

### reservation-cta-patterns
- **What it does:** picks the right CTA pattern (single ceremonial / dual conversion / sticky mobile / hidden-in-nav).
- **When it triggers:** building a fork, CTA strategy needs setting.
- **Inputs needed:** archetype, reservation intensity, mobile traffic share.
- **Outputs / artifacts:** CTA placement + style + copy + link target.
- **Backed by:** instructions.
- **Promotion status:** seed

### restaurant-gallery-system
- **What it does:** picks gallery pattern (masonry / equal grid / horizontal scroll / editorial pair / IG embed).
- **When it triggers:** building a fork, gallery is part of the section sequence.
- **Inputs needed:** archetype, photo count, photo quality consistency.
- **Outputs / artifacts:** gallery variant + image count + mobile behavior.
- **Backed by:** instructions.
- **Promotion status:** seed

---

## 3. Brand / visual skills

### restaurant-brand-theming
- **What it does:** translates a restaurant's existing brand (logo, colors, type, social presence) into a `theme.ts` for a chosen template.
- **When it triggers:** fork is happening, brand swap is needed.
- **Inputs needed:** logo, brand colors, type preferences (or existing site to extract from), reference photos.
- **Outputs / artifacts:** filled `theme.ts` conforming to `shared/tokens/theme.ts` contract.
- **Backed by:** code (the theme contract) + instructions.
- **Promotion status:** seed
- **Replaces:** ad-hoc theming from `agency-website-design/SKILL.md` §6

### restaurant-photo-treatment-guidance
- **What it does:** picks the photo treatment (warm-graded / desaturated / duotone / cinematic / natural-daylight) appropriate to archetype + provided photos.
- **When it triggers:** fork is happening, photos need consistency pass.
- **Inputs needed:** archetype, raw photos, motion intensity.
- **Outputs / artifacts:** treatment recipe (filter values, crop guidance, fallback if photos are weak).
- **Backed by:** instructions.
- **Promotion status:** seed

---

## 4. Polish / quality skills

### fine-dining-site-polish
- **What it does:** QA pass specifically for fine-dining and editorial-luxury forks. Checks for the failure modes specific to this register (over-busy, missing stillness, wrong CTA tone, mobile reservation friction).
- **When it triggers:** fork is in QA, archetype is fine-dining or editorial-luxury.
- **Inputs needed:** the fork URL/preview.
- **Outputs / artifacts:** punch list of polish issues.
- **Backed by:** instructions.
- **Promotion status:** seed

### casual-neighborhood-site-builder
- **What it does:** end-to-end fork builder optimized for casual neighborhood briefs. Speed-prioritized.
- **When it triggers:** brief routes to casual neighborhood archetype.
- **Inputs needed:** brief + brand assets.
- **Outputs / artifacts:** completed fork ready for content.
- **Backed by:** code (calls the lively-casual template) + instructions.
- **Promotion status:** seed

### restaurant-mobile-conversion-audit
- **What it does:** audits a fork specifically for mobile reservation/menu/contact conversion clarity.
- **When it triggers:** fork is in QA.
- **Inputs needed:** fork URL/preview.
- **Outputs / artifacts:** mobile-specific punch list with fixes.
- **Backed by:** instructions.
- **Promotion status:** seed

### restaurant-template-recreation
- **What it does:** recreates a Framer template (or other reference site) into a `templates/[slug]/` Next.js 14 app.
- **When it triggers:** new template paste arrives, audit complete, ready for code recreation.
- **Inputs needed:** completed audit, source URL, screenshots, any HTML exports.
- **Outputs / artifacts:** fully built `templates/[slug]/` directory + updates to `template-inventory.md` and `pattern-library.md`.
- **Backed by:** code (the Next.js scaffold) + instructions.
- **Promotion status:** drafted (executed twice — `qitchen-01` and `1776-redesign-01`. Ready for promotion to `~/skills/restaurant-template-recreation/SKILL.md`).
- **Notes:** this is the workhorse skill — all other code-based skills depend on the template catalog this builds. Reference recreations: `templates/qitchen-01/` and `templates/1776-redesign-01/`. Stack: Next.js 14 + TypeScript + Tailwind v3 + Framer Motion. Pattern: `theme.ts` (locked tokens) → `tailwind.config.ts` (consumes theme) → `content.example.ts` (placeholder schema) → `components/*.tsx` (template-specific) → `app/*/page.tsx` (compositions). Both recreations followed identical structural patterns despite very different design languages — confirms the template-pattern is mature.

### restaurant-template-analysis ✅ PROMOTED
- **What it does:** turn an opaque rendered restaurant website into a complete, ground-truthed audit with measurable design tokens, structural insights, and motion behavior — using a four-pass capture pipeline (full-page screenshots, scroll-position frames, hover states, page-load videos with frame extraction, computed-style + asset metadata).
- **When it triggers:** any time a Framer restaurant template URL or live restaurant website URL needs to be analyzed before being added to the catalog.
- **Inputs needed:** template URL, list of sub-page paths.
- **Outputs / artifacts:** populated `inputs/framer-templates/[slug]/{screenshots,scroll-frames,videos,motion-frames,meta}/` + a locked audit + downstream updates to inventory/router/pattern-library/design-tokens.
- **Backed by:** code (`scripts/shoot-template.sh` + `shoot-template.mjs`) + comprehensive instructions.
- **Promotion status:** **PROMOTED** to `/Users/ethantalreja/skills/restaurant-template-analysis/SKILL.md` (executed once on `qitchen-01`; methodology is concrete enough to bottle now — premise of the rule was "avoid speculative skills," not "wait for arbitrary count").

---

## 5. Promotion principles

- **Earn promotion:** a skill seed becomes a real `skills/[skill-name]/SKILL.md` only after being executed ≥2 times in real workflows.
- **Stay narrow:** if a skill grows beyond ~300 lines of SKILL.md instruction, it's probably two skills. Split it.
- **No skill imports another skill's internals.** Skills compose by handoff, not by reaching in.
- **Cite this file from each promoted skill** so the lineage is traceable.
