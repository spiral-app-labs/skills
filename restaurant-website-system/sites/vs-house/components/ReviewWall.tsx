// ReviewWall — Audit Principle 3.1 fix.
// 9 verbatim reviews, anonymized to first names. Source attribution per quote.
import { content } from '../content';
import { ScrollReveal } from './ScrollReveal';

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="inline-flex gap-[2px] text-accent" aria-label={`${n} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < n ? '' : 'opacity-25'}>
          ★
        </span>
      ))}
    </span>
  );
}

export function ReviewWall() {
  return (
    <section className="bg-bg-cream py-24 lg:py-32">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 mb-12 lg:mb-16 items-end">
          <div className="max-w-[680px]">
            <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
              In their words
            </p>
            <h2 className="font-display text-section-h2 text-text-dark leading-[1.05] tracking-tight">
              The room earns five stars. The service makes it home.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-text-dark">
            <Rating num={content.ratings.google.stars}    label="Google"    count={content.ratings.google.count} />
            <Rating num={content.ratings.opentable.stars} label="OpenTable" count={content.ratings.opentable.count} />
            <Rating num={content.ratings.rji.stars}       label="Restaurantji" count={content.ratings.rji.count} />
            <Rating num={content.ratings.yelp.stars}      label="Yelp"      count={content.ratings.yelp.count} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {content.reviews.map((r, idx) => (
            <ScrollReveal key={idx} delay={(idx % 3) * 0.08}>
              <article className="relative bg-bg-white border border-border-light p-7 lg:p-8 h-full flex flex-col">
                <Stars n={r.stars} />
                <blockquote className="mt-4 text-text-dark text-body leading-[1.65] flex-1 font-display text-[19px]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 pt-5 border-t border-border-light flex items-center justify-between text-bodySm">
                  <span className="text-text-dark">{r.author}</span>
                  <span className="text-text-muted text-eyebrow tracking-widest">{r.source}</span>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rating({ num, label, count }: { num: number; label: string; count: number }) {
  return (
    <div className="text-right">
      <div className="font-display text-3xl lg:text-4xl text-text-dark leading-none">
        {num.toFixed(1)} <span className="text-accent">★</span>
      </div>
      <div className="mt-1 text-text-muted text-eyebrow tracking-widest">
        {label} · {count.toLocaleString()}
      </div>
    </div>
  );
}
