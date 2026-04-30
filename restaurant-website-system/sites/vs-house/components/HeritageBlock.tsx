// HeritageBlock — Audit Principle 3.2 + 3.3 fix. The blockbuster.
// "Three generations of Vu-family restaurants on Bedford-Euless Road since 1982."
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

export function HeritageBlock() {
  return (
    <section className="relative bg-bg-cream py-24 lg:py-32 overflow-hidden">
      {/* Decorative stamp */}
      <div className="absolute top-12 right-0 lg:right-20 select-none pointer-events-none opacity-[0.04]" aria-hidden>
        <div className="font-display text-[200px] lg:text-[320px] leading-none text-text-dark">
          1982
        </div>
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="max-w-[760px]">
          <ScrollReveal>
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              The Vu Family · Since 1982
            </p>
            <h2 className="font-display text-section-h2 text-text-dark mb-8 leading-[1.05] tracking-tight">
              {content.heritage.title}
            </h2>
            <p className="text-text-muted text-lg leading-[1.7] mb-12">
              {content.heritage.intro}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 mt-16">
          {content.heritage.timeline.map((entry, idx) => (
            <ScrollReveal key={entry.year} delay={idx * 0.08}>
              <article className="relative pt-8 border-t-2 border-accent/30">
                <span className="absolute -top-1 left-0 inline-block w-3 h-3 rounded-full bg-accent" aria-hidden />
                <div className="font-display text-5xl lg:text-6xl text-accent mb-4 tracking-tight">
                  {entry.year}
                </div>
                <h3 className="font-display text-2xl text-text-dark mb-3 leading-snug">
                  {entry.title}
                </h3>
                <p className="text-text-muted text-body leading-relaxed">
                  {entry.body}
                </p>
                {entry.tag === 'PENDING_OWNER_SIGNOFF' && (
                  <span className="mt-4 inline-block text-[10px] tracking-widest uppercase text-accent/60 font-body">
                    · pending family signoff
                  </span>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Designer pull */}
        <ScrollReveal>
          <div className="mt-20 lg:mt-24 grid lg:grid-cols-[1fr_auto] items-end gap-8 pt-12 border-t border-border-light">
            <div>
              <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-3">
                The Room
              </p>
              <p className="font-display text-2xl lg:text-3xl text-text-dark leading-snug max-w-[680px]">
                {content.heritage.designer.quote}
              </p>
            </div>
            <div className="text-text-muted text-bodySm">
              <div className="font-body uppercase tracking-widest text-eyebrow text-text-dark">
                Designed by
              </div>
              <div className="font-display text-xl text-text-dark mt-1">
                {content.heritage.designer.name}
              </div>
              <div className="text-text-muted text-bodySm">{content.heritage.designer.credit}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
