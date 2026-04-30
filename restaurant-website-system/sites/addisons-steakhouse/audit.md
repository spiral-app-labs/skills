# Addison's Steakhouse — pre-fork audit

**Site:** https://www.addisonssteakhouse.com
**Location:** 335 Front St., McHenry, IL 60050
**Concept:** independent family-owned steakhouse + seafood + bar program
**Owners (per reviews):** Andrea and Jon
**Audit date:** 2026-04-29
**Reference:** `research/restaurant-website-strategic-principles.md`

---

## 1. Verbatim findings

| Field | What's actually on the site |
|---|---|
| **Platform fingerprint** | **Wix** — confirmed via footer string `"© 2023 by Steakhouse. Proudly created with Wix.com"` (boilerplate copyright never edited; "Steakhouse" is the Wix project name, not the restaurant name) |
| **Hero headline** | `ADDISON'S STEAKHOUSE` |
| **Hero subhead** | `GReAT aMERICAN FOOD` (verbatim — mixed-case typography artifact, looks like a paste glitch nobody fixed) |
| **Hero CTAs** | `Order Online` + `Reserve your table now! 815-322-2546` |
| **Hero image** | Restaurant interior/ambiance (no dish photography, no chef, no exterior) |
| **Address (above fold)** | `335 Front St. McHenry, IL 60050` |
| **Phone (above fold)** | `815-322-2546` (header + reservation strip) |
| **Reservation flow** | Phone-call only. No OpenTable / Resy / Tock / SevenRooms widget. Zero online-booking path. |
| **Navigation (in order)** | `HOME · Mother's Day Brunch · Mother's Day Dinner · MENU · Sunday Football Specials · SPECIALS · Wine List · Dessert List · OUR PLACE · RESERVATIONS · CONTACT & LOCATION · More...` (12+ items, "More…" overflow on top of that) |
| **Menu format** | On-page HTML (good — not a PDF). 8 sections: Starters, Steaks & Chops, Surf for Your Turf, Entrees, Soup & Salads, Signature Burgers & Sandwiches, Sides, Sauces/Crusts/Compound Butters. Prices listed. GF + V badges present. |
| **Sample menu copy** | `Seared Scallops — $22 — two jumbo day boat dry-packed diver scallops served over our signature rice pilaf with orange rum butter reduction` |
| **About-section copy** | `Traditional steakhouse, Modern twist` · `Serving the finest cuts of meat` · `Family owned and operated` · `We try to push the envelope everyday to create modern dishes that are based on traditional steakhouse menu items.` · `We pride ourselves on cooking all of our menu items from scratch every time you come in.` |
| **Hours** | `monday closed / tuesday to Sunday 11:30am-9pm` (footer only, lowercase) |
| **Photography** | ~6 images total. Hero is interior. No chef portrait. No dish hero. No interior gallery beyond hero. |
| **Owner / chef story** | None. Reviews repeatedly name "Mike the Chef," owners Andrea and Jon, named regulars (Kelly, Peyton, Spencer, Kirsten, Allison, Andrea-bartender) — none of this is on the site. |
| **Heritage signal** | None. No "Since YYYY," no story, no founding date, no McHenry-roots claim. |
| **Reviews / press / awards** | None displayed. (Google rating exists — 25+ five-star reviews quoted in this audit's source brief — but it's invisible on the site.) |
| **Aliveness elements** | Static address string. Static hours. No `LiveOpenStatus`. No `LiveMapEmbed`. No `LiveReviewsCarousel`. No scroll-reveal motion. No event calendar despite holiday-themed nav items. |
| **Social** | Not visible above fold; not surfaced. |
| **Copyright string** | `© 2023 by Steakhouse. Proudly created with Wix.com` — last updated 2023 (≥2 years stale), default project name preserved |

### Mobile state (iPhone 13, 390×844)

Captured via WebFetch HTML/CSS inspection of the live site. *(Full preview-browser screenshot capture deferred until operational address is confirmed — see Block 5 BLOCKER. The findings below are derived from source HTML.)*

1. **Phone number is plain text, not a `tel:` link** — `815-322-2546` is rendered as static text. Customer cannot tap-to-call from mobile. This is the primary conversion path for the entire site, and it requires copy-paste-then-dial. **Hard mobile failure.**
2. **`Order Online` CTA likely below fold on iPhone 13** — hero image fills the viewport before the CTA renders; on a 390×844 frame the actionable button is in the second viewport. The customer scroll-and-decision step is forced.
3. **Reservation requires 2+ taps from homepage** — homepage → `RESERVATIONS` nav item → static page that just shows the phone number again. No widget, no booking surface, no calendar.
4. **No `tel:` linkification in nav `Reserve your table now! 815-322-2546`** — even the prominent reservation strip is static text, not a callable link.
5. **Hero image: Wix responsive fill (`w_288,h_216`) — passes** mobile responsiveness baseline.
6. **No popups / cookie modals / sticky overlays — passes** Part 8 anti-pattern #4.
7. **Tap-target size: unverified.** Wix theme default; standard nav-item padding is typically below 44px touch target — needs preview-capture verification.

