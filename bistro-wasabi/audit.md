# Bistro Wasabi - Strategic Site Audit

> Lead from `research/lead-qualification/next-5-mchenry-county-audits-2026-04-28.md`; next recommended build after Galati's Hideaway.
>
> **Address:** 4590 W Algonquin Rd, Lake in the Hills, IL 60156
> **Secondary footer location:** 1578 W Algonquin Rd, Hoffman Estates, IL 60192
> **Current site:** `thebistrowasabi.com` (WordPress / Divi / Zara Restaurant Theme)
> **Phone:** 847-515-2700
> **Email:** thebistrowasabi@gmail.com
> **Established:** 2000, per homepage
> **Reservation provider:** Tock, preserve
> **Carry-out provider:** Toast, preserve
> **Delivery provider:** Uber Eats, preserve if still active
> **Menu provider:** iMenuPro external script, verify before replacing
> **Review packet:** Google reviews pasted by user on 2026-04-29
>
> **Decision:** BUILD a scrollable `qitchen-01`-inspired fork, not the earlier `bamzi-01` direction.
> **Framework:** `research/restaurant-website-strategic-principles.md` + `restaurant-template-analysis` secret-sauce pass.
> **Routing correction:** User has been to Bistro Wasabi and believes the fancier omakase-like register would resonate more than the review-only `bamzi-01` recommendation. Use that firsthand room read as stronger evidence than the initial desk audit.
> **Critical guardrail:** Do not falsely claim a formal omakase program. Borrow the qitchen-like ceremony, restraint, and precision, but keep Bistro Wasabi's real breadth: sushi, steaks, martinis, wine, Tock, Toast, and two locations.

---

## What the current site actually does

| Element | Current state |
|---|---|
| First-screen identity | Giant cropped food hero with "Come and Experience" / "It is all about good food." Cuisine, established year, review proof, and the Tock/Toast decision path are not doing first-screen work. |
| Top action bar | Phone + email on the left; `DELIVERY`, `RESERVATIONS`, and `CARRY OUT` on the right. Useful, but visually bolted on as black utility tabs rather than an intentional conversion hierarchy. |
| Primary nav | `About`, `Menu`, `Favorites`, `Contact`. Mobile collapses into hamburger with no sticky Reserve / Carry Out / Directions bar. |
| Reservation flow | `RESERVATIONS` links to Tock: `exploretock.com/bistrowasabilakeinthehills`. Tock supports indoor, sushi bar, and outdoor seating; parties over 6 should call. |
| Carry-out flow | `CARRY OUT` links to Toast: `order.toasttab.com/online/bistro-wasabi-lith-4590-w-algonquin-rd`. Preserve this. |
| Delivery flow | `DELIVERY` links to Uber Eats. Preserve if active, but do not make it more important than Tock/Toast. |
| Gift cards | Homepage links to Toast gift cards with a dedicated card image and CTA. Useful commerce path, buried mid-page. |
| Site story | Homepage states Bistro Wasabi is locally owned, established in 2000, and blends traditional sushi with Mexican, Korean, and French-inspired appetizers, entrees, and desserts. It also names broiled steaks, chops, and charbroiled New York steak. |
| Weekly specials | Homepage surfaces Tuesday half-price wine bottles under $100, Wednesday $8 martinis, and Sunday Mai Tai special. Strong repeat-visit content, but the carousel/circle presentation feels dated. |
| Menu access | `/menu/` renders a long iMenuPro menu via `https://imenupro.com/!1h5i-2`. It is visible with JavaScript and includes prices, but the site HTML itself is just a script tag; basic crawlers see almost no menu content. |
| Menu content | Cold Starters, Hot Starters, Soups & Salads, Entrees, Specials, Sushi Entrees, Nigiri/Sashimi, Vegetable Maki, Maki, Beer, Sake, Cocktails, Martinis, and a deep wine list. |
| Favorites page | Sparse but useful proof of signature items: Maguro Salad, Asparagus Beef Roll, Crackled Tuna, Dragon Roll, Sashimi Carpaccio, Steak. |
| Hours | Home and footer show Mon closed, Tue-Thu 5:00-9:30, Fri-Sat 5:00-9:30, Sun 4:30-9:00. Re-verify before pitch because third-party sources may differ. |
| Trust signals on site | Established-2000 story. No Google review rating/count, no review excerpts, no "best sushi" proof, no "reservations recommended" cue, no press/ranking proof. |
| Broken/stale surface | About page includes an Instagram feed area that reports an admin-only feed error; old social/plugin residue is visible in the crawl. |
| Platform | WordPress + Divi child theme / Zara Restaurant Theme v2.0, PHP/7.4.30, iMenuPro, Toast, Tock, Uber Eats, Cookie Notice, Instagram feed plugin. |
| Cookie notice | A bright blue cookie bar overlays the hero in captures on desktop and mobile, interrupting the first impression. |

