# Strawberry Moon — Canonical QA Round 1

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC root task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- MC QA1 child task: `2aa1bf26-d71f-4f72-b591-2f01456e87fc`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Archetype lock: `velvet-shaker-01`
- QA scope: build correctness, factual accuracy, source fidelity, link sanity, metadata basics, and truthful concierge behavior

## Git identity

- `git config user.name`: `Ethan Talreja`
- `git config user.email`: `64980375+EthanTalreja@users.noreply.github.com`

## Commands run

```bash
npm ci
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3078
```

## Verification result

- `npm ci`: passed
- `npm run build`: passed on 2026-05-04 after the QA1 source-fidelity patch
- `npm run typecheck`: passed when rerun sequentially after build
- `npm run start -- --hostname 127.0.0.1 --port 3078`: blocked by sandbox `listen EPERM`, so no fresh localhost browser session could be opened from this runtime

## Required sources inspected

- `audit.md`
- `source.md`
- `README.md`
- `content.ts`
- `app/layout.tsx`
- `scrapes/google-reviews-highest-30.json`
- `improvements.md`
- `ai-concierge.md`
- `ai-concierge-transcript.md`
- `pitch-doc.md`
- `battle-cards.md`
- preliminary `qa-round-1.md` replaced by this canonical QA1 record

## Route and metadata checks

- Checked generated route output from `.next/server/app/index.html`, `about.html`, `menu.html`, and `contact.html`
- Title on all four routes: `Strawberry Moon — Martinis, wine, live music, and cozy nights behind the red door in Wauconda.`
- Description on all four routes: `Strawberry Moon is a cozy Wauconda martini bar with wine, nibbles, decadent desserts, live music, and first-come seating behind the red door on Main Street.`
- Internal nav routes verified in built HTML: `/`, `/about`, `/menu`, `/contact`
- External handoff links verified in built HTML after QA1 patch:
  - `tel:+18478655151`
  - `mailto:thomasmalik830@gmail.com`
  - Google Maps directions for `204 S Main St, Wauconda, IL 60084`
  - official site
  - official events page
  - official `bookanevent.html` page

## Source-fidelity matrix

| Claim or path | Source basis | QA1 result |
| --- | --- | --- |
| Name, address, phone | official homepage scrape in `scrapes/current-site-home-text.txt` and `audit.md` | Pass |
| Email contact path | official homepage scrape in `scrapes/current-site-home-text.txt` | Fixed in QA1 and now surfaced in site content |
| Tuesday-Saturday from 4 pm | official homepage scrape and `source.md` | Pass |
| First-come, first-served seating | official homepage scrape and `source.md` | Pass |
| Live music Thu 6:30-9:30, Fri-Sat 7-10 | `scrapes/current-site-events-text.txt`, `audit.md`, `ai-concierge.md` | Pass |
| Google proof `4.7`, `214 reviews`, `$20–30`, `Bar` | `scrapes/google-reviews-highest-30.json` and `audit.md` | Pass |
| Review-backed menu/vibe claims | `scrapes/google-reviews-highest-30.json` | Pass |
| No fake reservations or ordering | `content.ts`, `app/contact/page.tsx`, `lib/concierge-kb.ts` | Pass |
| Concierge refusal rules | `ai-concierge.md`, `ai-concierge-transcript.md`, `lib/concierge-kb.ts` | Pass |
| Pitch and battle-card truthfulness | `pitch-doc.md`, `battle-cards.md`, source packet above | Pass |
| Official `Book an Event` path | Weebly nav capture in `scrapes/current-site-home-dom.html` and `scrapes/current-site-events-dom.html` | Fixed in QA1 and now linked as an external handoff only |

## Findings

1. The site build itself was clean, but the runtime cannot bind a localhost port in this sandbox, so fresh browser screenshots could not be captured.
2. The preliminary QA1 record was stale and not canonical. It described an earlier hero-layout pass instead of a current factual/source-fidelity audit.
3. The demo was omitting two verified public contact paths from the official source packet: the contact email and the existing `Book an Event` page.
4. Earlier docs referenced screenshot artifacts that are not present in this worktree, so QA1 cannot claim valid local screenshot evidence.

## Fixes applied in QA1

1. Added verified email and `Book an Event` external handoff links to `content.ts`.
2. Surfaced the verified email address on the contact page and in the footer via `app/contact/page.tsx` and `components/ThreeColFooter.tsx`.
3. Updated `source.md` so the documented source basis matches the shipped contact/event handoff links.
4. Replaced the preliminary QA1 note with this canonical source-fidelity QA record.

## Browser and screenshot status

- Fresh localhost browser capture: blocked
- Blocker: sandbox denied `next start` with `listen EPERM` on `127.0.0.1:3078`
- Playwright/Chrome CLI availability: not installed in PATH
- Cached browser binaries exist under `~/Library/Caches/ms-playwright`, but without a permitted localhost server they do not unblock route capture
- Existing screenshot evidence paths referenced by older docs: not valid in this worktree at QA time

Canonical screenshot verdict for QA1: no fresh or reusable local screenshot artifacts were available. The blocker is recorded in `scrapes/qa-round-1-browser-checks-2026-05-04.json`.

## Accessibility basics checked

- Primary nav has `aria-label="Primary"`
- Contact address uses semantic `<address>`
- Phone, email, directions, official-site, events, and Book an Event links are explicit and keyboard reachable
- No placeholder hero/body copy found in the shipped content model

## Remaining blockers

- Mission Control API auth is unavailable in this runtime, so writeback is local-payload only
- Browser screenshot capture remains blocked by sandbox localhost restrictions

## Verdict

Canonical QA Round 1 is complete for build correctness and source fidelity.

- Build: pass
- Typecheck: pass
- Factual/source fidelity: pass after the email and `Book an Event` link fix
- Concierge truthfulness: pass
- Browser screenshots: blocked by environment and documented truthfully

Local stage should advance to `qa_round_2` while keeping `ready_to_pitch=false`, `anthropic_key_status=pending_founder`, and `human_review_status=pending_founder`.
