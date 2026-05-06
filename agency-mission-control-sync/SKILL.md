---
name: agency-mission-control-sync
description: Mission Control API/writeback contract for the autonomous restaurant website agency. Use whenever OpenClaw reads or updates agency leads, build stage, task requirements, heartbeat, activity, QA rounds, preview URLs, blockers, or delivery evidence.
---

# Agency Mission Control Sync

Mission Control is the source of truth. Skills may create local artifacts, but status, blockers, evidence, and done state must be mirrored back to MC.

## Authentication

Use the Mission Control API with:

```http
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
Content-Type: application/json
```

Fallback secret name is `$OPENCLAW_WEBHOOK_SECRET` only if Mission Control is configured that way.

## Core Routes

- `GET /api/agency/leads/:leadId` reads a lead plus QA rounds.
- `PATCH /api/agency/leads/:leadId` updates lead sales status, notes, preview URL, dates, contact fields, and metadata.
- `POST /api/agency/leads/:leadId/build` or `PATCH` updates build progress, checklist paths, evidence URLs, blockers, preview URL, and MC task requirements.
- `GET /api/agency/leads/:leadId/qa-rounds` reads QA rounds.
- `POST /api/agency/leads/:leadId/qa-rounds` inserts or updates QA rounds and marks the matching MC requirement passed.
- `GET /api/agency/queue` reads the OpenClaw build queue with current build stages, QA counts, blockers, and next move.
- `GET /api/agency/queue/next` reads only the highest-priority next move for OpenClaw.
- `POST /api/agency/events` appends a CRM/proof event for daily counters and history.
- `POST /api/agency/leads/:leadId/outreach` updates restaurant outreach stage and writes the matching event.
- `POST /api/agency/leads/:leadId/close` closes a lead, creates the client/sticky-service record on wins, and writes the close event.
- `POST /api/heartbeat` records work-loop progress.
- `POST /api/activity` records notable activity when a route does not already log it.

## Build Update Payload

Use this shape for build progress:

```json
{
  "build_stage": "building",
  "idempotency_key": "lead-id:building:2026-05-05T12:00Z",
  "site_slug": "restaurant-slug",
  "template_slug": "gusto-01",
  "mc_task_id": "mission-control-task-id",
  "checklist_markdown_path": "restaurant-website-system/sites/restaurant-slug/checklist.md",
  "checklist_json_path": "restaurant-website-system/sites/restaurant-slug/checklist.json",
  "current_site_scrape_path": "restaurant-website-system/sites/restaurant-slug/scrapes/current-site-dom-snapshot.txt",
  "google_reviews_packet_path": "restaurant-website-system/sites/restaurant-slug/scrapes/google-reviews-highest-30.json",
  "pitch_doc_path": "restaurant-website-system/sites/restaurant-slug/pitch-doc.md",
  "battle_cards_path": "restaurant-website-system/sites/restaurant-slug/battle-cards.md",
  "vercel_preview_url": "https://restaurant-slug.vercel.app",
  "evidence_urls": ["restaurant-website-system/sites/restaurant-slug/screenshots/mobile.png"],
  "evidence_objects": [
    {
      "kind": "mobile_screenshot",
      "label": "Mobile hero after QA",
      "url": "restaurant-website-system/sites/restaurant-slug/screenshots/mobile.png"
    }
  ],
  "artifact_urls": ["https://restaurant-slug.vercel.app"],
  "ready_to_pitch": false,
  "lead_metadata": {
    "owner_name": null,
    "owner_email": null,
    "contact_email": null,
    "phone": "(555) 555-5555",
    "hours": ["Mon-Thu 11am-9pm"],
    "address_location": "123 Main St, City, ST 12345",
    "website_url": "https://restaurant.example",
    "order_url": null,
    "reservation_url": null,
    "catering_events_url": null,
    "google_rating": 4.6,
    "google_review_count": 312,
    "outreach_email_draft_path": null,
    "outreach_email_draft_status": "not_created",
    "metadata_source_notes": [
      "Checked audit.md, current-site scrape, Google profile evidence, and public directory captures."
    ],
    "field_sources": {
      "phone": ["restaurant-website-system/sites/restaurant-slug/audit.md"],
      "google_rating": ["https://www.google.com/maps/place/..."]
    }
  },
  "passed_requirement_ids": ["fork-built"],
  "heartbeat_summary": "Built the first full fork and captured mobile evidence."
}
```

