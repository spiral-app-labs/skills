# El Molino Mexican Restaurant  -  Pre-Fork Audit

> **Current site:** https://thenewmolino.com/  
> **Legacy indexed domain:** https://www.elmolino1984.com/  -  browser reported `net::ERR_NAME_NOT_RESOLVED` on 2026-04-30; Google Maps still shows `elmolino1984.com` as the menu domain.  
> **Address:** 2112 Elgin Rd, Carpentersville, IL 60110  
> **Phone:** (847) 551-1602  
> **Run date:** 2026-04-30  
> **Skill:** `/Users/ethantalreja/skills/restaurant-website-audit/SKILL.md`

## Inputs Collected

- In-app browser captures of the current site, menu PDF, Google Maps overview, Google Photos, and Google Reviews. Screenshots are stored in `screenshots/`.
- Google Maps review panel loaded in browser, sorted by **Newest**, scrolled, expanded where possible, and parsed into `scrapes/google-reviews-packet-30.json`. The first 30 newest written Google reviews were captured; 104 written review entries were captured overall in `scrapes/google-reviews-packet.json`.
- Current-site DOM snapshot stored at `scrapes/current-site-dom-snapshot.txt`.
- Google Maps photo panel snapshots stored at `scrapes/google-photos-snapshot.txt` and `scrapes/google-photos-owner-snapshot.txt`.
- External sources: Shaw Local reopening feature, Barrington Hills Observer / Chicago Tribune 40th anniversary summary, Tripadvisor, Restaurantji, MenuPix.

## TL;DR

El Molino is not a weak lead because nobody loves the restaurant. It is a strong lead because the public story is unusually rich and the live site only tells the safest 15% of it.

The best pitch is: **a 40-year Carpentersville Mexican landmark has a new Zepeda-family chapter, a six-month remodel, Puebla family recipes, a new back-room bar, house salsas, handmade tortillas, and fresh Google praise for Daniel/Juan-level hospitality  -  but the current site is a one-page announcement plus a PDF menu.**

This should **not** be forced into `bamzi-01`, `gusto-01`, or `plate-01` as-is. The audit confirms the original catalog-gap call: this wants **template #14, heritage Latin casual**  -  muted cream/wood/terracotta, family-history first, menu-readable, bar/gathering secondary, Google-review proof in hero or just below hero.

---

## Block 1  -  Verbatim Findings

| Field | Verbatim / Observed |
|---|---|
| Current platform | Small static single-page site at `thenewmolino.com`; no visible CMS chrome. |
| Current hero / heading | Logo image + *"THE NEW EL MOLINO RESTAURANT"*. |
| Current homepage copy | *"El Molino Restaurant is now under new ownership and a new administration"*; *"a completely new chapter"*; *"no direct relation to the previous ownership"*; *"great food you love"*; *"our passion for food and hospitality"*. |
| Primary CTA on current site | Sticky/floating *"OUR MENU"* button only. |
| Menu format | `menu/menu.pdf`, 2-page PDF. Browser screenshot shows both pages tiny in the PDF viewer. No HTML menu, no section anchors, no crawlable item pages. |
| Address | Present near bottom: *"2112 Elgin Rd. Carpentersville, IL 60110"*. |
| Phone | Present near bottom as `tel:+18475511602`. |
| Email | Present as `info@thenewmolino`, missing visible `.com`. |
| Hours on current site | Not present in the current-site DOM snapshot. Google Maps shows live hours; the old indexed `elmolino1984.com` content had hours, but that domain did not resolve in browser. |
| Reservation / order | Current site does not show reserve/order CTAs. Google Maps shows *Reserve a table* and *Order online*. |
| Google Maps rating | 4.3 stars / 886 reviews in browser capture. |
| Review topics in Maps | `margaritas` 64, `carne asada tacos` 11, `mole sauce` 7, `fried ice cream` 7, `skirt steak` 6, `chiles rellenos` 5, `machaca beef` 4, `cheese enchilada` 3, `chicken flauta` 2, `chipotle based sauce` 2. |
| Current-site photography | 10 interior/room photos, almost all renovated-room shots; no dish close-ups, no owner portraits, no chef/process, no exterior hero. |
| Google Photos | 20+ visible mixed user photos in browser. Strongest visible current-ish assets: patio/exterior, plated combo, bar/beer, menu screenshots. Many visible photos are older user-generated captures. |
| Google Photos by owner | Only 2 visible owner-uploaded items in browser; both stale-looking, one beer flat-lay and one holiday-hours graphic. Not useful for a premium fork. |
| Press / story on current site | None. Shaw Local has a detailed Dec. 27, 2025 reopening story. |
| Reviews on current site | None. |
| Aliveness | No LiveOpenStatus, no map embed, no live review block, no event/calendar/news section, no social feed. |

