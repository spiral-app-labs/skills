# La Hacienda Mexican Restaurant — Battle Cards

- Restaurant: La Hacienda Mexican Restaurant, East Dundee, IL
- Public web path: Canva menu deck plus directory/order profiles
- Preview stage: local build/evidence complete; deployed preview URL still pending packaging
- Archetype: Bamzi, hue-shifted for a warm casual Mexican restaurant with a practical Cuisine-style action core

## Core sales frame

La Hacienda does not need an invented premium story. The sales frame is simpler: guests already know the restaurant for familiar Mexican favorites, longtime regulars, fast pickup, and a real East Dundee location. The preview makes those facts easier to trust and act on from a phone.

Use this line when the conversation gets scattered:

> “Your menu and reviews are already doing the selling. This preview turns them into a clearer first impression with Call, Menu, Order, and Map right where hungry guests need them.”

## Demo path

1. **Homepage / first screen**
   - Show the East Dundee Mexican-favorites framing.
   - Point to the mobile Call/Menu/Order/Map strip.
   - Explain that the site now answers the first guest question: “Can I quickly choose and act?”

2. **Guest favorites / menu proof**
   - Show tacos, burritos, tortas, chimichangas, fajitas, horchata, and salsa language.
   - Explain that the site uses real menu/review cues instead of fake chef or luxury copy.

3. **Menu page**
   - Show the scan-friendly categories and full menu handoff.
   - Explain that the Canva menu link is still available, but guests no longer start from a bare menu-file experience.

4. **Contact page**
   - Show phone, address, directions, and order action cards.
   - Explain that the practical conversion path is clearer than making guests assemble facts from Google and directories.

5. **Concierge**
   - Ask “What should I order tonight?”
   - Then ask “Do you have gluten free?” or “Are prices current?”
   - Explain that the concierge gives safe basics and routes allergy, price, and timing questions to the restaurant.

## Objection cards

### “We already have our menu online.”

**Response:**
“Yes, and that is useful. The gap is that a menu deck is not the same as a restaurant homepage. This preview keeps the menu easy to reach, but also adds the pieces a new guest needs before deciding: what you serve, where you are, when you are open, how to call, how to order, and how to get there.”

**Proof to cite:**
- Browser audit captured the Canva menu path.
- Preview keeps the full menu handoff while adding homepage/contact/menu structure.

**Show:**
Homepage hero, mobile action strip, menu page full-menu button.

### “People already find us on Google.”

**Response:**
“That is exactly why the owned path should be stronger. Google can help people discover you, but the website should confirm the decision and make the next tap obvious. The preview uses your public proof instead of making guests hunt for it.”

**Proof to cite:**
- Google proof at capture: 4.3 stars from 530 reviews.
- Highest-sort 30 written reviews captured and summarized.

**Show:**
Review/proof sections and the contact action cards.

### “We are a casual neighborhood restaurant — we do not need a fancy site.”

**Response:**
“Agreed. This is not trying to make La Hacienda look like a luxury tasting-menu restaurant. It is polished, but the copy stays casual and practical: tacos, burritos, tortas, salsa, pickup, phone, directions, and local favorites.”

**Proof to cite:**
- Archetype route is Bamzi hue-shifted for warmth, with a Cuisine-style conversion core.
- Hard bans observed: no fake chef story, no awards, no invented sourcing, no fake reservations.

**Show:**
Homepage copy, favorites sections, mobile CTAs.

### “We use third-party ordering / people call us anyway.”

**Response:**
“Then the site should support that behavior instead of hiding it. The preview keeps calling and ordering visible, and it treats the online-order link as a handoff rather than pretending to own the whole transaction.”

**Proof to cite:**
- Captured Restaurantji order path is preserved.
- Phone appears across the site and in the mobile action strip.

**Show:**
Order button, call button, contact page.

### “I do not want AI answering guests.”

**Response:**
“That concern is right. The concierge is deliberately conservative. It can suggest known menu favorites and provide hours/location basics, but it tells guests to call for allergies, current prices, ingredients, specials, pickup timing, or anything time-sensitive.”

**Proof to cite:**
- Concierge transcript covers menu, hours, pickup, allergy handoff, and location.
- `/api/chat` is deterministic and restaurant-specific, not a freeform promise-maker.

**Show:**
Ask “What should I order?” then “Do you have gluten free?”

### “How does this help orders?”

**Response:**
“It focuses on the actions closest to an order: Call, Menu, Order, Map, hours, address, and quick menu confidence. It reduces the number of steps between a hungry mobile visitor and a decision.”

**Proof to cite:**
- Top 3 improvements added mobile conversion cleanup.
- 390px overflow check found no horizontal offenders on home, menu, and contact.

**Show:**
Mobile screenshots or live mobile preview.

### “The menu, prices, or hours change.”

**Response:**
“That is why the preview avoids promising current prices or sensitive details in the concierge. It uses captured public facts as the starting point and asks guests to call for prices, allergies, specials, and time-sensitive pickup questions.”

**Proof to cite:**
- Pitch doc caveats call out price/current-detail confirmation.
- Concierge disclaimer and API responses route these questions to phone.

**Show:**
Concierge disclaimer and menu page caveat.

## Proof locker

- Pitch doc: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/pitch-doc.md`
- Current/source audit: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/audit.md`
- Browser evidence audit: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/browser-evidence-audit-2026-05-05.md`
- Google Highest review packet: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/google-reviews-highest-30-written-2026-05-05.md`
- Google review screenshot: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/google-reviews-highest-2026-05-05.png`
- Top 3 improvements: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/top-3-improvements-2026-05-05.md`
- Concierge evidence: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/concierge-2026-05-05.md`
- Concierge transcript: `restaurant-website-system/sites/la-hacienda-mexican-restaurant/scrapes/concierge-api-transcript-2026-05-05.json`
- Mobile evidence:
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/top3-after-home-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/top3-after-menu-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/top3-after-contact-mobile-2026-05-05.png`
  - `restaurant-website-system/sites/la-hacienda-mexican-restaurant/screenshots/concierge-open-mobile-2026-05-05.png`

## Founder cautions

- Do not say the preview is deployed until a preview URL exists.
- Do not promise allergy safety, current prices, specials, current pickup timing, delivery availability, catering, or reservations.
- Do not imply the Canva menu has been replaced as the canonical menu source unless the owner confirms a structured menu migration.
- Do not call La Hacienda luxury, chef-driven, or upscale. Say polished, warm, casual, neighborhood Mexican restaurant.
- If the owner asks about online ordering, say the preview preserves the captured public order link and that final provider ownership should be verified.

## Close

“If nothing else, this makes the first 30 seconds cleaner. A guest can understand La Hacienda, see real favorite dishes, call, open the menu, order, or get directions without stitching the story together from a menu deck and third-party listings.”
