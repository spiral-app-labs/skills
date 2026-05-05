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
import { content } from '../content';

export function TopNavSimple() {
  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75 border-b border-divider">
      <div className="max-w-content mx-auto flex items-center justify-between px-5 md:px-10 h-16">
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
              className="inline-flex min-h-10 min-w-10 items-center justify-center text-nav-label text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={content.brand.menuHref}
            className="inline-flex md:hidden items-center justify-center h-10 px-4 rounded-pill border border-divider bg-canvas-warm text-ink text-button hover:border-accent transition-colors"
          >
            Menu
          </a>
          <a
            href={content.nav.cta.href}
            className="inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-pill bg-ink text-text-on-dark text-button hover:bg-accent transition-colors"
          >
            <span className="hidden sm:inline">{content.nav.cta.label}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
