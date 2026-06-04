# Codex Worker Brief: Moontime Smokin' Que Improvement Pass

Task title: Website: Moontime Smokin Que - Run website improvement pass against audit findings
Task ID: a969f455-cb55-4b45-b77d-f0aaca12a671
Root task ID: ae265b4e-6262-4a57-9e02-176730a62260
Lead ID: 788d0e2a-8fea-4a88-9d28-bbc0263959a6
Workflow step ID: improvement_pass
Repo path: /Users/ethantalreja/.openclaw/workspace/GitHub/skills
Site path: restaurant-website-system/sites/moontime-smokin-que
Desired feature branch: feature/moontime-improvement-pass

## Live Mission Control Context

Fresh `/api/agency/website-workflow/next?limit=5` selected this as the current gate after the template fork build advanced:

- task_id: a969f455-cb55-4b45-b77d-f0aaca12a671
- title: Website: Moontime Smokin Que - Run website improvement pass against audit findings
- workflow_step_id: improvement_pass
- build_stage: improving
- writeback endpoint: PATCH /api/agency/leads/788d0e2a-8fea-4a88-9d28-bbc0263959a6/build
- missing requirements:
  - improvement-pass-complete
  - conversion-paths
  - mobile-check
- missing evidence:
  - Before/after notes
  - Preview URL after pass
  - Audit finding coverage map

## Required Skills Already Resolved

Read and follow these canonical skill files:

- /Users/ethantalreja/.openclaw/workspace/GitHub/mission-control/skills/agency-crm-mission-control/SKILL.md
- /Users/ethantalreja/.openclaw/workspace/GitHub/skills/website-agency-operator/SKILL.md
- /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-fork-improvement/SKILL.md
- /Users/ethantalreja/.openclaw/workspace/GitHub/skills/agency-mission-control-sync/SKILL.md

## Hard Requirements

1. Do not use raw Supabase.
2. Before every Mission Control API call, source `/Users/ethantalreja/.openclaw/workspace/scripts/load-mc-env.sh`.
3. Preserve unrelated dirty work. The repo may already be dirty from other agency sites and from the just-completed Moontime template fork build. Do not revert, reset, delete, or overwrite unrelated changes.
4. Verify git identity before any commit:
   - user.name = Ethan Talreja
   - user.email = 64980375+EthanTalreja@users.noreply.github.com
5. If the existing dirty worktree prevents safe branch/commit/PR, do not force it. Record the exact blocker in the evidence. If safe, create/use `feature/moontime-improvement-pass`, commit only Moontime improvement-pass changes, open a PR, and enable squash auto-merge.
6. This is not a redesign. Polish the existing bramble-01 fork from first preview to pitch-ready.

## Implementation Scope

Work only under:

- `restaurant-website-system/sites/moontime-smokin-que/**`

Use the restaurant-fork-improvement skill:

- Build the anonymous auto-moving `ReviewCarousel` pattern first unless the local structure proves an equivalent already exists.
- Tighten copy in `content.example.ts`; keep the Moontime-specific facts and verified links from the first preview.
- Add or refine small animation/interaction upgrades that fit the existing bramble-01 template without adding new sections or a new animation library.
- Explicitly verify conversion paths: order, menu, catering/events, call, email, directions, gift cards/rewards/social as applicable. Do not add a reservation path unless a verified reservation URL exists.
- Perform a mobile-focused static/render check where the environment allows it. If browser screenshots are blocked, use static export text/link checks and document the limitation precisely.

## Evidence To Produce

Create/update local evidence:

- `restaurant-website-system/sites/moontime-smokin-que/improvement-pass-2026-06-04.md`
  - Top 3 improvements
  - Before/after notes
  - Audit finding coverage map
  - Conversion path verification
  - Mobile check result or exact blocker
- `restaurant-website-system/sites/moontime-smokin-que/improvement-check-output-2026-06-04.txt`
- `restaurant-website-system/sites/moontime-smokin-que/improvement-preview-check-2026-06-04.json`
- Update checklist MD/JSON for the improvement_pass gate.

## Verification

Run from `restaurant-website-system/sites/moontime-smokin-que`:

- `npm run typecheck`
- `npm run build`

If a dev server/browser can run, capture desktop/mobile screenshots. If not, verify the static export:

- `out/index.html` exists
- review carousel content is present
- conversion links are present and correct
- mobile-sensitive text does not obviously overflow based on exported HTML/classes and any available static checks

## Mission Control Writeback

After verification, PATCH the returned MC endpoint:

`PATCH /api/agency/leads/788d0e2a-8fea-4a88-9d28-bbc0263959a6/build`

Include:

- source: openclaw
- actor: evan
- mc_task_id: ae265b4e-6262-4a57-9e02-176730a62260
- child_task_id: a969f455-cb55-4b45-b77d-f0aaca12a671
- workflow_step_id: improvement_pass
- build_stage: improving
- site_slug: moontime-smokin-que
- passed_requirement_ids: ["improvement-pass-complete", "conversion-paths", "mobile-check"] if all are satisfied
- evidence paths for notes, build output, preview check, static preview, checklist MD/JSON, and any screenshots
- blocker only if a required gate cannot be satisfied
- idempotency_key: moontime-smokin-que-improvement-pass-2026-06-04-v1

Then re-fetch:

`GET /api/agency/website-workflow/next?limit=5`

Save MC request/response captures under:

`restaurant-website-system/sites/moontime-smokin-que/mc-payloads/`

## Final Response Format

Report:

- files changed
- verification commands and outcomes
- MC writeback outcome and post-writeback `/next` result
- PR URL or exact blocker
