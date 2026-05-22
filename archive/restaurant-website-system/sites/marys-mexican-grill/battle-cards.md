# Mary's Mexican Grill Battle Cards

## One-Sentence Positioning
Mary's already has the public proof, food specificity, and Woodstock Square location people respond to; this preview simply makes the owned site sell those strengths instead of sending guests to a vendor setup page and the wrong phone path.

## Owner Talking Points
- The current domain does not currently behave like Mary's website; the audit found vendor setup language, no real menu path, no food proof, and a setup phone CTA instead of a guest action path.
- Mary's public demand is already strong enough to sell: Google evidence captured on 2026-05-04 shows a 4.8 rating with 604 reviews, and the highest-rated written packet reinforces food, service, value, and repeat-visit confidence.
- The preview is intentionally menu-first and conversion-oriented: `View Menu`, `Order Online`, `Call Mary's`, and `Get Directions` are visible in the first screen instead of forcing guests to hunt.
- The copy stays specific to Mary's actual review language: tacos al pastor, tamales, mole, ceviche, chips, salsa, guacamole, shrimp, and Woodstock Square all come from the local source pack.
- This is not a fake direct-order promise. The current truthful order handoff remains the public DoorDash listing until the owner confirms a canonical direct order path.
- The preview is also safer on trust: it keeps the phone conflict visible instead of burying it, with `(815) 337-2303` treated as the current public listing and `(815) 923-5240` flagged as an older indexed conflict.
- The chosen `bamzi-01` archetype gives Mary’s more warmth, motion, and food-forward energy without miscasting the restaurant as upscale fine dining.

## Likely Objections And Concise Answers
- "We already get customers from Google and DoorDash."
  Answer: Exactly, and the battle here is making the owned domain stop leaking that intent before guests click away; the preview turns the first tap into menu, call, order, and directions instead of setup copy.
- "I don't want the site to feel fake or overpolished."
  Answer: It does not invent owner story, awards, menu items, provider claims, or direct-order capabilities; every selling point is tied back to the audit, reviews, and current public listings.
- "We are not a fancy restaurant."
  Answer: The register stays casual, affordable, and neighborhood-local; the preview sells tacos, tamales, fresh salsa, service warmth, and Woodstock Square convenience, not reservations or fine-dining theater.
- "I am worried about wrong phone or hours."
  Answer: The materials explicitly call out those unresolved facts and ask for confirmation before launch, which is safer than leaving the current mismatch unaddressed.
- "What if we do not have final photos yet?"
  Answer: The preview already works as a sales story with illustrative placeholders and public-proof copy, and it clearly asks for owner-approved food/exterior photos before any final delivery claim.
- "Why change the site if the food already sells itself?"
  Answer: Because the current owned path is not letting the food sell itself at all; guests land on a vendor page with no Mary's identity, no menu, and no trustworthy next action.
- "Why keep DoorDash in the story?"
  Answer: Because it is the verified public order path today; removing it before a confirmed replacement would create a fake conversion story.

## Proof And Evidence To Cite
- Audit of the current owned-site failures: `restaurant-website-system/sites/marys-mexican-grill/audit.md`
- Source truth pack for phone, hours, review counts, and dish/menu hooks: `restaurant-website-system/sites/marys-mexican-grill/source.md`
- Review theme summary for service, value, dishes, and Square location: `restaurant-website-system/sites/marys-mexican-grill/google-reviews-themes.md`
- Highest-rated Google review packet with concrete quote support: `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.md`
- Build proof for the current preview and successful local build state: `restaurant-website-system/sites/marys-mexican-grill/build-evidence-2026-05-04.md`
- Improvement pass proof for mobile and conversion tightening: `restaurant-website-system/sites/marys-mexican-grill/improvement-evidence-2026-05-04.md`
- Top three implemented improvements and before/after framing: `restaurant-website-system/sites/marys-mexican-grill/top-3-improvements-2026-05-04.md`
- Concierge proof showing truthful menu/order/call/directions behavior: `restaurant-website-system/sites/marys-mexican-grill/concierge-evidence-2026-05-04.md`
- Pitch framing for the owner narrative: `restaurant-website-system/sites/marys-mexican-grill/pitch-doc.md`

## Known Risks / Caveats / Do-Not-Overclaim
- Do not claim the canonical phone number is fully confirmed; keep `(815) 337-2303` as the public listing number and note the older `(815) 923-5240` conflict until the owner resolves it.
- Do not claim the preview replaces a verified direct-order system; `Order Online` currently points to the public DoorDash listing.
- Do not claim final hours are owner-confirmed even though public evidence is consistent enough for preview copy.
- Do not claim owner story, family history, awards, or licensed production photography because those facts were not verified in the research pack.
- Do not claim Mission Control was synced remotely in this runtime; agency auth is missing, so writeback remains local-only.

## Demo Path
1. Open the homepage in [`app/page.tsx`](./app/page.tsx) and point out the first-screen fix: Mary's name, Woodstock Square framing, review proof, and menu/order/call/directions actions replace the current vendor setup page.
2. Call out the exact first-screen proof and operational language in [`content.example.ts`](./content.example.ts): 4.8 rating, 604 reviews captured on May 4, 2026, public-hours note, and the explicit phone-conflict note.
3. Scroll into the review carousel and featured menu sections to show how Google-review language was converted into seller-ready proof around tacos, tamales, mole, chips, salsa, guacamole, shrimp, and service warmth.
4. Jump to the menu page and contact/visit paths to show the owned site now supports the practical questions guests actually have tonight: what to eat, where to go, when to call, and how to order.
5. End by contrasting this preview with the audited current-state evidence in `audit.md`: the owner can see the exact before/after delta without any invented claims.

## Strongest One-Sentence Close
If Mary's already wins guests with the food and service, the owned site should stop acting like a vendor setup page and start acting like the easiest place to choose dinner on Woodstock Square.

## Next Verification Questions For The Owner
- Which phone number should be treated as canonical for launch: `(815) 337-2303` or `(815) 923-5240`?
- Should `Order Online` keep pointing to DoorDash for now, or is there a preferred direct ordering URL we can verify?
- Are the public hours in `source.md` still correct for every day, especially Sunday closing time?
- Which food, exterior, interior, or team photos can be approved for production use on the live site?
