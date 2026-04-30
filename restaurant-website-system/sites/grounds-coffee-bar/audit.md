# Grounds Coffee Bar - Strategic Site Audit

> Source audit: `research/lead-qualification/next-3-deep-research-audits-2026-04-27.md`, section `### 3. Grounds Coffee Bar - Crystal Lake`.
>
> Current sites checked: `https://www.groundscoffeeroasters.com/`, `https://www.groundscb.com/`, `https://groundscrystallake.com/`.

## Decision

Build as the third prospect after Vine & Plate.

Grounds is a lower-ticket vertical than Italian or wine-bar work, but the leak is cleaner: customers are split between a useful roaster commerce site, a thin cafe shell, and a stale legacy path. The current cafe `/menu` URL returns 404, so the guest cannot answer the basic cafe questions on a crawlable owned page.

## Why Build

The current ecosystem has useful parts:

- The roaster site has a shop, subscriptions, coffee product names, address, email, and brand proof.
- The cafe shell likely matters for ordering or Square operations and should be preserved.
- Third-party listings confirm a real downtown Crystal Lake cafe at 89 N Williams St with phone `(815) 900-1339`.
- The user-supplied Google review packet gives strong atmosphere and service copy: cozy room, friendly baristas, seasonal lattes, nitro cold brew, Honey Bee latte, pastries, laptop seating, local goods, and helpful service recovery.

The issue is not that every provider should be replaced. The issue is that no single local path answers: what can I order, when are they open, where do I go, and can I order or buy beans?

## Current-State Findings

| Finding | Evidence | Prototype Fix |
| --- | --- | --- |
| Cafe and roaster paths are split. | Roaster site links out to `groundscb.com` as the cafe website. | Homepage presents cafe menu, hours, order, roaster beans, and subscriptions in one flow. |
| Cafe `/menu` returns 404. | `curl -I https://www.groundscb.com/menu` returned HTTP 404 on 2026-04-28. | Dedicated `/menu` route with page-native categories and item rows. |
| Cafe shell is thin. | `groundscb.com` root returns 200, but the audit found no crawlable menu text. | App content is server-rendered Next.js with structured menu, address, phone, hours, and schema. |
| Roaster commerce is useful but not cafe-first. | Official roaster shop lists Day Break, Colombia, and Guatemala roasts at $21.99 and promotes subscriptions. | Roaster bridge links to shop and subscriptions after the cafe menu. |
| Legacy path is stale. | `groundscrystallake.com` failed DNS resolution locally. | Docs and pitch frame the new site as the canonical local wrapper. |

## Implementation Choices

- Used `latte-01` because it is the catalog's menu-first specialty coffee template.
- Kept the strongest Latte structure: hero, full menu stack, simple subpages, roaster/news grid, story split, and footer.
- Shifted the palette from black-and-cream to evergreen-accented cafe warmth, matching the visible storefront awnings.
- Replaced "Latest coffee news" with a roaster commerce module because Grounds already sells beans and subscriptions.
- Added a Google-review proof section with an auto-rotating quote card, review theme cards, and copy drawn from repeated guest language.
- Added a time-aware hero note and soft ambient photo cycling per the aliveness guidance for `latte-01` style cafe forks.
- Added `CafeOrCoffeeShop` JSON-LD with address, phone, hours, menu, order action, roaster links, and `sameAs`.
- Kept provider handoffs external. Order points to the current cafe shell; beans and subscriptions point to the official roaster site.

## Pitch Sentence

"Your roaster site sells beans, but the cafe website has no crawlable menu and `/menu` is a 404; I mocked one clean cafe + roaster site so local guests can actually find what to order and where to go."

## Risks

- Coffee economics are lower than full-service restaurant economics. Lead with the unusually clear leak, not a generic redesign claim.
- If `groundscb.com` powers live Square ordering, preserve it and make the wrapper drive traffic to it.
- Menu items and prices must be owner-confirmed. The prototype uses third-party visible favorites plus cafe-standard categories to show the missing structure.
- Third-party listings disagree on hours. The prototype uses daily 7:00 AM - 3:00 PM; confirm before any real deployment.
- Restaurantji/Sirved expose `groundscl.com` in order/cafe contexts, but local fetch did not complete. Treat this as a domain-cleanup question.

## Secret Sauce