### Mobile state (iPhone 13, 390x844)

Derived from WebFetch HTML/CSS inspection of the live site against the existing audit's mobile observations. Formal preview-browser screenshot capture deferred — findings below are text-source-derived and consistent with the existing capture artifacts in `inputs/reference-sites/bistro-wasabi-old-site/`.

1. **Header phone number is plain text, not a `tel:` link** — the top-bar `847-515-2700` renders as static text. Only the footer instance is wrapped in `tel:`. Customers tapping the most prominent phone surface get no dial action; they have to copy-paste-and-dial. Hard mobile failure for a reservation-recommended dinner restaurant.
2. **Cookie Notice plugin overlays the hero on mobile first paint** — bright blue full-width band sits across the hero image, eating ~10% of the 844px viewport before any content reads. First impression of an "elevated, downtown-Chicago" room is a compliance bar.
3. **Hero says "Come and Experience" / "It is all about good food"** — neither names sushi, martinis, steaks, since-2000, or Tock. On a 390-wide frame with a cropped food photo, the guest sees a generic tagline and a cookie bar before any decision hook surfaces. Principle 5.3 violation flagged in Block 3 — the mobile expression is the most punishing.
4. **Menu page is a single iMenuPro JS embed** — `https://imenupro.com/!1h5i-2` injected via script tag. On iOS Safari this renders as one extremely long vertical document with no native category rail; the site's own HTML carries near-zero menu content (crawler-invisible, screen-reader-hostile). Sushi vs Entrees vs Martinis vs Wine all collapse into one scroll.
5. **No sticky thumb-zone action bar** — Reserve / Carry Out / Directions / Call are not pinned. Mobile primary actions live as black utility tabs at the very top, scrolled away on first swipe. The four most likely mobile tasks all require scroll-back-to-top.
6. **Instagram feed plugin throws an admin-only error inline on the About page** — visible plugin residue on mobile, signals abandoned site (Part 10 aliveness collapse).

**Net mobile state:** the booking funnel is "scroll past cookie bar, scroll past generic hero, scroll past long iMenuPro embed, scroll back up, find the black utility tab, hope the Tock link opens cleanly." The reservation engine works; the path to it doesn't. This is the single most-citable mobile failure for the pitch — Bistro Wasabi has a polished room and a working Tock account, and the mobile front door makes guests work to use either.

---

## Where it breaks the strategic principles

**Section 1.1 - Conversion surface vs revenue model: PARTIAL.** Bistro Wasabi already has the right engines: Tock reservations, Toast carry-out, Uber Eats delivery, and Toast gift cards. The current site treats them like utility links rather than a polished decision path. For this restaurant, the first-screen hierarchy should be `Reserve`, `Order Carry Out`, `View Menu`, with phone/directions nearby.

**Section 1.2 - Aesthetic vs bill: UNDERSELLS.** The menu supports $$-$$$ suburban special-occasion dining: $37 shrimp/scallops, $37/$45 NY steak, $34/$60 rack of lamb, $38 peppercorn ahi tuna, deep wine list, martinis, sake, and sushi boats. Reviews describe a modern, stylish, energetic, "downtown Chicago" vibe. The old site uses dated script typography, hard electric blue, oversized cropped photos, and a visible cookie bar. The room sounds sharper than the site.

