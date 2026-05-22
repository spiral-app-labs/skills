import { content } from '../content';
import { RatingChip } from './RatingChip';
import { PillButton } from './PillButton';
import { HeroPhotoCarousel } from './HeroPhotoCarousel';
import { GreekKeyDivider } from './GreekKeyDivider';

/**
 * LatteHero (cafe-olympic fork) — two-tier wordmark hero per audit Hero Lock:
 * eyebrow (small caps, occasion+place+heritage) → wordmark (display, ALL CAPS,
 * Greek-key dividers either side) → sub (owner-voice + trust signal) →
 * phone-first primary CTA + secondary "view menu" CTA → 3-photo carousel.
 *
 * Phone CTA is the primary on every breakpoint — diner has no reservation
 * widget; the dominant job-to-be-done is "is it open / can I call now."
 */
export function LatteHero() {
  const h = content.hero;
  return (
    <section className="w-full bg-canvas pt-8 md:pt-14 pb-14 md:pb-20">
      <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-5 md:gap-6">
        <RatingChip
          provider={h.ratingChip.provider}
          stars={h.ratingChip.stars}
          score={h.ratingChip.score}
        />
        <p className="text-eyebrow-sm tracking-[0.18em] text-ink-muted uppercase">
          {h.eyebrow}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 w-full justify-center">
          <GreekKeyDivider className="h-3 md:h-4 w-32 md:w-auto md:flex-1 md:max-w-[200px] text-accent" />
          <h1 className="font-display text-hero-h1 leading-none tracking-tight text-ink uppercase">
            {h.h1}
          </h1>
          <GreekKeyDivider className="h-3 md:h-4 w-32 md:w-auto md:flex-1 md:max-w-[200px] text-accent" mirrored />
        </div>
        <p className="text-body-lg text-ink max-w-2xl">{h.sub}</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
          <PillButton href={h.ctaPrimary.href} variant="solid" className="w-full sm:w-auto">
            {h.ctaPrimary.label}
          </PillButton>
          <PillButton href={h.ctaSecondary.href} variant="outline" className="w-full sm:w-auto">
            {h.ctaSecondary.label}
          </PillButton>
        </div>
      </div>
      <div className="mt-10 md:mt-14">
        <HeroPhotoCarousel photos={[...h.photos]} />
      </div>
      <TrustStrip />
    </section>
  );
}

function TrustStrip() {
  const items = content.trustStrip.items;
  return (
    <div className="max-w-page mx-auto px-5 md:px-10 mt-10 md:mt-14">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14 text-center">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-4 md:gap-5">
            <div className="flex flex-col">
              <span className="text-eyebrow-sm tracking-[0.16em] text-ink-muted uppercase">
                {item.label}
              </span>
              <span className="text-body text-ink font-medium">{item.value}</span>
            </div>
            {i < items.length - 1 ? (
              <span aria-hidden className="hidden md:inline-block w-px h-8 bg-divider" />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
