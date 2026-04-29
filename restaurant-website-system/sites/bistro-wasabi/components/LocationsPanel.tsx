'use client';

import { motion } from 'framer-motion';
import { content } from '../content';
import { theme } from '../theme';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

export function LocationsPanel() {
  return (
    <main className="px-8 md:px-10 py-12 md:py-16 space-y-12">
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
          Start with the location that matches your night. Lake in the Hills accepts
          Tock reservations and Toast carry-out online.
        </p>
      </motion.header>

      <section className="space-y-4">
        <p className="text-ui-label text-text-muted">Published hours</p>
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

      <section className="space-y-5">
        {content.locations.map((location, index) => (
          <motion.article
            key={location.name}
            className="space-y-5 border-t border-border/60 pt-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: theme.motion.revealDuration,
              ease: theme.motion.easing,
              delay: index * 0.08,
            }}
          >
            <div className="space-y-2">
              <p className="text-ui-label text-text-muted">{location.role}</p>
              <h3 className="text-section-h2 text-text">{location.name}</h3>
              <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {location.actions.map((action) => (
                <LocationLink
                  key={`${location.name}-${action.label}`}
                  href={action.href}
                  label={action.label}
                  primary={'primary' in action ? action.primary : false}
                />
              ))}
            </div>
          </motion.article>
        ))}
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
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill border px-4 py-3 text-center text-ui-label transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
        primary
          ? 'border-text/70 bg-text text-canvas hover:bg-text/90'
          : 'border-border/70 bg-surface text-text hover:bg-surface-hover'
      }`}
    >
      {label}
    </a>
  );
}
