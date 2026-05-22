'use client';

import Link from 'next/link';
import { useState } from 'react';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

/**
 * WarmGrayStripHeader — full-bleed warm-gray nav strip.
 * Paired with WarmGrayStripFooter as a unifying bookend.
 * Persistent across all pages.
 */
export function WarmGrayStripHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-strip-warm text-text-strip">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <span className="font-display text-[28px] leading-none italic">{content.brand.name}</span>
          {/* Aliveness retrofit (2026-04-20): LiveOpenStatus text variant ONLY —
              Michelin discipline forbids visible dots/pulses per audit §12.4.
              Shown lg+ only; restrained opacity. */}
          <LiveOpenStatus
            hours={content.brand.hoursConfig as unknown as HoursConfig}
            variant="text"
            className="hidden lg:inline-flex text-nav-label opacity-70"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {content.nav.primary.map((n) => (
            <Link key={n.href + n.label} href={n.href} className="text-nav-label hover:opacity-70 transition-opacity">
              {n.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-2" aria-label="Social links">
            {content.brand.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:opacity-70 transition-opacity">
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
          <Link
            href={content.nav.cta.href}
            className="bg-text text-text-strip px-5 py-2 rounded-pill text-button hover:opacity-80 transition-opacity ml-2"
          >
            {content.nav.cta.label}
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 text-text-strip"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-strip-warm border-t border-strip-warm-dark px-6 py-4 space-y-3">
          {content.nav.primary.map((n) => (
            <Link key={n.href + n.label} href={n.href} onClick={() => setOpen(false)} className="block text-nav-label">
              {n.label}
            </Link>
          ))}
          <Link
            href={content.nav.cta.href}
            onClick={() => setOpen(false)}
            className="inline-block bg-text text-text-strip px-5 py-2 rounded-pill text-button mt-2"
          >
            {content.nav.cta.label}
          </Link>
        </nav>
      )}
    </header>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'facebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2.2V2.1C16.8 2 15.5 2 14.2 2 11.5 2 9.7 3.7 9.7 6.7V10H6v4h3.7v8H13z" />
      </svg>
    );
  }
  if (icon === 'instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 2 .27 2.5.45.6.25 1.1.55 1.5 1 .4.4.7.9 1 1.5.18.5.4 1.3.45 2.5.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.27 2-.45 2.5-.25.6-.55 1.1-1 1.5-.4.4-.9.7-1.5 1-.5.18-1.3.4-2.5.45-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-2-.27-2.5-.45a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.18-.5-.4-1.3-.45-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.27-2 .45-2.5.25-.6.55-1.1 1-1.5.4-.4.9-.7 1.5-1 .5-.18 1.3-.4 2.5-.45C8.4 2.2 8.8 2.2 12 2.2zm0 2c-3.1 0-3.5 0-4.7.06-1.1.05-1.7.23-2 .38-.5.2-.9.44-1.2.77-.33.33-.57.7-.77 1.2-.15.3-.33.9-.38 2-.06 1.2-.06 1.6-.06 4.7s0 3.5.06 4.7c.05 1.1.23 1.7.38 2 .2.5.44.9.77 1.2.33.33.7.57 1.2.77.3.15.9.33 2 .38 1.2.06 1.6.06 4.7.06s3.5 0 4.7-.06c1.1-.05 1.7-.23 2-.38.5-.2.9-.44 1.2-.77.33-.33.57-.7.77-1.2.15-.3.33-.9.38-2 .06-1.2.06-1.6.06-4.7s0-3.5-.06-4.7c-.05-1.1-.23-1.7-.38-2a3 3 0 0 0-.77-1.2 3 3 0 0 0-1.2-.77c-.3-.15-.9-.33-2-.38-1.2-.06-1.6-.06-4.7-.06zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm5.5-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    );
  }
  return null;
}
