# Next 5 McHenry County Lead Audits - Deep-Research Pass

Date: 2026-04-28

Frameworks used:
- `../../../deep-research-on-website-criteria.md` revenue-leak rubric
- `../lead-fit-qualification.md` 7-check pre-build gate
- `../restaurant-website-strategic-principles.md` register / conversion rules
- `../site-router.md` template routing

Vertical priority applied:

Italian -> bistro -> steakhouse -> seafood -> wine bar -> cocktail lounge -> upscale Mexican/Latin -> coffee -> pizza/takeout -> diner.

Interpretation: vertical priority sets the default order, but direct revenue leaks and register honesty still govern the build decision. These five candidates are separate from already-built or already-audited leads: Black Bear Bistro, Da Baffone, Cucina Bella, Vine & Plate, and Grounds Coffee Bar.

## Final top 5

### 1. Galati's Hideaway - Cary

- **Vertical:** Italian / pizza / banquets.
- **Current site:** `https://galatis.com/`
- **Decision:** Build next after the existing Vine & Plate / Grounds bench.
- **Likely template:** `pepper-01` with a casual Italian / pizza / party-room content fork. `plate-01` is the fallback if the build needs to foreground dining-room + banquets over order/deals.
- **Lead tier:** A-/B+ by direct leak, promoted by Italian priority but capped by casual/takeout register.

#### Live-site findings

- Homepage and internal links are live. Header response shows GoDaddy Website Builder / DPS.
- Navigation repeats heavily across desktop/mobile and includes multiple overlapping menu/order paths.
- Core menu has a page labeled `Our Complete Menu ( PDF)` and a separate `Catering ( PDF)` path. The "PDF" pages are wrapped by the site, but the naming and content structure still encode print-document behavior instead of a clean mobile menu.
- Online ordering is available through Heartland (`galatis.hrpos.heartland.us/menu`); private party inquiry links route through an old `flavorplate.com` protected redirect.
- Banquet, catering, pizza packages, brunch, bar/restaurant, and gaming/sports-bar cues all compete for top-level attention.
- Schema-like terms are present in crawl output, but verify `Restaurant` / `LocalBusiness` JSON-LD before pitch.

#### Deep-research signals

- `C1` partial: menu/catering are PDF-labeled and print-document-framed; an HTML menu exists in scattered category pages but the primary path is confusing.
- `V2/V5` order path exists, but the site does not make the Heartland handoff feel like a clean primary action.
- `V3` menu experience is fragmented across many navigation items.
- `V6` events/banquets exist, but the inquiry path is old and trust-reducing.
- `V7` mobile quick-action clarity likely needs improvement because CTA choices are duplicated and crowded.
- `I3` GoDaddy site stack; `I2` is not a direct issue if Heartland is first-party/POS-owned.

#### Register check

Galati's is not a romantic trattoria lead. It is casual Italian-American with pizza, parties, catering, bar, and sports/gaming adjacency. The safe register is order-friendly, family-casual, and event-capable. Do not use `gusto-01`: it would oversell the room and trigger the Walnut failure mode.

#### Template decision

- **Choose `pepper-01`** if the pitch leads with pizza/order/catering velocity.
- **Fallback `plate-01`** if the pitch leads with party room, full menu, and neighborhood dining.
- **Reject `gusto-01`** because date-night heritage Italian would misrepresent the actual operation.

#### Personalization plan

- Hero: "Cary's Italian hideaway for pizza, parties, and family dinners."
- CTA strategy: `Order Online`, `Plan a Party`, `View Menu`; keep phone as secondary.
- Menu treatment: convert pizza, entrees, sandwiches, gluten-free, kids, and catering into real HTML sections; keep PDF as print fallback only.
- Trust/proof: use family/local longevity, banquet capacity, catering breadth, and order convenience instead of fine-dining proof.
- Provider links to preserve: Heartland order link, phone, private-party inquiry, gift cards if current.
- Visual direction: bright, pizza-forward, family casual; avoid candlelit date-night styling.

#### Why create a new website?

Galati's has real commercial paths - ordering, catering, banquets, party rooms - but the current site spreads them across a crowded GoDaddy navigation and PDF-labeled menu pages. A `pepper-01` fork can make the site behave like a modern order-and-events engine instead of a document library.

**Pitch sentence:** "You already have online ordering, catering, and private parties; the website just makes guests work too hard to choose between them. I mocked the paths so pizza, catering, and party inquiries are clear in the first few seconds."

#### Build verdict

**Ready to build, with guardrail:** build casual/order/events. Do not upscale it.

