'use client';

import { useState } from 'react';
import { content } from '../content.example';

/**
 * EventBookingForm — multi-field event inquiry form for private-events page.
 * Editorial-register: generous spacing, Garamond labels, minimal chrome.
 */
export function EventBookingForm() {
  const f = content.privateEvents.form;
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-canvas py-24 px-6">
      <div className="max-w-[860px] mx-auto">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-14">
          <fieldset className="space-y-6">
            <legend className="font-display italic text-section-h3 text-text mb-4">{f.heading}</legend>
            <div className="grid md:grid-cols-2 gap-5">
              <FieldText label="First Name" name="firstName" required />
              <FieldText label="Last Name" name="lastName" required />
              <FieldText label="Email Address" name="email" type="email" required />
              <FieldText label="Phone Number" name="phone" type="tel" />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display italic text-section-h3 text-text mb-4">{f.selectHeading}</legend>
            <div className="grid md:grid-cols-2 gap-3">
              {f.eventStyles.map((style) => (
                <label key={style} className="flex items-center gap-3 border border-divider p-3 cursor-pointer hover:border-text transition-colors">
                  <input type="radio" name="eventStyle" value={style} className="accent-text" />
                  <span className="font-body text-body-sm">{style}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="font-display italic text-section-h3 text-text mb-4">{f.detailsHeading}</legend>
            <div className="grid md:grid-cols-2 gap-5">
              <FieldText label="Preferred Date" name="date" type="date" />
              <FieldText label="Number of Guests" name="guests" type="number" />
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-eyebrow text-text-muted">Tell us about the occasion</span>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-divider rounded-input bg-canvas text-body-sm text-text focus:outline-none focus:border-text"
              />
            </label>
            <button
              type="submit"
              disabled={sent}
              className="bg-text text-text-strip px-8 py-3 rounded-input text-button hover:opacity-80 transition-opacity disabled:opacity-60"
            >
              {sent ? 'Thank you — we\'ll be in touch' : 'Submit Inquiry'}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

function FieldText({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-eyebrow text-text-muted">{label}{required && <span className="text-text ml-1">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full h-11 px-3 border border-divider rounded-input bg-canvas text-body-sm text-text focus:outline-none focus:border-text"
      />
    </label>
  );
}
