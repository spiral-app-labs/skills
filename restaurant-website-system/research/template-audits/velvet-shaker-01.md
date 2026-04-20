# Audit: Velvet Shaker

> **Auditor convention:** every visual claim is tagged `[observed]` (confirmed via downscaled full-page screenshots, scroll frames, motion frames, or meta JSON) or `[inferred]` (educated guess from archetype + template register). Raw screenshots were NOT viewed directly — 2880×10000+ px crashes the session. All visual claims were made against `/tmp/velvet-shaker-view/desktop-*.png` (1500px downscales) plus selective scroll-frame and motion-frame downscales.

**Slug:** `velvet-shaker-01`
**Source URL:** https://velvet-shaker.framer.website
**Source type:** Framer template (official Framer marketplace)
**Auditor:** Claude (Opus 4.7) — 2026-04-19
**Status:** **locked** — all 12 sections filled against downscaled home/menu/about/contact captures + home scroll frames (25/50/75) + motion frame t=0.3s + meta JSON for home/menu/about/contact
**Linked recreation:** `templates/velvet-shaker-01/` (not yet recreated)

---

## 1. Summary

- **What this template is trying to be:** A dark-modernist, nocturnal cocktail bar / speakeasy site that carries itself like a gallery catalogue — restrained, editorial, mid-century-meets-minimalist. Typography-led rather than photo-led: long text blocks, wordmark echoes, and a near-monochrome palette do the emotional work; cocktail photography and bar interiors punctuate rather than dominate.
- **What kind of restaurant it fits:** Modern cocktail bar, speakeasy, hotel bar, cocktail-led lounge, listening bar, natural-wine bar, tasting room, chef's-counter cocktail-forward concepts. Hong Kong is the template's stated city but the design is cosmopolitan — reads equally well for Singapore, NYC LES, London Soho, Melbourne CBD. NOT a fit for playful/retro bars (send to bramble) or any food-led register.
- **What it does especially well (3 things, specific):**
  1. **Two-token palette discipline.** `rgb(15, 16, 10)` canvas + `rgb(230, 224, 198)` cream. No accent color, no third neutral, no brand color of any kind. Warmth comes entirely from the cocktail photography. This is more disciplined than qitchen (which still has surface-elevated greys). `[observed via meta/home.json bodyBg + all text color]`
  2. **Single-typeface system (Inter Tight only).** First template in the catalog with no serif at all. All hierarchy is carried by weight (500) and size (16→26→42→102px). The absence of a display-serif/body-sans pairing IS the statement — modernist minimalism as a register. `[observed via meta h1/h2/h3/p all Inter Tight 500]`
  3. **Wordmark-as-bookend pattern.** "Velvet Shaker" appears as a small top-left wordmark in the nav + a massive footer echo on every page, framing the content between two instances of the same name at different scales. This is a typography-led spatial move that most bar sites don't attempt. `[observed on home + about + menu + contact captures]`
- **What is weak / generic / overdesigned:**
  - Home hero is underwhelming at first load — no photo-lead, no big wordmark at the top, just a 26px h1 ("Cocktail bar located in…") in the upper-left. The "wordmark IS the hero" claim in source.md overstates it: the massive type moment is actually the /about h1 (102px "Longest running cocktail bar in — Hong Kong") and the footer echo, NOT the home top. Real hero strength depends on photography below the fold carrying the load. `[observed — home h1 is 26px per meta; 102px h1 only appears on /menu, /about, /contact]`
  - Copy on home is editorial-paragraph-heavy ("Nestled in the heart of Hong Kong…") with limited scannability. Works for a cocktail bar where mood > info; fails for anyone who wants to know "what cocktails / what price / when" in 5 seconds.
  - "Others" dropdown in top nav is a generic marketplace-template tell (points to internal template pages — "all pages / style guide / buy template / our website"). Must be removed in fork. `[observed in contact capture footer]`
  - Menu-page "Snacks" section with truffle fries / chicken wings reads as filler food — a real fork for a cocktail-led bar should either commit to a proper bar-food menu or remove the section entirely.

---

## 2. Positioning + vibe

- **Aesthetic register:** Dark modernist / minimalist / nocturnal / restrained-editorial. A gallery-catalog feel applied to a cocktail bar. NOT speakeasy-kitsch (no exposed-brick, no art-deco flourishes, no prohibition signage) — this is clean-modernist dark.
- **Emotional tone:** Quiet, adult, after-hours. Confident without being loud. Closer to an architecture studio's monograph than a typical bar site.
- **Perceived price point:** $$$. Cocktails appear priced $32–$40 HKD-equivalent in local currency (meta shows $32–$40 visible on menu page thumbnails). The *design* signals $$$; the exact price point is swappable. `[observed via menu capture]`
- **Audience signal:** 28–45, urban, design-literate, deliberate drinkers (not impulse). Date nights, industry after-hours, solo drinkers who want to read a menu carefully. Not a crowd bar, not a group celebration venue.

---

## 3. Structure