---

### 2. Addison's Steakhouse - McHenry

- **Vertical:** Steakhouse.
- **Current site:** `https://www.addisonssteakhouse.com/`
- **Decision:** Conditional build after one photo/review sanity pass.
- **Likely template:** `1776-redesign-01` warmed down for a family-owned steakhouse. `varro-01` is a fallback if the build leans serious steak/seafood institution.
- **Lead tier:** B+ direct leak, but review-tone risk lowers confidence.

#### Live-site findings

- Homepage and menu are live on Wix; crawl output exposes "Mysite" page title language and heavy Wix footprint.
- Menu page is real HTML and contains detailed pricing/content: starters in the $17-$23 range, seafood/steak positioning, wine list, dessert list, specials, and reservation navigation.
- Header/nav includes `MENU`, `RESERVATIONS`, `CONTACT & LOCATION`, and `Order Online`, but several links in crawl resolve back to the homepage URL rather than a distinct booking/order destination.
- Public snippets show mixed reputation: Tripadvisor lists 3.8 from 33 reviews, Restaurantji lists 3.9 from 270 ratings, while other aggregators report higher Google-scale ratings. Do not lead with "best steakhouse" proof unless verified from a stronger source.
- Site has `schema.org` and restaurant terms, but verify complete `Restaurant` JSON-LD before pitch.

#### Deep-research signals

- `V1` likely: reservation nav exists, but the route appears weak/ambiguous in crawl and may not be a true booking flow.
- `V5` likely: provider capability is unclear; preserve any active Toast/Tock/order/reservation flow if discovered.
- `C5` mixed: public reputation exists but is uneven, so trust proof should be selective and owner-confirmed.
- `V3` pass: HTML menu is strong and should be preserved, not replaced by a PDF.
- `D5` partial: schema terms exist, but full structured data should be validated.
- `I3` Wix footprint, with possible Toast/Tock/order references.

#### Register check

The menu supports $$-$$$ steakhouse positioning, but review tone is not uniformly premium. The design should elevate the current experience without promising Morton's-level polish. The safe register is "neighborhood steakhouse with seafood and private-event warmth," not destination luxury.

#### Template decision

- **Choose `1776-redesign-01`** with a warmer, less ceremonial steakhouse treatment.
- **Fallback `varro-01`** if photos confirm a darker, serious institutional dining room.
- **Reject `alinea-01` / `qitchen-01`** because they overshoot by multiple registers.

#### Personalization plan

- Hero: "Family-owned McHenry steakhouse with seafood, wine, and a modern twist."
- CTA strategy: `Reserve a Table`, `View Dinner Menu`, `Call`; verify whether reservation is provider, form, or phone.
- Menu treatment: preserve HTML menu depth; restructure into Steakhouse Classics, Seafood, Starters, Wine, Dessert, Specials.
- Trust/proof: use family-owned story, menu depth, event/private-dining usefulness, and selected positive review themes. Avoid hard rating claims unless re-verified.
- Provider links to preserve: reservation/order links if active; phone and contact/location.
- Visual direction: warm steakhouse, polished but not black-tie; use wood, brass, cream, dark green/navy or amber accents.

#### Why create a new website?

The menu has the substance of a serious steakhouse, but the Wix execution and "Mysite" presentation undercut the restaurant's price tier. The rebuild should make the steak/seafood menu, reservation path, and family-owned story feel like one coherent decision path.

**Pitch sentence:** "Your menu already reads like a real steakhouse; the website still reads like a default Wix build. I mocked a version where the steaks, seafood, reservation path, and family-owned story match the price tier guests see on the menu."

#### Build verdict

**Conditional build:** do one photo/review-tone pass before forking. Build if the room supports warm steakhouse elevation and the reservation path is genuinely weak.

---

### 3. Port Edward - Algonquin

- **Vertical:** Seafood / private events / heritage.
- **Current site:** `https://portedward.com/`
- **Decision:** Conditional build, but strategically attractive because it fills the seafood/private-events slot.
- **Likely template:** `labrisa-01`, adapted from French Riviera coastal to Algonquin heritage seafood institution.
- **Lead tier:** B by website leak; high strategic value; reputation risk requires care.

#### Live-site findings

