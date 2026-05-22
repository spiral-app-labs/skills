# The Graceful Ordinary — QA Round 3 Public Preview Recheck

- Date: 2026-05-06T22:36Z
- Gate: `qa_round_3`
- Public stable preview checked: `https://graceful-ordinary-redesign.vercel.app`
- PR preview checked: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`
- Status: **blocked / do not package or deliver**

## Verdict

QA round 3 remains blocked. The public stable preview is reachable, but it still appears to be the stale unsafe build rather than the local v2 source. The PR preview path from PR #83 remains Vercel-authenticated and returns HTTP 401.

This means there is still no founder-shareable public URL that reflects the updated v2 source and can be safely sent to the restaurant owner.

## Evidence captured in this recheck

- Public stable preview route smoke: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-route-smoke-2026-05-06.json`
- Public stable preview DOM text: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-preview-dom-text-2026-05-06.txt`
- Public stable desktop full screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/desktop-full-public-preview-2026-05-06.png`
- Public stable mobile full screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/mobile-full-public-preview-2026-05-06.png`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa3-cdp-capture-2026-05-06.mjs`
- Technical build check: `npm run build` passed locally on 2026-05-06 during this recheck.
- PR preview live check: `curl -L https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app` returned HTTP 401 / Vercel Authentication Required.

## What failed

1. The stable public preview still contains stale/unsafe proof language and markers from the older build, including `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, and an unsupported public `4.8` rating claim.
2. The stable preview does not prove the local v2 public redeploy happened.
3. The PR preview is not publicly accessible because Vercel authentication protection is still active.
4. Final public-preview QA cannot pass until a shareable preview reflects the corrected source.

## Required unblock action

Redeploy or alias the stable preview so `https://graceful-ordinary-redesign.vercel.app` reflects the merged v2 source, or provide an approved public/bypass preview URL. Then rerun QA round 3 against that public URL: desktop/mobile screenshots, DOM/link scrape, stale-string check, pitch/battle-card cross-check, and Mission Control writeback.

## Mission Control note

Mission Control should remain at `build_stage=qa_round_3`, `ready_to_pitch=false`, with `qa-round-3` and `delivery-package` still blocked until the public preview is fixed and rechecked.
