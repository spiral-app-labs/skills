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

---

## 2. Per-principle violations

### **§1.1 BROKEN — Conversion surface mismatches revenue reality**

A steakhouse with $50–100 average check and Friday-night packed dining room is **reservation-essential** per §1.1. The canonical CTA is "Book a Table" with an embedded Tock/Resy/OpenTable widget. Addison's offers `Order Online` (off-register for a date-night steakhouse) plus a phone number. Phone-first is defensible per §4.3 if the demographic is older, but pairing it with `Order Online` as the visible primary CTA actively miscommunicates the revenue model: customers expect this is a takeout joint. The Walnut lesson applies inverted — they're under-signaling reservations rather than over-signaling them.

### **§1.2 UNDERSELLS — Aesthetic doesn't match the bill**

Reviews show check sizes of $50–100 routinely, with a $100+ tier. Per §1.2 the aesthetic ladder for that range is "heritage serif + 'Since 19XX' + atmospheric hero" (gusto/varro band) or "warm-destination, italic-on-serif, amber accent" (1776 band). The current site reads **Wix-default $25–40 family-restaurant register**: stock interior photo, mixed-case sans-serif headline, no editorial typography, no warmth grading. A first-time visitor pricing the room at the front door expects a $30 entrée and gets a $58 ribeye — surprise = betrayal in the §1.2 sense, even if the surprise is upside.

### **§2.1 + §2.2 WEAK — Typography + palette carry no register**

`GReAT aMERICAN FOOD` rendered in mixed-case sans-serif is the opposite of every register marker in §2.1: no italic-serif, no Bodoni-narrow, no Garamond-500. Per §2.2 a steakhouse at this price point should sit in the no-accent-or-warm-accent band (cream + cocoa, navy + amber). The site has neither restraint nor a load-bearing accent; it has Wix-default.

### **§3.2 MISSED — No "Since YYYY" heritage stamp**

§3.2 documents heritage stamping as a 15–20% price-perception boost. Addison's has been operating long enough to accumulate 25+ reviews going back five-plus years, a regular customer base ("our go-to for date night"), named long-tenured servers. The reviews scream heritage. The site claims none. Free conversion lever, unused.

### **§3.1 + §3.3 HIDDEN — Service brand and chef are invisible**

§3.3 says "the chef IS the brand" warrants a chef gallery; §3.1 says reviews placement reveals positioning. Addison's reviews do the chef + service work for them — `S/O to Mike the Chef` (recent), named servers across years (Kelly, Peyton, Spencer, Andrea-bartender), `Andrea and Jon are wonderful! We feel like home` (owners). None of this surfaces. The strongest asset of this restaurant — its named hospitality team — is buried on Google reviews where the site doesn't pull it.

### **§4.1 BROKEN — Sub-page count signals operational chaos, not complexity**

§4.1: 3–4 pages = full-service standard. Addison's has **12+ nav items plus a "More…" overflow**, including `Mother's Day Brunch` and `Mother's Day Dinner` as **two separate top-level nav items** alongside `Sunday Football Specials`, `Wine List`, `Dessert List`, `SPECIALS`, `OUR PLACE`. This is anti-pattern §8 territory by extension — clutter dilutes SEO, fragments the conversion path, and signals "the owner manages this site themselves on a Wix dashboard and adds a tab whenever a holiday comes up." Mother's Day belongs in a single seasonal banner or inside `Reservations`, not as two persistent global nav items.

### **§4.2 WEAK — Hours buried, no Live status**

§4.2: hours-in-hero is the strongest neighborhood-welcoming signal. Addison's hides hours in the footer in lowercase (`monday closed`). No `LiveOpenStatus` widget. Per Part 10 aliveness this is a static-address / static-hours collapse — customer has to mental-math whether they can show up tonight.

### **§5.1 BROKEN — First-viewport conversion floor fails its own register**

§5.1 must-have list for upscale/destination: brand name ✅, positioning sentence (the `GReAT aMERICAN FOOD` artifact does not count), primary CTA matching revenue model ❌ (`Order Online` is wrong), hero photo establishing register ❌ (generic interior, not warm-candlelit). Should-have for upscale: subtle award/press mention ❌, reservation availability hint ❌. This first viewport doesn't even hit the casual-tier floor — it hits the Wix-default floor.

