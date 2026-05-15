import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FloatingHeaderPill } from '../../../components/FloatingHeaderPill';
import { LiveMapEmbed } from '../../../components/LiveMapEmbed';
import { LiveOpenStatus } from '../../../components/LiveOpenStatus';
import { MinimalFooter } from '../../../components/MinimalFooter';
import { content } from '../../../content';
import type { HoursConfig } from '../../../lib/hours';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_BODY = 'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif';
const INK = '#EFE3CC';
const INK_MUTED = '#C9B894';
const BRASS = '#8C6A3A';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return content.locations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const location = content.locations.find((l) => l.slug === params.slug);
  if (!location) return {};
  return {
    title: `${location.name} — ${content.brand.name}`,
    description: location.shortLine,
  };
}

export default function LocationDetailPage({ params }: Params) {
  const location = content.locations.find((l) => l.slug === params.slug);
  if (!location) notFound();

  return (
    <>
      <FloatingHeaderPill />
      <main className="px-6 md:px-12 pt-32 md:pt-40 pb-28 md:pb-32 space-y-16 md:space-y-24">
        <header className="space-y-4 max-w-3xl">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 uppercase transition-colors hover:text-[color:var(--brass)]"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: INK_MUTED,
              ['--brass' as never]: BRASS,
            }}
          >
            <span aria-hidden>←</span>
            <span>Both locations</span>
          </Link>
          <p
            className="uppercase pt-4"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.32em',
              color: INK_MUTED,
            }}
          >
            {location.role}
          </p>
          <h1
            style={{
              fontFamily: FONT_DISPLAY,
              fontStyle: 'italic',
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              fontWeight: 500,
              color: INK,
            }}
          >
            {location.name}
          </h1>
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontStyle: 'italic',
              fontSize: 'clamp(17px, 1.6vw, 22px)',
              lineHeight: 1.45,
              color: INK,
              opacity: 0.86,
              maxWidth: '52ch',
            }}
          >
            {location.shortLine}
          </p>
        </header>

        <section className="space-y-6">
          <LiveMapEmbed
            address={location.address}
            lat={location.geo?.lat}
            lng={location.geo?.lng}
            zoom={16}
            mapLabel={`${content.brand.name} ${location.name}`}
            aspectRatio="16/9"
            hideCta
            className="border-0 bg-canvas md:hidden"
          />
          <LiveMapEmbed
            address={location.address}
            lat={location.geo?.lat}
            lng={location.geo?.lng}
            zoom={16}
            mapLabel={`${content.brand.name} ${location.name}`}
            aspectRatio="21/9"
            hideCta
            className="border-0 bg-canvas hidden md:block"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
          <div className="space-y-10">
            <div className="space-y-3">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                About this dining room
              </p>
              <p
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: 'italic',
                  fontSize: 'clamp(17px, 1.4vw, 20px)',
                  lineHeight: 1.55,
                  color: INK,
                  opacity: 0.92,
                  maxWidth: '60ch',
                }}
              >
                {location.longDescription}
              </p>
            </div>

            <div className="space-y-4">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                What's available here
              </p>
              <ul className="space-y-2">
                {location.services?.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 border-t py-3"
                    style={{ borderColor: 'rgba(239,227,204,0.14)' }}
                  >
                    <span
                      aria-hidden
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: '15px',
                        color: BRASS,
                        lineHeight: '1.5',
                      }}
                    >
                      ·
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_DISPLAY,
                        fontStyle: 'italic',
                        fontSize: '16px',
                        lineHeight: 1.5,
                        color: INK,
                        opacity: 0.86,
                      }}
                    >
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                Parking
              </p>
              <p
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: 'italic',
                  fontSize: '16px',
                  lineHeight: 1.55,
                  color: INK,
                  opacity: 0.86,
                }}
              >
                {location.parking}
              </p>
            </div>
          </div>

          <aside className="space-y-10 md:sticky md:top-32 md:self-start">
            <div className="space-y-3">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                Address
              </p>
              <p
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: 'italic',
                  fontSize: 'clamp(17px, 1.6vw, 22px)',
                  lineHeight: 1.4,
                  color: INK,
                }}
              >
                {location.address}
              </p>
            </div>

            <div className="space-y-3">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                Phone
              </p>
              <a
                href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`}
                className="block transition-colors hover:text-[color:var(--brass)]"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontStyle: 'italic',
                  fontSize: 'clamp(17px, 1.6vw, 22px)',
                  color: INK,
                  ['--brass' as never]: BRASS,
                }}
              >
                {location.phone}
              </a>
            </div>

            <div className="space-y-4">
              <p
                className="uppercase"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                Hours
              </p>
              <LiveOpenStatus
                hours={content.brand.hoursConfig as unknown as HoursConfig}
                variant="text"
              />
              <div className="space-y-0">
                {content.brand.hoursDisplay.map((row) => (
                  <div
                    key={row.day}
                    className="grid grid-cols-[88px_1fr] gap-6 border-t py-2.5"
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
                        fontSize: '16px',
                        color: INK,
                      }}
                    >
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-0 pt-2">
              <p
                className="uppercase pb-4"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.32em',
                  color: INK_MUTED,
                }}
              >
                Actions
              </p>
              {location.actions.map((action) => {
                const href = action.href;
                const external = href.startsWith('http');
                return (
                  <a
                    key={action.label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 border-t py-4 transition-colors"
                    style={{ borderColor: 'rgba(239,227,204,0.14)' }}
                  >
                    <span
                      className="uppercase transition-colors group-hover:text-[color:var(--brass)]"
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: '12px',
                        letterSpacing: '0.18em',
                        color: INK,
                        ['--brass' as never]: BRASS,
                      }}
                    >
                      {action.label}
                    </span>
                    <span
                      className="transition-colors group-hover:text-[color:var(--brass)]"
                      style={{
                        fontFamily: FONT_BODY,
                        fontSize: '16px',
                        color: INK_MUTED,
                        ['--brass' as never]: BRASS,
                      }}
                    >
                      →
                    </span>
                  </a>
                );
              })}
            </div>
          </aside>
        </section>
      </main>
      <MinimalFooter />
    </>
  );
}
