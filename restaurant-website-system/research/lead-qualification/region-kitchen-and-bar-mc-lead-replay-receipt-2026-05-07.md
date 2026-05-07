# Region Kitchen and Bar — MC lead identity + replay receipt

- Date: 2026-05-07T14:00Z
- Site slug: `region-kitchen-and-bar`
- Restaurant: Region Kitchen and Bar
- Current website: `https://regionrestaurant.com`
- Selected archetype: `roma`
- Mode: read-only MC lookup + dry-run replay only
- Raw Supabase writes: **none**
- Protected MC API writes: **none** — heartbeat runtime still lacks `AGENCY_AUTONOMY_API_KEY` / bearer auth.

## Read-only MC lead lookup

A read-only `agency_leads` lookup found an existing Region Kitchen and Bar lead:

```json
{
  "id": "d26715da-e42d-4299-8f5c-c513112933e3",
  "name": "Region Kitchen and Bar",
  "status": "delivered",
  "website_url": "https://regionrestaurant.com",
  "city": "Barrington",
  "state": "IL",
  "created_at": "2026-04-03T00:15:29.837974+00:00",
  "updated_at": "2026-05-04T00:20:03.772456+00:00",
  "vercel_preview_url": "https://region-kitchen.vercel.app"
}
```

Important interpretation:

- The lead exists, so the canonical workflow replay should target `lead_id = d26715da-e42d-4299-8f5c-c513112933e3`.
- The old lead row says `status: delivered`, but a read-only task scan found **zero** canonical website workflow tasks for this lead ID.
- Treat the old lead status as stale/legacy until MC provisions/backfills the `agency_website_workflow` root + child task rows.

## Canonical workflow task lookup

Read-only task query:

- Filter: `tasks.metadata.agency_lead_id == d26715da-e42d-4299-8f5c-c513112933e3`
- Result: `0` task rows

This means Region is not currently executable in the canonical website-agency state machine, even though the old `agency_leads.status` is `delivered`.

## Dry-run replay command

This dry-run used the real MC lead ID and the local Region checklist attach payload:

```bash
node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id d26715da-e42d-4299-8f5c-c513112933e3 \
  --payload restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-checklist-mc-attach-payload-2026-05-07.json \
  --trigger region-kitchen-and-bar-local-packet-replay
```

Dry-run output:

```json
{
  "ok": true,
  "mode": "dry-run",
  "endpoint": "https://hq.ethantalreja.com/api/agency/leads/d26715da-e42d-4299-8f5c-c513112933e3/website-workflow",
  "lead_id": "d26715da-e42d-4299-8f5c-c513112933e3",
  "payload_summary": {
    "site_slug": "region-kitchen-and-bar",
    "restaurant_name": "Region Kitchen and Bar",
    "template_slug": "roma",
    "current_stage": "checklist",
    "checklist_markdown_path": "restaurant-website-system/sites/region-kitchen-and-bar/checklist.md",
    "checklist_json_path": "restaurant-website-system/sites/region-kitchen-and-bar/checklist.json",
    "evidence_path_count": 10,
    "has_canonical_status": true,
    "has_planner_blocker": true
  },
  "request_body_keys": ["trigger", "attach_payload"]
}
```

## Apply command once auth exists

Do **not** run this until the runtime has `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET`.

```bash
export MC_API_BASE_URL="https://hq.ethantalreja.com"
export AGENCY_AUTONOMY_API_KEY="..."

node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id d26715da-e42d-4299-8f5c-c513112933e3 \
  --payload restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-checklist-mc-attach-payload-2026-05-07.json \
  --trigger region-kitchen-and-bar-local-packet-replay \
  --apply
```

## Expected apply effect

The protected MC route should:

1. Provision/backfill one `agency_website_workflow` root task for Region.
2. Provision/backfill the canonical child workflow tasks.
3. Attach checklist paths and the 10 local evidence paths to root + `checklist_created` child metadata.
4. Preserve the local packet's stale pre-provisioning status under `local_packet_canonical_status`.
5. Write live `canonical_status.root_task_provisioned = true`, `child_tasks_provisioned = true`, and `attach_payload_applied = true`.

After apply, Region can resume at the canonical `checklist` gate from MC task metadata. Do not build from the local packet alone.
