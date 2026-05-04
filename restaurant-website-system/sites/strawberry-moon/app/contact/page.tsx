import { content } from '../../content';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { ContactFormPanel } from '../../components/ContactFormPanel';
import { ContactInteriorStrip } from '../../components/ContactInteriorStrip';
import { LowChromeFaqAccordion } from '../../components/LowChromeFaqAccordion';
import { TruthfulConcierge } from '../../components/TruthfulConcierge';
import Link from 'next/link';

export default function ContactPage() {
  const c = content.contact;
  const b = content.brand;
  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading eyebrow={c.eyebrow} heading={c.h1} />

      {/* 2-col: direct-contact facts left, honest handoff panel right */}
      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 md:px-10 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <aside className="md:col-span-4">
              <h3 className="text-h3 mb-6">{c.direct.heading}</h3>
              <div className="grid grid-cols-1 gap-5 max-w-xl sm:grid-cols-2">
                <div>
                  <div className="text-micro text-ink mb-1">{c.direct.call.label}</div>
                  <Link href={c.direct.call.href} className="vs-link text-body underline underline-offset-4 decoration-ink/30">
                    {c.direct.call.value}
                  </Link>
                </div>
                <div>
                  <div className="text-micro text-ink mb-1">{c.direct.email.label}</div>
                  <Link href={c.direct.email.href} className="vs-link text-body underline underline-offset-4 decoration-ink/30">
                    {c.direct.email.value}
                  </Link>
                </div>
                <div>
                  <div className="text-micro text-ink mb-1">{c.direct.directions.label}</div>
                  <Link href={c.direct.directions.href} className="vs-link text-body underline underline-offset-4 decoration-ink/30">
                    {c.direct.directions.value}
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

      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 md:px-10 pb-16 md:pb-20">
          <TruthfulConcierge />
        </div>
      </section>

      <ContactInteriorStrip photos={c.interiorStrip} />

      <section className="w-full">
        <div className="mx-auto max-w-shell px-5 md:px-10 pb-12 md:pb-16">
          <div className="grid gap-6 border border-ink/15 bg-ink/[0.04] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="text-micro uppercase tracking-[0.16em] text-ink">Find the red door</p>
              <h3 className="mt-3 text-h3">{b.address.line1}, {b.address.line2}</h3>
              <p className="mt-3 max-w-xl text-body text-ink">
                Strawberry Moon sits on South Main Street in Wauconda. Open directions before you go, then check the events page if live music is part of the plan.
              </p>
            </div>
            <Link
              href={c.visit.directionsLink}
              className="vs-link inline-flex items-center justify-center rounded-button bg-btn-bg px-5 py-3 text-body text-btn-ink"
              target="_blank"
              rel="noreferrer"
            >
              Open directions
            </Link>
          </div>
        </div>
      </section>

      <LowChromeFaqAccordion heading={c.faqHeading} faqs={c.faqs} />
    </WordmarkBookendLayout>
  );
}
