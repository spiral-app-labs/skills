# Snuggery River Roadhouse — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `28641d8b-ed9c-4fc3-9326-9c3436bbdc31`
- Lead ID: `713dec87-03c2-4782-ad16-93d72368d130`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; the official site is reachable in managed Chrome and public proof is captured.

## Browser availability

OpenClaw managed Chrome is available on this host. The prior `No supported browser found` blocker is stale for local evidence capture.

## Official-site verification

Captured evidence:

- Official homepage desktop/mobile screenshots and DOM/text snapshots: `screenshots/official-home-desktop-2026-05-05.png`, `screenshots/official-home-mobile-2026-05-05.png`, `scrapes/official-home-desktop-2026-05-05.txt`, `scrapes/official-home-mobile-2026-05-05.txt`
- Non-www redirect proof: `screenshots/official-home-nonwww-desktop-2026-05-05.png`, `scrapes/official-home-nonwww-desktop-2026-05-05.txt`
- Manifest with browser captures and crawler status checks: `scrapes/browser-audit-manifest-2026-05-05.json`

Managed Chrome reached `https://www.snuggerymchenry.com/` and captured the page title `Home - Snuggery River Roadhouse`. The homepage leads with `Comfort food, cold drinks, and good times by the water`, `Book your graduation party today`, and a family-owned Fox River / Chain O' Lakes roadhouse story. It confirms year-round food/fun, pressure-fried crispy chicken, hand-breaded Wisconsin cheese curds, wings, burgers, Moretti's award-winning Chicago-style pizza, indoor/outdoor seating, and riverside patio positioning. The non-www URL redirects to the www homepage.

Crawler/status checks still returned HTTP 403 for both `https://www.snuggerymchenry.com/` and `https://snuggerymchenry.com/`, so the earlier fetch friction is real for non-browser clients even though normal managed-browser access works.

## Google and public proof

Captured evidence:

- Google desktop/mobile search evidence: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Roost directory screenshot/text: `screenshots/roost-proof-desktop-2026-05-05.png`, `scrapes/roost-proof-desktop-2026-05-05.txt`

Google mobile shows the business profile at 4.2 from 1.1K reviews, American restaurant, `801 N River Rd, McHenry, IL 60051`, phone `(815) 578-9600`, official website/menu links, owner-confirmed hours, and highlights such as happy hour food, private dining room, and great cocktails. Restaurantji shows 4.0 from 283 ratings, Pizza/American/Sports Bars categories, delivery/take-out, happy-hour food, private dining room, great cocktails, and favorites including country fried buttermilk chicken sandwich, cheeseburger, pizza, fried haddock, broasted chicken, Wisconsin cheese curds, Moretti's cheeseburger/special pizza, mac 'n' cheese pizza, and pulled pork dinner. Roost corroborates the family-owned waterfront/patio/private-party identity, delivery through major apps, 4.1 from 939 reviews, and broader menu/private-event proof.

## Audit interpretation

Snuggery is not a no-site lead. The official site is reachable and on-brand in a real browser. The sellable gap is more specific: the site is modern but generic/uneven, crawler-hostile outside normal browser access, and the above-the-fold conversion path is dominated by a graduation-party CTA instead of everyday guest actions like Menu, Order, Call, Hours, Directions, Patio/Private Events, and Pickup/Delivery. The Bramble route remains appropriate only if the build clearly improves everyday conversion and river-roadhouse personality without pretending the current site is broken for guests.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
