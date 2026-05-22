'use client';

import { useState } from 'react';
import { content } from '../content.example';

// ContactFormPanel — the /contact 8-field form + inverted-ink submit button.
// The rarity of the button IS the emphasis (only filled chrome in the whole system).
export function ContactFormPanel() {
  const { form } = content.contact;
  const [interest, setInterest] = useState<string>(form.fields.interestOptions[0]);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); }}
      className="w-full"
    >
      <h3 className="text-h3 mb-8">{form.heading}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <Field label={form.fields.fullName.label} placeholder={form.fields.fullName.placeholder} />
        <Field label={form.fields.email.label} placeholder={form.fields.email.placeholder} type="email" />
        <Field label={form.fields.phone.label} placeholder={form.fields.phone.placeholder} type="tel" />
        <Field label={form.fields.website.label} placeholder={form.fields.website.placeholder} type="url" />
        <div className="md:col-span-2">
          <label className="block text-micro text-ink/60 mb-1">{form.fields.howFound.label}</label>
          <select className="vs-input">
            <option>{form.fields.howFound.placeholder}</option>
            <option>Instagram</option>
            <option>A friend</option>
            <option>Editorial / press</option>
            <option>Walking by</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <p className="text-micro text-ink/60 mb-3">{form.fields.interestLabel}</p>
          <div className="flex flex-wrap gap-6">
            {form.fields.interestOptions.map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="interest"
                  value={opt}
                  checked={interest === opt}
                  onChange={() => setInterest(opt)}
                  className="accent-ink"
                />
                <span className="text-body">{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-micro text-ink/60 mb-1">{form.fields.message.label}</label>
          <textarea rows={4} placeholder={form.fields.message.placeholder} className="vs-input resize-none" />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="bg-btn-bg text-btn-ink px-6 py-3 rounded-button text-body hover:opacity-90 transition-opacity"
        >
          {form.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label, placeholder, type = 'text',
}: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-micro text-ink/60 mb-1">{label}</label>
      <input type={type} placeholder={placeholder} className="vs-input" />
    </div>
  );
}
