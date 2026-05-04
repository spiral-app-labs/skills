import Link from 'next/link';
import { content } from '../content';

export function ThreeColFooter() {
  const { contact, footer } = content;
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Visit us */}
          <div>
            <h4 className="text-body mb-4">{contact.visit.heading}</h4>
            <address className="not-italic text-body text-ink/80 leading-[1.6]">
              {contact.visit.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <div className="mt-4">
              <Link href={contact.visit.directionsLink} className="vs-link text-body underline underline-offset-4 decoration-ink/40">
                get directions
              </Link>
            </div>
            <div className="mt-6">
              <div className="text-body mb-1">{contact.visit.hoursHeading}</div>
              {contact.visit.hours.map((h) => (
                <div key={h} className="text-body text-ink/80">{h}</div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-body mb-4">{footer.contactHeading}</h4>
            <div className="text-body text-ink/80">{contact.bookNow.viaEmail.label}</div>
            <Link href={contact.bookNow.viaEmail.href} className="vs-link text-body">
              {contact.bookNow.viaEmail.value}
            </Link>
            <div className="mt-4 text-body text-ink/80">{contact.bookNow.whatsapp.label}</div>
            <Link href={contact.bookNow.whatsapp.href} className="vs-link text-body">
              {contact.bookNow.whatsapp.value}
            </Link>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-body mb-4">{contact.socials.heading}</h4>
            <ul className="space-y-2">
              {contact.socials.links.map((s) => {
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
          </div>
        </div>

        {/* Sub-nav links row */}
        <div className="vs-divider mt-16 md:mt-20 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-micro text-ink/60">{content.footer.colophon}</p>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {content.footer.links.map((l) => {
              const isExternal = 'external' in l && l.external;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="vs-link text-micro lowercase"
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
