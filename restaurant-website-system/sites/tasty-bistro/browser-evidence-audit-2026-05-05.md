# Tasty Bistro — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `b19181d6-a00f-4d82-9c38-707c9dcb5372`
- Lead ID: `4a61843f-7ce4-42d1-9971-1452aa311c47`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally, but the lead is blocked before reviews/build because current evidence says the Crystal Lake location has closed/consolidated into Cary.

## Browser availability

OpenClaw managed Chrome is available on this host. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official / order-domain evidence

Captured evidence:

- Official domain redirect desktop/mobile screenshots and DOM/text: `screenshots/official-domain-desktop-2026-05-05.png`, `screenshots/official-domain-mobile-2026-05-05.png`, `scrapes/official-domain-desktop-2026-05-05.txt`, `scrapes/official-domain-mobile-2026-05-05.txt`
- Direct OrderOnlineHub desktop/mobile screenshots and DOM/text: `screenshots/orderonlinehub-desktop-2026-05-05.png`, `screenshots/orderonlinehub-mobile-2026-05-05.png`, `scrapes/orderonlinehub-desktop-2026-05-05.txt`, `scrapes/orderonlinehub-mobile-2026-05-05.txt`
- Capture/status manifest: `scrapes/browser-audit-manifest-2026-05-05.json`

Managed Chrome confirms `http://www.tastybistrocl.com/` redirects to `https://www.orderonlinehub.com/tastybistro_hf98723g1bt5`. In real browser context the app does render restaurant content, but it is now for `Tasty Bistro` at `630 Northwest Hwy, Cary IL 60013`, not the Crystal Lake address from the original lead. The visible notice says: `Please note that March 2nd will be our final day of operation. Starting March 3rd, Tast...`, and the app is marked `CLOSED` at capture time. The app still exposes a broad menu stack: sushi, sashimi, regular/signature rolls, ramen, udon, Thai dinner entrees, Chinese dinner entrees, tempura, pad Thai, crazy noodles, lo mein, yakiudon, fried rice, hibachi, teriyaki, drinks, dessert, and side orders.

## Google / operating-status evidence

Captured evidence:

- Google desktop/mobile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Marketplace/order search screenshot/text: `screenshots/doordash-search-desktop-2026-05-05.png`, `scrapes/doordash-search-desktop-2026-05-05.txt`

Google mobile shows the Crystal Lake Tasty Bistro profile at 4.4 from 331 reviews and explicitly says the Crystal Lake physical location has closed and merged with sister restaurant Tasty Sushi in Cary due to rising costs, with food/staff moved to `630 Northwest Highway`. Google marks the Crystal Lake location `Temporarily closed`. Search results include Patch/Daily Herald/Shaw Local closure coverage from February/March 2026 and order results for the Cary location. Marketplace search shows Tasty Sushi/Cary ordering and a Facebook snippet saying that starting May 1, 2026 ordering from Tasty Bistro through Uber/DoorDash will no longer be available and guests should order through Tasty Sushi.

## Directory proof captures

- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`

Restaurantji still shows historical Crystal Lake proof: 4.4 from 157 ratings, Asian/Sushi Bars/Thai categories, `394 W Virginia St, Crystal Lake`, phone `(815) 919-5999`, broad menu proof, and favorites such as sushi/sashimi combos, General Tso's chicken, shrimp tempura roll, Crazy Salmon Roll, Fire Dragon Roll, California Roll, Orange Chicken, and Crab Rangoon. Restaurant Guru independently marks Tasty Bistro `Temporarily closed` while showing 4.4 Google-derived proof, Chinese/Japanese cuisine, delivery, staff/service/decor notes, and the Crystal Lake address.

## Audit gate status

Canonical browser evidence for `auditing` is complete, but this website should not advance to `reviews`, `routing`, or build work as a Crystal Lake lead. The correct local stage is `blocked` until Mission Control/founder confirms whether to retire the Crystal Lake lead, replace it with Tasty Sushi/Cary, or create a new Cary-scoped workflow.