- **Homepage section order (top to bottom):** `[observed via desktop-home capture + scroll frames]`
  1. **Top bar** — "Velvet Shaker" wordmark top-left (~26px Inter Tight 500) + horizontal text nav top-right (home / about / contact / menu / faq / others ▾). No pill, no button, no logo mark — just type.
  2. **Hero intro block** — small "Cocktail bar located in" (h1, 26px) + an "X" dingbat + short tagline text upper-left area. Minimal — takes maybe 15% of viewport height. No background photo, no video loop behind it. Hero-below-the-fold carries most of the load.
  3. **Cocktail photo row** — full-width row of 3–4 close-up cocktail photographs (warm amber drinks in glassware, shot tight). Acts as the true visual hero.
  4. **Editorial paragraph block** — two-column-ish text layout with a long centered/justified paragraph ("Nestled in the heart of Hong Kong, Velvet Shaker is more than just a bar—it's a sensory journey. Inspired by the city's vibrant energy and global influences, this upscale cocktail haven combines sleek modern design with a cozy, intimate atmosphere.") + small "see gallery" link. `[observed via meta h2 text]`
  5. **Asymmetric mini-gallery** — one offset cocktail photo (left, portrait) + one bar-interior shot (right, wider) — loose gallery-wall arrangement, not a perfect grid.
  6. **Cocktail list (text-led, NOT cards)** — two-column rows with cocktail name left (26px Inter Tight) + ingredient description right (16px): Peach Blossom, Lavender Mist, Mint Cloud, Blue Lagoon, Lemon Breeze, Rose Garden, Blue Lagoon, Lemon Velvet (names repeat from capture). **No prices on home list.** `[observed via home-scroll-050 capture]`
  7. **"03// OCCASIONS" eyebrow + `Romantic` label** — a numbered-section-opener pattern (thin cream rule above a label in display size). Suggests a programmatic "occasions" strip (Romantic / Business / Parties / etc.) though only "Romantic" is fully visible in the captured frame.
  8. **Long-form centered prose block** — "Velvet Shaker began its journey in 2022…" paragraph, centered, with 3 small cocktail thumbnails offset to the side. Editorial-magazine rhythm.
  9. **"Check what's happening" events grid** — 3–4 column grid of events photos (bottle-on-table, silhouetted figure in amber light, cocktail pour, garnished drink). Label is lowercase body-size, NOT a large section header. `[observed via home-scroll-075 capture]`
  10. **"Visit us" footer block** — 3-column: Visit us (address + hours) / Contact (email, phone) / Socials (Instagram, X/Chattr, Facebook, TikTok). Small type throughout. `[observed via contact capture footer]`
  11. **Sub-footer** — TEMPLATES column (Framer-marketplace links: all pages / style guide / buy template / our website) — **REMOVE IN FORK**. `[observed]`
  12. **Massive wordmark echo** — "Velvet Shaker" in very large cream type spanning most of the width at the page bottom. Acts as the closing signature and bookends the small wordmark at the top of the page.

- **Information architecture (top-level pages):** Home / About / Contact / Menu / FAQ / Others(dropdown). FAQ is likely merged into Contact (contact capture shows FAQ accordion: "What are Velvet Shaker's opening hours?" "Where is Velvet Shaker located?" "Do you take reservations?" "What kind of drinks does Velvet Shaker serve?" "Do you have non-alcoholic drinks?" "Does Velvet Shaker host private events?"). `[observed]`
- **Navigation style:** Simple top-bar text nav — wordmark top-left + text-link row top-right. **Not sticky** — scrolls out of view (confirmed via home-scroll-025/050/075 frames: top nav is absent mid-scroll). This is unusual and means no persistent book-now CTA. `[observed]`
- **Reservation/CTA placement:** No persistent reservation CTA. Booking lives on `/contact` via "Fill in the form" (Name / Email / Phone / Website / How did you find us / Interested in: [Booking a table / Organizing an event / Press] / Message / Submit). There is also a "get directions" link in the Visit-us footer block. Very un-CTA-forward by modern standards — the template trusts users to navigate to /contact. `[observed via contact capture]`
- **How menu is handled:** Dedicated `/menu` page with massive 102px "Cocktails" display header. Sections: Cocktails (with small circular/thumbnail photo strip at top + listed items with prices: Peach Blossom $32, Lavender Mist $28, Mint Cloud $30, Rose Garden $35, Blue Lagoon $40, Lemon Velvet $30, Sunset Spritz $35, Crimson Kiss $33) / Wines (Chardonnay Bliss $70, Golden Sauvignon Blanc $70, Royal Harmony, Sparkling Brut $55, Classic Merlot, Reverse Malbec $40) / Snacks (Truffle Fries, Spicy Edamame $15, Cheese Platter, Shrimp Tempura $34, Mini Sliders, Stuffed Olives, Charcuterie Board, Grace Anatomy $27) + "Can't find your drink?" CTA block + "see menu" link back. **Prices ARE shown on menu page** (contra the home list which omits them). `[observed via menu capture]`
- **How events / private dining / story / gallery / contact are handled:**
  - Events: "Check what's happening" 3-up photo grid on home (possibly linking to individual event detail pages, unconfirmed). `[observed-partial]`
  - Private dining: only referenced in the FAQ accordion ("Does Velvet Shaker host private events?"). No dedicated page. `[observed]`
  - Story: `/about` — massive 102px "Longest running cocktail bar in — Hong Kong" h1 (with an em-dash as connector, notable typographic device) + stats row (1972, 99.9%, 20+, 1 — likely founding year / satisfaction / staff / location count) + long editorial paragraph + team-of-mixologists photo grid (6 portraits with names/roles: Jane, Mark, Sarah, [etc.]) + repeat "Check what's happening" block. **The about page declares 1972 as a stat but source.md says 2022 was the founding year — there's a mismatch between home-copy ("began its journey in 2022") and about-stats (1972). Forks must reconcile.** `[observed]`
  - Gallery: no dedicated gallery page; "see gallery" small link on home likely anchors to the inline asymmetric mini-gallery (unconfirmed — link destination not tested).
  - Contact: `/contact` — 102px "Join us in Hong Kong" h1 + "Book now / Via email / On WhatsApp" minimal block left + full "Fill in the form" form right + 4-photo bar-interior strip below + FAQ accordion below that. `[observed]`

