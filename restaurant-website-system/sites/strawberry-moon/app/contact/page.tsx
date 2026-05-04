import { content } from '../../content';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { ContactFormPanel } from '../../components/ContactFormPanel';
import { ContactInteriorStrip } from '../../components/ContactInteriorStrip';
import { LowChromeFaqAccordion } from '../../components/LowChromeFaqAccordion';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import Link from 'next/link';

export default function ContactPage() {
  const c = content.contact;
  const b = content.brand;
  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading eyebrow={c.eyebrow} heading={c.h1} />

      {/* 2-col: booking info left, form right */}
      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 md:px-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <aside className="md:col-span-4">
              <h3 className="text-h3 mb-6">{c.bookNow.heading}</h3>
              <div className="grid grid-cols-2 gap-6 max-w-sm">
                <div>
                  <div className="text-micro text-ink mb-1">{c.bookNow.viaEmail.label}</div>
                  <Link href={c.bookNow.viaEmail.href} className="vs-link text-body underline underline-offset-4 decoration-ink/30">
                    {c.bookNow.viaEmail.value}
                  </Link>
                </div>
                <div>
                  <div className="text-micro text-ink mb-1">{c.bookNow.whatsapp.label}</div>
                  <Link href={c.bookNow.whatsapp.href} className="vs-link text-body underline underline-offset-4 decoration-ink/30">
                    {c.bookNow.whatsapp.value}
                  </Link>
                </div>
              </div>

              <h3 className="text-h3 mt-10 mb-6">{c.visit.heading}</h3>
              <address className="not-italic text-body text-ink leading-[1.6]">
                {c.visit.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <Link href={c.visit.directionsLink} className="vs-link inline-block mt-3 text-body underline underline-offset-4 decoration-ink/40">
                get directions
              </Link>

              <div className="mt-8">
                <div className="text-body mb-1">{c.visit.hoursHeading}</div>
                {c.visit.hours.map((h) => (
                  <div key={h} className="text-body text-ink">{h}</div>
                ))}
              </div>

              <h3 className="text-h3 mt-10 mb-4">{c.socials.heading}</h3>
              <ul className="space-y-1">
                {c.socials.links.map((s) => {
                  const isExternal = 'external' in s && s.external;
                  return (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="vs-link text-body"
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                      >
                        {s.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div className="md:col-span-8">
              <ContactFormPanel />
            </div>
          </div>
        </div>
      </section>

      <ContactInteriorStrip photos={c.interiorStrip} />

      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 md:px-10 pb-12 md:pb-16">
          <LiveMapEmbed
            address={`${b.address.line1}, ${b.address.line2}`}
            lat={b.geo.lat}
            lng={b.geo.lng}
            zoom={15}
            mapLabel={`${b.name} — ${b.address.line2}`}
            aspectRatio="16/9"
            className="ring-1 ring-white/10"
            ctaLabel="Directions →"
          />
        </div>
      </section>

      <LowChromeFaqAccordion heading={c.faqHeading} faqs={c.faqs} />
    </WordmarkBookendLayout>
  );
}
