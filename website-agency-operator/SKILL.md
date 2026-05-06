---
name: website-agency-operator
description: Autonomous restaurant website agency employee loop for OpenClaw. Use when running the website agency from Mission Control, selecting the next lead/build task, coordinating heartbeat progress, recording blockers in MC, and ensuring every build moves through checklist, audit, reviews, routing, fork/build, improvement, concierge, pitch, battle cards, QA, packaging, and delivery without hidden local state.
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
   - Restaurant outreach progress lives in `agency_leads.metadata.outreach_stage`: `not_contacted`, `sent`, `replied`, `demo_booked`, `demo_held`, `closed_won`, `closed_lost`.
   - Use `GET /api/agency/queue/next` when you need the single best next move.
2. Pick exactly one build unless Mission Control explicitly assigns a batch.
3. Resume from the lead's current `metadata.build_stage`; do not restart the build because a new heartbeat fired.
4. Create or refresh `restaurant-website-system/sites/<slug>/checklist.json` and `checklist.md`.
5. Mirror checklist requirements and evidence paths into the MC parent task `metadata.requirements`.
6. Update Mission Control at every stage transition and natural pause.
7. Escalate only real blockers. Create/update Mission Control blocker state first, then Donna/Ethan can supervise from there.

## Golden Otter CRM Loop

Mission Control now has an agency cockpit. Keep it alive:

- Log every meaningful sales/proof event with `POST /api/agency/events` or the more specific outreach/build/QA/close routes.
- For cold email, use `POST /api/agency/leads/:leadId/outreach` with `outreach_stage=sent`, `specific_problem`, `owner_name` if known, and `next_action`.
- When a reply books a demo, move to `demo_booked`; after the call, move to `demo_held`.
- Use `POST /api/agency/leads/:leadId/close` for `won` or `lost`. A won close requires `demo_held_at` unless a recorded override explains why.
- Do not mark delivery complete from local files. MC must have three QA rounds, preview URL, delivery evidence, and passed requirements.
## Canonical State Machine

Every autonomous build advances through these gates in order. Use the exact gate name as `agency_leads.metadata.build_stage` when possible; if MC temporarily supports a coarser stage, store the exact gate in metadata as a substage and keep the coarse stage compatible.

1. `claimed` / `checklist` — claim or resume one website from MC, create/update `checklist.md` + `checklist.json`, and mirror requirements to the MC parent task.
2. `auditing` — audit the current site using the in-app browser or browser automation. Required evidence: desktop screenshot, mobile screenshot, and scrape/DOM snapshot.
3. `reviews` — open Google Reviews in a browser, click the **Highest** filter, collect **30 written Google reviews**, and save evidence (`google-reviews-highest-30.json` plus screenshots). If Google blocks the path, record a blocker in MC instead of silently downgrading.
4. `routing` — choose exactly one template/archetype and record `template_slug` plus the rationale.
5. `forking` / `building` — fork/build from the selected template in the local skills repo with real restaurant content, real provider links, accurate hours/menu flows, and no invented claims.
6. `improving` — run the website improvement pass after the first full fork.
7. `top_3_improvements` — identify the top three highest-leverage improvements from audit/preview/QA, implement them, and attach before/after evidence.
8. `concierge` — add the AI concierge with a truthful restaurant-specific knowledge base, safe reservation/order/contact handoffs, and no fake availability or promises.
9. `pitch` — create or update the pitch doc.
10. `battle_cards` — create or update the battle cards doc for objections, owner talking points, proof, risks, and demo path.
11. `qa_round_1`, `qa_round_2`, `qa_round_3` — run exactly three QA rounds with screenshot/evidence artifacts and MC QA writeback every round.
12. `packaging` — package preview URL, screenshots, audit/review evidence, checklist, pitch doc, battle cards, QA rounds, and requirement status.
13. `delivered` — deliver only after all evidence is mirrored to MC and every required gate passes.
14. `blocked` — use only when the next gate cannot truthfully advance; record what was tried and the next concrete unblock action in MC.

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
- Current-site audit evidence exists: browser screenshots plus scrape/DOM snapshot.
- Google Reviews evidence exists: **Highest** filter selected, 30 written reviews captured, screenshots/JSON attached.
- Template route is locked.
- Local checklist exists in markdown and JSON and is mirrored to MC.
- Build uses real restaurant content and preserves working provider links.
- Website improvement pass is complete.
- Top 3 improvements are identified, implemented, and evidenced.
- AI concierge is present with a truthful restaurant-specific KB or a recorded MC blocker explains why it cannot be added.
- Pitch doc and battle cards doc are created/updated.
- Three QA rounds are logged with screenshots/evidence.
- MC task requirements are all `passed`.
- Completion evidence exists in MC metadata.
- Preview URL works.
- Delivery package evidence is attached in MC.

## Forbidden Shortcuts

- Do not write directly to Supabase from skills when a Mission Control API exists.
- Do not use hardcoded target lists as the queue.
- Do not bury progress in local notes without MC writeback.
- Do not mark a task done if requirement rows or evidence are missing.
- Do not build from `routing` onward before `lead-fit-qualified` is passed or a qualification skip reason is recorded.
- Do not deliver from local artifacts alone; delivery requires evidence mirrored to Mission Control.
- Do not run multiple websites at once unless MC explicitly assigns a batch.
