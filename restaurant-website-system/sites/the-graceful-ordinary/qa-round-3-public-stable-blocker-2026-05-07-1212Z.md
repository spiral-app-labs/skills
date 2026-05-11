# The Graceful Ordinary — QA Round 3 Public Stable Recheck BLOCKED

- Date: 2026-05-07T12:12Z
- Gate: `qa_round_3`
- Public preview tested: `https://graceful-ordinary-redesign.vercel.app/`
- Result: **NEEDS WORK / BLOCKED — public stable deployment is stale and not founder-shareable**

## Why this supersedes the prior PASS note

The repo `origin/main` contains the corrected v2 content from PR #92, including the exact Resy URL, `4.6` / `593` Google proof, truthful review language, and the `AskConcierge` layout integration. However, the live public stable URL is still serving an older deployment (`x-vercel-cache: HIT`, `age: 100227` at 2026-05-07T12:11Z). Browser QA against the live URL shows the stale build, not the corrected merged code.

## Browser evidence captured

- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-stale-blocker-desktop-2026-05-07-1212Z.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-stale-blocker-mobile-2026-05-07-1212Z.png`
- Browser snapshot observations from live DOM:
  - Nav Reserve link points to `https://resy.com/` instead of `https://resy.com/cities/stc/the-graceful-ordinary`.
  - Hero Reserve CTA has no resolved URL in the accessibility snapshot.
  - Proof card says `4.8★` and `200+ Reviews`, while local/source-checked v2 uses `4.6` and `593`.
  - Page still contains unsupported or removed claims: `AAA Three-Diamond`, `TripAdvisor`, `TripAdvisor Guest`, and quote attribution `— TripAdvisor, AAA Three-Diamond Recognition`.
  - Public page snapshot did not expose the `Ask Graceful` / concierge entry point that is required by the checklist evidence.
  - Contact email is stale on public preview: `info@thegracefulordinary.com` instead of the local v2 source value `yourfriends@thegracefulordinary.com`.

## Final QA verdict

Needs work. The corrected code may be good enough after deployment, but the currently shared public stable URL is not safe to pitch because it still has factual/proof-risk issues and stale conversion links.

## Critical fix before Ethan sees it

Redeploy the latest `origin/main` / PR #92 site output to `https://graceful-ordinary-redesign.vercel.app/`, then rerun QA3 against the live public stable URL and verify:

1. Exact Resy URL appears on all Reserve CTAs: `https://resy.com/cities/stc/the-graceful-ordinary`.
2. Google proof says `4.6` and `593 reviews`, not `4.8` / `200+`.
3. No `AAA Three-Diamond`, `TripAdvisor`, fake/composite review, or unsupported award language remains.
4. `Ask Graceful` / concierge entry point is visible and the truthful concierge flow works.
5. Desktop and mobile screenshots show the corrected v2 sections and no empty bands/layout regressions.

## Mission Control sync status

I could not mutate Mission Control root stage from this runtime:

- Local planner: `http://127.0.0.1:3010/api/agency/website-workflow/next?limit=5` is unavailable (`URLError`).
- Production planner: `https://hq.ethantalreja.com/api/agency/website-workflow/next?limit=5` returns `401 Unauthorized` without a valid `AGENCY_AUTONOMY_API_KEY`.
- Nina task comment route returned `403 Forbidden` because this task is not assigned to remote Nina.

No raw Supabase agency mutation was performed. Use the companion payload `mc-build-writeback-qa-round-3-blocked-public-stale-2026-05-07-1212Z.json` once the protected agency writeback route is available.
