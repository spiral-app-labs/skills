# Sofia's Place Restaurant — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc`
- Lead ID: `ad091f40-f7c7-48bb-bd00-7c6b9c7b7dec`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; the official/order-domain failure and address conflict are captured with browser evidence.

## Browser availability

OpenClaw managed Chrome is available on this host. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official / order-domain evidence

Captured evidence:

- Base order-domain desktop/mobile screenshots and DOM/text: `screenshots/official-order-domain-desktop-2026-05-05.png`, `screenshots/official-order-domain-mobile-2026-05-05.png`, `scrapes/official-order-domain-desktop-2026-05-05.txt`, `scrapes/official-order-domain-mobile-2026-05-05.txt`
- Google-result location path HTTPS failure: `screenshots/official-order-location-desktop-2026-05-05.png`, `scrapes/official-order-location-desktop-2026-05-05.txt`
- Capture manifest: `scrapes/browser-audit-manifest-2026-05-05.json`

The base URL `http://www.sofiasplacerestaurantil.com/` loads a FromTheRestaurant page titled `FromTheRestaurant | Find Restaurants Near You`. Its visible copy says `Online ordering setup in progress`, `Finish setting up your online ordering`, `Your restaurant is almost ready to start taking direct online orders`, and asks the restaurant to call `866-883-6967` to complete setup. This remains a hard guest-facing owned-path failure.

Google exposes a deeper result at `https://sofiasplacerestaurantil.com/sofias-place-restaurant`, but managed Chrome captured `ERR_SSL_PROTOCOL_ERROR` for that HTTPS path. A non-browser check also failed SSL for HTTPS and returned 404 for the equivalent www HTTP path.

## Google / address conflict evidence

Captured evidence:

- Google desktop/mobile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Marketplace/order search screenshot/text: `screenshots/doordash-search-desktop-2026-05-05.png`, `scrapes/doordash-search-desktop-2026-05-05.txt`

Google desktop/mobile shows a Sofia's Place Restaurant business profile at 4.5 from 333 Google reviews, Mexican restaurant, phone `(847) 526-8478`, menu path `sofiasplaceislandlake.com`, and address `398 W Liberty St, Wauconda, IL 60084`. The web results still surface Yelp/Restaurantji-style Island Lake proof at `640 E State Rd, Island Lake, IL 60042`, plus a Google result for `Sofia's Place Restaurant | Online Ordering | Locations` that lists the Island Lake address. Marketplace search shows DoorDash/Grubhub Wauconda listings and a Facebook result saying Sofia's Place moved to Wauconda.

Interpretation: the prior Island Lake address cannot be used as build truth without confirmation. The current Google/marketplace reality points to Wauconda, while Restaurantji/Yelp/web snippets still preserve the Island Lake location.

## Public proof captures

- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`

Restaurantji still shows Sofia's Place Restaurant at 4.4 from 151 ratings, `640 E State Rd, Island Lake`, phone `(847) 526-8478`, Tuesday–Saturday 11AM–9PM, Sunday/Monday closed, delivery/take-out, outdoor seating, great cocktails, kids' menu, and menu proof such as fajitas, steak burrito, enchiladas, guacamole/pico, chiles rellenos, homemade flan, and flautas. Restaurant Guru returned a `502 Bad Gateway` page during browser capture, so it should not be treated as fresh evidence beyond the prior source audit.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient, but the next build/fork work should not begin until Mission Control writeback and address/current-location confirmation happen. Next canonical gate remains `reviews`, with the review packet likely needing to target the current Google profile unless Mission Control/founder confirms otherwise.
