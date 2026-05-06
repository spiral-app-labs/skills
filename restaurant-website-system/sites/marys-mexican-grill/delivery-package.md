# Mary's Mexican Grill Delivery Package

- Date: 2026-05-04, refreshed 2026-05-05T12:49:00Z, preview/QA2 evidence rechecked 2026-05-05T15:05Z, preview/MC blockers rechecked 2026-05-06T05:52Z
- Site path: `restaurant-website-system/sites/marys-mexican-grill`
- MC root task: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`
- MC QA3 child task: `bbb46016-3e2e-43e7-b3d7-e0995e34252e`
- MC packaging child task: `81fa73c9-696d-4dd1-a33b-9f58c44e957f`
- Founder gate task: `03d5cec6-db38-46de-92d6-47d8c06c787e`
- Lead ID: `4416524d-0894-4e47-a4e7-880ba6579aa3`
- Archetype: `bamzi-01`
- Package status: `prepared / MC synced / QA2 screenshot gap locally resolved / waiting on founder + preview verification`
- `ready_to_pitch`: `false`


## Fresh blocker recheck — 2026-05-06

- Public preview recheck: `https://skills-git-chore-marys-qa-round-3-ethan-ethantalrejas-projects.vercel.app` still returns `HTTP/2 401` / Vercel Authentication Required without cookies. Evidence: `restaurant-website-system/sites/marys-mexican-grill/preview-access-check-2026-05-06.md`.
- Mission Control agency API recheck: `GET https://hq.ethantalreja.com/api/agency/leads/4416524d-0894-4e47-a4e7-880ba6579aa3` with `x-agency-runtime: openclaw` and no bearer returns `HTTP/2 401`. Evidence: `restaurant-website-system/sites/marys-mexican-grill/mc-api-access-check-2026-05-06.md`.
- Delivery remains blocked on public/client-safe preview access, site-specific Anthropic key, Ethan human review, and MC bearer auth for the latest local evidence refresh.

## Founder Status

- This package is prepared for Ethan review, not final client pitch use.
- Founder-only gates still open:
  - site-specific Anthropic key: `pending_founder`
  - Ethan human review: `pending_founder`
- Agents cannot mark either gate complete.

## Preview URL

- Preview URL found from GitHub PR #19: `https://skills-git-chore-marys-qa-round-3-ethan-ethantalrejas-projects.vercel.app`
- Access status: auth-protected.
  - Unauthenticated request returned HTTP 401 Unauthorized.
  - Managed OpenClaw browser reached the Vercel login wall instead of the site.
  - 2026-05-05 recheck evidence: `restaurant-website-system/sites/marys-mexican-grill/preview-access-check-2026-05-05.md`
  - Auth-wall screenshot: `restaurant-website-system/sites/marys-mexican-grill/screenshots/preview-auth-wall-2026-05-05.png`
- Handoff implication: Ethan must verify this URL in an authenticated Vercel/GitHub session or provide a client-safe preview URL before final delivery.

## Evidence Inventory

### Core package files

- Checklist: `restaurant-website-system/sites/marys-mexican-grill/checklist.md`
- Checklist JSON: `restaurant-website-system/sites/marys-mexican-grill/checklist.json`
- Delivery package: `restaurant-website-system/sites/marys-mexican-grill/delivery-package.md`
- Pitch doc: `restaurant-website-system/sites/marys-mexican-grill/pitch-doc.md`
  - PR: https://github.com/spiral-app-labs/skills/pull/15
- Battle cards: `restaurant-website-system/sites/marys-mexican-grill/battle-cards.md`
  - PR: https://github.com/spiral-app-labs/skills/pull/16

### Research and build evidence

- Source truth: `restaurant-website-system/sites/marys-mexican-grill/source.md`
- Audit: `restaurant-website-system/sites/marys-mexican-grill/audit.md`
- Reviews themes: `restaurant-website-system/sites/marys-mexican-grill/google-reviews-themes.md`
- Reviews packet: `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.md`
- Build evidence: `restaurant-website-system/sites/marys-mexican-grill/build-evidence-2026-05-04.md`
  - Build PR: https://github.com/spiral-app-labs/skills/pull/11
- Improvement evidence: `restaurant-website-system/sites/marys-mexican-grill/improvement-evidence-2026-05-04.md`
  - Improvement PR: https://github.com/spiral-app-labs/skills/pull/12
- Top three improvements: `restaurant-website-system/sites/marys-mexican-grill/top-3-improvements-2026-05-04.md`
  - Top 3 PR: https://github.com/spiral-app-labs/skills/pull/13
- Concierge evidence: `restaurant-website-system/sites/marys-mexican-grill/concierge-evidence-2026-05-04.md`
  - Concierge PR: https://github.com/spiral-app-labs/skills/pull/14

### QA rounds

- QA1 doc: `restaurant-website-system/sites/marys-mexican-grill/qa-round-1.md`
  - QA1 PR: https://github.com/spiral-app-labs/skills/pull/17
- QA2 doc: `restaurant-website-system/sites/marys-mexican-grill/qa-round-2.md`
  - QA2 PR: https://github.com/spiral-app-labs/skills/pull/18
  - QA2 screenshot refresh: `restaurant-website-system/sites/marys-mexican-grill/qa-round-2-screenshot-recapture-2026-05-05.md`
  - QA2 screenshot existence manifest: `restaurant-website-system/sites/marys-mexican-grill/qa2-screenshot-existence-verify-2026-05-05.json`
- QA3 doc: `restaurant-website-system/sites/marys-mexican-grill/qa-round-3.md`
  - QA3 PR: https://github.com/spiral-app-labs/skills/pull/19
