# The Graceful Ordinary — Public Preview Unblock Runbook

- Date: 2026-05-06
- Current blocker gate: `qa_round_3`
- Public preview recorded in MC: `https://graceful-ordinary-redesign.vercel.app`
- Local source workspace: `restaurant-website-system/sites/the-graceful-ordinary/`

## Current state

Local v2 is build-clean and has passed QA round 1 and QA round 2 locally, but the public preview URL is stale. A live fetch of `https://graceful-ordinary-redesign.vercel.app/` returned HTTP 200 but still contained stale unsupported content (`AAA Three-Diamond`) and did not contain local v2 indicators (`Ask Graceful`, `Maytag Bleu Cheese`).

Final QA round 3, packaging, and delivery must remain blocked until the public preview is redeployed or replaced with a new preview URL that reflects local v2.

## Deployment path findings

- No local `vercel` CLI binary was found on the host PATH during the heartbeat check.
- No `.vercel/` project binding or `vercel.json` was found in the local `skills` repo scan.
- The Graceful Ordinary site folder currently appears untracked in the `skills` repo (`?? restaurant-website-system/sites/the-graceful-ordinary/`).
- The repo is currently on branch `feat/la-hacienda-qa2`, so blindly committing/deploying from here would mix unrelated work and is not safe.
- Manual production deploy remains forbidden by the heartbeat rules. The safe unblock path should be a clean branch/PR preview or an explicitly approved preview deployment, not a surprise prod deploy.

## Safe unblock options

### Recommended: clean branch + PR preview

1. Create a clean branch from the correct base for The Graceful Ordinary work.
2. Add only the site source/artifacts needed for this build, excluding generated directories (`node_modules`, `.next`, `tsconfig.tsbuildinfo`) and any unrelated restaurant artifacts.
3. Open a PR in `spiral-app-labs/skills`.
4. Let Vercel create a PR preview or wire the preview project to that branch.
5. Update MC `vercel_preview_url` to the new preview URL if it differs from `https://graceful-ordinary-redesign.vercel.app`.
6. Re-run QA round 3 against the public preview.

### Alternative: explicitly approved Vercel preview deployment

1. Install/use the Vercel CLI if Ethan explicitly approves this route.
2. Link the project intentionally to the correct Vercel project/org.
3. Deploy a non-production preview from the local v2 source.
4. Update MC with the preview URL and rerun QA round 3.

## Do not do

- Do not run a production deploy manually.
- Do not overwrite the stale public preview and mark delivered without re-running QA round 3.
- Do not commit from the current unrelated `feat/la-hacienda-qa2` branch without isolating The Graceful Ordinary changes.
- Do not claim founder-facing preview includes local v2 until the public URL proves it.

## Evidence already ready for QA3 after deploy

- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-1.md`
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-2.md`
- `restaurant-website-system/sites/the-graceful-ordinary/top-3-improvements.md`
- `restaurant-website-system/sites/the-graceful-ordinary/concierge-test-transcript.md`
- `restaurant-website-system/sites/the-graceful-ordinary/pitch-doc.md`
- `restaurant-website-system/sites/the-graceful-ordinary/battle-cards.md`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/desktop-full.png`
- `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/mobile-full.png`
