'use client';

import Link from 'next/link';
import { content } from '../content.example';

/**
 * CreamStripNav — persistent flat cream-bg top nav.
 *
 * Audit §3: Framer leakage on the source means the live nav is unstyled
 * (sans-serif / blue link default). We deliberately style it Imbue weight 400
 * in cocoa, matching body tone, with the wordmark as a tracked-uppercase
 * Imbue-900 eyebrow-label per the site's only structural body pattern.
 */
export function CreamStripNav() {
  return (
    <header className="w-full bg-canvas border-b border-hairline/60">
      <div className="max-w-shell mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="label-wordmark text-ink hover:opacity-70 transition-opacity">
          {content.brand.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {content.nav.primary.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-display text-nav-label text-ink hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={content.nav.cta.href}
          className="inline-flex items-center border border-ink text-ink text-button px-5 py-3 hover:bg-ink hover:text-ink-on-dark transition-colors"
        >
          {content.nav.cta.label}
        </Link>
      </div>
    </header>
  );
}
