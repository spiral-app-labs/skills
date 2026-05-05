# Snuggery River Roadhouse — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `snuggery-river-roadhouse`
- MC parent task: `28641d8b-ed9c-4fc3-9326-9c3436bbdc31`
- Lead ID: `713dec87-03c2-4782-ad16-93d72368d130`
- Restaurant/bar: Snuggery River Roadhouse, McHenry, IL
- Official website surfaced by directory: `https://www.snuggerymchenry.com/`
- Address found: `801 N River Rd, McHenry, IL 60051`
- Phone found: `(815) 578-9600`

## Source status

MC did not have an official website URL, but a directory source surfaced `https://www.snuggerymchenry.com/`. OpenClaw web fetch to both `snuggerymchenry.com` and `www.snuggerymchenry.com` hit a `403 / Just a moment...` checkpoint, so the official site needs real-browser verification before any outreach or build claim.

The pitch hook is therefore conditional: **Snuggery has a strong family-owned waterfront roadhouse identity and dock/patio differentiator, but the owned-site path is currently not verifiable in this environment and public discovery is being carried heavily by directories.**

## Public proof captured

### Restaurantji city listing

- URL: `https://www.restaurantji.com/il/mchenry/`
- Snuggery appears as `The Snuggery in McHenry` with slug `/il/mchenry/the-snuggery-in-mchenry-/`.
- Category: Pizza.
- Rating snippet: `4`, `Good283 Reviews`.
- Favorites surfaced in the city listing: Beer Nuggets, Ribs, Hot Fudge Sundae, Italian Beef, The Pepperoni, French Fries, Nachos Grande, Chopped Salad, Snuggery Nachos, Chicken Fingers.

### Restaurantji direct profile

- URL: `https://www.restaurantji.com/il/mchenry/the-snuggery-in-mchenry-/`
- Title: `Snuggery River Roadhouse McHenry, McHenry - Menu, Reviews (283), Photos (113)`.
- Categories: Pizza, American, Sports Bars.
- Rating evidence: `4` from `283 ratings`.
- Address: `801 N River Rd, McHenry`.
- Phone: `(815) 578-9600`.
- Favorites surfaced: Country Fried Buttermilk Chicken Sandwich, Cheeseburger with Fries or Potato Chips, Cheese Sausage and Green Pepper Pizza, Fried Haddock and Fries w Coleslaw, Broasted Chicken to-Go Full Meal, Fresh Wisconsin Cheese Curds, Moretti’s Cheeseburger, Morettis Special Pizza, Mac 'N' Cheese Pizza, Pulled Pork Dinner.
- Hours on Restaurantji: Monday/Tuesday closed; Wednesday/Thursday 3–10PM; Friday 3PM–12AM; Saturday 11AM–12AM; Sunday 11AM–10PM.

### Roost / directory profile

- URL: `https://www.roostcafeandbistro.com/snuggery-river-roadhouse-mchenry-60051/`
- Describes Snuggery as an open-year-round, family-owned waterfront restaurant, patio, and private party house for McHenry locals and visitors.
- Mentions freshly made favorites: broasted chicken, fish n chips, Prime NY strip steak, burgers, sandwiches, salads, Beer Nuggets, hand-breaded Wisconsin Cheese Curds, Nachos, Wings in 6 flavors, and Moretti’s award-winning Chicago-style pizza.
- Mentions the Guest House next door as a separate waterfront private-party house.
- Lists pickup orders and delivery through major delivery apps.
- Describes a casual haunt with TVs tuned to sports, American grub, and a big waterfront patio.
- Rating evidence: `4.1` from `939 reviews`.
- Lists dine-in, takeout, delivery, address, phone, official website, Facebook profile, and hours.
- Review excerpts praise patio river views, chain-of-lakes atmosphere, music at a comfortable level, outdoor area, wings, cheese curds, food/drinks, and happy hour, while some excerpts flag service/takeout consistency concerns.

### Official website fetch attempt

- `https://snuggerymchenry.com/` returned a 403 checkpoint.
- `https://www.snuggerymchenry.com/` returned a 403 checkpoint.
- This may be normal bot protection rather than a broken public site; it must be verified in a real browser.

## Audit findings

1. **Verification gap:** MC had no official URL, and the surfaced official site cannot be evaluated via current web fetch because of a 403 checkpoint. Browser verification is required before calling this a bad-site lead.
2. **Waterfront identity is strong:** family-owned, waterfront patio, river/chain-of-lakes views, dock/dine positioning, private party house, and sports-bar/roadhouse energy are all meaningful differentiators.
3. **Conversion opportunity:** a strong site should make patio/waterfront, call/directions, hours, pickup/delivery, private parties, sports, and signature menu items easy to find.
4. **Risk:** reviews and sources show mixed service/takeout signals and inconsistent hours across sources. Do not overclaim; verify official hours and current operations before build/delivery.
5. **Route:** `bramble-01`. Core archetype mapping: **Bramble** — tavern/roadhouse/sports-bar personality with waterfront warmth. Keep it family roadhouse/patio-forward, not upscale cocktail lounge.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- real-browser verification of `https://www.snuggerymchenry.com/`
- desktop/mobile screenshots of the official site if reachable
- screenshots of Restaurantji/Roost proof pages
- Google/Maps profile screenshot, official website field, and later Highest-filter 30 written Google review packet
- browser DOM/text snapshot for the official site and strongest public profiles

## Current recommendation

Treat Snuggery as a conditional roadhouse/waterfront lead, not yet a confirmed bad-site build. If browser verification shows the official site is weak, outdated, or inaccessible to normal guests, the sell story is excellent: a family-owned Fox River roadhouse with patio/dock/private-party energy should have a site that immediately sells the waterfront experience, Moretti’s pizza, broasted chicken, drinks, hours, pickup/delivery, and private events.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured official-site evidence:

- Official homepage desktop/mobile screenshots and DOM/text snapshots.
- Non-www redirect proof showing `https://snuggerymchenry.com/` redirects to the www homepage in browser.
- Browser page title: `Home - Snuggery River Roadhouse`.
- Homepage proof: family-owned year-round roadhouse on the Fox River / Chain O' Lakes, comfort food/cold drinks/good times by the water, graduation-party CTA, pressure-fried crispy chicken, Wisconsin cheese curds, wings, burgers, Moretti's award-winning Chicago-style pizza, indoor/outdoor seating, and riverside patio.
- Crawler/status checks still returned HTTP 403 for the official domain, so the technical-access issue remains real for non-browser clients even though managed-browser access works.

Captured public proof:

- Google desktop/mobile screenshots and text showing the official website/menu result and Google business profile proof: 4.2 from 1.1K reviews, American restaurant, `801 N River Rd, McHenry, IL 60051`, phone `(815) 578-9600`, owner-confirmed hours, happy hour food, private dining room, and great cocktails.
- Restaurantji desktop/mobile screenshot/text showing 4.0 from 283 ratings, Pizza/American/Sports Bars categories, address, phone, hours, delivery/take-out, happy-hour food, private dining room, great cocktails, and signature/favorite dishes.
- Roost screenshot/text corroborating the family-owned waterfront patio/private-party identity, delivery through major apps, 4.1 from 939 reviews, and broader menu/private-event proof.

Updated audit interpretation: Snuggery is not a no-site lead. The official site is reachable and reasonably on-brand in a real browser. The opportunity is narrower and should be framed truthfully: improve everyday conversion, menu/order/hours visibility, private-event routing, and waterfront roadhouse personality while resolving crawler-hostile 403 behavior. Do not pitch it as having no website.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
