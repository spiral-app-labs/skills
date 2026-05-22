import { content } from '../content.example';
import { BrandWordmark } from './BrandWordmark';
import { PillButton } from './PillButton';

/**
 * LatteFooter - 2-column with hours, phone, location, provider links, and
 * roaster commerce handoffs.
 *
 * The original template had an empty right column; this fork uses it to make
 * the cafe/order/roaster relationship explicit.
 */
export function LatteFooter() {
  const b = content.brand;
  return (
    <footer className="w-full bg-canvas border-t border-divider">
      <div className="max-w-page mx-auto px-5 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="flex flex-col gap-6">
          <BrandWordmark size="sm" />
          <h2 className="font-sans text-section-h2 text-ink">{b.tagline}</h2>
          <div className="flex flex-col gap-1 mt-2">
            <p className="text-eyebrow-sm text-ink-muted">Opening hours:</p>
            {b.hours.map((h) => (
              <p key={h.days} className="text-body text-ink">
                {h.days}: {h.time}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Phone:</p>
            <p className="text-body text-ink">{b.phone}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Location:</p>
            <p className="text-body text-ink">{b.name}</p>
            <p className="text-body text-ink">{b.address.line1}</p>
            <p className="text-body text-ink">{b.address.line2}</p>
          </div>
          <ul className="flex items-center gap-5 mt-2">
            {b.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-body text-ink hover:opacity-60 transition-opacity"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-divider md:pl-16">
          <p className="text-eyebrow-sm text-ink-muted">Come visit</p>
          <p className="text-body-lg text-ink">
            The cafe path, online ordering, roaster shop, and subscriptions
            should feel like one Grounds brand instead of a domain hunt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <PillButton href={b.links.order} variant="solid">
              Order online
            </PillButton>
            <PillButton href={b.links.shop} variant="outline">
              Shop beans
            </PillButton>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-eyebrow-sm text-ink-muted">Email:</p>
            <a href={`mailto:${b.email}`} className="text-body text-ink underline underline-offset-4">
              {b.email}
            </a>
          </div>
          <a
            href={b.links.subscriptions}
            target="_blank"
            rel="noreferrer"
            className="text-body text-ink underline underline-offset-4 decoration-1 mt-2"
          >
            Explore subscriptions &rarr;
          </a>
        </div>
      </div>
      <div className="max-w-page mx-auto px-5 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-eyebrow-sm text-ink-muted">
        <p>© {new Date().getFullYear()} {b.name}. Prospect fork from latte-01.</p>
        <ul className="flex items-center gap-5">
          <li><a href={b.links.cafeWebsite} className="hover:text-ink">Cafe site</a></li>
          <li><a href={b.links.roasterHome} className="hover:text-ink">Roaster</a></li>
          <li><a href={b.links.directions} className="hover:text-ink">Directions</a></li>
        </ul>
      </div>
    </footer>
  );
}
