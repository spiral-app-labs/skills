# Audit: Gusto — Heritage-Italian Trattoria

> **Note:** This audit follows the `[observed]` / `[inferred]` discipline established in prior audits. Most visual/color/font claims are `[observed]` from `inputs/framer-templates/gusto-01/meta/*.json` computed styles. Structural and motion claims from downscaled screenshots + scroll frames (originals are 2880×10000+ px and will crash the session — only `/tmp/gusto-view/` derivatives were read).

**Slug:** `gusto-01`
**Source URL:** https://gusto-template.framer.website
**Source type:** Framer template (Gota Templates, free marketplace remix)
**Auditor:** Claude — 2026-04-19
**Status:** **locked**
**Linked recreation:** `templates/gusto-01/` (not yet recreated — pending this audit)

---

## 1. Summary

- **What this template is trying to be:** A moody, heritage-validated, date-night trattoria site — cream-tablecloth Italian with old-world serif authority. Fills the **Bella Cucina / "Since 19XX" neighborhood Italian** lane that none of the first 5 catalog templates cover. Register is moderately upscale (candlelit, pasta-forward, wine-paired) but NOT Michelin-ceremonial. Conversion is a reservation, not an order. `[observed]`
- **What kind of restaurant it fits:** Heritage Italian (trattoria / osteria / ristorante) in a walkable urban neighborhood, 15-30+ year history, family-run or family-narrative, pasta/wine-forward menu, $$-$$$ price band. Also workable for Greek / Spanish / French bistro / old-school steakhouse with similar heritage framing. `[inferred]`
- **What it does especially well (3 things, specific):**
  1. **Testimonial-overlay card baked INTO the hero photograph.** A dark semi-translucent card at bottom-left of the big hero image carries the pull-quote ("The Best Pasta Outside of Italy"), the 4.8★ rating, the 1,240 review count, and the two CTAs. The trust signal + the booking decision are completed WITHOUT scrolling. Conversion floor moves up into the hero itself — very rare in the catalog so far. `[observed]`
  2. **Asymmetric three-card hero** (one big atmospheric dish photo left ~60% + two stacked secondary cards right: "Our Restaurant" interior shot + "Menu" pasta close-up, each with a small chip label top-left). A compositional rhythm distinct from qitchen's sticky-left photo, bramble's slideshow, bamzi's single accent photo, alinea's full-bleed ceremonial. Gives the hero an editorial-magazine feel without going full-bleed. `[observed]`
  3. **Hero right-rail sidebar with Book-a-Table CTA + full-week opening hours table** (Mon-Sun rows, each with time range, closed day explicit). The reservation decision is co-located with the "can I eat there tonight?" signal. Standard restaurants push hours to the footer; gusto makes them a hero element. `[observed]`
- **What is weak / generic / overdesigned:**
  - Home page is essentially **single-viewport hero + footer** — `scrollHeight: 1509px` on a 900px client. The whole "site" is one screen. That's either elegant restraint (everything load-bearing lives in the hero) OR a content hole (no about-teaser, no dish-teaser, no story beat, no photo gallery on the home route). For a heritage-Italian that trades on atmosphere, the absence of a downscroll story beat is the biggest risk. `[observed]`
  - **Contact page is a single-sentence punt.** It reads "Oops, this page is off the menu! Mama Nonna will help you find your way back to something delicious" with a "Back to the Kitchen" button. It's a 404-page masquerading as a contact page — cute but wasted real estate where address + phone + map + form should live. `[observed]`
  - The lavender nav link color (`rgb(158, 158, 255)`) is *on* every page but shows up in meta as the nav-link color specifically — on the actual screenshots it reads nearly white. Likely only visible on hover or as a very subtle hue. Risk: the "signature lavender accent" in source.md may in practice be almost invisible and not load-bearing. `[observed — verify in recreation]`

---

## 2. Positioning + vibe

- **Aesthetic register:** Moody / candlelit / heritage-editorial / atmospheric. Dark-dominant upscale-casual. Italian-old-world. Distinct from 1776 (which is warm-navy-amber American fine-dining) by being darker, italic-led, with cream-on-black instead of cream-on-navy, and with European-serif restraint instead of amber-accent confidence. `[observed]`
- **Emotional tone:** Intimate, confident-heritage, unhurried. "We've been here since 1997 and we know what we're doing." The Sorts Mill Goudy italic-heavy display carries old-world literary authority. `[observed]`
- **Perceived price point:** **$$-$$$**. Entrees implied $20-35 (menu page dish list suggests pasta + secondi tier, not tasting-menu tier). Date night, anniversary dinner, Friday with the in-laws — not daily casual, not $150pp. `[inferred]`
- **Audience signal:** Adult diners 28-65, couples, small groups celebrating something low-key, locals + heritage-Italian-seeking tourists. Not kid-focused. Not late-night-cocktail. Reservation-primary signals planned-meal, not walk-in. `[inferred]`

---

## 3. Structure

