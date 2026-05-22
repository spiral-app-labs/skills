# The Secret Kitchen USA — menu and claim-safety matrix

- Date: 2026-05-07
- Status: **internal claim-safety prep / not owner-facing yet**
- Canonical archetype: **Bamzi**
- Buildable source template: `bamzi-01`
- Build status: **not build-authorized**
- Owner outreach status: **not sent**
- QA status: **not run**
- Source basis: official site menu/chef/contact text captured on 2026-05-07

## Purpose

The Secret Kitchen USA has unusually rich source content: a full priced menu, Chef Aanal Kotak story, awards list, private dining language, global-presence language, and premium dining cues. That richness is valuable, but it is also risky if a preview publishes unconfirmed prices, awards, biography claims, private dining promises, or review proof.

This matrix tells a future builder what can be used immediately as internal direction, what may be safe after owner confirmation, and what must stay out of any owner-facing preview until explicitly approved.

No raw Supabase writes were performed.

## Overall rule

Use the captured menu and chef text as **internal implementation direction only** until the owner/founder confirms currentness and permission. Public preview copy should be category-led and source-safe unless confirmation exists.

## Claim-safety levels

| Level | Meaning | Public preview use |
| --- | --- | --- |
| Green | Basic public fact from official site, low risk | Can be drafted, still owner-confirm before final share |
| Yellow | Source-backed but currentness/wording/permission-sensitive | Use cautiously or keep internal until confirmed |
| Red | High-risk claim, permission-sensitive, or easy to overstate | Do not publish until explicitly approved |

## Green facts — low-risk baseline

These are the safest public facts, though final preview still needs owner confirmation before owner-facing use:

- Business/source name: The Secret Kitchen USA / The Secret Kitchen.
- Official site: `https://thesecretkitchenusa.com/`.
- Address: `1411 W Schaumburg Rd, Schaumburg, IL 60194, USA`.
- Phone: `+16306352854` / `(630) 635-2854`.
- Email: `info@thesecretkitchenusa.com`.
- Hours snapshot: `5:30 PM - 10:30 PM | ALL DAYS`.
- Reservation path snapshot: GetSeat URL captured from official site.
- Official social paths: Facebook and Instagram appear in footer/navigation.
- Broad category: modern Indian premium dining in Schaumburg.

## Yellow facts — source-backed but confirmation-sensitive

Use these as internal direction. Publish only after owner/currentness approval:

- Exact preferred public brand name and punctuation.
- Current hours and whether lunch is planned/current/omitted.
- GetSeat as the only approved reservation path.
- Full menu currentness, item descriptions, and prices.
- Vegetarian/vegan/non-vegetarian positioning.
- Chef Aanal personally creates all spices for The Secret Kitchen.
- Royal-kitchen inspiration language.
- India/Australia/Canada/USA presence wording.
- Private dining/banquet availability.
- Specific social links and whether they are official/current.

## Red facts — do not publish without explicit approval

- Awards, recognitions, logos, publication names, or “award-winning” language.
- Google rating, review count, or direct review snippets.
- Private dining capacities, room names, packages, minimums, deposits, or policies.
- Menu prices if owner has not confirmed currentness.
- Lunch availability or future lunch plans.
- Press/award images or Chef Aanal images without rights confirmation.
- Any claim that a dish is “signature,” “best,” “famous,” or “must-try” unless the owner approves exact wording or the claim is visibly framed as internal/demo copy.
- Any expansion/global-presence phrasing that implies U.S. franchising or future locations unless approved.

## Menu chapter matrix

### Hot Bar

Captured items:

- Chinese Hot Pot Soup — `$8.99`
- Tuscan Tomato Soup — `$8.99`

Safe preview treatment:

- Category-level: `Hot Bar starters and soups`.
- Do not lead the homepage with this chapter; it is useful for menu completeness but not the strongest Bamzi hero proof.

### Indian Street Food

Captured items:

- Khasta Kachori Chaat — `$12.99`
- Avocado Dahi Puri — `$12.99`
- Parmesan Cheese Pav Bhaji — `$14.99`

