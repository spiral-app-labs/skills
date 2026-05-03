import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * TestimonialChefBlock — repurposed: experience-led section paired with one
 * short anonymous review pull-quote. Eyebrow is experience-themed (drawn from
 * what guests actually say), not "Verbatim — Public Reviews." No name shown.
 */
export function TestimonialChefBlock() {
  const t = content.testimonial;
  return (
    <section className="bg-bg-dark text-text-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel tone="light" className="mb-6">{t.eyebrow}</EyebrowDotLabel>
          <blockquote className="font-display text-[24px] md:text-[32px] leading-snug italic text-text-white">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="mt-5 font-body text-[11px] uppercase tracking-[0.18em] text-accent">
            Google Review
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-card overflow-hidden">
          <Image src={t.chefImage} alt={t.chefAlt} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