- **Homepage section order (top to bottom, ~1509px total — effectively single viewport):** `[observed]`
  1. **Top nav bar** — full-width dark strip. Left: "Gusto" wordmark. Center/left: Menu · Reservation · About · Restaurant (4 links). Right: circular icon (language toggle or social glyph). Uses Figtree sans at 12px in a subtle lavender-ish tint `rgb(158, 158, 255)`.
  2. **Asymmetric three-card hero** occupying most of the viewport:
     - **Left card (~60% width):** Large atmospheric food photograph (plated pasta + wine glasses + candle glow). In bottom-left corner: dark semi-translucent **testimonial-overlay card** with:
       - Italic pull-quote "*The Best Pasta Outside of Italy*" (Sorts Mill Goudy italic, 48px)
       - Small body paragraph under the quote (Figtree, ~14px) — customer review text
       - 4.8 star rating glyph + "(1,240 Reviews)" counter
       - **Use for FREE** button (primary, cream-filled) + **More Templates** button (secondary, dark) — *these two are Framer-marketplace badges, NOT template content. In recreation they become the real dual CTA: Book a Table (primary) + View Menu (secondary), or similar.*
     - **Right column (~40%, two stacked cards):**
       - Top card: "Our Restaurant" chip-label + interior dining-room photograph (~45% of column height).
       - Middle card: "Menu" chip-label + pasta close-up photograph (~45% of column height).
     - **Right sidebar column** (narrow, ~15% width, beside the two stacked cards on wider viewports — or below them on medium): **Book a Table** primary CTA button (cream-filled, dark text, rounded) with a small calendar glyph, then an **Opening Hours** table rendered as a key-value list:
       - Monday · 16:00 – 22:00
       - Tuesday · 16:00 – 22:00
       - Wednesday · 16:00 – 22:00
       - Thursday · 16:00 – 22:00
       - Friday · 16:00 – 23:00
       - Saturday · 17:00 – 23:00
       - Sun – Sun · 17:00 – 23:00 (or "Closed" depending on row) `[observed — string pending exact recreation]`
  3. **Since 1997 heritage stamp** — small line bottom-left under the hero image ("© Since 1997"), Figtree small caps or regular. `[observed]`
  4. **Footer** (begins around y=1000-1050, ~450-500px tall):
     - Left column: social links ("X / Twitter", "Instagram") separated by a vertical divider.
     - Center column: **Menu** group (Home / Menu / About / Restaurant / Reservation links, Figtree ~13-14px cream).
     - Right column: **Utility** group (404, Licensing, etc.).
     - Bottom row: "© Gota Templates" credit (centered or right) and "Made in Framer" marketplace badge (NOT template content).

- **Homepage is single-viewport on desktop.** There is no story section, no dish preview, no gallery, no testimonial carousel, no about teaser. Everything the template wants to communicate on the home route lives inside the hero composition. **This is a structural distinction from every prior template in the catalog.** `[observed]`

- **Menu page (`/menu`, scrollHeight: 3089px):** `[observed]`
  1. Top nav (same as home).
  2. **Menu hero band** (~first viewport): left side has a large atmospheric pasta-close-up photo with a testimonial-overlay card identical in structure to the home hero card ("*Authentic slice of Italy in Prague!*" as the italic pull-quote, star rating, review count, dual "Use for FREE" / "More Templates" marketplace buttons — again, these become real dual CTAs in recreation). Right side begins the menu list with "Menu" h1 at top.
  3. **Sticky-left testimonial card + right-side scrolling dish list** — the left testimonial card remains visually anchored while the right column scrolls through dish rows. Sticky-left pattern confirmed. `[observed — via dimensions + screenshot]`
  4. **Dish rows** (right column, stacked vertically). Each row:
     - Small square photo thumbnail (left of row)
     - Dish name (Figtree, ~15px, cream)
     - Italian/English descriptor line below the name (smaller Figtree, muted)
     - Price right-aligned (Figtree, cream)
     - Horizontal hairline divider between rows
  5. **Section labels** — "Pasta" (h2) appears as a small 15px Figtree label above a dish group. Other sections implied (Antipasti / Primi / Secondi / Dolci / Bevande) — not all visible in downscaled screenshot but dish count is ~15 rows, suggesting 3-5 sections. `[observed + inferred]`
  6. **Footer** (same pattern as home).

- **About page (`/about`, scrollHeight: 1637px):** `[observed]`
  1. Top nav.
  2. **Asymmetric hero on about** — left: large photograph of an older woman in a chef's apron on a Tuscan terrace overlooking a village (heritage framing). Right: "About" h1 + intro paragraph block ("Founded by Italian owners, our restaurant brings authentic flavors from Italy to Prague, celebrating tradition, quality ingredients, and true hospitality.") + a second photograph of "Maria & Giovanni" (the owners, posed in a rustic kitchen).
  3. **Manifesto block** with italic-capable heading "From Tuscany to the Heart of Prague" (Sorts Mill Goudy, 48px) + multi-paragraph body copy below (Figtree, 14px).
  4. **"Maria & Giovanni" named-owners block** — photo + owner names as an h3 (Sorts Mill Goudy, 20px) + bio paragraph + secondary CTA ("More Templates" — marketplace badge, in recreation becomes e.g. "Meet the Team" or "Read Our Story").
  5. **Use for FREE / More Templates** button pair again (marketplace — in recreation these become a real CTA pair, likely "Book a Table" + "View Menu").
  6. **Footer.**

- **Contact page (`/contact`, scrollHeight: 900px, single-viewport):** `[observed]`
  1. Top nav.
  2. **Full-bleed photograph** of an older woman (likely "Nonna") in a chef's apron and toque, arms on a floured table. Semi-translucent dark card overlaid bottom-left with h1 "Mama Mia!" (Sorts Mill Goudy, 48px) + body paragraph explaining the page is "off the menu" + dual buttons ("Back to the Kitchen" primary + marketplace secondaries).
  3. This is **functionally a 404 page used as contact** — there's no address / phone / form / map. A real recreation must replace this with a proper Contact page (reservation embed + address + phone + hours + map). `[observed — high-priority recreation gap]`

- **Information architecture (top-level pages):** `/` · `/menu` · `/about` · `/contact` (called "Restaurant" in nav) + Reservation link (likely external or `#book`). Flat 4-page hierarchy. `[observed]`

- **Navigation style:** Full-width top nav bar (not a floating pill). Sticky on scroll `[inferred — menu page has scrollHeight > clientHeight and nav is visually consistent across scroll frames]`. Left wordmark + 4 center/left links + right circular icon. Nav text color `rgb(158, 158, 255)` — the lavender accent — 12px Figtree sans. `[observed]`

- **Reservation/CTA placement:** **Book a Table** primary CTA lives in the hero right sidebar (home) and as the "Reservation" nav link persistent across pages. NOT a sticky floating button. NOT a full-width reservation strip section like 1776. Reservation-primary but hero-anchored. `[observed]`