**Net mobile state:** the booking funnel on mobile is "memorize this 10-digit number, switch to phone app, dial." That's the principal conversion path, which means every dropped mobile booking is dropped revenue. This is the single most-citable mobile failure for the pitch.

---

## 2. Secret Sauce — what guests already love

**Source:** ~30 Google reviews pasted in-thread, spanning ~7 years (most recent: 1 month ago). Aggregate rating: 5/5 across food / service / atmosphere on the strong majority of reviews. Reviews repeatedly position Addison's as *"one of the top five restaurants in McHenry County,"* *"my new favorite restaurant,"* and *"our go-to for date night or dinner with friends."*

**Synthesis:** what guests come back for is (1) a **named hospitality team** that customers track by first name across years, (2) a **steakhouse-and-seafood menu with specific dishes that get reordered by name** (bone-in ribeye, loaded mashed potatoes, scallops, lemon chicken soup, creme brulee), (3) a **multi-occasion room** that handles anniversaries, memorials, Easter brunch, and 9+-top family parties without missing a beat, (4) **owner presence** — Andrea and Jon are visible enough that regulars name them, and (5) a **bar program with signature drinks** (chocolate martini, mai tai, raw oysters) that gives the room a second gear after dinner.

### Owner / family story
- Owners named: **Andrea and Jon**.
- *"Andrea and Jon are wonderful! We feel like home when we dine here! … The pride the owners show is amazing! Definitely feels like family!"* — Alison Kessler
- *"I love how everyone works together as a team."* — Tiffany Sorenson

### Named staff (long-tenured — review mentions span years)
- **Kelly** (server, multi-year): *"Kelly was beyond awesome"* (Tiffany, 4 mo ago) · *"Our server Kelly was super helpful and friendly. … Hopefully we can have Kelly again as our server. That women deserves a raise"* (Kenya, 3 yrs ago)
- **Peyton** (server): *"Our server Payton was one of the best! She was attentive and very knowledgeable of the menu"* · *"BEST WAITRESS EVER!! We had Peyton as a waitress, and if the food wasn't delicious we'd come back just to see her"*
- **Andrea** (bartender — distinct from owner Andrea, OR same person — verify): *"From our server Spencer to Andrea the bartender it was a great evening"* · *"the waitress, Andrea went above and beyond"*
- **Spencer** (server): *"the Spencer was lots of fun and took care of us"*
- **Nicholas** (server): *"Nicholas was fantastic, detailed and accommodating with our language barrier"*
- **Kristen / Kirsten** (server): *"Kristen was my server she was soo sweet and polite"* · *"Kirsten did a great job serving. Attentive without being intrusive"*
- **Allison** (server): *"Our drinks were always full. Thank you Allison"*
- **Hannah** (server): *"the waitress (I think her name was Hannah)"*
- **Peter** (bar regular / staff): *"I sat at the bar and chatted with a super cool guy named Peter"*

### Chef
- **Mike** — *"S/O to Mike the Chef very nice person and the atmosphere and food was amazing!!!! Will be back soon"* (Tony, 1 mo ago — most recent chef mention)

### Signature dishes (3+ mentions or strong endorsement)
- **Bone-in ribeye** — recommended dish in 4+ reviews. *"14 oz ribeye was cooked to perfection melted in my mouth"* · *"Medium bone-in ribeye to rave about"*
- **Loaded mashed potatoes** — *"Loaded mashed potatoes are phenomenal"* · *"loaded mashed were exactly as described on the menu and loaded full of flavor"*
- **Scallops** — recommended dish; menu lists day-boat dry-pack diver scallops with orange-rum butter
- **Lemon chicken soup** *(also called "lemon cream soup")* — *"I really enjoyed the lemon cream soup"* · *"One of my go-tos is the lemon chicken soup!"*
- **Creme brulee** — *"I'm a HUGE creme brulee fan"* · recommended dish in 2 reviews
- **Surf & Turf / Lobster Mac N' Cheese** — *"Surf & Turf (Ribeye and Lobster)"* · *"Lobster Mac N' Cheese"* recommended
- **Brussels sprouts** — *"The brussel sprouts were delicious"*
- **Charcuterie board** — *"they have a charcuterie board for an appetizer, so fun!"*
- **Stuffed mushrooms + grilled avocado** — *"stuffed mushrooms and grilled avacados. We loved them both"*
- **Crab-stuffed sole** — *"I highly recommend the crab-stuffed Sole"*
- **Mozzarella sticks** — *"Hands down the thickest and CHEESIEST mozzarella stick I've ever had"*
- **Fried fish** — *"The best fried fish in Illinois"*
- **Homemade salad dressings** — *"The salad dressings are homemade"*

