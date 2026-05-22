// ContactPage — REBUILT from scratch. The source template's /contact is a
// 404-cosplay ("Mama Mia! This page is off the menu"). Audit §11 flagged this
// as a MUST-BUILD. This component delivers: hero photo + address/phone/hours,
// map embed, and a contact form.
'use client';

import Image from 'next/image';
import { content } from '../content.example';
import { BookATableButton } from './BookATableButton';
import { OpeningHoursTable } from './OpeningHoursTable';
import { HeritageStamp } from './HeritageStamp';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';

export function ContactPage() {
  const c = content.contact;
  const b = content.brand;

  return (
    <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      {/* HERO — dining-room photo + title overlay */}
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
              <br />
              <a href={`mailto:${b.email}`} className="hover:text-ink">
                {b.email}
              </a>
            </p>
            <div className="mt-4">
              <LiveOpenStatus hours={b.hoursConfig} variant="pill" />
            </div>
            <div className="mt-6">
              <BookATableButton label="Book a Table" href="#book" />
            </div>
          </div>

          <div className="rounded-card bg-surface p-6 md:p-8">
            <OpeningHoursTable
              heading="Opening Hours"
              rows={content.home.hero.sidebar.hours}
            />
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
              <a href={b.mapLink} className="underline hover:text-ink">
                Open in Maps
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT — contact form */}
        <div className="md:col-span-7">
          <div className="rounded-card bg-surface p-6 md:p-10">
            <h2 className="font-display text-manifesto text-ink">
              {c.formHeading}
            </h2>
            <p className="mt-3 font-body text-body text-ink-muted">
              {c.formSubheading}
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder — a real fork wires this to a handler.
                alert('Thanks — we\'ll be in touch soon.');
              }}
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-body text-body-sm text-ink-muted">
                    {c.formFields.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-input border border-divider bg-canvas px-4 py-3 font-body text-body text-ink placeholder:text-ink-quiet focus:border-ink/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body text-body-sm text-ink-muted">
                    {c.formFields.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-input border border-divider bg-canvas px-4 py-3 font-body text-body text-ink placeholder:text-ink-quiet focus:border-ink/40 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-body text-body-sm text-ink-muted">
                  {c.formFields.subjectLabel}
                </label>
                <input
                  type="text"
                  className="w-full rounded-input border border-divider bg-canvas px-4 py-3 font-body text-body text-ink placeholder:text-ink-quiet focus:border-ink/40 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-body text-body-sm text-ink-muted">
                  {c.formFields.messageLabel}
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full resize-none rounded-input border border-divider bg-canvas px-4 py-3 font-body text-body text-ink placeholder:text-ink-quiet focus:border-ink/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-button bg-ink px-6 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
              >
                {c.formFields.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <HeritageStamp />
      </div>
    </section>
  );
}
