# The Chef Grill — Delivery Package

- Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
- MC parent task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- Site slug: `the-chef-grill`
- Template route: `plate-01`
- Package prepared: `2026-05-08T14:30:00Z`
- Delivery status: **blocked — not delivered**

## Preview

- Local validated preview: `http://127.0.0.1:3057`
- Public preview URL: **pending** — no client-shareable URL has been verified yet.
- PR: **pending** — prepare from a clean branch so unrelated agency work is not mixed into this site.

## Sell-ready assets

- Pitch doc: `restaurant-website-system/sites/the-chef-grill/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/the-chef-grill/battle-cards.md`
- Checklist markdown: `restaurant-website-system/sites/the-chef-grill/checklist.md`
- Checklist JSON: `restaurant-website-system/sites/the-chef-grill/checklist.json`
- QA round 1 report: `restaurant-website-system/sites/the-chef-grill/qa/round-1/qa-round-1-report-2026-05-08.md`
- QA round 2 report: `restaurant-website-system/sites/the-chef-grill/qa/round-2/qa-round-2-report-2026-05-08.md`
- QA round 3 report: `restaurant-website-system/sites/the-chef-grill/qa/round-3/qa-round-3-report-2026-05-08.md`
- QA3 browser checks: `restaurant-website-system/sites/the-chef-grill/qa/round-3/qa-round-3-live-checks-2026-05-08.json`
- QA3 source scan: `restaurant-website-system/sites/the-chef-grill/qa/round-3/qa-round-3-source-scan-2026-05-08.txt`
- QA3 visual review: `restaurant-website-system/sites/the-chef-grill/qa/round-3/qa-round-3-vision-review-2026-05-08.txt`
- Concierge spec/evidence: `restaurant-website-system/sites/the-chef-grill/ai-concierge.md`, `restaurant-website-system/sites/the-chef-grill/ai-concierge-transcript.md`

## QA3 result

Pass locally after final fixes.

- `npm run build`: passed.
- `npm run typecheck`: passed.
- Customer-facing source scan: passed; no internal/source/placeholder phrasing found in `app`, `components`, or `content.example.ts`.
- Browser checks: passed for identity, proof, order/menu/call/directions links, contact form field order, `/menu` shortcut behavior, no horizontal overflow, mobile CTA visibility rules, and conservative concierge behavior.
- Visual QA: passed after mobile image and CTA fixes; no CTA/concierge overlap, no orphan mobile menu photo, no blank image band, and no obvious visual defect Ethan would need to explain away.

## Demo path for Ethan

1. Open the public preview once verified.
2. Start on the hero: halal Turkish/Mediterranean grill, Elk Grove Village, 4.7-star / 807-review proof, and immediate order/menu/call/directions actions.
3. Scroll into the menu: mixed grills, Iskender, Beyti, Adana, pide, lahmacun, manti, soups, meze, seafood, salads, desserts, and drinks.
4. Show the mobile contact path: phone, email, address, directions, and message form without CTA overlap.
5. Mention the final launch caveats as owner-confirmation items, not as site blockers.

## Final blockers before delivery

1. **Mission Control protected writeback** — QA3 payload is ready, but the protected route returned `401 Unauthorized` with the currently available fallback key. Required runtime auth (`AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` per Mission Control auth code) is not available in this OpenClaw runtime. Prepared payload: `restaurant-website-system/sites/the-chef-grill/mc-qa-round-3-payload-2026-05-08.json`.
2. **Public preview URL** — a client-shareable preview URL still needs to be created and verified. Local preview is not enough for delivery.
3. **Owner/founder verification** — before public launch, confirm day-by-day/holiday hours, catering/private-event capacity, preferred ordering provider, and owner/founder story/spelling if the owner wants that included.

## Delivery rule

Do not mark delivered until the public preview URL and all evidence above are mirrored into Mission Control through the official agency API. No raw Supabase write was used.
