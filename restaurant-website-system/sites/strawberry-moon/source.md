# Strawberry Moon build notes

## Route

- Template route: `velvet-shaker-01`
- Archetype modifier: Bramble warmth layered onto Velvet Shaker's dark-modernist structure
- Site folder: `restaurant-website-system/sites/strawberry-moon`

## Real facts used

- Name: Strawberry Moon
- Address: 204 S Main St, Wauconda, IL 60084
- Phone: 847-865-5151
- Email: thomasmalik830@gmail.com
- Official site: <https://strawberrymoonmartinisandmore.weebly.com/>
- Events page: <https://strawberrymoonmartinisandmore.weebly.com/events.html>
- Official homepage wording used directly: martinis, wine and more; delicious nibbles; decadent desserts; live music; first-come, first-served seating; Tuesday-Saturday open 4 pm.
- Google profile evidence used directly: 4.7 rating, 214 reviews, $20-30, category Bar.
- Review packet proof used in the build: weekly martinis, Strawberry Moon martini, dirty martini, Stormy Night martini, wine and cheese fondue, appetizers/noshes, pretzel nuggets, friendly knowledgeable bartenders, Tom's hospitality, two levels with a quiet upstairs, and live music three nights a week.

## Conversion choices

- Primary conversion is direct call, because that is the clearest low-friction path supported by the evidence.
- Secondary conversion is email, directions, the official site, and the official events page.
- I did not invent reservations, online ordering, private events, awards, or exact nightly closing hours.
- The menu page stays descriptive rather than price-driven because the captured evidence supports categories and standout items, not a clean verified full price list.

## Design route

- Preserved Velvet Shaker's two-token, editorial, wordmark-led structure.
- Warmed the palette slightly toward oxblood and blush-cream so the site feels less like a hotel bar and closer to Strawberry Moon's red-door date-night mood.
- Used official-site image URLs where available instead of generic stock so the preview feels tied to the real venue.
- Replaced the template's fake contact form with honest handoff CTAs and factual proof bullets.
- Removed the template's live open-status dependency because Strawberry Moon's official site only confirms opening day/time, not full close times.

## Implementation notes

- Replaced `content.example.ts` with a Strawberry Moon-specific `content.ts`.
- Removed `next/font/google` usage so local verification does not depend on fetching fonts over the network.
- Updated the menu model to use right-column metadata tags instead of fake prices.
- Kept all audit and evidence artifacts in place without deletion or overwrite.

## Remaining factual gaps

- The official scrapes captured only the homepage and events page, so the preview does not attempt a complete verified martini-by-martini menu.
- The official site confirms `Tuesday - Saturday 4 pm` but not complete day-by-day closing hours, so the preview avoids live open/closed logic.
