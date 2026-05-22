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


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured current-site evidence:

- Canva menu desktop/mobile screenshots and DOM/text snapshots.
- Browser status check for the Canva URL returned HTTP 200.
- The Canva viewer exposes more menu text in browser than the earlier web-fetch result: restaurant name, address, phone, daily specials, regular taco dinner, burritos, tortas, enchiladas, everyday special, and parrillada.

Captured public proof:

- Google search/local pack screenshot/text showing 4.3 from 530 Google reviews, address, category, and menu highlights.
- Restaurantji screenshot/text showing 4.2 from 134 ratings, category, address, phone, hours, Website/Order Online links, and favorites.
- Roost/directory proof screenshot/text showing 4.3 from 473 reviews, dine-in, drive-through, delivery, address, phone, hours, and a long menu/pricing corpus.

Updated audit interpretation: the Canva page is not completely blank to a modern browser, but it is still not a proper restaurant website. It behaves like a document/menu deck instead of a first-party conversion homepage, with no strong call/directions/order structure, no normal restaurant navigation, no owner-controlled SEO story, and weak mobile-first landing-page polish.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.

## Structured lead metadata for checklist + Mission Control sync

- `owner_name`: `null`
  - Evidence checked: Google review packet, Restaurantji text, Canva menu text, Roost directory text.
  - Notes: reviews mention kind owners and one staff member (`Gisselle`), but no publicly verified owner name was captured.
- `owner_email`: `null`
  - Evidence checked: Canva menu text, Restaurantji text, Google local pack text, Roost directory text.
  - Notes: no owner email surfaced in the captured public evidence.
- `contact_email`: `null`
  - Evidence checked: same public sources as above.
  - Notes: no general contact email surfaced in the captured public evidence.
- `phone`: `(847) 426-0506`
  - Evidence: Canva menu text, Restaurantji, Google local pack, Roost directory.
- `hours`: `Sunday 10:00 am - 9:00 pm; Monday-Thursday 10:00 am - 9:00 pm; Friday-Saturday 10:00 am - 10:00 pm`
  - Evidence: Restaurantji, Google local pack, Roost directory.
  - Notes: public sources agree, but owner confirmation is still required before final handoff because hours are time-sensitive.
- `address_location`: `411 E Main St, East Dundee, IL 60118`
  - Evidence: Canva menu text, Restaurantji, Google local pack, Roost directory.
- `website_url`: `https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view`
  - Evidence: MC lead record reference, Canva browser capture, Restaurantji Website listing.
- `order_url`: `https://www.restaurantji.com/order.php?id=3429883`
  - Evidence: local QA DOM audits captured the live built order link; Restaurantji and Google local pack both show public order-online surfaces.
  - Notes: owner confirmation is still required before treating this as the preferred long-term provider path.
- `reservation_url`: `null`
  - Evidence checked: captured public sources above.
  - Notes: no reservation provider or booking URL was verified.
- `catering_events_url`: `null`
  - Evidence checked: captured public sources above.
  - Notes: no verified catering/events URL was captured.
- `google_rating`: `4.3`
  - Evidence: Google local pack browser capture and 30-review packet.
- `google_review_count`: `530`
  - Evidence: Google local pack browser capture and 30-review packet.
  - Notes: count is time-sensitive and should remain owner-reviewable before any final public sales claim.
- `outreach_email_draft_path`: `null`
- `outreach_email_draft_status`: `not_created`

### Metadata source notes

- Checked the Canva current-site text capture for restaurant name, address, phone, specials, and the explicit note that menu prices can change without notice.
- Checked Restaurantji for phone, hours, address, category, menu/order-online surfaces, and public review summary text.
- Checked the Google local pack browser capture for rating, review count, address, phone, hours context, and visible order/menu actions.
- Checked the Roost directory capture for corroborating address, phone, hours, and menu corpus.
- Did not promote any owner names, emails, reservation links, or catering links because they were not publicly verified in the captured evidence.
