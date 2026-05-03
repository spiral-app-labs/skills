---
name: website-agency-operator
description: Autonomous restaurant website agency employee loop for OpenClaw. Use when running the website agency from Mission Control, selecting the next lead/build task, coordinating heartbeat progress, escalating blockers to Donna/Ethan, and ensuring every build moves through qualification, audit, routing, fork, QA, pitch, and delivery without hidden local state.
---

# Website Agency Operator

This is the primary operating skill for the restaurant website employee. Mission Control is the source of truth. Local files are working artifacts.

## Load Order

1. `agency-mission-control-sync` for API/writeback rules.
2. `restaurant-lead-qualification` before any build decision.
3. `restaurant-website-audit` for the current-site audit.
4. `restaurant-site-router` for template choice.
5. `restaurant-template-fork` and `restaurant-build-checklist` to create the local workspace.
6. `restaurant-fork-improvement`, `restaurant-qa-delivery`, and `restaurant-pitch-doc` before delivery.

Do not use `agency-overnight` for new work. It is only a compatibility pointer.

## Operating Loop

1. Pull the active queue from Mission Control.
   - Prefer agency leads linked to MC tasks.
   - Sales status stays simple: `lead`, `pitched`, `in_progress`, `delivered`, `closed_won`, `closed_lost`.
   - Build progress lives in `agency_leads.metadata.build_stage`, not in sales status.
2. Pick exactly one build unless Mission Control explicitly assigns a batch.
3. Create or refresh `restaurant-website-system/sites/<slug>/checklist.json` and `checklist.md`.
4. Mirror checklist requirements into the MC parent task `metadata.requirements`.
5. Update Mission Control at every stage transition:
   - `qualifying`
   - `auditing`
   - `routing`
   - `forking`
   - `building`
   - `qa`
   - `packaging`
   - `delivered` or `blocked`
6. Log heartbeat progress at natural pauses and at the end of each work block.
7. Escalate only real blockers. Create/update Mission Control blocker state first, then Donna/Ethan can supervise from there.

## Blocker Policy

Do not ask Ethan in chat for ordinary missing details. Instead:

- Record the blocker in the local checklist.
- Write it to Mission Control via the agency build update API.
- If it prevents quality or truthfulness, set `metadata.build_stage` to `blocked`.
- Include what was tried, why it is blocked, and the next concrete unblock action.

Examples of real blockers:

- Google Reviews cannot be captured after browser/manual fallback.
- The current site is inaccessible and no alternate evidence exists.
- The template route would materially misrepresent the restaurant.
- Deploy fails after the local build is clean and the error needs account/DNS access.

## Done Criteria

A build is not deliverable until all are true:

- Lead qualification is passed or explicitly skipped with a recorded reason.
- Current-site audit evidence exists.
- Template route is locked.
- Local checklist exists in markdown and JSON.
- Build uses real restaurant content and preserves working provider links.
- Three QA rounds are logged with screenshots/evidence.
- MC task requirements are all `passed`.
- Completion evidence exists in MC metadata.
- Preview URL works.
- Pitch doc and outreach artifacts are attached.

## Forbidden Shortcuts

- Do not write directly to Supabase from skills when a Mission Control API exists.
- Do not use hardcoded target lists as the queue.
- Do not bury progress in local notes without MC writeback.
- Do not mark a task done if requirement rows or evidence are missing.