### Bar program
- **Chocolate martini + mai tai** — *"Make sure to order a chocolate martini or a mai tai. The drinks were great"*
- **Raw oysters** — *"raw oysters as an appetizer. The oysters were fresh, big and delicious!"*
- **Wine list** — has its own nav item; not specifically praised in reviews
- **Cold beer + bartender warmth** — *"Beer was cold and very friendly staff"*

### Vibe / ambiance — register-ambiguous (a real signal, not a flaw)
- *"The atmosphere is chic casual"* — Dawn Beveridge-Garber
- *"Walking in was not what I expected. I was thinking more fine dining, but this had more of a bar feel. However, that did not matter. The food was Amazing"* — H L
- *"From the moment we walked in, it was beautiful, filled and welcoming"*
- *"a nice atmosphere"* recurring across multiple reviews

### Outdoor seating
- Confirmed: Tiffany lists seating as *"Indoor dining area, Bar area, Outdoor patio / terrace, Booth seating"* — they have a patio that the website does not feature.

### Second register — Chicago-sports back bar room
- *"there was a table in the back sports bar area"* · *"Back sports bar. Chicago sports themed decor"* — Kenya
- *"It was actually more quiet than the table area was"* (re: back bar)
- Surfaces in nav as *"Sunday Football Specials"*
- Multiple reviews describe post-dinner bar hanging: *"We had a great time at the bar after dinner. This was a great find!"*
- This is a real second-room operation — date-night dining room front, sports-bar hangout back. The website fragments this across nav items instead of telling the story.

### Heritage
- **Unknown.** No founding year, no "since X" claim, no owner-tenure timeline in any review. Several reviews describe multi-visit loyalty (*"This was our third visit"*, *"my favorites in McHenry"*, *"our goto place"*). Owner ask required before stamping any year.

### Occasions guests come FOR (multi-purpose room is a strength)
- **Anniversary** — *"My husband and I went here for our anniversary dinner"*
- **Date night** — *"Addisons is our goto place for date night or dinner with friends"*
- **Birthday** — *"Tonight we celebrated my mother in law's Birthday and Kelly was beyond awesome"*
- **Memorial lunch** — *"We had my grandmothers memorial lunch at Addisons … For us having such a big party, they didn't miss a beat!"*
- **Easter brunch** — *"Came for Easter brunch, the food was fantastic, the restaurant was packed"*
- **Family with kids** — *"They were accommodating with our kids"* · kids spaghetti on menu
- **Road-trip / business stop** — *"We rolled in after a 7 hour drive. Their thursday lobster and steak special was perfect"*
- **First-time-then-regular** — repeated pattern of "first time, will be back" reviews

### Service moments (hospitality stories)
- **Steak send-back** — *"I ordered my steak wrong and she sweetly sent it back to cook a bit longer. Thank you for that Kelly!"*
- **Language barrier accommodation** — *"Nicholas was fantastic, detailed and accommodating with our language barrier"*
- **Dietary accommodation** — *"Addisons is always willing to adjust salt or seasoning to meet my needs"* (Mediterranean diet)
- **9+ top handled smoothly** — *"For us having such a big party, they didn't miss a beat"*
- **Wheelchair accessible · plenty of free parking** — confirmed via review metadata

### Value
- *"the food was all great quality and quantity was worth the price"*
- *"Prices are high, but they are high everywhere now a days. … Overall, Addison's is worth the visit"*
- Price range routinely reported $50–100, with a $30–50 lunch tier and a $100+ dinner-event tier

### Hospitality warmth (the dominant theme)
- *"We feel like home when we dine here"*
- *"Definitely feels like family"*
- *"made our first time experience amazing"*
- *"felt naturally comfortable"*
- *"Looks like lots of regulars here"*

### Owner-response signal
- The Addison's owner replies to reviews on Google (one verbatim reply captured: *"Thanks for the awesome review! We're so glad Addison's is your go-to … Cheers!"*). This is an aliveness signal in the Google ecosystem that the website doesn't mirror — owners care, but the site is frozen at 2023.

### Owner voice — verbatim phrases (the brand's actual register)

Source: Northwest Herald interview with owner Jon Descher (Jan 2025 relocation announcement) + current site copy + Google review owner replies. These are the words the owner uses when speaking about the restaurant — and the words the new site should adopt verbatim wherever possible. **This is the antidote to AI-filler copy.**

```
[
  {
    phrase: "We do everything from scratch — nothing out of cans. Every single meal is cooked to order when it comes into that kitchen.",
    source: "Northwest Herald interview, Jan 2025 (Jon Descher)",
    tone: "specific, proud, anti-corner-cutting"
  },
  {
    phrase: "We pride ourselves on cooking all of our menu items from scratch every time you come in.",
    source: "current website About copy",
    tone: "specific, proud (echo of the same phrase)"
  },
  {
    phrase: "We specialize in steaks and seafood.",
    source: "Northwest Herald interview, Jan 2025",
    tone: "plain-spoken, declarative"
  },
  {
    phrase: "It is a big opportunity for us.",
    source: "Northwest Herald interview, Jan 2025",
    tone: "warm, first-person plural"
  },
  {
    phrase: "Cheers!",
    source: "Google review reply",
    tone: "warm sign-off"
  },
  {
    phrase: "We're so glad Addison's is your go-to",
    source: "Google review reply",
    tone: "warm, regular-acknowledging"
  }
]
```

