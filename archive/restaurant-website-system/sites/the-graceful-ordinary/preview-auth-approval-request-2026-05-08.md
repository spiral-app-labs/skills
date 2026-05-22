# The Graceful Ordinary — Preview Auth Approval Request

- Date: 2026-05-08
- Site slug: `the-graceful-ordinary`
- Current MC/root stage from read-only inspection: `qa_round_3`
- PR: `https://github.com/spiral-app-labs/skills/pull/83`
- Current PR preview URL: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`
- Status: **PR preview exists, but unauthenticated public QA is blocked by Vercel authentication / HTTP 401**

## Short approval ask

The Graceful Ordinary v2 has a clean PR preview, but QA Round 3 and packaging cannot pass because the preview requires Vercel authentication.

Please either:

1. make the PR preview public/shareable,
2. provide an approved Vercel bypass for QA/founder review,
3. attach a public alias to the same clean deployment, or
4. deploy/share through another approved public preview path.

## Why this blocks QA3 and delivery

QA Round 3 must verify the exact owner/founder preview in an unauthenticated or approved-share context. The current PR preview returns HTTP 401 for public route checks, so it cannot be used as delivery evidence yet.

Reference artifacts:

- `restaurant-website-system/sites/the-graceful-ordinary/pr-preview-blocker.md`
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-blocker.md`
- `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-public-stable-recheck-2026-05-08T124411Z.md`

## Important stale-preview warning

Do **not** use `https://graceful-ordinary-redesign.vercel.app` for delivery unless it is explicitly updated and reverified. Existing blocker notes say that stale production-style preview still contains unsupported/stale content and does not reflect the clean local v2/PR path.

## Current evidence

- Clean PR: `https://github.com/spiral-app-labs/skills/pull/83`
- Vercel Ready URL from PR: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`
- Unauthenticated route checks: HTTP 401 / Vercel authentication protection
- Clean worktree verification already recorded in blocker notes:
  - `npm ci`
  - `npm run typecheck`
  - `npm run build`

## Safe unblock options

### Option A — Make PR preview public/shareable

Adjust Vercel deployment/project settings so the existing PR preview is visible without auth, then rerun QA3 public route checks.

### Option B — Approved Vercel bypass

Provide an approved bypass URL/token/headers for QA/founder review. Do not store private bypass secrets in public repo artifacts.

### Option C — Public alias

Attach an approved public alias to the clean PR deployment and use that alias for QA3/delivery evidence.

### Option D — External approved preview path

Deploy the same clean v2 preview through another approved public path, then attach that URL to Mission Control.

## Required post-unblock checks

Replace `$URL` with the public/shareable preview URL:

```bash
curl -I "$URL/"
curl -I "$URL/menu"
curl -I "$URL/about"
curl -I "$URL/contact"
```

Then rerun QA Round 3 against the accessible preview:

- Home/menu/about/contact load without auth protection.
- No stale production-preview content appears.
- Reservation/contact CTAs are correct.
- Mobile layout still matches local QA expectations.
- Screenshots/evidence are saved to local artifacts and mirrored to MC.

## Mission Control update when URL is accessible

Use the agency build/QA routes to clear the blocker and advance only after QA3 passes:

- `build_stage`: `qa_round_3`
- `vercel_preview_url`: public/shareable URL or approved-bypass URL
- `artifact_urls`: public URL plus QA3 evidence paths
- `passed_requirement_ids`: QA3 public preview checks after they pass
- `blocker`: `null`

After QA3 passes, proceed to packaging and only mark delivery after MC accepts final preview evidence.

## Evidence already ready

- `qa-round-3.md`
- `qa-round-3-blocker.md`
- `pr-preview-blocker.md`
- `pitch-doc.md`
- `battle-cards.md`
- `checklist.md`
- `checklist.json`

## Current blocker text

QA Round 3 is blocked because the clean PR preview exists and Vercel reported Ready, but the preview returns HTTP 401 / Vercel authentication protection for public route checks. Make the PR preview public/shareable, provide an approved preview bypass, attach a public alias, or provide another verified public preview URL; then rerun QA Round 3 before packaging/delivery.
