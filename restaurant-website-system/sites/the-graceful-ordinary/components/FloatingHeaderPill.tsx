'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

/**
 * FloatingHeaderPill — 1776's centered floating header pill.
 *
 * Same primitive as qitchen-01's FloatingHeaderPill but center-positioned at top.
 * The position difference signals different brand registers:
 *   - left  (qitchen)  → editorial / modern / "the work speaks"
 *   - center (1776)    → traditional / formal / "we have nothing to hide"
 *
 * When this gets promoted to shared/, it should accept a `position` prop.
 */
export function FloatingHeaderPill() {
  return (
    <>
    <motion.header
      className="fixed left-3 right-3 top-3 z-50 flex min-w-0 items-center gap-1 overflow-hidden rounded-pill border border-border/60 bg-surface/98 py-1.5 pl-2 pr-2 shadow-[0_16px_44px_rgba(0,0,0,0.22)] backdrop-blur-md md:left-1/2 md:right-auto md:top-6 md:max-w-[calc(100vw-24px)] md:-translate-x-1/2 md:pl-3 md:pr-1"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration * 0.6,
        ease: theme.motion.easing,
      }}
    >
      <button
        aria-label="Open menu"
        className="grid place-items-center w-8 h-8 rounded-md hover:bg-surface-hover transition-colors"
      >
        <span className="block w-3.5 h-px bg-text relative before:content-[''] before:absolute before:top-[-4px] before:left-0 before:w-3.5 before:h-px before:bg-text after:content-[''] after:absolute after:top-[4px] after:left-0 after:w-3.5 after:h-px after:bg-text" />
      </button>

      <Link
        href="/"
        className="min-w-0 flex-1 truncate px-2 font-display text-text whitespace-nowrap md:flex-none md:px-3"
        style={{ fontSize: '15px', letterSpacing: '0.07em' }}
      >
        {content.brand.logo}
      </Link>

      <nav className="hidden sm:flex items-center">
        {content.nav.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 text-nav-link font-body text-text/85 hover:text-text transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Aliveness retrofit (2026-04-20): LiveOpenStatus text variant near the
          reservation CTA — reduces friction for diners scanning for "are they
          open right now?" per aliveness-patterns.md §1.1. */}
      <LiveOpenStatus
        hours={content.brand.hoursConfig as unknown as HoursConfig}
        variant="text"
        className="hidden xl:inline-flex ml-2 px-2 text-nav-link text-text/70 whitespace-nowrap"
      />

      <Link
        href={content.nav.cta.href}
        className="ml-1 hidden rounded-pill border border-accent/60 px-3 py-2 text-button text-accent transition-colors hover:border-accent hover:bg-accent/10 whitespace-nowrap sm:inline-flex md:ml-2 md:px-4"
      >
        {content.nav.cta.label}
      </Link>
    </motion.header>

    <div className="fixed bottom-3 left-3 right-3 z-50 flex min-w-0 gap-1.5 overflow-hidden rounded-card border border-border/60 bg-surface/98 p-2 shadow-2xl backdrop-blur-md md:hidden">
      <Link
        href={content.nav.cta.href}
        className="min-w-0 flex-1 rounded-pill bg-accent px-2 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[1.2px] text-canvas"
      >
        Reserve
      </Link>
      <Link
        href="/menu"
        className="min-w-0 flex-1 rounded-pill border border-border/70 px-2 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[1.2px] text-text"
      >
        Menu
      </Link>
      <Link
        href={`tel:+${content.brand.phone.replace(/[^0-9]/g, '')}`}
        className="min-w-0 flex-1 rounded-pill border border-border/70 px-2 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[1.2px] text-text"
      >
        Call
      </Link>
    </div>
    </>
  );
}