Safe preview treatment:

- Strong homepage/menu chapter after confirmation.
- Good `CategoryStrip` or first menu-list chapter.
- Do not publish prices until confirmed.
- Avoid saying “signature” unless approved; “street-food-inspired” is safer.

### First Plate — Veg

Captured items include:

- The Gossip Platter — `$14.99`
- TSK Palak Chaat — `$16.99`
- The Dhokla Fondue — `$16.99`
- Thecha Paneer Tikka — `$18.99`
- Rajwadi Paneer Tikka — `$18.99`
- Cheese Melt Tikki — `$16.99`
- Tandoor Ke Phool — `$16.99`
- Cheese Corn Triangles — `$16.99`
- Ruby Peanut Tikki — `$16.99`
- Chilli Paneer Sambousek — `$16.99`

Safe preview treatment:

- Strong curated menu proof: `First plates, tandoor, and modern vegetarian creations`.
- Use item names only after currentness confirmation.
- If unconfirmed, use category labels and full-menu link.

### First Plate — Non Veg

Captured items include:

- Punjabi Kukkad Tikka — `$18.99`
- Chicken Lollipop — `$18.99`
- Makhmali Chicken Tikka — `$18.99`
- Murgh Sufiyani Seekh — `$18.99`
- Nawabi Lamb Chop Tajdar — `$21.99`
- Mutton Ghee Roast — `$19.99`
- Peri-Peri Prawns — `$19.99`

Safe preview treatment:

- Strong for Bamzi dinner drama and menu breadth.
- Lamb chops / prawns / tikka are useful future hero/menu references after confirmation.
- Do not overstate as “royal mains” if used in first-plate context; keep chapter accurate.

### Indo-Chinese Plate

Captured items:

- Schezwan Manchurian — `$15.99`
- Tandoori Veg Momo — `$15.99`
- Tandoori Chicken Momo — `$15.99`
- Chilli Chicken — `$18.99`

Safe preview treatment:

- Good secondary menu chapter showing global/Indo-Chinese breadth.
- Avoid overusing this chapter in hero because it could blur the premium modern-Indian positioning.

### Main Plate — Veg

Captured items include:

- Burrata Cheese Makhani — `$23.99`
- Bollywood Khoya Kaju Masala — `$23.99`
- Patiala Tawa Paneer — `$22.99`
- Subz Bahar Qualia — `$22.99`
- Makke Te Paneer Di Bhurji — `$22.99`
- #TSKFIED Paneer Butter Masala — `$23.99`
- Lucknowi Matka Paneer — `$25.99`
- Green Cheese Butter Masala — `$22.99`
- Lehsuni Palak Paneer — `$22.99`

Safe preview treatment:

- Use for “royal mains and modern vegetarian plates” after menu confirmation.
- Burrata Cheese Makhani and #TSKFIED Paneer Butter Masala are strong fusion/name proof, but currentness must be confirmed.
- Do not publish prices until confirmed.

### Main Plate — Non Veg

Captured items:

- #TSKFIED Butter Chicken #Delhi Style — `$25.99`
- Chicken Chettinad — `$25.99`
- Nalli Gosht Ki Nihari — `$26.99`
- Indian Fish Curry — `$24.99`
- Kadhai Prawns Curry — `$25.99`

Safe preview treatment:

- Strong primary menu-list section after confirmation.
- Butter Chicken, Nihari, Fish Curry, and Prawns Curry can support “royal mains” copy if current.
- Do not imply these are best-sellers without owner/review proof approval.

### Junior Plate

Captured items:

- French Fries — `$4.99`
- Garlic Bread — price appears near this section and must be verified
- Chicken Pops — `$12.99`
- TSK Pasta — `$15.99`

Safe preview treatment:

- Keep off homepage unless owner wants family/kids emphasis.
- Useful for full menu, not core Bamzi narrative.

### Comfort Plate

Captured items:

- Jeera Rice — `$8.99`
- TSK Dum Veg Biryani — `$22.99`
- Awadhi Gosht Biryani — `$24.99`
- Chicken Tikka Biryani — `$23.99`
- Dal Tadka — `$13.99`
- Dal Makhani — `$15.99`

