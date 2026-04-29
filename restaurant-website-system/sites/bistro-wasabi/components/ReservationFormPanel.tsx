'use client';

import { motion } from 'framer-motion';
import { content, links } from '../content';
import { theme } from '../theme';

export function ReservationFormPanel() {
  return (
    <motion.div
      className="px-8 md:px-10 py-12 md:py-16 space-y-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration,
        ease: theme.motion.easing,
        delay: theme.motion.revealStagger * 2,
      }}
    >
      <header className="text-center space-y-3">
        <div className="flex items-center justify-center gap-4">
          <span className="block w-8 h-px bg-text-muted/40" />
          <h2 className="text-section-h2 text-text">{content.reservation.headline}</h2>
          <span className="block w-8 h-px bg-text-muted/40" />
        </div>
        <p className="text-body text-text-muted leading-relaxed max-w-sm mx-auto">
          {content.reservation.intro}
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-ui-label text-text-muted">Primary actions</p>
        <div className="grid grid-cols-1 gap-2">
          <ProviderLink href={links.tock} label="Reserve Lake in the Hills on Tock" primary />
          <ProviderLink href={links.carryOut} label="Order Lake in the Hills carry-out on Toast" />
          <ProviderLink href={links.giftCards} label="Buy Toast gift card" />
          <ProviderLink href={links.delivery} label="Order delivery on Uber Eats" />
        </div>
      </section>

      <section className="space-y-4">
        <p className="text-ui-label text-text-muted">Location handoff</p>
        <div className="space-y-5">
          {content.locations.map((location) => (
            <article key={location.name} className="border-t border-border/60 pt-5 space-y-3">
              <div>
                <h3 className="text-item-name text-text">{location.name}</h3>
                <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {location.actions.slice(0, 4).map((action) => (
                  <ProviderLink
                    key={`${location.name}-${action.label}`}
                    href={action.href}
                    label={action.label}
                    primary={'primary' in action ? action.primary : false}
                    compact
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function ProviderLink({
  href,
  label,
  primary = false,
  compact = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
  compact?: boolean;
}) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill border px-4 text-center text-ui-label transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
        primary
          ? 'border-text/70 bg-text text-canvas hover:bg-text/90'
          : 'border-border/70 bg-surface text-text hover:bg-surface-hover'
      } ${compact ? 'py-3' : 'py-3.5'}`}
    >
      {label}
    </a>
  );
}
