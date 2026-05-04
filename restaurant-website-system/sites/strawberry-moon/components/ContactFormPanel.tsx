'use client';

import Link from 'next/link';
import { content } from '../content';

export function ContactFormPanel() {
  const { panel } = content.contact;

  return (
    <section className="w-full border border-ink/10 p-6 md:p-8">
      <h3 className="text-h3 mb-4">{panel.heading}</h3>
      <p className="text-body text-ink/75 max-w-2xl">{panel.body}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {panel.actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className={
              action.style === 'primary'
                ? 'inline-flex items-center justify-center bg-btn-bg text-btn-ink px-5 py-3 rounded-button text-body hover:opacity-90 transition-opacity'
                : 'inline-flex items-center justify-center border border-ink/20 px-5 py-3 rounded-button text-body text-ink hover:border-ink/45 transition-colors'
            }
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {action.label}
          </Link>
        ))}
      </div>

      <div className="vs-divider mt-8 pt-6">
        <ul className="space-y-3">
          {panel.notes.map((note) => (
            <li key={note} className="text-body text-ink/72">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
