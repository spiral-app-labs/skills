# The Graceful Ordinary — QA Round 3 Public Preview Recheck

- Rechecked at: 2026-05-06T14:39Z
- Gate: `qa_round_3`
- MC root task: `377dcee1-820a-4d94-a5b1-0740be57c92c`
- MC child task: `886ec18a-e365-490d-a1f9-a608f0186ce8`
- PR: https://github.com/spiral-app-labs/skills/pull/83
- Stable public preview: https://graceful-ordinary-redesign.vercel.app
- PR/Vercel preview: https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app

## Result

**Still blocked / not founder-shareable.** PR #83 is merged, but there is still no public URL that reflects the local v2 source. The stable public preview is reachable but stale/factually unsafe; the PR preview is still protected by Vercel authentication.

## What was tried

1. Inspected local artifacts under `restaurant-website-system/sites/the-graceful-ordinary`, including `checklist.md`, `qa-round-3.md`, `qa-round-3-blocker.md`, and the previous public-preview recheck/writeback artifacts.
2. Checked local source markers with `rg` across `app`, `components`, `lib`, and `content.example.ts`.
   - Local v2 source includes updated markers such as `Chris and Megan Curren`, `Kane County Choice Awards`, `Fox River`, and `Reserve on Resy`.
   - Local v2 source did not surface the stale unsupported public-preview proof block in the inspected app/content files.
3. Ran HTTP route checks with `curl -L` against stable and PR preview routes.
4. Opened the stable public preview in the browser with cache-busting query param `?qa_recheck=20260506T1439Z` and captured a browser snapshot.
5. Opened the PR preview in the browser with the same cache-busting query param and captured a browser snapshot.
6. Ran `web_fetch` against both preview URLs.
7. Checked Mission Control writeback credentials in this runtime: `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unset, so no official MC API writeback was attempted.
8. Confirmed PR #83 state via `gh pr view 83`: `MERGED`, merged at `2026-05-06T10:24:24Z`.

## Current HTTP evidence

Evidence directory: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/public-preview-recheck-2026-05-06-1439Z/`

HTTP results saved in `scrapes/public-preview-recheck-2026-05-06-1439Z/http-status.txt`:

- `200` — `https://graceful-ordinary-redesign.vercel.app/` — 29,070 bytes
- `200` — `https://graceful-ordinary-redesign.vercel.app/menu` — 22,179 bytes
- `200` — `https://graceful-ordinary-redesign.vercel.app/about` — 21,647 bytes
- `200` — `https://graceful-ordinary-redesign.vercel.app/contact` — 19,964 bytes
- `401` — `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/` — 14,630 bytes
- `401` — `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/menu` — 14,642 bytes

Stable preview marker scan:

- `FOUND` — `AAA Three-Diamond`
- `FOUND` — `TripAdvisor Guest`
- `FOUND` — `200+ Reviews`
- `FOUND` — `4.8`
- `ABSENT` — `Chris and Megan Curren`
- `FOUND` — `Fox River`
- `FOUND` — `Reserve on Resy`
- `ABSENT` — `Kane County Choice Awards`

PR preview marker scan:

- `FOUND` — `Vercel Authentication`
- `FOUND` — `Authentication Required`
- `ABSENT` — `Chris and Megan Curren`
- `ABSENT` — `AAA Three-Diamond`

## Current browser evidence

Stable preview browser snapshot still shows stale unsupported proof claims:

- Story copy: `AAA Three-Diamond-recognized team`
- Proof card: `4.8★` and `200+ Reviews`
- Quote attribution: `TripAdvisor, AAA Three-Diamond Recognition`
- Review card: `A AAA Three-Diamond restaurant...`
- Review attribution: `TripAdvisor Guest`

The same browser snapshot shows the stable nav/reservation links still point to generic `https://resy.com` rather than the local v2-specific Resy URL `https://resy.com/cities/stc/the-graceful-ordinary`.

PR preview browser snapshot shows a Vercel login page:

- Heading: `Log in to Vercel`
- Login controls: email, Google, GitHub, Apple, SAML SSO, Passkey
- Therefore it is not founder-shareable.

## Web-fetch evidence

- `web_fetch` for `https://graceful-ordinary-redesign.vercel.app/` returned status `200` and title `The Graceful Ordinary — Refined Rustic Dining in St. Charles, IL`.
- `web_fetch` for the PR preview failed with `401` and extracted `Authentication Required` / `Vercel Authentication`.

## Final QA implication

QA round 3 **cannot advance**. A final sell-readiness pass requires a public, founder-shareable URL that reflects local v2. The current stable public preview is stale and exposes unsupported claims, while the PR preview is Vercel-auth protected.

## Next unblock action

Redeploy or alias `https://graceful-ordinary-redesign.vercel.app` to the merged v2 source, or provide a Vercel preview bypass/shareable URL for `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`. Then rerun QA round 3 against that public URL with desktop/mobile screenshots, DOM/text scrape, link scrape, final sell-readiness notes, and MC API writeback.