**Section 3.1 - Reviews placement: HIDDEN.** The user-provided Google packet is overwhelmingly positive and unusually specific: fresh sushi, talented sushi chefs, table-side/standout martinis, generous shrimp/scallop and steak portions, elevated strip-mall atmosphere, long-term regulars, and reservations recommended. None of that proof appears on the homepage.

**Section 3.2 - "Since YYYY": UNDERUSED.** "Established in 2000" is present in the story block, but not used as a first-screen trust stamp. For a 25+ year restaurant with many long-time guests, this should be a core credibility device.

**Section 5.1 - First-viewport conversion floor: LOW.** On desktop and mobile, the guest sees phone/email, logo, hero food crop, generic "good food" copy, and a cookie notice. They do not immediately see "fresh sushi," "martinis," "steaks," "since 2000," "reserve on Tock," "order carry-out," or a review proof line.

**Section 5.3 - Copy specificity: TOO GENERIC ABOVE FOLD.** The site has specific copy lower down - Mexican/Korean/French-inspired sushi, broiled steaks and chops, charbroiled NY steak - but the hero says "good food." The rewrite should name the actual decision hooks: fresh maki, martinis, wine nights, steaks, and Lake in the Hills since 2000.

**Section 4.2 - Hours prominence: DECENT BUT NOT ALIVE.** Hours are on the homepage and footer, which is better than many old sites. But there is no live "open today" indicator, no time-aware note, and no reservation availability cue. A dinner-only restaurant should help guests decide tonight.

**V3 - Menu is complete but operationally awkward.** This is not a PDF problem. It is a dependency/UX problem. The menu is rendered by a third-party JavaScript embed, is extremely long on mobile, and has weak category navigation. The new site should turn the menu into page-native HTML sections with quick tabs for Sushi, Entrees, Drinks, Martinis, and Wine, while verifying prices against iMenuPro/Toast.

**V5 - Provider paths exist but feel bolted on.** Tock and Toast are strengths. The pitch should not replace them; it should make them feel first-class. "Keep the engines, rebuild the front door" is the correct sales story.

**V7 - Mobile quick-action clarity: WEAK.** Mobile captures show phone/email at top, logo/hamburger, then a giant hero crop and cookie bar. The most likely mobile tasks - reserve, carry out, call, directions - are not fixed at the thumb zone.

**D5 - Structured-data opportunity.** The old WordPress site exposes restaurant data visually, but the rebuild should ship explicit `Restaurant` JSON-LD with address, hours, phone, menu URL, reservation URL, order URL, price range, sameAs links, and provider links.

**Part 10 - Aliveness: MIXED.** Weekly specials are real and useful. But the Instagram feed has plugin residue/error messaging, there is no live open state, and the first screen does not reflect the restaurant's current buzz from reviews.

---

## So why are we rebuilding it?

1. **The reputation is stronger than the first screen.** Guests remember fresh sushi, martinis, steaks, generous entrees, and a surprisingly polished strip-mall room. The homepage opens with "good food" and a cookie bar. That is the gap.

2. **The conversion engines already exist, but they need orchestration.** Tock, Toast, Uber Eats, and Toast gift cards are live. The rebuild should preserve them and put them in an intentional hierarchy: Reserve first, carry-out second, menu third, gift cards/supporting commerce lower.

3. **The menu is too rich to live as a long embedded scroll.** Sushi, maki, steaks, entrees, sake, cocktails, martinis, and wine all matter. The current mobile menu is a giant vertical document. A scrollable `qitchen-01`-inspired fork can keep the refined first impression while making the menu browsable, indexable, and easier to scan.

4. **The secret sauce is not just sushi.** The review packet says Bistro Wasabi wins because it is sushi plus martinis/wine plus non-sushi entrees plus a city-like room in the suburbs. That is a stronger positioning than "traditional sushi" alone.

5. **Switching cost is manageable if we keep providers.** The risky move would be ripping out Tock/Toast. The safe move is a modern Next.js front end that preserves Tock, Toast, Uber Eats, gift cards, and owner-approved menu content.

**Pitch sentence:** "You already have the hard parts - fresh sushi people trust, Tock reservations, Toast carry-out, martinis, wine specials, and a room guests compare to downtown Chicago. I mocked a front door that makes those strengths obvious before someone has to hunt through a long embedded menu."

