# Port Edward Prospect Site

Forked from `templates/labrisa-01` and localized for Port Edward in Algonquin, Illinois.

## Strategic Shape

- Wordmark: `PORT EDWARD`
- Eyebrow: `Fox River seafood since 1964`
- Primary route: phone-first visit planning
- Secondary route: Toast online ordering
- Commercial paths: seafood dinner, Sunday champagne brunch, holiday brunch, surf-and-turf buffet, Dockside, private events, ticketed events, loyalty, and gift cards

## Pages

- `/`
- `/menu`
- `/visit`
- `/private-events`
- `/events`
- `/about`
- `/contact`

## AI Concierge

The floating concierge is server-routed through `/api/concierge`. Set `ANTHROPIC_API_KEY` in `.env.local` or the deployment environment. The key is never sent to the browser. `ANTHROPIC_MODEL` is optional and defaults to `claude-3-5-haiku-20241022`.

## Notes

The build keeps the useful labrisa service-router structure but replaces the resort register with Fox River heritage seafood: Dockside, Porpoise/Windmill seating, brunch, crab legs, scallops, walleye, lobster, Port Platter, owner/staff warmth, and current seasonal services.
