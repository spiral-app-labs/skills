# Winestock Market & Lounge — Truthful Concierge

- Gate: `concierge`
- Lead ID: `7f1432ae-2553-442c-80ff-df58acb162ef`
- MC parent task: `35f58383-0074-4a64-85cc-46ea2cfcd6bb`
- Template: `bramble-01` / Bramble

## Scope

The Winestock concierge is deterministic and local. It does not require external model secrets to render safely in a preview. It answers only from verified evidence already attached to the checklist:

- Current-site scrape: `restaurant-website-system/sites/winestock/scrapes/current-site-text.txt`
- Google Reviews Highest packet: `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.json`
- Google Reviews Highest markdown: `restaurant-website-system/sites/winestock/scrapes/google-highest-30-2026-05-04.md`
- Routing rationale: `restaurant-website-system/sites/winestock/routing.md`
- Content/build artifacts: `restaurant-website-system/sites/winestock/content.ts`

## Verified answer areas

- Hours snapshot captured from Google Maps during evidence capture.
- Address: 136 Cass St, Woodstock, IL 60098.
- Public handoffs: `info@shopwinestock.com`, `(815) 308-5610`, Facebook `/Winestockmarket`, Google directions.
- Wine market positioning: hand-selected artisanal wines and spirits from around the globe.
- Food categories: small plates, flatbreads, sandwiches, charcuterie, cheese boards.
- Review-backed themes: helpful owner/staff, live music, craft beer, relaxed local-room feel, bottle pricing, charcuterie/cheese plates.

## Guardrails

The concierge refuses or safely hands off requests for:

- Reservations, table holds, booking promises, or same-night availability.
- Online ordering, delivery, pickup, or fake provider flows.
- Allergies, medical/dietary guarantees, or safety-critical food claims.
- Private events, catering, buyouts, or large-group promises not verified in public evidence.
- Current prices, specials, discounts, or live availability.

For these cases, it routes to email, phone, Facebook, or directions instead of inventing.

## Implementation

- KB/resolver: `restaurant-website-system/sites/winestock/lib/concierge-kb.ts`
- API route: `restaurant-website-system/sites/winestock/app/api/concierge/route.ts`
- UI component: `restaurant-website-system/sites/winestock/components/TruthfulConcierge.tsx`
- Homepage entry: `restaurant-website-system/sites/winestock/app/page.tsx`
