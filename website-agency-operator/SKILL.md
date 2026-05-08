---
name: website-agency-operator
description: Autonomous restaurant website agency employee loop for OpenClaw. Use when running the website agency from Mission Control, selecting the next lead/build task, coordinating heartbeat progress, recording blockers in MC, and ensuring every build moves through checklist, audit, reviews, routing, fork/build, improvement, concierge, pitch, battle cards, QA, packaging, and delivery without hidden local state.
---

# Website Agency Operator

This is the primary operating skill for the restaurant website employee. Mission Control is the source of truth. Local files are working artifacts.

## Load Order

1. `agency-mission-control-sync` for API/writeback rules.
2. `restaurant-lead-qualification` before speculative/new-lead build decisions.
3. `restaurant-build-checklist` before any gate execution.
4. Gate-specific skills from the current child task's `metadata.required_skills`.
5. `restaurant-qa-delivery` and `restaurant-pitch-doc` before delivery.

Do not use `agency-overnight` for new work. It is only a compatibility pointer.

## Operating Loop

1. Call the MC planner first: `GET /api/agency/website-workflow/next?limit=5` with standard MC agency auth (`Authorization: Bearer $SUPABASE_SECRET_KEY` or the configured service-role fallback / MC session cookie).
2. Work exactly one selected website unless MC explicitly assigns a batch.
3. Resume from the selected root task's `tasks.metadata.build_stage` / `metadata.currentStage`, not from `agency_leads.metadata` or local files.
4. If the planner/auth fails, log the config blocker through MC heartbeat/activity when possible, do **not** mutate agency state through raw Supabase, and continue only with read-only diagnosis or local seed/evidence preparation.
5. If the selected lead lacks canonical root/children, use `PATCH /api/agency/leads/:leadId` for the normal lead transition into `in_progress` when applicable; MC auto-provisions only on that API transition from non-`in_progress` into `in_progress`. If direct Supabase drift already happened, repair with protected `POST /api/agency/leads/:leadId/website-workflow` using bearer/session auth plus `x-agency-runtime: openclaw` before build work.
6. Verify the current child has `requirements`, `evidence_required`, and `required_skills`. If missing, refresh/provision the workflow instead of improvising.
7. Resolve required skills: `../skills/...` paths are relative to the Mission Control repo; `browser-automation` is the global OpenClaw browser skill; `skill_gap: true` means use the named substitute and record the gap if it matters.
8. Create/refresh local `restaurant-website-system/sites/<slug>/checklist.json` and `checklist.md`.
9. Produce the current gate's evidence only, then write back through the relevant MC API.
10. Before advancing, confirm MC root stage and local checklist stage agree. If they differ, repair through MC API or log a blocker.

Sales status (`lead`, `pitched`, `in_progress`, `delivered`, `closed_won`, `closed_lost`) is separate from build progress. Direct Supabase status edits do not auto-provision website workflow tasks; use the MC lead PATCH route or the protected manual repair route.

## Canonical State Machine

Every autonomous build advances through exactly 15 child tasks in order. Use the exact gate name as root task `metadata.build_stage/currentStage` when possible. Adjacent child tasks are gated by 14 `task_dependencies`, and `tasks.metadata` is canonical for workflow identity, requirements, blockers, and evidence.

MC child mapping:

1. `lead_qualification` → `qualifying` — run lead-fit qualification and record Build/Re-route/Skip evidence.
2. `checklist` → `checklist` — claim/resume one website, create/update checklist artifacts, attach accepted checklist paths.
3. `current_site_audit` → `auditing` — desktop/mobile screenshots plus live scrape/DOM snapshot.
4. `google_reviews_capture` → `reviews` — Google Reviews, **Highest** filter, 30 written reviews, screenshots/JSON.
5. `template_routing` → `routing` — choose exactly one template/archetype and record `template_slug` plus rationale.
6. `template_fork_build` → `building` — fork/build the selected template with real restaurant content and preview evidence.
7. `improvement_pass` → `improving` — run improvement pass after first full fork.
8. `top_three_improvements` → `top_3_improvements` — implement/evidence the top three highest-leverage improvements.
9. `ai_concierge` → `concierge` — truthful restaurant KB, safe handoffs, no fake availability/promises; MC marks the missing dedicated concierge skill as `skill_gap: true`.
10. `pitch_doc` → `pitch` — create/update pitch doc.
11. `battle_cards` → `battle_cards` — create/update objection/demo battle cards.
12. `qa_round_1`, `qa_round_2`, `qa_round_3` — exactly three QA rounds via `/qa-rounds`.
13. `delivery` → `packaging` — package preview URL, screenshots, audit/review evidence, checklist, pitch doc, battle cards, QA rounds, and requirement status.
14. `delivered` — terminal `/build` state only after packaging evidence passes; not a separate child task.
15. `blocked` — terminal/temporary blocker state only when the next gate cannot truthfully advance.

## Writeback Rules

- Use `/build` for stage, checklist paths, scrape/review/pitch/battle-card paths, preview URL, evidence/artifact URLs, blockers, and passed requirement IDs.
- Use `/qa-rounds` for QA rounds.
- Use `/heartbeat` or `/activity` for work-loop summaries and auth/config blockers.
- Current `/build` does not accept arbitrary full checklist rows or structured lead metadata. Keep those in local artifacts and evidence URLs until MC exposes a supported field/route.

## Blocker Policy

Do not ask Ethan in chat for ordinary missing details. Instead:

- Record the blocker in the local checklist.
- Write it to Mission Control via the agency build update API when auth works.
- If protected agency auth is unavailable, log via heartbeat/activity and save a MC-compatible local payload.
- Include what was tried, why it is blocked, and the next concrete unblock action.

Examples of real blockers:

- Agency API auth/config missing.
- Google Reviews cannot be captured after browser/manual fallback.
- The current site is inaccessible and no alternate evidence exists.
- The template route would materially misrepresent the restaurant.
- Deploy fails after the local build is clean and the error needs account/DNS access.

## Done Criteria

A build is not deliverable until all are true:

- Lead qualification is passed or explicitly skipped with a recorded reason.
- Current-site audit evidence exists: browser screenshots plus scrape/DOM snapshot.
- Google Reviews evidence exists: **Highest** filter selected, 30 written reviews captured, screenshots/JSON attached.
- Template route is locked.
- Local checklist exists in markdown and JSON and accepted paths/evidence are mirrored to MC.
- Build uses real restaurant content and preserves working provider links.
- Website improvement pass is complete.
- Top 3 improvements are identified, implemented, and evidenced.
- AI concierge is present with a truthful restaurant-specific KB or a recorded MC blocker explains why it cannot be added.
- Pitch doc and battle cards doc are created/updated.
- Three QA rounds are logged through `/qa-rounds` with screenshots/evidence.
- MC task requirements/passed IDs and delivery evidence are current.
- Preview URL works.
- `/build` accepts the `delivered` transition.

## Forbidden Shortcuts

- Do not write directly to Supabase from skills when a Mission Control API exists.
- Do not use hardcoded target lists as the queue when planner auth works.
- Do not bury progress in local notes without MC writeback or a logged writeback blocker.
- Do not mark a task done if requirement rows or evidence are missing.
- Do not deliver from local artifacts alone; delivery requires evidence mirrored to Mission Control.
- Do not run multiple websites at once unless MC explicitly assigns a batch.
