# Dino's Pizza & Pasta build notes

## Route

- Template route: `pepper-01`
- Archetype fit: warm, casual, neighborhood pizza with direct call/menu clarity
- Site folder: `restaurant-website-system/sites/dino-s-pizza-pasta`

## Real facts used

- Name: Dino's Pizza & Pasta
- Address: 6 Miller Rd, Lake in the Hills, IL 60156
- Phone: (847) 658-3300
- Official site: <https://www.dinospizzalith.com/>
- Official menu: <https://www.dinospizzalith.com/menu/>
- Official about page says Dino's is a small family owned and operated restaurant in old town Lake in the Hills.
- Search/Yelp snippet evidence in the audit supports family owned and operated since 1997.
- Official menu proof used in the build: made-from-scratch crispy thin crust, slices, double dough, old fashioned in-the-pan pizza, stuffed Chicago-style deep dish, gluten-free 10 inch crust, pasta dinners with a garlic stick, sandwiches on garlic bread, and beer/wine with local craft plus domestic and select imports.
- Restaurantji proof from the audit used in the build: 4.3 rating from 142 ratings, plus favorites including Wise Guy Sandwich, Lasagna Meat Sauce, Mozzarella Sticks, Chicken Fingers, Beer Nuggets, Italian Beef, Meatball, and Sausage.
- Hours used exactly from the audit: Monday closed, Tuesday closed, Wednesday/Thursday/Sunday 4 PM to 9 PM, Friday/Saturday 4 PM to 10 PM.

## Conversion choices

- Primary CTA is `tel:+18476583300` because direct call is the cleanest confirmed path.
- Secondary conversion links are official menu, directions, official site, and email.
- I did not invent a first-party online ordering URL. The preview notes that the official site mentions DoorDash, Grubhub, and Uber Eats without a single clean first-party order flow.
- I kept the `pepper-01` rhythm, but swapped the fake deal and newsletter sections into real menu-proof, visit-proof, and direct-action blocks.

## Pitch hook preserved

- The audit's homepage hook is still true and documented here: the current official homepage exposes template/development debris including `AVIATOR`, `LONDON`, and `/menu-aviator`, while underselling the actual pizza/menu story.
- I kept that point in the internal notes, not as the main public-facing message on the preview.

## Implementation notes

- Replaced the placeholder `content.example.ts` model with a Dino-specific `content.ts`.
- Removed `next/font/google` usage so local build verification does not depend on external font downloads.
- Adapted the template's image-heavy cards into text-first cards to avoid fake or unrelated placeholder photography.
- Updated the contact page to use real address, phone, menu, directions, and hours instead of the template's multi-city blocks and generic form.
- Updated the map embed to support address-query mode so the build does not depend on approximate coordinates.

## Remaining blockers

- Browser screenshot and live visual evidence remain blocked by the host browser limitation already recorded in the checklist.
- This is a first preview only; no deploy URL or screenshot packet is attached yet.