Allowed `build_stage` values:

`queued`, `qualifying`, `claimed`, `checklist`, `auditing`, `reviews`, `routing`, `forking`, `building`, `improving`, `top_3_improvements`, `concierge`, `pitch`, `battle_cards`, `qa_round_1`, `qa_round_2`, `qa_round_3`, `packaging`, `delivered`, `blocked`.

If Mission Control temporarily accepts only coarser values, keep the closest coarse value compatible and store the exact gate in metadata as a substage. Heartbeats should still resume from the exact gate when it is present.

Allowed sales statuses:

`lead`, `pitched`, `in_progress`, `delivered`, `closed_won`, `closed_lost`.

## Golden Otter CRM Fields

Restaurant sales detail lives in `agency_leads.metadata`; do not create local-only notes for these:

- `outreach_stage`: `not_contacted`, `sent`, `replied`, `demo_booked`, `demo_held`, `closed_won`, `closed_lost`
- `outreach_channel`: usually `email` for the restaurant agency
- `owner_name`
- `audit_flags`
- `specific_problem`
- `next_action`
- `demo_booked_at`
- `demo_held_at`
- `quoted_upfront_cents`
- `quoted_mrr_cents`
- `close_gate_override_reason`

Use `POST /api/agency/leads/:leadId/outreach` instead of patching these manually whenever the update is part of the sales motion.

## Stage Gates

- Build work from `routing` onward is rejected unless `lead-fit-qualified` is passed or a qualification skip reason is recorded.
- `build_stage=delivered` is rejected unless the preview URL, delivery evidence, three QA rounds, and required MC requirements are present.
- `status=closed_won` is rejected unless `demo_held_at` exists or `close_gate_override_reason` is recorded.
- Use `idempotency_key` on repeated OpenClaw writes so event history stays append-only without duplicates.
## Audit-to-metadata sync is mandatory

When the current gate is `auditing` or later, Mission Control and the local checklist must both carry the structured lead metadata extracted from `audit.md` and public evidence.

Minimum mirrored metadata fields:

- `owner_name`
- `owner_email`
- `contact_email`
- `phone`
- `hours`
- `address_location`
- `website_url`
- `order_url`
- `reservation_url`
- `catering_events_url`
- `google_rating`
- `google_review_count`
- `outreach_email_draft_path`
- `outreach_email_draft_status`
- `metadata_source_notes`
- per-field evidence/source URLs

Rules:

- Unknown fields must stay `null`; do not backfill guesses from weak signals.
- If owner confirmation is still pending, keep the public value plus a blocker/note that confirmation is outstanding.
- `ready_to_pitch` must remain `false` unless the founder human review requirement and any required site-specific runtime prerequisites are explicitly satisfied or founder-overridden.
- Do not mark the audit gate complete, or advance later gates from local evidence alone, until this metadata mirror is present in the checklist and included in the prepared MC writeback payload. If the API call itself is blocked, record that blocker separately, but still prepare the mirrored payload locally.

## QA Round Payload

```json
{
  "round_number": 1,
  "findings": ["Mobile hero CTA was below the fold."],
  "fixes_applied": ["Moved phone/order CTA into the sticky mobile bar."],
  "screenshots": ["restaurant-website-system/sites/restaurant-slug/screenshots/qa-round-1-mobile.png"],
  "mc_task_id": "mission-control-task-id"
}
```

Log exactly three rounds before delivery. The API mirrors `qa-round-1`, `qa-round-2`, and `qa-round-3` into the MC parent task.

## Heartbeat Payload

Use heartbeat for regular progress:

```json
{
  "status": "work_done",
  "summary": "Agency: routed Little Star to gusto-01 and started fork.",
  "mode": "agency",
  "source": "openclaw_website_agency",
  "taskIds": ["mission-control-task-id"],
  "metadata": {
    "lead_id": "lead-id",
    "build_stage": "routing"
  }
}
```

## Delivery Evidence Mirror

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
- passed requirement IDs

## Direct Supabase Writes

Do not use direct Supabase `curl` snippets for agency writes. If an API is missing, create a blocker in Mission Control and continue with local evidence gathering that does not mutate status.
