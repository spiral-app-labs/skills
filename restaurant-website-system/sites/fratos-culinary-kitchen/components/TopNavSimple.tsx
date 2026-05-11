// TopNavSimple — sticky white top bar. Wordmark-left / center links / right CTA.
// Real forks should add a persistent "Order Now" pill (per audit §5 conversion
// weakness note) — we wire it in by default here since it's a mid-tier-casual
// order-first register.
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus pill shows between logo and
// nav on desktop — casual urgency variant ("Open now · closes in 38 min"
// reduces walk-in friction per aliveness-patterns.md §1.1).

'use client';

import Link from 'next/link';
import { PepperWordmark } from './PepperWordmark';
import { LiveOpenStatus } from './LiveOpenStatus';
import { content } from '../content.example';

export function TopNavSimple() {
  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75 border-b border-divider">
      <div className="max-w-content mx-auto">
        <div className="flex h-16 items-center justify-between gap-3 px-4 md:px-10">
          <Link href="/" aria-label={content.brand.name} className="flex items-center gap-4">
            <PepperWordmark size="md" />
            <LiveOpenStatus
              hours={content.brand.hoursConfig}
              variant="pill"
              className="hidden lg:inline-flex text-xs"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {content.nav.primary.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-nav-label text-ink hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={content.nav.cta.href}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-pill bg-[#FF003C] px-3 text-[12px] font-extrabold leading-none text-white shadow-sm transition-colors hover:bg-[#E00035] sm:px-5 sm:text-button"
          >
            {content.nav.cta.label}
          </a>
        </div>

        <div className="border-t border-divider md:hidden">
          <nav className="flex max-w-full flex-wrap items-center justify-center gap-2 px-4 py-3">
            {content.nav.mobileQuickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-pill border border-card-border bg-white px-4 text-[12px] font-extrabold uppercase tracking-[0.08em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
