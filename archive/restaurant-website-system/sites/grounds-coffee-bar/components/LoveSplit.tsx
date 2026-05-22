import Image from 'next/image';
import { content } from '../content.example';
import { PillButton } from './PillButton';
import { BrandWordmark } from './BrandWordmark';

/**
 * LoveSplit — "We love coffee" 2-column photo + prose + CTA brand-story block
 * (audit §3 bot band). Photo left, copy right, with a small wordmark above h3.
 *
 * Variant candidate axis: photo-side L/R, with/without wordmark, with/without
 * CTA. Promote after 4th template uses similar split.
 */
export function LoveSplit() {
  const l = content.love;
  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="bg-card rounded-card p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border border-divider/50">
          <div className="relative w-full aspect-[4/3] md:aspect-[5/6] rounded-photo overflow-hidden">
            <Image
              src={l.image}
              alt={l.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <BrandWordmark size="sm" />
            <h3 className="font-sans text-section-h2 text-ink">{l.heading}</h3>
            {l.body.map((p, i) => (
              <p key={i} className="text-body-lg text-ink">
                {p}
              </p>
            ))}
            <PillButton href={l.cta.href} variant="solid" className="mt-2">
              {l.cta.label}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
