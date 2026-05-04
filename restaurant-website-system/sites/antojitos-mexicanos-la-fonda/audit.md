# Antojitos Mexicanos La Fonda — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `antojitos-mexicanos-la-fonda`
- MC parent task: `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc`
- Lead ID: `92b49f80-4193-4c76-ba72-7a03493fd707`
- Restaurant: Antojitos Mexicanos La Fonda, Crystal Lake, IL
- Address found: `35 Berkshire Dr Unit 10, Crystal Lake, IL 60014`
- Phone found: `(815) 526-3633`

## Source status

No clear owned website surfaced in the current evidence pass. Public discovery is carried by aggregator/directory pages: Restaurantji, Yelp, Restaurant Guru, Zmenu/MenuPix/Sirved-style menu pages, Chamber of Commerce, and Checkle. The lead's original qualification note also flagged a `negocio.site` path returning Google 404.

The pitch hook is therefore: **strong local Mexican food proof, but no reliable owned website / conversion home.**

## Public proof captured

### Restaurantji

- URL: `https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/`
- Category: Mexican, pet friendly.
- Rating evidence: `4.6` from `95 ratings` in fetched page.
- Address: `35 Berkshire Dr unit 10, Crystal Lake`.
- Phone: `(815) 526-3633`.
- Favorites surfaced: Breaded Chicken Fillet, Sope Veracruzano, Milanesa de Pollo, Chicken Empanada, Huarache De Asado, Chips and Salsa, Nachos Supreme, Tinga de Pollo, Super Burrito, Shrimp Tacos.
- Hours: Mon–Sat 10AM–7PM; Sunday 10AM–4PM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Antojitos-Mexicanos-La-Fonda-Crystal-Lake`
- 41 photos listed.
- Summary says visitors point to Mexican tacos, Mexican steaks, nacho chips, efficient staff, spectacular service, attractive prices, and a homey atmosphere.
- Google-derived rating shown as `4.6`.
- Address and hours corroborate Restaurantji.
- Features: takeaway, credit cards, wheelchair accessible.

### Search / Yelp snippets

- Yelp snippets mention authentic Mexican restaurants, lime slices over tacos, tacos, quesadillas, huaraches, and torta de la casa.
- Chamber of Commerce snippet corroborates address and phone.
- Checkle snippet says menu/location is `35 Berkshire Dr Unit 10` and describes authentic Mexican food with dishes typical of the southeast region of Mexico, sharing tradition and culinary culture in the northeast suburbs of Chicago.

## Audit findings

1. **Owned-site gap:** no reliable owned website was found during this pass; discovery and menu proof are scattered across directories.
2. **Conversion gap:** guests can find phone/address through aggregators, but there is no first-party page that cleanly presents hours, menu, phone, maps, takeout, and the restaurant's regional Mexican identity.
3. **Menu/proof gap:** the best dish proof is off-site. Favorites like sope Veracruzano, huarache de asado, tinga de pollo, shrimp tacos, torta de la casa, and chicken empanada should be structured into owned content.
4. **Trust gap:** the 4.6 rating, homey atmosphere, efficient staff, attractive prices, and takeaway practicality are not concentrated into a sellable owned experience.
5. **Route:** `pepper-01`, with a warm casual Mexican/takeout-first interpretation. If the final archetype language must map to the core six, this is closest to **Cuisine**: a warm, family, casual neighborhood restaurant where clarity and approachability matter most.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/search evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile evidence of the no-owned-site / aggregator-led discovery path
- Google/Maps business profile screenshot if available
- browser DOM/text snapshot for any official/negocio.site path if it still exists
- screenshots of Restaurantji / Restaurant Guru proof pages as supporting evidence

## Current recommendation

Proceed as a build candidate only after browser evidence confirms the owned-site absence/404. The concept is straightforward and pitchable: make one clean owned page for menu, hours, phone, directions, takeaway, and the specific Mexican dishes people already mention publicly.