### Browser Screenshots

- Current site first viewport: `screenshots/current-site-first-viewport.png`
- Current site full page: `screenshots/current-site-desktop-full.png`
- Current menu PDF: `screenshots/current-site-menu-pdf-after-wait.png`
- Google Maps overview: `screenshots/google-overview.png`
- Google Maps reviews: `screenshots/google-reviews-panel.png`
- Google Photos all tab: `screenshots/google-photos-panel.png`
- Google Photos by owner: `screenshots/google-photos-by-owner.png`

### Mobile / Narrow-Viewport Failures

The in-app browser viewport captured at 505 x 957, close enough to reveal the mobile/narrow layout failures.

1. **First viewport does not perform the business job.** The viewer sees a logo, a one-page announcement, and a floating menu button. It does not show hours, rating, reservation/order, Google proof, family story, or a reason to choose El Molino tonight.
2. **The menu is a PDF, not a web menu.** The PDF screenshot renders the two pages as tiny menu boards inside a browser PDF viewer. A phone user must zoom and pan to read prices and sections. This is exactly Principle 8 anti-pattern 5.
3. **The web presence is split across domains.** Browser opened `thenewmolino.com`, but Google Maps still exposes `elmolino1984.com` as the menu domain. Browser could not open `https://www.elmolino1984.com/` because DNS did not resolve. This turns the strongest old asset, "since 1984", into a customer-path hazard.
4. **No review proof appears where it matters.** The browser-collected review packet has 30 fresh written Google reviews, 25 of them 4 or 5 stars, with repeated praise for atmosphere, Daniel, margaritas, tortillas, salsas, and the remodel. The site uses none of it.
5. **No live open/visit confidence.** Google Maps shows open state and hours; the current site does not. A mobile guest has to leave the site to learn whether the restaurant is open.

---

## Block 2  -  Secret Sauce

Guests are responding to the **new room**, **authentic Mexican food**, **margaritas/bar**, and a surprisingly strong **named-service pattern** around Daniel and Juan. The deeper story from Shaw Local makes the review pattern sharper: the Zepeda family is not just repainting a restaurant; they are trying to preserve a 40-year local landmark while bringing in Puebla-family recipes, a brighter cream-and-wood room, and a new back-room bar.

### 1. New Room / Renovation

- *"The atmosphere has changed from what used to be a more cantina vibe to an upscale restaurant."*  -  Kate, Google, 4 days ago
- *"The interior is beautifully redone, very tasteful with great seating."*  -  Olivia, Google, a week ago
- *"Very beautifully remodel."*  -  Susan, Google, a month ago
- Shaw Local confirms the design pivot: red/green/yellow moved to muted white/cream while keeping wood beams.

### 2. Family / Heritage Story

- Shaw Local reports the Zepeda family bought El Molino in spring 2025, remodeled for six months, and reopened in late November 2025.
- Juan and Mary Zepeda came from Puebla, Mexico; Lorena Zepeda said the recipes come from her mother and grandmother.
- The restaurant itself dates to 1984 and was one of the first Mexican restaurants in Carpentersville, per Barrington Hills Observer / Chicago Tribune summary.
- The current site says *"new ownership"* but does not reconcile the stronger truth: **new family stewardship of a 40-year place**.

