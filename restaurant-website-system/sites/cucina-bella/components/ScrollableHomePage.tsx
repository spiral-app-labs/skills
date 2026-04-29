// ScrollableHomePage \u2014 Cucina Bella homepage composition.
//
// Forked from sites/da-baffone/components/ScrollableHomePage.tsx with
// register-softening adjustments per the build plan and audit:
//
//   1. Hero copy emphasizes family-run / Algonquin / Sannicandro \u2014 not
//      "intimate / curated / chef-driven" date-night phrasing.
//   2. Hero primary CTA targets Toast Tables (target=_blank), not a tel: link.
//   3. Proof strip surfaces Tripadvisor 4.5 / 428 / #2-of-121 \u2014 the audit's
//      "earned but hidden" thesis.
//   4. Section "Wine Bar & Date Night" -> "Wine, Bar, and Dessert Martinis"
//      to drop the date-night intensity lever.
//   5. Adds a sister-venues cross-link section before the visit/contact
//      block (mirrors the existing pattern across the three Cucina Bella
//      sites).

import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';
import { HeritageStamp } from './HeritageStamp';
import { HeroHoursSidebar } from './HeroHoursSidebar';
import { HeroPhoto } from './HeroPhoto';
import { HeroTestimonialCard } from './HeroTestimonialCard';
import { LiveMapEmbed } from './LiveMapEmbed';
import { OpeningHoursTable } from './OpeningHoursTable';
import { PhotoCardWithChip } from './PhotoCardWithChip';
import { ReviewCarousel } from './ReviewCarousel';
import { ScrollRevealStandard } from './ScrollReveal';
import { SisterVenues } from './SisterVenues';
import { StatCounter } from './StatCounter';

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
      {children}
    </p>
  );
}

function ImagePanel({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-canvas/10 transition-colors duration-700 group-hover:bg-canvas/0" />
    </div>
  );
}

