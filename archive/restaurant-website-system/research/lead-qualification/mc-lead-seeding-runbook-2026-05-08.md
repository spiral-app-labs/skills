# MC lead seeding runbook — Barakat + The Chef Grill — 2026-05-08

Status: local-only preparation. Do **not** raw-write Supabase.

## Why this exists

Mission Control currently has no unblocked/queued website workflows. Tekka and other active roots are blocked, and the pending MC code fix should add a protected `POST /api/agency/leads` plus server-side workflow provisioning on `in_progress` status transitions.

## Prepared local seed payloads

- `restaurant-website-system/research/lead-qualification/barakat-restaurant-mc-lead-seed-payload-2026-05-08.local.json`
- `restaurant-website-system/research/lead-qualification/the-chef-grill-mc-lead-seed-payload-2026-05-08.local.json`

## Recommended sequence after MC API fix is deployed

1. Seed **Barakat Restaurant** first through protected MC API (not raw Supabase).
2. If Ethan wants immediate execution, seed/promote with `status: "in_progress"` and `provision_workflow: true`; otherwise create as `lead` with `metadata.label: "proposed"` and then promote through `PATCH /api/agency/leads/:leadId`.
3. Confirm `GET /api/agency/website-workflow/next?limit=5` selects Barakat at `lead_qualification`/`checklist`.
4. Only seed **The Chef Grill** after Barakat is either actively claimed or intentionally held as queue.

## Top candidates

1. Barakat Restaurant — strongest gap: official site appears to be a thin Lovable shell with reserve/order intent elsewhere; likely Bamzi.
2. The Chef Grill — Turkish/Mediterranean/Halal restaurant with shallow official menu extraction and strong order-platform paths; likely Cuisine.

## Blocker

Pending protected Mission Control lead-create/seed API. Do not bypass with raw Supabase mutation.