- **How menu is handled:** Dedicated `/menu` page with dark canvas + sticky-left testimonial card + right-side scrolling dish list (photo thumbnail + name + description + price + hairline divider per row). Editorial-restaurant-menu treatment, not ecommerce-card. `[observed]`

- **How story / atmosphere / contact are handled:**
  - **Story:** Dedicated `/about` page with owner-named manifesto and heritage photography (Tuscany + kitchen portraits).
  - **Atmosphere:** Woven into hero secondary cards ("Our Restaurant" interior shot) and owner/Tuscany photos on /about. No dedicated gallery page.
  - **Contact:** **Missing in the template.** Must be built in recreation.

---

## 4. Visual system

> Ground-truthed from `meta/home.json`, `meta/menu.json`, `meta/about.json`, `meta/contact.json` computed styles.

- **Typography:**
  - **Display: `Sorts Mill Goudy`** (Google Fonts) — old-style serif with a strong, expressive italic. Weight 400 throughout. `[observed]`
    - Hero testimonial pull-quote (h3 on home): **48px / 52.8px LH / weight 400 / letter-spacing normal / italic / cream (`rgb(255, 252, 244)`)**
    - Menu h1 ("Menu"): **48px / 52.8px LH / weight 400 / upright / cream**
    - About h1 ("About") and about h2 ("From Tuscany to the Heart of Prague"): **48px / 52.8px LH / weight 400 / mixed case**
    - About h3 (owner name "Maria & Giovanni"): **20px / 24px LH / weight 400**
    - Contact h1 ("Mama Mia!"): **48px / 52.8px LH / weight 400 / italic-feel from the word choice**
  - **Body / UI: `Figtree`** (Google Fonts) — humanist sans. Weight 400. `[observed]`
    - Body paragraphs (p selector): **14px / 16.8px LH / weight 400 / cream**
    - Menu h2 (section label "Pasta"): **15px / 18px LH / weight 400 / cream** — *note: Figtree, not Sorts Mill Goudy. Section labels are sans, dish names are sans, only big editorial headings are serif.*
    - Nav links: **12px / normal LH / weight 400 / sans (computed as generic `sans-serif`, likely Figtree) / color `rgb(158, 158, 255)` (lavender)**
    - Buttons: **12px / normal LH / weight 400 / color `rgb(255, 255, 255)` / bg `rgba(14, 16, 17, 0.2)`** (semi-translucent dark button is the default button style; the cream-filled "Use for FREE" button is a primary variant)
  - **Pairing logic / contrast:** Serif display carries *all* the editorial/emotional weight (hero quote, page titles, about manifesto). Sans handles *everything functional* (nav, buttons, body, dish names, hours, prices). Serif ratio to sans is ~1:6 by character count — serif is rare and load-bearing, sans is the workhorse. Classic European-editorial pairing logic. `[observed]`
  - **Notable type behavior:**
    - **Italics are prominent.** The hero pull-quote "*The Best Pasta Outside of Italy*" is set in italic — Sorts Mill Goudy has one of the most expressive italics in the Google Fonts library, and gusto leans into it. Any recreation that uses a roman-only serif (e.g. Forum, which has no italic cut) will lose the whole character. `[observed]`
    - **Typographic hierarchy compresses display to ONE size (48px).** h1 on home = h1 on menu = h2 on about = h3 on home testimonial = 48px / 52.8px LH. The only display size is 48px. Sub-display uses h3 at 20px (about "Maria & Giovanni"). This is a deliberate restraint — single display size, single body size (14px), one section-label size (15px). Very tight scale. `[observed]`
    - Body text is small (14px) by modern standards. Fits the editorial-restraint register but has legibility cost for older diners — recreation should consider bumping to 15-16px without changing character. `[observed]`

- **Color strategy:** **Two-mode dark-dominant with near-pure cream text + lavender micro-accent.** Simpler palette than 1776 (which has navy + surface + cream + amber). Gusto is just dark + cream + lavender. `[observed]`
  - **Background canvas (all 4 pages):** **`rgb(15, 17, 12)` = `#0F110C`** — near-black with the faintest green-brown warmth. NOT the cool-blue-navy of 1776 and NOT qitchen's `#0B0B0C`; it's warmer than both by a hair. This warm-black is what lets candlelit photography feel "of a piece" with the chrome.
  - **Primary text:** **`rgb(255, 252, 244)` = `#FFFCF4`** — very warm near-white cream. Warmer than 1776's `#F5F0E8`, warmer than qitchen's `#EFE7D2` (which is more yellow). Reads as "tablecloth cream" — classic Italian restaurant palette.
  - **Pure white:** **`rgb(255, 255, 255)`** — used on buttons and select overlays. Secondary text color.
  - **Accent:** **`rgb(158, 158, 255)` = `#9E9EFF`** — soft lavender/periwinkle. Appears as the nav-link color and likely as micro-accent (link hover, small glyphs). Does NOT appear as a primary CTA fill (primary CTA is cream-filled). This is a whisper-accent, not an amber-confidence-accent. `[observed — verify in recreation that it appears anywhere visible at desktop reading distance]`
  - **Button bg (default variant):** **`rgba(14, 16, 17, 0.2)`** — semi-translucent dark, sits atop photography via backdrop-filter.
  - **NOTE on "cream canvas sub-pages" claim in source.md:** All four meta files report `bodyBg: rgb(15, 17, 12)` — i.e., **all four pages are dark-canvas.** The source.md hypothesis that sub-pages might be cream is **not supported by meta data.** `[observed]` The "two-mode palette" description should be revised: gusto is **dark-mode-monolithic with cream text throughout**, NOT alternating dark/cream like bramble.

- **Spacing rhythm:** Dense-but-editorial. The hero fills the viewport with very little breathing room between the big left card, the two stacked right cards, and the sidebar — but each element has generous internal padding (the testimonial-overlay card has ~32-40px of padding). Editorial newspaper density rather than modernist generous. `[observed]`

