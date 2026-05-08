# The Chef Grill — improvement pass Codex brief

You are a Codex worker operating in `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system`.

## Mission

Complete the canonical `improvement_pass` gate for The Chef Grill (`sites/the-chef-grill`) after the first `plate-01` fork/build.

Mission Control has already been advanced to `build_stage: improving`; your job is to improve the fork, verify it, write evidence, and sync the `improvement_pass` child to done only if requirements are truthfully satisfied.

## IDs / state

- Site slug: `the-chef-grill`
- Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
- MC root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- MC child task: `36e1ff99-3fda-4415-bc02-83e76481048c`
- Current route: Cuisine archetype, concrete template `plate-01`
- Current local preview/artifact: `http://127.0.0.1:3041` may or may not still be running; verify locally rather than assuming.

## Read first

Required skill contracts:

- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-fork-improvement/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/website-agency-operator/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/agency-mission-control-sync/SKILL.md`

Site artifacts to ground the pass:

- `sites/the-chef-grill/checklist.md`
- `sites/the-chef-grill/checklist.json`
- `sites/the-chef-grill/audit.md`
- `sites/the-chef-grill/routing.md`
- `sites/the-chef-grill/routing.json`
- `sites/the-chef-grill/scrapes/google-reviews-highest-30.md`
- `sites/the-chef-grill/build/fork-build-evidence-2026-05-08.md`
- `sites/the-chef-grill/build/fork-preview-check-2026-05-08.json`

## Improvement-pass requirements

Pass these MC requirement IDs only when satisfied:

1. `improvement-pass-complete` — improvement pass maps changes back to current-site audit findings.
2. `conversion-paths` — primary conversion paths are visible and accurate: order/menu/call/directions/reserve/planning as applicable.
3. `mobile-check` — mobile pass is explicitly checked and evidence is attached.

Evidence required:

- Before/after notes
- Preview URL after pass or local preview evidence
- Audit finding coverage map
- Mobile check evidence

## What to improve

Use the `restaurant-fork-improvement` skill, but do **not** start the separate `top_three_improvements` gate. This is the v1 → improved pass.

Prioritize:

1. **Anonymous review carousel / proof surface**
   - If the fork does not already have the locked anonymous auto-scroll review carousel, add it.
   - Use only short 8–18 word quote fragments from `google-reviews-highest-30.md`.
   - No reviewer names, initials, avatars, dates, or fake verification badges.
   - Platform tag only: `Google Review`.

2. **Conversion clarity**
   - Mobile-first CTAs: Order Online, View Menu, Call, Directions.
   - Preserve truthful links/facts only:
     - phone `3123138900`
     - address `812 E Higgins Rd, Elk Grove Village, IL`
     - official site/menu/order/provider links from the existing artifacts
   - Do not invent hours, catering, private events, founding year, owner bio, or reservations if not supported.

3. **Copy tightening and audit coverage**
   - Tighten hero/section copy to be specific: halal Turkish & Mediterranean grill, charcoal kebabs, fresh bread, pide/lahmacun, Iskender/Beyti/Adana, kunefe/kunafa/pistachio cheesecake, house ayran/Turkish tea where grounded.
   - Make the site feel unmistakably The Chef Grill, not generic Mediterranean.
   - Preserve `plate-01` structure and Cuisine pacing; do not redesign into a different archetype.

4. **Mobile polish**
   - Verify mobile hero, menu/proof sections, sticky CTAs, and contact/directions are usable.
   - Capture or save mobile evidence.

## Constraints

- Do not delete `scrapes/`, `screenshots/`, `build/`, `checklist.*`, `audit.*`, `routing.*`, or MC sync artifacts.
- Do not run `fork-template.sh --force`.
- Do not add unsupported claims.
- Do not start top-three, concierge, pitch, battle-card, QA, packaging, or delivery gates.
- Keep changes scoped to `sites/the-chef-grill` unless a shared helper is absolutely necessary; prefer local components/content.

## Verification

Run the smallest meaningful gates supported by the site:

- `npm run typecheck`
- `npm run build`
- If lint works, run it; if the package has obsolete `next lint`, record the failure without blocking if typecheck/build pass.
- Start a local preview/dev server only as needed to capture screenshots or route status.
- Verify at least home/menu/contact routes if they exist. If only one route exists, document that truthfully.

## Evidence to write

Create/update these artifacts:

- `sites/the-chef-grill/build/improvement-pass-2026-05-08.md`
  - before/after notes
  - audit finding coverage map
  - conversion path check
  - mobile check
  - commands run and results
  - remaining blockers/unknowns
- `sites/the-chef-grill/build/improvement-preview-check-2026-05-08.json`
  - route URLs checked, status, timestamp, command results
- screenshots if possible under `sites/the-chef-grill/build/screenshots/`, e.g.
  - `improvement-desktop-home-2026-05-08.png`
  - `improvement-mobile-home-2026-05-08.png`

Update:

- `sites/the-chef-grill/checklist.md`
- `sites/the-chef-grill/checklist.json`

## Mission Control sync

If and only if the three requirements pass, write payload:

`sites/the-chef-grill/mc-improvement-pass-sync-payload-2026-05-08.json`

PATCH:

`https://hq.ethantalreja.com/api/agency/leads/25633ae3-0c44-4d23-9996-da4440eeaa97/build`

Headers:

- `Authorization: Bearer $SUPABASE_SECRET_KEY` or fallback `$SUPABASE_SERVICE_ROLE_KEY` / `$SUPABASE_SERVICE_KEY`
- `x-agency-runtime: openclaw`
- `Content-Type: application/json`

Payload fields:

- `build_stage`: `improving`
- `status`: `in_progress`
- `site_slug`: `the-chef-grill`
- `template_slug`: `plate-01`
- `mc_task_id`: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- checklist paths, current-site scrape path, google reviews packet path
- `evidence_urls`: improvement markdown, preview JSON, screenshots, relevant build evidence
- `artifact_urls`: local preview URL if verified
- `passed_requirement_ids`: `improvement-pass-complete`, `conversion-paths`, `mobile-check`
- `heartbeat_summary`: one sentence

Save response as:

- `sites/the-chef-grill/mc-improvement-pass-sync-2026-05-08.json`

If anything blocks the pass, do not mark requirements passed. Instead write a local blocker artifact and sync a blocker through the build route.

## Final report

Report changed files, verification results, MC sync status, and blockers. Keep it concise.