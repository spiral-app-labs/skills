# The Graceful Ordinary — QA Round 3 Public Stable Recheck BLOCKED

- Date: 2026-05-07T20:47Z
- Gate: `qa_round_3`
- Public preview tested: `https://graceful-ordinary-redesign.vercel.app/`
- Result: **BLOCKED — do not pitch/deliver yet**

## Verdict

The stable public preview is reachable, but it is still serving the stale/factually unsafe proof layer. This supersedes the earlier `qa-round-3-public-stable-pass-2026-05-06-2359Z.md` artifact; today’s live DOM scrape proves the public URL still contains the stale claims.

## Evidence captured

- Desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-desktop-warm-qa3-2026-05-07-2047Z.png`
- Mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/public-stable-preview-mobile-warm-qa3-2026-05-07-2047Z.png`
- DOM text scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-stable-preview-dom-text-warm-2026-05-07-2047Z.txt`
- Route smoke: `/`, `/menu`, `/about`, and `/contact` all returned HTTP 200 on `https://graceful-ordinary-redesign.vercel.app`.

## Stale/unsafe strings found in live DOM

- `AAA Three-Diamond`
- `TripAdvisor`
- `TripAdvisor Guest`
- `200+ Reviews`
- unsupported `4.8` rating claim

Representative DOM lines from `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-stable-preview-dom-text-warm-2026-05-07-2047Z.txt`:

```text
A rotating menu of New American dishes anchored by the wood-burning hearth, paired with an expertly curated wine program from our AAA Three-Diamond-recognized team.
4.8★
200+ REVIEWS
— TRIPADVISOR, AAA THREE-DIAMOND RECOGNITION
— TRIPADVISOR GUEST
```

## What is still okay

- The public URL and core routes are available: `/`, `/menu`, `/about`, `/contact` return HTTP 200.
- Restaurant identity markers like The Graceful Ordinary, Chris Curren, St. Charles, Fox River, phone, and Reserve are present.

## Blocker

QA round 3 remains blocked after 2026-05-07T20:47Z public recheck: the founder-shareable stable preview at https://graceful-ordinary-redesign.vercel.app/ is reachable, but still serves stale/factually unsafe proof claims (`AAA Three-Diamond`, `TripAdvisor`, `TripAdvisor Guest`, `200+ Reviews`, and unsupported `4.8`). Routes /, /menu, /about, and /contact return HTTP 200, so the blocker is deploy fidelity/truth-safety rather than site availability. Mission Control planner/writeback is also blocked in this runtime because AGENCY_AUTONOMY_API_KEY and OPENCLAW_WEBHOOK_SECRET are missing; production planner returns 401. No raw Supabase mutation was performed.

## Required unblock

Redeploy/alias the corrected PR #92/source build to the public stable preview (or provide a public, non-auth preview), then rerun QA round 3 against the live URL and verify:

1. No `AAA`, `TripAdvisor`, `TripAdvisor Guest`, `200+ Reviews`, or unsupported `4.8` strings remain.
2. Exact reservation/phone/menu/contact paths are correct.
3. Final desktop/mobile public screenshots show the corrected source.
4. MC build/QA writeback succeeds through the protected agency API.