### **§5.3 WEAK — Copy carries no specificity**

§5.3: copy is the second-largest conversion lever. `Traditional steakhouse, Modern twist` and `Serving the finest cuts of meat` are textbook AI-filler-tier per §8 anti-pattern #3 (one register up from "embark on a gastronomic journey," but same family). The reviews give them concrete copy for free — "thickest and cheesiest mozzarella stick," "two jumbo day-boat diver scallops," "lemon chicken soup," charcuterie board for an appetizer, raw oysters, chocolate martini, mai tai, Chicago-sports back room — none of this is on the site.

### **Part 8 anti-patterns hit (explicit)**

- **#3 AI-filler copy** — `push the envelope everyday to create modern dishes` is a tonal cliché.
- **#8 Hours buried in footer** — partial hit. Address is in the hero (good), hours are not.
- **#9 Wix-default copyright "© 2023 by Steakhouse"** — not on the canonical anti-pattern list but operates as one: signals abandonment ("nobody has touched this since 2023"). Mixed-case `GReAT aMERICAN FOOD` is the same signal at hero level.

### **Part 10 DEAD — No aliveness layer at all**

§10.2 minimum viable set: `LiveOpenStatus` (missing), `LiveMapEmbed` replacing the static address (missing — address is plain text), scroll-reveal on every major section (missing — Wix default has none), hover states (untested but unlikely on this build), `prefers-reduced-motion` (moot, no motion to gate). §10.4 explicit anti-patterns hit: static hours, static address. The site reads exactly as §10 describes the failure case: *"dated, amateur, and abandoned."*

---

## 3. So why are we rebuilding it?

When Addison's owners see our redesign, the specific reasons they'd want to swap:

1. **Online reservations.** Today every booking funnels through one phone line. We replace `Reserve your table now! 815-322-2546` with an embedded Tock/Resy/OpenTable widget that captures bookings while the kitchen is on the line during a Saturday rush. Per §1.1, this *is* the conversion model for their revenue reality.
2. **A first viewport that prices the room correctly.** Today the hero says "casual American place that does delivery." Reviews say "$50–100 date-night steakhouse with chocolate martinis and bone-in ribeye." We close that gap with warm-destination typography (italic serif), a hero that's either a pro-shot bone-in ribeye or warm interior at golden hour, and a positioning line drawn from their actual reviews. Per §1.2.
3. **Their hospitality team becomes the brand.** Reviews name a chef (Mike), owners (Andrea + Jon), and at least 6 long-tenured servers by name across years. We surface the chef in a small chef-prose block and put a `LiveReviewsCarousel` on the page that pulls real Google reviews. Per §3.1, §3.3.
4. **A sub-30-second "are they open?" answer.** `LiveOpenStatus` ("Open · closes in 1h 39m") + `LiveMapEmbed` replace the lowercase footer hours and static address string. Per §10.2 minimum-viable.
5. **Nav goes from 12 items to 4.** `Menu · Reservations · Wine List · Visit`. `Mother's Day Brunch / Mother's Day Dinner / Sunday Football Specials` become a single time-bound seasonal banner + a `/private-events` page if it earns one. Per §4.1.
6. **The "© 2023 by Steakhouse · Proudly created with Wix.com" disappears.** Custom domain, custom build, current copyright, owner names in the footer. The Wix-default-fingerprint goes away — that's a free 10–15% perceived-quality lift on its own.
7. **Heritage gets stamped.** Pull the actual founding year from Andrea/Jon and add a "Since YYYY · McHenry, IL" stamp in the hero or footer. §3.2's free 15–20% boost.

**Pitch sentence (verbatim):**
> Your reviews tell the story of a five-star steakhouse that customers pick for anniversaries, Mother's Day, and "we just feel like family here" — and your website reads like a 2023 Wix template that says "Order Online" above the bookings line. We rebuild that homepage so the first three seconds match the room, the bookings happen on the site instead of the phone, and Mike the Chef and your team finally show up where the customers can see them.

---

## 4. Risks to flag before fork