---

## 4. Visual system

> All claims verified against downscaled captures + meta JSON. Inter Tight declarations are `[observed]` from meta. Color values are `[observed]` from meta bodyBg + h1 color.

- **Typography:** **Single-family system (Inter Tight only) — the first in the catalog with no serif.** `[observed via all 4 meta JSONs — every h1/h2/h3/p declares `"Inter Tight", "Inter Tight Placeholder", sans-serif` with fontWeight `500`]`
  - **Display (h1) — dual scale:**
    - **Home h1: 26px / 500 / 31.2px line-height** — small, almost body-sized. The home intentionally punts the display moment.
    - **Menu/About/Contact h1: 102px / 500 / 122.4px line-height** — massive. THIS is the display scale. The massive wordmark effect lives on internal pages, NOT home.
  - **h2: 42px / 500 / 50.4px** (home editorial paragraph opener + menu "Can't find your drink?") OR **102px / 500 / 122.4px** (about — where "bar in" continues the h1 as a second display line).
  - **h3: 26px / 500 / 31.2px** (menu cocktail names "Peach Blossom", contact FAQ questions) OR **35px / 500 / 42px** (home "Romantic" / 03//OCCASIONS label) OR **22px / 500 / 26.4px** (about mixologist role labels "Wine tasting").
  - **Body (p): 16px / 500 / 19.2px.** Notice: body is 500 weight, NOT 400 — the whole site uses a single weight. This is a deliberate modernist statement — no weight hierarchy, only size hierarchy.
  - **Nav / UI: 12px / 400 sans-serif** per meta `navLink` — though visually these render as Inter Tight at roughly body size with lowercase all-text (home / about / contact / menu / faq / others). Meta's "sans-serif" + 12px may be a computed fallback for a lowercased-Inter-Tight 14–16px nav. `[inferred — meta shows 12px sans-serif fallback for nav; visual shows lowercase Inter Tight at ~14–16px]`
  - **Notable type behavior:**
    - **All lowercase nav** — "home / about / contact / menu / faq / others" — unusual, signals modernist informality.
    - **Em-dash as typographic device** — "Longest running cocktail bar in — Hong Kong" (on /about). The em-dash functions as a visual break between the general statement and the city, forcing a line break and adding editorial rhythm.
    - **"03// OCCASIONS"** — slash-dash numbering is an editorial eyebrow pattern (signals a numbered series).
    - **No italics, no all-caps** (except maybe small labels) — the type is set in Inter Tight 500 lowercase and sentence-case throughout.
    - **Letter-spacing: normal** everywhere — no tracking tricks. `[observed via meta]`
- **Color strategy:** **Pure two-token** — canvas + ink, nothing else.
  - **Canvas:** `rgb(15, 16, 10)` = `#0F100A` — warm near-black. G channel one tick higher than R/B gives the slight warmth (similar move to qitchen's `#0A0B0A` but darker-warmer with a slightly greener undertone). `[observed via meta bodyBg]`
  - **Ink:** `rgb(230, 224, 198)` = `#E6E0C6` — warm cream / candlelit paper. Slightly more yellow-green than qitchen's `#EFE7D2`. All text uses this single ink color. `[observed via meta h1/h2/h3/p color]`
  - **Contact form submit button:** `rgb(230, 224, 198)` background + `rgb(0, 0, 0)` text — inverted ink-on-ink treatment, the only chrome in the whole site. `[observed via meta/contact.json buttonAny]`
  - **No saturated accent, no third neutral, no brand color.** Surface elevation is absent — the template does not use dark-elevated cards, no subtle lighter-grey containers, no borders. What reads as a divider is a 1px line in ink color at low opacity. `[observed]`
  - **The warmth budget is spent entirely on the photography** — amber cocktails, warm interior lighting, candlelit tones. The site's "color palette" is really the photo-set.
- **Spacing rhythm:** Generous, editorial-loose. Long vertical whitespace between sections. The body text columns are narrow (~40–50ch max) and floated into asymmetric offsets. The home uses a two-column text-on-both-sides layout where columns are deliberately offset vertically, not aligned — a magazine-spread move. `[observed]`
- **Grid / layout behavior:** Mostly 12-col-behaving with **deliberate asymmetric offsets**. Photos, cocktail listings, and text blocks sit at different horizontal origins — nothing is centered on a single axis. The asymmetric mini-gallery (offset cocktail + offset interior shot) makes this explicit. Mobile captures show clean single-column stacking with the asymmetry flattened. `[observed via mobile-home capture existence; not deep-read]`
- **Image treatment:** **Dark-low-key warm-graded cocktail + interior photography.** Cocktails shot tight with dramatic rim-light on glassware (amber / green / blue drinks against near-black backgrounds). Bar interiors shot with warm tungsten lighting (chandelier glow, backlit bottle shelves, silhouetted patrons). Event photos lean even darker, almost chiaroscuro. **Photography grading matches the `#0F100A + #E6E0C6` palette** — no oversaturated colors, everything sits in amber/umber/deep-green territory. This cohesion is a significant part of why the two-token palette works. `[observed]`
- **Animation / motion:** **Minimal.** `[observed via motion-frame t=0.3s capture + meta animations]`
  - Meta declares `animations: []` (no CSS keyframes) and `transitions: ["all"]` — same pattern as qitchen (motion delivered via Framer's JS runtime, not CSS keyframes).
  - **Page-load reveal:** at t=0.3s only the "Velvet Shaker" top-left wordmark + top-right nav are visible — the rest of the hero fades in after. Similar to qitchen's stagger but on a shorter timeline (nav first, content second). `[observed via motion-frame 79679a4d-t0.3s]`
  - **Transforms present in meta:** `matrix(1, 0, 0, 1, -168, 30)`, `matrix(1, 0, 0, 1, 0, -381.328)`, `matrix(1.25867, 0, 0, 1.25867, 0, 0)` — suggests subtle image-scale (1.26x) and element-translate on scroll or load. Possibly a subtle Ken-Burns on the hero cocktail photos or a parallax-lite on the bar-interior shots. `[inferred from transform matrices in meta]`
  - **Hover:** `color 0.4s cubic-bezier(0.44, 0, 0.56, 1)` declared on menu + contact pages — nav and button color shifts are 400ms eased. `[observed]`
  - **Motion intensity rating: 1–2** (subtle reveals + possible subtle image-scale, nothing flashy). No video loops, no cursor effects, no scroll-driven scenes detected.
- **Texture / depth / borders / cards / overlays:** **Essentially flat.** No card chrome on cocktail listings, no borders on images, no shadows, no rounded corners (or rounded at radius 0). The only chrome: form input fields on /contact have a subtle dark-elevated treatment with thin 1px border in ink-low-opacity. The only rounded corners: form inputs at probably 2–4px. The only filled shape: the submit button. `[observed via contact capture]`

---

## 5. Conversion / UX analysis

- **Time-to-understand-the-restaurant:** ~5 seconds. The small "Cocktail bar located in" h1 + top-of-fold amber cocktail photos together communicate "dark modern cocktail bar" quickly. The *city* takes a moment longer (buried in the paragraph below). The *price point* is not communicated until menu page. `[observed]`
- **Reservation path strength:** **4/10**. No persistent book-now CTA. No hero CTA. No OpenTable/Resy/Tock embed visible. Reservation requires: scroll to footer OR navigate to /contact → fill 8-field form. That's a lot of friction for a bar that probably gets reservation traffic. **Forks serving reservation-heavy briefs should add a persistent CTA**. `[observed]`
- **Menu access clarity:** **8/10**. "menu" is in the top nav; dedicated page is clean and fast-reading; prices surface there. Slightly docked because the top nav doesn't stick — you have to scroll back up to access it mid-read. `[observed]`
- **Location / hours / trust signals:** Hours + address live in the "Visit us" footer block ("Velvet Shaker, 2F, 21 Wyndham Street, Lan Kwai Fong, Central, Hong Kong. Opening hours: Mon–Fri 18:00–02:00. Sat–Sun 16:00–02:00"). "get directions" link. Email + WhatsApp in Contact column. **No press quotes, no reviews, no awards badges** — zero credibility signals beyond the design itself. For an established bar with press, forks should add a press strip. `[observed via contact capture footer]`
- **Mobile conversion path quality:** **6/10** `[inferred from mobile-home.png existence; not deep-read]`. Top-right 6-link text nav will compress awkwardly on mobile — likely collapses to a hamburger. The massive 102px display on menu/about/contact will scale down legibly but eat viewport. The form on /contact has enough fields that mobile fill will be painful. Reservation friction is worse on mobile than desktop.

---

## 6. Reusable ideas

- **Hero pattern — `WordmarkBookendHero`:** the signature move. Small wordmark top-left + massive wordmark at page bottom, framing the content. More reusable than "wordmark IS hero" (which the template doesn't actually do on the home). Works for any brand that wants typography-led bookending without sacrificing photo-led content in between. Named `WordmarkFooterEcho` if the top-wordmark is just the nav logo.
- **Nav pattern — `MinimalTextNav`:** lowercase text-only nav (home / about / contact / menu / faq / others) in upper-right, **not sticky**. Works for bars/restaurants where deliberate browsing beats impulse scrolling. Do NOT use for reservation-heavy briefs.
- **CTA pattern — `InvertedFormSubmit`:** cream-on-black button for the contact form, the only filled chrome in the whole site. The rarity of the button IS the emphasis. Reusable for any minimalist brief that wants a single terminal CTA moment.
- **Menu-preview pattern — `NoPriceNamedList`:** home cocktail list shows names + ingredients only, no prices. Full prices reserved for dedicated menu page. This two-tier reveal (experiential on home, commercial on menu) is reusable for any experience-driven menu (wine, cocktails, tasting menus, omakase, chef's choice). `[observed]`
- **Full-menu pattern — `NamedItemGrid`:** menu page cocktails use thin-text layout with name + description + price (right-aligned), category-grouped (Cocktails / Wines / Snacks) with massive 102px category headers. Reusable across wine bars, natural-wine lists, any bev-forward concept.
- **Gallery pattern — `AsymmetricMiniGallery`:** two offset photos (portrait cocktail + landscape interior) sitting at different horizontal origins, no grid lines, no captions. Gallery-wall feel. Reusable as an inline "see more" block within any dark-editorial home.
- **Events pattern — `EventsPreviewGrid`:** 3–4-up photo grid under a lowercase "Check what's happening" label. No dates, no titles on the tiles — photos carry the intrigue. Reusable for any venue with ongoing programming (natural-wine tastings, guest bartenders, DJ nights, supper clubs).
- **Story / atmosphere pattern — `EditorialParagraphWithSideThumbnails`:** long centered paragraph + 2–3 small cocktail thumbnails offset to the side. Reusable for any brand-story moment that wants to feel like a magazine opener, not a marketing section.
- **Stats-row pattern — `FourNumberStats`:** `/about` shows 4 stats (1972 / 99.9% / 20+ / 1) in massive Inter Tight display. Reusable for any establishment with a founding year + some metric. Watch for fake-stats-smell if numbers aren't real.
- **FAQ pattern — `LowChromeFaqAccordion`:** 5–6 question rows on `/contact`, just rules and rotating chevrons, no card chrome. Reusable for any minimalist brief.
- **Footer pattern — `ThreeColVisitContactSocials`:** "Visit us / Contact / Socials" three-column footer block with tiny type. Clean, information-dense, no fluff. Reusable as the default bar/restaurant footer for minimalist templates.
- **Section-sequencing logic:** hero intro → cocktail photo row → editorial paragraph → asymmetric gallery → cocktail list → occasions strip → long brand paragraph → events grid → footer → wordmark echo. The sequence prioritizes *vibe* (photos, paragraphs, gallery) over *utility* (reservation CTA, menu, hours). Inverted from conversion-optimized templates. Reusable only for vibe-first briefs.

---

## 7. Steal vs avoid

- **Absolutely steal:**
  - **Two-token palette discipline** — canvas + ink, nothing else. Useful as a dark-minimalist baseline for future templates.
  - **Single-typeface system with weight-locked hierarchy** (all 500, size-only hierarchy). This is a strong modernist move that works when the photography is doing color work.
  - **Wordmark-footer-echo** — large wordmark at page bottom, bookending the nav wordmark at top.
  - **No-price home menu + priced full menu** two-tier reveal.
  - **Asymmetric mini-gallery** as an inline section (not a separate page).
  - **Em-dash as display typography connector** ("bar in — Hong Kong") — editorial flourish.
- **Steal but tone down:**
  - The "Nestled in the heart…" paragraph register — it's on the edge of template purple. Keep the editorial rhythm, lose the "sensory journey" hype.
  - The 4-stat row (1972 / 99.9% / 20+ / 1) — only use when numbers are real and meaningful. Fake stats are instant-detect.
  - The 102px display on internal pages — scale with care on mobile (48–64px likely the right ceiling there).
- **Too template-y / overused — avoid:**
  - The generic 6-mixologist portrait grid on /about ("Meet the most skilled mixologists in town") — unless the bar actually has 6+ named mixologists, this reads as filler.
  - "Others ▾" marketplace-nav dropdown — always remove in fork.
  - "03// OCCASIONS" numbering pattern — clean and editorial, but becomes template-y if overused. Use once, not on every section.
- **Would hurt originality if copied literally:**
  - The cocktail names Peach Blossom / Lavender Mist / Mint Cloud / Blue Lagoon / Lemon Breeze / Rose Garden are template filler — real bars need real menu names.
  - The "Longest running cocktail bar in — Hong Kong" headline structure is strong but specific — forks need to invent their own equivalent ("oldest natural-wine bar in …", "only listening bar in …") rather than copy the construction.

---

## 8. Recreation strategy

- **Difficulty to recreate in code (1–10):** **3**. Structurally simple: one typeface, two colors, flat chrome, no CSS animations, no complex grid. The hard parts are (a) typographic rhythm across 102px display + 16px body (just size, no pairing to balance), (b) photography cohesion (getting dark-warm cocktail + interior shots that share grading), (c) the subtle Framer motion on load (fade + translate — easy in Framer Motion).
- **Components needed (template-specific, not shared):**
  - `WordmarkBookendLayout` — outer layout that places small wordmark top-left, massive wordmark at page bottom
  - `MinimalTextNav` — lowercase text-only nav, non-sticky
  - `HomeIntroBlock` — small h1 + tagline, no photo background
  - `CocktailPhotoRow` — 3–4 tight cocktail shots, full-width row
  - `EditorialParagraphBlock` — centered/justified paragraph with optional "see gallery" link
  - `AsymmetricMiniGallery` — 2 offset photos, no grid
  - `NoPriceNamedList` — name-left / description-right two-column cocktail listing
  - `NumberedEyebrow` — "03// OCCASIONS" eyebrow pattern
  - `BrandStoryParagraph` — long centered copy with floated side thumbnails
  - `EventsPreviewGrid` — 3–4 photo grid with small label
  - `ThreeColFooter` — Visit us / Contact / Socials
  - `WordmarkEcho` — full-width display wordmark at page bottom
  - `NamedItemGrid` — menu-page category-grouped priced list with 102px category headers
  - `LowChromeFaqAccordion` — borderless question rows
  - `FourNumberStats` — 4-column stat row (stats + labels)
  - `MixologistGrid` — 6-portrait team grid
  - `ContactFormPanel` — 8-field form + submit button
- **Tokens / variants needed:**
  - Theme: canvas `#0F100A` + ink `#E6E0C6`, single typeface Inter Tight 500, weight-locked, zero radius (or 2px for form inputs only), zero shadow, zero accent.
  - Type scale: 16 / 22 / 26 / 35 / 42 / 102 (all 500, all Inter Tight).
  - Motion: subtle fade-in on load (staggered 200ms), subtle image-scale (1 → 1.26) on select elements, 400ms color hover on links.
- **Verdict:** **Full template recreation.** This is the only modernist-cocktail-bar-dark entry in the catalog and the only serif-free entry. It's a structural/discipline statement as much as a visual one.

---

## 9. Restaurant fit

- **Best fit (top 2–3 archetypes):**
  1. **Modern cocktail bar / speakeasy (non-kitsch)** — primary. Dark, adult, design-literate cocktail destinations.
  2. **Natural wine bar / listening bar** — secondary. The modernist minimalism maps cleanly onto the natural-wine register.
  3. **Hotel bar / after-hours restaurant bar program** — tertiary. The restraint reads as "luxury hotel" when paired with the right photography.
- **Workable fit:** Cocktail-forward tasting room, chef's-counter cocktail pairing concept, omakase bar program. Would need minor copy adjustments.
- **Bad fit:**
  - Any playful/retro bar (send to bramble — light-retro bar register).
  - Brunch / cafe / bakery (wrong time-of-day entirely).
  - Family-casual, lively neighborhood spots.
  - Fine dining proper (the template is bar-first, not dinner-first — the menu architecture is drinks-led).
  - Any cuisine-forward concept where food is the hero.
- **Why:** The two-token palette + sans-only type + photography-as-color-budget all serve a single register: dark, adult, nocturnal, minimalist. Push it toward daytime or warmth or playfulness and the template fights back.

---

## 10. Final verdict

- **Recreate fully?** **Yes.**
- **Extract components only?** No — recreate as full template. The cohesion-critical discipline (two-token, sans-only, weight-locked) only reads when the whole system holds together.
- **Catalog rank (1–10) — how often will we reach for this?** **6.** Modern cocktail bars are a real recurring brief but narrower than warm-rustic Italian or lively-casual American. This template owns its register cleanly and fills a genuine gap (the only dark-modernist cocktail template + the only sans-only template), which is more valuable than raw frequency.
- **Why it matters:**
  1. **First serif-free template** — establishes that "no serif" is a legitimate design position in the catalog, not an oversight.
  2. **First two-token palette** — establishes the palette-discipline ceiling (canvas + ink, nothing else).
  3. **First weight-locked type system** — establishes that hierarchy can come from size alone.
  4. **First non-sticky-nav template** — establishes that not every site needs a persistent CTA (for vibe-first briefs).
  5. **Companion to qitchen on the dark-editorial axis** — qitchen is dark-editorial-ceremonial (Japanese fine dining), velvet-shaker is dark-editorial-modernist (cocktail bar). Together they triangulate two poles of dark-editorial.
  6. **Counterpoint to bramble** — bramble is light-retro-warm bar; velvet-shaker is dark-modernist-cool bar. Two legitimate bar registers, aesthetically opposite.

---

## 11. Component mapping (REQUIRED)

| Component | Scope | Variant axes | Notes |
|---|---|---|---|
| `WordmarkBookendLayout` | outer page layout: small wordmark top-left (in nav) + massive wordmark at page bottom | size: top (~26px) / bottom (full-width display, ~250–400px); position: echoed on every page | **Signature primitive.** Could graduate to shared if another template adopts footer-wordmark-echo. |
| `MinimalTextNav` | top-of-page text nav | links: 4–7; case: lowercase; sticky: false; mobile: hamburger fallback | Variant of the nav primitive family. Non-sticky is the distinctive choice. |
| `HomeIntroBlock` | small h1 + tagline + optional eyebrow | size: `small` (home, 26px h1) / `massive` (internal pages, 102px h1) | |
| `CocktailPhotoRow` | full-width 3–4-photo row of tight product shots | count: 3 / 4; aspect: portrait default; gap: tight | Reusable as `ProductPhotoRow` for any image-led menu preview. |
| `EditorialParagraphBlock` | centered long-form paragraph with optional side link | align: center / justified; link: "see gallery" / "see menu" / none | |
| `AsymmetricMiniGallery` | 2 photos at different horizontal origins | photos: 2; offset: left-right; aspect-mix: portrait + landscape | Strong shared candidate — ask: do any other templates want a 2-photo asymmetric inline? |
| `NoPriceNamedList` | homepage cocktail list, name-left + description-right, no prices | count: 5–8; price: shown / hidden | Variant axis: `priced` / `unpriced`. Unpriced is the home variant. |
| `NamedItemGrid` | menu-page category-grouped priced list | category-header-size: 102px; item-rows: text-only with right-aligned price; photo-strip: optional top | **Promotion candidate** — reusable across wine-bar / cocktail-bar / natural-wine / tasting-menu briefs. |
| `NumberedEyebrow` | "03// OCCASIONS" slash-dash section opener | number: configurable; label: uppercase; rule: above / below | |
| `BrandStoryParagraph` | long centered copy + 2–3 floated side thumbnails | thumbnails: 0–4; position: left / right offset | |
| `EventsPreviewGrid` | 3–4-up photo grid under small label | count: 3 / 4; label: lowercase "check what's happening" / configurable; tile-content: photo-only / photo + date | **Promotion candidate** — reusable for any venue with ongoing programming. |
| `FourNumberStats` | 4-col stat row on /about | count: 3 / 4; size: massive display; labels: above / below | Use only when numbers are real. |
| `MixologistGrid` | 6-portrait team grid on /about | count: 3 / 6; portraits: square / portrait-aspect; labels: name + role | |
| `ThreeColFooter` | Visit us / Contact / Socials | cols: 3; size: small; social-count: variable | **Promotion candidate** — canonical minimalist footer. |
| `WordmarkEcho` | full-width display wordmark at page bottom | size: full-width or oversized; on-every-page: yes | Paired with `WordmarkBookendLayout`. |
| `ContactFormPanel` | /contact 8-field form + submit | fields: configurable (name, email, phone, website, how-found, interest-radio, message); submit-style: inverted-ink | |
| `LowChromeFaqAccordion` | /contact Q&A rows | count: 3–10; chrome: none; divider: thin rule | **Promotion candidate** — reusable baseline FAQ. |

**Cross-template promotion candidates (flagged now, evaluated after 2nd cocktail/bar template):**
- `NamedItemGrid` — if pepper/gusto/latte have similar priced-menu structures, promote.
- `EventsPreviewGrid` — reusable broadly; any template with programming needs this.
- `ThreeColFooter` — almost certainly will recur.
- `LowChromeFaqAccordion` — reusable baseline; evaluate after next template with FAQ.
- `AsymmetricMiniGallery` — strong candidate; evaluate next template with inline gallery.

**Cross-template note vs existing 5 locked templates:**
- qitchen has `MinimalFooter` (single-line); velvet-shaker has `ThreeColFooter` (info-dense). Different footer philosophies, both valid.
- qitchen has `FloatingHeaderPill` (persistent, rounded); velvet-shaker has `MinimalTextNav` (flat, non-sticky). Document both as nav options.
- 1776 / alinea / bramble / bamzi use serif+sans pairings; velvet-shaker is the first sans-only. Type-system contrast is the discipline statement here.
- None of the 5 existing use two-token palettes — they all have at least three color tokens (canvas / ink / accent or surface-elevated). Velvet-shaker is the first two-token entry.

---

## 12. Personalization manifest (REQUIRED)

### 12.1 Token-swap (safe — never breaks cohesion)
- **Brand colors:** canvas hue can shift within dark-warm near-black territory (`#0F100A` → `#0A0B0A` → `#121209`). Ink hue can shift within warm-cream territory (`#E6E0C6` → `#EFE7D2` → `#EBE4C5`). **Do not introduce a third color.**
- **Logo:** replace "Velvet Shaker" wordmark with restaurant wordmark. Must render in Inter Tight (or an Inter Tight-class neo-grotesque). Do NOT introduce a serif logo — breaks the system.
- **Type families:** Inter Tight can swap within same neo-grotesque / tight-grotesque class (Inter, Inter Tight, Neue Haas Grotesk, ABC Diatype, Söhne). Do NOT swap to serif, geometric sans (Futura), rounded sans (Nunito), or script — each breaks the register.
- **Hero photo / video:** cocktail photos can swap — must preserve dark-warm grading (amber / umber / deep-green). Daylight or saturated photos break the palette.
- **Section background photos:** same grading recipe.

### 12.2 Content-swap (safe — schema-driven)
- **Restaurant name + tagline:** replace "Velvet Shaker" / "Cocktail bar located in Hong Kong".
- **Menu items + prices + descriptions:** keep category structure (Cocktails / Wines / Snacks). Can split further (e.g. Spirits-Forward / Low-ABV / Zero-Proof). Keep prices on menu page; keep them off home list.
- **Hours + location + contact:** footer Visit us / Contact / Socials columns.
- **Reservation link:** /contact form is native; forks can swap for OpenTable / Resy / Tock embed. **Strongly recommend adding a persistent "book" link to nav for reservation-heavy briefs.**
- **Press quotes:** none present — forks with real press can add a press strip (though template does not include one; consider pulling from another template's press pattern).
- **Story / about copy:** replace "Nestled in the heart of Hong Kong…" + "Velvet Shaker began its journey in 2022" + "Longest running cocktail bar in — Hong Kong". Reconcile the 2022-vs-1972 mismatch in your fork's copy.
- **Gallery photos:** swap.
- **Team portraits:** swap (or remove the MixologistGrid section entirely if team-forward isn't the brief).
- **FAQ:** swap all 6 questions to match the restaurant's real FAQ.

### 12.3 Structural-swap (Phase 2 only — requires care)
- **Safe additions:**
  - Persistent "book" CTA in the top nav (recommended for reservation-heavy briefs — lightly changes the non-sticky-nav principle but materially improves conversion).
  - A press strip under the editorial paragraph block (for bars with real press).
  - A dedicated `/private-events` page for venues with a private-dining business.
- **Removable without losing identity:**
  - `MixologistGrid` on /about (if the bar isn't team-forward).
  - `FourNumberStats` on /about (if stats aren't real or meaningful).
  - `EventsPreviewGrid` on home + /about (if the bar doesn't run programming).
  - The "03// OCCASIONS — Romantic" strip on home (if the bar doesn't segment by occasion).
- **Sections from other templates that could be added without clashing:**
  - qitchen's `CredibilityBadgeRow` — would fit the dark-minimalist register if the bar has real awards (Michelin Bar Guide, World's 50 Best Bars, etc.).
  - A slow-reveal video block from a moodier template — could replace the cocktail-photo-row on home for bars with strong atmosphere video.

### 12.4 Locked (do not touch — these carry the cohesion)
- **Two-token palette.** Adding any third color — even a restrained accent — destroys the discipline statement. Warmth comes from photography only.
- **Single-typeface (Inter Tight or class-equivalent).** Introducing a serif for headlines, or even a contrasting sans for body, breaks the modernist discipline. The template's identity is "no pairing."
- **Weight-locked hierarchy (all 500).** Mixing 400 and 700 for contrast breaks the rhythm. The system works because every line is the same weight — size alone carries hierarchy.
- **Flat chrome.** No card backgrounds, no borders, no shadows, no rounded corners beyond the form-input minimum. Adding chrome breaks the gallery-catalog feel.
- **Dark canvas with warm-cream ink.** Light-mode variant is a different template, not a personalization.
- **Wordmark-bookend pattern.** Small wordmark top-left + massive wordmark at page bottom. Removing either side collapses the signature.
- **Photography grading.** All photos must sit in the dark-warm-amber palette. Bright daylight or saturated color photos destroy the palette.
- **Editorial-loose spacing.** Tightening section padding to fit more content breaks the breathing room.
- **Lowercase nav labels + sentence-case body.** Introducing UPPERCASE anywhere (except the 03//OCCASIONS eyebrow) breaks the quiet-modernist tone.
- **Massive 102px display on internal pages.** Shrinking it breaks the hero moment on /menu, /about, /contact.

### 12.5 Personalization risk notes
- **What this template cannot be made to feel like, even with heavy personalization:** warm, cozy, family-friendly, playful, bright, retro, vintage, handmade, rustic, beachy, daytime-anything, brunch-y, kid-friendly, celebratory, loud, energetic, fast-food, cheap. The restraint + darkness + modernism are the message. Push against any of those and the template breaks rather than bends.
- **Restaurants that should be routed to a different template instead:**
  - Light / retro / playful bars → bramble.
  - Japanese fine dining / omakase → qitchen (dark-editorial-ceremonial beats dark-editorial-modernist for Japanese fine-dining).
  - Warm-rustic Italian → (waiting on future warm-rustic template).
  - Brunch / cafe / bakery → latte (once locked) or gusto.
  - Family-casual American → pepper (once locked).
  - Wordmark-hero without serif-free discipline → could fit alinea if alinea has a serif pairing the brief wants.
- **Reservation-heavy bars:** velvet-shaker's non-sticky-nav is a real conversion risk. If the brief's primary goal is reservation volume (not vibe), either modify the nav-sticky behavior in Phase 2 OR route to a template with persistent CTA.