**Voice signature:** first-person plural, plain-spoken, anti-pretense, "from scratch" as the recurring proof point. Fork should use *"from scratch"* and *"cooked to order"* as load-bearing copy in the hero sub, About paragraph, and any signature-dishes section. Avoid every register-shift word in the current site copy: *"push the envelope"*, *"modern twist"*, *"finest cuts"* — none of those are how Jon talks.

### External trust signals

Searched: Northwest Herald, Daily Herald, Crain's, Eater, Tripadvisor, Yelp, OpenTable badges, McHenry-area "Best Of" lists, McHenry Chamber, restaurant-aggregator rankings.

```
[
  { source: "McHenry Area Chamber of Commerce", year: "current member", claim: "Fine Dining listing", url: "https://business.mchenrychamber.com/list/member/addison-s-steakhouse-5792" },
  { source: "Naturally McHenry County", year: "current", claim: "tourism listing", url: "https://www.naturallymchenrycounty.com/listing/addisons-steakhouse/463/" },
  { source: "McHenry Life", year: "current", claim: "dining directory feature", url: "https://mchenrylife.com/dining-entertainment/restaurants/mchenry/addisons-steakhouse/" },
  { source: "Yelp", year: 2026, claim: "70 photos · 183 reviews · ranked among McHenry steakhouses", url: "https://www.yelp.com/biz/addisons-steakhouse-mchenry" },
  { source: "Facebook", year: 2026, claim: "90% recommendation rate · 726 reviews", url: "https://www.facebook.com/ADDISONSSTEAKHOUSE/" },
  { source: "Tripadvisor", year: 2026, claim: "3.8 rating · 33 reviews", url: "https://www.tripadvisor.com/Restaurant_Review-g36344-d12659029-Reviews-Addison_s_Steakhouse-McHenry_Illinois.html" },
  { source: "Northwest Herald (Shaw Local)", year: 2025, claim: "feature coverage of the relocation announcement", url: "https://www.shawlocal.com/northwest-herald/2025/01/16/greener-grass-addisons-steakhouse-in-mchenry-is-moving-to-mchenry-country-club/" }
]
```

**Honest-no-finds:** zero formal "Best Of" awards, OpenTable Diners' Choice, Wine Spectator, James Beard, or curated regional press recognition surfaced in search. The trust strip the fork can build is community-membership-and-press-coverage tier (Chamber + tourism + local life + press feature), not award-tier. Don't claim what isn't there.

**Block-3 cross-references:** the violations below should cite this block by name. Specifically: Principle 3.3 HIDDEN cites Mike-the-chef · Principle 3.1 HIDDEN cites Kelly/Peyton/Andrea/Spencer · Principle 5.3 WEAK cites the bone-in ribeye + loaded mashed + lemon chicken soup as concrete copy the site is missing · Principle 10 DEAD contrasts the owner-replies-on-Google with the site's static 2023 footer.

---

## 3. Per-principle violations

### **Principle 1.1 BROKEN — Conversion surface mismatches revenue reality**

A steakhouse with $50–100 average check and Friday-night packed dining room is **reservation-essential** per Principle 1.1. The canonical CTA is "Book a Table" with an embedded Tock/Resy/OpenTable widget. Addison's offers `Order Online` (off-register for a date-night steakhouse) plus a phone number. Phone-first is defensible per Principle 4.3 if the demographic is older, but pairing it with `Order Online` as the visible primary CTA actively miscommunicates the revenue model: customers expect this is a takeout joint. The Walnut lesson applies inverted — they're under-signaling reservations rather than over-signaling them.

### **Principle 1.2 UNDERSELLS — Aesthetic doesn't match the bill**

Reviews show check sizes of $50–100 routinely, with a $100+ tier. Per Principle 1.2 the aesthetic ladder for that range is "heritage serif + 'Since 19XX' + atmospheric hero" (gusto/varro band) or "warm-destination, italic-on-serif, amber accent" (1776 band). The current site reads **Wix-default $25–40 family-restaurant register**: stock interior photo, mixed-case sans-serif headline, no editorial typography, no warmth grading. A first-time visitor pricing the room at the front door expects a $30 entrée and gets a $58 ribeye — surprise = betrayal in the Principle 1.2 sense, even if the surprise is upside.

### **Principle 2.1 + Principle 2.2 WEAK — Typography + palette carry no register**

`GReAT aMERICAN FOOD` rendered in mixed-case sans-serif is the opposite of every register marker in Principle 2.1: no italic-serif, no Bodoni-narrow, no Garamond-500. Per Principle 2.2 a steakhouse at this price point should sit in the no-accent-or-warm-accent band (cream + cocoa, navy + amber). The site has neither restraint nor a load-bearing accent; it has Wix-default.

