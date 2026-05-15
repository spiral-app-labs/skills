'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { content, links } from '../content';
import { theme } from '../theme';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const reveal = {
  duration: theme.motion.revealDuration,
  ease: theme.motion.easing,
};

export function HomeExperience() {
  return (
    <main className="px-6 py-16 pb-28 md:px-12 md:py-24 md:pb-24 space-y-20 md:space-y-28">
      <motion.section
        className="flex flex-col gap-7 md:min-h-[calc(100vh-18rem)] md:justify-end"
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...reveal,
          delay: theme.motion.revealStagger * 2,
        }}
      >
        <div className="space-y-5">
          <p className="text-ui-label text-text-muted">{content.hero.eyebrow}</p>
          <h2 className="max-w-[8ch] text-[50px] leading-[45px] sm:text-[58px] sm:leading-[52px] md:text-[66px] md:leading-[60px] xl:text-section-title text-text">
            {content.hero.title}
          </h2>
          <p className="text-body text-text-muted leading-relaxed max-w-md">
            {content.hero.lead}
          </p>
          <p className="border-l border-text/35 pl-4 text-body text-text leading-relaxed max-w-md">
            {content.hero.supportingLine}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-2">
          <ActionLink href={links.tock} label="Reserve a table" primary />
          <ActionLink href={links.carryOut} label="Order carry-out" />
          <ActionLink href="/menu" label="View Menu" />
        </div>
      </motion.section>

      <RevealSection id="plan">
        <SectionHeader
          eyebrow="Plan your visit"
          title="Preview the menu."
          body="Browse maki, sashimi, starters, steaks, seafood, martinis, sake, and wine before you head over."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.homeEntryCards.map((item, index) => (
            <HomeEntryCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </RevealSection>

      <RevealSection id="locations">
        <SectionHeader
          eyebrow="Two locations · Algonquin Road"
          title="Where to find us."
          body="Bistro Wasabi runs two sister dining rooms on Algonquin Road — each with its own kitchen, reservation book, and carry-out flow. Pick the one closest to you."
        />
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-12 mt-12 md:mt-16">
          {content.locations.map((location, index) => (
            <motion.a
              key={location.name}
              href={`/locations/${location.slug}`}
              className="group block border-t py-10 md:py-0 md:border-t-0 transition-colors"
              style={{ borderColor: 'rgba(239,227,204,0.14)' }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...reveal, delay: index * 0.08 }}
            >
              <div className="grid grid-cols-[64px_1fr] gap-5 items-start">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    lineHeight: 0.95,
                    color: '#8C6A3A',
                    fontWeight: 500,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="space-y-3 pt-2">
                  <p
                    className="uppercase"
                    style={{
                      fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.32em',
                      color: '#C9B894',
                    }}
                  >
                    {location.role}
                  </p>
                  <h3
                    className="transition-colors group-hover:text-[#8C6A3A]"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(32px, 3.6vw, 48px)',
                      lineHeight: 1.05,
                      letterSpacing: '-0.005em',
                      fontWeight: 500,
                      color: '#EFE3CC',
                    }}
                  >
                    {location.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: '17px',
                      lineHeight: 1.5,
                      color: '#EFE3CC',
                      opacity: 0.82,
                    }}
                  >
                    {location.address}
                  </p>
                  <p
                    className="pt-3 inline-flex items-center gap-2 uppercase transition-colors group-hover:text-[#8C6A3A]"
                    style={{
                      fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      color: '#EFE3CC',
                    }}
                  >
                    <span>Visit this location</span>
                    <span aria-hidden>→</span>
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="menu">
        <SectionHeader
          eyebrow="Menu highlights"
          title="Sushi, starters, steaks, and drinks"
          body="Preview a few menu favorites, then browse the full menu when you are ready to order."
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          {content.menu.sections.slice(0, 4).map((section, index) => (
            <motion.a
              key={section.title}
              href="/menu"
              className="group block space-y-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...reveal, delay: index * 0.06 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-canvas">
                <Image
                  src={section.items[0].image}
                  alt={section.items[0].name}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-1.5">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.32em',
                    color: '#C9B894',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3
                  className="transition-colors group-hover:text-[#8C6A3A]"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.005em',
                    fontWeight: 500,
                    color: '#EFE3CC',
                  }}
                >
                  {section.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="reviews" className="pt-28 -mt-28 md:pt-10 md:-mt-10">
        <SectionHeader
          eyebrow="Guest reviews"
          title="What guests love"
          body="Fresh sushi, drinks, and a warm room for dinner close to home."
        />
        <ReviewCarousel />
      </RevealSection>

      <RevealSection className="space-y-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
          <Image
            src={content.menu.sections[0].items[0].image}
            alt="Bistro Wasabi sushi and maki"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-10">
          <SectionHeader
            eyebrow={content.secretSauce.eyebrow}
            title={content.secretSauce.title}
            body={content.secretSauce.body}
          />
          <div className="space-y-0">
            {content.secretSauce.points.map((point, index) => (
              <motion.div
                key={point.label}
                className="grid grid-cols-[44px_1fr] gap-5 border-t py-6"
                style={{ borderColor: 'rgba(239,227,204,0.14)' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ ...reveal, delay: index * 0.05 }}
              >
                <p
                  className="uppercase"
                  style={{
                    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    color: '#C9B894',
                    paddingTop: '4px',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="space-y-2">
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.005em',
                      fontWeight: 500,
                      color: '#EFE3CC',
                    }}
                  >
                    {point.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: '16px',
                      lineHeight: 1.5,
                      color: '#EFE3CC',
                      opacity: 0.78,
                    }}
                  >
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <SectionHeader
          eyebrow="Signature favorites"
          title="Signatures from the menu"
          body="Order a few for the table or build dinner around your favorite roll, seafood entree, or steak."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {content.signatureFavorites.map((item, index) => (
            <motion.article
              key={item.name}
              className="overflow-hidden rounded-card border border-border/60 bg-surface/40 transition-colors hover:border-text/35"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -2 }}
              transition={{ ...reveal, delay: index * 0.04 }}
            >
              <div className="relative aspect-[4/3] bg-canvas">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-item-name text-text">{item.name}</h3>
                <p className="text-body text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="drinks">
        <SectionHeader
          eyebrow="Weekly specials"
          title="Wine Tuesdays, Martini Wednesdays, Mai Tais Sunday"
          body="Join us for Tuesday wine bottles, Wednesday martinis, and Sunday Mai Tais."
        />
        <div className="space-y-3">
          {content.specials.map((special, index) => (
            <motion.div
              key={special.day}
              className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-t border-border/60 pt-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...reveal, delay: index * 0.06 }}
            >
              <p className="text-ui-label text-text-muted">{special.day}</p>
              <p className="text-body text-text leading-relaxed">{special.offer}</p>
            </motion.div>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="gift-cards" className="pb-2">
        <SectionHeader
          eyebrow="Dinner here or at home"
          title="Reserve, order, or send a gift"
          body="Book a table, pick up dinner, send a gift card, or start delivery."
        />
        <motion.div
          className="grid grid-cols-[96px_1fr] gap-5 items-center rounded-card border border-border/60 bg-surface/45 p-4"
          whileHover={{ borderColor: 'rgba(239, 231, 210, 0.35)' }}
          transition={{ duration: theme.motion.transitionDuration }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-field bg-canvas">
            <Image
              src="/images/bistro-wasabi/gift-card.png"
              alt="Bistro Wasabi gift card"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <ActionLink href={links.giftCards} label="Buy a gift card" primary />
            <ActionLink href={links.delivery} label="Start delivery" />
            <ActionLink href={links.email} label="Email us" />
          </div>
        </motion.div>
      </RevealSection>
    </main>
  );
}

function RevealSection({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-32 space-y-6 md:scroll-mt-8 ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={reveal}
    >
      {children}
    </motion.section>
  );
}

function HomeEntryCard({
  item,
  index,
}: {
  item: (typeof content.homeEntryCards)[number];
  index: number;
}) {
  return (
    <motion.a
      href={item.href}
      className="group block space-y-5 transition-opacity hover:opacity-95"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...reveal, delay: index * 0.06 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={index < 2}
          sizes="(max-width: 768px) 100vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3">
        <p
          className="uppercase"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.32em',
            color: '#C9B894',
          }}
        >
          {item.label}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(24px, 2.4vw, 32px)',
            lineHeight: 1.1,
            letterSpacing: '-0.005em',
            fontWeight: 500,
            color: '#EFE3CC',
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontStyle: 'italic',
            fontSize: '16px',
            lineHeight: 1.5,
            color: '#EFE3CC',
            opacity: 0.78,
          }}
        >
          {item.body}
        </p>
        <span
          className="inline-flex items-center gap-2 uppercase transition-colors group-hover:text-[#8C6A3A]"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#EFE3CC',
            paddingTop: '4px',
          }}
        >
          <span>{item.action}</span>
          <span aria-hidden>→</span>
        </span>
      </div>
    </motion.a>
  );
}

