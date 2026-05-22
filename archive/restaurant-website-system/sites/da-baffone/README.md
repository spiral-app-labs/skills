# Da Baffone Cucina Italiana

Two-version pitch fork built from `gusto-01`.

- `/` — Scrollable Gusto: safer long-scroll homepage for the owner pitch.
- `/cinematic` — Cinematic Gusto: compact aesthetic-first version.
- `/menu`, `/about`, `/contact` — shared route set.

## Run

```bash
npm install
npm run typecheck
PORT=3114 npm run dev
```

## Notes

- Primary conversion is phone-first: `815-893-6149`.
- No OpenTable embed in v1; the current OpenTable listing does not appear bookable.
- Hours are provisional and should be owner-verified before launch.
- First-party assets live in `public/images/da-baffone/`.
