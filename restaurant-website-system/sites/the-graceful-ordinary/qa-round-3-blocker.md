# The Graceful Ordinary — QA Round 3 Blocker

- Last refreshed: 2026-05-06T14:39Z
- Gate: `qa_round_3`
- Status: blocked before founder-facing final sell-readiness pass
- MC root task: `377dcee1-820a-4d94-a5b1-0740be57c92c`
- MC child task: `886ec18a-e365-490d-a1f9-a608f0186ce8`
- Local preview previously tested: `http://127.0.0.1:3037`
- Stable public preview: `https://graceful-ordinary-redesign.vercel.app`
- PR preview: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`
- PR: `https://github.com/spiral-app-labs/skills/pull/83` (`MERGED`, merged at `2026-05-06T10:24:24Z`)

## Current blocker

No public/shareable preview currently reflects the local v2 source.

- Stable public preview returns HTTP 200 but is stale and factually unsafe. It still contains unsupported/stale proof content including `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, and `4.8`.
- Stable public preview is missing local v2 markers such as `Chris and Megan Curren` and `Kane County Choice Awards`.
- PR/Vercel preview returns HTTP 401 / Vercel Authentication Required and shows a Vercel login page in-browser.
- Mission Control API credentials are not configured in this runtime (`AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` unset), so the official MC build/QA writeback cannot be completed from here.

Final sell-readiness QA cannot pass until the public preview URL is redeployed or replaced with a shareable updated preview URL that reflects the local v2 source.

## What was tried

1. Inspected local artifacts under `restaurant-website-system/sites/the-graceful-ordinary`.
2. Reviewed prior QA artifacts: `qa-round-3.md`, prior `qa-round-3-blocker.md`, and `qa-round-3-public-preview-recheck-2026-05-06-1211Z.md`.
3. Rechecked local source markers across `app`, `components`, `lib`, and `content.example.ts`.
4. Ran HTTP checks for stable routes `/`, `/menu`, `/about`, `/contact`.
5. Ran HTTP checks for PR preview routes `/` and `/menu`.
6. Opened stable preview in browser with `?qa_recheck=20260506T1439Z` and captured a browser snapshot.
7. Opened PR preview in browser with `?qa_recheck=20260506T1439Z` and captured a browser snapshot.
8. Ran `web_fetch` against both preview URLs.
9. Checked MC API credential availability; none present.
10. Confirmed PR #83 state with `gh pr view 83`.

## Current HTTP/browser results

- `200` — stable `/`
- `200` — stable `/menu`
- `200` — stable `/about`
- `200` — stable `/contact`
- `401` — PR preview `/`
- `401` — PR preview `/menu`

Stable browser snapshot still shows:

- `AAA Three-Diamond-recognized team`
- `4.8★`
- `200+ Reviews`
- `TripAdvisor, AAA Three-Diamond Recognition`
- `A AAA Three-Diamond restaurant...`
- `TripAdvisor Guest`
- generic `https://resy.com` reservation links instead of local v2's `https://resy.com/cities/stc/the-graceful-ordinary`

PR preview browser snapshot shows:

- `Log in to Vercel`
- Email/social/passkey login controls
- Not founder-shareable

## Evidence paths

- QA round 3 attempt: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3.md`
- Latest public recheck: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-3-public-preview-recheck-2026-05-06-1439Z.md`
- Latest prepared MC writeback JSON: `restaurant-website-system/sites/the-graceful-ordinary/mc-build-writeback-qa-round-3-blocked-recheck-2026-05-06-1439Z.json`
- HTTP evidence dir: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/`
- HTTP status + marker scan: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/http-status.txt`
- Stable HTML capture: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/graceful_ordinary_redesign_vercel_app.html`
- PR root HTML capture: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/skills_git_feat_graceful_or_b80ef9_ethan_ethantalrejas_projects_vercel_app.html`
- Prior local desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-desktop-full.png`
- Prior local mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-mobile-full.png`
- Prior local DOM text: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-dom-text-2026-05-06.txt`
- Prior local links: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-links-2026-05-06.json`
- Public preview unblock runbook: `restaurant-website-system/sites/the-graceful-ordinary/public-preview-unblock-runbook.md`
- PR preview blocker: `restaurant-website-system/sites/the-graceful-ordinary/pr-preview-blocker.md`

## Next unblock action

Redeploy or alias `https://graceful-ordinary-redesign.vercel.app` to the merged v2 source, or provide a Vercel preview bypass/shareable URL for `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`.

Then rerun QA round 3 against that public URL, capture public desktop/mobile screenshots, scrape public DOM/text and links, write final sell-readiness notes, and mirror the QA/build writeback through Mission Control with valid API credentials.