- Homepage is live on WordPress/Bluehost. Some GET requests with generic user agents hit ModSecurity 406 responses, while header checks and normal browser-like paths show the site is active.
- Homepage has `Order`, `View Menu`, `Learn More`, `Make a Reservation`, `View All Events`, and `Sign Up Today`.
- Ordering goes to Toast. Reservation CTAs are phone links (`tel:847-658-5441`), not an online booking engine.
- Events, private events, loyalty/signup, menu, and order paths are all present, but the site feels busy and utility-led.
- Tripadvisor lists Port Edward as American/Seafood/International, $$-$$$, with 249 reviews and 3.7 rating; Birdeye-style aggregator snippets show 4.2 with 3,000+ reviews. Recent Tripadvisor review tone appears risky/negative, so pitch must avoid overclaiming reputation.

#### Deep-research signals

- `V1` partial: reservation action exists but is phone-first for a seafood/private-event institution.
- `V5` pass for Toast ordering, but reservation provider capability is not surfaced because it appears phone-only.
- `V6` pass but improvable: private events exist and deserve cleaner conversion routing.
- `C5` mixed: large public reputation volume exists, but review quality is uneven; use heritage/events instead of ratings as the main trust signal.
- `V7` mobile quick-action clarity likely needs cleanup because the action set is broad.
- `D5` WordPress may have partial structured data; validate and add full restaurant/events schema in a build.
- `I3` WordPress/Toast footprint; preserve Toast and phone reservation path unless owner confirms a provider.

#### Register check

Port Edward is a heritage seafood institution, not a modern raw-bar newcomer. `labrisa-01` fits only if localized away from Riviera elegance and toward riverfront/heritage seafood, private events, brunch, and long-running local institution energy. The build must not imply Michelin-level seafood.

#### Template decision

- **Choose `labrisa-01`** because multi-service routing is the strongest match: dining, brunch, events/private events, Toast order/loyalty.
- **Reject `alinea-01`** because the reputation and register do not support ceremonial fine dining.
- **Reject `plate-01`** because it undersells the event/private-dining footprint.

#### Personalization plan

- Hero: "Algonquin's seafood institution since 1964."
- CTA strategy: `View Menu`, `Plan a Private Event`, `Call for Reservations`, `Order Online`.
- Menu treatment: create HTML seafood/brunch/event-menu sections; avoid burying menus behind long utility pages.
- Trust/proof: lead with "Since 1964," private-event capability, brunch/events calendar, river/local heritage. Avoid exact rating proof unless owner-approved.
- Provider links to preserve: Toast order, loyalty/signup, phone reservation, events/private-events pages.
- Visual direction: warm maritime heritage, cream/cocoa/navy, seafood photography, private-event dining-room images. No overly luxurious Riviera copy.

#### Why create a new website?

Port Edward already has the business lines a restaurant wants - seafood dining, brunch, events, private parties, Toast ordering, and heritage. The current site makes those paths feel like separate utilities instead of a clear multi-service venue story.

**Pitch sentence:** "You have the rare combination of seafood, events, brunch, ordering, and a since-1964 story; I mocked a version where guests can understand those paths immediately instead of sorting through a busy WordPress homepage."

#### Build verdict

**Conditional build:** build if the pitch leads with heritage + private events, not review score. Verify current owner-preferred reputation proof before using any rating language.

---

### 4. Bistro Wasabi - Lake in the Hills

- **Vertical:** Upscale Asian fusion / sushi / wine / martinis.
- **Current site:** `https://thebistrowasabi.com/`
- **Decision:** Ready to build after a quick photo-tone check.
- **Likely template:** `bamzi-01`. Consider `qitchen-01` only if photos prove the room is dramatically more restrained and ceremonial than the current site suggests.
- **Lead tier:** A-/B+ because the restaurant reputation and provider stack are strong, while the site execution is dated.

#### Live-site findings

- Homepage and menu page are live on WordPress/PHP. Header exposes WordPress API and older PHP stack.
- Homepage states Bistro Wasabi is locally owned and established in 2000.
- Top actions are clear but visually dated: `DELIVERY`, `RESERVATIONS`, `CARRY OUT`, `About`, `Menu`, `Favorites`, `Contact`.
- Reservations go to Tock. Carry-out goes to Toast. Gift cards go to Toast.
- Menu page crawl is surprisingly thin: it shows headline/location/hours/contact and a Caldera form shortcode, while homepage image links point to uploaded menu images. This suggests menu content may be image-heavy or not cleanly crawlable.
- Tripadvisor lists 4.6 from 79 reviews and #1 of 33 restaurants in Lake in the Hills, Japanese/Sushi, $$-$$$. This is strong proof the current site could surface better.

#### Deep-research signals

