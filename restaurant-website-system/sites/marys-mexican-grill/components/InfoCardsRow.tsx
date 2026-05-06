import { content } from '../content.example';

const iconMap: Record<string, string> = { map: '📍', phone: '☎' };

/**
 * InfoCardsRow — location + phone cards with accent icons.
 */
export function InfoCardsRow() {
  const cards = content.contactPage.infoCards;
  return (
    <section className="bg-bg-white px-6 pb-10 md:pb-16">
      <div className="mx-auto grid max-w-[1000px] gap-4 md:grid-cols-3 md:gap-5">
        {cards.map((c) => (
          <div key={c.label} className="rounded-card border border-border-light bg-bg-white p-5 text-center md:p-6">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-[20px] text-accent md:h-14 md:w-14 md:text-[22px]" aria-hidden>
              {iconMap[c.icon] ?? '•'}
            </div>
            <div className="mb-2 font-display text-[20px] text-text-dark">{c.label}</div>
            {c.lines.map((line) => (
              <div key={line} className="text-body-sm text-text-muted">{line}</div>
            ))}
            {'href' in c && c.href && 'linkLabel' in c && c.linkLabel ? (
              <a
                href={c.href}
                className="mt-4 inline-flex rounded-pill bg-accent px-4 py-2 text-[11px] font-semibold uppercase tracking-[1px] text-text-white transition hover:brightness-110"
              >
                {c.linkLabel}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
