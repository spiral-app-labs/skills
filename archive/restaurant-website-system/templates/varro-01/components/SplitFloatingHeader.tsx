'use client';
// SplitFloatingHeader — wordmark top-left + hamburger + CTA top-right.
// Variant of FloatingHeaderPill (1776/qitchen) with position: 'split'.
// Per audit §3 — fixed on scroll, hamburger reveals overlay.

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../content.example';

export function SplitFloatingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-5 lg:px-12 py-5">
        <div className="mx-auto max-w-page flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-ink">
            <span className="font-display text-2xl leading-none tracking-tight">✦</span>
            <span className="font-display text-xl leading-none lowercase tracking-tight">varro</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={content.nav.cta.href}
              className="hidden md:inline-flex items-center justify-center rounded-pill bg-accent text-cta font-body text-button font-medium px-5 py-2.5 hover:bg-accent-soft transition-colors"
            >
              {content.nav.cta.label}
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex flex-col items-center justify-center gap-1.5 text-ink rounded-pill border border-divider hover:border-accent transition-colors"
            >
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-canvas flex flex-col px-6 py-8"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 flex items-center justify-center text-ink text-2xl"
              >
                ×
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {content.nav.primary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-5xl uppercase text-ink hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={content.nav.cta.href}
                onClick={() => setOpen(false)}
                className="mt-4 rounded-pill bg-accent text-cta font-body text-button font-medium px-8 py-3 hover:bg-accent-soft transition-colors"
              >
                {content.nav.cta.label}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
