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
    <main className="px-6 py-9 pb-28 md:px-10 md:py-14 md:pb-16 space-y-10 md:space-y-12">
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
          title="Menu and locations"
          body="Browse the menu, choose a location, or reserve a table before you head over."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.homeEntryCards.map((item, index) => (
            <HomeEntryCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </RevealSection>

      <RevealSection id="menu">
        <SectionHeader
          eyebrow="Menu highlights"
          title="Sushi, starters, steaks, and drinks"
          body="Preview a few menu favorites, then browse the full menu when you are ready to order."
        />
        <div className="grid grid-cols-2 gap-2">
          {content.menu.sections.slice(0, 4).map((section, index) => (
            <motion.a
              key={section.title}
              href="/menu"
              className="group relative aspect-[4/5] overflow-hidden rounded-card border border-border/50 bg-surface"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -3 }}
              transition={{ ...reveal, delay: index * 0.06 }}
            >
              <Image
                src={section.items[0].image}
                alt={section.items[0].name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-ui-label text-text-muted">0{index + 1}</p>
                <h3 className="text-item-name text-text">{section.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </RevealSection>

      <RevealSection id="locations">
        <SectionHeader
          eyebrow="Visit"
          title="Lake in the Hills + Hoffman Estates"
          body="Reserve or order from Lake in the Hills, or call either dining room before you head over."
        />
        <div className="grid grid-cols-1 gap-3">
          {content.locations.map((location, index) => (
            <motion.article
              key={location.name}
              className="group rounded-card border border-border/60 bg-surface/45 p-5 space-y-5 transition-colors hover:border-text/35 hover:bg-surface/70"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -2 }}
              transition={{
                ...reveal,
                delay: index * 0.08,
              }}
            >
              <div className="grid grid-cols-[38px_1fr] gap-4">
                <p className="text-ui-label text-text-muted">{String(index + 1).padStart(2, '0')}</p>
                <div className="space-y-2">
                  <p className="text-ui-label text-text-muted">{location.role}</p>
                  <h3 className="text-section-h2 text-text">{location.name}</h3>
                  <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-2">
                {location.actions.map((action) => (
                  <ActionLink
                    key={`${location.name}-${action.label}`}
                    href={action.href}
                    label={action.label}
                    primary={'primary' in action ? action.primary : false}
                    compact
                  />
                ))}
              </div>
            </motion.article>
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

      <RevealSection>
        <div className="overflow-hidden rounded-card border border-border/60 bg-surface/40">
          <div className="relative aspect-[4/3] bg-canvas">
            <Image
              src={content.menu.sections[0].items[0].image}
              alt="Bistro Wasabi sushi and maki"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 to-transparent" />
          </div>
          <div className="space-y-5 p-5">
            <SectionHeader
              eyebrow={content.secretSauce.eyebrow}
              title={content.secretSauce.title}
              body={content.secretSauce.body}
            />
            <div className="space-y-4">
              {content.secretSauce.points.map((point, index) => (
                <motion.div
                  key={point.label}
                  className="grid grid-cols-[34px_1fr] gap-3 border-t border-border/60 pt-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ ...reveal, delay: index * 0.05 }}
                >
                  <p className="text-ui-label text-text-muted">{String(index + 1).padStart(2, '0')}</p>
                  <div className="space-y-1.5">
                    <h3 className="text-item-name text-text">{point.label}</h3>
                    <p className="text-body text-text-muted leading-relaxed">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
      className="group overflow-hidden rounded-card border border-border/60 bg-surface/40 transition-colors hover:border-text/35"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -2 }}
      transition={{ ...reveal, delay: index * 0.06 }}
    >
      <div className="relative aspect-[4/3] bg-canvas">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          priority={index < 2}
          sizes="(max-width: 768px) 100vw, 20vw"
          className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/75 via-canvas/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-ui-label text-text-muted">{item.label}</p>
          <h3 className="mt-1 text-item-name text-text">{item.title}</h3>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-body text-text-muted leading-relaxed">{item.body}</p>
        <span className="inline-flex min-h-11 items-center justify-center rounded-pill border border-border/70 bg-canvas px-4 py-3 text-center text-ui-label text-text transition-colors group-hover:bg-surface-hover">
          {item.action}
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
      className="space-y-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex min-h-11 items-center gap-3 rounded-pill border border-text/20 bg-surface px-4">
          <StarRow />
          <span className="text-ui-label text-text-muted">Guest review</span>
        </div>
        <p className="shrink-0 text-ui-label text-text-muted" aria-live="polite">
          {String(active + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
        </p>
      </div>

      <div className="-mx-6 overflow-hidden md:mx-0">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-6 pb-2 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className={`relative grid min-h-[172px] w-[88vw] max-w-[372px] shrink-0 snap-center grid-cols-[1fr_76px] overflow-hidden rounded-card border bg-[linear-gradient(90deg,rgba(239,231,210,0.055),rgba(239,231,210,0.015))] transition-all sm:w-[460px] sm:max-w-[460px] sm:grid-cols-[1fr_92px] md:min-h-[180px] md:w-[min(500px,92%)] ${
                active === index
                  ? 'border-text/42 bg-surface/85 shadow-[0_16px_34px_rgba(0,0,0,0.16)]'
                  : 'border-text/18 bg-surface/55'
              }`}
              aria-label={`Guest review ${index + 1}, ${review.tag}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-text/25" aria-hidden="true" />
              <span className="pointer-events-none absolute right-[88px] top-5 hidden text-[54px] leading-none text-text/[0.04] sm:block" aria-hidden="true">
                "
              </span>
              <div className="relative z-10 flex flex-col justify-center gap-3 p-4 pr-3 sm:p-5 sm:pr-5">
                <p className="text-ui-label text-text-muted">{review.tag}</p>
                <blockquote className="text-[16.5px] italic leading-[1.32] text-text sm:text-[19px] sm:leading-[1.28] md:text-[20px]">
                  "{review.quote}"
                </blockquote>
              </div>
              <figcaption className="flex flex-col items-end justify-between gap-3 border-l border-border/60 bg-canvas/22 p-4 pl-3 sm:p-5 sm:pl-4">
                <p className="text-ui-label text-text-muted">{String(index + 1).padStart(2, '0')}</p>
                <div className="flex justify-end">
                  <StarRow compact />
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[64px_1fr_64px] items-center gap-3">
        <motion.button
          type="button"
          aria-label="Show previous review"
          onClick={() => goToReview(active - 1)}
          className="inline-flex min-h-11 items-center justify-center rounded-pill border border-border/70 bg-surface px-3 text-ui-label text-text transition-colors hover:bg-surface-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: theme.motion.transitionDuration }}
        >
          Prev
        </motion.button>

        <div className="flex items-center justify-center gap-2 overflow-x-auto px-1 py-2" aria-label="Choose review">
          {reviews.map((item, index) => (
            <button
              key={`${item.tag}-${index}`}
              type="button"
              aria-label={`Show guest review ${index + 1}`}
              aria-pressed={active === index}
              onClick={() => goToReview(index)}
              className={`h-2.5 rounded-pill transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
                active === index ? 'w-8 bg-text' : 'w-2.5 bg-border hover:bg-text-muted'
              }`}
            />
          ))}
        </div>

        <motion.button
          type="button"
          aria-label="Show next review"
          onClick={() => goToReview(active + 1)}
          className="inline-flex min-h-11 items-center justify-center rounded-pill border border-border/70 bg-surface px-3 text-ui-label text-text transition-colors hover:bg-surface-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: theme.motion.transitionDuration }}
        >
          Next
        </motion.button>
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
      <p className="text-ui-label text-text-muted">{eyebrow}</p>
      <h2 className="text-section-h2 text-text">{title}</h2>
      <p className="text-body text-text-muted leading-relaxed">{body}</p>
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
