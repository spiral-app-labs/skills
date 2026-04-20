import { SiteHeader } from '../../components/SiteHeader';
import { ContactForm } from '../../components/ContactForm';
import { ContactCtaClosing } from '../../components/ContactCtaClosing';
import { WordmarkFooter } from '../../components/WordmarkFooter';
import { content } from '../../content.example';

export default function ContactPage() {
  const { eyebrow, heading, subcopy, info } = content.contact;
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

          <div className="mt-12 md:mt-16 grid md:grid-cols-[1fr_360px] gap-10 md:gap-16 max-w-plate-narrow mx-auto">
            <ContactForm />

            <aside className="space-y-8">
              <div>
                <h3 className="text-eyebrow text-ink mb-2">{info.heading}</h3>
                <ul className="space-y-1">
                  {info.address.map((line) => (
                    <li key={line} className="text-body text-ink-muted">{line}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-eyebrow text-ink mb-2">Phone · Email</h3>
                <div className="text-body text-ink-muted">{info.phone}</div>
                <div className="text-body text-ink-muted">{info.email}</div>
              </div>
              <div>
                <h3 className="text-eyebrow text-ink mb-2">Hours</h3>
                <ul className="space-y-1">
                  {info.hours.map((line) => (
                    <li key={line} className="text-body text-ink-muted">{line}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <ContactCtaClosing />
      </main>
      <WordmarkFooter />
    </>
  );
}
