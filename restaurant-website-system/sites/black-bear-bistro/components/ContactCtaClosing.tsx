'use client';

import Link from 'next/link';
import { content } from '../content.example';
import { HoursTable } from './HoursTable';
import { LiveMapEmbed } from './LiveMapEmbed';

// Closing "Come grab a bite at Plate" block.
// 2-column: photo-left / copy + CTAs + hours-table-right.
export function ContactCtaClosing() {
  const { heading, subcopy, cta, secondaryCta, photo, hours } = content.closing;
  const { brand } = content;
  return (
    <section id="reservations" className="max-w-plate mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-card bg-canvas-alt">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} loading="eager" decoding="async" className="w-full h-full object-cover" />
        </div>

        <div>
          <h2 className="font-display text-section-h2 font-medium text-ink whitespace-pre-line">
            {heading}
          </h2>
          <p className="mt-4 max-w-[46ch] text-body text-ink-muted">{subcopy}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
            >
              {cta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <div className="mt-10 max-w-[360px]">
            <h3 className="text-eyebrow text-ink-muted mb-2">Hours</h3>
            <HoursTable hours={hours} />
          </div>
          <div className="mt-8 max-w-[460px]">
            <LiveMapEmbed
              address={`${brand.address.line1}, ${brand.address.line2}`}
              lat={brand.geo.lat}
              lng={brand.geo.lng}
              zoom={17}
              mapLabel={brand.name}
              aspectRatio="16/9"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