- `C1` partial: menu appears image/shortcode-heavy rather than clean HTML text in crawl.
- `C5` strong: high public reputation is not elevated into the first-screen story.
- `V1/V5` pass but improvable: Tock reservations and Toast carry-out exist but are framed as utility links rather than a polished decision path.
- `V3` partial: menu path exists, but the crawlable content is thin.
- `V7` likely: mobile quick actions should be simplified around Reserve / Carry Out / Directions.
- `D5` likely incomplete: add structured `Restaurant` + menu + reservation/order sameAs in build.
- `I1/I2/I3`: preserve Tock, Toast, and WordPress-era content; do not rip out the engines.

#### Register check

The menu and reputation support $$-$$$ sushi/fusion. Review and site language emphasize sushi, broiled steaks/chops, wine specials, martinis, and a locally owned story since 2000. This is a strong fit for `bamzi-01`'s accessible-casual Asian route, with a more polished wine/martini layer.

#### Template decision

- **Choose `bamzi-01`** with refined sushi/fusion copy, darker green/charcoal canvas, and saturated accent tuned down slightly.
- **Potential `qitchen-01` only after photos** if the room is quiet, high-end, and omakase-like. Current evidence suggests that would overshoot.
- **Reject `velvet-shaker-01`** because this is food/sushi-led, not cocktail-led.

#### Personalization plan

- Hero: "Sushi, steaks, wine, and martinis in Lake in the Hills since 2000."
- CTA strategy: `Reserve on Tock`, `Order Carry Out`, `View Menu`; make phone secondary.
- Menu treatment: convert image/shortcode menu into HTML sections: Sushi & Maki, Appetizers, Entrees, Steaks & Chops, Specials, Drinks.
- Trust/proof: surface Tripadvisor #1 / 4.6 proof only after re-verification before pitch; also use established-2000 story.
- Provider links to preserve: Tock reservations, Toast carry-out, Toast gift cards, email, phone.
- Visual direction: polished dark Asian fusion, sushi photography, wine/martini accents, not minimalist omakase unless verified.

#### Why create a new website?

Bistro Wasabi already has the hard revenue engines - Tock reservations, Toast carry-out, gift cards, and strong public reputation. The current WordPress site makes those feel bolted on instead of using them to present a polished sushi/fusion decision path.

**Pitch sentence:** "You already have Tock, Toast, and a #1-class local reputation; I mocked a version where the sushi, wine specials, reservation path, and carry-out path feel as strong as the restaurant already is."

#### Build verdict

**Ready to build, with photo-tone check:** use `bamzi-01`; do not over-elevate into ceremonial omakase unless photos prove it.

---

### 5. Cafe Olympic - Crystal Lake

- **Vertical:** Diner / brunch / cafe.
- **Current site:** `https://cafeolympiccrystallake.com/`
- **Decision:** Ready to build, but lower commercial priority than full-service dinner concepts.
- **Likely template:** `latte-01` for cafe-first speed. `plate-01` is the fallback if the build wants a fuller brunch/diner menu surface.
- **Lead tier:** A direct leak for its category; demoted by diner economics.

#### Live-site findings

- Homepage is live on WordPress. It clearly states indoor dining, curbside pickup, local delivery, 8am-3pm daily, phone, Toast ordering, and address.
- Homepage has useful heritage copy: third-generation ownership, serving since 1984, building completed in 1892.
- `Order Online` goes to Toast.
- Main nav points to `/menu/`, while `/menus/` returns 404. This is a minor route hygiene problem but not the primary issue.
- Crawl output shows basic WordPress structure and limited content; inspect menu page before build for whether items are text or image-heavy.
- Tripadvisor lists 4.5 from 75 reviews and #11 of 137 restaurants in Crystal Lake; RestaurantGuru-style snippets cite Google 4.6 from 1,100+ reviews and Facebook 4.6 from 700+ reviews. Strong public proof is not used strongly on the current homepage.

#### Deep-research signals

- `C5` strong: high public reputation and heritage are underused in the first-screen design.
- `V2/V5` pass: Toast ordering exists, but the site can make it cleaner and more mobile-prominent.
- `V3` partial: menu path exists, but stale `/menus/` route returns 404 and menu crawl quality needs verification.
- `V7` improvable: brunch/diner mobile users need Call, Directions, Order, Hours.
- `D1` minor: wrong/stale route (`/menus/`) can create dead-end behavior.
- `D5` likely incomplete: add LocalBusiness/Restaurant schema with hours/menu/order.
- `I2/I3` Toast + WordPress footprint; preserve Toast.

#### Register check

Cafe Olympic is a small, cozy, downtown breakfast/lunch institution. Do not over-modernize it into specialty-coffee minimalism or upscale brunch. The build should feel fast, neighborly, heritage-aware, and practical.

