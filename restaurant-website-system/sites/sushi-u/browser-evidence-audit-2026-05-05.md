# Sushi U — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `b5ce710c-c4b4-431e-a258-82fb71ab60a0`
- Lead ID: `8dce758b-d6d8-45b9-9971-70e6810569fb`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; official homepage, PDF menu, HonorPOS order path, Google/local proof, and directory proof are captured.

## Browser availability

OpenClaw managed Chrome is available on this host. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official-site and technical-friction evidence

Captured evidence:

- Official homepage desktop/mobile screenshots and DOM/text: `screenshots/official-home-desktop-2026-05-05.png`, `screenshots/official-home-mobile-2026-05-05.png`, `scrapes/official-home-desktop-2026-05-05.txt`, `scrapes/official-home-mobile-2026-05-05.txt`
- Official `www` homepage screenshot/text: `screenshots/official-home-www-desktop-2026-05-05.png`, `scrapes/official-home-www-desktop-2026-05-05.txt`
- PDF menu desktop/mobile screenshots and captures: `screenshots/official-menu-pdf-desktop-2026-05-05.png`, `screenshots/official-menu-pdf-mobile-2026-05-05.png`
- HonorPOS order path desktop/mobile screenshots and text: `screenshots/official-order-desktop-2026-05-05.png`, `screenshots/official-order-mobile-2026-05-05.png`, `scrapes/official-order-desktop-2026-05-05.txt`, `scrapes/official-order-mobile-2026-05-05.txt`
- Capture/status manifest: `scrapes/browser-audit-manifest-2026-05-05.json`

Managed Chrome can open `https://sushiucrystallake.com/` and `https://www.sushiucrystallake.com/`, showing title `Sushi U | Online Ordering Menu`, nav links, phone `815-893-6338`, `Dine In & Pick Up`, `OUR MENU`, `ORDER ONLINE`, hours, and address `5899 North West Highway Unit A, Crystal Lake, IL 60014`. The SSL/certificate friction is still reproduced for non-browser fetch/status checks in this run: official homepage, www homepage, PDF menu, and order path all returned `TypeError: fetch failed` in Node fetch while browser access worked.

The official menu CTA remains a PDF (`images/menu26.3.11.pdf`), which is captured in desktop/mobile. The online order path at `https://order.sushiucrystallake.com/` works in browser and exposes a deep crawlable menu with categories including Appetizers/Soup/Salad, Sushi/Sashimi, Chef's Special Rolls, Vegetarian Roll, Maki Roll, Bento Box, Poke Bowl, Sushi Dinner Special, Hibachi Entrees, Party Tray, Dessert, Drink, and Ramen Noodles Soup. The build should preserve this conversion path.

## Google and public proof

Captured evidence:

- Google desktop/mobile search/profile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`

Google shows Sushi U at 4.6 from 378 Google reviews, sushi restaurant, `5899 Northwest Hwy Unit A, Crystal Lake, IL 60014`, phone `(815) 893-6338`, order pickup/delivery, menu path, all-you-can-eat signal, and popular items such as poke bowl, eel, Angel Hair Roll, Thai tea, spicy salmon roll, Forbidden Roll, Sashimi Deluxe, chicken teriyaki, and more. Restaurantji shows 4.5 from 141 ratings, Sushi Bars/Japanese categories, hours, order/reserve links, all-you-can-eat popularity, attentive service, decorated interior, fresh flavorful rolls, and favorites such as Spicy Salmon Roll, California Roll, Angel Hair Roll, Shrimp Tempura, Forbidden Roll, Crab Rangoon, Super Crunch, Spider Roll, and Volcano Roll. Restaurant Guru shows #7 of 185 restaurants in Crystal Lake, 34 photos, Japanese cuisine, avocado sushi, volcano roll, miso soup, takeaway, attentive staff, fine service, low prices, calm atmosphere, fancy decor, and Google-derived 4.6.

## Audit interpretation

Sushi U is a real-site improvement lead, not a no-site lead. The browser confirms the site and order path work for normal guests, but the technical trust friction remains for non-browser clients/search crawlers, and the PDF menu is a weak mobile/search experience. The redesign should keep the HonorPOS ordering flow while adding a stronger first-party, mobile-readable menu/story around sushi, AYCE, ramen, poke, hibachi, hours, phone, address, and order/reserve actions. Bamzi remains the correct route unless later photo evidence supports a more restrained Qitchen-style treatment.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
