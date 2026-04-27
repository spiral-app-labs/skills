import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';
import { BookATableButton } from './BookATableButton';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';
import { OpeningHoursTable } from './OpeningHoursTable';
import { ScrollRevealStandard } from './ScrollReveal';
import { StarRating } from './StarRating';

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
      <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          <div className="group relative overflow-hidden rounded-card md:col-span-8">
            <div className="relative min-h-[590px]">
              <Image
                src={home.hero.mainPhoto}
                alt={home.hero.mainPhotoAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/95 via-canvas/45 to-canvas/0" />
              <div className="gusto-photo-copy absolute inset-x-0 bottom-0 p-7 md:p-10 md:pr-32">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-pill border border-ink/20 bg-canvas/40 px-3 py-1 font-body text-chip uppercase text-ink-muted">
                    Family-owned since {brand.since}
                  </span>
                  <span className="rounded-pill border border-ink/20 bg-canvas/40 px-3 py-1 font-body text-chip uppercase text-ink-muted">
                    Downtown {brand.city}
                  </span>
                </div>
                <h1 className="max-w-2xl font-display text-[clamp(42px,7vw,78px)] leading-[0.98] text-ink transition-transform duration-500 group-hover:translate-x-2">
                  Southern Italian warmth, one table at a time.
                </h1>
                <p className="mt-5 max-w-xl font-body text-body text-ink-muted">
                  {brand.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={brand.reservationUrl}
                    className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
                  >
                    Call to Reserve
                  </Link>
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-button border border-ink/25 bg-canvas/25 px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-3 md:col-span-4">
            <div id="book" className="rounded-card bg-surface p-6">
              <div className="hidden md:block">
                <BookATableButton label="Call to Reserve" href={brand.reservationUrl} />
              </div>
              <div className="mt-0 md:mt-5">
                <LiveOpenStatus hours={brand.hoursConfig} variant="pill" />
              </div>
              <p className="mt-5 font-body text-body-sm text-ink-muted">
                {brand.reservationNote}
              </p>
            </div>
            <div className="min-h-[290px] flex-1">
              <ImagePanel
                src={home.hero.secondaryCards[0].photo}
                alt={home.hero.secondaryCards[0].alt}
                className="h-full min-h-[290px]"
              />
            </div>
          </aside>
        </div>
      </section>

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
                <p className="font-display text-[34px] leading-none text-ink">
                  {stat.value}
                </p>
                <p className="mt-3 font-body text-body-sm text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollRevealStandard>

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
                  <p className="font-body text-[15px] font-medium text-ink">
                    {dish.price}
                  </p>
                </div>
                <p className="mt-3 font-body text-body-sm italic text-ink-muted">
                  {dish.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ScrollRevealStandard>

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

      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionEyebrow>{home.reviews.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              {home.reviews.heading}
            </h2>
            <div className="mt-6">
              <StarRating
                rating={home.hero.testimonial.rating}
                reviewCount={home.hero.testimonial.reviewCount}
                ratingLabel={home.hero.testimonial.ratingLabel}
                reviewLabel={home.hero.testimonial.reviewLabel}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:col-span-8">
            {home.reviews.themes.map((theme) => (
              <p
                key={theme}
                className="rounded-card border border-divider bg-surface p-6 font-body text-body text-ink-muted"
              >
                {theme}
              </p>
            ))}
          </div>
        </div>
      </ScrollRevealStandard>

      <ScrollRevealStandard as="section" className="mx-auto max-w-shell px-4 pt-24 md:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-card bg-surface md:grid-cols-12">
          <div className="p-6 md:col-span-5 md:p-10">
            <SectionEyebrow>Visit</SectionEyebrow>
            <h2 className="mt-3 font-display text-manifesto text-ink">
              Downtown Crystal Lake, near the Metra station.
            </h2>
            <address className="mt-5 not-italic font-body text-body text-ink-muted">
              {brand.address.line1}
              <br />
              {brand.address.line2}
            </address>
            <p className="mt-4 font-body text-body text-ink-muted">
              <a href={brand.reservationUrl} className="hover:text-ink">
                {brand.phoneDisplay}
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
