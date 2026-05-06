import { SiteHeader } from '../../components/SiteHeader';
import { ContactCtaClosing } from '../../components/ContactCtaClosing';
import { WordmarkFooter } from '../../components/WordmarkFooter';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import { VisitConfidencePanel } from '../../components/VisitConfidencePanel';
import { ConciergePanel } from '../../components/ConciergePanel';
import { content } from '../../content';
import Link from 'next/link';

export default function ContactPage() {
  const { eyebrow, heading, subcopy, info, confidenceNote } = content.contact;
  const b = content.brand;
  return (
    <>
      <SiteHeader />
      <main>
        <section className="max-w-plate mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-plate-narrow mx-auto text-center">
            <div className="text-eyebrow text-accent">{eyebrow}</div>
            <h1 className="mt-3 font-display text-hero-h1 font-medium text-ink">{heading}</h1>
            <p className="mt-5 text-body text-ink-muted max-w-[52ch] mx-auto">{subcopy}</p>
          </div>

          <div className="mt-10 md:mt-12 max-w-plate-narrow mx-auto">
            <LiveMapEmbed
              address={`${b.address.line1}, ${b.address.line2}`}
              query={b.mapQuery}
              zoom={15}
              mapLabel={`${b.name} — ${b.address.line2}`}
              aspectRatio="16/9"
            />
          </div>

          <div className="mt-12 md:mt-16 grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 max-w-plate-narrow mx-auto">
            <section className="rounded-card border border-divider bg-canvas-alt p-6 md:p-8">
              <h2 className="font-display text-section-h3 font-medium text-ink">Use the verified contact path</h2>
              <p className="mt-4 text-body text-ink-muted">
                This preview does not use a fake form or a fake inbox. Call the restaurant for the most current
                hours and visit questions, or open directions for the Schaumburg address.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={info.phoneHref}
                  className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-6 py-3 rounded-button transition-colors"
                >
                  Call (847) 781-0300
                </Link>
                <Link
                  href={info.directionsHref}
                  className="text-button font-medium text-ink border border-ink/80 hover:border-accent hover:text-accent px-6 py-3 rounded-button transition-colors"
                >
                  Get directions
                </Link>
              </div>
              <div className="mt-8">
                <h3 className="text-eyebrow text-ink mb-3">Source notes</h3>
                <ul className="space-y-3">
                  {info.sourceNotes.map((line: string) => (
                    <li key={line} className="text-body text-ink-muted">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 text-body-sm text-ink-muted">{confidenceNote}</p>
            </section>

            <aside className="space-y-8 rounded-card border border-divider p-6 md:p-8">
              <div>
                <h3 className="text-eyebrow text-ink mb-2">{info.heading}</h3>
                <ul className="space-y-1">
                  {info.address.map((line) => (
                    <li key={line} className="text-body text-ink-muted">{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-eyebrow text-ink mb-2">Phone</h3>
                <Link href={info.phoneHref} className="text-body text-accent hover:text-accent-dark">{info.phone}</Link>
              </div>
              <div>
                <h3 className="text-eyebrow text-ink mb-2">Hours notes</h3>
                <ul className="space-y-1">
                  {info.hours.map((line) => (
                    <li key={line} className="text-body text-ink-muted">{line}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <VisitConfidencePanel />
        <ConciergePanel />
        <ContactCtaClosing />
      </main>
      <WordmarkFooter />
    </>
  );
}
