'use client';
// InlineReservationForm — home-page booking form (no route hop, no modal).
// **PROMOTE-NOW per audit §11** — first catalog template with this primitive.
// Conversion floor max-up. Visual mock per brief — onSubmit stubs out with
// an alert + a hidden confirmation message.

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function InlineReservationForm() {
  const { eyebrow, heading, body, fields, cta, confirmation } = content.reservation;
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder — real fork wires Resy/OpenTable/Formspree/native endpoint.
    // eslint-disable-next-line no-alert
    alert('Reservation placeholder submitted. (Wire real endpoint.)');
  }

  return (
    <section id="reserve" className="py-24 lg:py-36 px-5 lg:px-12">
      <div className="mx-auto max-w-form-inline">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-eyebrow text-accent mb-4 block">{eyebrow}</span>
          <h2 className="font-display text-section-h2 text-ink mb-5">{heading}</h2>
          <p className="text-body text-ink-muted max-w-md mx-auto">{body}</p>
        </motion.div>

        {submitted ? (
          <p
            role="status"
            className="text-center font-display text-2xl text-accent py-12"
          >
            {confirmation}
          </p>
        ) : (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <input className="input-underline" placeholder={fields.namePlaceholder} required />
            <input
              className="input-underline"
              type="email"
              placeholder={fields.emailPlaceholder}
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input className="input-underline" type="date" placeholder={fields.datePlaceholder} required />
              <input className="input-underline" type="time" placeholder={fields.timePlaceholder} required />
            </div>
            <input
              className="input-underline"
              type="number"
              min={1}
              max={20}
              placeholder={fields.partyPlaceholder}
              required
            />
            <textarea
              className="input-underline resize-none"
              rows={2}
              placeholder={fields.notesPlaceholder}
            />
            <div className="pt-6">
              <button
                type="submit"
                className="w-full rounded-pill bg-accent text-cta font-body text-sm uppercase tracking-wider font-medium py-4 hover:bg-accent-soft transition-colors"
              >
                {cta}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
