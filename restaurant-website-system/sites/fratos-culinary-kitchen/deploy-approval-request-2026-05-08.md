# Frato's Culinary Kitchen — Deploy Approval Request

- Date: 2026-05-08
- Site slug: `fratos-culinary-kitchen`
- Current MC/root stage from read-only inspection: `packaging`
- Local preview used for QA: `http://127.0.0.1:3214`
- Status: **local package complete; public preview deploy requires explicit founder/operator approval**

## Short approval ask

Frato's is complete locally through QA Round 3 and has a local delivery bundle, but final delivery is blocked because there is no public preview URL.

Can I create/link the Vercel preview project and run the prepared preview deployment for Frato's Culinary Kitchen?

## Why approval is needed

Deploying would create or update an external public artifact and may create/link a Vercel project under the logged-in account. That is outside safe local-only packaging, so it should not happen automatically.

Observed deployment context from `deploy-readiness-2026-05-08.md`:

- `npx --yes vercel --version` works.
- `npx --yes vercel whoami` is logged in as `ethan-7906`.
- Local `.vercel/project.json` is missing, so this site is not linked to a Vercel project yet.
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` are not configured.

## Exact guarded command path

Run only after approval:

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen
./scripts/deploy-preview-2026-05-08.sh
```

The script is expected to run local build/typecheck and then `npx --yes vercel deploy`. If Vercel prompts to create/link a project, choose the correct Ethan/Vercel account and project intentionally; do not accept an unintended org/project.

## Alternative token-based path

If Vercel project/env tokens are provided instead of interactive approval:

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/fratos-culinary-kitchen
npx vercel pull --yes --environment=preview --token "$VERCEL_TOKEN"
npx vercel build --token "$VERCEL_TOKEN"
npx vercel deploy --prebuilt --token "$VERCEL_TOKEN"
```

## Required post-deploy validation

Replace `$URL` with the public preview URL:

```bash
curl -I "$URL/"
curl -I "$URL/about"
curl -I "$URL/contact"
```

Then verify the high-intent external CTAs are still correct:

- `https://orderstart.com/fratospizza`
- `https://fratoscatering.com/`
- `https://fratoscatering.com/catering-inquiry-form/`
- Google Maps directions URL from the local content

## Mission Control update when public URL exists

Use `mc-delivery-final-url-template-2026-05-08.json` as the payload template. Replace `REPLACE_WITH_PUBLIC_PREVIEW_URL`, then update MC through the agency build route with:

- `build_stage`: `packaging`
- `vercel_preview_url`: public URL
- `artifact_urls`: public URL plus local package artifacts
- `passed_requirement_ids`: `delivery-final-url`, `delivery-three-qa-rounds`, `delivery-pack`
- `blocker`: `null`

Do not mark delivered until MC accepts the delivery evidence and the public URL passes route checks.

## Evidence already ready

- `delivery-package-2026-05-08.md`
- `deploy-readiness-2026-05-08.md`
- `qa-round-1-2026-05-08.md`
- `qa-round-2-2026-05-08.md`
- `qa-round-3-final-qa-2026-05-08.md`
- `delivery-artifacts/fratos-culinary-kitchen-local-delivery-2026-05-08.tar.gz`
- `delivery-artifacts/fratos-delivery-artifact-manifest-2026-05-08.md`
- `mc-delivery-final-url-template-2026-05-08.json`

## Current blocker text

Public preview/deploy URL required before `delivery-final-url` can pass. Local preview QA is complete at `http://127.0.0.1:3214`; `npx vercel` works and is logged in as `ethan-7906`, but this site is not linked to a Vercel project and deployment creates/updates an external public artifact, so explicit approval/linking is required before deploy.
