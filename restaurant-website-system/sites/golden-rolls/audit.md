# Golden Rolls — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `golden-rolls`
- MC parent task: `c98d74ad-1a44-4df4-b313-bd20d675ae71`
- Lead ID: `e5048ba5-21d5-4400-8673-f92e16954560`
- Restaurant: Golden Rolls, Woodstock, IL
- Official site: `http://www.goldenrollssushi.com/` → `https://goldenrollssushi.com/`
- Address found: `790 S Eastwood Dr, Woodstock, IL 60098`
- Phone found: `(815) 308-5099`

## Source status

Golden Rolls has an owned domain, but the current source evidence is inconsistent and thin:

- OpenClaw web fetch reached `https://goldenrollssushi.com/` and extracted only a short welcome message.
- A normal Python/urllib request to the same HTTPS URL returned `403 Forbidden`, consistent with the lead-qualification note that the official domain previously returned `406 Not Acceptable` / ModSecurity to normal crawl/browser-like requests.
- The homepage text that *does* fetch is sparse: welcome, delivery, and a freshness claim, without enough crawlable menu/location/order structure.

The pitch hook is therefore: **a high-rated sushi/Japanese bistro with strong local proof, but its owned website is thin and technically brittle for discovery/crawlers.**

## Public proof captured

### Official site

- URL: `http://www.goldenrollssushi.com/` redirected to `https://goldenrollssushi.com/`.
- Title: `Golden Rolls – (815) 308-5099`.
- Extracted homepage copy:
  - `Welcome to Golden Rolls`
  - `We are now offering Delivery!`
  - `We strive to provide the FRESHEST and BEST tasting sushi in the McHenry County area!`
  - `All our dishes are made to order to ensure freshness and satisfaction!`
- Fetch friction: non-browser Python request returned `403 Forbidden`; qualification reference previously recorded `406 Not Acceptable` / ModSecurity.

### Restaurantji

- URL: `https://www.restaurantji.com/il/woodstock/golden-rolls-/`
- Category: Sushi Bars, Japanese.
- Rating evidence: `4.7` from `187 ratings`.
- Address: `790 S Eastwood Dr, Woodstock`.
- Phone: `(815) 308-5099`.
- Favorites surfaced: Soft Shell Crab Roll, Sashimi Yellowtail, Caterpillar Roll, Chicken Teriyaki, Golden Shrimp, Tempura Roll, Godzilla Roll, Spider Roll, Crab Cakes, Miso Soup.
- Hours: Monday closed; Tuesday–Thursday 11AM–9:30PM; Friday 11AM–10PM; Saturday 2–10PM; Sunday 2–9PM.

### Roost / menu-directory page

- URL: `https://www.roostcafeandbistro.com/golden-rolls-60098/`
- Describes Golden Rolls as a `Chill Japanese bistro with a bar featuring creative sushi rolls, noodle dishes & teriyaki entrees`.
- Lists dine-in, curbside pickup, and delivery.
- Shows 4.5 stars from 290 reviews.
- Corroborates address, phone, website, Facebook profile, and hours.
- Review excerpts highlight birthday sushi portions, fresh sushi, friendly service, elegant/casual dining room, clean/nicely decorated interior, good atmosphere, romantic/special occasion potential, delivery packaging, salmon nigiri, golden shrimp, gyoza beef appetizers, calamari, and price transparency concerns on some roll listings.

### Search / Yelp snippets

- Search result for the official site repeats the freshness claim.
- Yelp snippet shows local Japanese intent/search demand in the surrounding area.

## Audit findings

1. **Technical trust gap:** official domain behavior is inconsistent across clients. The site can fetch in OpenClaw web_fetch but also returns 403 in a normal Python request; prior qualification documented 406/ModSecurity. This needs real-browser verification before outreach.
2. **Thin owned content:** the homepage extract is essentially a welcome message and freshness/delivery claim. It does not carry menu depth, hours, address, dine-in/curbside/delivery, bar, photos, or review proof in a strong crawlable way.
3. **Strong off-site proof:** Restaurantji and directory pages show 4.7/187 ratings, 71 photos, creative roll favorites, Japanese bistro/bar positioning, and strong dine-in + delivery proof.
4. **Conversion opportunity:** Golden Rolls needs a single owned experience that routes guests to call/order/delivery, shows hours and location, and presents sushi/teriyaki/noodle depth without forcing directory hops.
5. **Route:** `bamzi-01`, per qualification. Core archetype mapping: **Bamzi** — a moody/cinematic, bar-friendly sushi bistro treatment with enough energy for creative rolls, while keeping the copy truthful and casual-local rather than luxury omakase.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/search evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshot of the official homepage
- browser DOM/text snapshot for the official homepage and any menu/order page if present
- evidence of the 403/406/ModSecurity behavior if reproducible in real browser or crawler tools
- Google/Maps review screenshot and later Highest-filter 30 written Google review packet
- supporting screenshots from Restaurantji/directory proof pages

## Current recommendation

Proceed as a conditional build candidate after browser evidence verifies the owned-site friction. Golden Rolls has clear sellability: high rating, strong sushi/Japanese menu signals, dine-in/curbside/delivery, and a bistro/bar identity. The build should make the official site feel reliable, structured, and more premium without inventing claims or turning it into a formal omakase concept.