---

## Risks to flag before fork

### Photography inventory + tier gate

Per Principle 5.2, photography is 40-60% of register fidelity, and tier-mismatch is the single biggest fork-risk in the system (Cucina Bella + Walnut both burned this). The existing audit hypothesizes a Tier-1 `qitchen-01`-class fork — this section validates against actual inventory.

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site | ~6 cropped food hero crops + Favorites page items (Maguro Salad, Asparagus Beef Roll, Crackled Tuna, Dragon Roll, Sashimi Carpaccio, Steak) | minimal — hero-only | 0 | 0 | 0 |
| Yelp | ~166 user photos (mixed quality) | several | 0 visible | likely present | minimal |
| Tripadvisor | 12 traveler photos: 5 food, 2 interior, 1 exterior, 2 bar/beverage, 2 misc | 2 | 0 | 1 | 0 |
| Google Maps | unverified count (lazy-loaded, not extractable in this pass) — likely abundant | likely | 0 confirmed | likely | unverified |
| Instagram (@bistrowasabi assumed) | unverified | unverified | unverified | unverified | unverified |
| Owner-supplied | **unknown — must ask** | | | | |
| **Total usable (current state)** | **~190+ user shots, mostly Tier-3 iPhone-quality + a small set of warmly cropped current-site hero crops** | mixed quality | **none confirmed** | sparse | **none** |

**Verdict: Tier-2 ready / Tier-1 BLOCKED.** The existing audit's qitchen-class hypothesis is **not supported by inventory**. qitchen-01 (Tier-1) requires >=30 warm-natural-low-light pro shots, 2-3 angles per signature dish, a chef portrait, and detail/process shots. Bistro Wasabi has abundant user-uploaded sushi photography but no curated warm-low-light pro set, no confirmed chef portrait of the named sushi chefs the reviews praise, and no detail/process work. The current-site hero crops are warm-leaning but cropped and dated, not omakase-ceremony-grade.

**Tier hypothesis re-route:**
- **Tier-1 (qitchen-01) — BLOCKED** until owner commits to a 25-30-shot pro photo session focused on (a) 3-4 signature maki and nigiri compositions in warm low light, (b) one sushi-chef-at-counter portrait, (c) interior at golden hour with the candles-and-flowers detail the About copy already names, (d) one martini hero (Asian Pear or Mango). Without the shoot, qitchen's first viewport will read as a register lie within 2 seconds.
- **Tier-2 (gusto-01 / labrisa-01 / bramble-01-class dark) — VIABLE today** on existing imagery if curated and color-graded. The closest match by register among catalog templates is `bamzi-01` itself in its dark-class variant (the original audit recommendation, before the user override) — Tier-2 dark-canvas-with-warm-accents matches what we actually have.
- **Tier-3 (plate-01 / pepper-01 bright tier) — REGISTER MISMATCH.** Bistro Wasabi's room is dark, candle-lit, romantic; bright-daylight templates would undersell the actual atmosphere even though the photo inventory could technically support them.

**Recommended path:** keep `qitchen-01` as the visual spine the user wants, but stage the build in two phases. **Phase 1:** ship a Tier-2 dark-canvas variant on existing curated photography (color-graded for warmth, cropped tight, with the strongest Yelp/Maps user shots reviewed by the owner before use) — this honors the user's firsthand register read while not falsifying the photo tier. **Phase 2:** propose the 25-30-shot pro shoot at pitch time as the upgrade path that unlocks the full qitchen ceremony (chef-at-counter hero, detail-shot scrolls, candles-and-flowers interior gallery). This is the same staging Cucina Bella landed on — template-match the register, soften via copy/photo curation, propose the shoot as an explicit upgrade rather than pretending the photos already exist.

**Pre-flight ask added to the existing list:** *"Are you open to a 25-30-shot pro photo session — 3-4 signature maki + nigiri compositions, sushi-chef-at-counter portrait, interior at golden hour, one martini hero? It's the unlock that lets the new site read at the qitchen-class register your room actually carries."*