#### Template decision

- **Choose `latte-01`** for a bright cafe-first fork, with more diner/brunch menu density than the source template.
- **Fallback `plate-01`** if the menu is broad enough that inline-home menu density matters more than cafe warmth.
- **Reject `gusto-01` / `1776-redesign-01`** because they oversell the category.

#### Personalization plan

- Hero: "Downtown Crystal Lake breakfast and lunch since 1984."
- CTA strategy: `Order Online`, `View Menu`, `Get Directions`, `Call`.
- Menu treatment: convert breakfast/lunch/kids/beverages into HTML cards or compact category stacks; preserve Toast ordering.
- Trust/proof: use third-generation ownership, building history, 8am-3pm daily simplicity, and re-verified public rating/review count.
- Provider links to preserve: Toast ordering, phone, email, address.
- Visual direction: bright, warm, small-town cafe; cinnamon roll/breakfast photography; avoid generic coffee-shop minimalism.

#### Why create a new website?

Cafe Olympic has a better story than its current basic WordPress site suggests: third-generation ownership, since 1984, an 1892 building, daily hours, Toast ordering, and strong public reviews. The rebuild should make those trust signals work before a guest taps into a menu or order flow.

**Pitch sentence:** "You already have the downtown breakfast story - third generation, since 1984, an 1892 building, daily hours, and Toast ordering. I mocked a cleaner version where guests see that trust before they decide what to order."

#### Build verdict

**Ready to build, lower priority:** good pitch asset for cafe/diner category, but build after higher-ticket dinner/event leads.

---

## Recommended build order

1. **Galati's Hideaway** - highest-priority vertical in this new batch and a concrete site-architecture problem. Use `pepper-01`; keep it casual.
2. **Bistro Wasabi** - strongest reputation/template fit combination. Use `bamzi-01`; preserve Tock/Toast.
3. **Addison's Steakhouse** - attractive steakhouse category, but verify review/photo tone before elevating. Use warmed-down `1776-redesign-01`.
4. **Port Edward** - strategically valuable seafood/events build, but pitch must avoid reputation-overclaiming. Use `labrisa-01`.
5. **Cafe Olympic** - clean cafe/diner proof asset with good story, but lower average-ticket economics. Use `latte-01`.

## Copy-paste build prompts

### Galati's Hideaway

Build Galati's Hideaway using `pepper-01` in `restaurant-website-system/templates/pepper-01`. Use `restaurant-website-system/research/lead-qualification/next-5-mchenry-county-audits-2026-04-28.md` as the source audit. Personalize it as casual Italian pizza + catering + private parties, preserve the Heartland order link and party inquiry path, convert PDF-labeled menu/catering content into HTML, and avoid romantic trattoria cues.

### Bistro Wasabi

Build Bistro Wasabi using `bamzi-01` in `restaurant-website-system/templates/bamzi-01`. Use this audit packet as the source. Personalize it as sushi/fusion + wine/martinis, preserve Tock reservations and Toast carry-out/gift cards, turn the menu into crawlable HTML sections, and avoid ceremonial omakase styling unless photos prove it.

### Addison's Steakhouse

Build Addison's Steakhouse using a warmed-down `1776-redesign-01` fork, after a quick photo/review-tone check. Use this audit packet as the source. Personalize it as a family-owned McHenry steakhouse with seafood and wine, preserve active reservation/order paths if found, and do not oversell it as destination fine dining.

### Port Edward

Build Port Edward using `labrisa-01` adapted for Algonquin heritage seafood and private events. Use this audit packet as the source. Preserve Toast ordering, phone reservations, private-events/events paths, and the since-1964 story. Lead with multi-service routing, not rating claims.

### Cafe Olympic

Build Cafe Olympic using `latte-01`, with `plate-01` as fallback if the menu needs denser brunch treatment. Use this audit packet as the source. Preserve Toast ordering, phone/email/address, convert menu content into HTML, and foreground third-generation ownership, since 1984, the 1892 building, and 8am-3pm daily hours.

## Verification notes

- Sites checked live on 2026-04-28 with `curl`/crawl-style requests. Some sites block generic agents or return ModSecurity responses on certain paths; browser verification is still recommended before any pitch screenshot package.
- No candidate duplicates existing built sites or the prior deep-research bench.
- Review/rating proof from third-party snippets must be re-verified the day before pitch and should not be quoted unless the source is stable.
- Each chosen template stays within one register step of the restaurant, with explicit guardrails for Galati's, Addison's, Port Edward, and Cafe Olympic.
