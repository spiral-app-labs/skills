# Antojitos Mexicanos La Fonda — build/typecheck evidence

Date: 2026-05-04

## Commands run

```bash
npm install
npm run typecheck
npm run build
```

## Results

- `npm install`: completed successfully; npm reported 2 dependency audit findings inherited from the Next 14.2.15 template dependency set.
- `npm run typecheck`: completed successfully after replacing the generated `content.example.ts` path with restaurant-specific `content.ts` and resolving readonly content typing.
- `npm run build`: completed successfully.

## Build output summary

```text
Route (app)                              Size     First Load JS
┌ ○ /                                    37.3 kB         138 kB
├ ○ /_not-found                          875 B          88.1 kB
├ ○ /about                               174 B           101 kB
└ ○ /contact                             2.68 kB         103 kB
+ First Load JS shared by all            87.2 kB
○  (Static)  prerendered as static content
```
