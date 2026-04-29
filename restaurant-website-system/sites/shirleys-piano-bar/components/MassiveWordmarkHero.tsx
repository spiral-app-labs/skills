import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

// MassiveWordmarkHero — full-viewport hero with the brand wordmark filling
// the top region and tagline+nav (left) + LiveOpenStatus (right) anchored
// at the bottom. Mirrors the Framer source's actual home hero pattern
// (frame-002 in /tmp/vs-vid). The original recreation punted the display
// moment to a small h1 + footer wordmark echo; the source actually uses the
// massive wordmark AS the hero. We keep the footer echo too — that's the
// genuine bookend (top + bottom).
//
// Wordmark sizing: clamp(72px, 17vw, 240px) — the source reads ≈220–260px
// at 1440px viewport. -0.025em tracking for the optical compression at scale.
//
// Min-height accounts for the small nav above; tweak the offset if the nav
// padding changes.

export function MassiveWordmarkHero() {
  const b = content.brand;
  return (
    <section className="w-full min-h-[calc(100vh-72px)] flex">
      <div className="mx-auto max-w-shell px-5 md:px-10 w-full flex flex-col pt-6 md:pt-10 pb-10 md:pb-12">
        {/* Top region: massive wordmark */}
        <div className="flex-1 flex items-start">
          <h1
            className="text-ink leading-[0.92] font-medium m-0"
            style={{ fontSize: 'clamp(72px, 17vw, 240px)', letterSpacing: '-0.025em' }}
          >
            {b.name}
          </h1>
        </div>
        {/* Bottom region: tagline+eyebrow left, live hours right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6 mt-10">
          <div>
            <p className="text-body text-ink/85 leading-snug max-w-md">{b.tagline}</p>
          </div>
          <div className="md:text-right">
            <LiveOpenStatus
              hours={{
                timezone: b.hoursConfig.timezone,
                ranges: [...b.hoursConfig.ranges],
                closures: [...b.hoursConfig.closures],
              }}
              variant="text"
              className="text-body text-ink/70 inline-flex lowercase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
