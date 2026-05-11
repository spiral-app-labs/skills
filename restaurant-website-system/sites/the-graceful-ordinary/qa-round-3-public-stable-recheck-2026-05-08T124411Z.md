# The Graceful Ordinary — QA Round 3 Public Stable Recheck BLOCKED

- Date: 2026-05-08T12:44:11Z
- Gate: `qa_round_3`
- Public preview tested: `https://graceful-ordinary-redesign.vercel.app/`
- Result: **BLOCKED — do not pitch/deliver yet**

## What changed this heartbeat

I refreshed the live public-stable check after the earlier blocker. The URL is reachable, but Vercel is still serving the stale cached build rather than the corrected PR #92/source version.

## Evidence

- HTML scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/graceful-public-recheck-2026-05-08T124229Z.html`
- Header/status from this heartbeat: HTTP 200, `x-vercel-cache: HIT`, stale cache age observed in curl headers.

## Stale/unsafe public DOM findings

The live public URL still contains stale or unsupported proof/copy strings:

```json
{
  "AAA Three-Diamond": true,
  "TripAdvisor": true,
  "TripAdvisor Guest": true,
  "200+ Reviews": true,
  "4.8\u2605": true,
  "4.8": true,
  "4.6": false,
  "yourfriends@thegracefulordinary.com": false,
  "resy.com/cities/stc/the-graceful-ordinary": false,
  "Ask Graceful": false
}
```

The key blockers remain:

- Unsupported stale proof language is still live: `AAA Three-Diamond`, `TripAdvisor`, `TripAdvisor Guest`, `200+ Reviews`, and `4.8★`.
- Corrected live truth signals are still missing from the public page: exact Resy city URL, `4.6` rating, corrected contact email, and `Ask Graceful` concierge entry point.
- This is a deploy/cache fidelity blocker, not a local source-code blocker.

## Required unblock

Redeploy or re-alias the corrected PR #92/source build to `https://graceful-ordinary-redesign.vercel.app/`, purge the stale Vercel cache if needed, then rerun QA round 3 against the public URL and verify:

1. No `AAA`, `TripAdvisor`, `TripAdvisor Guest`, `200+ Reviews`, or unsupported `4.8` strings remain.
2. Exact reservation path is live: `https://resy.com/cities/stc/the-graceful-ordinary`.
3. Correct proof/contact values and the concierge entry point are visible.
4. Desktop/mobile public screenshots are recaptured from the corrected live URL.
5. Protected MC agency build writeback can mark QA3 blocked/pass through the canonical route.

## Preview auth approval request

- Preview auth approval request: `restaurant-website-system/sites/the-graceful-ordinary/preview-auth-approval-request-2026-05-08.md`
- Status: prepared locally; no Vercel auth/project setting was changed. Public/shareable preview or approved bypass remains required before rerunning QA3.
