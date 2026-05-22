# Antojitos Mexicanos La Fonda — Pre-Fork Audit

- Date: 2026-05-04
- Site slug: `antojitos-mexicanos-la-fonda`
- MC parent task: `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc`
- Lead ID: `92b49f80-4193-4c76-ba72-7a03493fd707`
- Restaurant: Antojitos Mexicanos La Fonda, Crystal Lake, IL
- Address verified: `35 Berkshire Dr Unit 10, Crystal Lake, IL 60014`
- Phone verified: `(815) 526-3633`
- Template route: `pepper-01`

## Inputs collected

Browser/source evidence now exists for the audit gate:

- Google Maps / no-owned-site proof text: `scrapes/current-site-browser-text-2026-05-04.txt`
- Google Maps / no-owned-site proof DOM: `scrapes/current-site-browser-dom-snapshot-2026-05-04.html`
- Google Maps desktop screenshot: `screenshots/current-site-desktop-full.png`
- Google Maps mobile/listing screenshot: `screenshots/current-site-google-listing-mobile-full.png`
- Mobile public discovery screenshot: `screenshots/current-site-mobile-full.png`
- Restaurantji desktop screenshot: `screenshots/restaurantji-desktop-full.png`
- Restaurant Guru desktop screenshot: `screenshots/restaurantguru-desktop-full.png`
- Google Reviews Highest screenshot: `screenshots/google-reviews-highest-2026-05-04.png`
- Google Reviews Highest 30 written review packet: `scrapes/google-reviews-highest-30.json`
- Review themes: `google-reviews-themes.md`

## Block 1 — Verbatim findings

| Field | Finding |
|---|---|
| Owned website | Google Maps explicitly shows `Add website`; no first-party website surfaced in search/source checks. |
| Primary public profile | Google Maps listing for `Antojitos Mexicanos La Fonda`, `4.5`, `148 reviews`, `$10–20`, Mexican restaurant. |
| Address | `35 Berkshire Dr Unit 10, Crystal Lake, IL 60014`; located in Coventry Plaza Shopping Center. |
| Phone | `(815) 526-3633`. |
| Service modes | Google shows `Dine-in` and `Takeout`; reviews repeatedly describe takeout/carryout and limited/desired seating. |
| Hours | Restaurantji/Guru corroborate Mon–Sat `10AM–7PM`, Sun `10AM–4PM`. |
| Public menu proof | Restaurantji favorites: Breaded Chicken Fillet, Sope Veracruzano, Milanesa de Pollo, Chicken Empanada, Huarache De Asado, Chips and Salsa, Nachos Supreme, Tinga de Pollo, Super Burrito, Shrimp Tacos. |
| Review snippets | Google highlights: “Mexican small plates/appetizers amazing quality, great little shop!”, “Price was right, staff was very friendly, location was super clean.”, “They have THEE best pork tacos and creamy green sauce **CHEFS KISS**”. |
| Photos/assets | Restaurant Guru lists `41 photos`; Google shows menu/food/vibe/owner photo categories. |
| Social/owner activity | Google listing includes owner posts, including `New prices 🌮🌯🫔` from Feb 10, 2026. |

### Mobile state

Because there is no owned website, the mobile failure is a discovery failure rather than a layout bug:

1. Guests land on Google/aggregator panels instead of a controlled first-party homepage (`screenshots/current-site-google-listing-mobile-full.png`).
2. Menu proof is distributed across Google/Restaurantji/Guru, not an owned page with restaurant voice (`screenshots/current-site-mobile-full.png`).
3. Review proof is strong but buried inside Google; it is not transformed into owned trust copy, dish sections, or a clear takeout CTA.

## Block 2 — Secret sauce from reviews

The highest-rated review packet shows the core promise: **authentic Veracruz-style Mexican antojitos with takeout reliability, friendly people, fair prices, and unusually specific dish love.**

Repeated guest language:

