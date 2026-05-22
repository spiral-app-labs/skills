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

      if (!response.ok) {
        throw new Error('concierge unavailable');
      }

      const data = (await response.json()) as ConciergeAnswer;
      setAnswer(data);
    } catch {
      setAnswer(answerConciergeQuestion('I need current or unsupported details.'));
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(question);
  }

  return (
    <section className="rounded-card border border-divider bg-surface p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-body text-stamp uppercase tracking-wide text-ink-muted">
            Quick answers
          </p>
          <h2 className="mt-3 font-display text-manifesto text-ink">
            Before you call
          </h2>
          <p className="mt-4 max-w-md font-body text-body text-ink-muted">
            A few common questions can be answered from Ciao Baby source notes:
            address, phone, publicly listed hours, menu/source notes, private-party
            proof, and public review themes captured for this preview.
          </p>
          <ul className="mt-6 space-y-3 font-body text-body text-ink-muted">
            <li>No fake reservations, table holds, or availability promises</li>
            <li>No fake ordering, prices, discounts, or same-day specials</li>
            <li>No allergy, medical, or private-event contract guidance</li>
          </ul>
        </div>

        <div className="rounded-card border border-divider bg-canvas p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-divider pb-4">
            <div>
              <p className="font-body text-stamp uppercase tracking-wide text-ink-muted">
                Ciao Baby!
              </p>
              <h3 className="mt-2 font-display text-[28px] leading-tight text-ink">
              Simple answers
              </h3>
            </div>
            <span className="rounded-full border border-divider px-3 py-1 font-body text-stamp uppercase tracking-wide text-ink-muted">
              careful
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {conciergeQuestions.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => void ask(chip)}
                className="rounded-full border border-ink/20 px-3 py-2 font-body text-button text-ink transition-colors hover:border-ink/45"
              >
                {chip}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={question}
              onChange={(event) => setQuestion(event.currentTarget.value)}
              className="min-w-0 flex-1 rounded-button border border-divider bg-surface px-4 py-3 font-body text-body text-ink outline-none placeholder:text-ink-quiet focus:border-ink/45"
              placeholder="Ask about hours, menu, private parties..."
              aria-label="Ask the Ciao Baby concierge"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas disabled:cursor-not-allowed disabled:opacity-45"
            >
              {loading ? 'Checking...' : 'Ask'}
            </button>
          </form>

          <div className="mt-6 rounded-card border border-divider bg-surface p-5">
            <div className="flex flex-wrap items-center gap-3 font-body text-stamp uppercase tracking-wide text-ink-muted">
              <span>{answer.topic}</span>
              {asked ? <span>asked: {asked}</span> : null}
            </div>
            <p className="mt-4 font-body text-body text-ink-muted">{answer.answer}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {answer.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-button border border-ink/20 px-4 py-2 font-body text-button text-ink transition-colors hover:border-ink/45"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <p className="mt-4 font-body text-body-sm text-ink-quiet">
              {answer.safetyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
