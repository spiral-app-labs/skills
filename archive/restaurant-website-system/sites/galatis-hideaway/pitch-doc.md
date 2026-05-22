# Galati's Hideaway Pitch Doc

## 60-Second Read

Galati's Hideaway is genuinely three restaurants inside one building — a quiet family dining room, a game-day sports bar with a 20-foot screen, and a patio with a koi pond — plus five private rooms that host celebrations of life and 21st birthdays in the same week. Vince Galati has been feeding Cary for 34 years. 1,107+ Google reviews at 4.3★. #1 Italian in Cary on Restaurant Guru. The kitchen has been doing the work.

The leak is the website. The current GoDaddy build has 25+ navigation items, PDF-labeled menus, five revenue streams competing instead of cooperating, and zero trust signals above the fold. A guest who came to order pizza sees the same nav weight as "Vote for the Teacher of the Month." None of the proof — reviews, "Since 1992", #1 ranking, the Galati family story — appears on the homepage.

The prototype keeps every revenue stream Galati's already runs (Heartland online ordering, Flavorplate banquet form, gift cards, catering) and rebuilds the site as a decision engine: Order, Plan a Party, View Menu, Visit. The pizza-forward, deal-driven, family-casual register stays — that's the honest match for what Galati's actually is. We just made the proof and the paths visible.

## Call Opener

> *"You already have online ordering, catering, five private rooms, and 1,107 Google reviews; the website just makes guests work too hard to choose between them. I mocked the version where pizza, parties, and proof all show up in the first ten seconds."*

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| **1,107 reviews + 4.3★ are hidden.** | Best public proof point in McHenry County Italian — #1 of 11 on Restaurant Guru, #5 of 38 on TripAdvisor — never appears on the homepage. | Put credible proof above the fold near the first decision. | Hero + TrustStrip surface 1,107+ reviews, Since 1992, #1 Italian, 5 Rooms — counters animate from 0 on scroll. |
| **34 years of heritage isn't shown.** | Vince has been doing this since 1987; Galati's has been in Cary since 1992. No founding year appears anywhere. | "Since YYYY" is a free trust signal for any business older than 5 years. | Hero subhead: "Since 1992 — and the portions still say we're not counting." Footer + about page reinforce. |
| **5 revenue streams compete, none lead.** | Order Online · Banquet Inquiry · Call Your Order · Gift Cards · Teacher of the Month all share equal nav weight. | Pick a primary action per audience; let secondary actions live in the second viewport. | Three clear mobile paths: Order (Heartland) · Plan a Party (banquet form) · View Menu. Heartland link preserved verbatim. |
| **Menu is a PDF library.** | "Our Complete Menu (PDF)" + "Catering (PDF)" frame the menu as a document download. PDFs are pinch-zoom on mobile. Search/AI can't read them. | Serve menu as crawlable text on the site. | Fan Favorites + Pizza sections render dish text directly; full menu page wires into Heartland for ordering. |
| **The hideaway story is invisible.** | "Three different atmospheres depending on your preference" is the most ownable line on the property. Currently buried. | Put the differentiator near the top. | Real Google review surfaced as a testimonial band; about page tells the Vince/Spring Street/Feinberg Court story. |
| **Specials are buried.** | Half-price pizza Mon, $3 tacos Tue, half-price wines Wed, fish & chips Fri — content goldmine that drives repeat visits. | Surface recurring promotions on the homepage. | DealCardStack (4 candy-color tiles) + nightly-specials marquee ribbon between TrustStrip and menu. |
| **Banquet form looks suspicious.** | Routes through `galatishideaway.flavorplate.com` — protected redirect to a third-party domain. | Either own-domain inquiry or clearly branded handoff. | Clean on-site Plan a Party section with the same Flavorplate handoff, branded so the redirect doesn't feel like a phishing detour. |
| **No "open now" indicator.** | Mon–Thu open at 3 PM; Fri/Sat at 11 AM. A diner deciding tonight has no fast answer. | Live open/close pill in the hero. | LiveOpenStatus pill in nav + footer: "Open · closes 11 PM" or "Closed · opens at 3 PM". |
| **Mobile path is buried.** | 25+ nav items on mobile creates phone-book scroll. A pizza order takes 6 taps to reach. | 3-action max in mobile primary nav. | Mobile nav: Order Online (sticky pill) · Menu · Parties · About · Contact. Phone is one tap away in the footer + LiveOpenStatus. |

## What We Fixed

