// PressStrip — continuous-scroll marquee of press + ratings.
// Per restaurant-fork-improvement §1.2.
import { content } from '../content';

const ITEMS = [
  ...content.press.map((p) => ({ source: p.source, quote: p.quote })),
  { source: 'Designer', quote: 'Hatsumi Kuzuu — recognized Dallas restaurant designer' },
  { source: 'Facebook', quote: '96% recommended · 16 reviews' },
];

export function PressStrip() {
  return (
    <section className="bg-bg-darker py-10 lg:py-12 border-y border-border-dark overflow-hidden">
      <p className="text-center text-eyebrow text-gold font-body uppercase tracking-[0.4em] mb-8">
        As Featured In
      </p>

      <div className="group relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-darker to-transparent z-10" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-darker to-transparent z-10" aria-hidden />

        <div className="flex w-max motion-safe:animate-[marquee_42s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...ITEMS, ...ITEMS].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 lg:px-12 border-r border-border-dark/60 shrink-0"
              style={{ minHeight: 56 }}
            >
              <span className="font-display text-xl lg:text-2xl text-text-white">
                {item.source}
              </span>
              <span className="text-bodySm text-text-muted-dark max-w-[260px] truncate">
                {item.quote}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