- **Grid / layout behavior:** **Asymmetric column grid** — looks like a custom 12-col where hero uses ~7 / ~3 / ~2 proportions (big card / stacked cards / sidebar). Menu page uses ~5 / ~7 (sticky left card / right dish list). About uses ~6 / ~6 split with nested stacked media on each side. Not a standard 3-up or 4-up grid anywhere. Contact reverts to single full-bleed. Mobile would stack these into single-column. `[observed + inferred]`

- **Image treatment:** **Warm-candlelit food photography.** Plated pasta + wine glasses + out-of-focus candle-glow background. Kitchen portraits shot in warm tungsten with visible practical lights. Owner portraits lit from window-right in a rustic-kitchen setting. Color grading: amber/orange highlights, deep-brown shadows, mid-tones pushed slightly toward red. Same family as 1776 but *warmer* (more orange, less gold). `[observed]`

- **Animation / motion:** `[observed via meta + scroll frames]`
  - **Only `transitions: ["all"]` declared** across all four pages — no CSS keyframe animations. Suggests Framer-default scroll-in reveals but nothing hand-coded.
  - **Transforms inventory** includes small translate/rotate matrices consistent with icon rotation, arrow hover, and micro-motion in buttons/glyphs. No parallax matrices visible.
  - **Hover-CTA frame** shows the hero's large left image switching from the pasta-plating shot to an interior-warm-window shot — likely a **hover-triggered image swap** on the large hero card, or a cross-fade rotator. `[observed — from `desktop-home-hover-cta.png`]`
  - **Motion intensity: 1 (restrained).** Less than 1776's 2. Fits the heritage-old-world register — heavy motion would feel wrong.

- **Texture / depth / borders / cards / overlays:**
  - **Testimonial-overlay card:** semi-translucent dark (~rgba(0,0,0,0.6-0.7) with backdrop-filter blur estimated), soft rounded corners (~14-18px), generous internal padding. Sits inside the hero photo with ~24-40px margin from photo edges. `[observed]`
  - **Hero secondary cards ("Our Restaurant" / "Menu"):** same rounded corners, photo-filled, with a small cream-text **chip label** at top-left (rounded pill, dark semi-translucent bg). `[observed]`
  - **Sidebar Book-a-Table CTA:** cream-filled button, dark text, rounded corners, small calendar glyph left, full card width. `[observed]`
  - **Opening hours table:** plain text key-value rows, hairline divider between rows, no box. Sidebar container itself has subtle dark-elevated bg distinct from canvas. `[observed]`
  - **Menu page dish rows:** photo thumbnail + text + price, horizontal hairline divider between rows. No card chrome on rows — editorial-restaurant-menu, not ecommerce. `[observed]`
  - **Borders:** hairline dividers throughout (likely `rgba(255, 252, 244, 0.08-0.12)`). No heavy borders. `[inferred]`
  - **Since 1997 stamp:** small text, no chrome, bottom-left corner placement — functions as a quiet watermark. `[observed]`

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** **~2 seconds.** Hero pasta photograph + italic pull-quote "*The Best Pasta Outside of Italy*" + 4.8★ (1,240 reviews) + Book a Table sidebar + opening hours — the restaurant's cuisine, quality, popularity, and bookability all resolve in the first viewport. Strongest time-to-understand of any template in the catalog so far. `[observed]`
- **Reservation path strength:** **8/10.** "Book a Table" is persistent in hero sidebar + "Reservation" in top nav (both always visible on home). Hours are right there. Two clicks to book (assuming OpenTable/Resy behind the CTA). Loses 2 points for: (1) no phone-call fallback (older diners calling), (2) no sticky reservation on scroll — once you scroll past hero on menu/about, the reservation is nav-only. `[observed]`
- **Menu access clarity:** **9/10.** Dedicated /menu page + "Menu" in nav + "Menu" chip on one of the hero secondary cards (tappable). Three redundant paths. The menu page itself is clean and scannable. `[observed]`
- **Location / hours / trust signals:** **7/10.** Hours in hero sidebar = 10/10. Reviews (4.8★ · 1,240) baked into hero card = 10/10. **BUT: location (city/neighborhood/address) is nowhere on the home route.** The string "Prague" appears only in the menu page's testimonial ("Authentic slice of Italy in Prague!") — not in hero, not in footer. Phone number not surfaced anywhere in screenshots. This is a significant gap — in recreation, the Since 1997 stamp should expand to include city, and the footer should gain address + phone. `[observed — high-priority recreation fix]`
- **Mobile conversion path quality:** **7/10** `[observed via mobile screenshots — not deep-inspected]`. The asymmetric three-card hero must reflow — big card stacks first, then two secondary cards, then sidebar (Book a Table + hours) last. That puts the primary CTA below ~2-3 viewports of photography on mobile, which is worse than desktop. **Recreation should consider promoting Book-a-Table to a sticky bottom-bar on mobile** to recover the hero-anchored reservation pattern. `[observed + inferred]`

---

## 6. Reusable ideas