### **Register risk — steakhouse is a known catalog gap (HIGH)**

Per `research/template-inventory.md:143`: *"Steakhouse — gap. Use 1776 or varro with content swap."* Per the priority list (line 174): *"American steakhouse — clubby dark-wood, prime-aged-beef photography, date-night register"* is build-priority #2 in the gap list.

- **1776-redesign-01** is the closest fit by register (warm-upscale destination, navy + amber, italic serif, multi-channel reservation strip), but its template-to-business map (line 330) prices it at **$100–200 pp**. Addison's average check of $50–100 sits at the floor — risk of overselling per §1.2 like Walnut. Mitigation: soften with copy ("neighborhood steakhouse" not "destination dining"), keep multi-channel CTA strip, run hero photography that's restaurant-warm not Wine-Spectator-warm.
- **varro-01** is dark slate + sand/tan, serious-Italian institution at $80–180. Wrong cuisine signal even after content swap; the chef-grid pattern only fires if Mike + a sous + a pastry chef can be photographed.
- **gusto-01** is $50–90 — closest by check size, but the heritage-Italian tonality (Sorts Mill Goudy italic, dark monolithic, testimonial-hero) is wrong for an American steakhouse. Tempting but a register lie.

**Recommendation:** fork **1776-redesign-01** with deliberate dampening — softer copy, photography one-tier-down, hero that says "warm neighborhood institution" rather than "destination wine restaurant." This is the same play the Cucina Bella audit landed on (template-matching with copy/photo softening, not stripping signature components). Verify before opening editor.

### **Photography risk (MEDIUM-HIGH)**

§5.2: Tier-1 photography is required for 1776 register. Addison's current site shows minimal imagery and the menu page has no dish photos. Reviews include guest phone photos (mostly serviceable food shots, not interior or chef). Before forking, must answer: do the owners have a pro shoot, or are we asking them to invest in one? If photo-tier is locked at Tier-3, **route DOWN** — possibly all the way to plate-01 with content swap, accepting the register undersell as a more-truthful trade. Catch this in a 5-min ask before building.

### **Register-split risk — sports-bar back room (MEDIUM)**

Multiple reviews describe a Chicago-sports-themed back bar room next to the front steakhouse dining room ("more bar feel," "back sports bar area," "sports themed decor," "Sunday Football Specials" in nav). This is a real second register the business carries. Decision before building: do we (a) hide it entirely and pitch a steakhouse-only site, (b) surface it as "the bar" with a separate section, or (c) treat it as labrisa-style multi-service. Wrong call here is the Walnut failure mode in miniature. Visual-reality check before fork: get owner to send 3 photos of the back bar room — if it reads roadhouse-rough, hide it; if it reads tasteful-Chicago-sports, integrate it.

### **Owner-emotional risk — Wix dependency (LOW–MEDIUM)**

Owners have been adding nav items (Mother's Day Brunch, Mother's Day Dinner, Sunday Football Specials, Specials, Wine List, Dessert List) to their Wix dashboard themselves over years. Removing those tabs in our rebuild is a **content-control story** they need to hear: "you can still update your Mother's Day specials, but in one banner instead of two top nav items." Build the seasonal-banner CMS pattern in the fork or this is a stalled handoff.

### **Heritage-data unknown (LOW)**

We need the actual founding year before stamping `Since YYYY`. Reviews don't surface it. Five-minute ask: "When did Addison's open?" Do not invent. Per §3.2 a fake heritage claim is unforgivable when discovered.

### **Reservations-platform decision (LOW)**

Phone-only currently. Owner has no incumbent reservation platform to migrate. Pre-fork ask: "Do you want to use OpenTable, Resy, or Tock?" Default recommendation: **OpenTable** for steakhouse register in suburban Illinois (older diner skew, mom-books-dinner demographic per §4.3). Tock skews Michelin-ticketed, wrong fit; Resy skews younger urban.

---

**Status:** qualified pre-fork. **Recommended template hypothesis:** `1776-redesign-01` with photography-tier check + register-softening copy. **Pre-flight asks (5-min):** founding year · photography tier · OpenTable/Resy/Tock preference · 3 photos of back bar room · confirm Andrea + Jon want naming on site.