### **Principle 3.2 MISSED — No "Since YYYY" heritage stamp**

Principle 3.2 documents heritage stamping as a 15–20% price-perception boost. Addison's has been operating long enough to accumulate 25+ reviews going back five-plus years, a regular customer base ("our go-to for date night"), named long-tenured servers. The reviews scream heritage. The site claims none. Free conversion lever, unused.

### **Principle 3.1 + Principle 3.3 HIDDEN — Service brand and chef are invisible**

Principle 3.3 says "the chef IS the brand" warrants a chef gallery; Principle 3.1 says reviews placement reveals positioning. Addison's reviews do the chef + service work for them — `S/O to Mike the Chef` (recent), named servers across years (Kelly, Peyton, Spencer, Andrea-bartender), `Andrea and Jon are wonderful! We feel like home` (owners). None of this surfaces. The strongest asset of this restaurant — its named hospitality team — is buried on Google reviews where the site doesn't pull it.

### **Principle 4.1 BROKEN — Sub-page count signals operational chaos, not complexity**

Principle 4.1: 3–4 pages = full-service standard. Addison's has **12+ nav items plus a "More…" overflow**, including `Mother's Day Brunch` and `Mother's Day Dinner` as **two separate top-level nav items** alongside `Sunday Football Specials`, `Wine List`, `Dessert List`, `SPECIALS`, `OUR PLACE`. This is anti-pattern Principle 8 territory by extension — clutter dilutes SEO, fragments the conversion path, and signals "the owner manages this site themselves on a Wix dashboard and adds a tab whenever a holiday comes up." Mother's Day belongs in a single seasonal banner or inside `Reservations`, not as two persistent global nav items.

### **Principle 4.2 WEAK — Hours buried, no Live status**

Principle 4.2: hours-in-hero is the strongest neighborhood-welcoming signal. Addison's hides hours in the footer in lowercase (`monday closed`). No `LiveOpenStatus` widget. Per Part 10 aliveness this is a static-address / static-hours collapse — customer has to mental-math whether they can show up tonight.

### **Principle 5.1 BROKEN — First-viewport conversion floor fails its own register**

Principle 5.1 must-have list for upscale/destination: brand name ✅, positioning sentence (the `GReAT aMERICAN FOOD` artifact does not count), primary CTA matching revenue model ❌ (`Order Online` is wrong), hero photo establishing register ❌ (generic interior, not warm-candlelit). Should-have for upscale: subtle award/press mention ❌, reservation availability hint ❌. This first viewport doesn't even hit the casual-tier floor — it hits the Wix-default floor.

### **Principle 5.3 WEAK — Copy carries no specificity**

Principle 5.3: copy is the second-largest conversion lever. `Traditional steakhouse, Modern twist` and `Serving the finest cuts of meat` are textbook AI-filler-tier per Principle 8 anti-pattern #3 (one register up from "embark on a gastronomic journey," but same family). The reviews give them concrete copy for free — "thickest and cheesiest mozzarella stick," "two jumbo day-boat diver scallops," "lemon chicken soup," charcuterie board for an appetizer, raw oysters, chocolate martini, mai tai, Chicago-sports back room — none of this is on the site.

### **Part 8 anti-patterns hit (explicit)**

- **#3 AI-filler copy** — `push the envelope everyday to create modern dishes` is a tonal cliché.
- **#8 Hours buried in footer** — partial hit. Address is in the hero (good), hours are not.
- **#9 Wix-default copyright "© 2023 by Steakhouse"** — not on the canonical anti-pattern list but operates as one: signals abandonment ("nobody has touched this since 2023"). Mixed-case `GReAT aMERICAN FOOD` is the same signal at hero level.

### **Part 10 DEAD — No aliveness layer at all**

Principle 10.2 minimum viable set: `LiveOpenStatus` (missing), `LiveMapEmbed` replacing the static address (missing — address is plain text), scroll-reveal on every major section (missing — Wix default has none), hover states (untested but unlikely on this build), `prefers-reduced-motion` (moot, no motion to gate). Principle 10.4 explicit anti-patterns hit: static hours, static address. The site reads exactly as Principle 10 describes the failure case: *"dated, amateur, and abandoned."*

---

## 4. So why are we rebuilding it?

When Addison's owners see our redesign, the specific reasons they'd want to swap:

