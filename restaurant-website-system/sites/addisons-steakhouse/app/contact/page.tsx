import Link from 'next/link';
import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHero } from '../../components/PageHero';
import { QuoteOnPhotoOverlay } from '../../components/QuoteOnPhotoOverlay';
import { RichFooter } from '../../components/RichFooter';
import { DH } from '../../components/DisplayHeading';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import { content } from '../../content.example';
import { theme } from '../../theme';

// Aliveness retrofit (2026-04-20): LiveMapEmbed added between the
// address-detail section and the closing quote. Decorated with a rounded
// border matching the dark warm-upscale register per aliveness-patterns.md §2.1.

export default function ContactPage() {
  const c = content.contact;
  const b = content.brand;
  return (
    <>
      <FloatingHeaderPill />
      <main>
        <PageHero image={c.pageImage} title={c.pageTitle} />

        <section className="px-6 md:px-12 py-20 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Find us */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-eyebrow">{c.findUs.eyebrow}</p>
                <DH content={c.findUs.heading} as="h2" size="section-h1" italicColor={theme.color.accent} />
              </div>
              <div className="space-y-2 text-body text-text">
                <p className="text-eyebrow text-text-muted mb-1">Address</p>
                <p>{b.addressFull}</p>
              </div>
              <div className="space-y-2 text-body text-text">
                <p className="text-eyebrow text-text-muted mb-1">Phone</p>
                <a href={`tel:+${b.phone.replace(/[^0-9]/g, '')}`} className="hover:text-accent transition-colors">
                  {b.phone}
                </a>
              </div>
              {b.email && (
                <div className="space-y-2 text-body text-text">
                  <p className="text-eyebrow text-text-muted mb-1">Email</p>
                  <p>{b.email}</p>
                </div>
              )}
              <div className="space-y-2 text-body text-text">
                <p className="text-eyebrow text-text-muted mb-2">Hours of Operation</p>
                {b.hours.map(h => (
                  <p key={h.days} className="text-body-sm">
                    <span className="text-text-muted">{h.days}</span>
                    <span className="ml-2 text-text">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Reserve + Good to Know */}
            <div className="space-y-6">
              <div className="rounded-card bg-surface border border-border/40 p-6 space-y-4">
                <p className="text-eyebrow">{c.reserve.eyebrow}</p>
                <h2 className="font-display text-card-title text-text">{c.reserve.heading}</h2>
                <p className="text-body-sm text-text-muted">{c.reserve.body}</p>
                <Link
                  href={c.reserve.cta.href}
                  className="block w-full text-center px-6 py-3 rounded-pill bg-accent hover:bg-accent-hover text-button text-surface transition-colors"
                >
                  {c.reserve.cta.label}
                </Link>
              </div>

              <div className="rounded-card bg-surface border border-border/40 p-6 space-y-3">
                <p className="text-eyebrow">{c.goodToKnow.eyebrow}</p>
                <ul className="space-y-1.5">
                  {c.goodToKnow.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-body-sm text-text-muted">
                      <span className="text-accent mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-20 max-w-[1100px] mx-auto">
          <LiveMapEmbed
            address={content.brand.addressFull}
            lat={content.brand.geo.lat}
            lng={content.brand.geo.lng}
            zoom={15}
            mapLabel={`${content.brand.name} — ${content.brand.location}`}
            aspectRatio="16/9"
            className="rounded-card overflow-hidden border border-border/40"
          />
        </section>

        <QuoteOnPhotoOverlay
          image={c.bottomQuote.image}
          quote={c.bottomQuote.quote}
          attribution=""
        />
      </main>
      <RichFooter />
    </>
  );
}
