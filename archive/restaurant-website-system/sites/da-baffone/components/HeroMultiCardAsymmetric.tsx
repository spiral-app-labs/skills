// HeroMultiCardAsymmetric — the template's signature hero composition:
// one large atmospheric food photo (left ~60%) with testimonial-overlay card
// baked in, two stacked secondary photo-cards (middle column), and a
// right-rail hours/reservation sidebar. Asymmetric 3-column grid.
//
// Mobile reflow: stacks to big-card / chip-cards / sidebar, with a sticky
// phone-first call bar handled at the layout level.

import Image from 'next/image';
import { HeroTestimonialCard } from './HeroTestimonialCard';
import { PhotoCardWithChip } from './PhotoCardWithChip';
import { HeroHoursSidebar } from './HeroHoursSidebar';
import { HeritageStamp } from './HeritageStamp';
import { content } from '../content.example';

export function HeroMultiCardAsymmetric() {
  const h = content.home.hero;

  return (
    <section className="relative mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
        {/* BIG LEFT CARD — atmospheric food photo + testimonial overlay */}
        <div className="group relative overflow-hidden rounded-card md:col-span-7 md:row-span-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[640px]">
            <Image
              src={h.mainPhoto}
              alt={h.mainPhotoAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <HeroTestimonialCard
              quote={h.testimonial.quote}
              body={h.testimonial.body}
              rating={h.testimonial.rating}
              reviewCount={h.testimonial.reviewCount}
              ratingLabel={h.testimonial.ratingLabel}
              reviewLabel={h.testimonial.reviewLabel}
              primaryCta={h.testimonial.primaryCta}
              secondaryCta={h.testimonial.secondaryCta}
            />
          </div>
        </div>

        {/* STACKED SECONDARY CARDS — "Our Restaurant" + "Menu" */}
        <div className="md:col-span-3 md:row-span-2 flex flex-col gap-3">
          {h.secondaryCards.map((c) => (
            <div key={c.chip} className="flex-1 min-h-[260px]">
              <PhotoCardWithChip
                chip={c.chip}
                photo={c.photo}
                alt={c.alt}
                href={c.href}
                aspect="wide"
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* RIGHT RAIL — call CTA + opening hours */}
        <div className="md:col-span-2 md:row-span-2">
          <HeroHoursSidebar
            ctaLabel={h.sidebar.ctaLabel}
            ctaHref={h.sidebar.ctaHref}
            hoursHeading={h.sidebar.hoursHeading}
            hours={h.sidebar.hours}
            className="h-full"
          />
        </div>
      </div>

      {/* Heritage stamp — bottom-left watermark under hero composition */}
      <div className="mt-5 flex items-center justify-between">
        <HeritageStamp />
        <span className="font-body text-stamp uppercase text-ink-quiet">
          {content.brand.address.line1}
          <span className="mx-2 text-ink-quiet/60">·</span>
          {content.brand.phoneDisplay}
        </span>
      </div>
    </section>
  );
}