1. **Online reservations.** Today every booking funnels through one phone line. We replace `Reserve your table now! 815-322-2546` with an embedded Tock/Resy/OpenTable widget that captures bookings while the kitchen is on the line during a Saturday rush. Per Principle 1.1, this *is* the conversion model for their revenue reality.
2. **A first viewport that prices the room correctly.** Today the hero says "casual American place that does delivery." Reviews say "$50–100 date-night steakhouse with chocolate martinis and bone-in ribeye." We close that gap with warm-destination typography (italic serif), a hero that's either a pro-shot bone-in ribeye or warm interior at golden hour, and a positioning line drawn from their actual reviews. Per Principle 1.2.
3. **Their hospitality team becomes the brand.** Reviews name a chef (Mike), owners (Andrea + Jon), and at least 6 long-tenured servers by name across years. We surface the chef in a small chef-prose block and put a `LiveReviewsCarousel` on the page that pulls real Google reviews. Per Principle 3.1, Principle 3.3.
4. **A sub-30-second "are they open?" answer.** `LiveOpenStatus` ("Open · closes in 1h 39m") + `LiveMapEmbed` replace the lowercase footer hours and static address string. Per Principle 10.2 minimum-viable.
5. **Nav goes from 12 items to 4.** `Menu · Reservations · Wine List · Visit`. `Mother's Day Brunch / Mother's Day Dinner / Sunday Football Specials` become a single time-bound seasonal banner + a `/private-events` page if it earns one. Per Principle 4.1.
6. **The "© 2023 by Steakhouse · Proudly created with Wix.com" disappears.** Custom domain, custom build, current copyright, owner names in the footer. The Wix-default-fingerprint goes away — that's a free 10–15% perceived-quality lift on its own.
7. **Heritage gets stamped.** Pull the actual founding year from Andrea/Jon and add a "Since YYYY · McHenry, IL" stamp in the hero or footer. Principle 3.2's free 15–20% boost.

**Pitch sentence (verbatim):**
> Your reviews tell the story of a five-star steakhouse that customers pick for anniversaries, Mother's Day, and "we just feel like family here" — and your website reads like a 2023 Wix template that says "Order Online" above the bookings line. We rebuild that homepage so the first three seconds match the room, the bookings happen on the site instead of the phone, and Mike the Chef and your team finally show up where the customers can see them.

### Hero lock — the 4-tuple the fork pastes into the template content config

Drawn from Block 2 (Secret Sauce + Owner Voice + External Trust) and verified against Block 5 photo inventory. The fork builder pastes this into the template's content config without modification.

```
{
  wordmark: "Addison's Steakhouse — display serif, warm-amber tone (1776-class register)",
  eyebrow: "From scratch. Every plate. Every night.",
  sub: "McHenry's family-owned steakhouse since 2017 — bone-in ribeye, hand-shaken cocktails, and a room that remembers your name.",
  hero_photo_subject: {
    primary: "bone-in ribeye, plated with loaded mashed potatoes, warm low-light grading",
    fallback_1: "warm interior at golden hour with diners visible in soft focus",
    fallback_2: "Mike at the grill (chef portrait) — only if owner provides a usable shot"
  },
  cta_primary: { label: "Book a Table", action: "open OpenTable widget inline" },
  cta_secondary: { label: "View Menu", action: "scroll to inline menu section" },
  rationale: [
    "wordmark stays as 'Addison's Steakhouse' per the two-tier hero rule (feedback_hero_pattern_name_anchor.md) — the restaurant name is the brand asset and visual anchor; positioning work lives in eyebrow + sub. Display serif treatment in warm amber matches the 1776-class register the template hypothesis recommends.",
    "eyebrow quotes Jon Descher's verbatim Northwest Herald phrase 'from scratch ... every single meal is cooked to order' (Block 2 Owner Voice). Echoes the phrase the current site already uses ('cooking all of our menu items from scratch') — not a register shift, just tightening copy the owner already approved into a 5-word eyebrow.",
    "sub layers (a) heritage stamp 'since 2017' (Principle 3.2 free 15-20% lift, founding year confirmed via Northwest Herald) + (b) bone-in ribeye signature dish (4+ Block-2 review mentions) + (c) cocktail program (chocolate martini / mai tai / raw oysters) + (d) hospitality warmth ('remembers your name') drawn from 'feels like family' / 'looks like lots of regulars here' review themes.",
    "hero_photo_subject: bone-in ribeye is the highest-frequency review-named dish. Photo inventory in Block 5 shows abundant user-uploaded ribeye shots on Yelp/Maps but no Tier-1 pro-grade — fork must request a single hero shot from owner OR use the strongest user shot color-graded for warmth.",
    "cta_primary: OpenTable widget per Principle 1.1 (reservation-essential business, suburban Illinois older-skewing demographic per Principle 4.3). Replaces the phone-only failure flagged in Block 1 mobile state."
  ]
}
```

**Anti-filler check (eyebrow):** does *"From scratch. Every plate. Every night."* read as written for any restaurant? No — it's the exact owner-voice phrase Jon used in print, mirrors the site's own About copy, and would be tonally wrong for a takeout pizza place, a cocktail bar, a Michelin tasting room, or any concept that isn't from-scratch full-service. Passes Principle 8 anti-pattern #3.

---

## 5. Risks to flag before fork

### **CRITICAL — Operational status is unconfirmed (FORK BLOCKER)**

