# Next 15 Bad / No-Website Restaurant Leads

Date researched: 2026-05-01

Frameworks used:
- `../../../deep-research-on-website-criteria.md` revenue-leak rubric
- `../lead-fit-qualification.md` 7-check pre-build gate
- `../restaurant-website-strategic-principles.md` register / conversion rules
- `../site-router.md` template routing

## Existing queue status

The current build queue is effectively spent for "build now" purposes.

- Every named candidate from the current queue/addenda now has a `restaurant-website-system/sites/<slug>/` app folder: Black Bear, Da Baffone, Grounds, Cucina Bella, Vine & Plate, Galati's, Bistro Wasabi, Addison's, Port Edward, Cafe Olympic, Shirley's, VS House, and El Molino.
- The old non-built bench is mostly skips, holds, or catalog-gap material: The Annex is a managed-stack "doing enough" lead, Jude's needed manual verification before any build, El Molino remains strategically interesting but template-gap constrained, and the rest of the original batch contains closed/chain/register-mismatch skips.

This file is a fresh northwest-suburbs lead-generation pass focused on **bad or missing owned websites**, not on merely dated visual design.

## Method

Lead pool came from current public directory pages for McHenry County / nearby northwest suburbs, then each candidate's owned-site path was checked directly where a website surfaced. Priority favors the deep-research rubric's hard leaks:

- `D1`: dead, parked, expired, unsupported, or wrong canonical site.
- `C1`: PDF-only / image-only menu.
- `V3`: broken, buried, or wrong menu path.
- `D3`: missing public website path / only aggregator ordering.
- `C5`: strong public reputation but no proof on owned path.
- `I2/I3`: provider shell or managed stack used as the whole website.

Scores below are triage estimates, not an automated Places/API score. They are meant to rank build effort, not promise revenue.

## Prioritized top 15

| Rank | Lead | Area | Category | Website state | Primary signals | Score | Route | Build motion |
|---:|---|---|---|---|---|---:|---|---|
| 1 | Mary's Mexican Grill | Woodstock | Mexican | Official domain resolves to "Finish Setting Up Your Online Ordering" instead of a restaurant site | `D1`, `V2`, `V3`, `C5` | 82 | `bamzi-01` hue-swap / Latin gap | Build first: high rating, clear misconfigured owned path |
| 2 | Winestock Market & Lounge | Woodstock | Wine lounge / small plates | Own domain says "We're building our new online experience"; no menu, events, booking, or real conversion path | `D1`, `V3`, `V6`, `C5` | 78 | `bramble-01` wine-forward | Build: strong higher-check wine-bar angle |
| 3 | Sammy's Restaurant & Bar | Huntley | All-day diner / bar & grill | Directory shows no website; historically referenced domain does not resolve | `D1`, `D3`, `V3`, `C5` | 76 | `plate-01` downshifted | Build: no owned path for breakfast/lunch/dinner/bar |
| 4 | Dino's Pizza & Pasta | Lake in the Hills | Pizza / pasta / bar | Official site is a thin old shell with "AVIATOR LONDON" artifact and minimal crawlable content | `D1`, `V2`, `V3`, `C1` | 74 | `pepper-01` | Build: pizza/order lead with obvious site-rot proof |
| 5 | Restaurante Hondureño Bustillo Matute | McHenry | Honduran | No website listed; DoorDash/order directories stand in for owned presence | `D3`, `V3`, `C5` | 72 | `bamzi-01` adapted / Latin gap | Build after Latin guardrail: no owned story/menu for a distinctive cuisine |
| 6 | La Hacienda Mexican Restaurant | East Dundee | Mexican | "Website" is a Canva view that renders as unsupported in terminal/browser-like fetch | `D1`, `V3`, `C1`, `I3` | 71 | `bamzi-01` hue-swap | Build: Canva-as-website is a clean pitch hook |
| 7 | Antojitos Mexicanos La Fonda | Crystal Lake | Mexican | No website on Restaurantji; discovered `negocio.site` path returns Google 404 | `D1`, `D3`, `V3` | 69 | `bamzi-01` / `pepper-01` if takeout-first | Build: small but concrete no-site/404 case |
| 8 | Sofia's Place Restaurant | Island Lake | Mexican | Official/order domain resolves to "Finish Setting Up Your Online Ordering" setup page | `D1`, `V2`, `V3` | 68 | `bamzi-01` hue-swap | Build: same hard setup-page failure as Mary's, lower proof volume |
| 9 | Sushi U | Crystal Lake | Sushi / Japanese | SSL/certificate issue on normal fetch; homepage menu CTA links to PDF | `T6`, `C1`, `V3` | 66 | `bamzi-01` or light `qitchen-01` only if room supports it | Build: PDF menu + SSL trust issue |
| 10 | Golden Rolls | Woodstock | Sushi / Japanese | Official domain returns 406 / ModSecurity to normal crawl; directory still points to it | `T6`, `D1`, `V3` | 64 | `bamzi-01` | Conditional build: verify in real browser, but bot/crawl failure is pitchable |
| 11 | Tasty Bistro | Crystal Lake | Sushi / ramen / Thai / Chinese | Official domain lands on a JavaScript-only ordering hub with no usable content without JS | `V3`, `C6`, `D5`, `I3` | 61 | `bamzi-01` | Build if visual tone is coherent enough |
| 12 | Main Street Tacos | Wauconda | Mexican / tacos | No clear owned website surfaced; public presence appears to be aggregator/autogenerated pages | `D3`, `V3`, `C5` | 59 | `pepper-01` or `bamzi-01` | Prospect, but verify ownership/site absence before build |
| 13 | Tin Man's Pub | Fox River Grove | Pub / bar food | No website listed; Restaurantji shows order path only | `D3`, `V3`, `V7` | 55 | `plate-01` very casual or skip if sports-bar mismatch | Lower-priority: no-site, but register may be too casual/sports-bar |
| 14 | Mackey's Hideout | McHenry | Live music bar / roadhouse | Official site is old GoDaddy-style live-music archive; food/menu path is weak | `V3`, `V6`, `C6`, `I3` | 52 | `bramble-01` only if music/bar identity is honest | Conditional: pitch events/live-music path, not restaurant menu |
| 15 | Strawberry Moon | Wauconda | Martini bar / lounge | Weebly site exists but is low-trust and thin; no strong crawlable menu in first pass | `I3`, `V6`, `V8`, `C6` | 49 | `velvet-shaker-01` warmed down | Nurture: weaker hard leak, but nightlife/event conversion angle exists |

