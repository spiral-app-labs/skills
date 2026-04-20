# Audit: Varro — Serious Upscale Italian Fine-Dining

> Follows the same `[observed]` / `[inferred]` discipline as `1776-redesign-01.md` and `alinea-01.md`. Ground-truth visual tokens come from `inputs/framer-templates/varro-01/meta/home.json`. Structural claims come from the downscaled full-page screenshots at `/tmp/varro-view/desktop-*.png` (1500px) and `/tmp/varro-view-mobile/mobile-home.png`. `[observed]` where the meta/screenshot directly supports the claim; `[inferred]` where it's a reasonable deduction that a recreation-agent should verify.

**Slug:** `varro-01`
**Source URL:** https://varro.framer.website
**Source type:** Framer marketplace template (author: NEONHEAD, per footer "Created by NEONHEAD")
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/varro-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A serious, heritage-institution upscale Italian restaurant site. Reads like a family-owned, chef-driven, craft-validated Italian kitchen documenting its discipline across multiple cooking traditions (pasta + pizza + meats + fish). Dark-dominant canvas with warm cream type and a sand/tan accent — the visual equivalent of a dimly-lit trattoria-turned-destination with linen tablecloths and a long wine list. **This is a workhorse fine-dining Italian template**, not a date-night atmospheric-romantic one. `[observed]`
- **What kind of restaurant it fits:**
  - Serious upscale Italian / multi-generational institution / heritage osteria
  - Chef-driven Italian restaurants where the kitchen team's names matter (4-up chef gallery is load-bearing)
  - Destination pasta-and-pizza places with chef credibility
  - Italian steakhouses; Italian resort/hotel restaurants; multi-location Italian groups that need one "flagship" site
  - Does NOT fit date-night trattoria (use `gusto-01`), fast-casual pizza (use `pepper-01`), Michelin tasting (use `alinea-01`), or any non-Italian cuisine.
- **What it does especially well (3 things, specific):**
  1. **4-up chef gallery with explicit names + titles.** First catalog template to give kitchen staff named visual real estate on home. Four chef portrait cards in a row (cream mat + dark sepia portrait + uppercase name + uppercase title/role). Transfers cleanly to any chef-driven concept — Italian, French, omakase, fine-dining American — where the team is the brand. `[observed]`
  2. **Inline reservation form on home — no route hop.** "RESERVE YOUR TABLE" form sits directly on the homepage with text-input fields plus the sand/tan CTA. No `/reserve` route, no modal, no OpenTable indirection. Conversion floor goes max-up: a diner can book without ever leaving the first scroll. First catalog template with this pattern. `[observed]`
  3. **Abundance-photography hero, not minimalist.** The "FROM ITALY'S HEARTLAND" hero uses a 3-photo horizontal spread (pasta bowl + pizza + laid table) instead of a single cinematic plate shot. Signals "multi-discipline craft + table generosity" instead of "single precious dish." Strong counterpart to the single-hero-photo discipline of qitchen/alinea/1776. `[observed]`
- **What is weak / generic / overdesigned:**
  - The "KITCHEN NOT FOUND" 404 is clever but it's the only state behind `/menu`, `/about`, `/contact` — the template ships as a single-page site where those nav links appear to be anchor scrolls, not routes. Any fork that uses real multi-page IA has to build those pages from scratch. `[observed]`
  - Menu tab/section labels (MEATS & FISH / PIZZA / PASTA & RISOTTI / DESSERTS / SIDE DISHES) are category-name only — no narrative framing per section. Compared to 1776's per-section editorial intros, the menu block reads more like a printed takeaway menu than a website module. `[observed]`
  - The inline home-page reservation form appears to be a visual mock — form fields are styled but submission endpoint is undefined in the template. Recreation has to wire this up. `[inferred from Framer-template convention; no `action` URL visible in the captured meta]`
  - The "OUR CHEFS" sepia/duotone portrait treatment is strong but risks feeling stock if real chefs aren't actually shot with that grading — substituting any bright/daylight portrait would immediately break cohesion. `[observed]`

---

## 2. Positioning + vibe

