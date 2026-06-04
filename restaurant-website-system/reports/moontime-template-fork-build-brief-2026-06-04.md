# Codex Worker Brief: Moontime Smokin Que Template Fork Build

Task title: Website: Moontime Smokin Que - Fork template and build first preview
Task ID: bba3f80a-3a6e-4839-a6f7-ac3fd42320b6
Root task ID: ae265b4e-6262-4a57-9e02-176730a62260
Lead ID: 788d0e2a-8fea-4a88-9d28-bbc0263959a6
Repo path: /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system
Site path: sites/moontime-smokin-que
Feature branch: feature/moontime-template-fork-build
Current live gate source: fresh GET /api/agency/website-workflow/next?limit=5 at 2026-06-04T17:04Z

## Non-negotiables

- Work only on the live Mission Control selected item above. Do not route from cached next JSON, old briefs, local checklist state, existing branch names, or prior chat.
- Do not touch unrelated sites or skill files. The repo has a very dirty worktree; preserve all unrelated changes.
- Before any Mission Control API call, source `/Users/ethantalreja/.openclaw/workspace/scripts/load-mc-env.sh`. Do not treat `MC_SESSION_TOKEN` as missing until that resolver has run.
- Do not use raw Supabase for workflow state.
- Use normal local shell/Codex environment only.

## Git requirements

1. From the repo root, verify:
   - `git config user.name` must be `Ethan Talreja`
   - `git config user.email` must be `64980375+EthanTalreja@users.noreply.github.com`
2. Use/create branch `feature/moontime-template-fork-build`.
3. Commit only files for `sites/moontime-smokin-que/**` and this brief/report area if you add completion notes. Do not stage unrelated dirty files.
4. If GitHub auth is available, open a PR and enable squash auto-merge. If not, leave a precise blocker in MC and in your final output.

## Live Mission Control item

Selected website:
- Name: Moontime Smokin Que
- Site slug: `moontime-smokin-que`
- Build stage: `building`
- Workflow step ID: `template_fork_build`
- Completion state: `ready`
- Can start: true

Requirements to pass:
- `fork-built`: Template fork builds successfully with real content and preserved conversion links.
- `fork-preview`: Template fork/build produces a working preview URL or local preview evidence.
- `specificity`: First build uses real restaurant facts, menu/service cues, and conversion paths instead of generic restaurant copy.

Missing evidence from MC:
- Template fork path or branch URL
- Build/typecheck output
- Preview URL or local preview evidence
- Build notes

Writeback endpoint:
- `PATCH /api/agency/leads/788d0e2a-8fea-4a88-9d28-bbc0263959a6/build`

Writeback must include:
- `source: "openclaw"`
- `actor: "evan"`
- `mc_task_id: "ae265b4e-6262-4a57-9e02-176730a62260"`
- `build_stage: "building"`
- `passed_requirement_ids`: include only requirements actually satisfied, ideally all three above
- `evidence_urls` / accepted artifact paths for build notes, build output, screenshots, and fork path/branch/PR
- `idempotency_key`

## Context already present

The site folder already exists and appears to have been forked from `bramble-01`:
- `sites/moontime-smokin-que/.agency-template.json`
- `sites/moontime-smokin-que/app/page.tsx`
- `sites/moontime-smokin-que/content.example.ts`
- `sites/moontime-smokin-que/art-bible.md`
- `sites/moontime-smokin-que/public/images/raw/inspo.png`
- `sites/moontime-smokin-que/public/images/raw/plate.png`
- Review packet and current-site audit evidence are already present per live MC evidence.

Treat the existing folder as the draft fork to complete; do not re-fork with `--force` unless the fork is unusable and you can justify it.

## Implementation scope

Complete the first preview build for Moontime:

1. Inspect `audit.md`, `reviews/google-reviews-highest-30.json`, `reviews/google-review-themes-summary-2026-06-04.md`, `routing/template-routing-2026-06-04.md`, `art-bible.md`, `checklist.json`, and existing source files.
2. Ensure the page uses real Moontime facts:
   - BBQ/smoked meat identity
   - Crystal Lake, IL location
   - verified conversion paths from existing artifacts: menu, contact, call, directions, order/reservation/catering only when verified
   - review themes from the Google review packet
3. Wire the clean plate image into the hero UX per `restaurant-hero-personalization`.
4. Keep the bramble/template structure recognizable, but replace generic copy/content with restaurant-specific content.
5. Run verification from `sites/moontime-smokin-que`:
   - dependency install only if needed
   - `npm run build` or the repo's available build/typecheck script
   - run a local preview/dev server long enough to capture desktop and mobile screenshots if feasible
6. Save evidence under `sites/moontime-smokin-que/`, for example:
   - `build-first-preview-2026-06-04.md`
   - `build-check-output-2026-06-04.txt`
   - `screenshots/first-preview-desktop-2026-06-04.png`
   - `screenshots/first-preview-mobile-2026-06-04.png`
7. Update `checklist.json` and `checklist.md` to reflect the building gate evidence and current stage.
8. Write back to Mission Control through the endpoint above.
9. Re-fetch `/api/agency/website-workflow/next?limit=5` after writeback and report whether MC advanced to the next gate.

## Final output format

Return:
- Files changed
- Verification commands and results
- MC writeback status and whether `/next` advanced
- PR URL, or exact reason PR was not created
- Any blocker, with one concrete unblock action
