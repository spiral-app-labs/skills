# Algonquin / Crystal Lake / Elgin / Carpentersville Lead Pipeline — Qualified Build Queue

> Consolidated output of the 7-check qualification pass run 2026-04-22 on the
> 19 unqualified leads from `~/.claude/plans/do-research-on-algonquin-modular-lamport.md`
> (#14 Walnut Speakeasy already built, excluded). Per-batch scorecards live in
> `batch-{1..5}-*.md` in this directory.
>
> Framework: `../lead-fit-qualification.md` (7 checks + decision matrix).
> Driver lesson: `feedback_lead_fit_qualification.md` — the Walnut register-mismatch
> failure that motivated this pass.

## TL;DR

- **19 leads in, 3 priority builds out, 3 conditional builds, 1 strategic defer, 12 skips.**
- **The visual-reality pass paid for itself twice:** caught Foxy's Hideaway as a
  second velvet-shaker mismatch (same pattern as Walnut) BEFORE any fork, and
  re-routed Jude's + Vine & Plate off paper-assigned templates that would
  have misrepresented the room.
- **Two hard bad-data catches** surfaced by the pass: #10 Barn Steakhouse doesn't
  exist in Crystal Lake (it's Amy Morton's in Evanston) and #18 Bleuroot has
  been permanently closed since April 2026. The original lead doc was built
  against search metadata and didn't catch either.
- **Meta-signal:** the paper rubric (name + platform + heritage) systematically
  over-promoted register across Elgin (0/5 built) and under-specified Crystal
  Lake (needed 2 re-routes). Continue to treat lead-doc template assignments
  as hypotheses.

---

## Priority build queue (in order)

### 1. Black Bear Bistro — Algonquin
- **Template:** plate-01 (as assigned — no re-route)
- **Why it wins:** Chef Santiago Suarez is a 25-year 1776 Crystal Lake alum
  now running his own bistro; 4.8★ Tripadvisor; avg entrée $24 (range $12–$36)
  sits squarely in plate-01's $$ register. Current Squarespace site has NO
  above-fold reservation button and the menu is locked in a PDF with no visible
  prices — both concrete switch-reason failures. Low switching cost (no visible
  OpenTable / Resy / SpotHopper). plate-01's workhorse bistro aesthetic is an
  honest fit.
- **Switch-reason sentence:** "Their current site hides the menu behind a PDF
  and has no mobile reservation button — both measurable conversion losses."
- **Outreach hook:** chef pedigree + book-above-fold fix.

### 2. Da Baffone Cucina Italiana — Crystal Lake
- **Template:** gusto-01 (as assigned)
- **Why it wins:** Rustic Tuscan-brick trattoria, avg entrée $36.55 (cheapest
  $24.95, priciest $52.95), Best Italian + Best Wine Bar McHenry County. Site
  scores 4/10 — WordPress with a phone-first reservation path that is not
  treated like a primary mobile action, plus a visual tier that underrepresents
  the actual $$-$$$ register. Clean register match + honest pitch test.
- **Switch-reason sentence:** "Their homepage routes reservations to a phone
  note instead of a strong mobile decision path — call, hours, menu, and proof
  should all work together in the first few seconds."
- **Outreach hook:** "Best Wine Bar" credential deserves hero placement; current
  site buries it.

### 3. Grounds Coffee Bar — Crystal Lake
- **Template:** latte-01 (as assigned — peer match, not lift)
- **Why it wins:** Primary domain `groundscrystallake.com` is offline
  (ECONNREFUSED confirmed twice); the working alternate `groundscb.com` has
  a 404 on `/menu` and almost no content. 12-year-old independent roaster
  with 113 Yelp reviews + 151 photos — a real business with zero functional
  digital storefront. Switch-case is trivially concrete.
- **Switch-reason sentence:** "Their primary domain doesn't load and their
  backup site has no menu — customers find them through Yelp, not search."
- **Outreach hook:** dead domain.

---

## Conditional builds (pre-fork verification required)

### 4. Cucina Bella — Algonquin
- **Template:** gusto-01 (verify tone first)
- **Caveat:** Avg entrée ~$17.50 sits at the LOW end of gusto-01's $$-$$$ range —
  half-register drift. Review tone is "lively / fun / generous portions"
  (family-casual) rather than "intimate / date-night." Toast Tables already
  integrated (higher switching cost).
- **Action before fork:** verify gusto-01's hero copy + photo direction
  doesn't oversell into romantic-upscale. If it does, downgrade hero density
  or skip.

### 5. The Annex Restaurant & Lounge — Lake in the Hills (NOT Crystal Lake)
- **Template:** re-route from plate-01 to **varro-01** (modern contemporary $$-$$$)
- **Caveat:** Food program is more upscale-casual than the paper rubric assumed
  (Faroe salmon, halibut, Grecian lamb chops). ~$25–30pp. Site is 5/10 on
  SpotHopper — displaceable. BUT: a private IL video-gaming lounge onsite is
  a Walnut-redux risk. Reviews don't mention it; manageable if we structurally
  ignore it in the build (no hero imagery, no mention).
- **Action before fork:** pull the menu PDF, recompute avg entrée. If >$25,
  confirm varro-01. If 15–22, drop to plate-01. Confirm photos used in build
  show the dining room, not the gaming area.

### 6. Jude's — Crystal Lake
- **Template:** re-route from plate-01 to **bramble-01** (retro cocktail-bar-with-food)
- **Caveat:** Paper said "Casual American" — reality is international small
  plates + gin-forward craft cocktail bar owned by Paul Leech (also owns The
  Cottage). $20–30pp, reviews use "intimate, classy, creative cocktails,
  date night." plate-01 would misrepresent the cocktail-forward identity.
  bramble-01 is the honest register.
- **Action before fork:** confirm via Instagram photos that the room reads
  warm-retro-cocktail (bramble brief) and not dark-modernist-restraint
  (velvet-shaker brief). Wrong choice here is Walnut #3.

### 7. Vine & Plate — Crystal Lake
- **Template:** re-route from 1776-redesign-01 to **bramble-01**
- **Caveat:** Real operating restaurant, Wine Spectator Award of Excellence.
  But 1776 oversold by a register AND by cuisine-type — this is a cozy "old
  general store motif" tapas wine bar, not a dark-upscale steakhouse
  destination. Classic Walnut pattern. bramble-01 reads honest against the
  general-store motif + monthly-rotating small plates.
- **Switch-reason sentence:** "Their menus are PDF-only and the Wine Spectator
  credential is buried three clicks deep — the biggest trust signal they own
  is hidden."

---

## Strategic defer (do not force-fit)

### #20 El Molino Mexican Restaurant — Carpentersville
- **Recommendation: DEFER until template #14 exists.**
- **Why defer:** gusto-01 oversells by a register ($$-$$$ trattoria vs the
  actual $$ ~$16 avg). bamzi-01's saturated-accent palette directly contradicts
  the Zepeda family's deliberate spring-2025 pivot FROM red/green/yellow TO
  "muted white and cream with wooden beams." Neither template pitches
  truthfully.
- **Why this lead matters:** the clearest template #14 argument yet. 42-year
  heritage + 6-month kitchen-and-bar renovation + deliberately restrained new
  palette + primary domain `elmolino1984.com` ECONNREFUSED on fetch = a
  business that just invested 6 months in the room and has no working web
  presence. Hold the "big reno + dead domain" hook for when template #14 ships.
- **Template #14 brief inferred:** family heritage casual Latin, $$ register,
  muted terracotta / cream / wood palette, bar-forward secondary module,
  aggregator-ordering integration, regional-Mexican authenticity.

---

## Skips with reasons

| # | Lead | Reason | Category |
|---|---|---|---|
| 1 | Montarra | Site is 7/10 (Squarespace + OpenTable above fold + modern hero); no concrete switch reason | doing-fine |
| 4 | Lone Buffalo (Tangled Roots) | Brewpub menu 2 registers below bramble-01 AND chain-owned (not on TRBC's 6-location list) | register-mismatch + chain |
| 9 | Lake Roots | 7/10 recent Squarespace; conceptual mismatch (café-market-bar hybrid, latte-01 only covers mornings) | doing-fine + template-mismatch |
| 10 | The Barn Steakhouse | **Does not exist at 1 N Virginia Rd Crystal Lake.** The Barn Steakhouse is Amy Morton's in Evanston. Remove from pipeline; flag lead-gen error. | bad-data |
| 12 | Al's Cafe & Creamery | Paper-signal error: 1892 Victorian building, NOT 1950s soda fountain. plate-01 would strip the heritage that IS the selling point. Catalog gap. | template-gap |
| 13 | Old Republic K+B | Randall Rd strip-mall sports bar with dozen+ TVs and live-music stage — not retro cocktail-bar. bramble-01 oversells. Toast Tables = high switching cost. Switch reason vague. | register-mismatch |
| 15 | Martini Room | No food program (martini + event space), $7 specials. Neither bramble-01 (food-forward) nor velvet-shaker-01 ($$$ restraint) fits. Second catalog-gap signal. | template-gap |
| 16 | Foxy's Hideaway | **WALNUT PATTERN CONFIRMED.** East Dundee (not Elgin), shares a patio with Diamond Jim's tavern, open-mic + piano + costume contests. velvet-shaker-01 would misrepresent by 2 registers. Caught pre-fork. | walnut-pattern |
| 17 | In The Neighborhood Deli | Yelp flags closed; location taken over by La Cosecha (Nov 2025). Stale lead. | closed |
| 18 | Bleuroot | **Permanently closed April 2026** per Yelp + OpenTable. Remove from pipeline. | closed |
| 19 | Taylor Street Pizza (Carpentersville) | Multi-location chain (Carpentersville, Elgin, Algonquin, Wasco + Chicago origin) + delivery-only Warehouse format. Chain-rule excluded. | chain |

---

## Catalog gaps surfaced by this pass

Three distinct template gaps, all with at least one real lead this pipeline
could have served if they existed:

1. **Heritage Americana chef-diner** (#12 Al's Cafe) — plate-01 is the closest
   but strips the nostalgic character that's the brand's core asset.
2. **Small entertainment venue / cocktail lounge without a food program**
   (#15 Martini Room) — bramble-01 assumes a food-forward identity,
   velvet-shaker-01 assumes $$$ restraint. Neither handles "drinks + events"
   as the primary register.
3. **Family heritage casual Latin, muted-modern palette, $$** (#20 El Molino)
   — the strongest gap signal. NW Chicago suburbs have high independent-Mexican
   density; this is a reasonable template #14 candidate in its own right.

Observational — template-hunting happens in a separate session, not here.

---

## Upstream notes

- **Lead-gen cleanup:** two leads were bad data (#10 Barn Steakhouse wrong
  location, #18 Bleuroot closed). The original doc was built from search
  metadata without calling the individual business listings. Future lead
  passes should include a "business is open + at the claimed address" gate
  before the template assignment.
- **Paper rubric systematic bias:** Elgin 0/5 survived the visual-reality
  pass; Crystal Lake needed 2/4 re-routes. The bias direction is
  over-promoting register (Walnut pattern), not under-promoting. Treat
  template assignments in any lead doc as hypotheses, not green lights.

## Next-session kickoff

1. Build #1 Black Bear Bistro on plate-01 (priority 1).
2. Build #2 Da Baffone on gusto-01 (priority 2).
3. Build #3 Grounds Coffee Bar on latte-01 (priority 3).
4. Before conditional builds (#4–#7), run the pre-fork verification listed
   with each. Specifically don't start Jude's until the photo tone is
   confirmed.
5. Template-hunting: the three gaps above — especially "family heritage
   casual Latin" — are the most concrete template #14 candidates surfaced
   from real leads so far. Worth a separate session.
