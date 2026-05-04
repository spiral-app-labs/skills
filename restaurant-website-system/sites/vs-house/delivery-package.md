# V's House — Delivery Package

## Status

- Site slug: `vs-house`
- Lead ID: `1006c1ea-5a06-4703-9994-117bc90d9dba`
- MC parent task: `41da188d-4629-4cb2-91f3-6be31d6b9b6d`
- Template archetype: `bamzi-01`
- Current local stage: `packaging`
- Preview URL: `https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app` (Vercel protected, not owner-shareable yet)
- Delivery verdict: **Not delivered yet** — local QA/evidence package is assembled; deployed preview and MC writeback remain.

## Core sell story

V's House already has the hard-to-fake assets: a third-generation Vu family story, a designed dining room, pho/sushi/cocktail depth, public press, and 1,100+ Google reviews. The rebuild turns those assets into a clear first-ten-seconds story and a practical mobile diner flow.

## Demo path

1. Show old homepage: `Welcome Home` / `#OneHouseVsHouse` without the family/review/menu proof.
2. Show rebuilt hero: third-generation Vu family story, `Bar · Sushi · Pho`, proof strip, reserve/order/call CTAs.
3. Scroll to heritage: Quan Vu / Pho V / V's House lineage.
4. Show structured menu: text sections and source-confirmed prices instead of pinch-zoom image-only browsing.
5. Show proof: Fort Worth Magazine, Dallas Observer, Google/OpenTable, Google Highest review packet, named dish/service language.
6. End on conversion: Toast reserve, Toast order, phone, directions, gift cards, contact/hours, concierge entry.

## Evidence bundle

### Strategy / sell artifacts

- `restaurant-website-system/sites/vs-house/pitch-doc.md`
- `restaurant-website-system/sites/vs-house/battle-cards.md`
- `restaurant-website-system/sites/vs-house/outreach-draft.md`
- `restaurant-website-system/sites/vs-house/delivery-package.md`

### Build / source artifacts

- `restaurant-website-system/sites/vs-house/source.md`
- `restaurant-website-system/sites/vs-house/content.ts`
- `restaurant-website-system/sites/vs-house/app/page.tsx`
- `restaurant-website-system/sites/vs-house/components/MenuSection.tsx`
- `restaurant-website-system/sites/vs-house/app/api/chat/route.ts`

### Public-source evidence

- `restaurant-website-system/sites/vs-house/audit.md`
- `restaurant-website-system/sites/vs-house/scrapes/google.json`
- `restaurant-website-system/sites/vs-house/scrapes/google-highest-30-2026-05-04.json`
- `restaurant-website-system/sites/vs-house/scrapes/google-highest-30-2026-05-04.md`
- `restaurant-website-system/sites/vs-house/menu-price-evidence.md`
- `restaurant-website-system/sites/vs-house/scrapes/menu-live.html`
- `restaurant-website-system/sites/vs-house/scrapes/menu-images/`

### QA artifacts

- `restaurant-website-system/sites/vs-house/qa-round-1.md`
- `restaurant-website-system/sites/vs-house/qa-round-2.md`
- `restaurant-website-system/sites/vs-house/qa-round-3.md`
- `restaurant-website-system/sites/vs-house/checklist.md`
- `restaurant-website-system/sites/vs-house/checklist.json`

### Screenshot evidence

- `restaurant-website-system/sites/vs-house/screenshots/preview-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/vs-house/screenshots/preview-home-mobile-2026-05-04.png`

## QA summary

- QA Round 1: fixed unsupported `past midnight` bar copy and verified factual/source fidelity.
- QA Round 2: fixed homepage conversion depth by bringing text menu and contact/CTA sections into the main homepage journey.
- QA Round 3: removed unconfirmed/demo prices, restored only official-menu-confirmed prices, removed unpriced demo rows, and verified final sell-readiness blockers.
- Browser evidence recovery: captured Google Highest review packet plus desktop/mobile preview screenshots.

## Remaining blockers before delivery

1. Make the Vercel preview owner-shareable or provide a deployment-protection bypass token.
2. Smoke-test `/` and `/api/chat` on the deployed preview URL after Vercel protection is bypassed; local production fallback is verified without an API key.
3. Mirror packaging evidence to Mission Control via approved API route.
4. Confirm final owner-facing outreach timing and contact path.

## Do-not-overclaim notes

- Do not claim a photoshoot happened; current preview uses public/existing asset strategy.
- Do not present the site as final-delivered until a deployed preview URL and runtime verification are attached.
- Treat Google review counts as snapshot evidence (`4.4 / 1,156` seen on 2026-05-04) and re-check before a live sales call if needed.
- Keep register polished accessible-casual, not fine dining.

## 2026-05-04 heartbeat addendum — concierge fallback verified

- Updated `app/api/chat/route.ts` so Anthropic is instantiated lazily only when `ANTHROPIC_API_KEY` exists.
- Added a truthful no-secret SSE fallback grounded in V's House content for hours, address, reservation/order links, phone, and menu item names.
- Updated `components/AskConcierge.tsx` so streamed error frames surface to the guest instead of being swallowed as malformed SSE.
- Verified `npm run typecheck`, `npm run build`, and local production `/api/chat` fallback via curl.
- Evidence: `restaurant-website-system/sites/vs-house/concierge-runtime-evidence.md`.

## 2026-05-04 heartbeat addendum — preview URL found but protected

- Vercel preview URL found from PR #1: `https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app`.
- `GET /` and `POST /api/chat` both returned Vercel Authentication Required (`401`) from OpenClaw.
- Added `preview-smoke-evidence.md`.
- Delivery remains blocked on an owner-shareable/public preview or deployment-protection bypass, plus MC writeback confirmation.
