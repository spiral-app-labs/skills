# Main Street Tacos — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `6eb6cf29-eaf5-4751-8aab-3dc5f827e40e`
- Lead ID: `51459758-7f1c-4137-a2c8-bb95386e2582`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; current-site audit has Google/search verification, desktop/mobile directory screenshots, DOM/text snapshots, and candidate/generated-site evidence.

## Browser availability

OpenClaw managed Chrome is available on this host as of this run. The previous `No supported browser found` blocker is stale for local evidence capture.

## Google / first-party-site verification

Captured evidence:

- Google desktop/mobile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Menu World candidate/generated page: `screenshots/menu-world-desktop-2026-05-05.png`, `scrapes/menu-world-desktop-2026-05-05.txt`
- Food96 candidate domain failure: `screenshots/food96-desktop-2026-05-05.png`, `scrapes/food96-desktop-2026-05-05.txt`

Google search shows Main Street Tacos at 4.4 from 572 Google reviews, `327 N Main St, Wauconda, IL 60084`, Mexican restaurant, phone `(847) 526-8586`, menu highlights, call/directions actions, and popular items such as al pastor, steak, burritos, fish tacos, chorizo chimichanga, tamale, nachos, tacos and cebollitas, and sopes.

Google/Yelp/Restaurant Guru surface candidate website-like URLs (`main-street-tacos.menu-world.com` and `MainStreetTacos.food96.com`), but these do not look like a clean owner-controlled primary domain. The Menu World page is a generated restaurant profile with generic copy and a misleading `GET A RESERVATION NOW` / `Book a table` pattern for a counter-service taco shop. The Food96 URL returned a Cloudflare 502 Bad Gateway in the browser capture. This supports the original sell story: discovery is fragmented across generated/directory pages rather than a reliable owned restaurant website.

## Public proof captures

- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`
- Restaurantji Wauconda city-listing proof: `screenshots/restaurantji-city-desktop-2026-05-05.png`, `scrapes/restaurantji-city-desktop-2026-05-05.txt`

Restaurantji shows 4.8 from 174 ratings, Mexican/Vegetarian category, 10AM–10PM daily hours, delivery/takeout, kids' menu, address, phone, and favorites such as chicken tacos authentic style, tacos and cebollitas, grande burrito, super nachos, steak tacos, taco dinner, chips salsa, skirt steak, fish tacos, and any burrito. Restaurant Guru shows #5 of 49 restaurants in Wauconda, 86 photos, 4.4 Google-derived rating, delivery, outdoor seating, takeaway, credit cards, parking, Instagram, and the `MainStreetTacos.food96.com` candidate site.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient to move Main Street Tacos to the `reviews` gate. Mission Control still needs agency API writeback before later gates start; this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL, so the stage-transition payload is prepared but not submitted.