- QA3 browser checks: `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-3-browser-checks-2026-05-04.json`
- QA3 writeback: `restaurant-website-system/sites/marys-mexican-grill/mc-qa-round-3-writeback-2026-05-04.json`
- QA3 build payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-qa-round-3-2026-05-04.json`

### Historical PR chain

- Reviews: https://github.com/spiral-app-labs/skills/pull/3
- Build: https://github.com/spiral-app-labs/skills/pull/11
- Improvement pass: https://github.com/spiral-app-labs/skills/pull/12
- Top 3: https://github.com/spiral-app-labs/skills/pull/13
- Concierge: https://github.com/spiral-app-labs/skills/pull/14
- Pitch: https://github.com/spiral-app-labs/skills/pull/15
- Battle cards: https://github.com/spiral-app-labs/skills/pull/16
- QA1: https://github.com/spiral-app-labs/skills/pull/17
- QA2: https://github.com/spiral-app-labs/skills/pull/18
- QA3: https://github.com/spiral-app-labs/skills/pull/19

## QA Summary And Screenshot Inventory

### QA Round 1

- Status: passed.
- Summary: responsive overflow and first-screen spacing issues were fixed.
- Screenshot files present:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-1-desktop-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-1-mobile-2026-05-04.png`
- Supporting scrape:
  - `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-1-homepage-html-2026-05-04.html`

### QA Round 2

- Status: passed; referenced screenshot inventory is now present in the current worktree after 2026-05-05 local preview recapture.
- Summary: mobile conversion polish, tighter public copy, earlier contact details, and better truthful DoorDash emphasis.
- Screenshot refresh note: `restaurant-website-system/sites/marys-mexican-grill/qa-round-2-screenshot-recapture-2026-05-05.md`
- Screenshot existence manifest: `restaurant-website-system/sites/marys-mexican-grill/qa2-screenshot-existence-verify-2026-05-05.json`
- Screenshot files present:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-desktop-contact-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-2-mobile-contact-2026-05-04.png`
- Supporting browser checks:
  - `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-2-browser-checks-2026-05-04.json`

### QA Round 3

- Status: passed / Mission Control synced.
- Summary: final sell-readiness review is complete for local founder review. The site remains restaurant-specific, truthful, mobile-usable, and conversion-oriented; final handoff is blocked by preview access verification and founder-only gates.
- Screenshot files captured:
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-desktop-contact-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-home-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-menu-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-about-2026-05-04.png`
  - `restaurant-website-system/sites/marys-mexican-grill/screenshots/qa-round-3-mobile-contact-2026-05-04.png`
- Capture method: `next start -H 127.0.0.1 -p 3120` plus Google Chrome headless at `1440x900` and `390x844`.
- Supporting browser checks:
  - `restaurant-website-system/sites/marys-mexican-grill/scrapes/qa-round-3-browser-checks-2026-05-04.json`

## Fresh Build Validation In This Worktree

- `npm ci`: passed on 2026-05-04 in `restaurant-website-system/sites/marys-mexican-grill`
- `npm run build`: passed on 2026-05-04 with Next.js `14.2.35`
- `npm run typecheck`: passed on 2026-05-04
- Local preview rendering: passed at `http://127.0.0.1:3120`

## Demo Path For Ethan

1. Open the PR #19 preview URL in an authenticated Vercel/GitHub session and confirm it renders beyond the protection wall.
2. Start in `audit.md` to see the current owned-site conversion failure and wrong-route context.
3. Open `pitch-doc.md` for the owner-facing before/after story.
4. Open `battle-cards.md` for objection handling and closing path.
5. Review `top-3-improvements-2026-05-04.md` and `concierge-evidence-2026-05-04.md` for the strongest product improvements.
6. Read `qa-round-3.md` for the founder-hold reasoning and exact `ready_to_pitch=false` gate.
7. Use `source.md` to validate any claim before pitching or editing live copy.

## Open Blockers / Next Actions

- Ethan must verify or provide a client-safe preview URL; PR #19 preview is auth-protected for unauthenticated checks.
- Ethan must create/configure the site-specific Anthropic key.
- Ethan must personally complete human review.
- QA2 screenshot files referenced in the existing evidence were recaptured locally on 2026-05-05 and verified present/non-empty in `qa2-screenshot-existence-verify-2026-05-05.json`; they now need to be mirrored to MC when the agency API secret is available.
- Mission Control QA3 + prior packaging sync is complete via the patched local MC agency API from PR #328; the 2026-05-05 QA2 screenshot refresh is local-only pending API credentials.

## Local MC Payloads

- QA3 payload: `restaurant-website-system/sites/marys-mexican-grill/mc-qa-round-3-writeback-2026-05-04.json`
- QA3 build payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-qa-round-3-2026-05-04.json`
- Packaging build payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-packaging-2026-05-04.json`
- Packaging refresh payload: `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-packaging-2026-05-05.json`
- Delivery payload: `restaurant-website-system/sites/marys-mexican-grill/mc-delivery-package-writeback-2026-05-04.json`
- MC/root task state after sync:
  - root task `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`: `packaging`, blocker attached, 17 evidence URLs mirrored
  - QA3 child `bbb46016-3e2e-43e7-b3d7-e0995e34252e`: `done`, 8 screenshot evidence URLs mirrored
  - delivery child `81fa73c9-696d-4dd1-a33b-9f58c44e957f`: `in_progress`, blocker attached, 17 evidence URLs mirrored
  - `ready_to_pitch: false`
  - founder Anthropic key pending
  - founder human review pending