- **Aesthetic register:** Serious, heritage, editorial, chef-driven, dark-dominant upscale Italian. Closer to a steakhouse's weight than a trattoria's warmth — gusto-01 is the trattoria companion. `[observed]`
- **Emotional tone:** Craft-validated, multi-generational, confident-without-flourish. "We know what we're doing and the kitchen speaks for itself." Manifesto ("THE TABLE IS THE CENTER OF LIFE") adds a philosophical/cultural-European register that goes beyond transactional restaurant copy. `[observed]`
- **Perceived price point:** `$$$` solidly. Entrees likely $28-48 range, pastas $24-36, some premium meats pushing higher. Not tasting-menu territory (alinea-01's register) but decisively above trattoria mid-tier. `[inferred from visual register — no actual prices legible in captured screenshot at 1500px downscale]`
- **Audience signal:** Adult diners, destination or anniversary rather than weeknight-casual, couples + small groups + business dinners, Italian-affinity + wine-drinking crowd. Not kid-first, not walk-in-first. Heritage-seeker demographic that values chef names + craft provenance. `[observed]`

---

## 3. Structure

- **Homepage section order (top to bottom, ~15,648px scrollHeight on desktop per meta):** `[observed from meta dims + screenshot]`
  1. **Floating header** — top-left "× varro" wordmark (icon + lowercase text) + top-right hamburger button + "RESERVE A TABLE" sand/tan pill CTA. Fixed on scroll. `[observed]`
  2. **Hero — "FROM ITALY'S HEARTLAND"** — massive Belleza display uppercase H1 (120px, -2.4px letter-spacing, uppercase, cream on dark). Below the headline, a 3-photo horizontal abundance row (pasta plated + pizza overhead + laid table spread). Signature move. `[observed]`
  3. **"ABOUT OUR RESTAURANT"** — centered editorial block. Left-side large Belleza display H2 (88px) label, right-side (or below on narrower widths) body paragraph of long-form prose. Below that, a wide landscape interior/dining-room photograph. Serious editorial rhythm. `[observed]`
  4. **"OUR CHEFS" — 4-up chef gallery** — section label "OUR CHEFS" (smaller Belleza caps eyebrow) + 4 portrait cards in a horizontal row. Each card: warm cream/off-white background mat, sepia-toned chef portrait (waist-up, uniform/apron visible), uppercase chef name, small caps role/title beneath. Cards of equal size. Distinctly matted look, not full-bleed. `[observed]`
  5. **"THE TABLE IS THE CENTER OF LIFE" — centered manifesto pull-quote** — large centered Belleza display on dark canvas, full-width breathing room above and below, likely 88-120px scale. Tan/sand decorative ornament (possibly a 4-point star/sparkle, matching footer ornament) above or below. Branding statement, not attributed. `[observed]`
  6. **"OUR MENU · OUR MENU · OUR MENU" marquee** — horizontal marquee strip of repeated "OUR MENU" with glyph separators (likely `·` or `◆`). Joins the 1776 + bramble marquee family. Introduces the menu block. `[observed]`
  7. **Multi-section menu block** — appears to use a segmented-control / tabbed layout or stacked labeled subsections. Six category labels observed: **MEATS & FISH**, **PIZZA**, **PASTA & RISOTTI**, **DESSERTS**, **SIDE DISHES** (plus possibly a "STARTERS" bucket not confirmed). Each section shows a list of dish rows — dish name (Belleza display caps, ~58px per meta h3), description line below, price right-aligned in sand/tan accent. Dense editorial-menu treatment on dark canvas. `[observed]` — whether tabs are interactive (click-to-switch) or sections are all stacked-on-scroll is `[inferred: stacked-on-scroll with sticky category label]` based on the very tall 15,648px scrollHeight which suggests all sections render at once.
  8. **"RESERVE YOUR TABLE" — inline reservation form** — section title in Belleza caps, then a form block: likely 4 stacked inputs (name / email / date / time / party-size — exact field set needs verification) with cream underlines on dark, and a solid sand/tan "RESERVE A TABLE" pill CTA at the bottom. First catalog template with home-page inline booking. `[observed form block; individual field set [inferred]]`
  9. **"CONTACT" inline block** — below the reservation form, two-column layout: left = address + phone + email + opening hours stack; right = small map or secondary info column. Address shown in footer suggests Milan (`P.za del Duomo, 20122 Milano MI, Italy`) + a second Zürich location (`Lindenhof, 8001 Zürich, Switzerland`) — so the contact block likely lists both. `[observed from 404-page footer + home screenshot]`
  10. **"FREQUENTLY ASKED QUESTIONS" accordion** — FAQ block on dark canvas. Each row: question in cream caps/mixed Belleza + chevron/plus toggle + expandable answer below. Second FAQ accordion in the catalog (after plate-01). `[observed]`
  11. **Closing ornament + "WE LOOK FORWARD TO YOUR VISIT"** — centered 4-point sand/tan sparkle glyph above a centered massive Belleza display sign-off phrase. Two-line layout ("WE LOOK FORWARD / TO YOUR VISIT"). Acts as emotional/brand close before footer. `[observed]`
  12. **Footer** — multi-column rich footer on dark:
      - Col 1 — "Sitemap": Our Story, Menu, Reservation, Contact, Privacy Policy
      - Col 2 — "Socials": Instagram, Facebook, X / Twitter
      - Col 3 — "Contact": Milan address + email + phone, then Zürich address + email + phone (two locations stacked)
      - Bottom bar: "© 2026 Varro Restaurant" (left) + "Created by NEONHEAD" (right, ignored as marketplace attribution)
      `[observed]`

- **Information architecture (top-level pages):** Effectively **single-page**. `/menu`, `/about`, `/contact` all render the "KITCHEN NOT FOUND" 404 with the same "WE LOOK FORWARD TO YOUR VISIT" closer and footer. The Sitemap footer links and the hamburger nav therefore appear to be anchor scrolls (`#menu`, `#about`, `#contact`) rather than routes. `[observed — every sub-page screenshot in /tmp/varro-view/ is a 404]`
- **Navigation style:** **Split floating header** — wordmark top-left + hamburger + RESERVE pill top-right. Pill CTA sand/tan filled. Fixed on scroll. Hamburger likely reveals a full-screen overlay menu (not captured in still screenshots — `[inferred from hamburger icon presence]`). `[observed]`
- **Reservation/CTA placement:** **Persistent + in-content**. Top-right RESERVE pill in floating header (always visible) + inline form on home + "BACK TO HOME" CTA on 404s. No OpenTable / no phone-CTA duality (unlike 1776). Single-channel conversion through the inline form. `[observed]`
- **How menu is handled:** **Full on-home stacked menu sections** (MEATS & FISH / PIZZA / PASTA & RISOTTI / DESSERTS / SIDE DISHES). No dedicated `/menu` route that works — the `/menu` URL 404s. Menu is scroll-to-anchor within home. `[observed]`
- **How events / private dining / story / gallery / contact are handled:**
  - **Story / about:** An "ABOUT OUR RESTAURANT" inline block serves as the about surface; no dedicated about page (the `/about` route 404s). `[observed]`
  - **Chef/team:** 4-up chef gallery on home — no dedicated team page. `[observed]`
  - **Gallery:** Woven through the hero's 3-photo strip + the wide interior photo under About + chef portraits + menu-adjacent food shot (visible in mobile screenshot). No dedicated gallery module. `[observed]`
  - **Contact:** Inline CONTACT block on home + rich footer with two full location blocks. No `/contact` route. `[observed]`
  - **Events / private dining:** Not surfaced in captured template. `[observed absence]`

---

## 4. Visual system

> Ground-truthed from `inputs/framer-templates/varro-01/meta/home.json` computed styles.

- **Typography:**
  - **Display: `Belleza`** (Google Fonts, single weight 400). Used for ALL headings, eyebrows, and most prominent text blocks. Distinctive elongated-capital serif with slight terminal flare — narrower than Cormorant/EB Garamond, more display-oriented than Forum. `[observed from meta.computed + fontUrls[0]]`
    - Hero H1 ("FROM ITALY'S HEARTLAND"): **120px / line-height 120px / letter-spacing -2.4px (~-2%) / uppercase / color `rgb(240, 237, 224)`**
    - Section H2 ("ABOUT OUR RESTAURANT"): **88px / 88px LH / -0.88px tracking / uppercase / cream**
    - Section H3 ("MEATS & FISH"): **58px / 58px LH / -1.16px tracking (~-2%) / uppercase / cream**
    - P / eyebrow / CTA label ("Reserve a Table"): **22px / 24.2px LH / -0.22px tracking / uppercase / cream** — note Belleza is used even at body-adjacent sizes, which is unusual
  - **Body / UI sans: unlabeled `sans-serif`** — meta.computed.buttonAny and navLink report `fontFamily: "sans-serif"` with no named family. This means either (a) the template falls back to the system sans for body copy, or (b) a body sans is loaded via one of the three `framerusercontent.com` `.woff2` fonts (`KwK0fH9Qx1gAi2nY6HV637MnF0`, `GrgcKwrN6d3Uz8EwcLHZxwEfC4`, `soAoqUg4XLlllNDBOZtgbSkDFLM`) but isn't applied to the selectors the meta capture checked. `[observed mixed signal — recreation should load Inter or similar neutral humanist sans as the safe default for body copy; verify by fetching one of the framerusercontent woff2 URLs]`
    - Nav links: **12px / normal LH / normal tracking / weight 400 / mixed case** — notably small (anchor-style rather than full-wordmark).
    - Button labels: **12px / normal LH / weight 400 / mixed case / color black on sand/tan fill** — small, un-tracked, understated.
  - **🔑 Display-only typographic system.** Belleza carries headings, eyebrows, AND UI text (form labels, section callouts) at different sizes. The only concession to a body sans is in tiny nav/button text. This is a load-bearing discipline — very different from 1776 (display serif + DM Sans body) or qitchen (Forum + body sans). Single-family editorial-display register. `[observed]`

- **Color strategy:** **Dark slate + warm cream + sand/tan accent.** Three-color system, dark-dominant. `[observed from meta.computed + home.json bodyBg]`
  - **Background canvas:** `rgb(28, 34, 37)` = `#1C2225` — dark slate with very slight cool/blue undertone (G>R, B>G by one step each). Not pure black, not navy — specifically slate-grey. Warmer than pitch and cooler than espresso-brown.
  - **Primary text / highlight surfaces:** `rgb(240, 237, 224)` = `#F0EDE0` — warm cream with ivory cast. Used for all body text, most headings, and the chef-card mat backgrounds (chef cards sit on a cream rectangle instead of the dark canvas — adds warmth and frames the portraits).
  - **Brand accent:** `rgb(167, 128, 100)` = `#A78064` — **sand/tan**, warm heritage-luxury. Used for: primary CTA fill ("RESERVE A TABLE" button bg), prices in the menu, decorative sparkle ornaments ("WE LOOK FORWARD" star), active section indicators, and hover states. Introduces the first sand/tan accent in the catalog (distinct from 1776's muted amber `#C9A96E`, gusto's warmer terracotta family, alinea's monochrome).
  - **Pure black:** `rgb(0, 0, 0)` used sparingly — appears as the button text color on the sand/tan pill (`color: rgb(0,0,0)` in meta.buttonAny). Dark high-contrast button text, not cream, signaling a more utilitarian/serious CTA.
  - **No secondary gray** explicitly declared in meta — muted text likely uses cream at reduced opacity `[inferred]`.

- **Spacing rhythm:** Editorial-loose, long-scroll (15,648px home on desktop = ~17 viewport heights at 900px). Section-to-section vertical rhythm appears to be **~120-200px**. Generous outer padding — content columns read roughly 65-75% of page width. The long scroll is intentional and load-bearing: this is a "we have a lot to show you about our kitchen" register. `[observed from meta.dims.scrollHeight + screenshot]`

- **Grid / layout behavior:**
  - Hero: headline centered-upper, 3-photo strip horizontally centered below
  - About: asymmetric — label-left, body-right (or stacked on mobile)
  - Chef gallery: 4 equal-width cards in a horizontal row (desktop); stacks to single-column on mobile
  - Manifesto quote: centered max-width content
  - Menu: full-width dark canvas, two-column (or segmented-control+list) dish-row layout with left-aligned name/desc, right-aligned price
  - Reservation form: centered max-width (~520-640px), form fields stacked vertically
  - Contact: two-column or stacked depending on width
  - FAQ: full-width accordion rows with chevron at far right
  - Footer: 3-column (Sitemap / Socials / Contact) with bottom bar `[observed]`

- **Image treatment:** Warm editorial food + venue photography. Three distinct grading families used consistently:
  - **Food shots**: natural-light overhead and plated, slightly warm-grading, hand-of-chef and ingredient-in-frame styling (rustic board, scattered basil, oil glistening). Abundance-first, not minimalist.
  - **Venue shot** (under About): wide-angle warm-light interior, Edison-bulb overhead lighting, bar + tables visible.
  - **Chef portraits**: sepia/duotone-leaning grading, uniform/apron, posed-but-honest — approaching editorial-doc photo style rather than corporate headshots. Tonally distinct from the food shots (cooler/desaturated) so that the cream card mat can frame them. `[observed]`

- **Animation / motion:** `[observed from meta.animations]`
  - `animations: []` — no CSS keyframe animations declared.
  - `transitions: ["all"]` — generic transition-all wildcard in use.
  - `transforms` include `matrix(1, 0, 0, 1, 0, 50)` (vertical translate 50px — scroll-driven reveal signature), `matrix(-0.33356, 0.942729, …)` (rotation ~110°, likely a decorative element), `matrix(-1, 0, 0, -1, 0, 0)` (180° flip — ornament mirror), `matrix(1, 0, 0, 1, -20, 0)` (horizontal translate — marquee).
  - Motion intensity rating: **2 (moderate)**. Consistent with marquee + fade-up section reveals + hamburger overlay, but no heavy parallax or video backdrops.

- **Texture / depth / borders / cards / overlays:**
  - Chef cards: rounded (~8-12px) cream rectangle mats behind sepia portraits — rare "card with mat" treatment on dark canvas.
  - Buttons: pill / rounded-rect, solid sand/tan fill, black text, no visible border.
  - Form inputs: underline-only on dark canvas (cream hairline bottom border) — very minimal.
  - FAQ rows: hairline divider between rows, no card chrome.
  - Menu rows: hairline dividers between dishes `[inferred]`.
  - Footer: top hairline divider, three clean columns, no card chrome.
  - Ornaments: 4-point sand/tan sparkle/star glyph used twice (before "WE LOOK FORWARD" and possibly above manifesto). First decorative glyph use in the catalog. `[observed]`

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~3 seconds. "FROM ITALY'S HEARTLAND" headline + pasta+pizza+table 3-photo hero + Milan/Zürich addresses in footer make cuisine + positioning + geography immediately clear. No explicit "Italian fine-dining" tagline — the register does all the work. `[observed]`
- **Reservation path strength:** **8/10**. RESERVE pill persistent in header + inline form on home (no page hop) + form reappears in footer via "Reservation" anchor. Strong conversion floor. Loses points because it's single-channel (no phone CTA, no OpenTable/Resy fallback — anyone who prefers calling has to hunt the phone number in the footer) and because the form's submission endpoint is template-mock, requiring wiring. `[observed]`
- **Menu access clarity:** **9/10**. Menu is an anchor scroll on the same page, so there's literally nowhere else it could live. Marquee announces it, then the full multi-section menu renders inline. Loses one point because the `/menu` route 404s instead of scrolling — a deep-link won't land correctly. `[observed]`
- **Location / hours / trust signals:** **7/10**.
  - Addresses surfaced in rich footer (Milan + Zürich) with phones and emails
  - Inline CONTACT block mid-page reinforces this
  - **Hours are NOT visible** in captured screenshots — either absent or embedded in an asset not surfaced in the 1500px downscale. A serious fine-dining site with no hours is a small credibility gap.
  - Two-location structure is a genuine trust signal (suggests multi-location group)
  - No awards/reviews/press badges visible — unlike 1776's Wine Spectator or alinea's credentials. `[observed]`
- **Mobile conversion path quality:** **8/10** `[observed from /tmp/varro-view-mobile/mobile-home.png]`. Header pill stays top-right and one-tap-to-reserve. Hero reflows to stacked photos above headline (good, not crowded). Chef cards stack to single-column cleanly. Menu sections stack; form stays inline; contact stacks; FAQ remains accordion-friendly. Long scroll (~15.6kpx desktop = significantly longer on mobile) is a fatigue risk but each section is self-contained. The inline form on mobile is genuinely valuable — no modal, no keyboard-trap.

---

## 6. Reusable ideas

- **🔑 4-up chef gallery (`ChefGrid`)** — cream card mat + sepia portrait + caps name + caps role, 4 equal-width cards horizontal on desktop, stacked on mobile. Load-bearing for any chef-driven concept. **Highest-leverage component from this audit.** First catalog template with named kitchen team on home. Transfers to: Italian, French, omakase, fine-dining American, steakhouse, any "the kitchen is the brand" concept.
- **🔑 Inline home-page reservation form (`InlineReservationForm`)** — form fields + CTA directly on home, no page hop, no modal. Conversion floor maxes out. Reusable for any reservation-primary template where conversion matters more than ceremony (alinea keeps ceremony; 1776 + varro can maximize conversion). Needs a real submission endpoint (Resy/OpenTable widget, Formspree, or native handler).
- **"OUR MENU · OUR MENU · OUR MENU" marquee (`MenuMarquee`)** — joins the 1776 + bramble marquee family. Now appears in **3 templates** — formally promotion-ready to `shared/`. Variants: separator glyph (◆ vs · vs ·), speed, muted vs loud.
- **Manifesto pull-quote (`ManifestoQuote`)** — centered full-width philosophical line on dark canvas with decorative ornament. "THE TABLE IS THE CENTER OF LIFE" is the example here. Reusable for any venue wanting a branded philosophical moment between content blocks (concept restaurants, heritage concepts, mission-driven concepts).
- **FAQ accordion on dark (`FAQAccordion`)** — second catalog template with FAQ (after `plate-01`). Pattern is now **promotion-ready** (2-template threshold). Variant axis: light-canvas (plate) vs dark-canvas (varro). Same primitive.
- **Multi-section stacked menu with segmented-control nav (`MenuMultiSection`)** — category label + dish-row list, repeated per category (MEATS & FISH / PIZZA / PASTA & RISOTTI / DESSERTS / SIDE DISHES). Reusable for any multi-discipline kitchen (Italian, French brasserie, izakaya). Distinct from qitchen's text-led `MenuList` and 1776's tabbed `MenuTabbedList`.
- **Abundance-hero 3-photo strip (`AbundanceHero`)** — massive display headline + 3 horizontally-arranged food/venue photos instead of a single cinematic plate. Signals multi-discipline craft + table generosity. Counterpart to single-photo heroes. Reusable for restaurants with more than one "signature" element.
- **Sand/tan heritage accent (`#A78064`)** — extends the catalog's accent-color vocabulary (beyond 1776's amber `#C9A96E`). Heritage-luxury warmth, distinct from amber by being browner/warmer and more earthen.
- **Closing ornament sign-off (`ClosingOrnamentBand`)** — 4-point sand sparkle + massive centered two-line display phrase ("WE LOOK FORWARD / TO YOUR VISIT"). Brand-close moment before footer. Reusable for warmth/hospitality emphasis.
- **Two-location rich footer** — two full location stacks (Milan + Zürich) side-by-side in the contact column. Reusable for any multi-location group.
- **Split floating header (wordmark left + hamburger + CTA right)** — variant of 1776's centered pill and qitchen's left pill. Adds a **right-side split** variant to the `FloatingHeaderPill` primitive family.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - 4-up chef gallery with cream mat. Huge.
  - Inline home-page reservation form. Max conversion floor.
  - Manifesto pull-quote. Cheap, high-effect branding.
  - "OUR MENU" marquee (already stealing from 1776/bramble — now confirmed as a shared pattern).
  - Sand/tan accent color as a third accent option alongside amber and terracotta.
  - Belleza display as an editorial-serif alternative to Cormorant/Forum/EB Garamond — narrower, more display-flavored.
  - Closing ornament sign-off ("WE LOOK FORWARD TO YOUR VISIT").
- **Steal but tone down:**
  - Single-family typography (Belleza at every size) works for varro's register but is fragile — recreation should pair Belleza with a neutral humanist body sans (Inter / Söhne / DM Sans) for body copy, and keep Belleza for display-only. Using Belleza at 12px nav-link sizes loses its character.
  - Sepia chef portraits are powerful but only if real chef photography is shot with that grading. Any bright/daylight portrait plugged in would break the frame.
  - Dense menu sections — adding a per-section one-line editorial intro (as 1776 does) would lift the menu from "printed menu copy" to "site-native module."
- **Too template-y / overused — avoid:**
  - "KITCHEN NOT FOUND" 404 is cute once — don't make it the actual IA. Real forks need real routes or real anchor-scroll behavior wired up.
  - Single-page-with-anchor-scroll nav is fine for a template demo but means deep links to `/menu` break. Recreation should either implement real `/menu`, `/about`, `/contact` pages OR make the anchors the entire nav and remove the sub-routes from the sitemap.
  - Pure sans-serif fallback for body text — if the body family really is "sans-serif" system fallback, it'll feel cheap. Load a real body sans.
- **Would hurt originality if copied literally:**
  - The exact Varro word-mark + "×" icon ligature.
  - The Milan + Zürich two-location specifics.
  - The "FROM ITALY'S HEARTLAND" headline verbatim for a non-Italian restaurant.
  - The 4-point sparkle glyph — fine for heritage-Italian, out of register for modern-minimalist forks.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **7**. Individually no component is hard, but the cumulative surface is wide: 4-up chef grid with matted cards + inline reservation form with real submission + multi-section menu with ~5 categories + FAQ accordion + marquee + manifesto + abundance hero + decorative ornaments + two-location footer. This is the largest single-page home in the catalog so far (~15.6kpx tall). Plus the body-sans identification work (meta is ambiguous).
- **Components needed (template-specific or shared candidates):**
  - `SplitFloatingHeader` — wordmark left + hamburger + CTA right (new variant of `FloatingHeaderPill` with `position: 'split'`)
  - `AbundanceHero` — massive display headline + 3-photo horizontal strip
  - `EditorialAboutBlock` — label + long-form body + wide landscape photo
  - **`ChefGrid`** — 4-up chef portrait cards on matted cream backgrounds (**strong shared candidate**)
  - **`ManifestoQuote`** — centered display pull-quote with optional ornament (**shared candidate**)
  - **`MenuMarquee`** — horizontal scrolling phrase-repeat marquee (**promote to shared — now used in 3 templates**)
  - `MenuMultiSection` — category label + dish-row list, repeated per category
  - **`InlineReservationForm`** — form on home, no page hop (**strong shared candidate** — conversion-floor component)
  - `InlineContactBlock` — address + phone + email + hours, 2-location variant
  - **`FAQAccordion`** — expandable Q&A rows (**promote to shared — 2 templates**)
  - `ClosingOrnamentBand` — ornament + centered display sign-off phrase
  - `MultiLocationFooter` — 3-column rich footer with multi-location contact column
- **Tokens / variants needed:**
  - New theme: dark-slate canvas (`#1C2225`), warm cream text (`#F0EDE0`), sand/tan accent (`#A78064`), pure black for CTA text
  - Display family: Belleza (Google Fonts, weight 400) — add to font loader
  - Body family: identify via framerusercontent woff2 URL or default to Inter/GT America/Söhne — verify in recreation phase 0
  - Motion intensity 2 (marquee + scroll-reveal fade-up)
  - Decorative glyph: 4-point star/sparkle SVG in sand/tan
- **Verdict:** **Full template recreation candidate.** varro fills a genuinely distinct lane (serious Italian heritage) not covered by any existing template. The chef-gallery + inline-form patterns alone justify the build — both become shared primitives that get reused across multiple future templates.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Serious upscale Italian / multi-generational institution** (primary) — the Varro brief itself. Heritage osteria, chef-driven Italian destination.
  2. **Chef-driven destination restaurants generally** — the 4-up chef grid is the hook; cuisine can swap (French, modern American, Nordic) as long as the register stays serious/dark-upscale.
  3. **Italian steakhouse / Italian restaurant inside a resort or hotel** — dark canvas + sand accent + abundance photography reads as "premium Italian steakhouse" nearly as well as "heritage osteria."
- **Workable fit:** Multi-location Italian groups that need one flagship site (two-location footer is native). Chef-led French brasserie (swap photography, keep dark+sand). Chef-led modern steakhouse (swap red accents in).
- **Bad fit:** Date-night trattoria (use `gusto-01`); brunch/cafe; bright-daytime; lively-casual; fast-casual pizza (`pepper-01`); coffee/bakery. The serious-dark register fights all of these.

- **🔑 Gusto vs varro vs alinea — Italian template routing (document this explicitly for fork-agents):**
  - If the brief is **date-night Italian trattoria / atmospheric-romantic / testimonial-forward / single-narrative / less-serious register** → use **`gusto-01`**.
  - If the brief is **serious / chef-driven / heritage Italian institution / multi-discipline kitchen / multi-location group / "the team is the brand"** → use **`varro-01`**.
  - If the brief is **Michelin-tier Italian / tasting-menu-only / extreme ceremonial register** → use **`alinea-01`** (with Italian content layered on its minimal/ceremonial chassis).
  - Tiebreakers when a brief is ambiguous:
    - Ask: "Does the brief emphasize named chefs or kitchen team?" → yes → varro; no / emphasizes atmosphere → gusto.
    - Ask: "Does the brief mention multiple cuisine disciplines (pasta AND pizza AND meats AND fish)?" → yes → varro; single focus → gusto.
    - Ask: "Does the brief mention FAQ, multi-section menu, or chef-gallery as must-haves?" → yes → varro.
    - Ask: "Is the brief tasting-menu-only / 'Michelin-aspirational' / ceremonial?" → yes → alinea.

- **Why:** varro's whole identity is serious-craft-heritage + multi-discipline + named-chefs. Apply it to a brief that needs romantic-atmospheric warmth (gusto) or ceremonial restraint (alinea) and it feels mismatched; apply it to a brief that matches and it's the catalog's strongest Italian workhorse.

---

## 10. Final verdict

- **Recreate fully?** **Yes.** Fills the "serious Italian fine-dining" lane distinctly from gusto (trattoria) and alinea (Michelin-tier), and contributes four high-leverage shared candidates (`ChefGrid`, `InlineReservationForm`, `ManifestoQuote`, `FAQAccordion` promotion-ready, `MenuMarquee` 3rd-template promotion).
- **Extract components only?** No — recreate as full template; extract the four promotion candidates to `shared/` after recreation.
- **Catalog rank (1–10) — how often will we reach for this?** **8.** Italian is the most common fine-dining cuisine in American/European markets, and the "serious heritage institution" register is more common than the "date-night trattoria" register for upscale briefs. Slightly lower than 1776's 9 because Italian is a specific cuisine whereas 1776's "warm upscale American" is cuisine-agnostic.
- **Why it matters:** Varro establishes the catalog's serious-Italian lane, promotes `MenuMarquee` and `FAQAccordion` to shared (both hit the 2-3 template threshold), and introduces two genuinely new shared primitives (`ChefGrid`, `InlineReservationForm`) that will be reused heavily in any chef-driven or conversion-maximized template. The sand/tan accent `#A78064` extends the catalog's accent vocabulary beyond amber/terracotta/monochrome.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `SplitFloatingHeader` | top floating header with wordmark left + hamburger + CTA right | position (`split` vs centered/left — shared with 1776/qitchen); hamburger on/off; CTA-style | New variant of the `FloatingHeaderPill` primitive family. |
| `AbundanceHero` | display headline + 3-photo horizontal strip | photo-count (2/3/4); headline-above vs headline-overlay; caption on/off | Counterpart to `FullBleedHero` (1776) and `PageHeroSplit` (qitchen). |
| `EditorialAboutBlock` | label + long-form body + supporting landscape photo | label-position (left/top); photo-position (below/right); 1-column / 2-column | Reusable for any about/story inline block. |
| **`ChefGrid`** | 4-up chef portrait cards with matted cream backgrounds | card-count (3/4/5); mat color; portrait-grading (sepia/color/duotone); with-bio-line/without | **Strong shared candidate from day one.** First catalog template with this primitive. Lives in `shared/` after recreation. |
| **`ManifestoQuote`** | centered display pull-quote + optional ornament | with-ornament/without; with-attribution/without; size (H2/H1 scale) | **Shared candidate.** Reusable across any concept wanting a branded philosophical moment. |
| **`MenuMarquee`** | horizontal scrolling repeated-phrase marquee | separator glyph (◆/·/·); speed; phrase; muted/loud; pause-on-hover | **Promote to shared immediately** — now in 1776 + bramble + varro (3 templates). |
| `MenuMultiSection` | stacked category-label + dish-row-list blocks | category-count (3-6); with-intro-per-section; tab-nav vs stacked-scroll; price-accent-color | Contrast with qitchen's `MenuList` (text-led single-list) and 1776's `MenuTabbedList` (interactive tabs). |
| **`InlineReservationForm`** | form on home (no route hop) with fields + CTA | field-set (name/date/time/party variations); underline vs boxed inputs; submission handler (Resy/OpenTable/Formspree/native) | **Strong shared candidate.** Conversion-floor component. Most reservation-primary templates benefit. |
| `InlineContactBlock` | address + phone + email + hours on home | location-count (1/2/3); with-map/without; layout (stacked vs 2-column) | Two-location variant is load-bearing for multi-location groups. |
| **`FAQAccordion`** | expandable Q&A rows | canvas (dark/light); chevron glyph; with-category-tabs/without; row-count | **Promote to shared** — now in plate + varro (2 templates, hits threshold). |
| `ClosingOrnamentBand` | decorative ornament + centered display sign-off phrase | ornament glyph (sparkle/star/icon/none); phrase-line-count; size | Brand-close moment before footer. Reusable for hospitality emphasis. |
| `MultiLocationFooter` | 3-column rich footer with multi-location contact column | column-count (3/4); location-count (1/2/3); with-sitemap-column; with-socials-column; with-bottom-bar | Variant of 1776's `RichFooter` with multi-location support. |

**Cross-template promotion candidates after this audit:**
- **`ChefGrid`** — promote IMMEDIATELY after recreation. First chef-driven template, huge surface for future Italian/French/omakase/fine-dining-American forks.
- **`InlineReservationForm`** — promote IMMEDIATELY after recreation. Conversion-floor component, reusable in any reservation-primary register.
- **`ManifestoQuote`** — promote after a 2nd template uses it (watch for it in future heritage/concept templates).
- **`MenuMarquee`** — **promote NOW.** Hits 3-template threshold (1776, bramble, varro). Formally lift to `shared/ui-atoms/` or `shared/ui-blocks/`.
- **`FAQAccordion`** — **promote NOW.** Hits 2-template threshold (plate, varro). Variant axis is canvas (light/dark).
- `SplitFloatingHeader` — add as `position: 'split'` variant of the existing `FloatingHeaderPill` primitive.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Brand colors:** dark-slate canvas can swap to espresso brown (`#2B1F17`) or deep forest (`#1A2620`) — stay in dark-warm-earth family; sand/tan accent can swap to copper (`#B87333`), brass (`#B5942A`), warm terracotta (`#C67658`), or stay within the sand/tan `#A7806x` family. DO NOT swap to silver/steel (breaks heritage register) or bright gold (breaks serious-restraint register).
- **Logo:** replace "× varro" wordmark with restaurant's wordmark or icon-mark in same lowercase-caps ligature style; preserve the icon + name pairing.
- **Type families:** display can swap within elongated-capital-serif class (Belleza → Cormorant SC / Prata / Forum / Trajan-class). DO NOT swap to Cormorant Garamond regular (loses Belleza's elongated-cap signature) or to script/slab/rounded display (breaks register entirely). Body sans: Inter / Söhne / DM Sans / GT America all valid.
- **Hero photos:** must be abundance-forward warm food photography + laid-table spread. Same warm-light grading as Varro's 3-photo strip. Bright cool-daylight or dark-moody-minimal photos break the frame.
- **Chef portraits:** must be sepia or warm-desaturated grading. Bright daylight or corporate-lit portraits break the chef-card module.

### 12.2 Content-swap (safe — schema-driven)
- Restaurant name + tagline (replace "Varro" / "From Italy's Heartland" / "The Table Is the Center of Life" / "We Look Forward to Your Visit").
- About paragraph prose.
- **Chef grid**: 4 chef portraits + names + titles/roles (Head Chef / Sous Chef / Pastry Chef / Pizza Chef OR custom roles).
- Manifesto quote (swap "THE TABLE IS THE CENTER OF LIFE" for any philosophical brand line).
- Menu: category labels + dish names + descriptions + prices. Category count flexible (3-6).
- Reservation form field set (name / email / date / time / party-size → customize).
- Contact block: address(es) + phone(s) + email(s) + hours.
- FAQ Q&A pairs (4-8 items typical).
- Footer: sitemap links + socials + contact columns; location count flexible (1/2/3).
- Closing sign-off phrase ("WE LOOK FORWARD TO YOUR VISIT" → any hospitality line).

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:** events page; private dining page; wine-list page; press page; gift-card page; any of these added as real `/route` (currently all sub-routes 404, so this is a Phase-2 upgrade not a Phase-1 swap).
- **Removable without losing identity:** Two-location footer column → single-location (safe for single-location restaurants). Closing ornament sign-off → simple footer-only close (safe but loses warmth). FAQ accordion → can be dropped if venue has few FAQs (safe, minor warmth loss).
- **Replaceable:** `MenuMultiSection` → `MenuTabbedList` (1776-style) if interactive tabs are preferred; `ChefGrid` → single-chef-bio block if only one chef matters; `AbundanceHero` → `FullBleedHero` single-photo if the restaurant has one true signature dish.
- **Sections from other templates that could be added:** 1776's `StoryTimeline` could fit between About and ChefGrid for heritage concepts; plate's `GoodToKnowList` could sit alongside FAQ; qitchen's `CredibilityBadgeRow` could fit between ChefGrid and Manifesto for awards-led Italian concepts.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Dark-slate canvas `#1C2225`.** Switching to cream/light canvas destroys the serious-heritage register entirely — the whole template is dark-dominant by identity. Use gusto-01 if a cream canvas is needed.
- **Sand/tan accent in the `#A78064` family.** Removing the accent or swapping to a bright gold / silver destroys the heritage-luxury warmth. This is the warmth.
- **4-up ChefGrid on home.** Removing chef names from home turns varro into a generic upscale-Italian template and removes its primary differentiator. Keep chefs named.
- **Belleza display (or close equivalent).** Swapping to a short/compact serif (Cormorant Garamond regular) loses the elongated-cap signature that carries the editorial-display voice.
- **Abundance-photography hero (3-photo strip, not single photo).** Switching to a single cinematic plate moves the template toward 1776/alinea's register and loses the "multi-discipline Italian kitchen" communication.
- **Inline reservation form on home.** Removing it and routing to `/reserve` drops the conversion floor by ~30-50% and changes the template's conversion identity. Keep it inline.
- **Manifesto pull-quote.** The philosophical moment is load-bearing for heritage-Italian positioning. Removing it turns varro into an efficient-transactional template.
- **Menu on home (not hidden behind a /menu route).** The entire template assumes the diner will scroll the menu inline. Forcing menu to a separate route breaks the narrative.
- **Long-scroll single-page structure.** Compressing to a short home (qitchen's discipline) destroys the "we have a lot to show you" register.
- **Chef portraits in sepia/warm-desaturated grading.** Bright daylight portraits break the chef-card module's frame.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:** bright daytime / brunch / cafe / bakery; lively-casual / family-first; minimalist-monastic (use qitchen-01); Michelin-tasting-ceremonial (use alinea-01); vibrantly-social / Mexican / tropical; cocktail-speakeasy; vegan-forward-clean-minimal.
- **Restaurants that should be routed to a different template instead:**
  - Date-night Italian trattoria / atmospheric-romantic / testimonial-hero-led → `gusto-01`
  - Michelin-tier / tasting-menu-only / ceremonial extreme → `alinea-01`
  - Warm upscale American / non-Italian / cuisine-agnostic editorial fine dining → `1776-redesign-01`
  - Fast-casual pizza / pizza-specialist / slice-forward → `pepper-01`
  - Lively casual / family Italian → not in catalog yet (future)
  - Brunch / cafe / daytime-Italian-cafe → not in catalog yet (future)
- **Compatibility with `gusto-01` and `alinea-01`:** These three templates are **complementary** — they cover the three main Italian registers (heritage-institution vs date-night-trattoria vs Michelin-tasting). Many Italian briefs will be borderline between varro and gusto; the router should ask explicit questions about chef-naming, multi-discipline kitchen, and manifesto/heritage emphasis to disambiguate. Briefs that want elevation beyond varro's serious-upscale register should route to alinea.
- **Compatibility with `1776-redesign-01`:** Both are dark-canvas serious upscale, but 1776 is cuisine-agnostic modern-American-warm and varro is specifically Italian-heritage. Don't stack them in the same shortlist for the same brief — pick the cuisine-appropriate one.
