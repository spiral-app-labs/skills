'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

// Sammy's personalized video hero.
// Text and CTA are code-native, following the supplied inspo image while the
// three generated food clips run as one stitched, deployable background loop.
export function PlateHero() {
  const { wordmark, eyebrow, sub, cta, secondaryCta, videoSrc, posterSrc } = content.hero;
  const reduced = useReducedMotion();
  const [primaryTitle, ...restTitle] = wordmark.split(' Restaurant & Bar');

  return (
    <section
      className="relative isolate overflow-hidden bg-[#080402]"
      style={{ height: '94dvh', minHeight: '620px' }}
      aria-label="Sammy's Restaurant & Bar hero"
    >
      {reduced ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <video
          aria-hidden="true"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,2,0.95)_0%,rgba(5,3,2,0.78)_31%,rgba(5,3,2,0.34)_58%,rgba(5,3,2,0.08)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_58%,rgba(226,146,34,0.08)_0%,rgba(5,3,2,0)_38%),linear-gradient(180deg,rgba(5,3,2,0.3)_0%,rgba(5,3,2,0)_32%,rgba(5,3,2,0.62)_100%)]"
      />

      <div className="relative z-10 flex h-full items-center px-6 pb-12 pt-28 sm:px-10 md:px-[5.8vw] md:pb-10 md:pt-24">
        <motion.div
          className="w-full max-w-[720px]"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#D9A23A] sm:text-[15px] md:text-[18px]">
            {eyebrow}
          </p>
          <div className="mt-7 h-px w-[86px] bg-[#D9A23A]" aria-hidden />

          <h1 className="mt-8 text-[#F7F0E4] drop-shadow-[0_8px_34px_rgba(0,0,0,0.65)]">
            <span
              className="block font-condensed text-[clamp(78px,18vw,142px)] font-bold uppercase leading-[0.78] tracking-[0.025em] sm:text-[clamp(96px,14vw,150px)] md:text-[clamp(120px,8.2vw,172px)]"
            >
              {primaryTitle}
            </span>
            <span className="mt-5 block font-condensed text-[clamp(32px,8.5vw,56px)] font-bold uppercase leading-none tracking-[0.18em] sm:text-[clamp(42px,5.5vw,66px)] md:text-[clamp(48px,3.8vw,72px)]">
              Restaurant &amp; Bar{restTitle.join('')}
            </span>
          </h1>

          <div className="mt-8 h-px w-[86px] bg-[#D9A23A]" aria-hidden />

          <p className="mt-7 max-w-[34rem] font-serif text-[20px] leading-[1.42] text-[#F7F0E4] drop-shadow-[0_4px_20px_rgba(0,0,0,0.72)] sm:text-[24px] md:text-[28px]">
            {sub}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={cta.href}
              className="group inline-flex min-h-[64px] w-full items-center justify-center gap-4 rounded-pill border-2 border-[#D9A23A] px-7 py-4 font-condensed text-[22px] font-bold uppercase tracking-[0.13em] text-[#D9A23A] transition-colors hover:bg-[#D9A23A] hover:text-[#160D05] sm:w-auto sm:min-w-[310px]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-current">
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>{cta.label}</span>
            </Link>

            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-[44px] items-center justify-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[#F7F0E4] opacity-[0.78] transition-colors hover:text-[#D9A23A] hover:opacity-100 sm:px-2"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