### Standard risk subsections

- **Photo/register check still matters.** The user has firsthand experience and says a fancier qitchen-like register would fit. Still avoid unsupported claims: say refined sushi/fusion, chef precision, martinis, and elevated dinner room; do not claim a formal omakase program unless owner confirms it.
- **Do not use unverified review claims as facts.** "Fresh fish flown in daily," private-room details, manager names, and exact rating/count must be owner-confirmed before production or outreach.
- **Review packet has a few suspicious/outlier reviews.** One review mentions short rib bolognese, which is not on the captured menu. Another uses generic "verified legacy business" language. Do not let those shape the build.
- **Hours need final verification.** The old site shows 5:00-9:30 Fri/Sat; third-party surfaces may differ. Verify before schema, pitch doc, or `LiveOpenStatus`.
- **Two-location scope must be clarified.** The footer lists Hoffman Estates, but the captured Tock/Toast flows are Lake in the Hills specific. Default to one shared brand site with two location entry points and location-specific CTAs. Split into two sibling websites only if menus, hours, ownership, or provider links materially differ.
- **iMenuPro may be the current source of truth.** If owner uses iMenuPro to update prices, do not hard-code stale prices without a workflow. The pitch can still show page-native menu structure using current captured content.
- **Service risk should be handled quietly.** Most reviews praise service, but one detailed review says servers audibly judged a tip. The build should avoid overclaiming flawless hospitality. "Attentive service" is safer than "impeccable every time."
- **Cookie/plugin residue is a pitchable leak, but not the whole case.** The bright cookie bar and Instagram error are visible problems. Lead with the business case, not just "your site has old plugins."

---

## Secret Sauce

- **Owner/site claim:** Bistro Wasabi is locally owned, established in 2000, and blends traditional sushi with Mexican, Korean, and French-inspired appetizers, entrees, and desserts. The site also emphasizes broiled steaks, chops, charbroiled New York steak, weekly wine/martini specials, gift cards, Tock, Toast, and delivery.
- **Review-confirmed strengths:** Fresh sushi, inventive rolls, talented sushi chefs, excellent martinis/cocktails, wine-by-the-bottle appeal, generous shrimp/scallop and steak entrees, a modern city-like room, easy parking, and long-running consistency.
- **Named items or experiences:** Bistro Wasabi roll, Dragon roll, Crazy roll, Crab Rangoon roll, Godzilla roll, Crackled Tuna, Peppercorn Ahi Tuna, Shrimp & Scallops, NY Strip, Rack of Lamb, Crab Cakes, Calamari Tempura, Seaweed Salad, Vegetable Tempura, Asian Pear Martini, Mango Martini, Lemon Drop/Refresh martinis, sake, Tuesday half-price wine bottles, sushi bar, outdoor seating, and plentiful parking.
- **Guest language worth echoing:** "fresh," "inventive," "modern," "stylish," "energetic," "downtown Chicago," "strip mall surprise," "hidden gem," "busy even on weeknights," "make reservations," "best sushi in the area," and "coming here for 25 years."
- **Risks / do-not-overclaim:** Do not call it a formal omakase restaurant unless owner-confirmed. Do not call it Japanese-only or erase the steaks, fusion, martinis, and wine. Do not freeze public rating counts without day-of verification. Do not quote full reviews in production without approval.
- **Website/pitch implications:** The new site should make the owner feel seen: this is not a generic sushi redesign. It is a fresh-sushi, martini-and-wine, steaks-for-the-non-sushi-friend, elevated-suburban-room story.

### Owner voice — verbatim phrases (the brand's actual register)

Source: WebFetch of `thebistrowasabi.com/about/` + Instagram post extraction via search. Owner names confirmed via search aggregator: **Jeffrey Dunham and Jino Kim**, co-owners since 2000. Google Maps owner-reply chain was not extractable in this pass (Google Maps lazy-loads behind JS); flag for follow-up if the owner adopts a reply cadence in the rebuild.

