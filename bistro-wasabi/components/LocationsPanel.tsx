'use client';

import { motion } from 'framer-motion';
import { content } from '../content';
import { theme } from '../theme';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_BODY = 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif';
const INK = '#EFE3CC';
const INK_MUTED = '#C9B894';
const BRASS = '#8C6A3A';

export function LocationsPanel() {
  return (
    <main className="px-6 md:px-10 py-16 md:py-24 pb-28 md:pb-24 space-y-16 md:space-y-20">
      <motion.header
        className="space-y-3 max-w-xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
      >
        <p
          className="uppercase"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '11px',
            letterSpacing: '0.32em',
            color: INK_MUTED,
          }}
        >
          Two locations · Algonquin Road
        </p>
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.005em',
            fontWeight: 500,
            color: INK,
          }}
        >
          Choose where to dine.
        </h2>
        <p
          style={{
            fontFamily: FONT_DISPLAY,
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.4vw, 19px)',
            lineHeight: 1.5,
            color: INK,
            opacity: 0.85,
            maxWidth: '52ch',
          }}
        >
          Reserve or order carry-out from Lake in the Hills, or call either dining room before you head over.
        </p>
      </motion.header>

      <section className="space-y-16 md:space-y-20">
        {content.locations.map((location, index) => (
          <motion.article
            key={location.name}
            className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12 items-start"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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
              aspectRatio="4/3"
              hideCta
              className="border-0 bg-canvas"
            />

            <div className="space-y-8">
              <div className="space-y-2">
                <p
                  className="uppercase"
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '10px',
                    letterSpacing: '0.32em',
                    color: INK_MUTED,
                  }}
                >
                  {String(index + 1).padStart(2, '0')} · {location.role}
                </p>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontStyle: 'italic',
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.005em',
                    fontWeight: 500,
                    color: INK,
                  }}
                >
                  {location.name}
                </h3>
                <p
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontStyle: 'italic',
                    fontSize: '17px',
                    lineHeight: 1.5,
                    color: INK,
                    opacity: 0.82,
                  }}
                >
                  {location.address}
                </p>
              </div>

              <ul className="space-y-2">
                {location.actions.map((action) => (
                  <li
                    key={`${location.name}-${action.label}`}
                    className="border-t pt-3"
                    style={{ borderColor: 'rgba(239,227,204,0.14)' }}
                  >
                    <LocationLink href={action.href} label={action.label} />
                  </li>
                ))}
                <li
                  className="border-t pt-3"
                  style={{ borderColor: 'rgba(239,227,204,0.14)' }}
                >
                  <LocationLink
                    href={`/locations/${location.slug}`}
                    label="Location details"
                  />
                </li>
              </ul>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="space-y-6">
        <p
          className="uppercase"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '10px',
            letterSpacing: '0.32em',
            color: INK_MUTED,
          }}
        >
          Shared hours
        </p>
        <div className="space-y-5">
          <LiveOpenStatus
            hours={content.brand.hoursConfig as unknown as HoursConfig}
            variant="text"
            className=""
          />
          <div className="space-y-0 max-w-md">
            {content.brand.hoursDisplay.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-[96px_1fr] gap-6 border-t py-3"
                style={{ borderColor: 'rgba(239,227,204,0.14)' }}
              >
                <p
                  className="uppercase"
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    color: INK_MUTED,
                  }}
                >
                  {row.day}
                </p>
                <p
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontStyle: 'italic',
                    fontSize: '17px',
                    color: INK,
                  }}
                >
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function LocationLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith('http');

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group inline-flex items-center justify-between w-full transition-colors"
      whileHover={{ x: 2 }}
      transition={{ duration: theme.motion.transitionDuration }}
    >
      <span
        className="uppercase transition-colors group-hover:text-[var(--brass)]"
        style={{
          fontFamily: FONT_BODY,
          fontSize: '12px',
          letterSpacing: '0.18em',
          color: INK,
          ['--brass' as never]: BRASS,
        }}
      >
        {label}
      </span>
      <span
        className="transition-colors group-hover:text-[var(--brass)]"
        style={{
          fontFamily: FONT_BODY,
          fontSize: '16px',
          color: INK_MUTED,
          ['--brass' as never]: BRASS,
        }}
      >
        →
      </span>
    </motion.a>
  );
}
