# The Secret Kitchen USA — Mission Control attach replay runbook

- Date: 2026-05-07
- Status: **internal replay prep only / not applied**
- Replay script: `restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs`
- Attach payload: `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-attach-replay-payload-2026-05-07.json`
- Archetype/template: **Bamzi**
- Buildable source: `restaurant-website-system/templates/bamzi-01/`
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- QA status: **not run**

## Why this exists

The Secret Kitchen USA has a complete local artifact stack for a seed-ready, modern-Indian, Bamzi-routed lead: research, official-site audit, Google review packet, routing, builder brief, developer handoff checklist, preflight handoff, QA readiness rubric, founder decision brief, pitch doc, battle cards, owner-confirmation request, and canonical local checklist files.

Mission Control remains the source of truth, but the protected agency workflow planner/writeback route is returning `401` for the OpenClaw runtime. This runbook gives the future authorized worker a precise catch-up path so the local evidence can be replayed through the approved MC API instead of being re-created or written directly to Supabase.

No raw Supabase writes were performed.

## Hard requirements before applying

Do **not** run `--apply` until all of these are true:

1. Ethan/founder approves provisioning or replaying this lead in MC.
2. Protected API auth works with either `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` available in the execution environment.
3. The canonical MC lead ID for The Secret Kitchen USA is known.
4. The target MC route is still `/api/agency/leads/:leadId/website-workflow`.
5. Build and QA are still treated as blocked unless separately authorized.

## Dry-run validation command

Use a dry-run first. Replace `PENDING_MC_LEAD_ID_AUTH_BLOCKED` only after MC lead provisioning identifies the real lead ID.

```bash
node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id PENDING_MC_LEAD_ID_AUTH_BLOCKED \
  --payload restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-attach-replay-payload-2026-05-07.json \
  --trigger secret-kitchen-local-artifact-replay-dry-run
```

Expected dry-run shape:

- `mode`: `dry-run`
- `payload_summary.site_slug`: `the-secret-kitchen-usa`
- `payload_summary.template_slug`: `Bamzi`
- `payload_summary.current_stage`: `checklist`
- `payload_summary.evidence_path_count`: non-zero
- `payload_summary.has_canonical_status`: `true`
- `payload_summary.has_planner_blocker`: `true`
- `expected_response.attach_applied`: `true`
- `expected_response.checklist_replay_activated`: `true`

## Apply command after auth/lead ID exist

Only after the hard requirements above are met:

```bash
export MC_API_BASE_URL="https://hq.ethantalreja.com"
# export AGENCY_AUTONOMY_API_KEY="..."  # preferred, do not commit secrets
# or export OPENCLAW_WEBHOOK_SECRET="..."

node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --apply \
  --lead-id <REAL_SECRET_KITCHEN_MC_LEAD_ID> \
  --payload restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-attach-replay-payload-2026-05-07.json \
  --trigger secret-kitchen-local-artifact-replay
```

Expected apply response:

- `attach_applied: true`
- `checklist_replay_activated: true`

If Mission Control returns anything else, stop and record the API response as a blocker. Do not write directly to Supabase as a workaround.

## Replay order inside Mission Control

Once the attach payload is accepted, verify that MC reflects this order/status:

1. `claimed` / `checklist`
   - checklist paths attached
   - MC root/child IDs replace local pending placeholders
   - stage/currentStage remains `checklist` or earliest incomplete MC-approved gate
2. `auditing`
   - official-site audit and desktop/mobile screenshots attached
3. `reviews`
   - Google Highest 30-review packet and browser evidence attached
4. `routing`
   - `template_slug` / archetype locked to Bamzi
   - buildable template source noted as `bamzi-01`
5. `building`
   - builder brief and developer handoff attached, but build remains blocked until authorization and owner confirmations clear
6. `pitch` / `battle_cards`
   - founder decision brief, pitch doc, and battle cards attached as internal/not-owner-facing
7. `qa_round_1` / `qa_round_2` / `qa_round_3`
   - QA rubric attached, but QA status remains not run until a preview exists
8. `packaging`
   - preflight handoff package attached as resume support, not final delivery

## Critical post-replay checks

After replay succeeds, inspect MC and confirm:

- Lead/root title is The Secret Kitchen USA.
- `metadata.namespace` is `agency_website_workflow`.
- Root `metadata.build_stage` / `metadata.currentStage` is not advanced past a blocked gate by accident.
- Checklist MD/JSON paths match local repo paths.
- `template_slug` is Bamzi.
- Buildable source is `bamzi-01`.
- Owner outreach is not marked sent.
- Build is not marked authorized.
- QA is not marked run/pass.
- Menu prices, awards, reviews, private dining, photo rights, and Chef Aanal story claims remain confirmation-gated.

## Still-blocked conditions after replay

Even after MC attach succeeds, these remain blockers until explicitly cleared:

- Founder approval to provision/seed and proceed.
- Owner confirmations for preferred brand name, hours, reservation path, menu currentness/prices, private dining, awards/recognition, vegetarian/vegan/non-veg positioning, photo rights, and Chef Aanal story permissions.
- Preview/build authorization.
- QA evidence: preview URL, desktop/mobile screenshots, link audit, claim-safety pass.

## Stop conditions

Stop and ask Ethan / record a blocker if:

- The real lead ID is ambiguous.
- API auth still returns `401` or `403`.
- MC creates duplicate root/child workflow tasks.
- MC tries to advance the lead to build/QA/delivery without required evidence.
- Any step would require owner contact, preview publication, or unsupported claims.
