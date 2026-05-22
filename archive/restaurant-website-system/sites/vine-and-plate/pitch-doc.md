# Vine & Plate Pitch Doc

## 60-Second Read

Vine & Plate is not a broken-website pitch. Their current site already has the right commercial ingredients: reservations, Toast ordering, gift cards, food and drinks menus, specials, wine identity, and public OpenTable proof. The leak is that high-intent guests hit PDFs right when they are deciding whether this is the right wine-and-plates night.

The redesign preserves the working stack and fixes the owned pre-dining path: guests can see the vibe, browse plates and wine prompts on-page, check hours, reserve, order on Toast, buy gift cards, and still open the original PDFs when they need the full current menu.

The secret sauce to echo is not "generic wine bar." It is the easy wine-and-plates decision: a glass, a few shared plates, bottle nights, wine dinners, Vine Club, Off The Vine, Toast, and reservations all belonging to one local Crystal Lake path.

## Call Opener

"I did not rebuild this as a rip-and-replace. Toast stays, your reservation path stays, and the PDFs can stay as fallbacks; I rebuilt the food and wine path so guests can decide before a PDF interrupts them."

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Food and drinks menus are PDF-first. | Menu clicks are highest-intent. On mobile, a PDF adds friction and weakens search/AI readability. | Put a crawlable, mobile-readable menu preview on the site; keep PDFs only as backups or full-menu artifacts. | Added inline plates/wine section and a dedicated `/menu` route with PDF fallbacks. |
| Reservation, Toast, gift cards, menus, and specials compete as separate handoffs. | Guests can choose the wrong next step or leave before seeing enough confidence-building context. | Keep primary commercial actions close to decision moments: hero, menu, hours, and reservation/order surfaces. | Reserve, Toast order, menus, gift cards, hours, and map are visible in the journey, not buried after a Wix route hop. |
| OpenTable proof exists off-site, not in the hero. | Reputation can reduce hesitation, especially for a wine bar where mood and trust matter before booking. | Surface credible third-party proof near the first decision point without overclaiming. | Hero includes "4.7 OpenTable diner rating" as soft credibility from the audit. |
| The wine-program story is scattered. | Wine dinners, bottle nights, Vine Club, Off The Vine, gift cards, and Toast are useful, but they can feel like separate errands. | Turn recurring wine behaviors into one owned pre-visit journey. | Added bottle-night, wine-club, and Off The Vine prompts around the menu and action areas. |
| Menu intent still points mostly to PDFs. | Search engines and AI assistants need a page-native menu path before fallback files. | Point menu discovery to the site first. | Schema `hasMenu` now includes `/menu` before PDF links. |

## What We Fixed

- **Menu friction:** The old highest-intent path opened PDFs. The prototype gives guests a fast food/wine preview, a crawlable `/menu`, and still preserves the original food, drinks, specials, and lunch PDFs.
- **Revenue routing:** Reserve and Toast are not replaced. They are placed at the moments guests are ready: above the fold, beside menu browsing, and on the reservation page.
- **Pre-dining confidence:** The first screen now says "Wine bar, shared plates, bottles to go," shows proof, and makes the wine/shared-plates mood obvious before asking for a decision.
- **Local and commercial basics:** Hours, map, phone, gift cards, Off The Vine, wine dinner, and Instagram are framed as natural next actions instead of scattered secondary pages.
- **Secret sauce:** The copy frames Vine & Plate as the right local path for a glass, shared plates, bottle nights, and wine-program follow-through, not just a place with PDFs.

## Demo Path

1. Show the hero: wine-forward slideshow, Reserve, Toast order, View Menus, and OpenTable proof in the first viewport.
2. Open `/menu`: point out that plates and wine specials are readable on-page, with PDFs still available for operations.
3. Scroll to the menu CTAs: Reserve and Toast sit directly after the food/wine decision, so the prototype improves conversion without replacing their providers.
4. Show hours/map/contact: pre-dining questions are answered before the guest has to call or bounce.

## Do Not Overclaim

- Do not say their current site is broken. The sharper pitch is "working stack, leaky menu path."
- Do not claim the Wine Spectator credential; the audit says it was not verified.
- Capture or ask for a fresh Google review packet before final outreach; current pitch uses website content, OpenTable proof from the audit, and prototype-visible wine-program themes.
- Do not pitch replacing Toast, reservation, gift cards, or PDFs in v1. The value is preserving those tools and improving the path into them.
- OpenTable rating/count can change; use it as "public OpenTable proof" if you do not want to quote the exact 4.7 from the audit.

## Close

"The question I would ask is simple: if someone is deciding where to go tonight on their phone, does the current site make the food, wine, mood, and next step as easy as the restaurant itself deserves?"