### 3. Named Staff

- *"Ask for Daniel; he's very friendly and provides excellent service."*  -  Gregorio, Google, 4 days ago
- *"Daniel, our waiter, was: attentive, friendly..."*  -  Alex, Google, 4 days ago
- *"Daniel was an awesome server."*  -  Kelsey, Google, 5 days ago
- *"Gracias Juan, por hacernos sentir como en casa."*  -  Laura, Google, 3 weeks ago

### 4. Signature Dishes / Food Signals

- **Fresh tortillas**: Laura says they make their own fresh tortillas every morning.
- **Salsas**: Olivia calls the salsas *"to die for"*; Shaw Local quotes Lorena saying the secret of a good taco is the salsa.
- **Mole**: Shaw Local centers Puebla-region mole as a flavor marker; Google review topics show `mole sauce` 7.
- **Carne asada / tacos / fajitas / chimichanga**: repeated Google topics and review mentions.
- **Margaritas**: 64 Google topic mentions; reviews call out mango margaritas and tequila.

### 5. Vibe / Ambiance / Room

- *"Authentic Mexican food in a great atmosphere."*  -  Sherry, Google, 3 days ago
- *"Beautiful portraits of angels and the Virgin Mary..."*  -  Mjf 1240, Google, 3 days ago
- *"Very nice for a date night or just going for a drink at the bar."*  -  Monica, Google, a week ago
- *"A beautiful looking restaurant, easy parking..."*  -  Mark, Google, a month ago

### 6. Bar / Margaritas / Second Register

- Google review topics: `margaritas` 64.
- Google Maps exposes seating types in reviews: bar area, outdoor patio/terrace, private dining room, booth seating, counter seating.
- Shaw Local reports a new bar in the back dining room and small-gathering availability.

### 7. Occasions

- Birthday: Kelsey celebrated a birthday and highlighted Daniel's service.
- Date night / drinks: Monica explicitly calls out date night and bar use.
- Cross-town destination: Mark came from Chicago/Huntley with friends and framed the restaurant as a "find."
- Longtime regular return: multiple reviews compare pre- and post-renovation experiences, which means the pitch must respect legacy customers.

### 8. Value / Friction Pattern

The positive reviews call prices fair or reasonable, but the negative reviews cluster around pricing clarity and surprise upcharges. This is important: the rebuild should not hide pricing in a PDF. It should make pricing and add-ons explicit.

- Positive: *"prices were very fair"*  -  Olivia, Google, a week ago
- Negative: George and Grace both describe confusion over menu pricing / upcharges.
- Richard says the food is good but mentions feeling nickel-and-dimed.

### Owner Voice  -  Verbatim Phrase Bank

```json
[
  { "phrase": "fresh vision", "source": "current site", "tone": "renewal" },
  { "phrase": "a completely new chapter", "source": "current site", "tone": "renewal" },
  { "phrase": "great food you love", "source": "current site", "tone": "continuity" },
  { "phrase": "our passion for food and hospitality", "source": "current site", "tone": "warm" },
  { "phrase": "It is special for many people", "source": "Shaw Local / Lorena Zepeda", "tone": "heritage" },
  { "phrase": "We don't want to lose that touch of Mexico", "source": "Shaw Local / Lorena Zepeda", "tone": "specific" },
  { "phrase": "This is another style of Mexican", "source": "Shaw Local / Lorena Zepeda", "tone": "positioning" },
  { "phrase": "The secret of a good taco isn't the meat, but the salsa", "source": "Shaw Local / Lorena Zepeda", "tone": "specific" }
]
```

### External Trust Signals