Safe preview treatment:

- Strong for menu breadth and familiar anchors.
- Use biryani/dal as supporting proof, not the whole concept.
- Prices require confirmation.

### Dessert Bar

Captured items:

- Gulab Jamun Flambé — `$24.99`
- Kesar Mango Rasmalai — `$19.99`
- Sizzling Brownie with Chocolate Sauce — `$22.99`
- Chef Aanal’s Autograph Dessert — `$34.99`

Safe preview treatment:

- Very strong Bamzi “dessert theatre” proof after confirmation.
- Gulab Jamun Flambé and Chef Aanal’s Autograph Dessert are high-value narrative items, but prices/currentness and Chef Aanal naming must be confirmed.
- Do not use table-side/flambé imagery unless rights/currentness confirmed.

### Bread Bar / At a Glance

Captured items include roti, naan, kulcha, chilli cheese naan, papad, masala papad, onion laccha, green salad, raita, masala chaas, mango lassi, dry fruit lassi, water, soft drinks, sparkling water.

Safe preview treatment:

- Useful for full menu completeness and supporting “bread bar / lassi” details.
- Do not make this a homepage priority.

## Chef/story claim matrix

| Claim | Source status | Preview rule |
| --- | --- | --- |
| Chef Aanal Kotak is founder/owner | Official chef page | Owner confirm exact role/title before publishing |
| Started cooking journey at 12 | Official chef page | Yellow — use only after owner confirms bio wording |
| Inspired by royal kitchens | Official chef page | Yellow — good story cue, confirm wording |
| Personally creates all spices for The Secret Kitchen | Official chef page | Yellow/red — powerful claim, confirm before hero/about use |
| Quote about food as experience/journey | Official chef page | Yellow/red — use exact quote only if approved |
| Awards list | Official chef page | Red — do not publish without exact permissions/currentness |
| “Best Indian Restaurant Chain…” etc. | Official chef page | Red — permission/currentness-sensitive |
| Global presence India/Australia/Canada/USA | Official/public materials | Yellow/red — confirm exact wording and whether U.S. debut framing is preferred |

## Recommended safe homepage wording before confirmations

If an internal preview is authorized before owner confirmations, use safer category-level language:

- `Modern Indian fine dining arrives in Schaumburg.`
- `A chef-led dinner experience built around spice, story, and celebration.`
- `Reserve dinner, explore the menu, and plan your visit.`
- `From street-food sparks to tandoor, royal mains, and dessert theatre.`
- `Menu details and final imagery are pending owner confirmation.`

Avoid:

- `Award-winning chef/restaurant`.
- `Best Indian restaurant`.
- `Chef Aanal personally creates all spices` unless approved.
- Direct review quotes or Google rating.
- Published prices before confirmation.
- Private dining capacities/packages before confirmation.

## Builder rules for `bamzi-01`

- Remove or repurpose fake blog/news cards unless real approved press/news exists.
- Support hiding prices in menu-list components if prices are not confirmed.
- Keep full-menu link visible even when homepage menu is curated.
- Use exact item names only when menu currentness is confirmed.
- Keep awards/logos out of the homepage by default.
- Chef/story section must be owner-approved before public preview.
- Private dining should be inquiry-only unless owner provides details.

## QA checklist for future preview

Fail the preview if it includes:

- Unsupported awards or “award-winning” language.
- Google rating/review snippets without approval.
- Fake or outdated prices.
- Invented menu items/descriptions.
- Unconfirmed lunch service.
- Unconfirmed private dining capacities/packages/policies.
- Stock/scraped images presented as restaurant-owned.
- A generic Indian restaurant tone instead of Bamzi cinematic modern Indian dining.

## Verdict

The menu and chef/story content are strong enough to power a sellable Bamzi preview, but only with strict claim gating. The future build should use category-level menu storytelling until owner confirmation unlocks exact items, prices, awards, Chef Aanal wording, private dining details, and media rights.
