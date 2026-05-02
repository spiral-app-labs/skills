# Wide-Net A-Tier Bad / No-Website Restaurant Leads

Date researched: 2026-05-01

This file supersedes the earlier northwest-only pass at
`next-15-bad-no-site-leads-2026-05-01.md` for **build prioritization**. The
local pass is still useful as a nurture bench, but it was too geographically
polite and produced too many "technically weak, strategically eh" prospects.

Frameworks used:
- `../../../deep-research-on-website-criteria.md` revenue-leak rubric
- `../lead-fit-qualification.md` 7-check pre-build gate
- `../restaurant-website-strategic-principles.md` business-model routing rules
- `../site-router.md` template routing

## Search Scope

Wider geography screened:

- Fox Valley / west suburbs: Geneva, Batavia, St. Charles, Aurora, Naperville,
  Wheaton, Glen Ellyn, Elmhurst, Downers Grove, Lombard, Lisle.
- Affluent west / near-west: Oak Park, Forest Park, Hinsdale, Western Springs,
  Clarendon Hills, Oak Brook, La Grange.
- Northwest / north suburbs: Arlington Heights, Palatine, Schaumburg,
  Barrington, Libertyville, Mundelein, Grayslake, Lake Zurich, Long Grove,
  Wood Dale, Itasca, Park Ridge.
- North Shore / lakefront: Highwood, Highland Park, Wilmette, Winnetka,
  Glencoe, Lake Forest, Deerfield, Northbrook.
- Outer / destination: Waukegan, Gurnee, Lake Geneva, Rosemont.

Screened:

- 1,372 current Restaurantji city-list candidates after removing obvious chains.
- 1,093 owned-site links / directory-provided website paths were audited for
  hard failures, thin JS-only surfaces, PDF/menu friction, provider shells,
  dead DNS, 404s, account suspension, and "coming soon" pages.
- High-ranking no-website candidates were checked by direct search before being
  promoted. Examples demoted after search: Anjir now has a real owned site,
  Que Bola Cuban Cafe now has a real owned site, Hemmingway's Bistro has a
  newer working hyphenated domain even though Restaurantji pointed to an old
  blank one.

Priority favors the deep-research rubric's hard leaks:

- `T6`: broken / dead / suspended / 404 / DNS-failed key path.
- `D3`: no owned website surfaced; directory/order pages carry the experience.
- `C1`: PDF-only or PDF-primary menu.
- `C5`: strong public reputation but no equivalent proof on the owned path.
- `V2/V3`: order/menu path exists but the website does not explain the place.
- `V6`: private dining, catering, events, or wine-bar opportunity is not routed.
- `I2/I3`: order app, marketplace, or provider shell is acting as the website.

## Stronger Top 15

