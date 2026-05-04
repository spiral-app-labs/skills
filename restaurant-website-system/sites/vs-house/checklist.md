# vs-house Build Checklist

- Lead ID: 1006c1ea-5a06-4703-9994-117bc90d9dba
- MC parent task ID: 41da188d-4629-4cb2-91f3-6be31d6b9b6d
- Template slug: bamzi-01
- Current stage: packaging
- Deploy URL: TBD
- Updated: 2026-05-04T15:05:00Z

## Requirements

- [x] lead-fit-qualified: Lead passed the restaurant lead-fit qualification gate - Audit identifies V's House as a high-fit restaurant with strong review volume, press, family heritage, and existing conversion flows.
- [x] current-site-audit: Current site audit captured desktop, mobile, menu, reviews, and asset evidence - Pre-fork audit exists at restaurant-website-system/sites/vs-house/audit.md with screenshots/scrapes and review/proof inventory.
- [x] template-route-locked: Template route and modifiers are locked from the restaurant site router - Route locked to bamzi-01 in audit/source.md for accessible-casual modern Asian restaurant with menu depth and saturated accent potential.
- [x] fork-built: Template fork is built with real content, preserved links, and no placeholder copy - Local Next.js fork exists at restaurant-website-system/sites/vs-house with bamzi-01 source, real content.ts, preserved contact/reservation/order flows.
- [ ] qa-round-1: QA round 1 completed with findings and fixes logged
- [ ] qa-round-2: QA round 2 completed with findings and fixes logged
- [ ] qa-round-3: QA round 3 completed with findings and fixes logged
- [ ] delivery-package: Preview URL, pitch doc, outreach draft, screenshots, and MC evidence are attached

## Evidence Paths

- restaurant-website-system/sites/vs-house/pitch-doc.md
- restaurant-website-system/sites/vs-house/audit.md
- restaurant-website-system/sites/vs-house/scrapes/google.json
- restaurant-website-system/sites/vs-house/battle-cards.md
- restaurant-website-system/sites/vs-house/qa-round-1.md

## QA Rounds

- Round 1: Factual/source QA found and fixed unsupported past-midnight bar claim; build/typecheck passed; screenshots blocked by unavailable browser.

## Pitch Artifacts

- Pitch doc: restaurant-website-system/sites/vs-house/pitch-doc.md
- Outreach draft: restaurant-website-system/sites/vs-house/outreach-draft.md

## Blockers

- Fresh QA screenshots cannot be captured because the OpenClaw managed browser cannot start on this host (No supported browser found). Source/build QA advanced; next unblock action is enabling browser/Chromium capture for desktop + mobile screenshots.

## Done Criteria

- Mission Control lead has a simple sales status and current metadata.build_stage.
- Mission Control parent task metadata.requirements mirrors this checklist.
- All required checklist rows are passed.
- Three QA rounds are logged with screenshot evidence.
- Preview URL, pitch doc, outreach draft, and delivery evidence are attached.


## 2026-05-04 — QA Round 2 heartbeat progress

- Artifact added: `restaurant-website-system/sites/vs-house/qa-round-2.md`.
- Fix shipped locally: homepage now includes `MenuSection` after the signature row and `ContactPanel` before the footer, so mobile diners can see the text menu, reserve/call/order paths, hours, address, and map without leaving the homepage.
- Verification: `npm run build` passed; `npm run typecheck` passed.
- Remaining blocker: desktop/mobile screenshot capture is still pending because the OpenClaw managed browser has no Chromium executable and the user-profile attach path is not connected. Final delivery stays blocked until screenshot evidence is attached.

## 2026-05-04 — QA Round 3 heartbeat progress

- Artifact added: `restaurant-website-system/sites/vs-house/qa-round-3.md`.
- Final sell-readiness issue found and fixed: `content.ts` had demo/market-range prices. Removed visible prices until V's House prices are owner/current-menu-confirmed.
- Code updated: `content.ts`, `components/MenuSection.tsx`, `app/api/chat/route.ts`.
- Verification: `npm run build` passed; `npm run typecheck` passed.
- Remaining blockers: desktop/mobile screenshot evidence, owner-confirmed menu prices, and deployed preview smoke test.

## 2026-05-04 — Menu price evidence heartbeat progress

- Artifact added: `restaurant-website-system/sites/vs-house/menu-price-evidence.md`.
- Fetched official live menu HTML and downloaded 11 current menu PNGs to `scrapes/menu-images/`.
- Reintroduced only source-confirmed prices into `content.ts`; left unconfirmed items without prices.
- Verification: `npm run build` passed; `npm run typecheck` passed.
- Remaining blockers are now narrower: screenshot capture, deployed preview smoke test, and any final unpriced-item confirmation/removal.

## 2026-05-04 — Unpriced menu item cleanup heartbeat progress

- Removed remaining unpriced sales-demo menu rows from `content.ts`: `Spicy California Roll` and happy-hour egg rolls.
- Verified no `price: null`, `Spicy California`, or `price pending` strings remain in `content.ts`.
- Verification: `npm run build` passed; `npm run typecheck` passed.
- Remaining blockers: browser screenshot capture and deployed preview smoke test.

## 2026-05-04 — Browser evidence recovered and packaging advanced

- Artifact added: `restaurant-website-system/sites/vs-house/scrapes/google-highest-30-2026-05-04.json` plus Markdown companion.
- Google Reviews evidence: live Google Maps Reviews tab, `Sort -> Highest rating`, 30 written five-star rows/snippets captured. The all-highest feed stopped paginating at 20 rows, so rows 21-30 use Google topic chips while Highest sorting remained selected; truncation is marked in the packet.
- Preview screenshots captured with local Chrome against `http://127.0.0.1:3076`:
  - `restaurant-website-system/sites/vs-house/screenshots/preview-home-desktop-2026-05-04.png`
  - `restaurant-website-system/sites/vs-house/screenshots/preview-home-mobile-2026-05-04.png`
- QA requirements 1-3 are now locally evidence-backed in `checklist.json`.
- Current stage advanced locally to `packaging`. Remaining delivery blockers: deployed preview URL, outreach draft, Mission Control evidence mirror/writeback, and deployed preview smoke test.

## 2026-05-04 — Packaging artifacts heartbeat progress

- Artifact added: `restaurant-website-system/sites/vs-house/outreach-draft.md`.
- Artifact added: `restaurant-website-system/sites/vs-house/delivery-package.md`.
- Updated pitch/battle-card notes to reflect the new Google Highest packet and latest live Google review count snapshot.
- Delivery package is now locally assembled except for deployed preview URL, MC evidence mirror/writeback, and deployed preview smoke test.

## 2026-05-04 heartbeat addendum — concierge fallback verified

- Updated `app/api/chat/route.ts` so Anthropic is instantiated lazily only when `ANTHROPIC_API_KEY` exists.
- Added a truthful no-secret SSE fallback grounded in V's House content for hours, address, reservation/order links, phone, and menu item names.
- Updated `components/AskConcierge.tsx` so streamed error frames surface to the guest instead of being swallowed as malformed SSE.
- Verified `npm run typecheck`, `npm run build`, and local production `/api/chat` fallback via curl.
- Evidence: `restaurant-website-system/sites/vs-house/concierge-runtime-evidence.md`.
