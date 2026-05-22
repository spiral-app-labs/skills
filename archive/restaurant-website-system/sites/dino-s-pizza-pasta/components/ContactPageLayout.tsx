// ContactPageLayout — page H1 + multi-city address blocks + message form +
// delivery-info accordion reused from home. Per audit §11.
//
// Aliveness retrofit (2026-04-20): interactive LiveMapEmbed replaces the
// static location tiles as the primary map surface. The city tiles still
// render below as a quick visual finder.

'use client';

import { NumberedAccordion } from './NumberedAccordion';
import { LiveMapEmbed } from './LiveMapEmbed';
import { LiveOpenStatus } from './LiveOpenStatus';
import { content } from '../content';

export function ContactPageLayout() {
  const c = content.contact;
  return (
    <main className="bg-canvas">
      <section className="max-w-content mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <h1 className="text-hero-h1 font-extrabold text-ink">{c.title}</h1>
        <p className="mt-4 max-w-[720px] text-body text-ink-soft">{c.subtitle}</p>
        <div className="mt-6">
          <LiveOpenStatus hours={content.brand.hoursConfig} variant="pill" />
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-12">
        <div className="hidden md:block">
          <LiveMapEmbed
            address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
            query={content.brand.mapQuery}
            mapLabel={`${content.brand.name} — ${content.brand.address.line2}`}
            aspectRatio="16/9"
            hideCta
          />
        </div>
        <div className="md:hidden rounded-[32px] border border-card-border bg-canvas-warm p-6 shadow-card">
          <p className="text-eyebrow font-bold uppercase text-accent">Miller Road</p>
          <h2 className="mt-2 text-[30px] leading-[36px] font-extrabold text-ink">6 Miller Rd</h2>
          <p className="mt-2 text-body text-ink-soft">Lake in the Hills, IL 60156</p>
          <div className="mt-5 rounded-[24px] bg-ink p-5 text-text-on-dark">
            <p className="text-body font-bold">Find us on Miller Road</p>
            <p className="mt-2 text-body-sm opacity-80">Open Google Maps for Dino’s verified address before heading over.</p>
          </div>
        </div>
        <a
          href={content.brand.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-12 items-center justify-center rounded-pill bg-ink px-6 text-button text-text-on-dark hover:bg-accent transition-colors"
        >
          Get directions →
        </a>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[28px] leading-[36px] font-extrabold text-ink">Direct Contact</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {c.contactFacts.map((item) => (
                <div key={item.label} className="rounded-card border border-card-border bg-canvas-warm p-5">
                  <h3 className="text-body font-extrabold text-ink">{item.label}</h3>
                  <div className="mt-2 text-body-sm text-ink-soft">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[28px] leading-[36px] font-extrabold text-ink">Quick Links</h2>
            <div className="mt-6 space-y-3">
              {c.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex min-h-12 items-center justify-between gap-4 rounded-card border border-card-border px-5 py-4 text-body hover:border-accent hover:bg-canvas-warm transition-colors"
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="text-accent">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <h2 className="text-section-h2 font-extrabold text-ink">Visit Notes</h2>
        <div className="mt-10">
          <NumberedAccordion rows={content.visit.accordion} />
        </div>
      </section>
    </main>
  );
}
