// ContactPage \u2014 phone-first / Toast-first contact card.
//
// The earlier version of this page rendered an inert form that didn't POST
// anywhere \u2014 a template artifact carried over from gusto-01. Cucina Bella's
// real conversion paths are: (1) Toast Tables for reservations, (2) Erin
// at the catering line for events, (3) the main line for everything else.
// The redesign reflects that.
//
// Per the audit's #4 fix and the discovery & conversion review (2026-04-28),
// this component delivers four explicit actions \u2014 Reserve, Call, Catering,
// Email \u2014 each as a real link / `tel:` / `mailto:` (no fake form submit).

import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';
import { OpeningHoursTable } from './OpeningHoursTable';
import { HeritageStamp } from './HeritageStamp';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';

type ActionCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string; external?: boolean };
};

function ActionCard({ eyebrow, title, description, cta }: ActionCardProps) {
  const externalProps = cta.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <article className="rounded-card border border-divider bg-surface p-6 md:p-8">
      <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-[26px] leading-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 font-body text-body-sm text-ink-muted">
        {description}
      </p>
      <Link
        href={cta.href}
        {...externalProps}
        className="mt-5 inline-flex items-center gap-2 rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
      >
        {cta.label}
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}

export function ContactPage() {
  const c = content.contact;
  const b = content.brand;
  const mailtoHref = b.email
    ? `mailto:${b.email}?subject=${encodeURIComponent('Hello from cucinabellaalgonquin.com')}`
    : '';

  return (
    <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      {/* HERO \u2014 dining-room photo + title overlay */}
      <div className="relative mb-10 overflow-hidden rounded-card">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={c.heroPhoto}
            alt={c.heroPhotoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="gusto-overlay-card absolute left-6 bottom-6 right-6 max-w-xl rounded-card p-7 md:left-10 md:bottom-10 md:p-9">
            <h1 className="font-display text-page-title text-ink">
              {c.heroTitle}
            </h1>
            <p className="mt-4 font-body text-body text-ink-muted">
              {c.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN \u2014 details + ways to reach us */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* LEFT \u2014 address, hours, map */}
        <div className="md:col-span-5 space-y-6">
          <div className="rounded-card bg-surface p-6 md:p-8">
            <p className="mb-3 font-body text-body-sm font-medium text-ink">
              {c.infoHeading}
            </p>
            <address className="not-italic font-body text-body text-ink-muted">
              {b.address.line1}
              <br />
              {b.address.line2}
            </address>
            <p className="mt-4 font-body text-body text-ink-muted">
              <a href={`tel:${b.phone}`} className="hover:text-ink">
                {b.phoneDisplay}
              </a>
              {b.email ? (
                <>
                  <br />
                  <a href={`mailto:${b.email}`} className="hover:text-ink">
                    {b.email}
                  </a>
                </>
              ) : null}
            </p>
            <div className="mt-4">
              <LiveOpenStatus hours={b.hoursConfig} variant="pill" />
            </div>
          </div>

          <div className="rounded-card bg-surface p-6 md:p-8">
            <OpeningHoursTable
              heading="Dinner Hours"
              rows={content.home.hero.sidebar.hours}
            />
            <p className="mt-4 font-body text-body-sm italic text-ink-quiet">
              Dinner only. Walk-ins welcome at the bar.
            </p>
          </div>

          <div className="overflow-hidden rounded-card">
            <LiveMapEmbed
              address={`${b.address.line1}, ${b.address.line2}, ${b.address.country}`}
              lat={b.geo.lat}
              lng={b.geo.lng}
              zoom={15}
              mapLabel={b.name}
              aspectRatio="16/10"
            />
            <p className="bg-surface px-4 py-3 font-body text-body-sm text-ink-muted">
              {c.mapCaption}{' '}
              <a
                href={b.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ink"
              >
                Open in Maps
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT \u2014 four direct ways to reach the kitchen */}
        <div className="md:col-span-7">
          <div className="rounded-card bg-surface/40 p-6 md:p-8">
            <h2 className="font-display text-manifesto text-ink">
              {c.formHeading}
            </h2>
            <p className="mt-3 font-body text-body text-ink-muted">
              {c.formSubheading}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
              <ActionCard
                eyebrow="Reserve"
                title="Book a table on Toast"
                description="The fastest path to a Tuesday\u2013Sunday dinner. Real-time availability."
                cta={{
                  label: 'Reserve on Toast',
                  href: b.reservationUrl,
                  external: true,
                }}
              />
              <ActionCard
                eyebrow="Call the kitchen"
                title={b.phoneDisplay}
                description="General questions, larger parties, special requests, or to-go orders by phone."
                cta={{ label: 'Call now', href: `tel:${b.phone}` }}
              />
              <ActionCard
                eyebrow="Catering & Events"
                title={b.cateringPhoneDisplay}
                description="Ask for Erin. Trays for parties, holidays, baby showers, weddings, and family gatherings."
                cta={{
                  label: 'Call Erin',
                  href: `tel:${b.cateringPhone}`,
                }}
              />
              {b.email ? (
                <ActionCard
                  eyebrow="Email us"
                  title={b.email}
                  description="Press, private events, or anything that doesn\u2019t need an answer tonight. We typically reply within one business day."
                  cta={{ label: 'Send email', href: mailtoHref }}
                />
              ) : null}
            </div>

            {b.sisterVenues && b.sisterVenues.length > 0 ? (
              <div className="mt-8 rounded-card border border-divider bg-canvas/40 p-5 md:p-6">
                <p className="font-body text-chip uppercase tracking-[0.18em] text-accent-warm">
                  The Family
                </p>
                <p className="mt-3 font-body text-body-sm text-ink-muted">
                  Looking for our sister kitchens?
                </p>
                <ul className="mt-3 flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-x-6">
                  {b.sisterVenues.map((v) => (
                    <li key={v.url}>
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-body-sm text-ink underline-offset-4 hover:text-accent-warm hover:underline"
                      >
                        {v.name} &middot; {v.city} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <HeritageStamp />
      </div>
    </section>
  );
}