## Build-now shortlist

### 1. Mary's Mexican Grill - Woodstock

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/woodstock/marys-mexican-grill-/), [official domain](http://www.marysmexicangrillil.com/)
- **Why it wins:** Restaurantji lists 4.8 from 254 ratings, but the owned domain displays a setup screen: *Finish Setting Up Your Online Ordering*. That is a hard D1/V3 failure, not a taste opinion.
- **Pitch sentence:** "Your reviews already tell people the food works; the website path currently tells them your online ordering is unfinished. I mocked a version where menu, order, hours, and the family Mexican story are live in the first screen."
- **Template:** `bamzi-01` hue-swap, with Mexican/Latin guardrails. Do not over-premium it.
- **Risk:** Dedicated Mexican template gap remains. Keep it bright, food-forward, and family/local, not dark ceremonial.

### 2. Winestock Market & Lounge - Woodstock

- **Sources:** [official placeholder](https://shopwinestock.com/), [Real Woodstock profile](https://realwoodstock.com/locations/winestock-market-lounge/), [Restaurantji](https://www.restaurantji.com/il/woodstock/winestock-market-and-lounge-/)
- **Why it wins:** The business has a wine/lounge/small-plates concept and the official domain literally says a new online experience is being built. It has no real menu, events, private gathering path, wine-club/newsletter path, or reservation/visit routing.
- **Pitch sentence:** "You already have the wine-room experience; the website is still a coming-soon note. I mocked the missing path: wine, small plates, events, and group nights in one mobile-ready page."
- **Template:** `bramble-01`, adjusted wine-forward. Avoid cocktail-overclaiming.
- **Risk:** Catalog has no dedicated modern wine-bar template. Bramble is acceptable if the photos support warmth and community.

### 3. Sammy's Restaurant & Bar - Huntley

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/huntley/sammys-bar-and-grill-/), [Tripadvisor](https://www.tripadvisor.com/Restaurant_Review-g36156-d7259490-Reviews-Sammy_s_Restaurant_Bar-Huntley_Illinois.html), old referenced domain `sammysbarandgrill.com` failed DNS locally.
- **Why it wins:** Public pages show a real all-day local diner/bar with breakfast, lunch, dinner, karaoke/live music signals, and no reliable owned domain.
- **Pitch sentence:** "You are not just a bar or just breakfast; guests need breakfast, burgers, live music, hours, and directions in one owned path instead of directory pages."
- **Template:** `plate-01`, simplified for old-school diner/bar. Avoid upscale bistro treatment.
- **Risk:** Sports-bar/diner register can be easy to oversell. Keep it plain, useful, and local.

### 4. Dino's Pizza & Pasta - Lake in the Hills

- **Sources:** [official site](https://www.dinospizzalith.com/), [Restaurantji](https://www.restaurantji.com/il/lake-in-the-hills/dinos-pizza-and-pasta-/), [NW Herald local profile](https://local.nwherald.com/lake%20in%20the%20hills-il/dinos-pizza-and-pasta-847-658-3300)
- **Why it wins:** Official site is extremely thin, has an irrelevant "AVIATOR LONDON" artifact, and does not behave like a modern pizza/order/menu site. Public sources say the restaurant has been around for years and supports dine-in, pickup, delivery, and bar seating.
- **Pitch sentence:** "The pizza reputation is local and real; the website still looks like an unfinished template. I rebuilt it around order, menu, catering, hours, and the family pizza story."
- **Template:** `pepper-01`.
- **Risk:** They may already rely on DoorDash/Grubhub/UberEats. Preserve those links; do not pitch a rip-and-replace.

### 5. Restaurante Hondureño Bustillo Matute - McHenry

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/mchenry/restaurante-hondure-o-bustillo-matute-/), [DoorDash listing](https://www.doordash.com/store/restaurante-hondure%C3%B1o-bustillo-matute-mchenry-37303955/), [USA Restaurants profile](https://usarestaurants.info/explore/united-states/illinois/mchenry-county/nunda-township/mchenry/restaurante-hondureno-bustillo-matute-779-244-5791.htm)
- **Why it wins:** High-rating, distinctive Honduran cuisine, but no owned site path. DoorDash/menu directories are carrying the entire pre-visit experience.
- **Pitch sentence:** "People can order through marketplaces, but there is no owned place to understand the Honduran menu, hours, photos, and family story before they choose."
- **Template:** `bamzi-01` adapted carefully, or hold for a dedicated Latin casual template if the visual tone does not fit.
- **Risk:** Template fit. This is not sushi/pan-Asian; do not let `bamzi-01`'s default identity leak through.

## Remaining ranked notes

### 6. La Hacienda Mexican Restaurant - East Dundee

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/east-dundee/el-faro-restaurant-/), [Canva "website"](https://www.canva.com/design/DAFiva54Na0/0FUdTRi1uYaiwKx25OqRew/view), [RoostCafe menu profile](https://www.roostcafeandbistro.com/la-hacienda-mexican-restaurant-60118/)
- **Evidence:** Restaurantji points the Website button to Canva. Fetching it returns Canva's unsupported-client screen, meaning the owned path is effectively not a restaurant website.
- **Template:** `bamzi-01` hue-swap, or hold for Latin casual if photos reject the template.

### 7. Antojitos Mexicanos La Fonda - Crystal Lake

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/), [MapQuest profile showing old negocio.site URL](https://www.mapquest.com/us/illinois/antojitos-mexicanos-la-fonda-430000570), checked `antojitos-mexicanos-la-fonda.negocio.site` and it returns 404.
- **Evidence:** No current website on Restaurantji; old Google Business/negocio style path is dead.
- **Template:** `bamzi-01` if dine-in story exists; `pepper-01` if the real motion is takeout-first.

### 8. Sofia's Place Restaurant - Island Lake

- **Sources:** [official/order domain](http://www.sofiasplacerestaurantil.com/), [Restaurantji city listing](https://www.restaurantji.com/il/island-lake/)
- **Evidence:** Official URL resolves to a Fox Ordering setup page: "Your restaurant is almost ready to start taking direct online orders." That is a hard owned-path failure.
- **Template:** `bamzi-01` hue-swap.

### 9. Sushi U - Crystal Lake

- **Sources:** [official site](https://sushiucrystallake.com/), [Restaurantji](https://www.restaurantji.com/il/crystal-lake/sushi-u-/)
- **Evidence:** Fetching through the HTTP canonical path exposed an SSL certificate problem before `-k`; the homepage's menu CTA points to `images/menu26.3.11.pdf`. That is both trust friction and PDF-only menu friction.
- **Template:** `bamzi-01` by default. Only use `qitchen-01` if photos prove a restrained/special-occasion register.

### 10. Golden Rolls - Woodstock

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/woodstock/golden-rolls-/), [official domain](http://www.goldenrollssushi.com/)
- **Evidence:** Official domain returned `406 Not Acceptable` / ModSecurity to a normal browser-like request. Verify with a real browser before outreach, but the crawl failure is enough to keep it on the bench.
- **Template:** `bamzi-01`.

### 11. Tasty Bistro - Crystal Lake

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/crystal-lake/tasty-bistro-/), [official domain](http://www.tastybistrocl.com/)
- **Evidence:** Official domain resolves to an `orderonlinehub.com` JavaScript-only order app. Without JS, the page exposes almost no restaurant content.
- **Template:** `bamzi-01`, but verify the actual room/photos because the cuisine stack is broad.

### 12. Main Street Tacos - Wauconda

- **Sources:** [Restaurantji city listing](https://www.restaurantji.com/il/wauconda/), [RestaurantGuru](https://restaurantguru.com/Main-Street-Tacos-Lake-Barrington), [Groupon profile](https://www.groupon.com/biz/wauconda-il/main-street-tacos)
- **Evidence:** No clear owned restaurant domain surfaced in search; public presence appears to be directories and generated pages. Strong enough for lead-listing, but verify no first-party domain in Google Maps before building.
- **Template:** `pepper-01` for fast taco/order motion or `bamzi-01` if dine-in photos support a stronger brand.

### 13. Tin Man's Pub - Fox River Grove

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/fox-river-grove/tin-mans-sports-pub-/), [Wheree profile](https://tin-mans-pub.wheree.com/)
- **Evidence:** No website listed on Restaurantji, only order path. The concept is casual pub/pool/sports-bar, so the no-site leak is real but the template fit is weaker.
- **Template:** `plate-01` stripped down, or skip if photos read too sports-bar/corner-bar.

### 14. Mackey's Hideout - McHenry

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/mchenry/mackeys-hideout-/), [official site](http://www.mackeyshideout.com/)
- **Evidence:** Official site is heavily weighted toward live-music archive pages and looks like an old GoDaddy-style site. Menu/food/drink conversion is under-surfaced.
- **Template:** `bramble-01` only if the live-music roadhouse identity is honest. Otherwise treat as a lower-probability bar lead.

### 15. Strawberry Moon - Wauconda

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/wauconda/strawberry-moon-bar-/), [official Weebly site](https://strawberrymoonmartinisandmore.weebly.com/)
- **Evidence:** Weebly site exists, but it is thin, dated, and low-trust for a martini/event lounge. The issue is softer than the top ten because the site is not dead.
- **Template:** `velvet-shaker-01` warmed down, with event/private-party path. Do not oversell as a fine cocktail destination unless photos support it.

## Excluded during this pass

- **River Street Tavern** - official site has real HTML menus, events, private events, and hours. Not a bad-site lead.
- **El Norteño** - Wix footprint, but the site has menu, chefs/catering, delivery, and contact. Not hard enough.
- **Memo's Tacos Restaurant** - current owned site exists with Cary + Vernon Hills locations and order CTAs.
- **That's Amore Pizza** - functioning WordPress-style site with menu, catering, order, and contact.
- **The Patroons Mexican Restaurant** - provider-style site, but it has order/menu/about/contact and is less broken than the top 15.
- **Happy Jack's Submarines** - `s4shops` provider site is generic, but it is live and at least exposes menu/order/about.
- **River Street / Foxy / Martini Room style entertainment bars from prior batches** - only include if a dedicated entertainment-lounge template exists or if the pitch is explicitly event-conversion, not restaurant redesign.

## Recommended next action

Build the first 3 only if we want maximum close odds from hard website failures:

1. **Mary's Mexican Grill** - strongest direct owned-path failure plus high review proof.
2. **Winestock Market & Lounge** - strongest higher-check concept with a literal placeholder domain.
3. **Sammy's Restaurant & Bar** - strongest no-owned-domain all-day local restaurant.

If we want category variety for the portfolio instead of strict close odds:

1. Mary's Mexican Grill - Latin / family restaurant.
2. Winestock - wine lounge / small plates.
3. Dino's Pizza & Pasta - pizza/order.
4. Sushi U - sushi/PDF-menu.
5. Sammy's - diner/bar.
