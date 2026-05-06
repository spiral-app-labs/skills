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
      className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 flex w-[calc(100vw-20px)] max-w-[calc(100vw-20px)] items-center justify-between gap-2 overflow-hidden rounded-pill border border-border/50 bg-surface/95 px-2 py-1.5 backdrop-blur-sm md:w-auto md:max-w-[calc(100vw-24px)] md:justify-start md:gap-1 md:pl-3 md:pr-1"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration * 0.6,
        ease: theme.motion.easing,
      }}
    >
      <Link
        href="/menu"
        className="inline-flex h-9 items-center rounded-pill border border-border/70 px-3 text-[11px] font-semibold uppercase tracking-[1.6px] text-text transition-colors hover:border-accent/60 hover:text-accent md:hidden"
      >
        Menu
      </Link>

      <Link
        href="/"
        className="min-w-0 flex-1 truncate px-1 text-center font-display text-text whitespace-nowrap md:flex-none md:px-3 md:text-left"
        style={{ fontSize: 'clamp(14px, 3.8vw, 16px)', letterSpacing: '0.08em' }}
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
        className="ml-0 rounded-pill border border-accent/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[1.6px] whitespace-nowrap text-accent transition-colors hover:border-accent hover:bg-accent/10 md:ml-2 md:px-4 md:text-button"
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
