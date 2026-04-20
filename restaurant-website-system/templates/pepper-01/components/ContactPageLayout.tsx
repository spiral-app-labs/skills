// ContactPageLayout — page H1 + multi-city address blocks + message form +
// delivery-info accordion reused from home. Per audit §11.

'use client';

import { NumberedAccordion } from './NumberedAccordion';
import { content } from '../content.example';

export function ContactPageLayout() {
  const c = content.contact;
  return (
    <main className="bg-canvas">
      <section className="max-w-content mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <h1 className="text-hero-h1 font-extrabold text-ink">{c.title}</h1>
        <p className="mt-4 max-w-[720px] text-body text-ink-soft">{c.subtitle}</p>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[28px] leading-[36px] font-extrabold text-ink">Addresses</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {c.addressBlocks.map((a) => (
                <div key={a.city}>
                  <h3 className="text-body font-extrabold text-ink">{a.city}</h3>
                  <div className="mt-2 text-body-sm text-ink-soft space-y-1">
                    <div>{a.line1}</div>
                    <div>{a.phone}</div>
                    <a href={`mailto:${a.email}`} className="text-accent hover:underline">
                      {a.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[28px] leading-[36px] font-extrabold text-ink">{c.form.heading}</h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.form.fields
                  .filter((f) => f.name === 'firstName' || f.name === 'lastName')
                  .map((f) => (
                    <input
                      key={f.name}
                      type="text"
                      name={f.name}
                      placeholder={f.label}
                      className="h-12 px-4 rounded-input border border-divider text-body focus:outline-none focus:border-accent"
                    />
                  ))}
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full h-12 px-4 rounded-input border border-divider text-body focus:outline-none focus:border-accent"
              />
              <textarea
                name="message"
                placeholder="Type your message"
                rows={5}
                className="w-full px-4 py-3 rounded-input border border-divider text-body focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-pill bg-accent text-text-on-brand text-button hover:bg-accent-hover transition-colors"
              >
                {c.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-16 md:pb-24">
        <h2 className="text-section-h2 font-extrabold text-ink">Maps & Delivery Info</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {content.locations.tiles.map((t) => (
            <div key={t.city} className="relative aspect-[4/5] rounded-card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.photo} alt={t.city} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3">
                <span className="inline-block bg-accent text-text-on-brand text-body-sm font-bold px-3 py-1 rounded-pill">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <NumberedAccordion rows={content.locations.accordion} />
        </div>
      </section>
    </main>
  );
}