The Google review packet makes the cold pitch warmer: Grounds is cozy, laptop-friendly, friendly at the counter, remembered for named drinks, and useful as both a cafe and roaster. The site should not only fix split domains and a 404 menu; it should make Honey Bee lattes, nitro cold brew, pastries, local goods, pup cups, and the roaster bridge easy to find.

---

## Block 1 — Mobile state (iPhone 13, 390x844)

Captured via WebFetch on 2026-04-29 against `https://www.groundscb.com/` (cafe shell) and `https://www.groundscoffeeroasters.com/` (roaster commerce). The cafe shell is the primary local cafe surface — and it is **functionally dead for content extraction**. WebFetch returns no readable HTML body. The roaster site renders content but is the wrong surface for a downtown-cafe guest.

1. **Cafe shell `groundscb.com` is a content-empty Wix-class wrapper.** WebFetch returns no extractable hero, no menu, no hours, no address. Either the site is server-rendered behind heavy JavaScript that strips for crawlers, or the cafe shell is operationally a redirect surface. Either failure mode is the same from a guest's perspective: open the cafe site on phone, see nothing useful, bounce.
2. **`/menu` returns HTTP 404** (confirmed in original audit via `curl -I` on 2026-04-28). The single highest-intent mobile click on a cafe website lands on a dead page. There is no PDF fallback, no inline menu, no redirect to the roaster.
3. **Split-brand confusion on mobile.** The roaster site (`groundscoffeeroasters.com`) carries cafe address + email + phone, but the hero says *"Discover Our Micro Roasted Coffees"* — guests looking for a Honey Bee latte at 8am Saturday do not parse this as the cafe. Two domains, two heroes, no canonical local path.
4. **No `tel:` linkification confirmable.** The roaster site lists `(815) 900-1339` but renders it as static text in the contact module — same tap-to-call failure pattern as Addison's, applied to the only working surface.
5. **No `LiveOpenStatus` on either domain.** Hours are static text on the roaster site; nothing on the cafe shell. A Saturday 2:45pm guest cannot tell from either surface whether they have 15 minutes to walk over before close.

**Net mobile state:** the cafe-discovery funnel is broken at the canonical domain (`groundscb.com` is a thin shell, `/menu` is a 404), and the working domain (`groundscoffeeroasters.com`) is positioned as a roaster commerce site, not a cafe. **BLOCKER nuance:** the primary cafe domain is not technically offline — it returns HTTP 200 — but it returns no extractable content, which is operationally equivalent to offline for a mobile guest. The fork's job is to be the canonical local cafe surface that neither current domain provides.

---

## Block 2 — External trust signals

Searched: *"Grounds Coffee Bar Crystal Lake review"*, *"Grounds Crystal Lake best coffee"*, *"Grounds Coffee Roasters Crystal Lake Illinois award best of"*. Cross-checked Yelp, joe.coffee, downtowncl.org, McHenry Life, Naturally McHenry County, Enjoy Illinois, Conscious Cup roaster network.

```
[
  { source: "Yelp", year: 2026, claim: "4.5 stars - 113 reviews - 151 photos as of April 2026", url: "https://www.yelp.com/biz/grounds-coffee-bar-and-cafe-crystal-lake" },
  { source: "Google (per third-party aggregators)", year: 2026, claim: "4.5 stars across 457 reviews", url: "https://grounds-coffee-bar.wheree.com/" },
  { source: "Downtown Crystal Lake (downtowncl.org)", year: "current", claim: "official downtown business directory listing", url: "https://downtowncl.org/places/grounds-coffee-bar/" },
  { source: "McHenry Life", year: "current", claim: "Coffee, Tea, & Cafes dining directory feature - listed as 'Grounds Coffee Bar & Roastery'", url: "https://mchenrylife.com/dining-entertainment/coffee-tea-cafes/crystal-lake/grounds-coffee-bar-roastery/" },
  { source: "Naturally McHenry County", year: "current", claim: "tourism/regional listing", url: "https://www.naturallymchenrycounty.com/listing/grounds-coffee-bar-&-cafe/577/" },
  { source: "Enjoy Illinois (state tourism)", year: "current", claim: "official state tourism listing", url: "https://www.enjoyillinois.com/explore/listing/grounds-coffee-bar-and-cafe/" },
  { source: "Joe Coffee app", year: "current", claim: "listed as a specialty cafe on the Joe Coffee mobile-order network - signals roaster-grade positioning", url: "https://joe.coffee/locations/il/crystal-lake/grounds-coffee-bar-crystal-lake-3449774d-67b9-4a4a-8848-7a50025c497e/" },
  { source: "Your Girl Needs Coffee (cute-coffee blog)", year: "current", claim: "featured cafe on a regional indie-coffee guide", url: "https://yourgirlneedscoffee.com/shop/grounds-coffee-bar-crystal-lake-il" }
]
```