function ReviewCarousel() {
  const reviews = content.reviews;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const autoScrollRef = useRef(false);
  const autoScrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || paused || reviews.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % reviews.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, [paused, prefersReducedMotion, reviews.length]);

  useEffect(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(`[data-review-index="${active}"]`);
    if (!track || !card) return;

    autoScrollRef.current = true;
    if (autoScrollTimeoutRef.current !== null) {
      window.clearTimeout(autoScrollTimeoutRef.current);
    }

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    autoScrollTimeoutRef.current = window.setTimeout(() => {
      autoScrollRef.current = false;
    }, prefersReducedMotion ? 0 : 650);
  }, [active, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      if (autoScrollTimeoutRef.current !== null) {
        window.clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  const goToReview = (index: number) => {
    setActive((index + reviews.length) % reviews.length);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    if (autoScrollRef.current) return;

    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-review-index]'));
      const trackLeft = track.scrollLeft;
      const nearest = cards.reduce(
        (best, card) => {
          const index = Number(card.dataset.reviewIndex ?? 0);
          const distance = Math.abs(card.offsetLeft - track.offsetLeft - trackLeft);
          return distance < best.distance ? { index, distance } : best;
        },
        { index: active, distance: Number.POSITIVE_INFINITY },
      );

      setActive((current) => (current === nearest.index ? current : nearest.index));
    });
  };

  return (
    <div
      className="space-y-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <StarRow />
        <p
          className="shrink-0 uppercase"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.32em',
            color: '#C9B894',
          }}
          aria-live="polite"
        >
          {String(active + 1).padStart(2, '0')} · {String(reviews.length).padStart(2, '0')}
        </p>
      </div>

      <div className="-mx-6 overflow-hidden md:mx-0">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth px-6 pb-2 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Guest review carousel"
          onScroll={handleScroll}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onPointerCancel={() => setPaused(false)}
        >
          {reviews.map((review, index) => (
            <figure
              key={`${review.tag}-${review.quote}`}
              data-review-index={index}
              className="relative w-[88vw] max-w-[520px] shrink-0 snap-center space-y-4 sm:w-[520px] sm:max-w-[520px] md:w-[min(560px,92%)]"
              aria-label={`Guest review ${index + 1}, ${review.tag}`}
            >
              <span
                aria-hidden="true"
                className="block"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(72px, 9vw, 120px)',
                  lineHeight: 0.7,
                  color: active === index ? '#8C6A3A' : 'rgba(239,227,204,0.18)',
                  transition: 'color 600ms ease',
                  marginBottom: '-12px',
                }}
              >
                “
              </span>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  lineHeight: 1.35,
                  color: '#EFE3CC',
                  fontWeight: 400,
                  opacity: active === index ? 1 : 0.6,
                  transition: 'opacity 600ms ease',
                }}
              >
                {review.quote}
              </blockquote>
              <figcaption
                className="uppercase"
                style={{
                  fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: '#C9B894',
                }}
              >
                {review.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 pt-2">
        <button
          type="button"
          aria-label="Show previous review"
          onClick={() => goToReview(active - 1)}
          className="group inline-flex items-center gap-2 uppercase transition-colors hover:text-[#8C6A3A]"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#EFE3CC',
          }}
        >
          <span aria-hidden>←</span>
          <span>Prev</span>
        </button>

        <div className="flex items-center justify-center gap-2" aria-label="Choose review">
          {reviews.map((item, index) => (
            <button
              key={`${item.tag}-${index}`}
              type="button"
              aria-label={`Show guest review ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => goToReview(index)}
              className="h-px transition-all duration-500 focus:outline-none focus-visible:outline-1"
              style={{
                width: active === index ? '32px' : '12px',
                backgroundColor: active === index ? '#8C6A3A' : 'rgba(239,227,204,0.3)',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Show next review"
          onClick={() => goToReview(active + 1)}
          className="group inline-flex items-center gap-2 uppercase transition-colors hover:text-[#8C6A3A]"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: '#EFE3CC',
          }}
        >
          <span>Next</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

function StarRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-0.5 text-[#d8b366]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width={compact ? '12' : '15'}
          height={compact ? '12' : '15'}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <header className="space-y-3">
      <p
        className="uppercase"
        style={{
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.32em',
          color: '#C9B894',
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 5vw, 60px)',
          lineHeight: 1.05,
          letterSpacing: '-0.005em',
          fontWeight: 500,
          color: '#EFE3CC',
        }}
      >
        {title}
      </h2>
      <p
        className="leading-relaxed"
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontStyle: 'italic',
          fontSize: '17px',
          color: '#EFE3CC',
          opacity: 0.82,
          maxWidth: '52ch',
        }}
      >
        {body}
      </p>
    </header>
  );
}

function ActionLink({
  href,
  label,
  primary = false,
  compact = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
  compact?: boolean;
}) {
  const external = href.startsWith('http');
  const contact = href.startsWith('tel:') || href.startsWith('mailto:');

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill border px-4 text-center text-ui-label transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
        primary
          ? 'border-text/70 bg-text text-canvas hover:bg-text/90'
          : 'border-border/70 bg-surface hover:bg-surface-hover text-text'
      } ${compact ? 'py-3' : 'py-3.5'} ${contact ? 'break-all' : ''}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: theme.motion.transitionDuration }}
    >
      {label}
    </motion.a>
  );
}

function LocationLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group inline-flex items-center justify-between w-full py-3.5 transition-colors"
      whileHover={{ x: 2 }}
      transition={{ duration: theme.motion.transitionDuration }}
    >
      <span
        className="uppercase transition-colors group-hover:text-[#8C6A3A]"
        style={{
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.18em',
          color: '#EFE3CC',
        }}
      >
        {label}
      </span>
      <span
        className="transition-colors group-hover:text-[#8C6A3A]"
        style={{
          fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
          fontSize: '15px',
          color: '#C9B894',
        }}
      >
        →
      </span>
    </motion.a>
  );
}
