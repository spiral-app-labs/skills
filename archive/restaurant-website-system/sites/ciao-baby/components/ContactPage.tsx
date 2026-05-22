// ContactPage — REBUILT from scratch. The source template's /contact is a
// 404-cosplay ("Mama Mia! This page is off the menu"). Audit §11 flagged this
// as a MUST-BUILD. This component delivers: hero photo + address/phone/hours,
// map embed, phone/directions links, and private-party proof. No fake form.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content';
import { BookATableButton } from './BookATableButton';
import { OpeningHoursTable } from './OpeningHoursTable';
import { HeritageStamp } from './HeritageStamp';
import { TruthfulConcierge } from './TruthfulConcierge';

export function ContactPage() {
  const c = content.contact;
  const b = content.brand;

  return (
    <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      {/* HERO — dining-room photo + title overlay */}
      <div className="relative mb-10 overflow-hidden rounded-card">
        <div className="relative min-h-[430px] md:aspect-[21/9] md:min-h-0">
          <Image
            src={c.heroPhoto}
            alt={c.heroPhotoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="gusto-overlay-card gusto-overlay-card-strong absolute left-6 bottom-6 right-6 max-w-xl rounded-card p-7 md:left-10 md:bottom-10 md:p-9">
            <h1 className="font-display text-page-title text-ink">
              {c.heroTitle}
            </h1>
            <p className="mt-4 font-body text-body text-ink-muted">
              {c.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN — info/map + form */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* LEFT — address, phone, hours, map */}
        <div className="md:col-span-5 space-y-6">
          <div className="rounded-card bg-surface p-6 md:p-8">
            <p className="mb-3 font-body text-body-sm font-medium text-ink">
              {c.infoHeading}
            </p>
            <address className="not-italic font-body text-body text-ink-muted">
              {b.address.line1}
              <br />
              {b.address.line2}
              <br />
              {b.address.country}
            </address>
            <p className="mt-4 font-body text-body text-ink-muted">
              <a href={`tel:${b.phone}`} className="hover:text-ink">
                {b.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 font-body text-body-sm text-ink-quiet">
              Hours may vary. Call before a special trip.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              <BookATableButton label="Call Ciao Baby" href={`tel:${b.phone}`} />
              <Link
                href={b.mapLink}
                className="inline-flex w-full items-center justify-center rounded-button border border-ink/25 px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
              >
                Get directions
              </Link>
            </div>
          </div>

          <div className="rounded-card bg-surface p-6 md:p-8">
            <OpeningHoursTable
              heading="Publicly listed hours"
              rows={content.home.hero.sidebar.hours}
            />
          </div>

          <div className="rounded-card bg-surface p-6 md:p-8">
            <p className="font-body text-body-sm font-medium text-ink">
              Directions
            </p>
            <p className="mt-3 font-body text-body-sm text-ink-muted">
              {c.mapCaption}
            </p>
            <Link
              href={b.mapLink}
              className="mt-5 inline-flex items-center justify-center rounded-button border border-ink/25 px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
            >
              Open in Maps
            </Link>
          </div>
        </div>

        {/* RIGHT — direct handoffs + private-party proof */}
        <div className="md:col-span-7">
          <div className="rounded-card bg-surface p-6 md:p-10">
            <h2 className="font-display text-manifesto text-ink">
              {c.formHeading}
            </h2>
            <p className="mt-3 font-body text-body text-ink-muted">
              {c.formSubheading}
            </p>

            <div className="mt-8 rounded-card bg-canvas p-6">
              <p className="font-body text-body-sm font-medium uppercase tracking-wide text-ink">
                Private parties
              </p>
              <ul className="mt-4 space-y-3 font-body text-body-sm text-ink-muted">
                {c.partyProof.map((item) => (
                  <li key={item} className="border-t border-divider pt-3 first:border-t-0 first:pt-0">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`tel:${b.phone}`}
                className="mt-6 inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
              >
                Call about private parties
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <TruthfulConcierge />
      </div>

      <div className="mt-10 flex items-center justify-between">
        <HeritageStamp />
      </div>
    </section>
  );
}
