'use client';

import { useState } from 'react';
import { content } from '../content.example';

// ContactForm — standard 4-field contact form, themed to the tavern system.
export function ContactForm() {
  const { form } = content.contact;
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      {form.fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="block text-body-sm font-medium text-ink mb-1.5">
            {f.label}
          </label>
          {f.type === 'textarea' ? (
            <textarea
              id={f.name}
              name={f.name}
              placeholder={f.placeholder}
              rows={5}
              className="w-full rounded-input border border-divider bg-canvas-alt px-4 py-3 text-body text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-accent"
            />
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              className="w-full rounded-input border border-divider bg-canvas-alt px-4 py-3 text-body text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-accent"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-accent hover:bg-accent-dark text-[#160D05] text-button font-semibold px-6 py-3 rounded-button transition-colors"
      >
        {submitted ? 'Thanks — we got it' : form.submitLabel}
      </button>
    </form>
  );
}
