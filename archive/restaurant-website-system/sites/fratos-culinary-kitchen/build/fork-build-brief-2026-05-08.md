# Codex brief — Frato's Culinary Kitchen template fork/build

You are executing the `template_fork_build` gate for Spiral's restaurant website agency. This is repo/site implementation work, so code/content edits belong in this Codex worker, not the parent orchestrator.

## Context

- Repo root: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system`
- Site path: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen`
- Template source: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/templates/pepper-01`
- Lead: `Frato's Culinary Kitchen`
- Lead ID: `cec3f7af-ab8d-4785-af76-e57e743cdf25`
- MC root task ID: `fdead14c-0079-4168-b6b7-c8b80218a681`
- Template fork/build child task ID: `e2f35c8a-3a78-4eb5-85a1-1f3a8f8503b3`
- Current MC stage has already been advanced to `building`.
- Selected route: `Cuisine` / `pepper-01`

## Required skill contracts to read first

- `/Users/ethantalreja/.openclaw/workspace/skills/website-agency-system/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/website-agency-operator/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-template-fork/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-build-checklist/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/agency-mission-control-sync/SKILL.md`

## Important constraints

- Do **not** delete existing evidence artifacts under `sites/fratos-culinary-kitchen`.
- Do **not** run `fork-template.sh --force` unless truly necessary. The site directory already contains `.agency-template.json` pointing to `pepper-01` and scaffold files, but the routing worker did not validate/build them.
- If you need to copy missing `pepper-01` files, merge safely and preserve audit/checklist/reviews/routing/MC artifacts.
- Use exactly the selected template `pepper-01` as the source of truth for structure/pacing. Do not switch templates.
- Personalize from public evidence only; no fake claims, fake review snippets, fake awards, fake prices, or invented hours.
- Review proof on the public site must be anonymous/source-safe. Do not expose reviewer names, initials, dates, avatars, or exact attributions.
- Google proof verified: `4.2 stars / 554 reviews` from Google Maps Highest packet.
- Preserve/verify core facts from artifacts rather than guessing.

## Grounding artifacts

Read these before implementing:

- `qualification.md`
- `checklist.md`
- `checklist.json`
- `audit.md`
- `audit.json`
- `routing.md`
- `routing.json`
- `scrapes/current-site-capture-summary.json`
- `scrapes/google-reviews-highest-30.md`
- `scrapes/google-reviews-highest-30.json`
- Current site scrapes under `scrapes/`
- Screenshot evidence under `screenshots/`
- Template docs/source under `../../templates/pepper-01/`

## Business identity to preserve

Frato's should feel like a distinctive casual comfort-food / pizza / culinary kitchen, not a generic pizza template or luxury restaurant:

- Signature novelty/proof: giant mozzarella stick / huge mozzarella stick energy.
- Creative comfort food: pizza slices, burgers, wings, mac-and-cheese style comfort, shakes/dessert drink cues where verified.
- Casual/fun atmosphere: retro/chill/family/group-friendly energy from review themes.
- Conversion path: order online first, call for carryout, directions/contact. Preserve OrderStart/order behavior when verified.
- Public proof: 4.2 stars / 554 Google reviews, plus anonymous review themes around giant mozz stick, creative comfort food, value/large portions, chill/fun vibe.

## MC requirements to satisfy

Only mark these passed if actually true:

- `fork-built` — Template fork/build is complete with real content and preserved conversion links.
- `fork-preview` — Build/typecheck output and preview/local preview evidence exist.
- `specificity` — Frato's site is specific and avoids generic/fake restaurant claims.

## Implementation tasks

1. Inspect current site directory vs `templates/pepper-01`. If scaffold files are missing or stale, safely merge from template without deleting evidence artifacts.
2. Personalize the site with real Frato's content from audit/reviews/routing:
   - update `content.example.ts` and any app/components needed
   - set package name to `fratos-culinary-kitchen`
   - set metadata/title/description to Frato's
   - preserve actual phone/address/order/contact links from artifacts
   - use only verified hours/order/catering facts; if uncertain, use call/confirm language
   - include 4.2 / 554 Google proof and anonymous review themes source-safely
   - make primary CTA order-first and mobile-friendly
3. Run install/check/build gates inside the site:
   - `npm install` only if needed
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`
   Save output under `evidence/` or `build/evidence/` with dated filenames.
4. Run a local preview if possible and capture desktop/mobile screenshots. If server bind/browser capture is blocked, document exact blocker and use static/build/render checks truthfully.
5. Create/update artifacts:
   - `build/fork-build-evidence-2026-05-08.md`
   - `build/fork-preview-check-2026-05-08.json`
   - screenshots under `build/screenshots/` if possible
   - update `checklist.md` / `checklist.json`
6. Sync completion to Mission Control via protected `/build` PATCH:
   - endpoint: `https://hq.ethantalreja.com/api/agency/leads/cec3f7af-ab8d-4785-af76-e57e743cdf25/build`
   - `build_stage`: `building`
   - `status`: `in_progress`
   - `site_slug`: `fratos-culinary-kitchen`
   - `template_slug`: `pepper-01`
   - `mc_task_id`: `fdead14c-0079-4168-b6b7-c8b80218a681`
   - checklist paths
   - `current_site_scrape_path`: `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/current-site-capture-summary.json`
   - `google_reviews_packet_path`: `restaurant-website-system/sites/fratos-culinary-kitchen/scrapes/google-reviews-highest-30.md`
   - `passed_requirement_ids`: `fork-built`, `fork-preview`, `specificity` if gates pass
   - `evidence_urls`: build evidence, preview check, screenshots, package/template metadata
   - no raw Supabase writes
   Save as:
   - `mc-template-fork-build-sync-payload-2026-05-08.json`
   - `mc-template-fork-build-sync-2026-05-08.json`

Use Authorization bearer from env (`SUPABASE_SECRET_KEY` fallback `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_SERVICE_KEY`) and `x-agency-runtime: openclaw`.

## Done response

Return concise summary:

- changed files
- commands/checks and results
- preview/screenshot evidence
- MC sync result
- blockers/caveats
- whether `improvement_pass` can start next