```json
[
  {
    "source": "Shaw Local",
    "year": 2025,
    "claim": "Feature on reopening, new Zepeda-family ownership, six-month remodel, Puebla recipes, new back-room bar, and late-November reopening.",
    "url": "https://www.shawlocal.com/northwest-herald/news/2025/12/27/el-molino-restaurant-in-carpentersville-reopens-with-new-look-new-owners-who-also-run-elgin-taqueria/"
  },
  {
    "source": "Barrington Hills Observer / Chicago Tribune summary",
    "year": 2024,
    "claim": "El Molino celebrated 40 years and was described as one of Carpentersville's first Mexican restaurants, opened in March 1984.",
    "url": "https://barringtonhillsobserver.com/2024/05/12/carpentersvilles-first-mexican-restaurant-reaches-landmark-40-year-anniversary/"
  },
  {
    "source": "Google Maps",
    "year": 2026,
    "claim": "4.3 stars from 886 Google reviews; browser-captured on 2026-04-30.",
    "url": "https://www.google.com/maps/place/El+Molino+Mexican+Restaurant/@42.1480327,-88.2581124,17z/"
  },
  {
    "source": "Restaurantji",
    "year": 2026,
    "claim": "4.5 rating from 225 ratings; food, atmosphere, and service each shown as 4.6; updated Apr. 3, 2026.",
    "url": "https://www.restaurantji.com/il/carpentersville/el-molino-mexican-restaurant-/"
  },
  {
    "source": "Tripadvisor",
    "year": 2026,
    "claim": "#2 of 52 restaurants in Carpentersville and Travelers' Choice context visible in crawler output.",
    "url": "https://www.tripadvisor.com/Restaurant_Review-g35773-d4348587-Reviews-El_Molino_Mexican_Restaurant-Carpentersville_Illinois.html"
  }
]
```

Owner-response signal: no owner replies were visible in the browser-collected Google review snapshots. If replies exist deeper in Maps, they were not observed in the newest-sorted 30-review pass.

---

## Block 3  -  Per-Principle Violations

**Principle 1.1  -  BROKEN conversion surface.** El Molino is a dine-in, bar, group, and takeout restaurant. The current site gives only a PDF menu button. Google Maps has Reserve/Order paths, but the owned site does not. The CTA does not match revenue reality.

**Principle 1.2  -  UNDERSELLS aesthetic-to-bill clarity.** The navy/gold/cream site styling hints at the new restrained room, but the page does not explain the $$ family-heritage Mexican register. It neither sells the bar/date-night upside nor the everyday family-restaurant accessibility.

**Principle 1.3  -  BROKEN menu-access relationship.** A PDF menu is the wrong friction here. This is not a Michelin restaurant hiding price as a register signal. Reviews show guests care about item choices, tortillas, sauces, margaritas, and pricing clarity. The menu needs HTML sections and clear add-ons.

**Principle 3.1  -  HIDDEN trust strategy.** The restaurant has 4.3 stars from 886 Google reviews, 30 fresh written reviews collected in browser, and repeated named-service praise. None appears on the current site. For a neighborhood/family restaurant, review proof should appear in or just below the hero.

**Principle 3.2  -  HIDDEN heritage.** "Since 1984" is a free trust lift, and El Molino actually has it. The current site mentions new ownership but not the 40-year Carpentersville landmark, the first-Mexican-restaurant history, or the continuity Lorena Zepeda described.

**Principle 4.2  -  WEAK hours signal.** The current site does not show hours in the captured DOM. Google Maps does, but the site asks the customer to leave to answer a basic "can I go now?" question.

**Principle 4.3  -  WEAK phone/order split.** Phone is present only near the bottom. Reserve/order exists on Google Maps but not the current site. The rebuild should carry phone, menu, directions, reserve/order in a simple mobile action model.

**Principle 5.1  -  BROKEN first-viewport floor.** The first viewport lacks rating, hours, address hint, real positioning, HTML menu path, and the stronger family story. It is visually tidy but commercially underloaded.

