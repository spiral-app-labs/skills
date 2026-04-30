// PressStrip — Audit Block 2 External Trust + Block 4 reason #2.
// "Four press-grade signals justify a press strip below the hero."
import { content } from '../content';

export function PressStrip() {
  return (
    <section className="bg-bg-darker py-10 lg:py-12 border-y border-border-dark">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <p className="text-center text-eyebrow text-gold font-body uppercase tracking-[0.3em] mb-8">
          As Featured In
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {content.press.map((p) => (
            <a
              key={p.source}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="text-center group"
            >
              <div className="text-text-white font-display text-xl lg:text-2xl group-hover:text-gold transition leading-tight">
                {p.source}
              </div>
              <div className="mt-2 text-text-muted-dark text-bodySm leading-snug">
                {p.quote}
              </div>
              {p.year && (
                <div className="mt-1 text-text-muted-dark/60 text-eyebrow tracking-widest">
                  {p.year}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