- **Secret sauce, foregrounded.** Three atmospheres in one building. Vince Galati since 1987. Five private rooms. The portions still say we're not counting. Every line in the prototype is owner-confirmable; nothing invented.
- **Proof that's already earned.** 1,107+ reviews · #1 Italian · Since 1992 · 5 Rooms — animated counters above the fold, schema-tagged for search/AI.
- **Five revenue streams, three clear paths.** Order (Heartland) · Plan a Party (Flavorplate) · View Menu. Catering and gift cards live in the footer where guests already look.
- **Specials front and center.** Nightly-specials marquee + 2x2 deal grid means Monday's half-price pizza and Tuesday's $3 tacos drive return visits instead of hiding on a sub-page.
- **Real review as proof, not a stock testimonial.** "Nice and low key, legit feels like a little hideaway. One of my favorite date spots." — Heather S., Google.
- **Preserve-stack.** Heartland POS link, Flavorplate banquet form, Google reviews, gift card flow, social handles — all preserved verbatim. No platform migration.
- **Mobile-first.** Hero photo right-sized for 375px viewports, deal cards readable at 380px, CTAs stack instead of crowd, no horizontal overflow anywhere.
- **Aliveness pass.** LiveOpenStatus (real-time open/closed), LiveMapEmbed on contact page, ScrollReveal on every section, page transitions on route nav. Stat counters animate. Hero photo has Ken Burns + parallax. Reduced-motion guard mandatory and present.

## Demo Path

1. **Land on the homepage.** Hero pizza photo with Ken Burns, "Cary's Italian Hideaway." h1, "Since 1992 — and the portions still say we're not counting." subhead, Order Now / View Menu CTAs. Confetti emoji (basil, garlic, olive, tomato, cheese, pepper) for register.
2. **TrustStrip animates in.** 1,107+ Google reviews · Since 1992 · #1 Italian · 5 Rooms — counters tick from 0.
3. **Specials marquee scrolls.** "MON · ½-price pizza · TUE · $3 tacos · WED · ½-price wines · THU · $10 burger night..." Pauses on hover.
4. **Fan Favorites.** Lasagna, Caesar, Steak Kabobs — three real guest-quoted dishes with prices and Order CTA.
5. **Every Night Has a Deal.** 2x2 candy-color deal cards (Monday Pizza+Ribs, Taco Tuesday, ½-Price Wines Wednesday, Fish & Chips Friday). Each tile has bullets, price, photo bleed, Order Now pill.
6. **Pizza section.** Galati's Special, Margherita, The Garbage — thin-crust register honesty.
7. **Five Rooms. One Hideaway.** Photo grid of all 5 banquet rooms with capacity badges (110/100/70/35/25), accordion below for pricing packages.
8. **Three-atmosphere testimonial.** Real Google review surfaced as proof.
9. **Newsletter signup + footer.** Address, email, hours, social, links.
10. **Navigate to /about.** Vince's story (Oshkosh → Schaumburg 1987 → Cary 1992 → Spring Street 1998–2014 → Feinberg Court). Staff named (Jenny, Nafi, Bel, Jessica, Kyra). Stats grid.
11. **Navigate to /contact.** LiveOpenStatus, LiveMapEmbed, three address blocks (dine-in / catering / banquets), contact form.
12. **Mobile.** Walk through at 375px — hero CTAs stack, deal cards stay readable, no horizontal scroll.

## Do Not Overclaim

- Photography is placeholder Unsplash. Replace with venue shots before launch — Yelp shows 79 photos, Google reviews include food/interior/bar/patio shots; ~15–20 usable images should be confirmable.
- Heartland ordering URL is preserved verbatim (`galatis.hrpos.heartland.us/menu`); confirm it's still active before launch.
- Flavorplate banquet form URL is preserved as-is; if Vince/Katie want to move off Flavorplate, that's a separate decision for v2.
- Hours are taken from the current GoDaddy site (Mon–Thu 3 PM–11 PM, Fri–Sat 11 AM–12 AM, Sun 11 AM–10 PM). Confirm with owner before deploy.
- Review numbers (1,107 Google · 4.3★ · #1 Italian on Restaurant Guru · #5 of 38 on TripAdvisor) come from the audit dated 2026-04-28. Re-verify the day of pitch.
- Staff names (Jenny, Nafi, Bel, Jessica, Kyra) are from public Google reviews — confirm with Vince before printing on /about.
- Specials prices are from public sources at audit time. Confirm before launch.

## Close

> *"Galati's has been the best Italian in Cary for 34 years. The website just hasn't been telling anyone. The redesign doesn't change what Vince does in the kitchen — it makes the homepage finally do the work."*
