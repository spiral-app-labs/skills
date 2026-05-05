'use client';

import { FormEvent, useState } from 'react';
import {
  answerConciergeQuestion,
  conciergeQuestions,
  type ConciergeAnswer,
} from '../lib/concierge-kb';

export function TruthfulConcierge() {
  const [question, setQuestion] = useState('');
  const [asked, setAsked] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<ConciergeAnswer>(() => answerConciergeQuestion(''));

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
      setAnswer((await response.json()) as ConciergeAnswer);
    } catch {
      setAnswer(answerConciergeQuestion('current unsupported details'));
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(question);
  }

  return (
    <section id="concierge" className="bg-bg-dark px-6 py-16 md:py-20 text-text-cream">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          <p className="text-address text-text-muted-cream">Truthful AI concierge</p>
          <h2 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
            Ask Winestock without inventing a single promise.
          </h2>
          <p className="text-body text-text-muted-cream">
            This preview helper is grounded in verified Winestock evidence: the current-site scrape,
            Google Reviews Highest packet, address, phone, email, Facebook, menu categories, and review-backed vibe.
          </p>
          <ul className="space-y-3 text-body text-text-muted-cream">
            <li>No fake reservations, online ordering, or table holds.</li>
            <li>No invented specials, prices, private events, or availability.</li>
            <li>No allergy or medical guidance — it routes guests to Winestock directly.</li>
          </ul>
        </div>

        <div className="rounded-card border border-text-cream/15 bg-text-cream/[0.06] p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-text-cream/15 pb-4">
            <div>
              <p className="text-address text-text-muted-cream">Winestock Market & Lounge</p>
              <h3 className="mt-2 font-display text-body-h3 text-text-cream" style={{ fontWeight: 300 }}>
                Verified facts only
              </h3>
            </div>
            <span className="rounded-button border border-text-cream/25 px-3 py-1 text-address text-text-muted-cream">
              safe handoff
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {conciergeQuestions.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => void ask(chip)}
                className="rounded-button border border-text-cream/25 px-3 py-2 text-button text-text-cream transition-colors hover:bg-text-cream/10"
              >
                {chip}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={question}
              onChange={(event) => setQuestion(event.currentTarget.value)}
              className="min-w-0 flex-1 rounded-button border border-text-cream/25 bg-bg-dark px-4 py-3 text-body text-text-cream placeholder:text-text-muted-cream/60 focus:border-text-cream/70 focus:outline-none"
              placeholder="Ask about hours, bottles, boards, music, or contact..."
              aria-label="Ask the Winestock concierge"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="rounded-button bg-text-cream px-5 py-3 text-button text-text-dark transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              {loading ? 'Checking...' : 'Ask'}
            </button>
          </form>

          <div className="mt-6 rounded-card border border-text-cream/15 bg-bg-dark p-5">
            <div className="flex flex-wrap items-center gap-3 text-address text-text-muted-cream">
              <span>{answer.topic}</span>
              {asked ? <span className="opacity-75">asked: {asked}</span> : null}
            </div>
            <p className="mt-4 text-body text-text-cream">{answer.answer}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {answer.actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  className="inline-flex rounded-button border border-text-cream/25 px-4 py-2 text-button text-text-cream transition-colors hover:bg-text-cream/10"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <p className="mt-4 text-body text-text-muted-cream">{answer.safetyNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
