# Sushi U — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `sushi-u`
- MC parent task: `b5ce710c-c4b4-431e-a258-82fb71ab60a0`
- Lead ID: `8dce758b-d6d8-45b9-9971-70e6810569fb`
- Restaurant: Sushi U, Crystal Lake, IL
- Official site: `https://sushiucrystallake.com/`
- Address found: `5899 Northwest Hwy Unit A, Crystal Lake, IL 60014`
- Phone found: `(815) 893-6338`

## Source status

Sushi U has a functioning official site, but current source checks confirm the lead-list concern: the official domain triggers SSL/certificate verification failures in normal Python/web-fetch flows, while an unverified SSL fetch succeeds. The homepage also routes menu discovery through a PDF file (`images/menu26.3.11.pdf`) and separate HonorPOS ordering flow.

The pitch hook is therefore: **Sushi U has real sushi/Japanese demand and a live order path, but the owned site has trust friction from certificate failures in normal fetches plus a PDF-menu experience that feels brittle on mobile and search.**

## Public proof captured

### Official site

- URL: `https://sushiucrystallake.com/`
- Normal verified SSL fetch failed for `http://sushiucrystallake.com/`, `https://sushiucrystallake.com/`, and `https://www.sushiucrystallake.com/` with `CERTIFICATE_VERIFY_FAILED: unable to get local issuer certificate`.
- Unverified SSL fetch succeeded and returned homepage HTML.
- Page title: `Sushi U | Online Ordering Menu`.
- Meta description says: `Sushi U, 5899 North West Highway Unit A, Crystal Lake, IL 60014, We serve food for Take Out, Eat in`.
- Nav/CTAs surfaced: Home, About Us, Order Online, Menu, Gallery, Contact.
- Order URL: `https://order.sushiucrystallake.com/`.
- Phone links: `tel:+1 815-893-6338`.
- Menu link: `images/menu26.3.11.pdf`.
- Extracted homepage copy includes:
  - `Tel: 815-893-6338`
  - `Dine In & Pick Up`
  - `Our Menu`
  - `Order Online`
  - `Welcome to our Restaurant!`
  - Fresh/natural ingredient copy and healthier preparation language.
  - Hours: Monday closed; Tuesday–Thursday 11AM–9:30PM; Friday–Saturday 11AM–10PM; Sunday 12 noon–9PM.
  - Address: `5899 North West Highway Unit A, Crystal Lake, IL 60014`.
  - Powered by Honorpos.
- The PDF menu URL returned `application/pdf` and raw `%PDF-1.7` content.

### Restaurantji

- URL: `https://www.restaurantji.com/il/crystal-lake/sushi-u-/`
- Category: Sushi Bars, Japanese.
- Rating evidence: `4.5` from `141 ratings`.
- Address: `5899 Northwest Hwy Unit A, Crystal Lake`.
- Phone: `(815) 893-6338`.
- Favorites surfaced: Spicy Salmon Roll, California Roll, Angel Hair Roll, Shrimp Tempura, Forbidden Roll, Crystal Lake, Crab Rangoon, Super Crunch, Spider Roll, Volcano Roll.
- Hours: Monday closed; Tuesday–Thursday 11AM–9:30PM; Friday/Saturday 11AM–10PM; Sunday 12–9PM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Sushi-U-Crystal-Lake`
- Shows 34 photos and Google-derived rating `4.6`.
- Summary mentions Japanese cuisine, avocado sushi, volcano roll, miso soup, lemonade/tea, takeaway, attentive staff, fine service, low prices, calm atmosphere, and fancy decor.
- Address: `5899 Northwest Hwy Unit A, Crystal Lake, Illinois, USA`.
- Features: outdoor seating, credit cards accepted, delivery, takeaway, booking, wheelchair accessible, parking.
- Hours corroborate Restaurantji.

## Audit findings

1. **Technical trust gap:** certificate verification failures are reproducible in normal fetch paths. Real-browser verification is required, but this is a meaningful trust/discovery issue.
2. **PDF-menu friction:** the official menu CTA points to `images/menu26.3.11.pdf`, which is worse for mobile readability, search, and easy menu updates than crawlable HTML menu sections.
3. **Order path exists:** preserve the HonorPOS order link; this should be a redesign around the existing conversion flow, not a rip-and-replace.
4. **Visual/archetype caution:** Sushi U has sushi/Japanese and decor proof, but not enough current browser/photo evidence to justify a high-design omakase posture.
5. **Route:** `bamzi-01` by default per qualification. Core archetype mapping: **Bamzi** for moody/energetic sushi/Japanese pacing. Use `qitchen-01` only if later browser/photo evidence proves a restrained, architectural, special-occasion brand.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshots of the official homepage, PDF menu, and online-order handoff
- browser security/certificate behavior from a real user browser
- DOM/text snapshot for homepage and order/menu links
- screenshots of Restaurantji/Restaurant Guru proof pages
- Google/Maps profile screenshot, official website field, and later Highest-filter 30 written Google review packet

## Current recommendation

Proceed as a conditional sushi/Japanese technical-friction lead after browser verification. The sell story should be precise: keep Sushi U’s existing ordering path, but replace SSL/PDF-menu trust friction with a clearer, mobile-strong first-party site that highlights hours, address, phone, popular rolls, takeout/delivery, and the HonorPOS order handoff.
