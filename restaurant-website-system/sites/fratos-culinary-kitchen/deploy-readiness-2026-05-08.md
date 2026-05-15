# Frato's Culinary Kitchen — Public Preview Deploy Readiness — 2026-05-08

## Current state

Frato's is packaged locally and complete through QA Round 3 in Mission Control: 14/15 steps. Delivery is blocked only on `delivery-final-url`.

Local preview used for QA:

- `http://127.0.0.1:3214`

Public preview URL:

- Pending / blocked

## Environment check

Deployment is *not* blocked by login anymore, but it still needs explicit approval because it creates/updates an external public artifact.

Observed from this runtime:

- Global `vercel` binary: not installed on PATH
- `npx --yes vercel --version`: works (`53.2.0`)
- `npx --yes vercel whoami`: logged in as `ethan-7906`
- Local `.vercel/project.json`: missing, so this site is not linked to a Vercel project yet
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`: not set in env

Because deploying creates/updates an external public artifact and may create/link a Vercel project, do not run deploy automation without explicit founder/operator approval.

## Site path

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen
```

## Pre-deploy checks

```bash
npm run build
npm run typecheck
```

Known caveat:

- `npm run lint` is blocked because ESLint is not installed in this fork. Build/typecheck pass.

## Guarded deploy script

Prepared but not executed:

```bash
./scripts/deploy-preview-2026-05-08.sh
```

This script runs build/typecheck and then `npx --yes vercel deploy`. Run only with explicit approval and verify the project link prompt carefully.

## Suggested Vercel deploy path

If Vercel CLI/project auth is available:

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen
npx vercel pull --yes --environment=preview --token "$VERCEL_TOKEN"
npx vercel build --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --token "$VERCEL_TOKEN"
```

If this is not yet linked to a Vercel project, create/link the preview project intentionally under the correct account before deploy. Do not let the CLI create an unintended project under the wrong org.

## Post-deploy validation

Replace `$URL` with the public preview URL:

```bash
curl -I "$URL/"
curl -I "$URL/about"
curl -I "$URL/contact"
```

Then verify external CTA links still pass:

- `https://orderstart.com/fratospizza`
- `https://fratoscatering.com/`
- `https://fratoscatering.com/catering-inquiry-form/`
- `https://www.google.com/maps/dir/?api=1&destination=42.0152588,-88.0810177`

## Mission Control completion

After a public preview URL passes route/link checks, PATCH `/api/agency/leads/cec3f7af-ab8d-4785-af76-e57e743cdf25/build` with:

- `build_stage`: `packaging`
- `vercel_preview_url`: public URL
- `artifact_urls`: include public URL
- `passed_requirement_ids`: include `delivery-final-url`, `delivery-three-qa-rounds`, `delivery-pack`
- `blocker`: `null`

Only transition to `delivered` after the build route accepts the delivery evidence or Ethan/founder explicitly overrides.

## Required package evidence already prepared

- `delivery-package-2026-05-08.md`
- `qa-round-1-2026-05-08.md`
- `qa-round-2-2026-05-08.md`
- `qa-round-3-final-qa-2026-05-08.md`
- `pitch-doc-2026-05-08.md`
- `battle-cards-2026-05-08.md`
- `top-3-improvements-2026-05-08.md`
- `concierge/concierge-check-2026-05-08.json`
- final QA screenshots under `qa/screenshots/`


## Final URL completion template

- MC payload template: `mc-delivery-final-url-template-2026-05-08.json`
- Replace `REPLACE_WITH_PUBLIC_PREVIEW_URL`, rerun public route/link checks, PATCH `/build`, then request delivered transition only after MC accepts delivery evidence.

## Deploy approval request

- Deploy approval request: `restaurant-website-system/sites/fratos-culinary-kitchen/deploy-approval-request-2026-05-08.md`
- Status: prepared locally; not executed because public preview deployment requires explicit founder/operator approval and project linking.
