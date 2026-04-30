'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    'inline-flex items-center justify-center border border-ink px-5 py-3 text-button text-ink transition-colors hover:bg-ink hover:text-ink-on-dark';
  if (href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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

export function ServiceTypeSelector() {
  const [activeId, setActiveId] = useState(content.services.items[0].id);
  const reducedMotion = useReducedMotion();
  const active = useMemo(
    () => content.services.items.find((item) => item.id === activeId) ?? content.services.items[0],
    [activeId],
  );

  return (
    <section id="plan" className="w-full bg-canvas-alt py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="label-eyebrow mb-3 text-accent">{content.services.eyebrow}</p>
          <h2 className="font-display text-[42px] leading-[46px] text-ink md:text-section-h2">
            {content.services.heading}
          </h2>
          <p className="mt-4 text-body text-ink-muted">{content.services.intro}</p>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Reservation service types">
          {content.services.items.map((item) => {
            const selected = item.id === active.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                role="tab"
                id={`service-tab-${item.id}`}
                aria-controls={`service-panel-${item.id}`}
                aria-selected={selected}
                onClick={() => setActiveId(item.id)}
                whileHover={reducedMotion ? undefined : { y: -2 }}
                whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                className={`relative shrink-0 overflow-hidden border px-4 py-3 text-left transition-colors ${
                  selected
                    ? 'border-ink text-ink-on-dark'
                    : 'border-hairline bg-canvas text-ink hover:border-accent'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="service-tab-fill"
                    className="absolute inset-0 bg-ink"
                    transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10 block font-display text-[20px] leading-6">{item.label}</span>
                <span className={`relative z-10 mt-1 block text-[12px] leading-4 ${selected ? 'text-ink-on-dark/70' : 'text-ink-muted'}`}>
                  {item.status}
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id={`service-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${active.id}`}
            className="grid grid-cols-1 overflow-hidden border border-hairline bg-canvas md:grid-cols-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative min-h-[280px] bg-hairline md:col-span-5 md:min-h-[460px]">
              <Image
                src={active.photo}
                alt={active.label}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 md:col-span-7 md:p-10">
              <p className="label-eyebrow mb-4 text-accent">{active.status}</p>
              <h3 className="mb-5 font-display text-[36px] leading-10 text-ink md:text-section-h2-sm">
                {active.label}
              </h3>
              <p className="max-w-2xl text-body text-ink-muted">{active.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink href={active.href}>{active.cta}</ActionLink>
                <a
                  href={content.brand.phoneHref}
                  className="inline-flex items-center justify-center bg-accent px-5 py-3 text-button text-ink-on-dark transition-colors hover:bg-accent-dark"
                >
                  {content.brand.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
