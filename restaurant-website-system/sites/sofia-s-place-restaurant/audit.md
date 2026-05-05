# Sofia's Place Restaurant — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `sofia-s-place-restaurant`
- MC parent task: `e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc`
- Lead ID: `ad091f40-f7c7-48bb-bd00-7c6b9c7b7dec`
- Restaurant: Sofia's Place Restaurant, Island Lake, IL
- Official/order domain: `http://www.sofiasplacerestaurantil.com/`
- Address found: `640 E State Rd, Island Lake, IL` via Restaurantji; Restaurant Guru result appears to reference a conflicting `398 W Liberty St, Wauconda` address and must be verified before use.
- Phone found: `(847) 526-8478`

## Source status

Sofia's has an official/order domain, but the current crawlable page is not a usable restaurant website. It resolves to a FromTheRestaurant setup page that says online ordering setup is still in progress and asks the restaurant to call a provider to finish setup.

The pitch hook is therefore: **Sofia's has a real local Mexican restaurant profile, but its official/order domain currently looks like an unfinished ordering setup page instead of a restaurant website.**

## Public proof captured

### Official/order domain

- URL: `http://www.sofiasplacerestaurantil.com/`
- Title: `FromTheRestaurant | Find Restaurants Near You`.
- Extracted copy says:
  - `Download the app to find restaurants near you`
  - `Online ordering setup in progress`
  - `Finish setting up your online ordering`
  - `Your restaurant is almost ready to start taking direct online orders.`
  - `Call our team to confirm your restaurant details, complete the final setup, and prepare your store to go live.`
  - CTA phone: `866-883-6967`
- This is a hard owned-path failure for a guest looking for menu, hours, address, phone, or ordering.

### Restaurantji city listing

- URL: `https://www.restaurantji.com/il/island-lake/`
- Sofia's appears as `/il/island-lake/sofias-mexican-restaurant-/`.
- Category: Mexican.
- Address snippet: `640 E State Rd, Island Lake`.
- Rating snippet: `4.4`, `Superb151 Reviews`.
- Favorites surfaced: Taco Dinner, Homemade Flan, Burritos, Salsa Guacamole and Pico de Gallo, Chips and Salsa While You Wait, Shrimp & Chicken Fajitas, Very Large Steak Burrito, Three Enchiladas Dinner, Guacamole with Chips, Quesadilla Dinner.

### Restaurantji direct profile

- URL: `https://www.restaurantji.com/il/island-lake/sofias-mexican-restaurant-/`
- Rating evidence: `4.4` from `151 ratings`.
- Address: `640 E State Rd, Island Lake`.
- Phone: `(847) 526-8478`.
- Favorites surfaced: Salsa Guacamole and Pico de Gallo, Chips and Salsa While You Wait, Shrimp & Chicken Fajitas, Very Large Steak Burrito, Three Enchiladas Dinner, Guacamole with Chips, Quesadilla Dinner, Chiles Rellenos, Homemade Flan, Three Flautas.
- Hours: Monday closed; Tuesday–Saturday 11AM–9PM; Sunday closed.

### Restaurant Guru

- URL: `https://restaurantguru.com/Sofias-Place-Island-Lake`
- Shows 72 photos and Google-derived rating `4.5`.
- Summary mentions Mexican tacos, guacamole, Mexican rice, flans, margaritas, beer, horchata, delivery, pleasant staff, cool service, reasonable prices, and homey atmosphere.
- Features: delivery, outdoor seating, credit cards accepted, takeaway, booking, wheelchair accessible, TV.
- **Important conflict:** this profile returned address `398 W Liberty St, Wauconda, IL`, which conflicts with Restaurantji/MC city context. Do not use that address in build copy until Google/Maps/browser verification resolves it.

## Audit findings

1. **Owned-path failure:** official/order domain is a FromTheRestaurant setup page, not a usable restaurant homepage or live ordering path.
2. **Conversion gap:** guests cannot get menu, hours, address, phone, order status, or restaurant story from the owned domain.
3. **Menu proof exists off-site:** fajitas, steak burrito, enchiladas, guacamole/pico, chiles rellenos, flautas, tacos, flan, margaritas, beer, and horchata are real menu signals carried by directories.
4. **Data conflict risk:** address/city conflict between Restaurantji and Restaurant Guru must be resolved before build/delivery.
5. **Route:** `bamzi-01` hue-swap per qualification, with guardrails. Core archetype mapping: **Cuisine** for warm casual Mexican clarity; use richer visual energy only if photos support it. Do not let generic dark/trendy styling override the neighborhood Mexican restaurant reality.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshots of the official FromTheRestaurant setup page
- browser DOM/text snapshot for the official/order domain
- Google/Maps profile screenshot to resolve address/city and listed website
- screenshots of Restaurantji/Restaurant Guru proof pages
- Highest-filter 30 written Google review packet with evidence/screenshots

## Current recommendation

Proceed as a strong bad-owned-path lead after browser verification. The sell story is concrete: Sofia's should not have an official domain that asks the restaurant to finish setup. A first-party site should lead with verified address, hours, phone, Mexican menu highlights, delivery/takeout/order handoff, and trust proof without relying on a broken ordering setup page.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured official/order-domain evidence:

- Base domain `http://www.sofiasplacerestaurantil.com/` desktop/mobile screenshots and DOM/text snapshots. It still shows the FromTheRestaurant setup page: `Online ordering setup in progress`, `Finish setting up your online ordering`, and a provider setup phone number.
- Google-result path `https://sofiasplacerestaurantil.com/sofias-place-restaurant` failed in managed Chrome with `ERR_SSL_PROTOCOL_ERROR`; a non-browser check also failed SSL for HTTPS and returned 404 for the equivalent www HTTP path.

Captured Google/address evidence:

- Google desktop/mobile screenshots and text. Google shows a Sofia's Place Restaurant profile at 4.5 from 333 Google reviews, phone `(847) 526-8478`, menu path `sofiasplaceislandlake.com`, and address `398 W Liberty St, Wauconda, IL 60084`.
- Web results still show Island Lake pages/snippets for `640 E State Rd, Island Lake, IL 60042`, including Yelp/Restaurantji and the FromTheRestaurant location result. Marketplace search shows DoorDash/Grubhub Wauconda listings plus a Facebook result saying Sofia's Place moved to Wauconda.

Captured public proof:

- Restaurantji desktop/mobile screenshot/text showing 4.4 from 151 ratings, Mexican category, `640 E State Rd, Island Lake`, phone `(847) 526-8478`, Tue–Sat 11AM–9PM, Sunday/Monday closed, delivery/take-out, outdoor seating, great cocktails, kids' menu, and favorites like fajitas, steak burrito, enchiladas, guacamole/pico, chiles rellenos, homemade flan, and flautas.
- Restaurant Guru browser capture returned `502 Bad Gateway`, so treat it as unavailable fresh evidence during this pass.

Updated audit interpretation: the owned/order path failure is confirmed, but the address/current-location conflict is now stronger than the initial audit suggested. Do not build around the Island Lake address until Mission Control/founder confirms whether Sofia's moved to Wauconda and which order/menu path is current. The sell story remains strong if confirmed: the visible official/order domain is broken or incomplete while search and marketplaces carry the guest-facing truth.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback and address/current-location confirmation before build/fork copy.
