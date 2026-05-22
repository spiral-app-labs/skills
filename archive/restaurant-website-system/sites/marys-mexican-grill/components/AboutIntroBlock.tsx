import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * AboutIntroBlock — two-part stat block: big number (30+) left + mission copy + head-chef callout right.
 */
export function AboutIntroBlock() {
  const i = content.about.immerse;
  return (
    <section className="bg-bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[auto_1fr_auto] md:gap-10 md:items-center">
        <div className="text-center md:text-left">
          <div className="font-display text-[96px] leading-none text-accent">{i.statBig}</div>
          <div className="text-eyebrow text-text-muted mt-2">{i.statLabel}</div>
        </div>
        <div>
          <EyebrowDotLabel className="mb-3">{i.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{i.title}</h2>
          <p className="mt-4 text-body text-text-muted max-w-md">{i.body}</p>
        </div>
        <div className="flex items-center justify-center gap-4 md:min-w-[220px] md:justify-start">
          <div className="relative h-[72px] w-[72px] rounded-full overflow-hidden">
            <Image src={i.chefImage} alt={i.chefName} fill sizes="72px" className="object-cover" />
          </div>
          <div>
            <div className="text-eyebrow text-text-muted">{i.chefRole}</div>
            <div className="font-display text-[20px] text-text-dark">{i.chefName}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
