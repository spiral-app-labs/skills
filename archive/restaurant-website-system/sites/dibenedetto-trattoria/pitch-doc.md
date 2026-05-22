# Pitch — DiBenedetto Trattoria

**Recipient:** Vittorio Di Benedetto (chef-owner) · Denise A (Marketing Director)
**Restaurant:** DiBenedetto Trattoria · 1766 W Algonquin Rd, Hoffman Estates, IL 60192 · (847) 496-5016
**From:** Spiral / Ethan Talreja · est58@cornell.edu
**Date:** 2026-05-02
**Live preview:** http://localhost:3129 (dev) · Vercel deploy URL TBD before send
**Backing audit:** `sites/dibenedetto-trattoria/audit.md`

---

## The opening line (use one)

**For DM / cold email subject:**
> *"Cinco de Mayo ad — wrong restaurant"*

**For Loom intro (10 seconds):**
> *"Hi Vittorio — I pulled up your site this morning, and the first thing I saw on my phone was a Cinco de Mayo ad for El Taurino. I rebuilt the homepage so the first thing guests see is your name, your kitchen, and the live-music nights. Mille grazie for thirteen years on Algonquin Road — here's what it could look like."*

---

## The three outcomes we're selling

1. **More reservations** — surface the SpotHopper widget above the fold (instead of below the popup); add a "Reserve for [next music night]" CTA so guests can book around your live program.
2. **Better first impression** — replace the third-party popup network with a homepage that opens on Vittorio's room, your name, and the dishes regulars come back for.
3. **Premium-without-overselling** — heritage Italian wordmark, italic Sorts Mill Goudy display, warm cream + ochre palette, real reviews carouseled at eye level. The aesthetic matches the bill.

We are NOT proposing a platform rip-out. SpotHopper stays. We refresh the front-end on top of your existing reservations and email engine. *Preserve-stack.*

---

## What we changed (for the owner)

### 1. The cross-promo modal is gone
Right now the SpotHopper network serves a **different restaurant's promo** on your mobile homepage — El Taurino Mexican Grill's "Cinco de Mayo Karaoke + Mechanical Bull" event at 4 Golf Center. You're paying SpotHopper to render someone else's ad on your site. The new homepage doesn't run network popups. Promos for *your* events render inline as cards, not as fold-blocking modals.

### 2. Vittorio is on the homepage by name
Reviews on Tripadvisor, OpenTable, and Google credit "the chef came over," "the owner sent out limoncellos," "Mille grazie — Vittorio." Your name appears once on the current site, in the About copy. The new homepage has:
- A signed *"Mille grazie. Vittorio Di Benedetto"* quote panel
- A chef-owner-as-brand placement above the menu teaser
- The owner-voice line *"Vittorio cooks the room he owns"* in the story section

### 3. "Since 2012" is everywhere
Thirteen years on Algonquin Road. The current site never says it. The new site:
- Eyebrow above the hero: *"Hoffman Estates — Family Italian Since 2012"*
- Heritage stamp in the footer: *"Since 2012 · Hoffman Estates"*
- StatCounter on the proof strip: *"Since 2012 — Chef-owned by Vittorio Di Benedetto"*

### 4. Live music + dancing has its own section
Wed / Fri / Sat. Buried in your Events tab right now. The new homepage has a **LiveMusicStrip** that:
- Shows the next Wednesday, Friday, and Saturday with computed dates ("Friday, May 9")
- Highlights the soonest night
- Each card has its own *"Reserve for Fri."* CTA that deep-links to SpotHopper

### 5. 326 reviews, 4.5★ aggregate, on the homepage
None of your public reputation is currently on the site. The new site has:
- A continuous-scroll **PressStrip** marquee with Tripadvisor, OpenTable, Yelp, Google, Birdeye, and Restaurantji scores
- A horizontal **ReviewCarousel** of 8 verbatim guest quotes — Denise M's Veal Napoleon paragraph, Brad K's birthday/live-music story, MWG's "feeling like visiting friends," Jim M's Fettuccine Harry's Bar
- Animated count-ups: *4.6★ / 257 OpenTable diners* · *#7 of 104 Tripadvisor* · *326 reviews*

### 6. AI concierge — "Ask the host"
A bottom-right chat bubble. Guests can ask:
- *"What's on the menu tonight?"* → answers from your verified menu
- *"Are you open right now?"* → checks the dinner schedule
- *"Do you cater?"* → directs to (847) 496-5016
- *"Is there live music Friday?"* → confirms Wed/Fri/Sat, links to reserve

The concierge is grounded in your menu, your hours, your live-music schedule. It will not invent. For anything time-sensitive it routes to your phone.

### 7. Mobile is fixed
- Hero CTA visible at first paint (no popup)
- Sticky bottom bar shows **Reserve** + **Menu** (drops the JOBS link that was eating tap-target space)
- Tap-to-call surfaces in header

### 8. SEO + structured data
- `Restaurant` JSON-LD with hours, address, geo, aggregateRating (4.5 / 326)
- `Menu` JSON-LD with every section + item + price (so Google can render rich menu results)
- Open Graph tags so the link previews well on Facebook + iMessage

---

## What stays the same (preserve-stack promise)

- **SpotHopper reservations.** Same widget, same email-marketing engine.
- **Your phone number, hours, address, email.** Verified.
- **Your menu items, your prices.** Pulled from `/food-menu` on your current site.
- **The wordmark.** Your existing script "Di Benedetto trattoria" mark stays in the nav by default; the new site wraps it in the heritage-Italian gusto frame instead of the generic SpotHopper chrome.

---

## What we'd like from you (for the v2)

A 30-minute photo session to lift the photography from Tier-2 to Tier-1:

1. **Chef Vittorio at the pass** — single warm low-light shot. The current flambé hero is good; one chef portrait is the missing asset.
2. **The Veal Napoleon, plated and styled** — Denise's signature dish deserves its own photo, not a stand-in pasta.
3. **A live-music-night room shot** — Friday or Saturday at 8 PM, full room, singer in frame.

If a shoot isn't on the table, the v1 ships fine on the Tier-2 photography we have. The v2 lift is for closing the rebrand.

---

## Pricing (build + ongoing)

- **Build (one-time):** $X,XXX — design, content, SEO schema, AI concierge, deployment. Ship in [TBD] business days from approval.
- **Hosting + concierge AI (monthly):** $XX/mo — Vercel hosting + Anthropic API for the concierge.
- **Optional care plan (monthly):** $XX/mo — content updates, photo refreshes, live-music programming surfaced on the home, monthly review-pull from Google.

Or a blended quarterly package if that's easier for the books — ask Denise what works.

---

## What we're NOT going to do

- Rebuild your reservation system. SpotHopper stays.
- Rebuild your email marketing. SpotHopper stays.
- Touch your menu pricing or recipes.
- Send your guest data anywhere it isn't already.
- Change your phone number, address, or hours.

---

## Two screenshots that close the deal

**Before (mobile, today):** El Taurino's Cinco de Mayo modal on the homepage. *(`screenshots/current-site-mobile-fold.png`)*

**After (mobile, the rebuild):** Your wordmark, the kitchen, the Reserve CTA, the Wed/Fri/Sat music schedule. *(Vercel deploy URL — added before send)*

That's the pitch. Mille grazie for reading.

— Ethan
