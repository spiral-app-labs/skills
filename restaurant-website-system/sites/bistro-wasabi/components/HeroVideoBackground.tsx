'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * HeroVideoBackground — personalized hero pattern (BackgroundVideoAliveness, #11).
 *
 * Full-viewport (100dvh) hero with autoplay-loop-muted video background and coded
 * UX on top: wordmark anchored central-third, eyebrow above, sub below.
 *
 * Mobile handling: ONE 16:9 source video, CSS object-fit: cover + object-position: center
 * keeps the central subject anchored as the sides crop on narrower viewports.
 *
 * Loop strategy: autoplay-loop. The chopsticks pickup video ends with an empty
 * plate, then wraps back to the full plate at the loop seam — a visible cut.
 * Accepted as a tradeoff: continuous motion beats holding on a still frame.
 *
 * Conversion-floor: handled by FloatingHeaderPill (top, always visible) on desktop
 * and MobileActionBar (bottom-sticky) on mobile. The hero does not need its own
 * corner CTA — three RESERVE entry points was redundant.
 *
 * Reduced-motion: video drops to the poster image (clean plate).
 */
export function HeroVideoBackground({
  videoSrc,
  posterSrc,
  wordmark,
  eyebrow,
  sub,
  locationCtas,
}: {
  videoSrc: string;
  posterSrc: string;
  wordmark: string;
  eyebrow: string;
  sub: string;
  locationCtas?: Array<{ label: string; sublabel?: string; href: string }>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0E0B08]"
      style={{ height: '100dvh', minHeight: '600px' }}
    >
      {/* Video background — or poster image if reduced-motion */}
      {prefersReducedMotion ? (
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Central darkening band — strong enough to hold text against bright food frames.
          Tuned for the chopsticks-pickup loop where the central nigiri is very bright. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at center, rgba(14,11,8,0.62) 0%, rgba(14,11,8,0.38) 60%, rgba(14,11,8,0.15) 100%)',
        }}
      />
      {/* Soft top + bottom scrims for header and CTA readability */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(14,11,8,0.55) 0%, rgba(14,11,8,0) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(14,11,8,0) 0%, rgba(14,11,8,0.6) 100%)',
        }}
      />

      {/* UX overlay — title block (eyebrow + wordmark + sub) is vertically
          centered within the upper portion of the viewport (matching the inspo
          composition). CTAs are absolutely positioned below as a separate
          group so they anchor the bottom regardless of where the title sits. */}
      <div
        className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center pt-[clamp(80px,10vh,120px)] pb-[clamp(180px,24vh,260px)] md:pb-[clamp(120px,14vh,170px)]"
      >
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#C9B894] uppercase"
          style={{
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(11px, 1.1vw, 13px)',
            letterSpacing: '0.32em',
            marginBottom: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#EFE3CC]"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(48px, 9vw, 132px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            textShadow: '0 2px 24px rgba(14,11,8,0.85), 0 0 60px rgba(14,11,8,0.55)',
          }}
        >
          {wordmark}
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 0.96, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#EFE3CC]"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            lineHeight: 1.5,
            maxWidth: '46ch',
            marginTop: 'clamp(20px, 3vw, 36px)',
            textShadow: '0 1px 12px rgba(14,11,8,0.85)',
          }}
        >
          {sub}
        </motion.p>
      </div>

      {/* CTA block — absolutely positioned, anchored to the bottom of the hero.
          Two location pills route guests directly to each location's page
          (skipping the /locations picker gate that the header pill + mobile
          action bar already cover). The brand is two sister dining rooms;
          letting guests pick on the hero is the real conversion move. */}
      <div
        className="absolute inset-x-0 z-20 flex flex-col items-center px-6 bottom-[clamp(72px,8vh,96px)] md:bottom-[clamp(44px,5vh,64px)]"
      >
        {locationCtas && locationCtas.length > 0 && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[600px]"
          >
            {locationCtas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className="group flex flex-col items-center justify-center text-center border rounded-sm transition-all hover:bg-[rgba(239,227,204,0.08)] hover:border-[rgba(239,227,204,0.85)]"
                style={{
                  borderColor: 'rgba(239,227,204,0.6)',
                  padding: 'clamp(14px, 1.8vh, 18px) clamp(20px, 2.8vw, 28px)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                }}
              >
                <span
                  className="inline-flex items-center gap-2 uppercase transition-colors group-hover:text-[#EFE3CC]"
                  style={{
                    fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: 'clamp(12px, 1.05vw, 13px)',
                    letterSpacing: '0.2em',
                    color: '#EFE3CC',
                    fontWeight: 600,
                  }}
                >
                  <span>{cta.label}</span>
                  <span aria-hidden>→</span>
                </span>
                {cta.sublabel && (
                  <span
                    className="block"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: '12px',
                      color: '#C9B894',
                      opacity: 0.85,
                      marginTop: '3px',
                    }}
                  >
                    {cta.sublabel}
                  </span>
                )}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
