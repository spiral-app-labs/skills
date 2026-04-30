'use client';

import { motion } from 'framer-motion';
import { content } from '../content';
import { theme } from '../theme';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

export function LocationsPanel() {
  return (
    <main className="px-6 md:px-10 py-12 md:py-16 pb-28 md:pb-16 space-y-12">
      <motion.header
        className="space-y-4"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <div className="flex items-center justify-center gap-4">
          <span className="block w-8 h-px bg-text-muted/40" />
          <h2 className="text-section-h2 text-text">Choose a location</h2>
          <span className="block w-8 h-px bg-text-muted/40" />
        </div>
        <p className="text-body text-text-muted leading-relaxed text-center">
          Reserve or order carry-out from Lake in the Hills, or call either
          dining room before you head over.
        </p>
      </motion.header>

      <section className="space-y-5">
        {content.locations.map((location, index) => (
          <motion.article
            key={location.name}
            className="overflow-hidden rounded-card border border-border/60 bg-surface/35 transition-colors hover:border-text/35"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: theme.motion.revealDuration,
              ease: theme.motion.easing,
              delay: index * 0.08,
            }}
          >
            <LiveMapEmbed
              address={location.address}
              zoom={15}
              mapLabel={`${content.brand.name} ${location.name}`}
              aspectRatio="16/9"
              hideCta
              className="rounded-none border-b border-border/60 bg-canvas"
            />

            <div className="space-y-5 p-5">
              <div className="grid grid-cols-[38px_1fr] gap-4">
                <p className="text-ui-label text-text-muted">{String(index + 1).padStart(2, '0')}</p>
                <div className="space-y-2">
                  <p className="text-ui-label text-text-muted">{location.role}</p>
                  <h3 className="text-section-h2 text-text">{location.name}</h3>
                  <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 min-[520px]:grid-cols-2 gap-2">
                {location.actions.map((action) => (
                  <LocationLink
                    key={`${location.name}-${action.label}`}
                    href={action.href}
                    label={action.label}
                    primary={'primary' in action ? action.primary : false}
                  />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="space-y-4">
        <p className="text-ui-label text-text-muted">Shared hours</p>
        <div className="rounded-card border border-border/60 bg-surface/45 p-5 space-y-4">
          <LiveOpenStatus
            hours={content.brand.hoursConfig as unknown as HoursConfig}
            variant="text"
            className="text-body text-text"
          />
          <div className="space-y-3">
            {content.brand.hoursDisplay.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-[88px_1fr] gap-4 border-t border-border/60 pt-3"
              >
                <p className="text-ui-label text-text-muted">{row.day}</p>
                <p className="text-body text-text">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function LocationLink({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  const external = href.startsWith('http');

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill border px-4 py-3 text-center text-ui-label transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
        primary
          ? 'border-text/70 bg-text text-canvas hover:bg-text/90'
          : 'border-border/70 bg-surface text-text hover:bg-surface-hover'
      }`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: theme.motion.transitionDuration }}
    >
      {label}
    </motion.a>
  );
}
