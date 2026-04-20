// TopNavSimple — sticky white top bar. Wordmark-left / center links / right CTA.
// Real forks should add a persistent "Order Now" pill (per audit §5 conversion
// weakness note) — we wire it in by default here since it's a mid-tier-casual
// order-first register.

'use client';

import Link from 'next/link';
import { PepperWordmark } from './PepperWordmark';
import { content } from '../content.example';

export function TopNavSimple() {
  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75 border-b border-divider">
      <div className="max-w-content mx-auto flex items-center justify-between px-5 md:px-10 h-16">
        <Link href="/" aria-label={content.brand.name} className="flex items-center">
          <PepperWordmark size="md" />
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
          className="inline-flex items-center justify-center h-10 px-5 rounded-pill bg-ink text-text-on-dark text-button hover:bg-accent transition-colors"
        >
          {content.nav.cta.label}
        </a>
      </div>
    </header>
  );
}
