// HeroLock — V's House first viewport.
//
// Implements the audit Hero Lock exactly:
//   eyebrow      = THIRD GENERATION ON BEDFORD-EULESS ROAD
//   wordmark h1  = V's House (NOT the old "Welcome Home" tagline)
//   subline      = Bar · Sushi · Pho
//   sub          = Vu family kitchen since 1982 + 24-hour pho + Hatsumi Kuzuu + bar program
//   primary CTA  = Reserve a table → Toast Tables (target=_blank)
//   secondary    = phone tap-to-call (Block 1 mobile failure #2 fix)
//
// Visual: warm-low-light interior photo with deep-overlay gradient, gold heritage
// hairline divider above eyebrow, hours/open-status pill below CTAs.

'use client';

import { content } from '../content';
import { LiveOpenStatus } from './LiveOpenStatus';

const HOURS = {
  ranges: content.hours.weekly.map((r, i) => ({
    day: i as 0|1|2|3|4|5|6,
    open: r.open,
    close: r.close,
  })),
  timezone: content.hours.timezone,
};

export function HeroLock() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-bg-darker">
      {/* Hero photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${content.photos.heroRoom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
        aria-hidden
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/85 via-bg-darker/55 to-bg-darker/95" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(12,20,19,0.55)_70%)]" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-5 lg:px-10 pt-24 pb-16 text-center">
        <div className="max-w-[920px] mx-auto">
          {/* gold heritage hairline */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold/60" aria-hidden />
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
            <span className="h-px w-10 bg-gold/60" aria-hidden />
          </div>

          <p className="text-eyebrow text-gold font-body uppercase mb-6 tracking-[0.25em]">
            {content.hero.eyebrow}
          </p>

          <h1 className="font-display text-text-white text-hero-h1 leading-[1.02] tracking-tight">
            {content.hero.h1}
          </h1>

          <p className="mt-3 text-text-muted-dark uppercase tracking-[0.5em] text-bodySm">
            {content.hero.sub}
          </p>

          <p className="mt-8 max-w-[640px] mx-auto text-text-white/90 text-body leading-relaxed">
            {content.hero.pitch}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={content.hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-dark transition text-text-white text-button rounded-button"
            >
              {content.hero.primaryCta.label}
            </a>
            <a
              href={content.hero.secondaryCta.href}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-text-white/30 hover:border-gold hover:text-gold transition text-text-white text-button rounded-button"
            >
              {content.hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-text-muted-dark text-bodySm">
            <LiveOpenStatus hours={HOURS} variant="dot" />
            <span className="hidden sm:inline">·</span>
            <span>{content.contact.address}</span>
            <span className="hidden sm:inline">·</span>
            <span>{content.contact.addressLine2}</span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted-dark text-eyebrow">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-text-muted-dark/50 motion-safe:animate-pulse" aria-hidden />
      </div>
    </section>
  );
}
