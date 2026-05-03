# Restaurant Website System

A catalog-and-fork system for building world-class restaurant websites quickly and repeatedly.

> **Cold-start brief for any agent:** Read this whole file before doing anything. The mental model in §2 governs every decision.

---

## 1. What this is

A reverse-engineered system built from Framer restaurant templates and best-in-class restaurant websites. Three things live here:

1. **`templates/`** — full, coherent recreations of world-class restaurant sites. Each template is a self-contained Next.js 14 app representing one complete aesthetic (e.g., editorial-luxury, moody-speakeasy, warm-rustic). **This is the main unit.**
2. **`research/`** — markdown analysis: per-template audits, cross-template patterns, restaurant archetypes, and the router that picks the right template for a given brief.
3. **`shared/`** — intentionally small library of motion curves, atomic UI primitives, and token type contracts. Does **not** contain Hero/Menu/Gallery — those live inside templates because they are the template.

Stack: **Next.js 14 (app router) + TypeScript + Tailwind v3 + Framer Motion.**

---

## 2. Mental model: catalog and fork

**Templates are a catalog. Forks are projects.**

- A **template** is a frozen, world-class reference implementation. Cohesive. Opinionated. Mostly write-once-read-many.
- A **fork** is a restaurant-specific project, branched from the best-fit template, then personalized.

```
brief comes in
    ↓
research/site-router.md → recommends template (e.g. warm-rustic-02)
    ↓
scripts/fork-template.sh --template warm-rustic-02 --slug nonna-portland → standalone project
    ↓
scripts/new-build-checklist.mjs --slug nonna-portland --lead-id ... --task-id ... --template warm-rustic-02
    ↓
swap theme.ts (brand tokens) + content.example.ts (real menu/photos/copy)
    ↓
audit + QA rounds → personalize per the audit's personalization manifest
    ↓
ship
```

**Why this beats a primitives library:** cohesion is a design property of the *whole page*, not the sum of parts. A "moody speakeasy" aesthetic is the *specific* way nav recesses, hero overlays layer, menu typography sets — pulling those into shared primitives loses cohesion in the assembly. Templates preserve cohesion by inheriting it from world-class sources.

---

## 3. Two-phase operating mode

**Phase 1 — first ~5 restaurants. Template-y is fine.**
Fork → swap brand tokens → swap content → ship. ~1 day per site. Don't over-engineer personalization. Two clients on the same template looking like cousins is acceptable. Volume > differentiation.