**Honest no-finds:** zero formal awards (no Daily Herald "Best Of," no Crain's coverage, no Eater Chicago feature, no James Beard, no Northwest Herald press hit found in this pass). The trust strip the fork can build is **community-membership + aggregator-rating tier** (Downtown CL, McHenry Life, Enjoy Illinois, Joe Coffee network, 4.5 stars across 113 Yelp + 457 Google reviews). Don't claim awards that aren't there.

**Founding-year signal:** independent search surfaced *"started in 2014, started roasting their own coffee in the shop in 2019"* via cached aggregator copy — usable as a "Since 2014" stamp pending owner confirmation. Roasting program is *"since 2019"* — usable as a separate "Roasting since 2019" sub-stamp on the beans surface.

**Owner-response signal:** not directly captured (Google review reply chain not in current input packet); Block 5 should ask the owner whether they reply to Google reviews — if yes, mirror that aliveness on the new site via a `LiveReviewsCarousel`.

---

## Block 2 — Owner voice phrase bank

Source: `groundscoffeeroasters.com/` homepage and `/about` page (WebFetch 2026-04-29). The cafe shell `groundscb.com` was content-empty for extraction, and Instagram (`@groundscoffeebar` and `@groundscoffeecl`) bios were behind image-only renders — phrases below are pulled from the only extractable owner surface.

```
[
  { phrase: "Cozy coffee for downtown Crystal Lake", source: "current fork hero (already locked, retain)", tone: "warm, specific" },
  { phrase: "Crafting Comforting Coffee Experiences", source: "groundscoffeeroasters.com tagline", tone: "warm, brand-line" },
  { phrase: "Discover Our Micro Roasted Coffees", source: "groundscoffeeroasters.com hero", tone: "proud, specific" },
  { phrase: "great coffee is more than just a drink-it's an experience that brings people together", source: "groundscoffeeroasters.com About", tone: "warm, community" },
  { phrase: "We carefully source high-quality beans from ethical farms", source: "groundscoffeeroasters.com About", tone: "specific, proud" },
  { phrase: "creating a space where everyone feels like they belong", source: "groundscoffeeroasters.com About", tone: "warm, community" },
  { phrase: "Join us in the pursuit of great coffee and memorable moments.", source: "groundscoffeeroasters.com About CTA", tone: "warm sign-off" },
  { phrase: "supporting local artisans, hosting events", source: "groundscoffeeroasters.com About", tone: "specific, community" }
]
```

**Voice signature:** first-person plural, warm-community register, anchors on *"comforting,"* *"belong,"* *"brings people together,"* *"local."* Avoid AI-filler register-shifters in the rebuild — *"elevate,"* *"craft cocktail of coffees,"* *"third wave,"* *"artisanal experience."* Owner does not talk like that; Grounds does not need to either. The current fork's hero already mirrors this tone (*"Cozy coffee for downtown Crystal Lake"* echoes *"Crafting Comforting Coffee Experiences"*) — keep it.

**Extraction limit:** Instagram and Facebook bios were not extractable via WebFetch (Instagram returns image-only renders, FB About text was truncated). Pre-flight ask in Block 5: have the owner paste their IG bio + a recent IG caption + their FB About paragraph — those four extra sources should pull this phrase bank from 8 to 12+ and likely surface a founder name, which is currently unknown.

---

## Block 5 — Photography inventory + tier gate (FIRST)

Per Principle 5.2, photography is 40-60% of register fidelity. Coffee-shop forks (latte-class) sit at Tier-3 by default — 8-12 bright daylight signature-drink shots is the floor — but the current fork mixes first-party imagery with Unsplash stock, which is the photo-tier failure mode the audit upgrade was designed to catch.

| Source | Drink shots | Interior shots | Roaster/bean shots | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current fork (`content.example.ts`) - **first-party** | 1 (cafedrinkImage from local cafe data CDN) | 0 | 1 (officialBeansImage from roaster Wix site) | 1 (officialExteriorImage from roaster Wix site) | 0 |
| Current fork (`content.example.ts`) - **Unsplash stock** | 4 (signature lattes, tea, breakfast, pastries category cards + 2 blog tiles for single-origins + subscriptions) | 0 | 0 | 0 | 0 |
| `groundscb.com` cafe shell | 0 extractable | 0 extractable | 0 extractable | 0 extractable | 0 extractable |
| `groundscoffeeroasters.com` roaster site | unverified | unverified | several (product shots) | 1 confirmed | unverified |
| Yelp | ~151 user photos as of April 2026 | many | some | yes | mixed |
| Google Maps | abundant (per third-party aggregators) | many | some | yes | mixed |
| Instagram `@groundscoffeebar` / `@groundscoffeecl` | not extracted - **owner ask** | - | - | - | - |
| Facebook `@Groundscrystallake` | not extracted - **owner ask** | - | - | - | - |
| Owner-supplied | **unknown - must ask** | | | | |
| **Total usable (current state)** | ~3 first-party + abundant user-photo Tier-3 | abundant user-photo Tier-3 | a handful first-party | 1-2 first-party | thin |

**Verdict: Tier-3 ready / Tier-2 reach with owner-supplied IG harvest. Tier-1 not in scope** (latte-class fork is correctly sub-Tier-1 by design — Principle 5.2 ladder).

**Stock-pad flag (the upgrade-pass finding):** four of seven category-and-blog photo slots in `content.example.ts` are Unsplash (`photo-1517701604599-bb29b565090c`, `photo-1544787219-7f47ccb76574`, `photo-1525351484163-7529414344d8`, `photo-1555507036-ab1f4038808a`, `photo-1442512595331-e89e73853f31`, `photo-1559056199-641a0ac8b55e`). This is exactly the photo-tier failure the audit upgrade was designed to catch: the hero is first-party (good), but the breakfast / signature-latte / tea / pastry / single-origins / subscriptions surfaces are stock. A latte-class cafe customer in 2026 reads stock photos as "this is not their actual cafe" within ~2 seconds of scrolling — Principle 5.2 specifically calls out stock-substitution as a Tier-1 register-killer and a Tier-3 trust-killer.

**Pre-fork remediation path (mandatory before pitch ship):**
- **Step 1 (free):** harvest 8-12 first-party shots from the owner's Instagram (`@groundscoffeebar` and `@groundscoffeecl` are both live Grounds accounts per the roaster site's social block) and Facebook (`@Groundscrystallake`). Replace all six Unsplash slots with real Honey Bee, Nutella, Chai, breakfast sandwich, croissant, and bean-bag photos. This alone moves the fork from "stock-pad Tier-3" to "true Tier-3."
- **Step 2 (paid, optional):** request a 12-shot phone-grade owner shoot for the named drinks — this is *not* a pro shoot ask, just "Honey Bee latte in good window light at 9am, six lattes by name, three pastries, one cafe-interior wide." Coffee-shop economics don't justify a $2k pro shoot; iPhone-in-window-light is the truthful Tier-3 standard.

