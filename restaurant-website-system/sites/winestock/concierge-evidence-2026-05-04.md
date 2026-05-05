# Winestock Market & Lounge — Concierge Evidence

- Date: 2026-05-04
- Updated: 2026-05-05T02:35:20Z
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Template: `bramble-01` / Bramble
- Local stage after this pass: `pitch`

## What was added

A truthful, deterministic Winestock concierge was added without any external model dependency. It renders safely in preview, answers from the evidence packet only, and routes time-sensitive or unsupported asks to verified public handoffs.

## Grounding sources

- Current-site scrape confirms address, wine/spirit market positioning, small plates, flatbreads, sandwiches, charcuterie, and cheese boards.
- Google Reviews Highest packet confirms 4.9 / 52 review snapshot, live music, friendly staff/owner, wine/craft-beer selection, charcuterie/cheese boards, and relaxed local-room feel.
- Existing build artifacts provide verified phone, email, Facebook, Google directions, and safe contact paths.

## Guardrails

The concierge refuses or safely hands off reservations, table holds, ordering/delivery, allergies/medical guidance, private events/catering/buyouts, current prices/specials, and live availability. It does not invent provider flows or operational promises.

## Verification

- `npm run typecheck` passed.
- `npm run build` passed and includes dynamic route `/api/concierge`.
- API smoke tested five prompts, including reservation and gluten/allergy-style unsupported requests.
- Browser evidence captured from local production server at `http://127.0.0.1:3095`.
- Mobile concierge QA at 390px and 320px: acceptable with caveats; no fatal overflow, clipping, fake-form, or broken concierge blockers.
- Link check passed with no bad anchors and verified public handoffs present.

## Evidence

- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/capture-manifest.json`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-desktop-full.png`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-320-full.png`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/contact-mobile-full.png`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-desktop-text.txt`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/home-mobile-320-text.txt`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/contact-mobile-text.txt`
- `restaurant-website-system/sites/winestock/evidence/concierge-browser-2026-05-04/link-check.txt`
- `restaurant-website-system/sites/winestock/evidence-concierge-api-smoke-2026-05-04.jsonl`
- `restaurant-website-system/sites/winestock/lib/concierge-kb.ts`
- `restaurant-website-system/sites/winestock/app/api/concierge/route.ts`
- `restaurant-website-system/sites/winestock/components/TruthfulConcierge.tsx`
- `restaurant-website-system/sites/winestock/app/page.tsx`
- `restaurant-website-system/sites/winestock/ai-concierge.md`
- `restaurant-website-system/sites/winestock/ai-concierge-transcript.md`

