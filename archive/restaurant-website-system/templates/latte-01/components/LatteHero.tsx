import { content } from '../content.example';
import { RatingChip } from './RatingChip';
import { PillButton } from './PillButton';
import { HeroPhotoCarousel } from './HeroPhotoCarousel';

/**
 * LatteHero — centered text hero + rating chip eyebrow + single CTA + 3-photo
 * carousel strip beneath. Cream canvas; photos carry all warmth via the wood
 * staging in the images themselves.
 */
export function LatteHero() {
  const h = content.hero;
  return (
    <section className="w-full bg-canvas pt-10 md:pt-16 pb-16 md:pb-20">
      <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-6">
        <RatingChip
          provider={h.ratingChip.provider}
          stars={h.ratingChip.stars}
          score={h.ratingChip.score}
        />
        <h1 className="font-sans text-hero-h1 text-ink max-w-3xl">{h.h1}</h1>
        <p className="text-body-lg text-ink max-w-xl">{h.sub}</p>
        <PillButton href={h.cta.href} variant="solid">
          {h.cta.label}
        </PillButton>
      </div>
      <div className="mt-12 md:mt-16">
        <HeroPhotoCarousel photos={h.photos} />
      </div>
    </section>
  );
}
