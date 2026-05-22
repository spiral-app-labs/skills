# La Hacienda Mexican Restaurant — AI Concierge Gate

- Date: 2026-05-05
- Stage: concierge
- Template: bamzi-01
- Local production preview checked at: http://127.0.0.1:3097

## What was added

- Mounted the `Ask La Hacienda` concierge globally in the app layout.
- Kept the mobile Call/Menu/Order/Map strip available without covering the concierge trigger.
- Updated the concierge prompt chips to diner-useful questions: ordering, hours, pickup.
- Rebuilt `/api/chat` as a deterministic, source-safe restaurant KB router instead of a generic model call.

## Truth-safe knowledge base

The concierge can answer only from known La Hacienda facts:

- Restaurant name: La Hacienda Mexican Restaurant
- Address: 411 E Main St, East Dundee, IL 60118
- Phone: (847) 426-0506
- Hours: Sunday 10:00 am to 9:00 pm; Monday through Thursday 10:00 am to 9:00 pm; Friday and Saturday 10:00 am to 10:00 pm
- Menu/order handoffs:
  - Full menu link: https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view
  - Online order link: https://www.restaurantji.com/order.php?id=3429883
  - Directions link: Google Maps directions to 411 E Main St
- Menu favorites used in suggestions: carne asada tacos, carnitas tacos, al pastor tacos, regular burritos, Cubana torta, chimichangas, fajitas, horchata

## Safety handoffs

- Allergy, gluten, vegetarian/vegan, ingredient, price-sensitive, and time-sensitive pickup questions route to calling the restaurant.
- The concierge does not invent catering, reservations, delivery providers, alcohol, specials beyond the captured menu set, or owner/founder claims.
- The composer disclaimer says: “AI concierge, please call the restaurant for allergies, prices, or time-sensitive pickup details.”

## Evidence

- UI screenshots:
  - restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/concierge-open-mobile-2026-05-05.png
  - restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/concierge-open-desktop-2026-05-05.png
- API transcript:
  - restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/concierge-api-transcript-2026-05-05.json

## Verification

- `npm run build --prefix restaurant-website-system/sites/la-hacienda-mexican-restaurant` passed.
- API transcript covers menu recommendation, hours, pickup, allergy handoff, and location.
- Visual QA of mobile/desktop open-concierge screenshots found the panel readable and usable with no true blockers.
