import { StickyTopNav } from '../../components/StickyTopNav';
import { PageHeroBanner } from '../../components/PageHeroBanner';
import { BrightBandCTA } from '../../components/BrightBandCTA';
import { SiteFooter } from '../../components/SiteFooter';
import { content } from '../../content.example';

// /about — rebuilt; source 404s (audit §3 "both 404").

export default function AboutPage() {
  const { aboutPage } = content;
  return (
    <>
      <StickyTopNav />
      <main>
        <PageHeroBanner title={aboutPage.hero.title} sub={aboutPage.hero.sub} accent="green" />

        {/* Intro split */}
        <section className="bg-canvas py-20 md:py-28">
          <div className="mx-auto max-w-shell px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-section-h2 text-accent-brown">{aboutPage.intro.heading}</h2>
              <div className="mt-6 space-y-5">
                {aboutPage.intro.paragraphs.map((p, i) => (
                  <p key={i} className="text-body text-text">{p}</p>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[5/6] rounded-card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={aboutPage.intro.image} alt={aboutPage.intro.imageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-canvas-cream py-20 md:py-28">
          <div className="mx-auto max-w-shell px-6 md:px-10">
            <h2 className="font-display text-section-h2 text-accent-brown text-center">{aboutPage.values.heading}</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutPage.values.items.map((v) => (
                <div key={v.title} className="bg-canvas rounded-card p-6 shadow-[0_4px_18px_rgba(51,22,18,0.04)]">
                  <h3 className="font-display text-2xl text-accent-green">{v.title}</h3>
                  <p className="mt-3 text-body-sm text-text-muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BrightBandCTA />
      </main>
      <SiteFooter />
    </>
  );
}
