import { content } from '../content.example';

// WordmarkEcho
// — Full-width display wordmark at page bottom. Every page gets one.
// — Pairs with the small nav wordmark at top to create the bookend pattern.
// — Size follows the 102px display token but clamps down for mobile/narrow.
// — We use a container-width font-size trick so it reads visually huge on wide screens
//   (scales up to ~16vw) while staying legible on mobile.
export function WordmarkEcho() {
  return (
    <section aria-hidden="true" className="w-full pt-16 md:pt-32 pb-10 md:pb-16 overflow-hidden">
      <div className="mx-auto max-w-shell px-5 md:px-10">
        <div
          className="text-ink leading-[1.0] font-medium"
          style={{ fontSize: 'clamp(56px, 16vw, 240px)', letterSpacing: '-0.02em' }}
        >
          {content.brand.name}
        </div>
      </div>
    </section>
  );
}
