# Mary's Mexican Grill — Source Truth Pack

> Purpose: builder-safe factual source for the first Bamzi fork. This is prep work while Mission Control remains blocked at `reviews` because agency API auth is unavailable in this runtime. Do not mark later MC gates complete from this file alone.

## Core business facts

- Restaurant name: Mary's Mexican Grill.
- Cuisine/register: casual Mexican grill; public categories include Mexican, salad, and seafood.
- Address: 108 Cass St, Woodstock, IL 60098.
- Neighborhood/location phrase: historic Woodstock Square / downtown Woodstock.
- Public listing phone: `(815) 337-2303` / `+1 815-337-2303`.
- Phone conflict to flag: older indexed official-site copy referenced `(815) 923-5240`; Google/Restaurantji/Restaurant Guru evidence points to `(815) 337-2303`.
- Current official domain: `marysmexicangrillil.com`.
- Current site reliability state: HTTP path showed a Fox Ordering setup page during audit; HTTPS fetch failed. Official menu path discovered in search returned 404 during this pass.

## Hours evidence

Restaurantji public profile lists:

- Monday: 10AM–9PM
- Tuesday: 10AM–9PM
- Wednesday: 10AM–9PM
- Thursday: 10AM–9PM
- Friday: 10AM–9PM
- Saturday: 10AM–9PM
- Sunday: 10AM–8PM

Google browser snapshot on 2026-05-04 showed `Open · Closes 9 PM`. Use hours as public-evidence copy, but keep an owner-confirmation note before final delivery.

## Reputation / proof

- Google Maps browser evidence on 2026-05-04: 4.8 rating, 604 reviews, Reviews tab sorted by Highest rating.
- Restaurantji: 4.8 rating from 254 ratings; 88% 5-star distribution shown in fetched public profile.
- Restaurant Guru: `#1 of 16 Mexican restaurants in Woodstock`; phone `+1 815-337-2303`; menu page indicates owner-added menu one month ago but text extraction did not expose item details.
- DoorDash search result: active delivery/takeout listing at 108 Cass St.

## Review-derived guest love

Use the captured Google Highest packet and theme doc as source of record:

- `scrapes/google-reviews-highest-30.json`
- `scrapes/google-reviews-highest-30.md`
- `google-reviews-themes.md`

Main themes:

1. Woodstock Square local draw.
2. Friendly, attentive service; named staff mentions include Martha and Laura.
3. Authentic Mexican flavors, especially tacos, sauces, chips, salsa, mole, tamales, shrimp, and burritos.
4. Modest prices, good portions, quick/fresh food, clean and welcoming room.
5. Repeat-visit / go-to comfort.

## Menu and dish hooks

High-confidence dishes/items surfaced by audit, Google reviews, Restaurantji, Restaurant Guru, and DoorDash snippets:

- Tacos al pastor / pastor tacos
- Steak tacos / tacos de asada
- Carnitas taco
- Pork tacos
- Torta Mary
- Steak torta
- Pork burrito
- Burritos suizos
- Chimichangas / pastor chimichanga / chicken chimichanga
- Taco dinner regular
- Tamales / tamales by the dozen / $2.50 tamales review mention
- Mole / mole enchiladas
- Enchiladas verdes
- Enchiladas suizas
- Chicken fajita
- Beef burrito
- Grilled shrimp
- Tampiqueña
- Camarones a La Mexicana
- Shrimp empanadas
- Ceviche
- Homemade guacamole
- Fresh chips and salsa / red salsa / salsa rojo
- Horchata
- Margaritas / micheladas

Do not invent prices except where quoted as review language (`$2.50 tamales`, `Taco Tuesday is $2 tacos`) unless current menu evidence confirms the price.

## Conversion paths for preview

Use as preview-safe CTAs with clear confirmation notes:

- Primary: View Menu.
- Secondary: Order Online / Delivery & Pickup.
- Utility: Call, Directions, Hours.
- Mobile sticky actions: Menu, Order, Call, Directions.

Do not hard-code a final direct order URL until the live official order path is confirmed. If using DoorDash/third-party links in preview, label them truthfully as third-party/public listing paths.

## Copy register

Correct register: casual, warm, direct, food-specific, neighborhood-local, order-ready.

Avoid:

- Fine-dining or reservation-led language.
- Unverified owner/family/chef story.
- Generic “authentic Mexican” claims unless surrounded by dish-specific proof.
- Fake awards, fake review excerpts, fake hours, fake phone, fake pricing, fake direct online-order path.
- Production use of aggregator/public photos unless rights are confirmed.

## First-screen content lock

Suggested hero facts:

- Eyebrow: Woodstock Square Mexican Grill.
- Headline: `Mary's Mexican Grill` or `Tacos, tamales, and fresh salsa on Woodstock Square`.
- Subcopy: `A casual Mexican grill at 108 Cass St with 4.8-star public proof, friendly service, and menu favorites guests come back for.`
- Proof chip: `4.8 Google rating · 604 reviews`.
- CTAs: `View Menu`, `Order Online`, `Get Directions`.

## Evidence files

- `audit.md`
- `routing.md`
- `google-reviews-themes.md`
- `scrapes/google-reviews-highest-30.json`
- `scrapes/google-reviews-highest-30.md`
- `screenshots/google-reviews-highest-2026-05-04.png`
- `scrapes/current-site-http.html`
- `scrapes/current-site-https-error.txt`
- `scrapes/restaurantji.html`
