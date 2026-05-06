# Golden Rolls — Delivery Package

- Restaurant: Golden Rolls
- Site slug: `golden-rolls`
- Lead ID: `e5048ba5-21d5-4400-8673-f92e16954560`
- MC parent task: `c98d74ad-1a44-4df4-b313-bd20d675ae71`
- Template / archetype: `bamzi-01` — Bamzi adapted for a casual hidden-gem sushi/Japanese bistro
- Current local stage: `packaging`
- PR preview URL: `https://skills-git-feat-golden-roll-b90ee8-ethan-ethantalrejas-projects.vercel.app`
- Preview access status: **auth-gated by Vercel** from unauthenticated fetch; not owner-deliverable until public access is configured or a shareable preview URL is generated. Latest check: `restaurant-website-system/sites/golden-rolls/public-preview-access-check-2026-05-05.md` (`HTTP/2 401`, checked 2026-05-06T04:43:57Z).

## Delivery verdict

Packaging is assembled locally, but owner delivery is **blocked** until there is a publicly accessible preview URL and Mission Control writeback is available.

The website itself has passed all three QA rounds and is sell-ready for demo/presentation once Ethan can open a shareable preview.

## Package contents

### Website preview

- Auth-gated Vercel preview from PR #62: `https://skills-git-feat-golden-roll-b90ee8-ethan-ethantalrejas-projects.vercel.app`
- Public preview access check: `restaurant-website-system/sites/golden-rolls/public-preview-access-check-2026-05-05.md`
- GitHub PR: `https://github.com/spiral-app-labs/skills/pull/62`
- Merged QA3 commit: `7ac631977bd3febe176eb8239b83c96e1b24cb75`

### Owner-facing sales artifacts

- Pitch doc: `restaurant-website-system/sites/golden-rolls/pitch-doc.md`
- Outreach draft: `restaurant-website-system/sites/golden-rolls/outreach-draft.md`
- Battle cards: `restaurant-website-system/sites/golden-rolls/battle-cards.md`

### Source / audit evidence

- Current-site audit: `restaurant-website-system/sites/golden-rolls/audit.md`
- Browser evidence audit: `restaurant-website-system/sites/golden-rolls/browser-evidence-audit-2026-05-05.md`
- Google review themes: `restaurant-website-system/sites/golden-rolls/google-reviews-themes.md`
- Google Highest review packet: `restaurant-website-system/sites/golden-rolls/scrapes/google-reviews-highest-30-2026-05-05.md`
- Google review screenshot: `restaurant-website-system/sites/golden-rolls/screenshots/google-reviews-highest-2026-05-05.png`

### Build / improvement evidence

- Build writeback payload: `restaurant-website-system/sites/golden-rolls/mc-build-writeback-building-complete-2026-05-05.json`
- Improvement pass: `restaurant-website-system/sites/golden-rolls/improvement-pass-2026-05-05.md`
- Top 3 improvements: `restaurant-website-system/sites/golden-rolls/top-3-improvements-2026-05-05.md`
- Concierge QA: `restaurant-website-system/sites/golden-rolls/concierge-qa-2026-05-05.md`

### QA evidence

- QA round 1: `restaurant-website-system/sites/golden-rolls/qa-round-1-2026-05-05.md`
- QA round 2: `restaurant-website-system/sites/golden-rolls/qa-round-2-2026-05-05.md`
- QA round 3: `restaurant-website-system/sites/golden-rolls/qa-round-3-2026-05-05.md`
- QA3 responsive metrics: `restaurant-website-system/sites/golden-rolls/scrapes/qa3-responsive-metrics-2026-05-05.json`
- QA3 screenshots:
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-home-narrow-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-home-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-home-desktop-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-menu-narrow-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-menu-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-menu-desktop-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-contact-narrow-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-contact-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/golden-rolls/screenshots/qa3-cdp-contact-desktop-2026-05-05.png`

## Demo path for Ethan

1. Open the shareable preview once public access is fixed.
2. Homepage: show the hidden-gem hook, Google proof, and call/menu CTAs.
3. Menu: show category shortcuts, review-backed picks, and current-price phone handoff.
4. Contact: show phone, address, official site, and Google Maps handoff.
5. Concierge: ask “What should I order tonight?” then “Are you gluten free?” to show safe help + phone handoff.
6. Close with: “Your best reviews are already selling the restaurant. This makes those reviews the first impression new guests see on their phones.”

## Founder cautions

- Do not send the Vercel preview to the owner until public access is confirmed.
- Confirm current prices, hours, rating/review counts, and delivery availability before launch.
- Do not imply online reservations, allergy safety, delivery-provider certainty, fake omakase, chef ownership, premium sourcing, or private-event/catering claims.
- Keep positioning grounded: polished local Japanese bistro / hidden-gem sushi room.

## Blockers before delivery

1. **Public preview URL:** Current Vercel preview is auth-gated for unauthenticated access. Generate a public/shareable preview or configure Vercel preview access before owner delivery.
2. **Mission Control writeback:** Trusted MC base URL is reachable at `https://hq.ethantalreja.com`, but this runtime has no usable agency bearer token; `GET /api/agency/leads/e5048ba5-21d5-4400-8673-f92e16954560` returns `HTTP/2 401` with `x-agency-runtime: openclaw`. See `restaurant-website-system/sites/golden-rolls/mc-api-access-check-2026-05-05.md`. Raw Supabase writes were not used; local package/writeback artifacts are ready but not mirrored to MC.
3. **Launch data verification:** Owner should confirm current prices, hours, rating/review count usage, and delivery availability before launch.
