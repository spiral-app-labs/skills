# La Hacienda Mexican Restaurant — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `la-hacienda-mexican-restaurant`
- MC parent task: `fd7f4976-daac-42aa-8c9a-1ddb09a9d12f`
- Lead ID: `7cba3fe2-8f65-4516-b46b-05c2c07ab235`
- Restaurant: La Hacienda Mexican Restaurant, East Dundee, IL
- Current “website” in MC/lead list: `https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view`
- Address found: `411 E Main St, East Dundee, IL 60118`
- Phone found: `(847) 426-0506`

## Source status

La Hacienda appears to use a Canva design as its website/menu path instead of a normal restaurant site. OpenClaw web fetch could only extract the title `LA HACIENDA (Menu)` from the Canva page, with no useful crawlable restaurant content, hours, address, phone, order path, or menu structure.

The pitch hook is therefore: **the restaurant has a real local Mexican food footprint, but its “website” is effectively a Canva menu view rather than a reliable owned restaurant website.**

## Public proof captured

### Canva “website” / menu

- URL: `https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view`
- Fetched title: `LA HACIENDA (Menu)`.
- Crawlable body content extracted: only the same title; no usable menu text, hours, address, phone, conversion CTA, or restaurant story.
- Qualification reference says Restaurantji’s Website button points to the Canva page and earlier fetches hit unsupported-client behavior.

### Restaurantji

- URL: `https://www.restaurantji.com/il/east-dundee/el-faro-restaurant-/`
- Category: Mexican.
- Rating evidence: `4.2` from `134 ratings`.
- Address: `411 East Main Street, East Dundee`.
- Phone: `(847) 426-0506`.
- Favorites surfaced: Hamburger Kids with French Fries, Chile Relleno Burrito Cut in Half, Huevos Rancheros with Steak, Chile Relleno Chimichanga, Pico de Gallo and Salsa, Alpastor Taco Dinner, Carne La Tampiqueña, Orden de Guacamole, Carne a la Tampique, Chimichanga Dinner.
- Hours: Mon–Thu/Sun 10AM–9PM; Fri/Sat 10AM–10PM.

### Roost / menu-directory page

- URL: `https://www.roostcafeandbistro.com/la-hacienda-mexican-restaurant-60118/`
- Rating evidence: `4.3` from `473 reviews`.
- Lists dine-in, drive-through, and delivery.
- Corroborates address, phone, and hours.
- Review excerpts mention authentic/fresh Mexican food, salsa, flautas, tender tacos, chile relleno burrito, tortas, pico, fast service, family-favorite status, and no-frills service.
- Some negative excerpts mention parking, temporary liquor-license issue, flies/fruit flies, hair, and beans texture; do not reuse as marketing claims, but keep in mind for QA/risk framing.

### Search / Yelp snippets

- Yelp snippet corroborates address `411 E Main St, East Dundee, IL 60118` and says offers delivery and takeout.
- Checkle/MenuPix/Seamless listings appear to carry menu/order discovery outside the owned website path.

## Audit findings

1. **Owned-site failure:** a Canva design is being treated as the website/menu, but it does not provide crawlable restaurant content in web fetch and is not a proper conversion homepage.
2. **Conversion gap:** address, phone, hours, dine-in/drive-through/delivery, and menu proof are scattered across Restaurantji/Roost/Yelp/marketplaces rather than controlled by the restaurant.
3. **Menu story gap:** standout dishes like chile relleno burrito/chimichanga, al pastor tacos, carne tampiqueña, huevos rancheros, tortas, flautas, pico, salsa, and guacamole are not organized into a first-party story.
4. **Reputation gap:** the restaurant has enough public review volume to be credible, but positive proof is buried in aggregators and mixed with uncurated negative reviews.
5. **Route:** `bamzi-01` hue-swap per qualification, with caution. Core archetype mapping: **Cuisine** for warm casual Mexican clarity; implementation can borrow Bamzi’s stronger visual energy only if photos support it, but must not become a generic trendy/dark restaurant concept.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/search evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshot of the Canva page behavior
- browser DOM/text snapshot of the Canva page if possible
- screenshot of Restaurantji’s Website button pointing to Canva
- Google/Maps profile screenshot and later Highest-filter 30 written Google review packet
- supporting screenshots from Restaurantji/Roost/directory proof pages

## Current recommendation

Proceed as a strong bad-site lead after browser evidence is attached. The sell story is clean: La Hacienda should not rely on a Canva menu page and third-party listings as its first impression. A first-party site should lead with hours, phone, directions, delivery/takeout, key Mexican dishes, and a trustworthy local dining story without inventing unsupported claims.
