# Strawberry Moon concierge evidence

Date: 2026-05-04
Gate: `ai_concierge_added`
Site: `restaurant-website-system/sites/strawberry-moon`

## What was added

- Deterministic local KB: `lib/concierge-kb.ts`
- Truth-safe API route: `app/api/concierge/route.ts`
- UI entry point on the contact page: `components/TruthfulConcierge.tsx`
- Contact page placement: `app/contact/page.tsx`

## Verified facts the concierge may use

- Strawberry Moon is at `204 S Main St, Wauconda, IL 60084`.
- Phone: `847-865-5151`.
- Official site: `https://strawberrymoonmartinisandmore.weebly.com/`.
- Events page: `https://strawberrymoonmartinisandmore.weebly.com/events.html`.
- Official site says Strawberry Moon is open `Tuesday - Saturday 4 pm`.
- Seating policy on the official site is `first-come, first-served`.
- Official site says guests will find `martinis, wine and more`, `delicious nibbles`, `decadent desserts`, and `live music`.
- Official site says live music ranges from `R&B to classic Rock & Roll`.
- Captured events evidence confirms Thursday live music `6:30-9:30 pm` and Friday/Saturday live music `7-10 pm`.
- Review-backed themes repeatedly captured in `scrapes/google-reviews-highest-30.json`:
  - Tuesday martini flights
  - Strawberry Moon martini
  - dirty martinis
  - Stormy Night martini
  - wine and cheese fondue
  - pretzel nuggets
  - knowledgeable bartenders and Tom hospitality
  - two levels with a quieter upstairs
  - cozy, intimate, date-night-friendly atmosphere

## Guardrails

- No reservation, booking, or table-hold promises.
- No online-ordering, delivery, or takeout claims.
- No allergy, dietary, or medical guidance.
- No private-event promises beyond public facts already captured.
- No invented prices, specials, same-day availability, or closing times.
- For uncertain or current questions, hand off to phone or the official site/events page.

## Source basis

- `source.md`
- `audit.md`
- `scrapes/current-site-home-text.txt`
- `scrapes/current-site-events-text.txt`
- `scrapes/google-reviews-highest-30.json`
