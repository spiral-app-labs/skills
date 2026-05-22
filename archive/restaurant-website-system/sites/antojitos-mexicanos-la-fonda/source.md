# Antojitos Mexicanos La Fonda — build provenance

- **Lead ID:** `92b49f80-4193-4c76-ba72-7a03493fd707`
- **Mission Control root task:** `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc`
- **Selected template:** `pepper-01`
- **Build stage:** `template_route_fork_build`
- **Fork date:** 2026-05-04

## Why `pepper-01`

Antojitos Mexicanos La Fonda is a casual, takeout-forward Mexican restaurant with strong Google/public-directory proof and no verified owned site. The `pepper-01` template is the right structural base because it is light, loud, order-primary, mobile-simple, and built around menu cards, saturated proof blocks, and persistent CTAs.

This route is intentionally *not* a reservation-led, fine-dining, cocktail, or editorial archetype. The conversion problem is practical: make phone, hours, directions, menu highlights, review proof, and the Veracruz-specific story easier to trust than the current scattered Google/Restaurantji/Restaurant Guru path.

## Evidence used

- Google Maps browser evidence showed:
  - `Antojitos Mexicanos La Fonda`
  - `4.5`
  - `148 reviews`
  - `35 Berkshire Dr Unit 10, Crystal Lake, IL 60014`
  - `(815) 526-3633`
  - `Add website`
- Google Reviews were opened in-browser, sorted by `Highest rating`, and 30 written reviews were captured.
- Public-source evidence from Restaurantji and Restaurant Guru was used for menu highlights and hours corroboration.

## Content constraints

- No fake official ordering provider was added.
- No fake first-party menu/pricing was invented.
- No fake email address is displayed.
- Dine-in is not overpromised; public evidence is mixed and should be verified with the restaurant.
- Menu language is based on captured evidence: tacos, empanadas, sope Veracruzano, garnachas, flautas, huaraches, burritos, atole, mole, churros, and Restaurantji favorites.

## Structural adaptations from `pepper-01`

- Kept the bright confetti hero, card-first menu rhythm, candy-color deal grid, proof band, and saturated footer.
- Replaced image-dependent product cards with text badges because no owned professional food photography was verified for safe reuse.
- Replaced generic order/photo CTA language with phone, directions, Google profile, Restaurantji, and truth-safe conversion notes.
- Added live open-status and keyless Google Map components from the internal casual-template adaptation pattern.

## Mission Control sync state

Local evidence and build artifacts are ready to mirror, but the runtime received `401 Unauthorized` from the Mission Control build writeback endpoint. Retry when valid `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` auth is available, using:

- `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY`
- `x-agency-runtime: openclaw`
- `Content-Type: application/json`
