# Pitch — MAAX Asian BBQ & Hot Pots

**Recipient:** MAAX ownership / management (TBC)
**Restaurant:** MAAX Asian BBQ & Hot Pots · 222 E Algonquin Rd, Arlington Heights, IL 60005 · (847) 621-2018 · ~4 mi from Woodfield Mall
**From:** Spiral / Ethan Talreja · est58@cornell.edu
**Date:** 2026-05-03
**Live preview:** http://localhost:3130 (dev) · Vercel deploy URL TBD before send
**Backing audit:** `sites/maax-asian-bbq/audit.md`

---

## The opening line (use one)

**For DM / cold email subject:**
> *"Your 'Prices' page is a 404"*

**For Loom intro (10 seconds):**
> *"Hi — I pulled up your site and clicked the 'Prices' button in the nav. It returns a 404. For an AYCE concept, pricing IS the question — so I rebuilt the homepage so the AYCE tiers, the lunch deal, and the 4.7★/621-Google-review proof are all on the home page itself. No more dead nav."*

---

## The three outcomes we're selling

1. **More reservations** — surface AYCE pricing inline (no broken /prices page) + put the OpenTable Reserve button above the fold + answer "how does AYCE work?" with a 4-step explainer so first-timers convert instead of bouncing.
2. **Better first impression** — replace the broken nav + render-hole blocks with a clean dark-canvas hero, real food photography, and a four-stat proof strip surfacing your 4.7★ Google + 4.8★ OpenTable + #2 of 65 Arlington Heights BBQs.
3. **AYCE-pricing transparency** — your three tiers (Standard / Premium / Wagyu+Seafood) and the $20 lunch deal live on the homepage where guests look for them, not behind a 404.

We are NOT proposing a platform rip-out. OpenTable stays. We refresh the front-end on top of your existing reservations engine.

---

## What we changed (for the owner)

### 1. The /prices page is no longer a 404
Right now the *"Prices"* button in your nav returns a literal "ERROR: PAGE NOT FOUND / 404 / This page isn't available" page. For an AYCE concept where pricing is the conversion question, this is the single most expensive bug on the site. The new homepage has an inline **AYCEPricingCard** with three tiers — Standard ($32–35), Premium ($42–45), Wagyu+Seafood Top Tier ($58–65) — plus the Mon–Fri lunch from $20. *No more dead nav.*

### 2. AYCE explained in four steps for first-timers
Your reviews say *"first Asian BBQ and hot pot experience — amazing."* That signals first-timers, who need the format explained before they commit. The new homepage has a **HowItWorksFormat** strip — Pick a tier → Pick a broth → Grill at the table → Two hours, no rush — that demystifies AYCE for the guest who's never done it.

### 3. 4.7★ / 621 Google reviews + 4.8★ / 41 OpenTable + #2 of 65 Arlington Heights BBQs — on the homepage
None of your public reputation is on your current site. The new homepage has a four-stat **AggregateProofStrip** with animated count-ups: *4.7★ Google · 621 reviews* · *4.8★ OpenTable · 41 diners* · *#2 of 65 BBQs in Arlington Heights · Restaurantji* · *600+ verbatim public reviews*.

### 4. Render-hole blocks are gone
Your current desktop scroll has a solid red rectangle and a solid black block where images should be — broken asset embeds. The new site is built on Next.js with proper `<Image />` handling — no broken embeds, no render holes.

### 5. Mobile that finishes loading
Your current mobile homepage doesn't reach `networkidle` in 45 seconds — that's a Core Web Vitals failure. The new site is built on Next.js 14 + dynamic image sizing, and ships with a sticky bottom Reserve / Menu bar so mobile guests have the action above their thumb.

### 6. AI concierge — "Ask MAAX Asian BBQ & Hot Pots"
A bottom-right chat bubble. Guests can ask:
- *"What's on the menu tonight?"* → answers from your verified menu
- *"How much is AYCE?"* → answers from the live tier table
- *"Are you open right now?"* → checks the daily 11am–11pm schedule
- *"What broths do you have?"* → lists your hot-pot rotation

The concierge is grounded in your menu, your hours, your AYCE tiers, and your phone. It will not invent. For anything time-sensitive it routes to (847) 621-2018.

### 7. SEO + structured data
- `Restaurant` JSON-LD with hours, address, geo, aggregateRating
- Open Graph tags so the link previews well on Facebook / iMessage / Instagram DMs
- Tripadvisor listing claim recommendation (currently unclaimed — free trust signal)

---

## What stays the same (preserve-stack promise)

- **OpenTable reservations.** Same widget, same diner data.
- **Your phone, hours, address, email.** Verified from current site.
- **Your menu items + AYCE tier structure.** Pulled from public review consensus and the existing site copy.
- **Your existing logo + brand colors.** The bamzi-01 frame uses the same dark + orange register your photography already lives in.

---

## What we'd like from you (for the v2)

1. **Confirm AYCE pricing.** We seeded reasonable estimates ($32–35 / $42–45 / $58–65) — you tell us the actual numbers.
2. **Confirm founding year.** The new site has *"Arlington Heights — Woodfield Corridor"* as the eyebrow; if you want a "Since YYYY" callout, give us the year.
3. **Owner / chef name + heritage region.** Optional. If you want chef-as-brand, we'll surface it. If you want format-as-brand, we keep it as-is.
4. **Replace the placeholder Unsplash photos** with real MAAX shots (you have 815 photos on Google Maps already — pick 8–10 for the home).
5. **Claim your Tripadvisor listing** — it's currently unclaimed.

---

## Pricing (build + ongoing)

- **Build (one-time):** $X,XXX — design, content, AYCE pricing card, AI concierge, SEO schema, deploy.
- **Hosting + concierge AI (monthly):** $XX/mo — Vercel + Anthropic API.
- **Optional care plan (monthly):** $XX/mo — content updates, monthly review-pull, AYCE-tier updates as menu changes.

---

## What we're NOT going to do

- Rebuild your reservation system. OpenTable stays.
- Touch your menu items, AYCE tiers, or pricing without your sign-off.
- Send your guest data anywhere it isn't already.
- Change your phone number, address, or hours.

---

## Two screenshots that close the deal

**Before:** The literal "404 / This page isn't available" screen returned by your /prices nav link. *(`screenshots/prices-mobile.png`)*

**After:** The new homepage with the inline AYCEPricingCard — three tiers, lunch deal, Reserve button. *(Vercel deploy URL — added before send)*

That's the pitch.

— Ethan
