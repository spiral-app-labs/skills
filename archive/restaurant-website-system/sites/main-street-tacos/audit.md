# Main Street Tacos — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `main-street-tacos`
- MC parent task: `6eb6cf29-eaf5-4751-8aab-3dc5f827e40e`
- Lead ID: `51459758-7f1c-4137-a2c8-bb95386e2582`
- Restaurant: Main Street Tacos, Wauconda, IL
- Official website found: none in MC or current source pass
- Address found: `327 N Main St, Wauconda, IL`
- Phone found: `(847) 526-8586`

## Source status

No clear owned restaurant domain surfaced in MC or the available source pass. Main Street Tacos' pre-visit web presence appears to be carried by Restaurantji, Restaurant Guru, Groupon/generated profiles, and similar directory pages rather than a first-party site.

The pitch hook is therefore: **a highly rated taco/Mexican restaurant with strong public demand, but no owned website that controls hours, phone, menu, ordering, photos, and the restaurant story.**

## Public proof captured

### Restaurantji city listing

- URL: `https://www.restaurantji.com/il/wauconda/`
- Main Street Tacos appears in the Wauconda restaurant list as Mexican.
- Rating snippet: `4.8`, `Superb174 Reviews`.
- Favorites surfaced: Steak Tacos, Barbacoa, Fish Tacos, Al Pastor, Taco Salad, Chicken Tacos Authentic Style, Tacos and Cebollitas, Grande Burrito, Super Nachos, Taco Dinner.

### Restaurantji direct profile

- URL: `https://www.restaurantji.com/il/wauconda/main-street-tacos-/`
- Category: Mexican, Vegetarian.
- Rating evidence: `4.8` from `174 ratings`.
- Address: `327 N Main St, Wauconda`.
- Phone: `(847) 526-8586`.
- Favorites surfaced: Chicken Tacos Authentic Style, Tacos and Cebollitas, Grande Burrito, Super Nachos, Steak Tacos, Taco Dinner, Chips Salsa, Skirt Steak, Fish Tacos, Any Burrito.
- Hours: Monday–Sunday 10AM–10PM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Main-Street-Tacos-Lake-Barrington`
- Shows 86 photos and a Google-derived rating of `4.4`.
- Summary says Mexican cuisine is well-cooked and mentions Mexican burritos, fish tacos, asado, and horchata.
- Notes convenient location, creative staff, nice service, reasonable prices, modern decor, and spectacular atmosphere.
- Address: `327 N Main St, Wauconda, Illinois, USA`.
- Features: delivery, outdoor seating, takeaway, credit cards accepted, wheelchair accessible, parking, TV; no booking.
- Hours corroborate 10AM–10PM daily.

### Groupon / generated profile

- URL attempted: `https://www.groupon.com/biz/wauconda-il/main-street-tacos`
- Fetch returned `410` but still showed the title `Main Street Tacos, 327 North Main Street, Wauconda, IL - Groupon`; treat only as supporting evidence that generated pages exist, not as a live conversion path.

## Audit findings

1. **Owned-site gap:** MC has no official website URL and qualification notes found no clear first-party domain. Public discovery is directory-led.
2. **Conversion gap:** hours, phone, address, delivery/takeaway, parking, and menu proof exist, but guests must piece them together from Restaurantji/Restaurant Guru/Groupon-style pages.
3. **Menu story gap:** strong taco/order signals — steak tacos, barbacoa, fish tacos, al pastor, chicken tacos authentic style, tacos and cebollitas, burritos, super nachos, taco dinner, horchata — are not organized into an owned menu narrative.
4. **Trust gap:** 4.8 from 174 Restaurantji ratings is a strong lead signal, but the restaurant does not control how that proof is framed.
5. **Route:** `pepper-01`, per qualification for fast taco/order motion. Core archetype mapping: **Cuisine** — warm casual neighborhood restaurant clarity, with a punchier order-first taco treatment. Use Bamzi only if later browser/photo evidence proves a stronger dine-in visual brand.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- Google/Maps proof that no first-party website is listed, or document the listed site if one exists
- desktop/mobile screenshots of Restaurantji and Restaurant Guru profiles
- browser DOM/text snapshot for the best available public profiles
- Highest-filter 30 written Google review packet with evidence/screenshots

## Current recommendation

Proceed as a conditional no-owned-site build candidate after Google/Maps browser verification. The sell story is simple: Main Street Tacos already has strong ratings and craveable taco signals, but needs one owned page for menu, hours, call/directions, delivery/takeout, and local trust instead of letting directories own the first impression.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured Google / first-party-site verification:

- Google desktop/mobile screenshots and text.
- Google shows Main Street Tacos at 4.4 from 572 Google reviews, `327 N Main St, Wauconda, IL 60084`, phone `(847) 526-8586`, call/directions actions, menu highlights, and generated/directory web results.
- Candidate website-like URLs were checked: `main-street-tacos.menu-world.com` renders a generated profile with generic copy and reservation language, while `MainStreetTacos.food96.com` returned Cloudflare 502. These do not look like a clean owner-controlled primary website.

Captured public proof:

- Restaurantji desktop/mobile screenshot/text showing 4.8 from 174 ratings, Mexican/Vegetarian category, address, phone, 10AM–10PM daily hours, delivery/takeout, and favorites.
- Restaurant Guru screenshot/text showing #5 of 49 restaurants in Wauconda, 86 photos, 4.4 Google-derived rating, delivery/outdoor seating/takeaway, Instagram, and candidate Food96 website.
- Restaurantji Wauconda city-listing screenshot/text showing Main Street Tacos ranked with 4.8 / Superb 174 reviews and taco favorites.

Updated audit interpretation: Main Street Tacos has strong demand and discoverability, but the current web footprint is fragmented across Google, Restaurantji, Restaurant Guru, Menu World, Food96, Yelp, Facebook, and Apple Maps rather than a trustworthy owner-controlled landing page. The pitch should focus on replacing generated/directory-led discovery with one fast, accurate, order-first taco site.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
