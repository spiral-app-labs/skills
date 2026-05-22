# Varro Template

- **URL:** https://varro.framer.website
- **Type:** Framer template
- **Author / studio:** TBD
- **License notes:** Framer marketplace template
- **Why we picked this:** Thirteenth template. Fills the **serious Italian fine-dining / destination-Italian / heritage-institution Italian** register. Distinct from gusto-01 (mid-tier date-night trattoria with testimonial-hero) — varro is the **full upscale-Italian workhorse** with chef gallery, multi-section menu (Meats/Pasta/Pizza/Desserts/Sides), inline reservation form, FAQ, and "FROM ITALY'S HEARTLAND" editorial framing. Heritage-serious vs gusto's atmospheric-romantic.
- **First impression vibe:** Serious, heritage, craft-validated, chef-driven, multi-generational-Italian. Dark-dominant with cream+tan accents, Belleza display serif carrying editorial-restaurant authority, 4-chef gallery, multi-section menu form, inline booking. Reads like a family-owned institution documenting its craft.
- **Likely archetype match:** Primary **serious upscale Italian / multi-generational institution / chef-driven Italian / heritage osteria**. Also fits **destination pasta-and-pizza places with chef credibility**, **Italian steakhouses**, **Italian resorts/hotels**, **multi-location Italian groups**. Does NOT fit date-night trattoria (use gusto — less serious), fast-casual pizza (use pepper), any non-Italian cuisine.

## Restaurant context (from site)
- **Name:** Varro
- **Positioning:** "FROM ITALY'S HEARTLAND" — regional/territorial credibility, heritage-authentic
- **Identity:** Chef-driven, multi-discipline (pasta + pizza + meats + fish), "THE TABLE IS THE CENTER OF LIFE" manifesto
- **Menu delivery:** Dedicated /menu capture + full on-page menu sections on home (Meats & Fish / Pizza / Pasta & Risotti / Desserts / Side Dishes)
- **Order flow:** Reservation-primary ("RESERVE YOUR TABLE" inline form on home); no "Order Now" visible
- **Reservation:** Inline form on home with fields for reservation (likely date/time/party-size)
- **Chefs:** 4-up chef gallery with photos + names + titles — explicit chef-branding
- **Hours / location:** TBD

## Sub-pages confirmed
- `/` (home — hero + about + chef gallery + menu + reservation + FAQ + closing)
- `/menu` (captured)
- `/about` (captured)
- `/contact` (captured)

## Unique structural patterns observed
- **"FROM ITALY'S HEARTLAND" 3-photo hero** — 3 horizontally-arranged pasta+pizza food photos beneath massive Belleza display headline. Abundance-forward, not minimalist. **Signature move.**
- **"ABOUT OUR RESTAURANT" editorial paragraph** — centered long-form prose block. Serious editorial rhythm.
- **4-up chef gallery** — 4 chef photos + names + titles + short bios. **First catalog template with explicit chef-branding.** Promotion candidate for any chef-driven concept.
- **"THE TABLE IS THE CENTER OF LIFE" centered manifesto quote** — large-type editorial pull-quote between chef gallery and menu. Branding statement.
- **"OUR MENU · OUR MENU · OUR MENU" horizontal marquee** — repeated phrase marquee introducing the menu section. Similar to 1776/bramble marquees.
- **Multi-section tabbed menu** — MEATS & FISH / PIZZA / PASTA & RISOTTI / DESSERTS / SIDE DISHES — tabs or segmented-control-style nav with dish rows per section (name + desc + price). Dense editorial-menu treatment, dark canvas with tan accent pricing.
- **Inline reservation form on home** — "RESERVE YOUR TABLE" with form fields (date, time, party) directly on home page. No route to /reserve. **First catalog template with inline home-page reservation.**
- **"CONTACT" inline block** — address/phone/email laid out below reservation form, similar inline-on-home treatment.
- **"FREQUENTLY ASKED QUESTIONS" accordion** — FAQ block similar to plate but on dark canvas.
- **"WE LOOK FORWARD TO YOUR VISIT" closing band** — brand-sign-off moment on dark.
- **Belleza display + sans body** — Belleza is a distinctive elongated-capital serif with slight flare. Adds a new display serif to the catalog roster (distinct from Cormorant Garamond, EB Garamond, Forum, Crimson Pro, Prata, Sorts Mill Goudy).

## Palette (from `meta/home.json`)
- `rgb(28, 34, 37)` — **dark slate canvas** (primary dark), slightly blue-undertoned
- `rgb(240, 237, 224)` — **warm cream** (text on dark, section highlights)
- `rgb(167, 128, 100)` — **warm tan/sand accent** — CTAs, prices, section labels. Heritage-luxury feel.
- `rgb(0, 0, 0)` — pure black (sparingly)
- Two-mode palette with dark dominance — inverse of a cream-dominant template. Similar mode-switching to gusto but more serious/weighty.

## Fonts (from `meta/home.json`)
- **Belleza** — display serif, elongated capitals with subtle flare (Google Fonts). Single weight (400).
- Body sans inferred (need to verify specific family in audit — possibly default/system sans or another Google font I didn't catch in home.json).

## What this unlocks for the catalog
1. **First chef-gallery pattern** — `ChefGrid` (4-up chef photos + names + titles + bios). Huge promotion candidate for any chef-driven concept (Italian, French, omakase, fine-dining American).
2. **First inline home-page reservation form** — `InlineReservationForm` pattern. Conversion floor moves MAX-up (no page transition needed). Reusable for any reservation-primary template where conversion matters more than ceremony.
3. **First "OUR MENU · OUR MENU" repeated-phrase marquee** — joins 1776/bramble marquee family. Pattern now appearing in 3+ templates — promotion-ready.
4. **First manifesto pull-quote** — "THE TABLE IS THE CENTER OF LIFE" pattern. `ManifestoQuote` for venues wanting philosophical brand moments.
5. **First sand/tan accent** — `rgb(167,128,100)` heritage-luxury warmth. Extends accent-color vocabulary.
6. **First Belleza display** — distinctive elongated-cap serif.
7. **Second FAQ accordion** — after plate. FAQ pattern now ready for promotion (2 templates).
8. **First abundance-photography hero** — 3-photo food spread as hero. Counterpart to single-photo heroes.

## Risks / things to verify in audit
- Confirm Belleza is the display font everywhere or only hero (body sans family needs identification).
- Verify whether the inline reservation form is a real form (submits somewhere) or a placeholder mock.
- Check whether the chef gallery is 4 or a different count (visual scan suggested 4).
- Verify whether home-page menu section is tabs (interactive) or stacked sections (scroll-only).
- Confirm the dark slate `rgb(28,34,37)` — is it pure dark or slightly blue-shifted (the 28,34,37 suggests slight cool cast).
- Check whether the "OUR MENU" marquee animates horizontally or is static.
- Verify motion behavior — chef gallery has hover states? menu tabs animate?
- Confirm whether the /menu route is a separate page or a smoother version of the home menu block.
- Distinction from gusto — document in §9 (restaurant fit) explicitly: varro = full fine-dining + multi-chef + multi-menu-section; gusto = trattoria + testimonial-hero + single-story.
