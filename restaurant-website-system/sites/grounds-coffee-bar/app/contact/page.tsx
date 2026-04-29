// /contact page - visit and commerce bridge for the cafe-first Grounds path.

import { LatteNav } from '../../components/LatteNav';
import { LatteFooter } from '../../components/LatteFooter';
import { content } from '../../content.example';
import { PillButton } from '../../components/PillButton';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';

export default function ContactPage() {
  const c = content.contact;
  const b = content.brand;
  return (
    <>
      <LatteNav />
      <main>
        <section className="w-full bg-canvas pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-4">
            <h1 className="font-sans text-hero-h1 max-sm:text-[42px] text-ink max-w-3xl">{c.heading}</h1>
            <p className="text-body-lg text-ink max-w-xl">{c.sub}</p>
          </div>
        </section>
        <section className="w-full bg-canvas pb-16 md:pb-24">
          <div className="max-w-page mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <form
              className="bg-card rounded-card p-6 md:p-8 border border-divider/50 flex flex-col gap-5"
              action={`mailto:${b.email}`}
              method="post"
              encType="text/plain"
            >
              <p className="text-category-label text-ink">{c.formHeading}</p>
              <label className="flex flex-col gap-2">
                <span className="text-body text-ink">{c.formFields.name}</span>
                <input
                  type="text"
                  className="rounded-photo border border-divider bg-canvas px-4 py-3 text-body text-ink focus:outline-none focus:border-ink"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-body text-ink">{c.formFields.email}</span>
                <input
                  type="email"
                  className="rounded-photo border border-divider bg-canvas px-4 py-3 text-body text-ink focus:outline-none focus:border-ink"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-body text-ink">{c.formFields.message}</span>
                <textarea
                  rows={5}
                  className="rounded-photo border border-divider bg-canvas px-4 py-3 text-body text-ink focus:outline-none focus:border-ink"
                />
              </label>
              <button
                type="submit"
                className="inline-flex self-start items-center justify-center rounded-button bg-cta-bg px-6 py-3 text-button text-cta-text transition-colors hover:opacity-80"
              >
                {c.formFields.submit}
              </button>
            </form>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-category-label text-ink">Visit</p>
                <p className="text-body text-ink">{b.name}</p>
                <p className="text-body text-ink">{b.address.line1}</p>
                <p className="text-body text-ink">{b.address.line2}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-category-label text-ink">Hours</p>
                {b.hours.map((h) => (
                  <p key={h.days} className="text-body text-ink">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-category-label text-ink">Contact</p>
                <p className="text-body text-ink">{b.phone}</p>
                <a
                  href={`mailto:${b.email}`}
                  className="text-body text-ink underline underline-offset-4"
                >
                  {b.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <PillButton href={b.links.order} variant="solid">
                  Order online
                </PillButton>
                <PillButton href={b.links.shop} variant="outline">
                  Shop beans
                </PillButton>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive map surface below the address block. */}
        <section className="w-full bg-canvas pb-16 md:pb-24">
          <div className="max-w-page mx-auto px-5 md:px-10">
            <LiveMapEmbed
              address={`${b.address.line1}, ${b.address.line2}`}
              lat={b.geo.lat}
              lng={b.geo.lng}
              zoom={15}
              mapLabel={`${b.name} - ${b.address.line2}`}
              aspectRatio="16/9"
            />
          </div>
        </section>
      </main>
      <LatteFooter />
    </>
  );
}