export function ScrollableHomePage() {
  const { brand, home } = content;

  return (
    <>
      {/* HERO \u2014 gusto-01 signature pattern: big atmospheric photo with
          HeroTestimonialCard overlay (Tripadvisor proof baked in), 2 stacked
          PhotoCardWithChip secondary cards, and right-rail HeroHoursSidebar.
          Mirrors templates/gusto-01/components/HeroMultiCardAsymmetric.tsx. */}
      <section className="relative mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {/* BIG LEFT CARD \u2014 main photo (Ken Burns + parallax via HeroPhoto)
              + testimonial overlay */}
          <div id="book" className="relative overflow-hidden rounded-card md:col-span-7 md:row-span-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[640px]">
              <HeroPhoto
                src={home.hero.mainPhoto}
                alt={home.hero.mainPhotoAlt}
              />
              <HeroTestimonialCard
                quote={home.hero.testimonial.quote}
                wordmark={home.hero.testimonial.wordmark}
                body={home.hero.testimonial.body}
                rating={home.hero.testimonial.rating}
                reviewCount={home.hero.testimonial.reviewCount}
                ratingLabel={home.hero.testimonial.ratingLabel}
                reviewLabel={home.hero.testimonial.reviewLabel}
                primaryCta={home.hero.testimonial.primaryCta}
                secondaryCta={home.hero.testimonial.secondaryCta}
              />
            </div>
          </div>

          {/* STACKED SECONDARY CARDS \u2014 Italian Kitchen + Wine & Bar */}
          <div className="md:col-span-3 md:row-span-2 flex flex-col gap-3">
            {home.hero.secondaryCards.map((c) => (
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

          {/* RIGHT RAIL \u2014 Toast CTA + LiveOpenStatus + opening hours */}
          <div className="md:col-span-2 md:row-span-2">
            <HeroHoursSidebar
              ctaLabel={home.hero.sidebar.ctaLabel}
              ctaHref={home.hero.sidebar.ctaHref}
              hoursHeading={home.hero.sidebar.hoursHeading}
              hours={home.hero.sidebar.hours}
              className="h-full"
            />
          </div>
        </div>

        {/* Heritage stamp + address line below hero composition */}
        <div className="mt-5 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <HeritageStamp />
          <span className="font-body text-stamp uppercase text-ink-quiet">
            {brand.address.line1}
            <span className="mx-2 text-ink-quiet/60">&middot;</span>
            {brand.phoneDisplay}
          </span>
        </div>
      </section>

      {/* PROOF \u2014 Tripadvisor 4.5 / 428 / #2-of-121 strip */}
      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 gap-10 rounded-card border border-divider bg-surface/60 p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-5">
            <SectionEyebrow>{home.proof.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              {home.proof.heading}
            </h2>
            <p className="mt-5 font-body text-body text-ink-muted">
              {home.proof.body}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:col-span-7 md:grid-cols-3">
            {home.proof.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-card border border-divider bg-canvas/55 p-5"
              >
                <StatCounter
                  value={stat.value}
                  className="font-display text-[34px] leading-none text-ink tabular-nums"
                />
                <p className="mt-3 font-body text-body-sm text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollRevealStandard>

      {/* STORY \u2014 Sannicandro family + room */}
      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <ImagePanel
              src={home.story.photo}
              alt={home.story.photoAlt}
              className="aspect-[4/5] md:aspect-[5/6]"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <SectionEyebrow>{home.story.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              {home.story.heading}
            </h2>
            <p className="mt-5 font-body text-body text-ink-muted">
              {home.story.body}
            </p>
            <blockquote className="mt-8 border-l border-accent-warm pl-5 font-display text-[30px] italic leading-tight text-ink">
              &ldquo;{home.story.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </ScrollRevealStandard>

      {/* SIGNATURE DISHES \u2014 3-card teaser, prices intentionally off */}
      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow>{home.signatureDishes.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 max-w-3xl font-display text-manifesto text-ink">
              {home.signatureDishes.heading}
            </h2>
          </div>
          <Link
            href="/menu"
            className="font-body text-button text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Full menu
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {home.signatureDishes.items.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-card bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.photo}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-body text-[16px] font-medium text-ink transition duration-300 group-hover:translate-x-1 group-hover:font-semibold group-hover:text-accent-warm">
                    {dish.name}
                  </h3>
                  {dish.price ? (
                    <p className="font-body text-[15px] font-medium text-ink">
                      {dish.price}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 font-body text-body-sm italic text-ink-muted">
                  {dish.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ScrollRevealStandard>

      {/* WINE / BAR \u2014 softened from "Date Night" to "Wine, Bar, Dessert Martinis" */}
      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="rounded-card bg-surface p-7 md:col-span-5 md:p-10">
            <SectionEyebrow>{home.wine.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              {home.wine.heading}
            </h2>
            <p className="mt-5 font-body text-body text-ink-muted">
              {home.wine.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {home.wine.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-pill border border-divider px-3 py-1.5 font-body text-chip uppercase text-ink-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <ImagePanel
              src={home.wine.photo}
              alt={home.wine.photoAlt}
              className="aspect-[16/10] h-full"
            />
          </div>
        </div>
      </ScrollRevealStandard>

      {/* REVIEWS \u2014 horizontal carousel of verbatim Google review pull-quotes */}
      <ScrollRevealStandard as="div">
        <ReviewCarousel />
      </ScrollRevealStandard>

      {/* SISTER VENUES \u2014 cross-link to Galena + Bella's Woodfire */}
      <SisterVenues />

      {/* VISIT \u2014 address, phone, hours, map */}
      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-card bg-surface md:grid-cols-12">
          <div className="p-6 md:col-span-5 md:p-10">
            <SectionEyebrow>Visit</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              Downtown Algonquin, on South Main.
            </h2>
            <address className="mt-5 not-italic font-body text-body text-ink-muted">
              {brand.address.line1}
              <br />
              {brand.address.line2}
            </address>
            <p className="mt-4 font-body text-body text-ink-muted">
              <a href={`tel:${brand.phone}`} className="hover:text-ink">
                {brand.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 font-body text-body-sm text-ink-muted">
              Catering{' '}
              <a href={`tel:${brand.cateringPhone}`} className="hover:text-ink">
                {brand.cateringPhoneDisplay}
              </a>
            </p>
            <p className="mt-4 font-body text-body-sm text-ink-muted">
              {brand.reservationNote}
            </p>
            <div className="mt-7">
              <OpeningHoursTable
                heading="Opening Hours"
                rows={home.hero.sidebar.hours}
              />
            </div>
          </div>
          <div className="min-h-[440px] md:col-span-7">
            <LiveMapEmbed
              address={`${brand.address.line1}, ${brand.address.line2}`}
              lat={brand.geo.lat}
              lng={brand.geo.lng}
              zoom={15}
              mapLabel={brand.legalName}
              aspectRatio="16/10"
            />
          </div>
        </div>
      </ScrollRevealStandard>
    </>
  );
}