- **Hero pattern:** **`HeroMultiCardAsymmetric`** — one large media card + stacked secondary cards + right-rail sidebar. The most distinctive hero composition in the catalog. Contrast with qitchen's sticky-photo split, 1776's full-bleed, bramble's slideshow, bamzi's single accent, alinea's ceremonial full-bleed. Genuinely new lane. `[observed]`
- **Nav pattern:** Full-width dark top nav bar (not a floating pill) — simplest possible nav, leaves the hero to carry the weight. Wordmark-left + links-center + icon-right. Reusable wherever the hero is doing heavy visual work and nav needs to stay out of the way. `[observed]`
- **CTA pattern:** **`BookATable` cream-filled primary + calendar glyph**, living in the hero sidebar. Reservation-primary (not order-primary, not waitlist-primary). Reusable for any reservation-led restaurant. `[observed]`
- **Menu-preview pattern:** **Chip-labeled photo card** ("Menu" pill on a pasta close-up). Instead of a 3-up dish grid, gusto uses a single tappable photo tile that links to /menu. Minimal but punchy. Reusable where full menu previews would feel like ecommerce. `[observed]`
- **Gallery pattern:** None explicit — gusto has NO gallery page. Instead, photography is distributed across hero-secondary-cards (interior shot) and about-page (owner portraits, Tuscany landscape). This is a valid pattern: "gallery-by-distribution" for restaurants that don't need a dedicated photo wall. `[observed]`
- **Testimonial / press / credibility pattern:** **`HeroTestimonialCard`** — pull-quote + star-rating + review-count + dual CTA, overlaid on hero photography. Moves conversion floor UP into the hero. Immediately reusable for any reservation-primary high-volume neighborhood spot (pizzerias, neighborhood sushi, family Italian, diners, breakfast spots with lines). **Strong shared promotion candidate.** `[observed]`
- **Footer / contact pattern:** Minimal 3-column footer (socials / nav-list / utility-list) on dark. No address, no phone, no map — which is the gap. Reusable as "minimal rich footer" but recreation must ADD address + phone + map row. `[observed]`
- **Section-sequencing logic:** Home = single-viewport hero (everything load-bearing in one screen) + footer. Menu = hero-band + sticky-left-testimonial + scrolling dish list + footer. About = asymmetric hero + manifesto + named-owners + footer. **Sequencing principle: one big visual idea per page, heavy use of asymmetric splits, no scrolling "product marketing" feel.** Editorial single-idea-per-page rather than multi-section landing-page. Reusable as a whole-template sequencing philosophy for editorial-register restaurants. `[observed]`
- **Hero sidebar with hours + CTA:** **`HeroHoursSidebar`** — right rail with primary CTA + full-week opening hours. Co-locates the "when can I eat" and "how do I book" decisions. `[observed]`
- **Chip-label on photo card:** **`PhotoCardWithChip`** — small cream-text pill label at top-left of a photo card. Turns a photo into a navigable category tile without heavy chrome. `[observed]`
- **Sticky-left testimonial + right-scrolling menu list:** **`MenuStickyTestimonial`** — the testimonial card persists while dish rows scroll. Editorial-layout that keeps the "we're good, trust us" signal alive throughout menu browsing. `[observed]`
- **Italic-heavy display serif as voice-carrier:** Sorts Mill Goudy's italic does for gusto what italic-on-upright-serif does for 1776 — carries the brand voice. `[observed]`
- **Heritage stamp ("Since 1997"):** Small footer/hero-corner line. Trivial pattern but high-leverage for any restaurant with a heritage story. `[observed]`
- **Full-week hours table as content (not footer-only):** Hours rendered as a prominent hero element — not banished to the footer. `[observed]`
- **Star-rating + review-count inline with pull-quote:** "4.8 ★ (1,240 Reviews)" sitting directly under the testimonial quote. Inline credibility. Stronger than 1776's separated "4.9★ 1,902 REVIEWS" badge because it's fused with the quote itself. `[observed]`

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - Hero testimonial-overlay card with quote + rating + review-count + dual-CTA. **Promote this.**
  - Asymmetric three-card hero composition — visually distinctive and hard to find elsewhere.
  - Hero right-rail sidebar with CTA + hours.
  - Sticky-left testimonial on menu page.
  - Italic-led display serif for heritage-Italian / old-world registers.
  - "Since 19XX" heritage stamp.
  - Inline star-rating + review-count WITH the testimonial quote (not as a separate badge).
  - Chip-labeled photo card as a menu teaser.
- **Steal but tone down:**
  - The single-viewport home approach — in recreation, add a story teaser beat and/or a dish teaser beat below the hero for restaurants without 20+ years of heritage or 1,000+ reviews that can carry the hero alone.
  - The 14px body — bump to 15-16px for modern readability without breaking register.
  - The lavender accent — test visibility; if it doesn't read, swap for a more saturated European color (deep Tuscan red / olive / ochre) OR drop the accent entirely and go monochrome (cream on dark).
- **Too template-y / overused — avoid:**
  - **Do NOT copy the "Mama Mia!" 404-as-contact page.** Every recreation must have a real Contact page (map + address + phone + reservation embed + form).
  - Do not copy the Framer-marketplace "Use for FREE" / "More Templates" button strings. Those are badges, not content.
  - The "Mama Nonna will help you find your way" copy is cute but stereotyped — for non-Italian recreations it's a liability.
- **Would hurt originality if copied literally:**
  - The exact "Authentic slice of Italy in Prague!" line (delete city-specific framing when forking).
  - The specific Tuscany-to-Prague migration narrative.
  - The Sorts Mill Goudy + Figtree pairing as-is with no substitution — this combo is strong but identifiable; consider swapping Figtree for Manrope/Inter/DM Sans if gusto is used multiple times.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **6.** The hero composition (big card + stacked cards + sidebar) requires a careful CSS grid with asymmetric columns and a mobile reflow plan. The testimonial-overlay card needs backdrop-filter and proper contrast against varied photography. Sticky-left testimonial on /menu requires CSS sticky positioning inside a flex container. The rest (nav, footer, about split, dish rows) is standard. No individual piece is hard but **the hero is the high-bar component** — get it right and the template lands; get it wrong and the whole template loses its signature.
- **Components needed (template-specific, not shared):**
  - `HeroMultiCardAsymmetric` — the big-left + stacked-right + sidebar composition
  - `HeroTestimonialCard` — pull-quote + rating + review-count + dual-CTA overlay (**shared promotion candidate**)
  - `HeroHoursSidebar` — CTA + opening-hours table in a right-rail card (**shared promotion candidate**)
  - `PhotoCardWithChip` — photo + top-left chip label (**shared candidate**)
  - `MenuStickyTestimonial` — sticky-left card + right-scrolling dish list
  - `MenuDishRow` — photo-thumbnail + name + description + price
  - `AboutHeritageSplit` — owner-photo + heritage-manifesto + named-owner-block
  - `HeritageStamp` — "Since 19XX" mini (**shared candidate**)
  - `TopNavBar` — full-width top bar with wordmark + links + icon
  - `RichFooterMinimal` — social + nav-list + utility-list, cream-on-dark
  - Real `ContactPage` — must be BUILT from scratch; template's contact is a 404