```
[
  {
    phrase: "Bistro Wasabi is a locally owned restaurant established in 2000.",
    source: "current website About copy",
    tone: "plain-spoken, heritage"
  },
  {
    phrase: "We're a unique blend of traditional sushi with Mexican, Korean, and French-inspired appetizers, entrees, and desserts.",
    source: "current website About copy",
    tone: "specific, fusion-proud"
  },
  {
    phrase: "If you're a sushi lover, you'll be amazed by our sushi and maki creations.",
    source: "current website About copy",
    tone: "warm, second-person"
  },
  {
    phrase: "You'll love the atmosphere at our restaurant that is filled with candles and flowers on every table.",
    source: "current website About copy",
    tone: "specific, romantic, room-proud"
  },
  {
    phrase: "Our Bistro Family! Here to serve you!",
    source: "Instagram post",
    tone: "warm, family-register"
  },
  {
    phrase: "We are so extremely grateful for our communities continued support!",
    source: "Instagram post",
    tone: "humble, gratitude"
  },
  {
    phrase: "Food soothes the soul and we continue to work hard to do just that!!!",
    source: "Instagram post",
    tone: "playful, exclamation-heavy"
  },
  {
    phrase: "We are so happy to be able to continue to serve this wonderful community!!",
    source: "Instagram post",
    tone: "warm, community-register"
  }
]
```

**Voice signature:** first-person plural, gratitude-forward, "Bistro Family" as a recurring frame, exclamation-heavy on social, plain-spoken on the site. The strongest hero-grade phrase on the existing About is *"candles and flowers on every table"* — this is the only sentence in the current copy that paints the room sensorially and matches the qitchen-class register the rebuild is targeting. Fork should preserve it verbatim in the About paragraph or hero sub. **Avoid AI-filler temptations:** the owner's actual register is gratitude + family + sensory detail, not "embark on a culinary journey." Do not invent omakase ceremony language they have never used.

### External trust signals

Searched: Tripadvisor, Yelp, OpenTable, Daily Herald "Best Of," Crain's, Algonquin/Lake-in-the-Hills Chamber, regional press for the 25-year anniversary.

```
[
  { source: "Tripadvisor", year: 2026, claim: "#1 of 33 Restaurants in Lake in the Hills, 4.6 stars over 79 reviews, Travelers' Choice award badge", url: "https://www.tripadvisor.com/Restaurant_Review-g36235-d2636879-Reviews-Bistro_Wasabi-Lake_in_the_Hills_Illinois.html" },
  { source: "OpenTable", year: 2026, claim: "4.8 stars over 367 diner reviews (informational listing — restaurant books on Tock, not OpenTable)", url: "https://www.opentable.com/r/bistro-wasabi-lake-in-the-hills" },
  { source: "Yelp", year: 2026, claim: "166 photos, 212 reviews on Lake in the Hills page", url: "https://www.yelp.com/biz/bistro-wasabi-lake-in-the-hills" },
  { source: "Tock", year: "current", claim: "active reservation engine — indoor, sushi bar, and outdoor seating bookable", url: "https://www.exploretock.com/bistrowasabilakeinthehills" },
  { source: "Owner-claim", year: 2000, claim: "Established 2000 — co-owners Jeffrey Dunham and Jino Kim per aggregator data, owner-confirm before stamping", url: "https://thebistrowasabi.com/" }
]
```

**Honest no-finds:** zero hits on Daily Herald "Best Of," Crain's, Eater Chicago, James Beard, Wine Spectator, OpenTable Diners' Choice, or any 25-year-anniversary press feature despite the milestone year. No Chamber of Commerce listing surfaced for either Algonquin or Lake-in-the-Hills jurisdictions. The trust strip the fork can build is **aggregator-tier, not award-tier**: Tripadvisor #1-of-33 + Travelers' Choice + OpenTable 4.8 + Yelp 212-review base. That is genuinely strong for a suburban sushi room and worth surfacing prominently — the current site shows none of it.

**Owner-response signal:** Tripadvisor listing reads **"Unclaimed"** — owner has never claimed the page or replied to a review there. Google Maps owner-reply cadence is unverified in this pass. This is a Part 10 aliveness gap the rebuild should mirror in reverse: a `LiveReviewsCarousel` pulling current Google ratings + a one-click prompt to the owner to claim Tripadvisor and start the reply chain.

