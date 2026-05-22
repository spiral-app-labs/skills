'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

function Cta({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const className =
    variant === 'primary'
      ? 'inline-flex items-center justify-center bg-ink px-5 py-3 text-button text-ink-on-dark transition-colors hover:bg-accent-dark'
      : 'inline-flex items-center justify-center border border-accent px-5 py-3 text-button text-accent transition-colors hover:bg-accent hover:text-ink-on-dark';

  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function PortEdwardHero() {
  const { hero } = content;
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '5%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-8 px-4 pb-12 pt-8 md:px-12 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.p
            className="label-eyebrow mb-4 text-accent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.44, 0, 0.56, 1] }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="font-display text-[56px] font-black leading-[0.92] text-ink md:text-hero-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.04 }}
          >
            {hero.h1}
          </motion.h1>

          <motion.div
            className="mt-5 max-w-2xl border-l-4 border-accent pl-5 md:mt-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.12 }}
          >
            <LiveOpenStatus
              hours={content.brand.hoursConfig}
              variant="text"
              className="label-eyebrow mb-3 block text-river"
            />
            <p className="text-body text-ink">{hero.intro}</p>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: 0.2 }}
          >
            <Cta href={hero.primaryCta.href}>{hero.primaryCta.label}</Cta>
            <Cta href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Cta>
          </motion.div>

          <motion.div
            className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.44, 0, 0.56, 1], delay: 0.28 }}
          >
            {content.quickPaths.map((path, i) => {
              const external = path.href.startsWith('http');
              const body = (
                <>
                  <span className="flex items-center justify-between gap-3 font-display text-[20px] leading-6 text-ink">
                    {path.label}
                    <span className="text-[16px] text-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
                      -&gt;
                    </span>
                  </span>
                  <span className="mt-1 block text-[13px] leading-4 text-ink-muted">{path.detail}</span>
                </>
              );
              const className =
                'group block min-h-[84px] border border-hairline bg-canvas-alt/35 p-3 text-left transition-colors hover:border-accent hover:bg-canvas-alt';
              return external ? (
                <motion.div
                  key={path.label}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22, delay: i * 0.01 }}
                >
                  <a href={path.href} className={className} target="_blank" rel="noopener noreferrer">
                    {body}
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key={path.label}
                  whileHover={reducedMotion ? undefined : { y: -4 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22, delay: i * 0.01 }}
                >
                  <Link href={path.href} className={className}>
                    {body}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          ref={imageRef}
          className="relative min-h-[310px] overflow-hidden border border-hairline bg-hairline md:min-h-[460px] lg:col-span-5 lg:min-h-[620px]"
          initial={{ opacity: 0, y: 24, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.44, 0, 0.56, 1], delay: 0.12 }}
        >
          <motion.div
            className="absolute inset-0"
            style={reducedMotion ? undefined : { y: imageY, scale: imageScale }}
          >
            <Image
              src={content.images.hero}
              alt={hero.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              style={{ filter: 'saturate(0.94) contrast(0.98)' }}
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 bg-ink/82 p-4 text-ink-on-dark md:p-5">
            <p className="label-eyebrow mb-2 text-ink-on-dark/70">On the river</p>
            <ul className="grid gap-1 text-body-sm md:grid-cols-1">
              {hero.proof.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.08 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
