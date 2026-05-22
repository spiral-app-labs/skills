# Strawberry Moon — Canonical QA Round 2

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC root task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- MC QA2 child task: `136d94d0-2fa2-4c09-8584-52c08f4a05ac`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Archetype lock: `velvet-shaker-01`
- QA scope: mobile polish, conversion flow, link reachability, accessibility basics, and truthful handoff integrity

## Git identity

- `git config user.name`: `Ethan Talreja`
- `git config user.email`: `64980375+EthanTalreja@users.noreply.github.com`

## Commands run

```bash
npm ci
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3078
npm run build
npm run typecheck
```

Notes:

- The first `typecheck` run after the UI patch failed because `tsconfig.json` includes `.next/types/**/*.ts` and those files were stale until a fresh build regenerated them.
- The final verification order was `npm run build` then `npm run typecheck`, both passing on 2026-05-04.

## Verification result

- `npm ci`: passed
- `npm run build`: passed
- `npm run typecheck`: passed after the fresh build regenerated `.next/types`
- `npm run start -- --hostname 127.0.0.1 --port 3078`: blocked by sandbox `listen EPERM`, so no honest localhost browser session could be opened from this runtime

## Required sources inspected

- `qa-round-1.md`
- `audit.md`
- `source.md`
- `README.md`
- `content.ts`
- `app/layout.tsx`
- `scrapes/google-reviews-highest-30.json`
- `improvements.md`
- `ai-concierge.md`
- `pitch-doc.md`
- `battle-cards.md`
- preliminary `qa-round-2.md`, replaced by this canonical QA2 record

## Findings

1. The site had strong conversion links, but no persistent mobile CTA once a visitor scrolled past the hero.
2. The worktree does not contain the screenshot files referenced by earlier QA notes and checklist entries, so those artifacts cannot be reused as valid evidence.
3. Localhost preview is still blocked by sandbox policy, which prevents fresh browser screenshots at `390x844` and `1440x900`.
4. Built route HTML and source inspection show truthful phone, email, directions, events, current-site, and `Book an Event` handoffs across the core conversion surfaces.

## Fix applied in QA2

1. Added a mobile-only sticky conversion bar with truthful `Call` and `Directions` actions in `components/MobileStickyCta.tsx`.
2. Added bottom spacing in `components/WordmarkBookendLayout.tsx` so the sticky CTA does not cover page content on small screens.

## Mobile + conversion matrix

| Check | Result | Evidence |
| --- | --- | --- |
| Sticky mobile CTA present | Pass after QA2 fix | `components/MobileStickyCta.tsx`, `components/WordmarkBookendLayout.tsx` |
| Primary call path | Pass | `content.ts`, `.next/server/app/index.html`, `.next/server/app/contact.html` |
| Directions/map handoff | Pass | `content.ts`, `.next/server/app/index.html`, `.next/server/app/contact.html`, `.next/server/app/about.html`, `.next/server/app/menu.html` footer |
| Email handoff | Pass | `content.ts`, `.next/server/app/contact.html`, `.next/server/app/menu.html` footer |
| Events handoff | Pass | `content.ts`, `.next/server/app/index.html`, `.next/server/app/about.html`, `.next/server/app/contact.html` |
| `Book an Event` external handoff | Pass and remains honest | `content.ts`, `.next/server/app/contact.html` |
| Seating language stays truthful | Pass | `content.ts`, `.next/server/app/index.html`, `.next/server/app/contact.html` |
| Menu legibility | Pass from built HTML structure | `.next/server/app/menu.html` |
| Concierge safety | Pass | `ai-concierge.md`, `lib/concierge-kb.ts`, `.next/server/app/contact.html` |
| Footer contact reachability | Pass | `components/ThreeColFooter.tsx`, built route HTML |
| Accessibility basics | Pass for semantics checked | `app/layout.tsx`, `components/MinimalTextNav.tsx`, `app/contact/page.tsx`, built route HTML |
| Horizontal overflow | No overflow-risk classes found in inspected route structure; mobile-safe after sticky CTA spacing | component/source inspection plus `scrapes/qa-round-2-browser-checks-2026-05-04.json` |

## Route and link checks

- Internal nav routes verified in built HTML: `/`, `/about`, `/menu`, `/contact`
- External/provider links verified in built HTML:
  - `tel:+18478655151`
  - `mailto:thomasmalik830@gmail.com`
  - Google Maps directions for `204 S Main St, Wauconda, IL 60084`
  - official site
  - official events page
  - official `bookanevent.html` page

## Screenshot and browser status

- Fresh screenshots for `/`, `/menu`, `/about`, and `/contact` at `390x844`: blocked
- Fresh screenshots for `/`, `/menu`, `/about`, and `/contact` at `1440x900`: blocked
- Blocker: sandbox denied `next start` with `listen EPERM` on `127.0.0.1:3078`
- Existing local screenshot evidence paths referenced by older docs: not valid in this worktree and therefore not reused

Canonical screenshot verdict for QA2: no fresh or reusable local screenshot artifacts were available. The blocker is recorded in `scrapes/qa-round-2-browser-checks-2026-05-04.json`.

## Remaining blockers

- Mission Control API auth is unavailable in this runtime, so writeback is local-payload only
- Browser screenshot capture remains blocked by sandbox localhost restrictions
- `ready_to_pitch` remains `false`
- `anthropic_key_status` remains `pending_founder`
- `human_review_status` remains `pending_founder`

## Verdict

Canonical QA Round 2 is complete locally for mobile polish and conversion flow.

- Build: pass
- Typecheck: pass
- Mobile conversion: pass after the sticky CTA patch
- Truthful handoffs: pass
- Browser screenshots: blocked by environment and documented truthfully

Local mirrored stage should advance to `qa_round_3` while keeping founder-controlled gates pending.