**Principle 5.2  -  PHOTO-TIER CONSTRAINED.** Current-site photos are mostly interiors. They are useful for the room, but the fork cannot credibly lead with food unless the owner supplies new dish/process/bar photos.

**Principle 5.3  -  WEAK copy.** The phrase *"no direct relation to the previous ownership"* is understandable but defensive. The stronger story is not rupture; it is stewardship: new Zepeda-family chapter, Puebla recipes, keeping the history, adding a new style of Mexican.

**Principle 5.4  -  BROKEN mobile menu path.** The PDF menu requires zoom/pan behavior. The browser screenshot shows the two-page menu shrunk inside the PDF viewer, not a readable mobile menu.

**Principle 8, anti-pattern 5  -  BROKEN.** PDF menu with no preview. In this register, that loses customers.

**Principle 8, anti-pattern 3  -  WEAK.** The current copy leans generic where the source material is specific. "Fresh vision" is fine; "Puebla family recipes, house salsas, and a back-room bar in a 1984 Carpentersville landmark" is better.

**Principle 10  -  DEAD aliveness layer.** No LiveOpenStatus, no LiveMapEmbed, no review carousel, no seasonal/menu stamp, no motion. The current site reads like an announcement page rather than an operating restaurant page.

---

## Block 4  -  So Why Are We Rebuilding It?

1. **To fix the split-domain trust problem.** Google still points part of the experience at `elmolino1984.com`, which did not resolve in browser, while the current site lives at `thenewmolino.com`. A rebuild gives El Molino one canonical home.
2. **To turn a defensive ownership note into a warm continuity story.** The site currently says there is no direct relation to previous ownership. The pitch should say: new Zepeda-family chapter, same Carpentersville landmark, Puebla recipes, history preserved.
3. **To replace the PDF menu with a menu customers can read on their phones.** Reviews mention specific dishes, salsas, tortillas, margaritas, and pricing confusion. The menu should be searchable, crawlable, and explicit.
4. **To surface the review proof guests are already writing.** Daniel, Juan, the elegant renovation, handmade tortillas, and margaritas all show up in fresh Google reviews. The site should not make those assets invisible.
5. **To de-risk pricing complaints.** Several recent negative reviews focus on perceived surprise upcharges. A clean web menu with add-on logic and clear service-charge language is a business fix, not just a design fix.

**Pitch sentence:** *"El Molino already has the story: Lorena, Juan, and Mary Zepeda reopening a 1984 Carpentersville landmark with Puebla family recipes, house salsas, handmade tortillas, a new bar, and Google guests calling out Daniel and Juan by name. The rebuild makes that story visible, replaces the tiny PDF menu, and gives the new chapter one canonical site."*

### Hero Lock

```json
{
  "wordmark": "EL MOLINO",
  "eyebrow": "Puebla recipes. Carpentersville since 1984.",
  "sub": "A new Zepeda-family chapter with the great food regulars love: house salsas, handmade tortillas, margaritas, and a warmer room.",
  "hero_photo_subject": "Primary: renovated dining room with cream walls, wood beams, arched openings, and warm table setting from current-site inventory. Fallback: exterior/patio from Google Maps. Shoot ask: fresh tortillas, salsa trio, mole, margarita, and Juan/Lorena portrait.",
  "cta_primary": { "label": "View Menu", "action": "scroll to /menu HTML sections" },
  "cta_secondary": { "label": "Call or Get Directions", "action": "tel:+18475511602 plus Google Maps directions" },
  "rationale": "Drawn from Shaw Local's Zepeda/Puebla/remodel story, Google reviews praising Daniel/Juan and handmade tortillas, and current-site owner voice around a fresh vision and great food guests already love."
}
```

---

## Block 5  -  Risks Before Fork

### Photography Inventory + Tier Gate

