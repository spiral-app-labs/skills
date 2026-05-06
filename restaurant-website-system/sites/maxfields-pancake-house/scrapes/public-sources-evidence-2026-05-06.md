# Maxfield's Pancake House — public source evidence

Captured: 2026-05-06 CDT via browser snapshots, screenshots, web_fetch, and web_search.

## Official domain

Sources checked:
- https://www.maxfieldschaumburg.com/
- https://maxfieldschaumburg.com/
- https://www.maxfieldschaumburg.com/menu
- https://maxfieldschaumburg.com/menu

Result: all returned Wix/Pepyaka HTTP 404 error pages with `ConnectYourDomain` evidence. Browser-rendered desktop and mobile pages show: “Looks like this domain isn't connected to a website yet.”

Artifacts:
- `scrapes/current-site-dom-snapshot.txt`
- `scrapes/current-site-fetch-evidence-2026-05-06.txt`
- `screenshots/current-site-desktop-wix-error.png`
- `screenshots/current-site-mobile-wix-error.png`

## Google Maps browser evidence

URL opened: `https://www.google.com/maps/search/?api=1&query=Maxfield%27s%20Pancake%20House%20700%20E%20Schaumburg%20Rd%20Schaumburg%20IL`

Observed in accessible browser snapshot:
- Name: Maxfield's Pancake House
- Rating: 4.5 stars
- Reviews: 983
- Price: $10–20
- Category: Breakfast restaurant
- Summary: “Homey cafe offering a wide-ranging breakfast menu, plus burgers, sandwiches & other simple bites.”
- Service attributes: Dine-in, Takeout, Delivery
- Address: 700 E Schaumburg Rd, Schaumburg, IL 60194
- Located in: Market Square Schaumburg
- Phone: (847) 781-0300
- Website: maxfieldschaumburg.com
- Menu: maxfieldschaumburg.com/menu
- Order online action visible
- Review excerpts visible:
  - “I love this place... the very best food, the best service, and great prices.”
  - “Best staff, best soup, best breakfast at an affordable price.”
  - “Exceptional service and good tasting pancakes, waffles, eggs and coffee.”
- Review topics visible: gyro, hash browns, eggs benedict, cleanliness

Screenshot:
- `screenshots/public-source-google-maps-desktop.png`

## Yelp browser evidence

URL: https://www.yelp.com/biz/maxfields-pancake-house-schaumburg-2

Observed in browser snapshot/screenshot:
- Name: Maxfields Pancake House
- Rating: 3.7 stars
- Reviews: 268
- Claimed listing
- Price/category: $, Breakfast & Brunch, American, Sandwiches
- Hours summary visible: 7:00 AM–2:00 PM, 3:30 PM–8:00 PM
- Photos: “See all 230 photos”
- Website/menu links point through Yelp redirect to `https://www.maxfieldschaumburg.com/menu`
- Popular dishes visible:
  - Original Eggs Benedict ($14.95)
  - Greek Skillet ($14.95)
  - Egg White Omelette ($15.95)
  - Scrambled Eggs
  - Chicken Noodle Soup
  - French Toast
  - The Ole Omelet
- Search snippet observed separately: established in 1998, original Maxfield’s restaurant, family-owned breakfast/lunch restaurant. Treat as useful but re-verify before final public copy.

Screenshot:
- `screenshots/public-source-yelp-desktop.png`

## Restaurantji evidence

URL: https://www.restaurantji.com/il/schaumburg/maxfields-pancake-house-/

Observed in browser/web_fetch:
- Name: Maxfield's Pancake House
- Rating: 4.7, 259 ratings
- Category: Breakfast, American, Vegetarian
- Address: 700 E Schaumburg Rd, Schaumburg
- Phone: (847) 781-0300
- Current hours summary visible: 7AM–2PM and 3:30–8PM
- Hours table:
  - Monday: 7AM–2PM
  - Tuesday: 7AM–2PM
  - Wednesday: 7AM–2PM, 3:30–8PM
  - Thursday: 7AM–2PM, 3:30–8PM
  - Friday: 7AM–2PM, 3:30–8PM
  - Saturday: 7AM–2PM, 3:30–8PM
  - Sunday: 7AM–2PM
- Customers’ favorites:
  - 2 Eggs Breakfast with Pancakes
  - Skillet with Side of Pancakes
  - Fruit and Scrambled Eggs
  - Corned Beef Hash and Eggs
  - Banana Bread French Toast
  - Chocolate Chip Pancakes
  - Original Eggs Benedict
  - Skirt Steak and Eggs
  - Corned Beef Hash Side
  - Mickey Mouse Pancakes
- Review distribution: 5-star 82%, 4-star 12%, 3-star 4%, 2-star 1%, 1-star 1%
- Subratings visible: Food 4.7, Atmosphere 4.7, Service 4.8
- Location/contact panel shows website and order online links
- More info shows take-out/delivery, vegetarian options, kids’ menu, and “doesn't accept reservations”

Screenshot:
- `screenshots/public-source-restaurantji-desktop.png`

## Chicago Northwest evidence

URL: https://www.chicagonorthwest.com/listing/maxfields-pancake-house-%26-restaurant/1613/

Observed in browser snapshot:
- Name: Maxfield's Pancake House & Restaurant
- Address: 700 E. Schaumburg Rd., Schaumburg, IL 60194
- Phone: (847) 781-0300
- Visit Website CTA present through tracking redirect
- Amenities: Breakfast, Lunch, Dinner, Take Out
- Restaurant hours listed: Sunday–Wednesday 7:00AM–3:00PM; Thursday–Saturday 7:00AM–9:00PM
- Restaurant-specific images available via Simpleview assets: skillet and exterior

Note: hours conflict with Restaurantji/Yelp; owner or Google business profile confirmation required.

## Search result / lead research evidence

Local research artifact: `/Users/ethantalreja/.openclaw/workspace/lead-research/schaumburg-restaurant-leads-2026-05-06.md`

Relevant notes:
- Top recommendation due official domain surfacing but returning Wix-style `ConnectYourDomain` 404.
- Concept: family-owned breakfast/lunch pancake house.
- Pitch angle: “Your breakfast crowd is already searching you — let’s replace the broken domain with a fast mobile site for menu, hours, reviews, catering/group breakfast, and Google conversion.”

## Blocked / not verified

- Mission Control lead/workflow existence could not be verified through MC API because `AGENCY_AUTONOMY_API_KEY` and fallback `OPENCLAW_WEBHOOK_SECRET` are missing.
- Owner name, owner email, and contact email not verified.
- Direct first-party order provider not verified; Google/Restaurantji order surfaces exist.
- Catering/events URL not verified.
- Current official hours need confirmation due source conflict.