**Implication for template hypothesis:** `latte-01` remains the right fork — register-fit is correct. The risk is not template tier, it is **photo-source authenticity within Tier-3**. Don't ship the current six-stock-photo state to the owner; either swap to first-party harvest (Step 1) before pitch, or flag the stock-pad explicitly in the pitch deck as "we mocked the structure with placeholders; production fork pulls your real Honey Bee + breakfast shots from your IG."

---

**Audit upgraded 2026-04-29** with the 4 retroactive captures (Mobile state - External Trust - Owner Voice - Photo Tier Gate). Coffee-shop fork; Hero Lock was already strong (*"Cozy coffee for downtown Crystal Lake"* + Honey Bee latte signature) and is retained without rewrite. The load-bearing finding from this pass: the fork's category-and-blog imagery is 4-of-7 Unsplash stock — remediate via owner IG harvest before pitch ship. Pre-flight asks for the owner: (1) IG bio + recent caption + FB About paragraph for owner-voice phrase-bank top-up, (2) confirm "Since 2014" cafe + "Roasting since 2019" stamps, (3) confirm `groundscb.com` is the live Square order surface or just a shell, (4) commit to a 12-shot phone-grade drink + pastry shoot (or send 12 IG shots we can pull from), (5) do you reply to Google reviews? - drives whether the new site mirrors that aliveness.
