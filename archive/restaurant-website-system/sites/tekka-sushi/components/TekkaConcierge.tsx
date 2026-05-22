'use client';

import { useMemo, useState } from 'react';

const prompts = [
  {
    label: 'What should I order?',
    answer:
      'Review evidence points to fresh sushi and standout rolls. Good menu anchors to look at first: Godzilla Roll, Volcano Roll, Spicy Crispy Tuna Roll, Fire Phoenix Roll, sashimi/nigiri, and spicy miso ramen. For current prices and availability, use Tekka’s online ordering page or call.',
  },
  {
    label: 'Can I reserve?',
    answer:
      'Tekka’s owned reservation page asks guests to call for reservations and special requests. Call (224) 875-7188 rather than relying on this preview to hold a table.',
  },
  {
    label: 'Do you deliver?',
    answer:
      'Public listing evidence shows dine-in, takeout, and delivery. Use Tekka’s online ordering path for current delivery/takeout options.',
  },
  {
    label: 'Where is Tekka?',
    answer:
      'Tekka Sushi is at 84 Biesterfield Rd, Elk Grove Village, IL 60007. Use the directions link for navigation.',
  },
];

function fallbackAnswer(question: string) {
  const q = question.toLowerCase();
  if (q.includes('hour') || q.includes('open')) {
    return 'Published evidence shows Mon–Thu 11 AM–9:30 PM, Fri–Sat 11 AM–10 PM, and Sunday 12 PM–9:30 PM. Please call (224) 875-7188 to confirm holiday hours or last-call timing.';
  }
  if (q.includes('price') || q.includes('cost')) {
    return 'Google Maps shows a general $20–30 per person range. Exact item prices can change, so use Tekka’s online ordering page or call before ordering.';
  }
  if (q.includes('reserve') || q.includes('reservation') || q.includes('table')) {
    return prompts[1].answer;
  }
  if (q.includes('delivery') || q.includes('takeout') || q.includes('order')) {
    return prompts[2].answer;
  }
  return 'I only use verified Tekka details in this preview. For anything not listed here — allergens, current item availability, large parties, holiday hours, or special requests — please call Tekka Sushi at (224) 875-7188.';
}

/**
 * Small, truthful concierge prototype.
 *
 * This is intentionally rule-based for the preview: no unsupported availability,
 * no fake reservations, no invented menu details, and a clear call fallback.
 */
export function TekkaConcierge() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(prompts[0].answer);
  const examples = useMemo(() => prompts, []);

  return (
    <section className="px-8 md:px-10 pb-12">
      <div className="rounded-card border border-border/50 bg-surface/70 p-5 space-y-5">
        <header className="space-y-2">
          <p className="text-ui-label text-text-muted">Tekka Concierge</p>
          <h2 className="text-section-h2 text-text">Ask before you order</h2>
          <p className="text-body text-text-muted">
            A preview concierge for menu guidance, ordering handoffs, location, and safe phone fallback.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-2">
          {examples.map((prompt) => (
            <button
              key={prompt.label}
              type="button"
              onClick={() => setAnswer(prompt.answer)}
              className="rounded-field border border-border/60 bg-canvas/70 px-3 py-2 text-left text-ui-label text-text hover:bg-surface-hover transition-colors"
            >
              {prompt.label}
            </button>
          ))}
        </div>

        <form
          className="flex flex-col gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            setAnswer(fallbackAnswer(question));
          }}
        >
          <label className="text-ui-label text-text-muted" htmlFor="tekka-concierge-question">
            Ask a quick question
          </label>
          <input
            id="tekka-concierge-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Hours, delivery, reservations..."
            className="w-full rounded-field border border-border/60 bg-canvas px-3 py-3 text-body text-text placeholder:text-text-muted/60 focus:border-text/50 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-pill border border-border/70 bg-surface-hover px-4 py-3 text-ui-label text-text hover:bg-border transition-colors"
          >
            Ask concierge
          </button>
        </form>

        <div className="rounded-field border border-border/50 bg-canvas/70 p-4">
          <p className="text-body text-text-muted">{answer}</p>
        </div>
      </div>
    </section>
  );
}
