'use client';

import { useState } from 'react';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ContactFormBlock — full contact page form (name / email / message).
 */
export function ContactFormBlock() {
  const f = content.contactPage.form;
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <EyebrowDotLabel className="mb-3">{f.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{f.title}</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-eyebrow text-text-muted block mb-1">Full Name</label>
              <input required type="text" placeholder="Enter your name" className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="text-eyebrow text-text-muted block mb-1">Email Address</label>
              <input required type="email" placeholder="info@example.com" className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div>
            <label className="text-eyebrow text-text-muted block mb-1">Message</label>
            <textarea rows={5} placeholder="Your Message" className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" />
          </div>
          <button type="submit" disabled={sent} className="bg-accent text-text-white px-7 py-3 rounded-button text-button font-semibold hover:brightness-110 transition disabled:opacity-60">
            {sent ? 'Thanks — we\'ll be in touch' : 'Submit Now'}
          </button>
        </form>
      </div>
    </section>
  );
}
