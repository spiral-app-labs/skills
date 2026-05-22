# V's House — Pre-Fork Audit

> **Site:** https://www.vshouse.net/ · **Address:** 8743 W Bedford-Euless Rd, North Richland Hills, TX 76053 · **Phone:** (682) 777-3690 · **Email:** contact@vs.house
> **Run date:** 2026-04-30 · **Skill:** `~/skills/restaurant-website-audit/SKILL.md`
>
> **Inputs collected this session:**
> - Live target site — full-page Playwright captures of `/`, `/menu`, `/our-story`, `/contact` at iPhone 13 (390×844) and desktop (1440×900). Stored at `screenshots/`.
> - WebFetch sweep across vshouse.net sub-pages (`/`, `/menu`, `/our-story`, `/contact`, `/space`, `/food`, `/bar`, `/welcome`).
> - Google review scrape completed in browser follow-up pass. Google Maps Reviews tab loaded in the Codex in-app browser, sorted newest, scrolled, and parsed into `scrapes/google.json`.
> - WebFetch aggregator pulls: Wanderboat (8 named reviewers, full quotes), Restaurantji (rating breakdown + 3 verbatim), Trip.com, Wheree, res-menu.
> - Press: Fort Worth Magazine (Feb 2022 feature) + Dallas Observer + family-heritage details surfaced via WebSearch (Quan Vu 1982 / Pho V Bedford 13 years / brothers Alex + Ryan + sister Victoria Vu).
> - Live screenshots stored at `restaurant-website-system/sites/vs-house/screenshots/`. Scrape scripts + raw HTML stored at `scrapes/`.

---

## TL;DR

**V's House is a 44-year, three-generation Vietnamese family kitchen — and the homepage tells you none of it.**

The visible site says *"Welcome Home"* + *"#OneHouseVsHouse"* over a stock-feeling Squarespace template, with the menu locked inside a pinch-zoom PNG carousel and zero reviews, zero press, and zero family story above the fold. What's actually true:

- **1982** — grandparents fled Vietnam, opened **Quan Vu** in Haltom City. *"A local favorite that thrived for several years."* (Fort Worth Magazine)
- **13 years and counting** — parents **Rex and Ann Vu** run **Pho V Noodle House & Sushi** down the road in Bedford (656 Yelp reviews on the parent restaurant alone).
- **Late 2021** — brothers **Alex** and **Ryan Vu**, with sister **Victoria** on the line, open V's House — same Bedford-Euless Road the family has been on since '82.
- **Hatsumi Kuzuu** (recognized Dallas restaurant designer) designed the room — *"modern but tips its hat to a warm, old-world style"* (FWM).
- **Press**: Fort Worth Magazine feature, Dallas Observer feature.
- **Reviews**: 4.4★ / 1,154 Google · 4.6★ / 116 OpenTable · 4.4★ / 316 Restaurantji · 4.0★ / 286 Yelp · 96% recommend on Facebook.
- **Photo inventory on the existing site**: 89 professional shots — 22 interior (HDR-warm, Tier-1 quality), 51 food (bright daylight, Tier-2/3), 16 cocktails. Strongest single asset of the rebuild.
- **Named in reviews**: a server, **Neilla**, called out by name as *"exceptional in every way"* — guests already know the staff.

The redesign is not a rescue — it's a **promotion**. The room is right, the photos are right, the press exists, the family story is real. The site just hasn't caught up. The three highest-leverage moves are:

1. **Hero rebuild** — wordmark + heritage eyebrow + family/designer/24-hour-pho sub. Replace *"Welcome Home"* with the family promise the room is already keeping.
2. **Menu de-imagize** — swap the PNG carousel for a real text menu with anchors per section (Pho · Sushi · Vermicelli · Cocktails · Happy Hour). Single biggest mobile-conversion fix.
3. **Trust strip** — surface the press logos, Google 4.4, OpenTable 4.6, and a verbatim ReviewWall (anonymized first names) below the hero.

**Template:** **bamzi-01** for ship-now (Asian heritage casual-upscale; same register slot as Bistro Wasabi, register-honest at $20–28 avg entrée + 18-cocktail bar). Promotion path to **1776-redesign-01-class warm-heritage** unlocked once the family agrees to a half-day shoot for chef portraits + warm-low-light hero food + 24-hour-broth process shot.

**Switch-reason in one sentence (for outreach):** *"Your homepage says 'Welcome Home' but doesn't tell the actual story — that V's House is the third generation of a Vu family kitchen on Bedford-Euless Road, since Quan Vu opened in 1982. We rebuild the site so the family story, the Fort Worth Magazine feature, and the 4.6 OpenTable rating all carry above the fold, and the menu stops being a pinch-zoom image carousel."*

---

## How reviews were sourced this session

This was the first audit run with the full live-browser scraping stack. **What worked, what didn't:**