- **Tokens / variants needed:**
  - New theme: **`gusto-dark`** — canvas `#0F110C`, text cream `#FFFCF4`, accent lavender `#9E9EFF` (optional), button bg-translucent `rgba(14,16,17,0.2)`, button primary cream-fill.
  - Display class: italic-capable old-style serif (Sorts Mill Goudy or EB Garamond fallback).
  - Body class: humanist sans (Figtree or Manrope fallback).
  - Motion intensity: 1 (restrained).
  - Image grading: warm-candlelit (amber highlights, deep-brown shadows, red-shifted mid-tones).
- **Verdict:** **Full template recreation.** gusto fills a meaningfully different lane (heritage-Italian-trattoria) that none of the first 5 templates cover. The hero composition alone is worth the recreation effort. Multiple promotion candidates (`HeroTestimonialCard`, `HeroHoursSidebar`, `HeritageStamp`) will emerge from this build and reappear in future templates. **Recreation gap to fix:** the missing contact page and the missing location/address surfacing must be built, not copied.

---

## 9. Restaurant fit

Mapped against `research/restaurant-archetypes.md` mental model + current catalog lanes (qitchen = dark sushi fine-dining, 1776 = dark warm-upscale American, bramble = light retro bar, bamzi = pan-asian accent, alinea = Michelin ceremonial).

- **Best fit (top 2–3 archetypes):**
  1. **Heritage-Italian trattoria / osteria / ristorante** (primary) — Bella Cucina-class: 15-40 year neighborhood Italian, family-named, pasta-forward, wine-paired, moderately upscale but reservation-walkable. This is literally what gusto was designed for.
  2. **Heritage-European family-owned** (workable primary) — Greek taverna, Spanish family restaurant, French bistro with "since 19XX" narrative, old-school Jewish deli that wants to trade up. All match the italic-heritage-heavy register.
  3. **Old-school steakhouse with heritage** — "Est. 1962" downtown steakhouse with dark-leather interior and multi-decade reputation. Needs slight image-grading adjustment (less pasta, more rib-eye) but composition + register fit.
- **Workable fit:** Italian-American neighborhood joint (drop some of the "authentic Italy" framing); wine bar with substantial food program (strip out the chef portraits, emphasize the hours-sidebar); date-night prix-fixe concept.
- **Bad fit:**
  - Brunch / cafe / bakery (needs bright daytime — wrong palette).
  - Fine-dining tasting menu / Michelin (use `alinea-01` — gusto is too warm/approachable).
  - Takeout pizza / fast-casual (reservation-primary pattern actively fights the order-primary need).
  - Lively cocktail bar / nightclub-adjacent (gusto is quiet and intimate, not loud).
  - Vegan / wellness / juice bar (the candlelit-meat-and-pasta imagery fights vegan positioning).
  - American diner / retro luncheonette (use `bramble-01` — gusto is too European-serious).
- **Why:** gusto's italic-Sorts-Mill-Goudy display + warm-dark photography + heritage stamp + reservation-primary structure all encode a single register — "old-world European family restaurant with a story." Push it outside that register and the signals fight the content.

---

## 10. Final verdict

- **Recreate fully?** **Yes.** Fills a specific lane (heritage-Italian trattoria / Bella Cucina-class) that no existing template covers. Unique hero composition + testimonial-overlay pattern justify the full build.
- **Extract components only?** No — full recreation + promote `HeroTestimonialCard`, `HeroHoursSidebar`, `PhotoCardWithChip`, `HeritageStamp` to `shared/` candidates after recreation.
- **Catalog rank (1–10) — how often will we reach for this?** **8.** Heritage-Italian / heritage-European-family is one of the most common archetypes in the US restaurant population (every walkable downtown has one or two). Ranks below 1776 (9) because "warm upscale American" is a shade more universal than "heritage Italian", but ranks above qitchen and alinea (both 6-7) which cover narrower ceremonial lanes.
- **Why it matters:**
  - First **heritage-Italian / date-night-trattoria** template in the catalog.
  - First **testimonial-overlay hero** pattern — moves conversion floor up into the first viewport.
  - First **asymmetric multi-card hero** composition.
  - First **hero right-rail hours + CTA sidebar**.
  - First **italic-as-voice-carrier** display strategy (1776 uses italic-on-upright-pairings; gusto uses italic-alone for emotional weight).
  - First template to prove that a **single-viewport home** can work if every hero element is load-bearing (though the catalog should be cautious — gusto barely gets away with it).
  - Establishes the **dark-warm-Italian (not navy-warm-American)** palette lane, distinct from 1776.
  - Adds Sorts Mill Goudy + Figtree pairing to the catalog font roster.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `TopNavBar` | full-width top nav | sticky-on-scroll; link-count; with-language-toggle; wordmark-position (left/center) | Template-internal. Contrast with qitchen/1776's floating pills — gusto uses a traditional top bar. |
