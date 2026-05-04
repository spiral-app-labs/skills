'use client';

import { FormEvent, useState } from 'react';
import {
  answerConciergeQuestion,
  conciergeQuestions,
  type ConciergeAnswer,
} from '../lib/concierge-kb';
import { content } from '../content';

export function TruthfulConcierge() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<ConciergeAnswer>(() => answerConciergeQuestion(''));
  const [loading, setLoading] = useState(false);
  const [asked, setAsked] = useState('');

  async function ask(nextQuestion: string) {
    const trimmed = nextQuestion.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setAsked(trimmed);
    setQuestion('');

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });

      if (!response.ok) throw new Error('concierge unavailable');
      const data = (await response.json()) as ConciergeAnswer;
      setAnswer(data);
    } catch {
      setAnswer({
        topic: 'fallback',
        answer:
          'I cannot verify that from the preview right now. The safest next step is to call La Fonda directly before promising menu details, seating, prices, allergies, or same-day specials.',
        actions: [
          { label: 'Call La Fonda', href: content.brand.phoneHref },
          { label: 'Get directions', href: content.brand.directionsHref },
        ],
        safetyNote:
          'This concierge is intentionally truth-safe: it only uses captured public facts and hands off anything current or sensitive to the restaurant.',
      });
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(question);
  }

  return (
    <section id="concierge" className="bg-canvas-warm">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-card bg-accent p-6 text-text-on-brand shadow-card md:p-8">
            <p className="text-eyebrow font-bold uppercase">Truth-safe concierge</p>
            <h2 className="mt-3 text-section-h2 font-extrabold">
              Ask La Fonda without inventing answers.
            </h2>
            <p className="mt-4 text-body">
              This helper is built from the verified La Fonda evidence packet: hours, address, phone, Google proof, review themes, and publicly named menu highlights.
            </p>
            <ul className="mt-6 space-y-3 text-body-sm font-semibold">
              <li>✓ No fake online ordering provider</li>
              <li>✓ No fake menu pricing or allergy claims</li>
              <li>✓ Calls the restaurant when details must be current</li>
            </ul>
          </div>

          <div className="rounded-card border border-card-border bg-canvas p-5 shadow-card md:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-divider pb-5">
              <div>
                <p className="text-eyebrow font-bold uppercase text-accent">La Fonda Helper</p>
                <h3 className="mt-2 text-[28px] leading-[34px] font-extrabold text-ink">
                  Plan a call, pickup, or visit.
                </h3>
              </div>
              <span className="rounded-pill bg-ink px-3 py-1 text-body-sm font-bold text-text-on-dark">
                Verified facts only
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {conciergeQuestions.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => void ask(chip)}
                  className="rounded-pill border border-divider bg-canvas-warm px-4 py-2 text-body-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {chip}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                value={question}
                onChange={(event) => setQuestion(event.currentTarget.value)}
                placeholder="Ask about hours, tacos, takeout, seating..."
                className="min-w-0 flex-1 rounded-input border border-divider bg-white px-4 py-3 text-body-sm text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-accent"
                aria-label="Ask the La Fonda helper"
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                className="inline-flex h-12 items-center justify-center rounded-pill bg-ink px-5 text-button text-text-on-dark transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Checking…' : 'Ask'}
              </button>
            </form>

            <div className="mt-6 rounded-[28px] bg-canvas-warm p-5">
              <div className="flex flex-wrap items-center gap-2 text-body-sm font-bold text-accent">
                <span>Topic: {answer.topic}</span>
                {asked ? <span className="text-ink-soft">Question: “{asked}”</span> : null}
              </div>
              <p className="mt-3 text-body text-ink">{answer.answer}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {answer.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="inline-flex h-10 items-center justify-center rounded-pill bg-accent px-5 text-button text-text-on-brand transition-colors hover:bg-accent-hover"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-body-sm text-ink-soft">{answer.safetyNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