| Source | Dish shots | Interior shots | Owner / chef portrait | Exterior | Detail / process |
|---|---:|---:|---:|---:|---:|
| Current site | 0 | 10 usable renovated-room shots | 0 | 0 | 0 |
| Google Maps photos | 10+ visible mixed food/menu/bar shots in browser | 5+ visible exterior/interior/patio shots | 0 visible in photo panel | 1 strong exterior/patio visible | Some menu/beer/bar evidence, mixed age |
| Google Maps by owner | 0 useful current dish | 0 useful current interior | 0 | 0 | 2 stale assets visible: beer flat-lay, holiday-hours graphic |
| Shaw Local | Food trays, dining room, Juan/Lorena photo visible in article | Yes | Yes | Not primary | Yes, but third-party/licensed press photos, not reusable without permission |
| Tripadvisor / Restaurantji | Mixed older user photos and menu images | Mixed | 0 | Some | Low control |
| Owner-supplied | Unknown | Unknown | Unknown | Unknown | Unknown |
| **Total usable for prototype** | **8-12 user/aggregator food references, not hero-grade** | **10 current-site interior shots** | **0 reusable** | **1 usable Google exterior reference** | **0 reusable process shots** |

**Photography tier verdict:** **Tier-3 ready for prototype, Tier-2 blocked.** The current room photos are enough to prove the redesign direction and build a credible first mockup, but not enough for a finished heritage Latin template. Tier-2 requires 15-20 controlled shots: salsa/tortilla/mole/fajitas/margaritas/bar/interior/owner portrait. Tier-1 is not the target register.

### Register Risk

El Molino is $$ family-heritage Mexican with bar/date-night upside, not upscale Mexican destination. Do not over-luxury it. The right register is **warm heritage casual**: cream/white/wood/terracotta, proud but approachable, menu-readable, review-backed.

### Template Hypothesis

**Recommended:** build new **template #14: `heritage-latin-01`** before forking.

Why not the existing options:

- `bamzi-01` is too saturated and dark for the post-renovation "another style of Mexican" direction.
- `gusto-01` carries Italian-trattoria cues and oversells cuisine-specific romance.
- `plate-01` can solve the menu/accessibility problem, but it does not carry Latin heritage, Puebla recipes, bar room, or 40-year community memory without heavy custom work.

Fallback only if we must ship without a new template: `plate-01` heavily re-tokened toward cream/wood/terracotta, with a custom heritage hero, review wall, and bar/gathering section. This is a fallback, not the clean route.

### Owner-Emotional Risk

The current copy separates the new owners from the previous ownership. The better marketing angle is continuity-with-new-stewardship, but that needs owner approval. Do not imply a relationship with the prior owner beyond what Shaw Local reported.

### Heritage-Data Unknowns

- Confirm exact preferred ownership names/spellings: Juan, Mary, Lorena Zepeda.
- Confirm whether "since 1984" is legally/brand-approved under new ownership.
- Confirm whether Taqueria Chapala should be named as a sister/family restaurant.
- Confirm current hours; current site omits them and Google/Tripadvisor/old index disagree.
- Confirm whether breakfast opened after Jan. 1 as Shaw Local said was planned.

### Reservation / Order Decision

Google Maps exposes Reserve and Order paths. The current site does not. Pre-flight should ask whether reserve/order are Google-managed, SkyTab, Toast, or another provider. The fork should preserve whatever is operational and add phone/directions fallback.

### Register-Split Risk

There are at least four business surfaces: dinner, bar/margaritas, patio/outdoor, and small gatherings/private room. The rebuild should not turn the homepage into a cluttered nav. A clean three-path structure should be enough:

- Eat: menu, salsas, tortillas, Puebla recipes
- Drink: margaritas, bar, live music when active
- Gather: patio/private room/groups

### Status Footer

**Qualified pre-fork status:** qualified, but catalog gap active.  
**Recommended template hypothesis:** build `heritage-latin-01` / template #14, then fork El Molino.  
**Pre-flight asks:** confirm domain/canonical URL; confirm hours/order/reserve provider; request 20-shot photo packet or half-day shoot; approve "since 1984" continuity framing; clarify breakfast/private-room/bar priorities.