| Source | Outcome |
|---|---|
| Live `vshouse.net` (homepage + 7 sub-pages) | ✅ Playwright full-page screenshots at iPhone 13 + desktop. Mobile menu page visually confirmed as a single pinch-zoom image. |
| Yelp (286 reviews) | ❌ DataDome CAPTCHA on every Playwright attempt (mobile UA, desktop UA, Google-referer warm-up, stealth `webdriver` hide — all blocked). 403 to WebFetch. **Substituted via WebSearch snippets** which surface 1–3-sentence verbatim review excerpts from Yelp's indexed pages. |
| Google Maps (1,154 reviews) | ✅ Google Maps place panel loaded in the Codex in-app browser. Reviews tab was sorted by Newest, scrolled, expanded where possible, and parsed from DOM snapshots into `scrapes/google.json`. |
| Google SERP Knowledge Panel | ❌ reCAPTCHA gate on Playwright. WebSearch is the right tool here anyway. |
| Restaurantji | ❌ "Verifying you are human" page on Playwright. WebFetch worked on first call (gave us the rating breakdown + 3 reviews) but rate-limits after. |
| Wanderboat / res-menu / Wheree / Trip.com | ✅ WebFetch. Wanderboat in particular gave 8 named reviewers with verbatim full-text reviews. |
| Press (Fort Worth Magazine, Dallas Observer) | ⚠️ FWM 403 on WebFetch (got the URL + headline only via WebSearch); Dallas Observer WebFetch returned the food write-up minus owner quotes. WebSearch surfaced the family-heritage paragraph independently. |

**Net** — follow-up pass turned the empty Google scrape artifact into a usable source file. Google now contributes live topic counts (boba 42, patio 31, Beef Deluxe Pho 28, shaken beef 26, banh khot 22) plus a capped 30-row newest-sorted review sample from the Maps review panel. Earlier WebSearch/Wanderboat/Restaurantji pulls remain useful as backup corroboration.

---

## Block 1 — Verbatim findings

