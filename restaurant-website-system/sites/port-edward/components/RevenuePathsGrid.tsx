'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content.example';

function PathLink({ href, children }: { href: string; children: ReactNode }) {
  const className = 'block border border-hairline bg-canvas p-5 transition-colors hover:border-accent';
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function RevenuePathsGrid() {
  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-10 max-w-3xl">
          <p className="label-eyebrow mb-3 text-accent">{content.revenuePaths.eyebrow}</p>
          <h2 className="font-display text-[42px] leading-[46px] text-ink md:text-section-h2">
            {content.revenuePaths.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {content.revenuePaths.items.map((path, i) => (
            <motion.div
              key={path.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1], delay: i * 0.05 }}
            >
              <PathLink href={path.href}>
                <p className="mb-3 font-display text-[28px] leading-8 text-ink">{path.label}</p>
                <p className="text-body-sm text-ink-muted">{path.detail}</p>
              </PathLink>
            </motion.div>
          ))}
        </div>

        <div id="dockside" className="mt-6 border border-accent bg-canvas-alt p-6 md:p-8">
          <p className="label-eyebrow mb-3 text-accent">{content.dockside.eyebrow}</p>
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h3 className="font-display text-[34px] leading-10 text-ink md:text-section-h2-sm">
                {content.dockside.heading}
              </h3>
              <p className="mt-3 max-w-3xl text-body text-ink-muted">{content.dockside.body}</p>
            </div>
            <a
              href={content.dockside.cta.href}
              className="inline-flex items-center justify-center border border-ink px-5 py-3 text-button text-ink transition-colors hover:bg-ink hover:text-ink-on-dark"
            >
              {content.dockside.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