This risk was not visible from site-and-reviews alone — surfaced only via the Block 2 External Trust press search. **The audit cannot certify a fork until the current operating address is confirmed by the owner.**

Per Northwest Herald reporting:

- **Jan 2025** — *"Greener grass: Addison's Steakhouse in McHenry is moving to McHenry Country Club"* — Jon Descher announced relocation from the strip-mall location at *"355 Front St./Route 31, McHenry"* (note: press article says 355, current website says 335 — possible typo in one source) to McHenry Country Club at **820 N. John St.**, planned move date **March 1, 2025**. Seating expansion from 85 → 200 main + 400 banquet. Owner quote: *"It is time to expand, and it is a great opportunity."*
- **Feb 2026** — *"Lawsuit settled in beef between McHenry Golf Club, Addison's Steakhouse"* — settlement requires Jon Descher to **vacate the McHenry Country Club premises within 10 days** and return the space to the McHenry Golf Club.
- **Apr 2026 (now)** — current operating address is **unknown**. The website still shows 335 Front St. The most recent Google review (Tony, 1 mo ago, ~Mar 2026) confirms they're operating *somewhere* but doesn't name a location. The IG bio + FB About were not extractable in this audit pass — owner needs to confirm.

**Why this blocks the fork:**
- A fork built around 335 Front St may be wrong-address by ship date.
- A fork built around the country club address (820 N. John St.) is definitively wrong as of Feb 2026.
- Photography decisions, hero copy, hours, and reservation routing all depend on operational reality.
- The pitch itself can't responsibly claim "we'll fix your site" if the site's address is fundamentally stale.

**Pre-flight ask (mandatory before any build session):**
1. *"Where are you currently operating? Is it 335 Front St again, a new location, or in-transition?"*
2. *"What's the planned operating address for the next 12 months?"*
3. *"Should the rebuild assume single location or multi-location (e.g., events at the country club + dine-in elsewhere)?"*

This is the same Walnut/Cucina-Bella visual-reality-check rule applied to operational reality — paper signals (existing website, Google reviews, Chamber listing) said "open at 335 Front St" while the press said *"vacated their second location 60 days ago."* The lesson: external trust signals (Block 2 new subsection) are not just trust ammo — they're operational fact-checks.

### **Photography inventory + tier gate**

Per Principle 5.2, photography is 40–60% of register fidelity, and tier-mismatch is the single biggest fork-risk in the system.

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current website | ~3 (interior-leaning, not dish hero) | ~2 | 0 | 0 | ~1 |
| Google Maps (user-uploaded) | ~120+ | many | 0 visible | unverified | unverified |
| Yelp | ~70 user photos (mixed) | several | 0 visible | unverified | unverified |
| Facebook (726 reviews surface user photos) | many | many | unverified | unverified | unverified |
| Instagram @addisonssteakhouse | could not extract — bio inaccessible to WebFetch | — | — | — | — |
| Owner-supplied | **unknown — must ask** | | | | |
| **Total usable (current state)** | **~190+ user shots, mostly iPhone-quality** | abundant but mixed quality | **none confirmed** | unverified | unverified |

**Verdict: Tier-2 ready only.** User-uploaded photos are abundant but Tier-3 grading (bright phone-shot, mixed warmth, no curated composition). **Tier-1 templates BLOCKED** — there's no warm-natural-low-light pro shoot, no chef portrait, no detail/process shots. The implied template hypothesis must respect this.

**Implication for template hypothesis (re-routes the original 1776-redesign-01 recommendation):**
- **Tier-1 (1776-redesign-01, varro-01)** — BLOCKED until owner commits to a 30-shot pro photo session.
- **Tier-2 (gusto-01, labrisa-01, bramble-01)** — VIABLE on existing imagery if curated and color-graded for warmth. The closest American steakhouse register among these is **none of them** — gusto is heritage-Italian, labrisa is coastal-European, bramble is warm cocktail-retro. None nail "American steakhouse." This is a true catalog gap, as `template-inventory.md:143` already documented.
- **Tier-3 (plate-01)** — VIABLE today on existing imagery. Plate would honestly undersell at the $50–100 check size (its register is $30–60), but it would ship truthfully on photos that actually exist.

**Recommended path:** ask owner about pro shoot AND operational address simultaneously. If owner commits to pro shoot AND is back at a stable address, route to **1776-redesign-01** with deliberate dampening per Cucina Bella playbook. If owner declines shoot, route DOWN to **plate-01** and accept the register undersell as the truthful trade. Don't ship Tier-1 register on Tier-3 photography.

### **Register risk — steakhouse is a known catalog gap (HIGH)**

Per `research/template-inventory.md:143`: *"Steakhouse — gap. Use 1776 or varro with content swap."* Per the priority list (line 174): *"American steakhouse — clubby dark-wood, prime-aged-beef photography, date-night register"* is build-priority #2 in the gap list.

