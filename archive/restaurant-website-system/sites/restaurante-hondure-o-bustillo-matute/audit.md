# Restaurante Hondureño Bustillo Matute — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `restaurante-hondure-o-bustillo-matute`
- MC parent task: `cc4330f0-b3e9-4ed5-8036-292649576916`
- Lead ID: `56fc8804-0359-4db2-b248-97e3e0191e32`
- Restaurant: Restaurante Hondureño Bustillo Matute, McHenry, IL
- Official website found: none in MC or current source pass
- Address found: `4113 W Shamrock Ln, McHenry, IL 60050`
- Phone found: `(779) 244-5791`

## Source status

No owned restaurant website surfaced in MC or the available source pass. Discovery appears to be carried by Restaurantji, Restaurant Guru, USA Restaurants, and marketplace/order pages such as DoorDash/Grubhub that are difficult to fetch and do not provide a useful first-party restaurant story.

The pitch hook is therefore: **a distinctive, high-rated Honduran restaurant with strong dish proof, but no owned place to explain the Honduran menu, hours, photos, ordering, and family story before guests choose.**

## Public proof captured

### Restaurantji

- URL: `https://www.restaurantji.com/il/mchenry/restaurante-hondure-o-bustillo-matute-/`
- Category: Honduran.
- Rating evidence: `4.8` from `84 ratings`.
- Address: `4113 W Shamrock Ln, McHenry`.
- Phone: `(779) 244-5791`.
- Favorites surfaced: Burrito Wraps with French Fries, Pastelitos de Maiz Order 4, Tajadas con Carne Asada, Enchiladas Hondureñas, Yuca con Chicharron, Burritas Hondureñas, Baliada Completa, Baliada Cencilla, Modelo Especial, Platano Relleno.
- Hours: Monday–Sunday 10AM–9PM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Restaurante-Hondureno-Bustillo-Matute-McHenry`
- Shows 51 photos.
- Google-derived rating: `4.8`.
- Summary says Honduran cuisine is the draw and mentions grilled beef, stewed steaks, asado, nice staff, good service, and cool atmosphere.
- Address: `4113 W Shamrock Ln, McHenry, Illinois, USA`.
- Features: credit cards accepted, takeaway, booking, wheelchair accessible; no delivery listed by Restaurant Guru.
- Hours corroborate 10AM–9PM daily.

### USA Restaurants profile

- URL: `https://usarestaurants.info/explore/united-states/illinois/mchenry-county/nunda-township/mchenry/restaurante-hondureno-bustillo-matute-779-244-5791.htm`
- Review excerpt from a Honduran guest praises authentic flavor, fresh hand-made flour tortillas for baleadas, pollo con tajadas, mantequilla/queso by the pound, fair prices, large portions, and family entrepreneurs in the McHenry area.
- Treat the “upgrades are coming soon” note as historical review context only unless verified directly.

### DoorDash / Grubhub marketplace paths

- DoorDash source was listed in qualification, but current web fetch hit a 403 checkpoint.
- Grubhub-style URL fetched only `Prepare your taste buds...`, with no useful crawlable restaurant detail.
- This supports the same conversion problem: order/marketplace pages may exist, but they are not a good owned explanatory homepage.

## Audit findings

1. **Owned-site gap:** no clear official website was found. Public discovery and order/menu context are fragmented across directories and marketplaces.
2. **Distinct cuisine under-explained:** Honduran dishes like baleadas/baliadas, pastelitos de maíz, tajadas con carne asada, enchiladas Hondureñas, yuca con chicharrón, pollo con tajadas, plátano relleno, grilled beef, and asado need a first-party explanation for guests who do not already know the cuisine.
3. **Trust gap:** strong ratings and authentic review proof exist, but the restaurant does not control the framing or the family/local story.
4. **Conversion gap:** hours, phone, address, takeaway/booking, photos, and ordering paths are scattered. Guests need one owned place for call, directions, hours, menu orientation, and marketplace handoff if used.
5. **Route:** `bamzi-01` adapted carefully per qualification, with strict guardrails. Core archetype mapping: **Cuisine** for warm, family, casual neighborhood clarity; Bamzi can provide richer visual pacing only if later photo evidence supports it. Do not let sushi/pan-Asian or generic dark-trendy patterns leak into this Honduran restaurant.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- Google/Maps proof that no first-party website is listed, or document the listed site if one exists
- desktop/mobile screenshots of Restaurantji, Restaurant Guru, USA Restaurants, and any marketplace/order profiles
- browser DOM/text snapshot for the strongest available public profiles
- Highest-filter 30 written Google review packet with evidence/screenshots

## Current recommendation

Proceed as a strong no-owned-site build candidate after Google/Maps browser verification. The sell story is clear and differentiated: a highly rated Honduran restaurant deserves a first-party site that explains the cuisine, highlights signature dishes and family/local proof, and gives guests a clean path to call, visit, and order without relying entirely on directories or marketplace pages.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured Google / first-party-site verification:

- Google desktop/mobile screenshots and text.
- Google shows 4.8 from 138 Google reviews, `4113 W Shamrock Ln, McHenry, IL 60050`, phone `(779) 244-5791`, Honduran restaurant category, call/directions/website/order actions, and menu highlights.
- The visible web presence is Facebook plus marketplace/search paths such as DoorDash, not a clean owner-controlled restaurant domain.

Captured public proof:

- Restaurantji desktop/mobile screenshot/text showing 4.8 from 84 ratings, Honduran category, address, phone, hours, delivery, vegetarian options, Wi-Fi, kids' menu, and signature dish favorites.
- Restaurant Guru screenshot/text showing #9 of 130 restaurants in McHenry, 51 photos, 4.8 Google-derived rating, Honduran cuisine, grilled beef, stewed steaks, asado, staff/service proof, Facebook website, and features.
- USA Restaurants screenshot/text with authentic Honduran/family proof, fresh handmade tortillas for baleadas, pollo con tajadas, mantequilla/queso by the pound, fair prices, and large portions.
- DoorDash/marketplace search screenshot/text showing delivery/order discovery exists but is not an owned explanatory homepage.

Updated audit interpretation: the no-owned-site story remains strong. Google and directories carry trust, menu education, ordering, hours, and dish photos, while the restaurant’s visible “website” path appears to be Facebook/marketplace-led rather than a dedicated first-party site. The build should create a warm Honduran/Cuisine-style landing page that explains unfamiliar dishes and routes guests to call, directions, pickup/delivery, and hours.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
