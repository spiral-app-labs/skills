import { StickyTopNav } from '../../components/StickyTopNav';
import { PageHeroBanner } from '../../components/PageHeroBanner';
import { SiteFooter } from '../../components/SiteFooter';
import { content } from '../../content.example';

// /contact — rebuilt; source 404s (audit §3 "both 404").

export default function ContactPage() {
  const { contactPage } = content;
  return (
    <>
      <StickyTopNav />
      <main>
        <PageHeroBanner title={contactPage.hero.title} sub={contactPage.hero.sub} accent="cream" />

        {/* Channels row */}
        <section className="bg-canvas py-16">
          <div className="mx-auto max-w-shell px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactPage.channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="block rounded-card bg-canvas-cream p-6 hover:bg-canvas-green transition-colors"
              >
                <p className="text-body-sm text-text-muted">{c.label}</p>
                <p className="mt-2 font-display text-xl text-accent-brown break-words">{c.value}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Form + visit split */}
        <section className="bg-canvas pb-24">
          <div className="mx-auto max-w-shell px-6 md:px-10 grid md:grid-cols-5 gap-10 md:gap-16">
            <form className="md:col-span-3 bg-canvas-cream rounded-card p-8 md:p-10">
              <h2 className="font-display text-section-h2 text-accent-brown mb-6">
                {contactPage.form.heading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="block text-body-sm text-accent-brown mb-1">{contactPage.form.nameLabel}</span>
                  <input type="text" className="w-full rounded-input bg-canvas border border-divider px-4 py-3 text-body focus:outline-none focus:border-accent-green" />
                </label>
                <label className="block">
                  <span className="block text-body-sm text-accent-brown mb-1">{contactPage.form.emailLabel}</span>
                  <input type="email" className="w-full rounded-input bg-canvas border border-divider px-4 py-3 text-body focus:outline-none focus:border-accent-green" />
                </label>
              </div>
              <label className="block mb-4">
                <span className="block text-body-sm text-accent-brown mb-1">{contactPage.form.topicLabel}</span>
                <select className="w-full rounded-input bg-canvas border border-divider px-4 py-3 text-body focus:outline-none focus:border-accent-green">
                  {contactPage.form.topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="block mb-6">
                <span className="block text-body-sm text-accent-brown mb-1">{contactPage.form.messageLabel}</span>
                <textarea rows={5} className="w-full rounded-input bg-canvas border border-divider px-4 py-3 text-body focus:outline-none focus:border-accent-green" />
              </label>
              <button
                type="submit"
                className="rounded-button bg-accent-orange px-8 py-4 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
              >
                {contactPage.form.cta}
              </button>
            </form>

            <aside className="md:col-span-2 rounded-card bg-accent-green text-text-on-green p-8 md:p-10">
              <h3 className="font-display text-section-h2 mb-6">{contactPage.visit.heading}</h3>
              <p className="text-body mb-6">{contactPage.visit.address}</p>
              <div className="pt-6 border-t border-white/20">
                <h4 className="font-display text-2xl mb-3">Hours</h4>
                <ul className="space-y-1 text-body-sm opacity-90">
                  {contactPage.visit.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