- “authentic comida Veracruzana” / “Vera Cruz style Mexican food”
- “best tacos in Crystal Lake” / “best Mexican food in the area”
- “friendly,” “super friendly,” “nice workers”
- “clean,” “well maintained,” “modest storefront,” “hidden gem”
- “scratch made,” “fresh ingredients,” “not cheaping out on ingredients”
- “takeout only,” “carry out,” “packaged well,” “ready in 20 minutes”

Dish anchors to preserve:

- tacos: steak, pork, shrimp, carne asada, lengua
- empanadas
- sope Veracruzano
- garnachas
- flautas
- huarache de asado
- steak burrito / super burrito
- mole and atole specials
- churros

## Block 3 — Principle violations

1. **No owned conversion home.** The business has strong public proof, but Google still asks users to “Add website.”
2. **Proof is scattered.** Reviews, photos, menu hints, hours, address, and phone live across Google, Restaurantji, Restaurant Guru, Yelp snippets, Checkle, and menu directories.
3. **Regional identity is under-owned.** The Veracruz-style specificity is the differentiator, but it only appears in reviews and snippets.
4. **Takeout clarity is not centralized.** Reviews praise carryout packaging, speed, and value, but there is no first-party page to frame that as a reason to call/visit.
5. **Mobile guests get directory UX.** On mobile, discovery starts in aggregator interfaces rather than an owner-controlled path with phone, maps, hours, and menu highlights above the fold.

## Block 4 — Why rebuild

This is a high-confidence no-site pitch. A first-party page can do what the current public footprint cannot:

- put phone, directions, hours, and takeout CTA above the fold
- make `4.5 stars / 148 Google reviews` visible immediately
- tell the Veracruz-style / authentic antojitos story in owner-friendly language
- turn review-loved dishes into structured menu highlights
- reduce dependency on directory pages with stale/incomplete menus
- give Ethan/client a clean “before = no website, after = owned conversion page” demo

## Block 5 — Risks and guardrails

- **Do not invent online ordering.** Use call/maps/takeout CTAs unless a verified ordering provider is found.
- **Do not overclaim dine-in.** Reviews mention limited/no seating and an expansion/update; state dine-in only if confirmed, otherwise phrase as “call for current seating/takeout details.”
- **Do not fake full menu pricing.** Use highlights and verified public favorites until an official menu is captured.
- **Use real proof only.** Ratings, review quotes, hours, address, phone, and dish names must remain tied to captured Google/Restaurantji/Guru evidence.

## Locked fork outputs

- **Hero Lock 4-tuple:** `Authentic Veracruz-style Mexican antojitos in Crystal Lake` / `Tacos, empanadas, sope Veracruzano, huaraches, burritos, atole + mole specials` / `Call for takeout` / `Get directions to Coventry Plaza`.
- **Photography Tier verdict:** Tier B from public Google/Restaurant Guru photo inventory; enough food/menu proof for a warm build, but final fork should avoid pretending there is a large owned photo library.
- **Owner-Voice phrase bank:** “authentic comida Veracruzana,” “Vera Cruz style Mexican food,” “fresh made,” “hidden gem,” “best tacos in Crystal Lake,” “takeout done right,” “friendly people, clean place, great prices.”
- **External Trust signals:** Google `4.5 / 148 reviews`; Restaurantji `4.6 / 95 ratings`; Restaurant Guru Google-derived `4.6`, 41 photos, takeaway/credit cards/wheelchair accessible.
- **Mobile-failure screenshot set:** `current-site-google-listing-mobile-full.png`, `current-site-mobile-full.png`, `google-reviews-highest-2026-05-04.png`.

## Recommendation

Proceed to routing/build with `pepper-01`: warm casual Mexican/takeout-first, emphasizing Veracruz-style specificity, clean neighborhood value, and call/directions conversion. The pitch hook is strong: **Google has the proof, but Antojitos has no owned website to convert it.**
