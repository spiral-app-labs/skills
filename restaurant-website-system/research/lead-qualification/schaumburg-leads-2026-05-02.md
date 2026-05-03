# Schaumburg-Area Lead Pass — 2026-05-02

15 independent restaurants in the Schaumburg / Hoffman Estates / Roselle corridor,
ranked using the revenue-leak rubric in `~/skills/deep-research-on-website-criteria.md`
(direct leak severity > switching friction; aesthetic leaks deprioritized vs.
broken-money-path leaks).

Chains, multi-location franchises, and confirmed-closed listings dropped before
ranking (Lou Malnati's, Big Bowl, Capital Grille, Wildfire, Moretti's, Inchin's,
Bistro Wasabi already audited, Riccardo's Ristorante closed 2024).

## Ranked build queue

| # | Restaurant | Cuisine / register | Why-switch (rubric signal) | Template hypothesis | Tier |
|---|---|---|---|---|---|
| 1 | **DiBenedetto Trattoria** (Hoffman Estates) | Heritage Italian, chef-owner, $$ | C5 + V6 + I3: SpotHopper-generic site hides chef-owner Vittorio + heritage years + live-music 3 nights/wk + private dining for 50; reviews + chef story not surfaced | gusto-01 | A |
| 2 | **Hacienda Calavera — Schaumburg** | Family Latin American, live music, $$ | D3 + V1: no dedicated Schaumburg site (uses eatat.us subdomain); main brand site features Cicero only; live-music programming buried | bramble-01 OR new-fork | A |
| 3 | **Neos Eclectic Mediterranean** | Modern Mediterranean, $$$ | C1 + C5: PDF-only menu (deep-research priority HIGH leak) on a $$$ concept; new opening with strong reviews not surfaced | labrisa-01 OR gusto-01 | B |
| 4 | **Lao Hu Tong** | Sichuan Chinese, $$ | I3 + V3: third-party Mealkeyway ordering wrapped in generic site; menu access friction; new Schaumburg opening with rapid Yelp ramp | bamzi-01 | B |
| 5 | **Bella Napoli** | Wood-fired Neapolitan pizza, $-$$ | C1 + V5: site prioritizes pizza-takeout flow over the dine-in/cocktail/charcuterie register the menu actually carries | pepper-01 OR plate-01 | B |
| 6 | **Hacienda Calavera — main (Cicero/Schaumburg combined)** | (paired with #2) | (covered by #2) | — | — |
| 6 | **Apple Villa** (Hoffman Estates) | Family breakfast / pancakes, $ | C4 + V7: weak photo program for an order-of-magnitude breakfast operation; no mobile sticky actions | latte-01 OR plate-01 | C |
| 7 | **Cafe Zaytun** | Mediterranean / Levantine, $$ | unknown (need on-page check) | gusto-01 OR labrisa-01 | C |
| 8 | **Torizen** | Japanese yakitori, $$ | unknown (need on-page check) | qitchen-01 OR varro-01 | C |
| 9 | **Westwood Tavern** | American gastropub + sports bar, $$ | site is competent + active; weak switch case (rubric tier 6/10 like Walnut) — defer | (skip / monitor) | D |
| 10 | **Chicago Prime Italian** | Upscale Italian + steak, $$$ | OpenTable + active site + Diners' Choice — likely 6+/10, low switch incentive | (defer) | D |
| 11 | **Chicago Prime Steakhouse** | Independent prime steakhouse, $$$ | sister to #10, same caveat | (defer) | D |
| 12 | **Mago Grill & Cantina** | Chef-driven Mexican, $$ | multi-location (3 sites) → multiple decision-makers, deprioritize per rubric | — | D |
| 13 | **Fat Rosie's Taco & Tequila** | Modern Mexican, $$ | multi-location + recent (since 2015) | — | D |
| 14 | **Wildberry Pancakes** | Family breakfast | likely-strong site + multi-location | — | D |
| 15 | **Bowlful of Korea** | Korean | unknown — bench candidate | bamzi-01 | C |

## Addendum 2026-05-03 — Woodfield-corridor hot-pot pivot

User asked for the shabu shabu place near Woodfield Mall. Initial pick was Shabu-Yo (1180 Plaza Dr, directly adjacent to Woodfield) but that's part of the Skylark Group chain (~3,000 locations globally). Pivoted to nearby independents:

| # | Restaurant | Distance to Woodfield | Vertical | Notes | Tier |
|---|---|---|---|---|---|
| 16 | **MAAX Asian BBQ & Hot Pots** (Arlington Heights, 222 E Algonquin Rd) | ~4 mi | Korean BBQ + hot pot AYCE | Single-location independent. 67+ Yelp / OpenTable presence. Modern multi-cuisine concept. **Build target.** | A |
| 17 | **Sankyu Sushi & Izakaya** (Mount Prospect, 1176 S Elmhurst Rd) | ~6 mi | Sushi + izakaya | Founded mid-80s by Fumiyasu Yoshida, 40-yr heritage, recent ownership change, 241 Yelp reviews, late-night Fri/Sat program. Strongest lead-fit BUT wrong cuisine vertical for a "shabu shabu near Woodfield" ask. Hold for next pass. | A (alternate) |
| 18 | **Galaxy Hot Pot & Sushi** (Deerfield, 2055 N Milwaukee Ave) | ~15 mi | AYCE hot pot + sushi | Too far from Woodfield. Skip. | C |

**Decision:** Build **MAAX Asian BBQ & Hot Pots**. Cuisine fit (hot pot AYCE) + Woodfield-corridor geography + single-location independent. Template hypothesis: **bamzi-01** (accessible-casual pan-asian with saturated accent) — Prata 400 + Inter, dark canvas + orange accent matches the Korean-BBQ-hot-pot register.

## Decision

**Build target: DiBenedetto Trattoria.** Highest-conviction A-tier:

- **Direct leak (C5 + I3):** SpotHopper-powered site (managed-stack footprint) renders
  chef-owner Vittorio invisible. He's the brand. The site is the wrapper around an
  ordering/reservation engine, not a story.
- **Direct leak (V6):** Live music + dancing 3 nights/week + private dining for 50 are
  margin-positive surfaces buried under nav. That's two events-fit signals (Wed/Fri/Sat
  music, 50-cap room) with no homepage hook.
- **Register match:** heritage Italian trattoria + intimate room + chef-owner =
  textbook gusto-01 fit (Sorts Mill Goudy italic + cream + ochre, asymmetric multi-card
  hero, hours sidebar, HeroTestimonialCard).
- **Switching cost:** SpotHopper handles reservations + email marketing. Mid-friction
  but not blocking — preserve-stack pitch is available (keep SpotHopper res widget,
  refresh the front-end).
- **Photography risk:** WebFetch flagged "platform placeholder" image patterns. Photo
  Tier verdict will gate the template choice in the audit (Tier-2 ready likely; Tier-1
  needs a shoot).

Routes to next step: run the audit per `~/skills/restaurant-website-audit/SKILL.md`,
opening the site + Google Reviews in the in-app browser as required.
