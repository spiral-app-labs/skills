# Region Kitchen and Bar — MC workflow provisioning replay runbook

- Date: 2026-05-07
- Site slug: `region-kitchen-and-bar`
- Restaurant: Region Kitchen and Bar
- Purpose: replay the local Region checklist/evidence packet through the protected Mission Control website-workflow provisioning route once agency auth is available.
- Current status: **not applied** — this runtime still lacks `AGENCY_AUTONOMY_API_KEY` / bearer auth and the protected planner returns `401 Unauthorized`.

## Why this exists

Region now has a complete local pre-build packet in `skills`, and Mission Control now has route support for attach payloads during website-workflow provisioning/backfill.

The next safe handoff is not a raw Supabase mutation. It is a protected API replay:

```bash
POST /api/agency/leads/:leadId/website-workflow
Authorization: Bearer $AGENCY_AUTONOMY_API_KEY
x-agency-runtime: openclaw
```

That route provisions/backfills the canonical root + child tasks and mirrors local checklist/evidence metadata onto the MC root and `checklist_created` child task.

## Prerequisites

1. Region Kitchen and Bar has an `agency_leads.id` in Mission Control: `d26715da-e42d-4299-8f5c-c513112933e3`.
   - Read-only lookup note: the old lead row currently says `status: delivered`, but a task scan found zero canonical `agency_website_workflow` task rows for this lead ID. Treat the old lead status as stale/legacy until the workflow replay provisions/backfills root + child tasks.
2. The runtime has one of:
   - `AGENCY_AUTONOMY_API_KEY`
   - `OPENCLAW_WEBHOOK_SECRET`
3. The Mission Control deployment includes:
   - `mission-control` PR #338 — attach payload support
   - `mission-control` PR #339 — truthful split between `local_packet_canonical_status` and live `canonical_status`
4. The local packet exists:
   - `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-checklist-mc-attach-payload-2026-05-07.json`

## Dry run

```bash
node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id d26715da-e42d-4299-8f5c-c513112933e3 \
  --payload restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-checklist-mc-attach-payload-2026-05-07.json \
  --trigger region-kitchen-and-bar-local-packet-replay
```

Expected dry-run behavior:

- No network write is sent.
- Output includes the target endpoint, lead ID, payload path, site slug, template slug, checklist paths, evidence path count, and expected response checks.
- For Region's checklist-stage packet, `expected_response` should include `attach_applied: true` and `checklist_replay_activated: true`.

## Apply

Only run after the prerequisites are true:

```bash
export MC_API_BASE_URL="https://hq.ethantalreja.com"
export AGENCY_AUTONOMY_API_KEY="..."

node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id d26715da-e42d-4299-8f5c-c513112933e3 \
  --payload restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-checklist-mc-attach-payload-2026-05-07.json \
  --trigger region-kitchen-and-bar-local-packet-replay \
  --apply
```

Expected successful MC response:

- `ok: true`
- `created_count` is `14` for first provisioning, or lower/zero on idempotent backfill
- `attach_applied: true`
- `checklist_replay_activated: true`
- `workflow.root_task_id` is non-null
- `workflow.child_count` equals the canonical workflow step count
- `workflow.missing_steps` is empty

The replay helper validates `attach_applied` and `checklist_replay_activated` after apply. If either field is missing or false, the script exits non-zero and prints the MC response for inspection.

## Post-apply verification

After apply, inspect the root task and checklist child task metadata in MC. They should include:

- `site_slug: region-kitchen-and-bar`
- `agency_site_slug: region-kitchen-and-bar`
- `template_slug: roma`
- `selected_archetype: roma`
- `checklist_markdown_path: restaurant-website-system/sites/region-kitchen-and-bar/checklist.md`
- `checklist_json_path: restaurant-website-system/sites/region-kitchen-and-bar/checklist.json`
- `local_evidence_to_mirror` with the Region evidence packet paths
- `local_packet_canonical_status` preserving the pre-replay local status
- live `canonical_status.root_task_provisioned: true`
- live `canonical_status.child_tasks_provisioned: true`
- live `canonical_status.attach_payload_applied: true`

## Guardrails

- Do not start build/fork work until MC shows canonical root + child tasks and stage alignment.
- Do not treat the local packet as delivered evidence by itself; it is a provisioning/backfill packet.
- Do not use raw Supabase writes for this replay while the protected MC route exists.
- If apply returns `401`, stop and fix bearer auth; do not downgrade to raw mutation.