| `HeroMultiCardAsymmetric` | homepage hero composition | card-count (1 large + N stacked); with-sidebar (yes/no); sidebar-content (hours / map / menu-preview) | **Template-signature.** Promotion only if 2nd template adopts the three-card asymmetric hero — not likely near-term. Keep template-internal for now. |
| `HeroTestimonialCard` | pull-quote + rating + review-count + dual-CTA, overlaid on hero photo | quote-only / with-rating / with-count; CTA-count (1/2); translucency-level; position (bottom-left / center) | **Strong shared promotion candidate.** Any reservation-primary high-volume neighborhood spot benefits. Flag for promotion after 2nd template uses it. |
| `HeroHoursSidebar` | right-rail card with primary CTA + full-week hours | CTA-label; hours-format (full-week / today-only / open-now-only); with-map-link | **Shared promotion candidate.** Useful for walk-in-or-reserve hybrids. |
| `PhotoCardWithChip` | photo tile with cream-text chip label | chip-position (tl/tr/bl/br); chip-bg-style; clickable/static; aspect-ratio | **Shared candidate** — gallery tiles, category teasers, press-logo cards. |
| `BookATableButton` | primary reservation CTA | inline / sidebar / sticky-mobile; with-calendar-glyph; label-variant | Template-specific label/styling; core primitive from `shared/ui-atoms/ReservationCTA` likely. |
| `OpeningHoursTable` | key-value day-time rows | compact / expanded; highlight-today; grouped (Mon-Thu / Fri-Sat) | **Shared candidate** — most templates will need hours somewhere. |
| `MenuStickyTestimonial` | sticky-left testimonial card + right-scrolling dish list container | sticky-content (testimonial / filters / nav / none); list-type (rows / cards) | Template-signature layout primitive for the /menu page. |
| `MenuDishRow` | photo-thumb + name + description + price + hairline | with-thumbnail / text-only; with-dietary-glyphs; with-add-to-order | Contrast with qitchen's thumbnail-led list and 1776's text-only list. |
| `MenuSectionLabel` | small Figtree label above a dish group | sans / serif; uppercase / mixed | Template-specific treatment. |
| `AboutHeritageSplit` | about-page asymmetric split with heritage imagery + manifesto | left-media / right-media; with-owner-portrait; with-named-owners-block | Template-internal. |
| `NamedOwnersBlock` | "Maria & Giovanni" named-founders card with photo + bio | single-owner / multi-owner; photo-position | Reusable across family-owned / chef-driven templates. Candidate for shared after 2nd use. |
| `ManifestoBlock` | h2 italic-capable heading + multi-paragraph body | heading-weight (italic/upright); body-column-count (1/2) | Reusable across any story-telling page. Overlaps with bramble/alinea story blocks — worth checking for cross-template graduation. |
| `HeritageStamp` | "Since 19XX" / "Est. 19XX" small text mark | position (footer / hero-corner / nav-inline); with-city; typeface (serif/sans) | **Shared candidate** — trivially reusable for any heritage restaurant. Promote on 2nd use. |
| `FooterMinimalRich` | 3-column cream-on-dark footer with socials + nav + utility | with-address / without; with-newsletter / without; column-count (2/3/4) | Template-specific variant of general `RichFooter`. Likely graduates into a shared `Footer` with variant axes after a few templates. |
| `HoverImageSwap` | hero card image cross-fades on hover between two images | image-count (2/3); swap-trigger (hover / interval / scroll); transition-duration | Template-internal motion primitive. May promote if used elsewhere. |
| `ContactPage` (**must-build, template is broken here**) | real contact page with map + address + phone + form + hours | with-map; with-form; with-reservation-embed | **NOT in source template — recreation must build from scratch.** Flag this in the recreation plan explicitly. |

**Cross-template promotion candidates after this audit:**
- `HeroTestimonialCard` — promote after 2nd template uses it (gusto is the first). Likely fast adoption for any reservation-primary neighborhood restaurant.
- `HeroHoursSidebar` — promote after 2nd template uses it.
- `PhotoCardWithChip` — promote after 2nd template uses it (likely fast — chip-on-photo is a common primitive).
- `HeritageStamp` — promote IMMEDIATELY (trivial, zero-friction, universal pattern for any heritage restaurant).
- `OpeningHoursTable` — promote IMMEDIATELY (most future templates will need hours somewhere).
- `ManifestoBlock` — check against bramble's story section and alinea's philosophy section for graduation.
- `NamedOwnersBlock` — likely appears in any family-owned template; promote on 2nd use.
- `TopNavBar` — contrast with qitchen/1776's floating pills. Do NOT auto-promote; keep as template-specific nav variant. The `Nav` primitive should have a variant axis `style: 'floating-pill' | 'top-bar' | 'sidebar'`.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Brand colors:** dark canvas can shift within the warm-black family (`#0F110C` → `#120F0A` terracotta-black / `#0E120E` olive-black / `#13100D` espresso-black). Lavender accent can swap for any restrained European color (deep Tuscan red `#8B2E1F`, olive `#6B7A3A`, ochre `#C69A4E`, or drop entirely for monochrome). DO NOT shift to cool navy (that's 1776's lane) or bright cream canvas (that would break the register).
- **Logo:** replace "Gusto" wordmark with restaurant name in Sorts Mill Goudy or swap-class serif. Keep the wordmark small and in the top-left — the asymmetric-hero composition depends on not having a giant logo competing for hero attention.
- **Type families (within same weight class):** Display can swap within italic-capable old-style serif class (Sorts Mill Goudy ↔ EB Garamond ↔ Crimson Pro ↔ Cormorant Garamond ↔ Cardo ↔ Playfair Display). DO NOT swap to Forum (no italic), DO NOT swap to modern sans-display (breaks heritage). Body can swap within humanist sans (Figtree ↔ Manrope ↔ Inter ↔ DM Sans).
- **Hero photo (big left card):** must be a warm-candlelit food photograph with depth of field. Plated dish + wine glasses + candle-glow recommended. NOT bright daylight, NOT cool-blue lighting.
- **Secondary cards (Our Restaurant / Menu):** interior dining-room shot + dish close-up. Both warm-lit. Must color-grade-match the big card.
- **About page media:** owner portrait in a rustic kitchen + optional heritage-landscape (Tuscan hills / Mediterranean coast / village piazza). Warm tungsten lighting.