| Rank | Lead | Area | Category | Website state | Primary signals | Score | Route | Build motion |
|---:|---|---|---|---|---|---:|---|---|
| 1 | Pa Lian Burmese Restaurant | Wheaton | Burmese / halal / vegan-friendly | Restaurantji website link is a `dine.online` order app; non-JS/crawl view is only "You need to enable JavaScript" | `D3`, `I3`, `V3`, `C5` | 89 | `bamzi-01` adapted | Build first: rare cuisine, huge reputation, no real owned story/menu path |
| 2 | Gaylord Fine Indian Cuisine | Schaumburg | Indian fine dining / buffet / events | Historic official domain resolves to `Account Suspended`; order-menu site exists separately | `T6`, `D1`, `V3`, `C5`, `V6` | 86 | `bamzi-01` or `labrisa-01` if banquet-led | Build if photos support upscale Indian; pitch the broken canonical domain |
| 3 | Ordo | Highland Park | Russian / Uzbek / Middle Eastern | Site exposes template leftovers, hidden "Coming Soon" text, fake cart/menu artifacts, and PDF bar menu | `D1`, `C1`, `V3`, `C6`, `I3` | 84 | `plate-01` / `bamzi-01` adapted | Build: high-check North Shore concept with unusually messy owned site |
| 4 | Big Ed's BBQ & Bar | Waukegan | BBQ / bar / catering | Official site is JS-only to non-rendered clients; public press/reputation has to carry the story elsewhere | `I3`, `C5`, `V3`, `V6` | 82 | `plate-01` rugged / BBQ gap | Conditional build after browser QA: reputation is strong enough to justify it |
| 5 | Cafe Dacha | Highland Park | Ukrainian / Eastern European | Official site resolves to a sparse contact page with reservation/order links and PDF menu; little owned story | `C1`, `V3`, `C5`, `C6` | 81 | `gusto-01` softened or `plate-01` | Build: distinctive, high-trust cuisine, but current site hides the restaurant |
| 6 | Polka Dot Restaurant | Lake Zurich | Polish | Official site says "New Website Coming Soon" and punts to order/Facebook | `D1`, `V2`, `V3`, `C5` | 78 | `plate-01` heritage-casual | Build: hard placeholder page and clear catering/lunch/dinner path |
| 7 | Patina Wine Bar | Park Ridge | Wine bar / tapas / cocktail | Official site exposes almost no crawlable content: Park Ridge, McHenry Riverwalk, wine club only | `C6`, `V3`, `V6`, `I3` | 77 | `bramble-01` wine-forward | Build: better economics than most no-site leads; sell wine club/events routing |
| 8 | Papa Marcos Restaurant | Waukegan | Middle Eastern / Mediterranean | Official Square/Weebly site has blank title and no crawlable restaurant content | `I3`, `C6`, `V3`, `C5` | 76 | `bamzi-01` adapted | Build after photo check: strong reputation and no real owned content path |
| 9 | E&S Fish Company | St. Charles | Seafood market / restaurant | Public listings cite `esfish.co`, but the domain currently fails DNS resolution | `T6`, `D1`, `D3`, `V3` | 75 | `labrisa-01` downshifted / seafood gap | Build: seafood + market + reservations needs a working owned front door |
| 10 | Egg House | Lombard / multi-location | Breakfast / brunch | Owned site has locations/order links but no visible menu and a "Location Coming Soon" artifact | `V3`, `I3`, `C5` | 72 | `latte-01` or `plate-01` | Build if menu proof is findable; multi-location brunch has better upside |
| 11 | Sushi Yoru | Lake Zurich | Sushi / Japanese | No clear owned site surfaced; search results fall back to Tripadvisor/menu PDFs | `D3`, `V3`, `C5` | 71 | `bamzi-01` | Build after visual check: high rating, simple no-owned-site sushi pitch |
| 12 | Daruma Restaurant | Schaumburg | Japanese / sushi / seafood | Restaurantji lists no website; search returns unrelated / generated pages, not a clear owned site | `D3`, `V3`, `C5` | 70 | `bamzi-01` or `qitchen-01` only if room supports it | Build after manual ownership check: good concept, but avoid wrong-domain confusion |
| 13 | Bosna Grill | Des Plaines | Bosnian / Balkan | No owned website surfaced; public presence is directory/menu pages | `D3`, `V3`, `C5` | 69 | `plate-01` adapted | Prospect: distinctive cuisine, but likely casual; do not over-premium |
| 14 | Da Local Boy Cafe | Highwood | Hawaiian / cafe / food-truck roots | Directory website points to `dalocalboy.com`, which returns 404 | `T6`, `D1`, `V3`, `C5` | 68 | `saladify-01`/`plate-01` hybrid | Conditional: hard failure, but verify room/operation before building |
| 15 | Ttowa Korean Bistro | Arlington Heights | Korean bistro | Wix site is thin and menu is PDF-based; owned story exists but is underpowered | `C1`, `V3`, `C5` | 66 | `bamzi-01` | Lower A-tier: stronger than the NW leftovers, but not as broken as top 10 |

## Build-First Shortlist

