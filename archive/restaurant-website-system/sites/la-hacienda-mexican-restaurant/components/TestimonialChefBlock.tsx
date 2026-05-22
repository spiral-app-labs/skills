import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * TestimonialChefBlock — dark section with pull-quote left + chef photo right.
 */
export function TestimonialChefBlock() {
  const t = content.testimonial;
  return (
    <section className="bg-bg-dark text-text-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel tone="light" className="mb-6">{t.eyebrow}</EyebrowDotLabel>
          <blockquote className="font-display text-section-h3 text-text-white leading-snug">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8 pt-6 border-t border-border-dark max-w-xs">
            <div className="text-eyebrow text-text-muted-dark">{t.attribution.role}</div>
            <div className="font-display text-[24px] text-text-white mt-1">{t.attribution.name}</div>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-card overflow-hidden">
          <Image src={t.chefImage} alt={t.chefAlt} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
