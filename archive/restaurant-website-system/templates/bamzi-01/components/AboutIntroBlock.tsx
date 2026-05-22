import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * AboutIntroBlock — two-part stat block: big number (30+) left + mission copy + head-chef callout right.
 */
export function AboutIntroBlock() {
  const i = content.about.immerse;
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-[auto_1fr_auto] gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="font-display text-[96px] leading-none text-accent">{i.statBig}</div>
          <div className="text-eyebrow text-text-muted mt-2">{i.statLabel}</div>
        </div>
        <div>
          <EyebrowDotLabel className="mb-3">{i.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{i.title}</h2>
          <p className="mt-4 text-body text-text-muted max-w-md">{i.body}</p>
        </div>
        <div className="flex items-center gap-4 min-w-[220px]">
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
