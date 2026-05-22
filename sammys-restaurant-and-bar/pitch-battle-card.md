# Sammy's Restaurant & Bar — Battle Card

> One-pager for the seller. Read in 30 seconds before the call.

## Who they are (60 sec)

- **Sammy's Restaurant & Bar**, 11012 IL-47, Huntley IL · phone (847) 669-9025
- All-day diner / hometown bar — **8 AM to 2 AM, every day**
- 4.5★ on 500+ Google reviews · 4.5★ on Restaurantji (208) · 4.3★ TripAdvisor · 4.3★ Facebook
- Average bill **$10–$20** (RestaurantGuru aggregation)
- Walk-in / phone-only — *does not take reservations*
- Owner: "Sammy" (per Derek Petrucci's Google review). "Mike & Diane" appear as operators in Dan Lockwitz's review. Both are unconfirmed.

## What guests come back FOR (Block 2 of audit)

| Asset | Verbatim review |
|---|---|
| **The HUGE pretzel** | *"OMG the pretzel appetizer is HUGE!!"* — Denise |
| **Friday fish fry** | *"Friday Nite is our Date Nite. The all-you-can-eat Fish Fry is GREAT!!"* (May 2024) |
| **Tuesday karaoke** | *"Love going to Sammy's on Tuesdays for karaoke night."* — Kelsey |
| **Sammy himself** | *"Sammy is one of the best guys around hands down. Sammy's is home."* — Derek |
| **Breakfast all day** | *"Like that they serve breakfast all day and night."* — Steven |
| **The Hickory Burger** | *"the best hamburger I have had in months."* — Dan |
| **Named bartenders** | Mickey, Lola, Kate, Jen, Jessica — all named in 5★ reviews |

## The 30-second leak diagnosis

1. **`sammysbarandgrill.com` returns DNS error** (verified, multiple resolvers). The "Website" link on every directory listing — Yelp, Restaurantji, Huntley Chamber — is dead.
2. **Facebook is login-walled** for non-FB visitors. ~80% of mobile viewport blocked by login modal.
3. **Menu lives on `res-menu.com` behind a Cloudflare bot wall.** SEO crawlers can't read it.
4. **The 4.5★ + 500-review trust signal lives only on Google.** Zero of it surfaces on Sammy's own web.

## Pitch sentence

> *"You already have the 4.5-star Google reputation, the fish fry, the karaoke night, and Sammy out from the kitchen — but `sammysbarandgrill.com` doesn't resolve, and your Facebook makes guests log in to see your hours. I mocked up the owned path: phone, hours, fish fry, and the HUGE pretzel on the first screen, on a phone."*

## What we built

- Home page on plate-01 (downshifted: amber accent in place of terracotta, diner-bar register)
- Hero: wordmark + eyebrow (HUNTLEY · 8 AM – 2 AM · EVERY DAY · 4.5★) + sub (hometown bar with kitchen + Friday fish fry + Tuesday karaoke + HUGE pretzel) + phone CTA + "See the menu" anchor
- TrustStrip (4 facts, no fabricated press)
- WhatsThisWeek (4 standing dates: karaoke, fish fry, live bands, breakfast-all-day)
- Inline menu (Starters, Breakfast All Day, Friday Fish Fry, Burgers, Sides, Bar)
- ReviewCarousel — 12 verbatim Google reviews, scroll-snap, auto-advance every 5.5s, pauses on hover
- Tagline strip ("Breakfast at 8. Last call at 2. Same counter.")
- LatestUpdates (Tuesday / Friday / Saturday rituals as cards)
- FAQ (8 questions, including "Do you take reservations?" → "We don't")
- Closing CTA + WordmarkFooter
- **Mobile sticky call bar** (Call + Map) — visible at every scroll position past the fold
- About page (Sammy + Mike & Diane + Mickey + Lola + Kate + Jen named)
- Contact page (phone-first; form is secondary)

## What to demo (3 screens, 90 sec each)

1. **Mobile home, scroll to TrustStrip.** "Your reputation, on your own page."
2. **Scroll to WhatsThisWeek.** "Karaoke, fish fry, breakfast all night — visible on the page they land on, not buried in last month's Facebook post."
3. **Scroll to ReviewCarousel.** Show Derek's "Sammy's is home" + Denise's "the pretzel is HUGE." "Your guests already wrote your homepage copy."

## What NOT to pitch

- ❌ A reservation widget (they don't take reservations — would mis-encode the business)
- ❌ A bistro-style upgrade (register risk — the audit explicitly downshifts plate-01)
- ❌ Fabricated awards or press (none surfaced — lead on rating math instead)
- ❌ Replacing DoorDash / takeout aggregators (they work; preserve them)
- ❌ A founding-year boast (unknown; flagged as pre-flight ask)

## Pre-flight asks for the owner (before public launch)

1. Domain status — do you still own `sammysbarandgrill.com`, or has it lapsed?
2. Owner names + roles — Sammy (cook)? Mike & Diane (operators)?
3. Founding year?
4. Friday fish fry — actual start time + price?
5. Tuesday karaoke — start time?
6. OK to name Mickey / Lola / Kate / Jen / Jessica on About?
7. Do you have ~10 of your own dish photos, or ship with placeholders + swap later?
8. Do you reply to Google reviews? (Pitchable warmth signal either way.)

## Risk pre-empts

- **"We're fine, we don't need a website."** Counter: *"Your phone rings — but the typo'd `sammysbarandgrill.com` on Yelp doesn't load. That's not a website redesign question; that's a 'where does the Yelp link go' question."*
- **"We're not fancy."** Counter: *"Right — that's why I built this on a hometown-bar template, not a bistro template. Look at the photos. This isn't trying to make you something you're not."*
- **"Facebook is enough."** Counter: *"Open it in incognito and try to read your hours. You'll see what every non-FB guest sees."*
- **"How much / how long?"** Counter: *"What I just showed you is already built. Pricing is [TBD by Ethan]. Domain + hosting is your call. I want 15 minutes Friday to walk you through it."*

## Files

- Audit: `audit.md`
- Pitch doc (long form): `pitch-doc.md`
- Verbatim reviews: `scrapes/google-reviews-packet-30.json`
- Site code: `app/`, `components/`, `content.example.ts`
- Mobile dead-domain proof: `scrapes/screenshots/dead-domain-desktop.png`
- Mobile FB login-wall proof: `scrapes/screenshots/facebook-page-mobile.png`
- Mobile Cloudflare-wall proof: `scrapes/screenshots/res-menu-mobile-fold.png`
