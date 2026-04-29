'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

/**
 * FloatingHeaderPill — qitchen-01's nav primitive.
 *
 * Small dark-elevated rounded-rectangle in upper-left, FIXED across all pages.
 * Holds: hamburger icon + wordmark + nav links + primary CTA.
 *
 * Single-CTA discipline locked — the audit's §12.4 says no second CTA, ever.
 *
 * Fades in fastest of the load-in sequence (~0.3s).
 */
export function FloatingHeaderPill() {
  const ctaIsExternal = content.nav.cta.href.startsWith('http');

  return (
    <motion.header
      className="fixed top-6 left-6 z-50 flex items-center gap-1 rounded-pill bg-surface/90 backdrop-blur-sm border border-border/40 pl-3 pr-1 py-1"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration * 0.6,
        ease: theme.motion.easing,
      }}
    >
      <Link
        href="/locations"
        aria-label="View locations and guest actions"
        className="grid place-items-center w-9 h-9 rounded-md hover:bg-surface-hover transition-colors"
      >
        <span className="block w-4 h-px bg-text relative before:content-[''] before:absolute before:top-[-5px] before:left-0 before:w-4 before:h-px before:bg-text after:content-[''] after:absolute after:top-[5px] after:left-0 after:w-4 after:h-px after:bg-text" />
      </Link>

      {/* Wordmark */}
      <Link href="/" className="px-2 font-display text-text" style={{ fontSize: '20px', letterSpacing: '0.02em' }}>
        {content.brand.logoText}
      </Link>

      {/* Nav links */}
      <nav className="hidden sm:flex items-center">
        {content.nav.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 text-ui-label text-text/85 hover:text-text transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Aliveness retrofit (2026-04-20): LiveOpenStatus text variant — ceremonial
          register discipline, no dot, subtle low-opacity per audit §12.4. */}
      {/* content.ts uses top-level `as const` → everything is readonly.
          HoursConfig expects mutable arrays; unknown-cast widens cleanly here.
          Forks that drop the `as const` will no longer need this cast. */}
      <LiveOpenStatus
        hours={content.brand.hoursConfig as unknown as HoursConfig}
        variant="text"
        className="hidden lg:inline-flex px-3 text-ui-label text-text/60"
      />

      {/* Primary CTA */}
      <a
        href={content.nav.cta.href}
        target={ctaIsExternal ? '_blank' : undefined}
        rel={ctaIsExternal ? 'noopener noreferrer' : undefined}
        className="ml-1 px-4 py-2 rounded-pill bg-surface-hover hover:bg-border text-ui-label text-text border border-border/60 transition-colors"
      >
        {content.nav.cta.label}
      </a>
    </motion.header>
  );
}