### 12.2 Content-swap (safe — schema-driven)
- **Restaurant name + tagline** — replace "Gusto" / "The Best Pasta Outside of Italy". Tagline must be italic-compatible (a quotable line that reads well in Sorts Mill Goudy italic).
- **Hero testimonial pull-quote + star rating + review count** — replace with a real Google/Yelp/OpenTable review (keep quote short, 6-10 words ideal), real star rating, real review count. **Do NOT fabricate review counts.**
- **Hours + location** (address + city + phone — the address/phone are missing from the source template and must be ADDED during recreation, not swapped).
- **Reservation link** (OpenTable / Resy / Tock / direct — attaches to the Book a Table CTA).
- **Menu items** (dish name + Italian/local description + price). Menu page supports 15+ items across 3-5 sections.
- **About/story copy** — "From [Origin Place] to the Heart of [Current City]" manifesto. Heritage-migration narrative is load-bearing.
- **Owner names + bio** — replace "Maria & Giovanni" block with real owner names + photo + 2-paragraph bio.
- **Heritage stamp year** — "Since 19XX" to match real founding year.
- **Nav labels** — can localize ("Menu" → "Il Menu", "About" → "La Storia", "Reservation" → "Prenotazione") for Italian-branded builds.
- **Footer socials** — replace X/Instagram with actual brand channels.

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:**
  - Add a **Story / Our Restaurant** teaser section BELOW the home hero (restaurants without 1,000+ reviews / 20+ years won't survive on hero-only).
  - Add a **Dish Highlights** 3-up grid below the hero for signature dishes.
  - Add a **Press / Awards** strip (Eater "essential", Michelin Bib Gourmand, local James Beard nod) — gusto benefits from this more than it shows.
  - Add a **Gallery** page (interior + plating + owner/team shots).
  - Add a **Private Dining / Events** page for restaurants that host.
  - **Add a real Contact page** — this is not optional; the source template's contact is a 404-cosplay.
- **Removable without losing identity:**
  - The "Our Restaurant" secondary card (if restaurant has no dining-room worth showcasing — but the hero then needs a recomposition).
  - Lavender accent (if it doesn't read in practice).
  - The hover-image-swap on the big hero card (static works fine).
- **Sections from other templates that could be added:**
  - 1776's `MarqueeStrip` (diamond-bullet attributes) could slot between hero and footer to add a ticker-beat.
  - 1776's `MultiChannelReservationStrip` (OpenTable + Call) could replace the hero-sidebar Book-a-Table for restaurants with heavy phone bookings.
  - qitchen's `CredibilityBadgeRow` could surface Michelin Bib / Eater / James Beard badges above the footer.
  - alinea's ceremonial `ChapterBreak` would clash — do NOT add.
  - bramble's section-alternating cream/dark mode would clash with gusto's dark-monolithic register — do NOT add.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Italic-capable old-style serif as display.** Sorts Mill Goudy or an italic-strong garamond/cormorant/crimson. A roman-only serif (Forum) OR a modern geometric serif OR a sans display destroys the heritage voice.
- **Warm-black canvas (`#0F110C` family).** Shifting to cool-navy = 1776; shifting to cream = bramble; shifting to pure black = qitchen. The warm-black is the register.
- **Cream text (`#FFFCF4` family).** Pure white would feel too clinical; any yellow-shifted cream toward qitchen's `#EFE7D2` would feel too old-paper.
- **Testimonial-overlay card on hero.** Removing it collapses the whole "we're good, here's proof, book now" compression that makes the hero work as a single-viewport homepage.
- **Opening hours in the hero sidebar.** Banishing hours to the footer loses the "can I eat there tonight" signal.
- **Asymmetric three-card hero composition** on the home route. Switching to a full-bleed single-image hero breaks the editorial-magazine feel and pushes toward 1776/qitchen territory.
- **Sticky-left testimonial on menu page.** Without it, the /menu page becomes a generic dish list and loses template signature.
- **Single display size (48px) and tight typographic scale.** Adding more display sizes breaks the editorial restraint.
- **Heritage stamp.** "Since 19XX" is core to the register. Removing it loses the whole heritage positioning.
- **Warm-candlelit photography grading.** Bright daylight / cool-tone / studio-lit food photography breaks the atmosphere.
- **Reservation-primary architecture.** Switching to order-primary (adding an online-order CTA to hero) pushes toward pepper/takeout territory and breaks the date-night register.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:**
  - Bright / sunny / daytime (brunch, cafe, bakery) — the warm-black canvas + candlelit photography fights.
  - Takeout / fast-casual — reservation-primary + hero-testimonial + hours-sidebar all assume sit-down dining.
  - Loud / high-energy / nightclub-adjacent — the restrained motion + quiet type scale fight any energy register.
  - Modernist / minimalist / Nordic — italic serif + warm photography + heritage stamp all fight minimalism.
  - Vegan / wellness / juice bar — the meat-and-pasta-and-wine imagery is load-bearing and non-negotiable.
  - Michelin tasting / chef-counter-only — gusto is approachable-reservation; use `alinea-01` for ceremonial.
  - American diner / retro luncheonette — use `bramble-01`.
- **Restaurants that should be routed to a different template instead:**
  - Sushi / omakase / tasting → `qitchen-01`.
  - Warm upscale American with navy-amber palette → `1776-redesign-01`.
  - Retro bar / cocktail-forward / daytime-bright → `bramble-01`.
  - Pan-Asian casual with accent color → `bamzi-01`.
  - Michelin / fine-dining ceremonial → `alinea-01`.
  - Fast-casual / takeout pizza / delivery-primary → (future: pepper-class template).
  - Brunch / cafe / bakery → (future: bright-daytime template).
  - Cocktail-led moody bar → (future: speakeasy template).
- **Compatibility with existing catalog:** gusto is *complementary* to 1776 (both warm-upscale-reservation, but different palettes and ethnic registers). A router distinguishing the two should ask: "Is this restaurant heritage-European-family-named with italic-serif energy, or warm-American-confident with navy-amber energy?" gusto = former, 1776 = latter. Edge case: warm-Italian-American places (Carbone-adjacent) can go either way — gusto if the heritage story is real, 1776 if it's American-Italian-confident without deep heritage.
