# Chicago Prime Steakhouse — Mission Control attach replay runbook

- Date: 2026-05-07
- Status: **internal replay prep only / not applied**
- Replay script: `restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs`
- Attach payload: `restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-attach-replay-payload-2026-05-07.json`
- Archetype/template: **Heaven Palate**
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- QA status: **not run**

## Why this exists

Chicago Prime Steakhouse now has a broad local artifact stack: seed readiness, official-site audit evidence, Google review packet, Heaven Palate routing, builder brief, founder/sales materials, owner-confirmation draft, preflight handoff, QA rubric, and checklist files.

Mission Control is still the source of truth, but the protected agency workflow planner/writeback route is returning `401` for the OpenClaw runtime. This runbook makes the eventual catch-up path explicit so the next authorized worker can replay the local evidence through the approved MC API instead of re-discovering what to attach or doing raw Supabase writes.

No raw Supabase writes were performed.

## Hard requirements before applying

Do **not** run `--apply` until all of these are true:

1. Ethan/founder approves provisioning this lead in MC.
2. Protected API auth works with either `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` available in the execution environment.
3. The canonical MC lead ID for Chicago Prime Steakhouse is known.
4. The target MC route is still `/api/agency/leads/:leadId/website-workflow`.
5. Build and QA are still treated as blocked unless separately authorized.

## Dry-run validation command

Use a dry-run first. Replace `PENDING_MC_LEAD_ID_AUTH_BLOCKED` only after MC lead provisioning identifies the real lead ID.

```bash
node restaurant-website-system/scripts/agency-website-workflow-attach-replay.mjs \
  --lead-id PENDING_MC_LEAD_ID_AUTH_BLOCKED \
  --payload restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-attach-replay-payload-2026-05-07.json \
  --trigger chicago-prime-local-artifact-replay-dry-run
```

Expected dry-run shape:

- `mode`: `dry-run`
- `payload_summary.site_slug`: `chicago-prime-steakhouse`
- `payload_summary.template_slug`: `Heaven Palate`
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
  --lead-id <REAL_CHICAGO_PRIME_MC_LEAD_ID> \
  --payload restaurant-website-system/sites/chicago-prime-steakhouse/mc-payloads/mc-attach-replay-payload-2026-05-07.json \
  --trigger chicago-prime-local-artifact-replay
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
   - stage/currentStage remains `checklist` or the earliest incomplete MC gate agreed by planner
2. `auditing`
   - official-site audit + desktop/mobile screenshot evidence attached
3. `reviews`
   - Google Highest 30-review packet + screenshots attached
4. `routing`
   - `template_slug` / archetype locked to Heaven Palate
5. `building`
   - builder brief attached, but build remains blocked until authorization and Heaven Palate source mapping clear
6. `pitch` / `battle_cards`
   - internal founder brief and battle cards attached as internal/not-owner-facing
7. `qa_round_1` / `qa_round_2` / `qa_round_3`
   - QA rubric attached, but QA status remains not run until a preview exists
8. `packaging`
   - preflight handoff package attached as resume support, not as final delivery

## Critical post-replay checks

After replay succeeds, inspect MC and confirm:

- Lead/root title is Chicago Prime Steakhouse.
- `metadata.namespace` is `agency_website_workflow`.
- Root `metadata.build_stage` / `metadata.currentStage` is not advanced past a blocked gate by accident.
- Checklist MD/JSON paths match local repo paths.
- `template_slug` is Heaven Palate.
- Owner outreach is not marked sent.
- Build is not marked authorized.
- QA is not marked run/pass.
- Every pending payload or local artifact is either attached or represented as blocked/pending.

## Still-blocked conditions after replay

Even after MC attach succeeds, these remain blockers until explicitly cleared:

- Founder approval to provision/seed and proceed.
- Owner confirmations for hours, reservations, private dining, menu currentness, live entertainment, photo rights, awards/reviews, and legacy story wording.
- Preview/build authorization.
- Heaven Palate source/template mapping.
- QA evidence: preview URL, desktop/mobile screenshots, link audit, claim-safety pass.

## Stop conditions

Stop and ask Ethan / record a blocker if:

- The real lead ID is ambiguous.
- API auth still returns `401` or `403`.
- MC creates duplicate root/child workflow tasks.
- MC tries to advance the lead to build/QA/delivery without required evidence.
- Any step would require owner contact, preview publication, or unsupported claims.
