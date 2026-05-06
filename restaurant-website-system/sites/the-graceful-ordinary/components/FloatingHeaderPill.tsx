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
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex max-w-[calc(100vw-24px)] items-center gap-1 overflow-hidden rounded-pill bg-surface/95 backdrop-blur-sm border border-border/50 pl-2 md:pl-3 pr-1 py-1.5"
      initial={{ opacity: 0, y: -8 }}
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
        className="truncate px-2 md:px-3 font-display text-text whitespace-nowrap"
        style={{ fontSize: '16px', letterSpacing: '0.08em' }}
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
        className="ml-1 md:ml-2 px-3 md:px-4 py-2 rounded-pill border border-accent/60 hover:border-accent text-button text-accent hover:bg-accent/10 transition-colors whitespace-nowrap"
      >
        {content.nav.cta.label}
      </Link>
    </motion.header>

    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 gap-2 rounded-card border border-border/50 bg-surface/95 p-2 shadow-2xl backdrop-blur md:hidden">
      <Link
        href={content.nav.cta.href}
        className="rounded-pill bg-accent px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[1.6px] text-canvas"
      >
        Reserve
      </Link>
      <Link
        href="/menu"
        className="rounded-pill border border-border/70 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[1.6px] text-text"
      >
        Menu
      </Link>
      <Link
        href={`tel:+${content.brand.phone.replace(/[^0-9]/g, '')}`}
        className="rounded-pill border border-border/70 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[1.6px] text-text"
      >
        Call
      </Link>
    </div>
    </>
  );
}
