# Sammy's Restaurant & Bar — Pitch Doc

> Source artifacts: `audit.md` (5-block strategic audit, 2026-05-02) + `scrapes/google-reviews-packet-30.json` (30 verbatim Google reviews) + `content.example.ts` + `app/` route tree. Lead source: `research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md` priority #3.

## 60-Second Read

Sammy's already has the demand: **4.5 stars on 500+ Google reviews**, breakfast-all-day-and-night, a Friday fish fry that regulars build their week around, and an owner-cook (Sammy) who comes out from the kitchen when guests ask. The reputation is real and earned.

The owned web is the leak. **`sammysbarandgrill.com` doesn't resolve** (DNS fail — confirmed). The Facebook page makes anyone without a Facebook account log in just to see hours. The only menu surface (`res-menu.com`) is gated behind a Cloudflare bot wall. Three out of three owned-path touches dead-end.

We rebuilt the owned path: hero with hours + the call-to-order phone CTA on first paint, the Friday fish fry and Tuesday karaoke surfaced as standing dates, the HUGE pretzel and the burger Dan called *"the best in months"* above the fold, 12 verbatim Google reviews scrolling on the home page. Phone-first conversion (no fake reservation widget). Mobile sticky call bar so the phone CTA is reachable at every scroll.

## Call Opener

*"You already have the 4.5-star Google reputation, the fish fry, the karaoke night, and Sammy himself out from the kitchen — but the website domain on your Yelp listing doesn't load, and your Facebook makes guests log in to see your hours. I mocked up the owned path: phone, hours, fish fry, and the HUGE pretzel on the first screen, on a phone."*

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| **`sammysbarandgrill.com` returns DNS error** (verified `ERR_NAME_NOT_RESOLVED` on multiple resolvers) | Every guest who taps your "Website" link from Yelp / Restaurantji / the Huntley Chamber listing hits a Chrome error page. First touch dead. | A working domain at the URL printed across every directory listing. | New owned site at `sammyshuntley.com` (or any working domain) — hours + phone above the fold. |
| **Facebook is your only "alive" surface and it's login-walled** on mobile (~80% of viewport covered by login modal for non-FB users) | Most folks searching "Sammy's Huntley hours" today land on FB and bounce. The post you made about Friday's band never reached anyone outside your followers. | An owned page that loads without an account, refreshed weekly. | Home-page "What's on at Sammy's" strip (Tuesday karaoke / Friday fish fry / Saturday live bands / breakfast all day). Updates in `content.ts` — no FB account required to read. |
| **Menu lives on `res-menu.com` behind a Cloudflare bot wall** | Google's menu structured-data crawler can't read it. Means you don't show up for "fish fry near Huntley" or "biscuits and gravy Huntley" the way you should. | An inline, crawlable HTML menu on your own domain. | Full menu (Starters, Breakfast, Friday Fish Fry, Burgers, Sides, Bar) inline on the home page — not a PDF, not an iframe, not a third-party widget. |
| **The 4.5★ on 500+ Google reviews lives only on third-party panels** | Your strongest trust asset is invisible the moment a guest leaves Google. | Owned-page review surface plus a star count near the conversion CTA. | TrustStrip (4.5★ Google · 500+ reviews / 4.5★ Restaurantji · 208 / $10–$20 average bill / 8 AM – 2 AM open every day) directly under the hero, plus a 12-card scroll-snap ReviewCarousel with verbatim Google reviews. |
| **Named staff and Sammy himself are invisible** | Reviewers keep naming Mickey, Lola, Kate, Jen, Jessica — and Sammy as owner-cook. The current owned web names none of them. | An About page that mirrors the warmth guests already feel. | About page that names Sammy + Mike & Diane + the bartenders by first name, with the line "It might not look like much from the outside" — a guest's verbatim phrase, returned to the owner. |

## What We Fixed

