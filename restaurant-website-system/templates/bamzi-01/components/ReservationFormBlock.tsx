'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ReservationFormBlock — inline reservation form with left form / right photo.
 * Used at the bottom of /menu page.
 */
export function ReservationFormBlock() {
  const r = content.menuPage.reservation;
  const [sent, setSent] = useState(false);
  return (
    <section id="reserve" className="bg-bg-white py-24 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel className="mb-3">{r.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark mb-8">{r.title}</h2>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-eyebrow text-text-muted block mb-1">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-eyebrow text-text-muted block mb-1">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" placeholder="+123 456 789 00" />
              </div>
            </div>
            <div>
              <label className="text-eyebrow text-text-muted block mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-border-light rounded-input bg-bg-white text-body text-text-dark focus:outline-none focus:border-accent" placeholder="How many guests? What date?" />
            </div>
            <button type="submit" disabled={sent} className="bg-accent text-text-white px-6 py-3 rounded-button text-button font-semibold hover:brightness-110 transition disabled:opacity-60">
              {sent ? 'Thank you — we\'ll be in touch' : 'Book Now'}
            </button>
          </form>
        </div>
        <div className="relative aspect-[4/3] rounded-card overflow-hidden">
          <Image src={r.image} alt="" fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
