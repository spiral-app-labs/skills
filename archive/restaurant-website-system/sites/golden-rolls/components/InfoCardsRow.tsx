import { content } from '../content.example';

const iconMap: Record<string, string> = { map: '📍', phone: '☎' };

/**
 * InfoCardsRow — location + phone cards with accent icons.
 */
export function InfoCardsRow() {
  const cards = content.contactPage.infoCards;
  return (
    <section className="bg-bg-white pb-16 px-6">
      <div className="max-w-[800px] mx-auto grid md:grid-cols-2 gap-5">
        {cards.map((c) => (
          <div key={c.label} className="bg-bg-white border border-border-light rounded-card p-6 text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent text-[22px] mb-3" aria-hidden>
              {iconMap[c.icon] ?? '•'}
            </div>
            <div className="font-display text-[20px] text-text-dark mb-2">{c.label}</div>
            {c.lines.map((line) => (
              <div key={line} className="text-body-sm text-text-muted">{line}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
