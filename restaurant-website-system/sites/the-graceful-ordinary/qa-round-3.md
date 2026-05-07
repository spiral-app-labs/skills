# The Graceful Ordinary — QA Round 3 Final Sell-Readiness Attempt

- Date: 2026-05-06
- Round: 3
- Gate: `qa_round_3`
- Status: **blocked / needs work before founder-facing delivery**
- Local preview tested: `http://127.0.0.1:3037`
- Public stable preview tested: `https://graceful-ordinary-redesign.vercel.app`
- PR preview tested: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app`

## Final verdict

**Needs work.** The local v2 source is substantially stronger and passed technical verification, but QA round 3 cannot pass because no founder-shareable public preview currently reflects the local v2 source.

Hard blocker:

- The public stable preview returns HTTP 200 but remains stale and still includes unsupported/stale proof claims such as `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, and `4.8`.
- The PR preview returns HTTP 401 / Vercel Authentication Required.
- Therefore Ethan cannot confidently send a live preview to the owner yet.

## Evidence captured this round

- Local desktop screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-desktop-full.png`
- Local mobile screenshot: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-3/local-mobile-full.png`
- Local DOM/text scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-dom-text-2026-05-06.txt`
- Local link scrape: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-local-links-2026-05-06.json`
- Capture script: `restaurant-website-system/sites/the-graceful-ordinary/scrapes/capture-qa-round-3-cdp-2026-05-06.mjs`
- Public stale preview evidence: live scan of `https://graceful-ordinary-redesign.vercel.app/` found `AAA Three-Diamond`, `TripAdvisor Guest`, `200+ Reviews`, and `4.8` still present.
- PR preview evidence: live route check returned HTTP 401 for `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/`.

## Technical verification

- `npm run typecheck` passed on 2026-05-06.
- `npm run build` passed on 2026-05-06.
- Local route checks on port `3037`: `/`, `/menu`, `/about`, `/contact` all returned HTTP 200.
- Local content scan: stale proof strings `AAA`, `TripAdvisor`, `200+ Reviews`, and `4.8★` were absent from local DOM text.
- Local link scrape confirmed the primary Resy CTAs use `https://resy.com/cities/stc/the-graceful-ordinary`.
- Concierge API check returned a useful birthday-dinner recommendation, `{{reserve}}`, and a safe reservation-intent tool payload without claiming to complete a booking.

## Five-lens QA

### 1. Identity

Local v2 is clearly restaurant-specific: refined rustic/open-hearth positioning, Chris and Megan Curren, St. Charles/Fox River context, real menu items, press proof, and captured Google-review themes are all present. This is a large improvement over the stale public preview.

Status: **locally acceptable, public preview blocked**.

### 2. Conversion

Local v2 has strong high-intent paths: desktop nav Reserve/Menu/Call, mobile sticky Reserve/Menu/Call, route-level menu/about/contact pages, Resy links, and phone links. Public preview cannot be approved because it does not contain the full local v2 conversion/concierge evidence.

Status: **locally acceptable, public preview blocked**.

### 3. Accuracy

Local source removes the previously unsupported proof claims and uses safer Google rating/review count language plus official/public proof. Public stable preview still exposes unsupported stale claims, which is a hard fail for founder-facing delivery.

Status: **blocked**.

### 4. Design quality

Local screenshots show a premium editorial direction with strong food imagery, warm type, and Roma/1776-inspired pacing. Minor future polish opportunities remain around making some mobile supporting text and proof/review details easier to read, but the decisive blocker is still deploy fidelity rather than source quality.

Status: **locally near-ready, public preview blocked**.

### 5. Mobile polish

Local mobile evidence includes the sticky conversion bar and repaired stacked sections. Screenshot review still flagged some small-text/proof-card density opportunities, but no major broken interaction was found locally. A final mobile pass must be repeated on the actual public preview after redeploy.

Status: **locally acceptable for redeploy candidate, public preview blocked**.

## What is world-class already

- The local v2 narrative feels premium and specific to The Graceful Ordinary rather than a generic restaurant template.
- The Resy, menu, call, and contact paths are direct and easy to reach.
- The concierge is truth-safe: it recommends specific dishes, captures intent, and hands off to Resy/phone without fake booking promises.
- The build is technically sound: typecheck/build passed and local core routes returned HTTP 200.

## What still blocks sellability

1. The public stable preview is stale and factually unsafe because unsupported proof claims are still visible.
2. The clean PR/Vercel preview is not publicly shareable because it returns HTTP 401.
3. Mission Control API credentials are not configured in this runtime, so the QA/writeback payload cannot be mirrored through the official MC API from here.
4. Final public-preview screenshots cannot be captured against the updated source until a shareable preview exists.

## Critical fixes before Ethan sees it

1. Make a founder-shareable preview reflect the local v2 source: either redeploy `https://graceful-ordinary-redesign.vercel.app` from this source or make the PR preview public/shareable.
2. Re-run QA round 3 against that shareable preview, not just localhost.
3. Confirm stale strings are absent from the public DOM: `AAA`, `TripAdvisor`, `200+ Reviews`, unsupported `4.8` claim.
4. Confirm public CTAs route correctly: Resy, phone, menu, about, contact.
5. Capture final desktop/mobile public screenshots and mirror the QA round plus build-stage blocker/pass payload into Mission Control.

## Confidence to sell

Not ready to pitch yet. I would be comfortable using the local v2 as the redeploy candidate, but Ethan would have to explain away too much if he sent the current public preview: stale proof claims are still live, and the PR preview is locked behind Vercel authentication. Once a public preview reflects local v2 and passes one more public QA sweep, this can move back toward packaging.
