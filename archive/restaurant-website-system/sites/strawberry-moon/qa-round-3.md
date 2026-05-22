# Strawberry Moon — Canonical QA Round 3

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC root task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- MC QA3 child task: `f2c92b69-6485-415e-b2c3-8c765f8b193b`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Archetype lock: `velvet-shaker-01`
- QA scope: final sell-readiness, preview/screenshots, pitch/battle-card evidence, top-three-improvement evidence, concierge safety, links, and MC requirement packaging

## Git identity

- `git config user.name`: `Ethan Talreja`
- `git config user.email`: `64980375+EthanTalreja@users.noreply.github.com`

## Commands run

```bash
npm ci
npm run build
npm run typecheck
npm run start -- --hostname 127.0.0.1 --port 3083
node /tmp/qa3-capture.mjs
```

## Verification result

- `npm ci`: passed; npm audit reported inherited advisories in the current dependency stack
- `npm run build`: passed
- `npm run typecheck`: passed
- Local production preview: passed at `http://127.0.0.1:3083`
- Browser evidence: passed via host Chrome CDP screenshots after OpenClaw browser direct localhost navigation was blocked by browser policy
- Visual QA: passed after fixes below

## Evidence captured

Desktop and mobile screenshots captured for home, menu, about, and contact:

- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-home-mobile-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-menu-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-menu-mobile-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-about-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-about-mobile-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-contact-desktop-2026-05-04.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/qa-round-3-contact-mobile-2026-05-04.png`

Route/browser evidence packet:

- `restaurant-website-system/sites/strawberry-moon/scrapes/qa-round-3-browser-checks-2026-05-04.json`

Mission Control local payloads:

- `restaurant-website-system/sites/strawberry-moon/mc-qa-round-3-writeback-2026-05-04.json`
- `restaurant-website-system/sites/strawberry-moon/mc-build-writeback-qa-round-3-2026-05-04.json`

## Required artifacts checked

- `pitch-doc.md`: present and specific to Strawberry Moon's preserve-stack owner story
- `battle-cards.md`: present with owner objections, demo path, proof, and risks
- `improvements.md`: top three improvements named and implemented
- `ai-concierge.md` and `ai-concierge-transcript.md`: present
- `/api/concierge`: returns a truth-safe unsupported-intent handoff for reservation requests
- `scrapes/google-reviews-highest-30.json`: present as review proof
- `audit.md` and `source.md`: present as factual source basis
- `checklist.md` and `checklist.json`: updated to advance from QA3 to packaging

## Findings and fixes

1. Initial UA-only mobile screenshots falsely appeared horizontally clipped. I regenerated screenshot evidence through Chrome CDP device metrics; final route metrics are `documentScrollWidth == viewportWidth` on desktop and mobile.
2. The fixed mobile Call/Directions rail was useful on the homepage but covered first-screen body content on menu/about/contact. I limited it to the homepage and tightened its height.
3. Contact eyebrow copy read like internal notes. I changed it from `(call, directions, live music)` to `Call, directions, and live music`.
4. Contact CTAs were awkward. I changed them to `Visit current site`, `See events page`, and `Book an event`.
5. The menu page repeated `Martinis` as page heading and first section heading. I changed the page display heading to `Martinis & more`.

## Final visual QA

- No blocking desktop or mobile clipping found
- No horizontal overflow found in final CDP metrics
- No placeholder/internal-note copy remains in customer-facing contact hero/CTA labels
- Sticky mobile CTA no longer covers menu/about/contact content
- Home mobile CTA remains clear and conversion-oriented
- Non-blocking notes: mobile nav wraps `events` to a second line at 390px; compact fact cards wrap but remain legible

## Route and conversion checks

- Internal routes returned 200: `/`, `/menu`, `/about`, `/contact`
- Concierge API returned 200 and refused unsupported reservation promises with call/official-site handoff
- Conversion handoffs present: `tel:+18478655151`, `mailto:thomasmalik830@gmail.com`, Google Maps directions, official site, events page, and official Book an Event page
- No invented online ordering, reservations, table holds, fake prices, fake awards, or fake review counts found

## Verdict

Canonical QA Round 3 is complete locally and may advance to `packaging`.

- Build: pass
- Typecheck: pass
- Desktop/mobile screenshots: pass
- Final visual QA: pass
- Pitch/battle-card/top-three/concierge evidence: pass
- MC remote sync: blocked by unavailable auth; local payloads created

`ready_to_pitch` remains `false`; `anthropic_key_status` and `human_review_status` both remain `pending_founder`.
