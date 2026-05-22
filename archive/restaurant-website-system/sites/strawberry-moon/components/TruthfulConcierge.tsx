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
      setAnswer(
        answerConciergeQuestion(
          'I need current or unsupported details. What can you safely tell me instead?',
        ),
      );
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(question);
  }

  return (
    <section className="w-full border border-ink/10 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-micro uppercase tracking-[0.16em] text-ink">Truthful concierge</p>
          <h3 className="mt-3 text-h3">Ask the red-door helper</h3>
          <p className="mt-4 max-w-md text-body text-ink">
            This preview concierge only answers from verified Strawberry Moon facts:
            official-site hours, address, seating policy, live-music schedule, and
            review-backed menu and atmosphere themes.
          </p>
          <ul className="mt-6 space-y-3 text-body text-ink">
            <li>No fake reservations or table holds</li>
            <li>No fake ordering, prices, or same-day specials</li>
            <li>No allergy or medical guidance</li>
          </ul>
        </div>

        <div className="border border-ink/10 bg-ink/[0.04] p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
            <div>
              <p className="text-micro uppercase tracking-[0.16em] text-ink">Strawberry Moon</p>
              <h4 className="mt-2 text-h3">Verified facts only</h4>
            </div>
            <span className="border border-ink/20 px-3 py-1 text-micro uppercase tracking-[0.16em] text-ink">
              deterministic
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {conciergeQuestions.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => void ask(chip)}
                className="border border-ink/20 px-3 py-2 text-nav text-ink transition-colors hover:border-ink/45"
              >
                {chip}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              value={question}
              onChange={(event) => setQuestion(event.currentTarget.value)}
              className="vs-input min-w-0 flex-1"
              placeholder="Ask about hours, live music, seating, or drinks..."
              aria-label="Ask the Strawberry Moon concierge"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="inline-flex items-center justify-center rounded-button bg-btn-bg px-5 py-3 text-body text-btn-ink disabled:cursor-not-allowed disabled:opacity-45"
            >
              {loading ? 'Checking...' : 'Ask'}
            </button>
          </form>

          <div className="mt-6 border border-ink/10 bg-canvas p-5">
            <div className="flex flex-wrap items-center gap-3 text-micro uppercase tracking-[0.16em] text-ink">
              <span>{answer.topic}</span>
              {asked ? <span className="text-ink/70">asked: {asked}</span> : null}
            </div>
            <p className="mt-4 text-body text-ink">{answer.answer}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              {answer.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="inline-flex items-center justify-center border border-ink/20 px-4 py-2 text-nav text-ink transition-colors hover:border-ink/45"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <p className="mt-4 text-body text-ink/78">{answer.safetyNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