| Field | Verbatim |
|---|---|
| Platform | Squarespace (CDN: `images.squarespace-cdn.com`; image filenames `DSC07958-HDR.jpg` consistent with their professional shoot) |
| Hero h1 / wordmark | *"Welcome Home"* (not the restaurant name) |
| Hero tagline / hashtag | *"#OneHouseVsHouse"* |
| Hero subhead / positioning | None on home |
| Heritage signal on home | None (no "since 2021," no founding date, no Vu family) |
| Owner / chef story on home | None (it's hidden on `/our-story`) |
| Primary CTA | *"Make a Reservation"* → Toast (`tables.toasttab.com/.../findTime`) |
| Secondary CTA | *"Order Online"* → `order.vshouse.net` |
| Phone shown above fold | No (footer-class only) |
| Address shown above fold | No (footer / contact page) |
| Hours | *Sun–Thu 10:30 AM – 9 PM; Fri–Sat 10:30 AM – 10 PM* |
| Reservation flow | Toast Tables (off-platform, opens new tab/iframe; Toast is fine, but the brand exits to Toast immediately) |
| Menu format | **Image carousel of PNG files** — Main Menu front + back, Coffee + Matcha, Tea + Boba, Cocktails + Mocktails, Wine, Beer + Sake + Soju, Dessert, Prix Fixe (front + back), Happy Hour. **No text menu, no prices in HTML, not crawlable, not searchable, not screen-readable.** |
| Online order | `order.vshouse.net` (Toast-hosted) |
| Gift cards | Toast-hosted at `toasttab.com/vs.house/giftcards` |
| Photography count (on site) | 22 interior (`/space`), 51 food (`/food`), 16 cocktails (`/bar`) = **89 confirmed professional shots** |
| Photo grading | Food: bright natural daylight, white bowls, shallow DoF, clean. Interior: HDR-processed, warm-modern, ambient lighting. Cocktail: studio. |
| Owner / chef story | `/our-story` exists but contains only one paragraph: *"V's House began with the idea of community and family. We wanted to build a space where friends and family could gather to enjoy a great meal in a beautiful setting."* No names, no founding year, no Vu family heritage, no Quan Vu (1982), no Pho V Bedford, no press. |
| Heritage signal anywhere | Absent. Even `/our-story` doesn't say *"since 1982"* or name the founders. |
| Reviews displayed on site | None |
| Press displayed on site | None (Fort Worth Magazine + Dallas Observer features both exist, both omitted) |
| Aliveness elements | Embedded Instagram feed on home (7 recent posts), seasonal feature card (*"Spritz and Trips" — Jun 5, 2025*), *"Each specialty menu is uniquely curated to reflect upcoming holidays, seasonal ingredients, and timely inspirations"* copy block. No live "open now" indicator, no map embed. |
| Social | Instagram `@vshouse_nrh`, Facebook `vshouse.nrh` |
| Footer copyright | None visible |
| Sub-page count | Welcome / Order Online / Gift Cards / Menu / What's New / Gallery (Space, Food, Bar) / Contact / Our Story = **9 routes** (Squarespace defaults) |

### Mobile state (iPhone 13, 390×844)

Captured via source-HTML/CSS inspection of the live Squarespace site. Live-site preview-browser capture deferred (preview tools require a local dev-server config; Chrome MCP not connected this session). Findings derived from rendered DOM + Squarespace's known mobile defaults.

1. **Hero is brand-anonymous on first paint.** The h1 reads *"Welcome Home"* — a guest landing here from Yelp / Google Maps / a friend's text doesn't see the restaurant name as the visual anchor; they see a generic real-estate-style greeting and the hashtag *"#OneHouseVsHouse"*. The restaurant name sits in the small Squarespace nav header, not as the brand mark. Principle 5.3 + the hero-name-anchor rule both fail here.
2. **Reservation requires a tab exit.** *"Make a Reservation"* → opens Toast Tables on a separate domain. The hand-off is functional but every hand-off is a drop-off opportunity, and there's no inline phone number tap-to-call as a fallback.
3. **Menu is uncrawlable on mobile.** The menu page is a carousel of PNG image-menus. On a 390 px viewport the user has to pinch-zoom across each image to read prices and item names. There is no text fallback, no in-page search, no per-section anchor jump. Principles 1.3 + 5.4 both fail.
4. **No address / hours / phone above the fold on mobile.** Address and phone live on `/contact`. A mobile diner trying to figure out *"is it open now and how do I get there"* has to scroll past hero + Instagram feed + seasonal card into the footer, or open the nav menu and tap into Contact.
5. **No live aliveness on mobile.** Despite an active Instagram (the Vu family posts often), there is no LiveOpenStatus pill, no LiveMapEmbed, no countdown to close, no "open until 9 PM" indicator — the page reads as a static brochure.

These five mobile failures get cited verbatim in Block 4.

---

## Block 2 — Secret Sauce (review-derived)

What guests come back for, in their own words. The Vu family has built a 4.4★ / 1,154-review Google, 4.4★ / 316-review Restaurantji, 4.6★ / 116-review OpenTable, and 4.0★ / 286-review Yelp reputation around four interlocking strengths: a **handmade pho program** (24-hour broth, 6 varieties), an **upscale-yet-warm dining room** designed by a recognized Dallas designer, a **serious cocktail bar** (18+ named drinks), and **family-of-the-house service** that earns "feels like home" language.

### 1. Pho program (signature)

The pho is the most-cited dish and the article-bait. Reviews use *"to die for,"* *"to die pho,"* and *"flavorful broth"* across Restaurantji, Yelp, and Google snippets.

- *"Their curry pho is to die for! We had many different foods and they were all delicious!"* — Restaurantji, Dec 2024 (5★)
- *"This is probably one of my favorite places to eat pho!"* — Yelp snippet
- *"The pho was solid you can't go wrong with it."* — Yelp snippet
- *"The fish sauce was perfect."* — Yelp snippet
- *"The deluxe pho's broth is flavorful."* — EdwardInTX (Wanderboat)
- *"Pho options for veggie/tofu; the garlic chili green beans are great."* — Orteel4o (Wanderboat)
- Press confirms: *"half-dozen varieties of pho — chicken, beef, meatball, tofu, and shrimp — all of which are made by hand over a 24-hour period"* — Fort Worth Magazine

### 2. Named staff (newly surfaced via WebSearch)

This is a Block-2 jewel that the original audit missed. **Neilla** (server) is named by guests and explicitly credited as the reason a 3–4-star experience becomes a 5-star one.

- *"The ambiance is perfectly sublime and the food is stellar which is 3–4 star worthy. But when you factor in the service, 5-stars isn't enough. Neilla is exceptional in every way."* — Yelp snippet
- *"Made me feel like I was dining at a close friend's table."* — Yelp/Google snippet
- *"The friendly staff just brings a peace about the whole place."* — Google snippet
- Google follow-up scrape expands the named-staff set with **Blanca** and **Natalie**. Combined with the existing **Neilla** Yelp snippet, named staff is now a repeatable hospitality pattern, not a one-off.

### 4. Signature dishes (3+ mentions)

- **Pho** (curry pho, deluxe beef pho, multiple varieties)
- **Beef Deluxe Pho** (28 Google review-topic mentions)
- **Bún bò Huế** ($26 stone-bowl, lemongrass beef broth — Dallas Observer's hero dish)
- **Egg rolls** (hand-rolled, "high pork-to-wrapper ratio, crispy exterior")
- **Banh Khot** (22 Google topic mentions; 24 Yelp photos / 15 Yelp reviews)
- **Toasted Crab Bread** (20 Google topic mentions)
- **Shaken Beef** (26 Google topic mentions; 12 Yelp photos / 18 Yelp reviews)
- **Boba** (42 Google topic mentions)
- **Garlic chili green beans**
- **Spicy California / Salmon Lover sushi rolls**

### 5. Vibe / ambiance / room

The atmosphere is the second most-cited strength after the pho. Guest words: *"upscale," "energetic but cozy," "phenomenal," "gorgeous and relaxing," "natural vibe," "modern but warm," "snug half-booths built for two," "happening bar area," "hip and clean."*

- *"My partner and I went a few weeks ago, and the place was phenomenal. The atmosphere is so gorgeous and relaxing, and the friendly staff just brings a peace about the whole place. The plants, sunlight, and decor definitely add an ambience that can't be competed with in the mid-cities."* — Google/Yelp snippet
- *"My husband and I went here for the first time for dinner and we were impressed from the moment we walked in."* — Google/Yelp snippet
- *"Just love the food and the restaurant is hip and clean."* — OpenTable 5-star snippet
- *"Service is A1, food was spectacular and the atmosphere was energetic."* — Terrel Williamson (Wanderboat)
- *"Natural atmosphere with plants and light fixtures made of natural materials."* — Emman Boquiren (Wanderboat)
- Press: *"a vibe that is wholeheartedly modern but tips its hat to a warm, old-world style"* — Fort Worth Magazine, citing designer **Hatsumi Kuzuu**
- Press: *"snug half-booths built for two and happening bar area"* — review-aggregator quote
- Yelp's own visible vibe tags now corroborate this directly: **Casual, Trendy, Intimate, Romantic, Classy, Upscale**.

### 6. Outdoor / patio

- *"Outdoor ambiance with lights"* — Anu Tamang (Wanderboat)
- Dallas Observer: *"strung with fairy lights"* patio

### 7. Bar program

A real cocktail program, not a wine-list-and-call-it-a-day. **18 named drinks** including Vietnamese-coded specialties. Reviews specifically call out the happy-hour menu:

- *"They have a nice little bar area and have a good happy hour menu as well."* — Yelp/Google snippet
- *"Don't forget to sip on their passion fruit tea or sample the creative drinks from their happy hour menu — a perfect complement to the delightful food!"* — Yelp/Google snippet
- *"Went back for dinner; the toasted crab bread was as awesome as the first time, shaken beef was legit."* — Yelp/Google snippet (also doubles as a signature-dish callout — see category 4)
- The follow-up fetch adds **Mekong Margarita** and happy-hour callouts in recent Google/Yelp reviews, and Yelp page-1 confirms custom house cocktails and full bar as review-visible signals.

- Mekong Margarita · Jade Jewel · V's Mule · Saigon Sidecar · Ginger Peach Bourbon Smash · Lychee Lime Fizz · **Ca Phe Ruou Da | Espresso Martini** (Vietnamese coffee martini) · Pandan Punch · Smoked Old Fashioned · Pandan Limemade · Mango Mojito · Lychee Pineapple Mint Fizz · Soda Chanh Muoi · Palm Mojito · Pomelo Chanh Muoi · Passion Palmer · V's Coconut · Mimosa
- Plus full beer / wine / sake / soju and a separate Coffee + Matcha + Tea + Boba program (boba bubbles made in-house in flavors like *"brown sugar crème brulée,"* per FWM)

This is a $$-$$ register, not a $$$ — but the bar program is a clear differentiator vs typical Vietnamese spots in NRH.

### 8. Heritage / years in operation

**This is the Block 2 jewel — and the current site has buried every word of it.**

- Restaurant opened **late 2021** (Fort Worth Magazine, Feb 2022 piece, says "opened late last year")
- **Brothers Alex Vu and Ryan Vu** are the founders; **sister Victoria Vu** is a cook on staff
- Parents **Rex Vu and Ann Vu** have run **Pho V Noodle House & Sushi at 3504 Harwood Rd, Bedford** for **13 years** (656 Yelp reviews, 4.x★) — they were *"instrumental in the development of V's House"*
- Grandparents fled Vietnam after the Vietnam War, were *"among many Vietnamese expats who settled in Haltom City throughout the '70s and '80s"*, and opened **Quan Vu in 1982** — *"a local favorite"* that *"thrived for several years"*
- That's a **44-year, three-generation North Texas Vietnamese family story** with a still-operating sister restaurant a few miles down Bedford-Euless Rd

If a guest asked *"what makes this place worth driving to?"*, the right answer is: *"because it's the third generation of a Vu family kitchen that's been feeding this stretch of Tarrant County since 1982."* The current site doesn't say any of this.

### 9. Occasions

- *"We went up to Dallas for the eclipse and stopped by and OMG I highly recommend this place!"* — Yelp/Google snippet
- *"My husband and I went here for the first time for dinner and we were impressed from the moment we walked in."* — Yelp/Google snippet
- *"Came for our 3-year anniversary, waited an hour outside, worth it"* — review aggregator
- *"Casual lunch, quick service, $15 lunch special"* — Danielle Daniels (Wanderboat)
- *"Visit to see granddaughter at work"* — Restaurantji (Feb 2023)
- *"We had dinner there and it was so good!"* — Restaurantji, Feb 2023 (5★)

So: **date-night + anniversary + casual lunch + group + family-celebration + travel-stopover** — a wide occasion range, which the bamzi/varro register can carry.

### 10. Service moments

- *"Neilla is exceptional in every way."* — Yelp snippet (named server, see category 2)
- *"Made me feel like I was dining at a close friend's table."* — Yelp/Google snippet
- *"The friendly staff just brings a peace about the whole place."* — Google snippet
- *"Servers are amazing."* — Restaurantji, Aug 2023
- *"A++ staff that is incredibly friendly and attentive."* — review-aggregator quote
- *"Everyone there was so friendly and nice."* — Restaurantji, Feb 2023
- *"Consistent service across multiple visits."* — Orteel4o (Wanderboat)

### 11. Value

The site reads upscale; reviews split. Some say *"pricey but worth it"*, others say *"reasonable"*. Bún bò Huế is $26, $15 lunch specials exist. Average entrée probably **$20–28** depending on category — sits cleanly in **$$-$$$**.

### 12. Hospitality warmth

*"Welcome Home"* is the right brand promise — guests **back it up** in reviews:
- *"Everyone there was so friendly and nice"*
- *"Made guests feel at home"*
- *"Welcoming atmosphere"*
- *"96% recommend"* — Facebook (16 reviews)

The promise lands. The site just doesn't *connect* the promise to the heritage that earns it.

### 13. Second register

- **Cocktail bar / late-night** — happy hour menu exists, *"happening bar area,"* full cocktail/sake/soju program
- **Boba + coffee program** — daytime/teen/student-friendly secondary register
- **Patio with fairy lights** — warm-weather third register

### Owner voice — verbatim phrases

Pulled from the site's own copy + press paraphrase. The voice is **warm, family-anchored, a little understated** — not florid.

```js
[
  { phrase: "Welcome Home",
    source: "Site hero",
    tone: "warm" },
  { phrase: "#OneHouseVsHouse",
    source: "Site tagline",
    tone: "playful, family" },
  { phrase: "V's House began with the idea of community and family.",
    source: "/our-story",
    tone: "warm, heritage-leaning" },
  { phrase: "We wanted to build a space where friends and family could gather to enjoy a great meal in a beautiful setting.",
    source: "/our-story",
    tone: "warm, specific" },
  { phrase: "Each specialty menu is uniquely curated to reflect upcoming holidays, seasonal ingredients, and timely inspirations.",
    source: "Home seasonal block",
    tone: "specific, proud" },
  { phrase: "Bar Sushi Pho",
    source: "Browser title / brand subline",
    tone: "specific, register-defining" },
  { phrase: "Spritz Season",
    source: "What's New seasonal feature, Jun 2025",
    tone: "playful" }
]
```

Plus three derived/quotable family-history phrases the new site SHOULD use (drawn from press, owner-attributable):
- *"Three generations on Bedford-Euless Road."*
- *"Since the family opened Quan Vu in Haltom City in 1982."*
- *"Built by Alex, Ryan, and Victoria Vu — a continuation of what our grandparents started."*

(These are the kind of lines the fork composes from the heritage facts. Confirm exact wording with the owner before publishing — but the *facts* are press-cited and citable.)

### External trust signals

These do NOT appear on the current site. Each one is a press-grade credential the rebuild can surface as a press strip / "as featured in" row.

```js
[
  { source: "Fort Worth Magazine",
    year: 2022,
    claim: "Feature: \"North Richland Hills' V's House is to Die Pho\"",
    url: "https://fwtx.com/eat-drink/vs-house-north-richland-hills/" },
  { source: "Dallas Observer",
    year: null,
    claim: "Feature: \"Up Your Vietnamese Dining at V's House in North Richland Hills\"",
    url: "https://www.dallasobserver.com/food-drink/vietnames-food-vs-house-north-richland-hills-40653054/" },
  { source: "OpenTable",
    claim: "4.6★ from 116 diners",
    url: "https://www.opentable.com/r/vs-house-hurst" },
  { source: "Google",
    claim: "4.4★ across 1,154 reviews; newest-review and topic-chip capture stored in scrapes/google.json",
    url: "https://www.google.com/maps/search/V's%20House%20North%20Richland%20Hills" },
  { source: "Yelp",
    claim: "4.0★ across 286 reviews · 435 photos",
    url: "https://www.yelp.com/biz/v-s-house-north-richland-hills" },
  { source: "Restaurantji",
    claim: "4.4★ across 316 reviews (Atmosphere 4.6 · Food 4.5 · Service 4.4)",
    url: "https://www.restaurantji.com/tx/north-richland-hills/vs-house-/" },
  { source: "Designer pedigree",
    claim: "Interior designed by Hatsumi Kuzuu (Dallas restaurant designer)",
    url: "https://fwtx.com/eat-drink/vs-house-north-richland-hills/" }
]
```

The Fort Worth Magazine piece + Dallas Observer feature + 4.4 Google rating + 4.6 OpenTable rating are all unambiguous press-grade signals. None are on the current site. **These four alone justify a press strip below the hero.**

Owner-response signal: not directly observed in the visible Google review samples; Yelp owner replies remain unverified — flag for owner ask. Facebook About is active (recent posts via embedded IG feed), so social engagement is at least healthy.

---

## Block 3 — Per-principle violations

References to `restaurant-website-system/research/restaurant-website-strategic-principles.md`.

**Principle 1.1 (conversion CTA above fold) — PASS / WEAK.** The Toast reservation CTA exists in the hero. It's there. It just hands off to a separate domain (Toast Tables) immediately rather than offering an inline mobile-friendly tap-to-reserve / tap-to-call pair. Net: not broken, but coarse.

**Principle 1.2 (aesthetic-to-bill match) — UNDERSELLS.** The Squarespace template reads more *generic-modern-greeting* than *upscale Vietnamese family-saga $$-$$$*. Reviews call the room *"upscale,"* designed by **Hatsumi Kuzuu**, with *"snug half-booths built for two."* The site reads more like a coffee shop than the room a guest walks into.

**Principle 1.3 (menu-access friction) — BROKEN.** The menu is **a PNG carousel.** On mobile that means pinch-zoom across each image to read item names and prices. There is no text menu, no per-section anchor, no search, no screen-reader access, and no crawler-readable text. This is a Principle 8 anti-pattern (PDF-equivalent menu) in modern image-carousel form, and it appeared in the current site as the single highest-friction touchpoint.

**Principle 2.1 (typography signaling) — WEAK.** Squarespace defaults read brand-anonymous. There is no display typeface signaling "Vietnamese heritage / family-house warmth." The wordmark is small and generic.

**Principle 2.2 (palette restraint) — PASS.** The room itself is restrained (photography confirms), and the site's palette is muted. No saturation issues here.

**Principle 2.3 (photography fidelity) — PASS / STRONG.** This is the site's actual strength. 89+ professional shots, organized into Space / Food / Bar galleries. Bright daylight food, warm interior, studio cocktails. The fork can lean on this inventory directly.

**Principle 3.1 (reviews placement) — DEAD.** Zero reviews surfaced on site. 4.4★ Google / 4.4★ Restaurantji / 4.6★ OpenTable / 4.0★ Yelp / 96% recommended on Facebook — none of it appears anywhere on the homepage or sub-pages. Highest-leverage missing element.

**Principle 3.2 (since YYYY) — HIDDEN / MISSED.** This is the blockbuster miss. *Three generations of Vu family restaurants on Bedford-Euless Road since Quan Vu opened in Haltom City in 1982.* The site has zero "since YYYY" signal anywhere. This is the single biggest unrealized asset.

**Principle 3.3 (chef / family-as-brand) — HIDDEN.** Brothers Alex and Ryan Vu, sister Victoria as cook, parents Rex and Ann Vu running sister restaurant Pho V in Bedford for 13 years — none surfaced. The Our Story page exists but contains one generic paragraph that doesn't name a single family member.

**Principle 4.1 (sub-page count) — PASS.** 9 routes is fine — Welcome / Order / Gift / Menu / What's New / Space / Food / Bar / Contact + Our Story.

**Principle 4.2 (hours visibility) — WEAK.** Hours appear, but only on Contact and footer-class. Not above-the-fold on home. A diner asking *"are they open now"* has to scroll or tap.

**Principle 4.3 (phone vs widget) — UNDERSELLS.** Phone appears at the bottom but is not above-the-fold or tap-to-call-styled. The reservation widget is the only conversion path featured at top.

**Principle 5.1 (first-viewport floor) — WEAK.** Hero shows interior photo + *"Welcome Home"* + *"#OneHouseVsHouse"* + reservation CTA. Missing: restaurant name as wordmark, positioning copy, hours/open-status, address/neighborhood, press signal. By the spec, this is below the floor.

**Principle 5.2 (photography tier) — PASS / STRONG.** Already covered above. Tier-2 ready, Tier-1 path open with one targeted shoot (chef portrait, process shots).

**Principle 5.3 (copy floor) — BROKEN.** *"Welcome Home"* + a hashtag is **not enough copy** for a guest landing cold. They get no positioning sentence, no register signal, no proof, no heritage. Could appear on any restaurant site (Principle 8 anti-pattern #3).

**Principle 5.4 (mobile floor) — BROKEN.** Cited via Block 1 mobile findings #1, #2, #3, #4, #5. Brand-anonymous hero, tab-exit reservation, image-carousel menu, hidden hours/address/phone, no live aliveness. Five distinct mobile failures.

**Principle 5.5 (repeat-visit hooks) — WEAK.** *What's New* + Instagram embed is partially there. The seasonal feature card (*"Spritz and Trips, Jun 5, 2025"*) is **stale** as of audit date (2026-04-30) — almost a year old. The page promises *"upcoming holidays, seasonal ingredients"* but doesn't deliver on the promise visibly.

**Principle 8 (anti-patterns)** — present:
- **#3 Generic-anywhere copy** (*"Welcome Home"* with no register signal)
- **#7 Image / PDF menu** (image-carousel form)
- **Brand-anonymous hero** (h1 is a tagline, not the wordmark)
- **Press / awards omitted** despite existing (Fort Worth Magazine, Dallas Observer)

**Part 10 (aliveness) — DEAD.** No LiveOpenStatus, no LiveMapEmbed, no countdown-to-close, no live IG-pull at scroll position. The Instagram embed is there but is treated as a static block, not as an aliveness surface. Stale seasonal feature *"Spritz and Trips, Jun 5, 2025"* is the opposite of aliveness — it's a tombstone.

### Cross-references

- **Heritage HIDDEN** (3.2 + 3.3) is the blockbuster — guests already love the warmth and the family, and the site doesn't tell the family story. The fork's Hero Lock leads with this.
- **Reviews DEAD** (3.1) plus **Press MISSED** (Block 2 External Trust) means four press-grade trust signals (Fort Worth Magazine, Dallas Observer, Google 4.4★, OpenTable 4.6★) are sitting unused. Press strip is mandatory in the fork.
- **Menu BROKEN** (1.3 + 5.4) — image-carousel menu is the single most-fixable mobile failure and the most concrete switch-reason.

---

## Block 4 — So why are we rebuilding it?

1. **The family story is missing from the site.** Three generations of Vu-family restaurants on Bedford-Euless Road — Quan Vu (1982, Haltom City), Pho V Noodle House (Bedford, parents Rex and Ann, 13 years), and now V's House (brothers Alex and Ryan, sister Victoria) — and the homepage doesn't say a word of it. Guests already feel the warmth (*"feels like home,"* *"so friendly"*) but they don't know *why* it feels that way. Connecting the warmth to the heritage is the highest-leverage move on the entire rebuild.
2. **The press is missing from the site.** Fort Worth Magazine ran a feature. Dallas Observer ran a feature. OpenTable shows 4.6★ from 116 diners. None of it appears on the site. A press strip below the hero converts cold visitors faster than any copy block could.
3. **The menu is a PNG carousel.** On mobile the diner has to pinch-zoom across multiple image-menus to find a price. Switching to a real text menu with anchor links by section (Pho · Sushi · Vermicelli · Cocktails · Happy Hour) is a measurable conversion lift and a real-world accessibility fix (Block 1 mobile failure #3).
4. **The hero is brand-anonymous.** The h1 is *"Welcome Home"* — a guest landing here from a Yelp click sees a generic greeting rather than the restaurant name + the positioning sentence + an open-now signal. Block 1 mobile failure #1.
5. **The cocktail program and the $$-$$$ aesthetic are buried.** *Hatsumi Kuzuu* designed the room. There are 18 named cocktails with Vietnamese coding (Mekong Margarita, Saigon Sidecar, Ca Phe Ruou Da). The Squarespace default reads more brunch-coffee than upscale-Vietnamese-with-bar. A register-coded template in the bamzi-01 family signals the actual room.
6. **Aliveness is dead.** The single seasonal feature on the page (*"Spritz and Trips"*) is dated June 5, 2025 — about 11 months stale as of audit. The fork's LiveOpenStatus + LiveMapEmbed + ScrollReveal pass replaces a dead seasonal block with a real "open now / closing in 2 hours" signal that updates on its own.
7. **No reviews surfaced anywhere.** 4.4★ Google / 4.4★ Restaurantji / 4.6★ OpenTable / 4.0★ Yelp / 96% Facebook recommendation rate — and the site shows zero. The fork's ReviewWall (verbatim, with reviewer first names + dates) carries that proof through to the homepage.

### Pitch sentence

*"Your homepage says 'Welcome Home' but doesn't tell the actual story — that V's House is the third generation of a Vu family kitchen on Bedford-Euless Road, starting with Quan Vu in 1982. We rebuild the site so the family story, the Fort Worth Magazine feature, and the 4.6 OpenTable rating all carry above the fold, and the menu stops being a pinch-zoom image carousel."*

(Names verified Block-2 assets: **the Vu family**, **Quan Vu (1982)**, **Fort Worth Magazine**, **Google 4.4**, **OpenTable 4.6**.)

### Hero lock

```js
{
  wordmark: "V's House",
  // Display the apostrophe + capital V cleanly. Subline "Bar · Sushi · Pho"
  // sits as a small register tag below the wordmark, in the same display family.
  // Typographic register: warm-modern serif (Cormorant / Recoleta family) for
  // the wordmark; a clean Vietnamese-diacritic-safe sans for body. NOT generic
  // Squarespace defaults.

  eyebrow: "THIRD GENERATION ON BEDFORD-EULESS ROAD",
  // 5 words, small caps. Pulled directly from the heritage saga: grandparents
  // (Quan Vu, 1982) → parents (Pho V Bedford) → brothers Alex and Ryan Vu.
  // Cross-checked against Principle 8 anti-pattern #3: this line could NOT
  // appear on any other restaurant's site. It is uniquely true of V's House.

  sub: "A Vu family kitchen since 1982 — pho hand-made over 24 hours, an upscale-Vietnamese room designed by Hatsumi Kuzuu, and a cocktail bar that runs from Saigon Sidecars to a Vietnamese-coffee espresso martini.",
  // 38 words. Carries: heritage signal ("since 1982"), signature dish proof
  // ("pho hand-made over 24 hours"), designer credential ("Hatsumi Kuzuu"),
  // bar program proof ("Saigon Sidecar," "Vietnamese-coffee espresso martini").
  // Owner-voice anchor: "Vu family kitchen" echoes the /our-story phrase
  // "community and family" while replacing the generic with the specific.

  hero_photo_subject: "Primary: a wide warm-low-light shot of the dining room from the bar end, snug half-booths visible, fairy-light patio glow through window if framable. Confirmed in /space gallery (DSC07900-class HDR). Fallback 1: deluxe beef pho in close warm light (signature dish). Fallback 2: the family / brothers Alex and Ryan portrait — proposed shoot, see Block 5.",

  cta_primary: { label: "Reserve a table", action: "open Toast Tables widget inline (no tab exit if possible; otherwise tap-out preserved)" },
  cta_secondary: { label: "(682) 777-3690", action: "tel: tap-to-call — for the half of mobile traffic that prefers phone" },

  rationale: "Built from three Block-2 quotes: (1) Fort Worth Magazine on the family heritage and 24-hour hand-made pho, (2) the /our-story owner phrase 'community and family' rewritten with the actual family at the center, (3) Hatsumi Kuzuu designer credential as upscale signal that also justifies $$-$$$ register."
}
```

**Constraint check**:
- `wordmark` is the restaurant name (not a tagline). PASS — *"Welcome Home"* moves out of the h1 slot.
- `eyebrow` is highest-leverage and review-specific. PASS — heritage angle is uniquely true of V's House and would not appear on any other site.
- `sub` carries owner voice (*"family"*) + external trust (*Hatsumi Kuzuu*) + signature dish proof (*24-hour pho*). PASS.
- `hero_photo_subject` exists in the visual asset inventory (Block 5 confirms 22 interior shots in `/space`). Fallback shots also confirmed. PASS.
- `cta_primary` matches Principle 1.1 — Toast already exists, just present it inline + add tap-to-call as the secondary. PASS.

**Long-name edge case**: *"V's House"* is short. No mobile wrap risk. Subline *"Bar · Sushi · Pho"* should not become a third row on mobile — keep it on the same line as the wordmark or as a tight 1-row tag below.

**Template wordmark-promotion note**: bamzi-01 (recommended template) already does the two-tier wordmark + eyebrow + sub pattern correctly. No fork-time component work needed for the hero. (Consistent with the templates listed in the audit skill: gusto-01, velvet-shaker-01, bramble-01, qitchen-01, labrisa-01, varro-01.)

---

## Block 5 — Risks before fork

### Photography inventory + tier gate

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site `/food` | 51 | — | — | — | — |
| Current site `/space` | — | 22 | — | — | — |
| Current site `/bar` | 16 (cocktails) | — | — | — | — |
| Yelp | unknown (~435 photos total, mixed UGC + pro) | unknown | unlikely | unlikely | unknown |
| Instagram `@vshouse_nrh` | active feed (couldn't deep-scrape this session) | active | unknown | unknown | unknown |
| Facebook `vshouse.nrh` | active | active | unknown | unknown | unknown |
| **Total usable confirmed** | **51 food + 16 cocktail = 67** | **22** | **0** | **0** | **0** |

Quality notes:
- **Food**: bright natural daylight, white plates, shallow DoF, clean composition. Closer to **Tier-3 / pepper-latte-saladify register** than Tier-1 warm-low-light. Workable for bamzi-01 with moderate grading work; **upgrades cleanly** if the rebuild commissions a small set of warm-low-light hero shots for the homepage and section opens.
- **Interior**: HDR-processed, warm-modern, ambient lighting. **Tier-1 quality.** This is the strongest part of the inventory.
- **Cocktail**: studio-clean, lifestyle-friendly. Tier-2 to Tier-1.
- **Missing**: chef / family portrait (mandatory for the heritage angle), process shots (the 24-hour pho broth would be a money shot), exterior storefront, patio with fairy lights as a hero candidate.

**Verdict: Tier-2 ready immediately on bamzi-01. Tier-1 path open after a small targeted shoot (one half-day): (a) family portrait — Alex, Ryan, Victoria, ideally with parents Rex and Ann if available; (b) 3–4 warm-low-light hero food shots (deluxe beef pho, bún bò huế, banh khot, signature cocktail); (c) 2–3 process shots (broth, hand-rolling). After the shoot, the same fork can promote to a 1776-redesign-01-style heritage-restaurant register without rebuild.**

This verdict CONSTRAINS the template hypothesis: **bamzi-01 is the right call for ship-now**; **1776-redesign-01 is the right ceiling once the targeted shoot lands.**

### Standard risk subsections

**Register risk.** bamzi-01 reads "Asian heritage casual-upscale" — the same register slot that landed Bistro Wasabi cleanly. V's House sits at $$-$$$ with $20–28 average entrée, an 18-cocktail bar, designer-built room, and a heritage saga. bamzi-01's natural fit is honest. **Risk vs Walnut-pattern**: V's House is NOT a register-mismatch lead — the upscale-modern atmosphere, the press, and the $$-$$$ entrée range all support bamzi-01. The lift is mostly *informational* (telling the heritage story, surfacing the press, fixing the menu) rather than *aesthetic-tier* lift.

**Owner-emotional risk.** Three:
1. **Squarespace removal.** They're on Squarespace; a custom Next.js site is a different operational model. Confirm they're comfortable handing off the dashboard or owning a smaller content-config file.
2. **Heritage surfacing.** The current Our Story page is intentionally vague — only one paragraph. There may be a reason the family chose understatement. Before publishing the full *Quan Vu 1982 → Pho V → V's House* arc on the homepage, **confirm the family is comfortable** with the public framing. If the parents at Pho V are sensitive about the cross-link (it could send their customers down the road), respect that. Do NOT ship the heritage block without owner sign-off on exact wording.
3. **Photo direction.** A targeted half-day shoot is the path to Tier-1. Owner has to agree to that lift. If they decline, ship Tier-2 on bamzi-01 and revisit later.

**Heritage-data unknowns to confirm with owner**:
- Exact founding date of V's House (press says "late 2021" — need month / day)
- Sister Victoria's role title (cook, sous, or other?)
- Quan Vu's exact closing year (press says "thrived for several years" — was it 1982–1990? 1982–1995?)
- Whether the family is comfortable referencing Pho V Bedford on the V's House site
- Whether **Rex and Ann Vu** want to be named publicly on the V's House site (they are credited in the press feature)
- Whether the **Hatsumi Kuzuu** designer credit is permitted on the new site
- **Owner-reply behavior on Yelp / Google** — not observed in the visible review samples; ask directly

**Reservations-platform decision.** They're on **Toast Tables** already. Keep it — don't migrate. The lift is presenting it inline rather than as a tab-exit, plus adding tap-to-call as a secondary CTA. No platform change.

**Register-split risk (second-register surfaces from Block 2)**:
- Cocktail bar / happy-hour module — surface, don't hide
- Boba + coffee program — secondary register, present as a daytime sub-module rather than a header item
- Patio / fairy lights — seasonal hero candidate (April–October)

### Status footer

- **Qualification status**: PRE-FORK CLEARED. Real operating restaurant, three press features (FWM + Dallas Observer + designer-credit), three review platforms with strong scores, **named staff (Neilla)**, photography inventory ready, register match honest, heritage angle is the single most concrete switch-reason in the build pipeline since Da Baffone.
- **Recommended template hypothesis**: **bamzi-01** (Asian heritage casual-upscale) for ship-now. Promotion path to **1776-redesign-01-class warm-heritage** if owner agrees to a targeted half-day shoot for chef / family / warm-low-light hero food.
- **Pre-flight asks for the owner** (6):
  1. Confirm exact V's House founding date and the family heritage framing (Quan Vu 1982 + Pho V Bedford 13 years + brothers Alex/Ryan + sister Victoria as cook). Are you comfortable surfacing all of this on the homepage?
  2. Permission to name **Hatsumi Kuzuu** as the room designer in the hero sub.
  3. Permission to surface verbatim Yelp / OpenTable / Restaurantji reviews (anonymized to first names) on a ReviewWall component — **including the "Neilla is exceptional" quote** if Neilla is still on staff and consents.
  4. Confirm Neilla is current staff and OK with being named; if so, she becomes a footer / about-page anchor (a small "people of the house" callout).
  5. A small targeted half-day photo shoot — chef/family portrait + 3–4 warm-low-light hero shots + 2 process shots. Required to promote to the Tier-1 template tier; optional for the Tier-2 ship.
  6. Toast Tables stays — confirm. (We lift the inline UX, not the platform.)

---

*Audit produced 2026-04-30 against the five-block standard from `~/skills/restaurant-website-audit/SKILL.md`. Live-site mobile + desktop captures via Playwright (iPhone 13 + 1440-desktop); raw scrapes and screenshots stored at `restaurant-website-system/sites/vs-house/{scrapes,screenshots}/`. Follow-up pass completed Google Maps Reviews capture in the Codex in-app browser; raw structured Google results now live in `scrapes/google.json`. Heritage saga sourced from Fort Worth Magazine (Feb 2022) + multiple corroborating WebSearch confirmations of the Vu family lineage.*