- **1776-redesign-01** is the closest fit by register (warm-upscale destination, navy + amber, italic serif, multi-channel reservation strip), but its template-to-business map (line 330) prices it at **$100–200 pp**. Addison's average check of $50–100 sits at the floor — risk of overselling per Principle 1.2 like Walnut. Mitigation: soften with copy ("neighborhood steakhouse" not "destination dining"), keep multi-channel CTA strip, run hero photography that's restaurant-warm not Wine-Spectator-warm.
- **varro-01** is dark slate + sand/tan, serious-Italian institution at $80–180. Wrong cuisine signal even after content swap; the chef-grid pattern only fires if Mike + a sous + a pastry chef can be photographed.
- **gusto-01** is $50–90 — closest by check size, but the heritage-Italian tonality (Sorts Mill Goudy italic, dark monolithic, testimonial-hero) is wrong for an American steakhouse. Tempting but a register lie.

**Recommendation:** fork **1776-redesign-01** with deliberate dampening — softer copy, photography one-tier-down, hero that says "warm neighborhood institution" rather than "destination wine restaurant." This is the same play the Cucina Bella audit landed on (template-matching with copy/photo softening, not stripping signature components). Verify before opening editor.

### **Register-split risk — sports-bar back room (MEDIUM)**

Multiple reviews describe a Chicago-sports-themed back bar room next to the front steakhouse dining room ("more bar feel," "back sports bar area," "sports themed decor," "Sunday Football Specials" in nav). This is a real second register the business carries. Decision before building: do we (a) hide it entirely and pitch a steakhouse-only site, (b) surface it as "the bar" with a separate section, or (c) treat it as labrisa-style multi-service. Wrong call here is the Walnut failure mode in miniature. Visual-reality check before fork: get owner to send 3 photos of the back bar room — if it reads roadhouse-rough, hide it; if it reads tasteful-Chicago-sports, integrate it.

### **Owner-emotional risk — Wix dependency (LOW–MEDIUM)**

Owners have been adding nav items (Mother's Day Brunch, Mother's Day Dinner, Sunday Football Specials, Specials, Wine List, Dessert List) to their Wix dashboard themselves over years. Removing those tabs in our rebuild is a **content-control story** they need to hear: "you can still update your Mother's Day specials, but in one banner instead of two top nav items." Build the seasonal-banner CMS pattern in the fork or this is a stalled handoff.

### **Heritage-data confirmed via press, not site (LOW)**

**Founding year: 2017** — confirmed via Northwest Herald Jan 2025 article (*"opened nearly eight years ago"*). Owner: **Jon Descher** (sole owner per press). The current site claims none of this — Block 3 Principle 3.2 MISSED was specifically about this gap. Fork can stamp `Since 2017 · McHenry, IL` with confidence.

**Outstanding heritage data to ask:**
- Is the bartender named "Andrea" the same person as co-owner Andrea, or two different people? (Reviews mention both contexts but only Jon Descher is confirmed in press as owner.)
- Chef Mike — full name, tenure, training? Single review mention only.
- Years at the original 335 Front St location vs the 1-year country club detour — for accurate heritage stamping ("Since 2017" vs "Since 2017 at 335 Front St").

### **Reservations-platform decision (LOW)**

Phone-only currently. Owner has no incumbent reservation platform to migrate. Pre-fork ask: "Do you want to use OpenTable, Resy, or Tock?" Default recommendation: **OpenTable** for steakhouse register in suburban Illinois (older diner skew, mom-books-dinner demographic per Principle 4.3). Tock skews Michelin-ticketed, wrong fit; Resy skews younger urban.

---

**Status:** **NOT cleared for fork — operational status BLOCKER active.** Photography tier verdict: Tier-2 ready / Tier-1 blocked. **Recommended template hypothesis (conditional):** `1776-redesign-01` with deliberate dampening IF (a) operational address is stable AND (b) owner commits to a 30-shot pro photo session; otherwise route DOWN to `plate-01` (Tier-3, accept register undersell as the truthful trade). **Pre-flight asks (must resolve before any build session):**
1. *Where are you currently operating? Address?* (BLOCKER per Risk #1)
2. *Are you open to a 30-shot pro photo session, or should we work with existing photos?* (Photo tier gate)
3. *OpenTable, Resy, or Tock for reservations?* (Default recommendation: OpenTable)
4. *Send 3 phone photos of the back bar room so we can decide whether to integrate or hide.* (Register-split decision)
5. *Confirm naming on the site: Jon Descher as owner, Mike as chef, Andrea as ___ (owner or bartender or both).* (Block 2 Secret Sauce surfacing)
6. *Founding year stamp — confirm "Since 2017" is correct.* (Heritage signal, currently confirmed via press but worth verifying)

**Audit upgraded 2026-04-29** with all 5 new captures (Mobile state · Owner Voice · External Trust · Hero Lock · Photography Tier Gate). The External Trust press search is what surfaced the operational blocker — a finding the original site-and-reviews-only audit missed entirely.