**Phase 2 — scale (around restaurant #5–10 onward). Differentiation matters.**
Same fork flow, but with deeper personalization: rearrange section order, lift sections from other templates, custom photo treatment, bespoke copy patterns. ~2–5 days per site. The **personalization manifest** in each template's audit becomes the playbook for what's safe to alter without breaking cohesion.

The architecture is the same in both phases. What changes is depth of work per fork and maturity of `shared/` and `pattern-library.md`. Patterns graduate into `shared/` only after they're observed repeating across multiple world-class sources — earned, not speculated.

---

## 4. Folder layout

```
restaurant-website-system/
├── README.md                          ← you are here
├── templates/                         ← THE MAIN UNIT — full recreations
│   └── [template-slug]/
│       ├── app/                       (Next.js 14 app router)
│       ├── components/                (template-specific, not shared)
│       ├── theme.ts                   (locked aesthetic — colors/type/motion)
│       ├── content.example.ts         (placeholder content schema)
│       ├── README.md                  (vibe, fits, swap-points, audit link)
│       └── source.md                  (source URL, screenshots, what was recreated)
├── shared/                            ← small + disciplined
│   ├── tokens/                        (token type contracts, not values)
│   ├── motion/                        (easing curves, reveal primitives)
│   ├── ui-atoms/                      (Button, Image, Reveal — truly atomic)
│   └── lib/                           (image loaders, responsive helpers)
├── research/
│   ├── template-inventory.md          (Layer 1 — ranked master list)
│   ├── template-audits/
│   │   ├── _TEMPLATE.md               (audit template — copy this for each new template)
│   │   └── [template-slug].md
│   ├── pattern-library.md             (Layer 3 — observed cross-template patterns)
│   ├── restaurant-archetypes.md       (Layer 3 — routing categories)
│   ├── design-tokens-and-variants.md  (Layer 3 — token/variant catalog)
│   ├── site-router.md                 (Layer 5 — template selection logic)
│   └── skill-seeds.md                 (Layer 5 — narrow skill proposals)
├── inputs/
│   ├── README.md                      (how to paste source material)
│   ├── framer-templates/              (Framer URLs, screenshots, HTML exports)
│   └── reference-sites/               (best-in-class non-Framer sites)
└── scripts/
    ├── fork-template.sh               (copy a template into sites/<slug>)
    ├── new-build-checklist.mjs        (create checklist.md + checklist.json)
    └── new-audit.sh                   (scaffold a new audit from _TEMPLATE.md)
```

---

## 5. Workflows

### 5.1 Adding a new template (URL → deep capture → audit → recreation)

1. **Capture.** Run the deep-analysis pipeline:
   ```
   ./scripts/shoot-template.sh [slug] [base-url] / /menu /about /reservation
   ```
   This produces full-page screenshots (desktop + mobile), scroll-position frames, page-load videos, motion frames extracted from the videos, and computed-style + animation + asset metadata. See the [`restaurant-template-analysis` skill](../restaurant-template-analysis/SKILL.md) for the full methodology — the four-pass pipeline, what to look for in each artifact, and common failure modes.
2. **Write `inputs/framer-templates/[slug]/source.md`** — URL, vibe first-impression, likely archetype match. (Gives the auditor 30 seconds of orientation.)
3. **Scaffold the audit:** `./scripts/new-audit.sh [slug]` → creates `research/template-audits/[slug].md` from `_TEMPLATE.md`.
4. **Fill the audit** using the captured artifacts. Tag every visual claim `[observed]` (from `meta/*.json` or screenshots) or `[inferred]` (educated guess). The last two sections — *Component mapping* and *Personalization manifest* — are non-negotiable; they're what makes the template usable later.
5. **Update downstream `research/` files:** template-inventory (row + rankings + coverage map), site-router (route assignments), pattern-library (cross-template patterns), design-tokens-and-variants (new variant classes).
6. **Recreate as `templates/[slug]/`** — full Next.js 14 app, faithful to the source's design logic. Use placeholder content from a coherent fictional restaurant; real personalization happens at fork time.
7. **Verify the recreation:** `npm run typecheck && npm run build`, then start the server and screenshot side-by-side against `inputs/framer-templates/[slug]/screenshots/` to verify fidelity.

### 5.2 Forking a template for a real restaurant

1. Run `scripts/fork-template.sh --template [template-slug] --slug [restaurant-slug]`.
2. Run `scripts/new-build-checklist.mjs --slug [restaurant-slug] --lead-id [agency_leads.id] --task-id [mc-task-id] --template [template-slug]`.
3. Mirror the checklist rows to Mission Control via the agency build update API.
4. Replace `theme.ts` with the restaurant's brand tokens.
5. Replace `content.example.ts` with real menu, photos, copy, hours, reservation links.
6. Walk the audit's *personalization manifest* — execute the safe swaps, leave the locked pieces alone (Phase 1) or carefully extend them (Phase 2).
7. Run three QA rounds and write each round back to Mission Control.
8. Ship only when MC requirements and completion evidence pass.

---

## 6. What this system explicitly does NOT do

- Does not generate code from spec each build. The world-class bar is enforced *in code*, not re-derived per project.
- Does not pre-build primitives speculatively. Components graduate into `shared/` only after being observed in multiple world-class sources.
- Does not optimize for pixel-perfect cloning. We extract design *logic*, not pixel values, and recreate with intent.
- Does not produce one giant monolithic skill. Narrow skills get proposed in `research/skill-seeds.md` and promoted into `skills/` only when they earn it.

---

## 7. Relationship to the existing `agency-website-design` skill

The 5,581-line `skills/agency-website-design/SKILL.md` is treated as **Input Zero** — the first reference site mined during pattern-library and archetype work. Its 8-template analysis, extracted pixel values, and theme system are valuable raw material. This system supersedes it piece by piece as narrow skills get promoted.

---

## 8. Quality bar

Every artifact (audit, template, kit, skill) must be useful to a cold-start agent that has never seen this conversation. If it requires context from chat to understand, it's not done.

---

## 9. Storage policy

**What's committed:**
- All markdown (audits, READMEs, research/, source.md per input)
- `inputs/*/*/meta/*.json` — small text files with ground-truth design tokens (font names, colors, sizes, animation declarations). These preserve enough design info to re-recreate a template even if every screenshot is wiped.
- All template source code (`templates/*/`)
- Template `public/placeholder/` images — small (~2MB per template), runtime-needed
- Scripts, configs, package.jsons

**What's `.gitignore`d (regenerable, big):**
- `inputs/*/*/screenshots/` (~30MB per template)
- `inputs/*/*/scroll-frames/` (~10–125MB per template)
- `inputs/*/*/videos/` (~5–10MB per template)
- `inputs/*/*/motion-frames/` (~15MB per template)
- `templates/*/recreation-screenshots/`
- All `node_modules/` and `.next/` build outputs

**To regenerate captures after a fresh clone or `git clean`:**
```
./scripts/regenerate-captures.sh              # all templates
./scripts/regenerate-captures.sh qitchen-01   # one template
./scripts/regenerate-captures.sh --force      # recapture even if present
```
The script reads each `inputs/*/*/source.md` for the URL + sub-page list and re-runs the pipeline.

**Templates run without captures.** A template's `templates/[slug]/` directory is fully self-contained — `npm install && npm run dev` works regardless of whether `inputs/` has screenshots present.
