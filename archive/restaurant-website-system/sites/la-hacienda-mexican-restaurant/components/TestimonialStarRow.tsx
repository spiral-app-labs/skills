import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * TestimonialStarRow — 3-column stars + quote + avatar-name-role card grid.
 * Strong shared candidate.
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
          <article key={e.name} className="bg-bg-white rounded-card p-6 border border-border-light">
            <div className="text-accent text-lg mb-3" aria-label={`${e.stars} stars`}>{'★'.repeat(e.stars)}</div>
            <blockquote className="font-display text-[18px] text-text-dark leading-snug">&ldquo;{e.quote}&rdquo;</blockquote>
            <div className="mt-5 flex items-center gap-3">
              <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden">
                <Image src={e.avatar} alt={e.name} fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <div className="font-display text-[16px] text-text-dark">{e.name}</div>
                <div className="text-eyebrow text-text-muted">{e.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
