import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * TestimonialStarRow — 3-column stars + quote + proof-label card grid.
 */
export function TestimonialStarRow() {
  const t = content.menuPage.testimonials;
  return (
    <section className="bg-bg-cream py-24 px-6">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <EyebrowDotLabel className="mb-3">{t.eyebrow}</EyebrowDotLabel>
        <h2 className="font-display text-section-h3 text-text-dark">{t.title}</h2>
      </div>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">
        {t.entries.map((e) => (
          <article key={e.label} className="bg-bg-white rounded-card p-6 border border-border-light shadow-[0_16px_36px_rgba(33,19,14,0.06)]">
            <div className="text-accent text-lg mb-3" aria-label={`${e.stars} stars`}>{'★'.repeat(e.stars)}</div>
            <blockquote className="font-display text-[18px] text-text-dark leading-snug">&ldquo;{e.quote}&rdquo;</blockquote>
            <div className="mt-5 border-t border-border-light pt-4">
              <div className="font-display text-[18px] text-text-dark">{e.label}</div>
              <div className="text-eyebrow text-text-muted">{e.platform}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