- **Hero Lock done by the audit, not the designer.** Wordmark = "Sammy's Restaurant & Bar" (we never replace the name with a tagline). Eyebrow names hours + days + the 4.5★ count. Sub names the fish fry, karaoke, and the HUGE pretzel by name. Phone is the primary CTA — no fake reservation widget, because Sammy's doesn't take reservations and we won't pitch one.

- **Mobile-first, because aggregator traffic is mobile.** Sticky call bar always visible at the bottom on iPhone-size screens — the phone is one tap from any scroll position. Hero h1 sized to fit on 2 lines (not 4) on a 375px viewport. Header CTA shows phone-icon + "Call" on mobile / full number on desktop.

- **Repeat-visit rituals surfaced as a standalone strip.** "What's on at Sammy's" — Tuesday karaoke / Friday fish fry / Weekend bands / breakfast-all-day — directly below the trust strip. The reviews say guests build their week around these; the new site says it back.

- **Copy sounds like Sammy, not like ChatGPT.** Phrases lifted verbatim from reviews + the owner's existing voice: "HUGE!" (the pretzel), "Hometown bar," "Breakfast all day and night," "It might not look like much from the outside." No bistro-speak, no "modern American comfort food," no fake heritage year.

- **Photography tier honest.** Diner-bar daylight casual, not warm-graded fine-dining. Currently using 3 placeholder Unsplash shots flagged for swap with Sammy's own photos before launch — the reputation is "hidden gem," not "Instagram-perfect," and the photos should match.

## Demo Path

1. **Open mobile preview at the home page.** Phone-icon CTA in header + giant "Call to order — (847) 669-9025" pill below the hero copy. Eyebrow gives the owner the math (4.5★ / 500+) without bragging. Below the fold, the TrustStrip math is visible in 3 seconds.

2. **Scroll to "What's on at Sammy's."** Karaoke / fish fry / live bands / breakfast-all-night cards. The pitch line: *"This is the part of your business guests already build their week around. Right now it lives in your Facebook feed, three weeks ago. Here it lives on the page they land on."*

3. **Scroll to the menu — note no PDF, no popup, no Cloudflare wall.** Then scroll one more flick to the ReviewCarousel — 12 verbatim Google reviews including Derek's *"Sammy is one of the best guys around"* and Denise's *"OMG the pretzel appetizer is HUGE!!"*. Show them their own pretzel review on their own site.

4. **Scroll to the bottom and tap the sticky call bar.** Phone dialer opens with `+18476699025`. Conversion proven without leaving the page. The point: every scroll position is one tap from a phone call.

## Do Not Overclaim

- **Founding year is unknown.** The audit lists it as a pre-flight ask. The build ships with `Family-owned since [year — owner to confirm]` in the footer. Do NOT state a year on the call until the owner confirms.
- **Owner names are review-derived, not confirmed.** "Sammy" appears in Derek Petrucci's review; "Mike & Diane" appears in Dan Lockwitz's. The build lists both. Owner needs to confirm spelling + roles before public launch.
- **Photos are placeholders.** README explicitly tells the owner to swap Unsplash shots for their real photos before public launch. Don't promise Instagram-grade plating; promise honest daylight bar-and-grill photography.
- **Domain status is open.** `sammysbarandgrill.com` doesn't resolve — owner may still hold the registration (lapsed?) or may not. New site is intended to ship under whatever domain the owner controls; we do NOT pitch a domain rip-and-replace until that's confirmed.
- **No press hits found.** No Daily Herald, no Northwest Herald, no "Best of Huntley" reader-poll surfaced for *this* Sammy's. The build leans on rating-count math instead — don't overclaim awards on the call.

## Close

*"This is a 1-hour fork from a template I've already built and shipped four times. I'm not asking you to think about a redesign — I'm asking whether the version where your phone, your fish fry, and your pretzel are the first thing a guest sees on their phone is worth 15 minutes of your time on Friday."*