### 1. Pa Lian Burmese Restaurant - Wheaton

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/wheaton/pa-lian-burmese-restaurant-/), [current website/order path](https://palianburmeserestaurant.dine.online/), [Tripadvisor](https://www.tripadvisor.com/Restaurant_Review-g36877-d13807694-Reviews-Pa_Lian_Burmese_Restaurant-Wheaton_DuPage_County_Illinois.html)
- **Why it wins:** Restaurantji shows 4.9 from 484 ratings and the cuisine is rare enough to be memorable. The website path is not a restaurant website; non-rendered users/crawlers get only a JS app shell.
- **Pitch sentence:** "You already have the reputation and a cuisine people search for; the current web path only says 'Order Online.' I mocked the missing owned page: tea leaf salad, Burmese curries, halal/vegan cues, hours, and order in one mobile-first front door."
- **Template:** `bamzi-01`, cuisine-adapted. Keep it warm and specific; do not make it generic pan-Asian.
- **Risk:** Needs photo/review-tone check before fork so we do not over-polish a casual BYOB room.

### 2. Gaylord Fine Indian Cuisine - Schaumburg

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/schaumburg/gaylord-fine-indian-cuisine-/), [official domain](https://gaylordil.com/), [active order/menu path](https://www.gaylordfineindian.com/)
- **Why it wins:** The canonical historic domain resolves to `Account Suspended`. There is a separate order-menu site, but that does not solve the brand problem for a long-running fine Indian restaurant with events/buffet/private-dining potential.
- **Pitch sentence:** "Your food still has a loyal audience, but the main website path is literally suspended. I mocked the version where guests see the Schaumburg room, buffet, menu, events, and online order path without hitting a broken domain."
- **Template:** `bamzi-01` if the room reads accessible-upscale; consider `labrisa-01` only if banquet/private dining is the primary pitch.
- **Risk:** Multi-location/history may mean ownership complexity. Verify who controls `gaylordil.com` before outreach.

### 3. Ordo - Highland Park

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/highland-park/ordo-/), [official site](https://ordorestaurant.com/)
- **Why it wins:** Strong North Shore geography, distinctive Russian/Uzbek/Middle Eastern positioning, but the site exposes template debris: "Coming Soon," fake cart/menu examples, parallax/carousel placeholders, and a PDF bar menu.
- **Pitch sentence:** "The restaurant is distinctive; the site still shows template scaffolding. I mocked the finished version where the food, room, reservations, bar, and private-party path are the first things guests see."
- **Template:** `plate-01` if neighborhood-modern; `bamzi-01` if food/color/photos support a stronger cuisine-forward identity.
- **Risk:** Confirm current ownership and menu before building; do not use the site's dummy item names as facts.

### 4. Big Ed's BBQ & Bar - Waukegan

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/waukegan/big-eds-bar-and-grill-/), [official site](https://bigedsllc.com/), [Visit Lake County profile](https://www.visitlakecounty.org/BigEdsBBQ), [Lake County News-Sun profile](https://www.lakecountynewsdispatch.com/2025/09/09/big-eds-barbeque-in-waukegan/)
- **Why it wins:** This is the first wide-net candidate with both strong restaurant proof and a broken-enough owned path. Public sources carry the story better than the site does; the official site exposes only a JS shell to non-rendered clients.
- **Pitch sentence:** "Big Ed's already has the BBQ reputation; the website should make burnt ends, catering, room rental, hours, and order intent visible without depending on outside profiles."
- **Template:** `plate-01` with a rugged BBQ treatment. No fine-dining lift.
- **Risk:** Browser-rendered site may be acceptable to a normal user. Treat this as conditional until desktop/mobile screenshots confirm the issue.

### 5. Cafe Dacha - Highland Park

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/highland-park/cafe-dacha-2/), [official site](https://www.cafedacha.com/), [Enjoy Highland Park profile](https://www.enjoyhighlandpark.com/dining-1/cafe-dacha)
- **Why it wins:** Distinctive Eastern European/Ukrainian cuisine in a strong market. The official site is mostly a contact page with reservation/order links and a PDF menu, while the city profile does a better job describing the actual food.
- **Pitch sentence:** "The city profile tells the story better than the website. I mocked the version where borscht, pierogi, kebabs, honey cake, reservations, pickup, and the Highland Park address are all visible before the PDF."
- **Template:** `gusto-01` softened if the photos feel warm/European; otherwise `plate-01`.
- **Risk:** Current site technically has CTAs, so the pitch must focus on hidden story/menu, not "your site is dead."

## Remaining Ranked Notes

### 6. Polka Dot Restaurant - Lake Zurich

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/lake-zurich/polka-dot-restaurant-/), [official site](https://polkadotrestaurant.com/)
- **Evidence:** The owned page says "New Website Coming Soon..." and links out to order/Facebook. Great hard-leak pitch for Polish lunch/dinner/drinks/catering.
- **Template:** `plate-01`, heritage-casual.

### 7. Patina Wine Bar - Park Ridge

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/park-ridge/patina-wine-bar-/), [official site](https://patinawinebar.com/)
- **Evidence:** Current site exposes only location links and wine club text to a crawler. A wine bar should route menu, wine club, events, group nights, and reservations/visit intent.
- **Template:** `bramble-01`, wine-forward rather than cocktail-forward.

### 8. Papa Marcos Restaurant - Waukegan

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/waukegan/papa-marcos-restaurant-/), [official site](https://www.papamarcosrestaurant.com/), [NetWaiter profile](https://papamarcosgrillandkabob.netwaiter.com/)
- **Evidence:** Official site is a Square/Weebly shell with blank title and no crawlable restaurant content. Restaurantji lists 4.9 from 351 ratings.
- **Template:** `bamzi-01` adapted, or `plate-01` if photos show a straightforward counter-casual room.

### 9. E&S Fish Company - St. Charles

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/st.-charles/e-s-fish-company-/), [MapQuest profile showing `esfish.co`](https://www.mapquest.com/us/illinois/e-s-fish-company-462872610), [Enjoy Illinois profile](https://www.enjoyillinois.com/explore/listing/e-and-s-fish-company-inc/)
- **Evidence:** Restaurantji does not show a website. Other public listings cite `esfish.co`, but direct DNS resolution failed locally. Seafood market plus restaurant plus reservations is a strong owned-site use case.
- **Template:** `labrisa-01` downshifted if photos support coastal/seafood; otherwise `plate-01`.
- **Risk:** Need a real-browser/DNS recheck before build; if `esfish.co` recovers, score drops unless the site is still weak.

### 10. Egg House - Lombard / Wood Dale / Arlington Heights

- **Sources:** [Restaurantji Lombard](https://www.restaurantji.com/il/lombard/egg-house-/), [official site](https://www.egghouse-cafe.com/)
- **Evidence:** Multi-location breakfast brand with a real site, but no visible menu path in the crawl, order links carry conversion, and the page still shows a "Location Coming Soon" artifact.
- **Template:** `latte-01` if cafe-forward; `plate-01` if full brunch restaurant.
- **Risk:** Not as broken as top 9. Build only if menu/photos support a clear upgrade.

### 11. Sushi Yoru - Lake Zurich

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/lake-zurich/sushi-yoru-/), [Tripadvisor](https://www.tripadvisor.com/Restaurant_Review-g36237-d13806040-Reviews-Sushi_Yoru-Lake_Zurich_Lake_County_Illinois.html)
- **Evidence:** High Restaurantji score and no clear owned site surfaced. Public results fall back to Tripadvisor and menu PDFs.
- **Template:** `bamzi-01`.
- **Risk:** Verify there is no Facebook/Google-site official path before spending build time.

### 12. Daruma Restaurant - Schaumburg

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/schaumburg/daruma-restaurant-/), [Bipper profile](https://bippermedia.com/us/rs/daruma-restaurant-schaumburg/)
- **Evidence:** Restaurantji lists no website. Search results are noisy and include unrelated/generated Daruma domains, which creates wrong-entity risk.
- **Template:** `bamzi-01` unless photos prove a more restrained Japanese room.
- **Risk:** Manual ownership/entity verification required before build.

### 13. Bosna Grill - Des Plaines

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/des-plaines/bosna-grill-/), [Bipper profile](https://bippermedia.com/us/rs/bosna-grill/), [menu directory](https://bosnagrill.restaurants-us.com/menu)
- **Evidence:** No owned website surfaced in current search; public visibility is directory/menu-page driven. Distinctive Bosnian/Balkan cuisine keeps it above generic diners.
- **Template:** `plate-01` adapted.
- **Risk:** Likely casual. Keep pitch practical: menu, hours, photos, directions, not upscale reinvention.

### 14. Da Local Boy Cafe - Highwood

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/waukegan/dalocalboy-/), [official domain](https://www.dalocalboy.com/)
- **Evidence:** Directory-provided official domain returns 404. The concept is distinctive, but the operation may be casual / food-truck-adjacent.
- **Template:** `saladify-01` if bright casual / bowls; `plate-01` if cafe plate-lunch.
- **Risk:** Verify the physical room and operating model before building.

### 15. Ttowa Korean Bistro - Arlington Heights

- **Sources:** [Restaurantji](https://www.restaurantji.com/il/arlington-heights/ttowa-korean-bistro-/), [official site](https://www.ttowakoreanbistro.com/)
- **Evidence:** The owned site has a family-owned story and CTAs, but the menu path is PDF-based and the page is thin. Stronger than the previous local leftovers, weaker than the hard-failure group.
- **Template:** `bamzi-01`.
- **Risk:** Current site is not dead. Lead with PDF/menu and under-told family story, not a generic redesign critique.

## Demoted After Wider Verification

- **Anjir Halal Uzbek Cuisine** - initially looked no-site from Restaurantji, but a current owned site surfaced at [anjir.restaurant](https://www.anjir.restaurant/). Remove from bad/no-site priority.
- **Que Bola Cuban Cafe** - initially looked no-site from Restaurantji, but a current owned site surfaced at [quebolacubancafe.com](https://quebolacubancafe.com/). Remove from bad/no-site priority.
- **Hemmingway's Bistro** - Restaurantji pointed to a blank old domain, but current search surfaces a newer working site at [hemmingways-bistro.com](https://hemmingways-bistro.com/). Not a bad-site lead.
- **Smile Burger** - direct scripted fetch returned 404, but rendered/current web access shows a functioning site with menu/order/location. Remove.
- **Pisces Cafe Boba & Tea** - direct scripted fetch returned 404, but rendered/current web access shows a functioning site with hours/order/contact. Remove.
- **Woodfire Tavern** - direct scripted fetch suggested an expired Squarespace path, but rendered/current web access shows a working full site. Remove.
- **U Gazdy Polish Restaurant** - first crawl was thin, but search exposed a richer contact/FAQ/order path. Keep as low-priority watchlist, not A-tier.
- **Nonna Silvia's, Rustico, THASSOS, Maya Del Sol, MORA Oak Park** - all have PDF/menu friction, but they have functioning owned sites with real CTAs. Useful later for PDF-menu campaigns, not the first build queue.

## Recommended Next Builds

Strict close-odds order:

1. **Pa Lian Burmese Restaurant** - rare cuisine + huge reputation + no real owned site.
2. **Gaylord Fine Indian Cuisine** - account-suspended official domain + higher-ticket/event angle.
3. **Ordo** - strong market + visibly unfinished/template-contaminated site.
4. **Cafe Dacha** - high-value distinctive cuisine + PDF/contact-only owned path.
5. **Polka Dot Restaurant** - explicit "New Website Coming Soon" owned-site failure.

Portfolio-variety order:

1. Pa Lian - Burmese / Asian.
2. Gaylord - Indian / fine dining / banquet.
3. Cafe Dacha - Ukrainian / Eastern European.
4. Polka Dot - Polish / catering.
5. Patina Wine Bar - wine bar / tapas.
6. E&S Fish Company - seafood market / restaurant.
7. Big Ed's - BBQ / catering / reputation-heavy.