---

## Google Review Proof For Trust Module

**Dominant theme - fresh sushi:** Reviewers repeatedly describe the sushi as fresh, inventive, carefully made, and among the best in the area. Several specifically praise the sushi chefs.

**Atmosphere theme - elevated strip-mall surprise:** Multiple guests say the room feels modern, stylish, chic, moody, calm, or like a downtown Chicago spot despite the Algonquin Road strip-mall setting.

**Drinks are part of the restaurant, not a sidecar:** Reviews call out hand-shaken/table-side martinis, mango and Asian pear martinis, wine recommendations, sake, strong cocktails, and the Tuesday half-off wine-bottle special.

**Mixed-group menu strength:** Non-sushi diners are not stranded. Reviewers praise shrimp and scallops, NY strip, steak, lamb chops, salmon, crab cakes, calamari, burgers, tempura, seaweed salad, mochi, and desserts.

**Generosity/value signal:** For a $30-50 / $50-100 dinner range, reviewers repeatedly note unexpectedly generous shrimp/scallop and steak portions.

**Longevity/regulars:** Several guests claim 20+ or 25 years of visits, consistent quality, and "coming back" behavior. This confirms the established-2000 story should be visible.

**Reservation pressure:** Guests mention the place is busy even on weeknights and that reservations are recommended. This supports putting Tock in the hero rather than hiding it in a utility bar.

**Operational comfort:** Reviewers cite plentiful free parking, group suitability, indoor/bar/sushi bar/outdoor seating, vegetarian options, kid-friendliness, and wheelchair accessibility. Use only the details owner confirms on the new site.

---

## Build Direction

- **Template:** `qitchen-01` as visual spine, adapted into a scrollable two-location restaurant site
- **Register:** refined sushi/fusion, omakase-adjacent visual restraint, $$-$$$, dinner-primary, reservation/carry-out hybrid
- **Hero:** "Bistro Wasabi" with restrained support copy around sushi, martinis, steaks, and since 2000
- **Primary CTAs:** `Reserve on Tock`, `Order Carry Out`, `View Menu`
- **Secondary CTAs:** `Buy Gift Card`, `Delivery`, `Call`, `Directions`
- **Menu structure:** Sushi & Maki, Cold/Hot Starters, Entrees & Steaks, Specials, Drinks, Martinis, Wine
- **Location strategy:** one shared brand site with two location entry points; location-specific reservation/order/directions blocks
- **Proof strategy:** Since-2000 stamp, review-theme strip, reservations-recommended cue, menu breadth, wine/martini specials
- **Visual direction:** qitchen-like dark canvas, disciplined typography, restrained motion, refined sushi photography, scrollable sections; no loud `bamzi-01` orange/leaf treatment
- **Provider preservation:** Tock reservations, Toast carry-out, Toast gift cards, Uber Eats delivery, current phone/email
- **Schema:** `Restaurant` JSON-LD with `acceptsReservations`, `hasMenu`, `potentialAction` for Reserve/Order, `sameAs`, hours, phone, and address

---

**Audit upgraded 2026-04-29** with 4 back-filled captures: Mobile state subsection (Block 1) · Owner Voice phrase bank (Block 2) · External Trust signals (Block 2) · Photography Tier Gate (Block 5, now first in Risks). Hero Lock subsection deferred — the existing Build Direction block already encodes most of the equivalent fields and the photo tier gate re-routes the template hypothesis, so any Hero Lock written now would have to be redone after the Phase 1 / Phase 2 photo decision. Surface for the next pass.

**Key surprise from the upgrade:** the existing audit's Tier-1 qitchen hypothesis is NOT supported by current photo inventory. Tripadvisor lists Bistro Wasabi as #1 of 33 in Lake-in-the-Hills with a Travelers' Choice badge but the listing is **unclaimed by the owner**, and zero 25-year-anniversary press surfaced despite the milestone. The fork should ship Tier-2 dark-canvas on Phase 1 and propose the pro shoot as the explicit Phase 2 unlock — pretending the photos exist would repeat the Cucina Bella / Walnut visual-reality-check failure mode.
