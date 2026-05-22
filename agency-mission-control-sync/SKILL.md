---
name: agency-mission-control-sync
description: Mission Control API/writeback contract for the autonomous restaurant website agency. Use whenever OpenClaw reads planner state, provisions website workflows, updates build stage, writes QA rounds, records heartbeat/activity, attaches preview/evidence, or handles agency blockers.
---

# Agency Mission Control Sync

Mission Control is the source of truth. Local files prove work; MC records the operating state.

## Auth

Protected agency routes currently require standard Mission Control agency auth:

```http
Authorization: Bearer $SUPABASE_SECRET_KEY
Content-Type: application/json
```

`$SUPABASE_SERVICE_ROLE_KEY` is the source fallback when Mission Control is configured for it. Browser/server UI calls may also authenticate with the `mc_auth` Mission Control session cookie. The manual workflow repair route `POST /api/agency/leads/:leadId/website-workflow` is narrower and additionally requires:

```http
x-agency-runtime: openclaw
```

If a protected route returns `401`/`403` or the secrets are missing:

1. Record the config blocker through `POST /api/heartbeat` or `POST /api/activity` when those routes are reachable.
2. Do **not** mutate agency leads/tasks through raw Supabase.
3. Continue only with read-only diagnosis and local MC-compatible evidence/payload preparation.
4. Include endpoint, status, missing env names, and next unblock action in the blocker.

If a protected route returns `500` or malformed data, save the response/error as evidence, log a blocker, and do not guess a stage transition.

## Core routes

Planner:

- `GET /api/agency/website-workflow/next?limit=5` — protected. Returns one-website-at-a-time planner output: `policy`, `selected`, `selection_reason`, `next_items`, `skipped_blocked_websites`, and `queued_websites`.

Workflow provisioning/read:

- `GET /api/agency/leads/:leadId/website-workflow` — reads the canonical root/children summary for a lead.
- `POST /api/agency/leads/:leadId/website-workflow` — protected manual repair/provision route that backfills the canonical website workflow idempotently. Use it only with agency auth plus `x-agency-runtime: openclaw`, usually after direct data drift or missing-task reconciliation. Normal status transitions should go through `PATCH /api/agency/leads/:leadId`; direct Supabase edits do not auto-provision workflow tasks.

Canonical workflow parity:

- `PATCH /api/agency/leads/:leadId` auto-provisions only when `agency_leads.status` changes from a non-`in_progress` value into `in_progress` through the API.
- Direct Supabase status edits do not run provisioning; repair drift with protected `POST /api/agency/leads/:leadId/website-workflow` using bearer/session auth plus `x-agency-runtime: openclaw`.
- A complete workflow has exactly 15 child tasks, in order: `lead_qualification`, `checklist`, `current_site_audit`, `google_reviews_capture`, `template_routing`, `template_fork_build`, `improvement_pass`, `top_three_improvements`, `ai_concierge`, `pitch_doc`, `battle_cards`, `qa_round_1`, `qa_round_2`, `qa_round_3`, `delivery`.
- Adjacent children are gated by `task_dependencies`, so a complete workflow has 14 dependency rows.
- Workflow identity, stage, requirements, blockers, and evidence live on `tasks.metadata`; do not use `agency_leads.metadata` as canonical workflow state.

Lead read/update:

- `GET /api/agency/leads/:leadId` — protected. Reads lead plus QA rounds.
- `PATCH /api/agency/leads/:leadId` — protected. Updates supported lead fields/status/notes/preview/contact metadata and auto-provisions the website workflow on transition into `in_progress`. Do not rely on `agency_leads.metadata` as workflow state; workflow state lives in root task metadata.

Build/stage writeback:

- `POST` or `PATCH /api/agency/leads/:leadId/build` — protected. Updates root task metadata/status, the current canonical child, evidence paths, blockers, preview/artifact URLs, and inserts `agent_activity` action `agency_build_update`.

QA writeback:

- `GET /api/agency/leads/:leadId/qa-rounds` — protected. Reads QA rounds.
- `POST /api/agency/leads/:leadId/qa-rounds` — protected. Upserts one QA round, updates root + matching QA child metadata, marks the matching QA requirement passed, and inserts `agent_activity` action `agency_qa_round`.

Work-loop logging:

- `POST /api/heartbeat` — records work-loop progress/config blockers and mirrors to activity.
- `POST /api/activity` — records notable activity when another route does not already log it.

