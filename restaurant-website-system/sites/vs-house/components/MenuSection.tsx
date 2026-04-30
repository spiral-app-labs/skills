// MenuSection — Audit Principle 1.3 + 5.4 fix.
// Real text menu by anchor section. Replaces the PNG carousel.
// Each section has anchor=pho|small-plates|mains|cocktails|happy-hour
// so SignatureRow tiles can link in.
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

export function MenuSection() {
  return (
    <section className="bg-bg-cream pt-24 lg:pt-32 pb-32">
      <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
        {/* Section nav */}
        <nav className="sticky top-20 z-20 -mx-5 lg:-mx-10 px-5 lg:px-10 py-4 mb-12 bg-bg-cream/95 backdrop-blur border-b border-border-light">
          <div className="flex flex-wrap gap-4 lg:gap-6 text-eyebrow uppercase tracking-widest font-body">
            {content.menu.map((s) => (
              <a
                key={s.anchor}
                href={`#${s.anchor}`}
                className="text-text-dark hover:text-accent transition"
              >
                {s.heading}
              </a>
            ))}
          </div>
        </nav>

        {content.menu.map((section, sIdx) => (
          <section
            key={section.anchor}
            id={section.anchor}
            className="scroll-mt-32 pt-16 lg:pt-24 first:pt-0"
          >
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-4">
                  {String(sIdx + 1).padStart(2, '0')} · {section.heading}
                </p>
                <h2 className="font-display text-section-h2 text-text-dark leading-[1.05] tracking-tight">
                  {section.heading}
                </h2>
                <p className="mt-3 text-text-muted text-body">{section.sub}</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-[920px] mx-auto">
              {section.items.map((item) => (
                <article key={item.name} className="border-b border-border-light pb-5">
                  <div className="menu-dot-row">
                    <h3 className="font-display text-menu-item text-text-dark whitespace-nowrap">
                      {item.name}
                    </h3>
                    <span className="menu-dot-fill" aria-hidden />
                    <span className="font-body text-price text-text-dark whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-text-muted text-bodySm leading-snug">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