## Planner operating policy

Use the planner before raw task scans. It selects active `in_progress` roots first, then `todo`, then `backlog`; most advanced first; then oldest. It also reports skipped blocked websites and queued websites.

Use `selected` + first actionable `next_items[]` as the work target. If the planner reports no actionable item, do not invent a mutable transition; either work on safe local evidence for a documented blocker or propose new qualified leads locally until MC auth/state is fixed.

## Build update payload: accepted fields

Current MC build parsing accepts these fields/aliases:

```json
{
  "build_stage": "auditing",
  "status": "in_progress",
  "site_slug": "restaurant-slug",
  "template_slug": "qitchen",
  "mc_task_id": "mission-control-root-task-id",
  "checklist_markdown_path": "restaurant-slug/checklist.md",
  "checklist_json_path": "restaurant-slug/checklist.json",
  "current_site_scrape_path": "restaurant-slug/scrapes/current-site-dom-snapshot.txt",
  "google_reviews_packet_path": "restaurant-slug/reviews/google-reviews-highest.json",
  "pitch_doc_path": "restaurant-slug/pitch-doc.md",
  "battle_cards_path": "restaurant-slug/battle-cards.md",
  "vercel_preview_url": "https://restaurant-slug.vercel.app",
  "evidence_urls": ["restaurant-slug/screenshots/mobile.png"],
  "artifact_urls": ["https://restaurant-slug.vercel.app"],
  "passed_requirement_ids": ["current-site-audit"],
  "blocker": null,
  "heartbeat_summary": "Captured current-site audit evidence."
}
```

CamelCase aliases like `buildStage`, `siteSlug`, `evidenceUrls`, `artifactUrls`, and `passedRequirementIds` are also accepted.

Current accepted `build_stage` values:

`queued`, `qualifying`, `claimed`, `checklist`, `auditing`, `reviews`, `routing`, `forking`, `building`, `improving`, `top_3_improvements`, `concierge`, `pitch`, `battle_cards`, `qa_round_1`, `qa_round_2`, `qa_round_3`, `packaging`, `delivered`, `blocked`.

Important current limitation: the build route does **not** accept arbitrary full checklist `requirements` arrays or a structured `lead_metadata` object. Keep full checklist rows and structured lead metadata in local artifacts and accepted evidence paths until MC adds a documented endpoint/field for them. Do not claim full row mirroring succeeded unless the API actually stores it.

## QA round payload

```json
{
  "round_number": 1,
  "findings": ["Mobile hero CTA was below the fold."],
  "fixes_applied": ["Moved phone/order CTA into the sticky mobile bar."],
  "skill_updates": [],
  "screenshots": ["restaurant-slug/screenshots/qa-round-1-mobile.png"],
  "mc_task_id": "mission-control-root-task-id"
}
```

Log exactly three rounds before delivery. Use `/qa-rounds` for QA; use `/build` only for the surrounding stage/evidence transitions.

## Heartbeat payload

Use heartbeat for regular progress and config blockers:

```json
{
  "status": "work_done",
  "summary": "Agency: routed Tekka Sushi to Qitchen and saved the evidence packet.",
  "mode": "agency",
  "source": "openclaw_website_agency",
  "taskIds": ["mission-control-task-id"],
  "metadata": {
    "lead_id": "lead-id",
    "build_stage": "routing",
    "endpoint": "/api/agency/website-workflow/next",
    "auth_blocker": false
  }
}
```

## Delivery evidence mirror

Before setting `build_stage` to `delivered`, MC must contain or point to:

- checklist markdown + JSON paths
- current-site browser screenshots and scrape/DOM snapshot
- Google Reviews **Highest** 30-written-review packet plus screenshots
- template route/rationale and `template_slug`
- preview URL
- website improvement evidence and top-three-improvement evidence
- AI concierge evidence or blocker
- pitch doc path
- battle cards path
- all three QA round payloads
- passed requirement IDs / delivery package evidence

The `/build` route rejects `delivered` when required delivery evidence is missing. Treat the returned missing list as the next checklist.

## Direct Supabase writes

Do not use direct Supabase writes for agency workflow state when MC APIs exist. If an API is missing or auth is broken, log a blocker through heartbeat/activity and continue only with read-only diagnosis or local evidence gathering.
