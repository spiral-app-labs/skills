import { HeroParallaxPhoto } from '../components/HeroParallaxPhoto';
import { LiveOpenStatus } from '../components/LiveOpenStatus';
import { MapEmbed } from '../components/MapEmbed';
import { ReviewCarousel } from '../components/ReviewCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import { content } from '../content';

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/92 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#" className="flex min-w-0 items-center gap-3" aria-label="El Molino home">
          <img src="/brand/el-molino-logo.png" alt="" className="h-11 w-auto shrink-0" />
          <span className="hidden text-sm font-semibold uppercase text-ink sm:block">El Molino</span>
        </a>
        <nav className="flex items-center gap-5">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="hidden text-sm font-medium text-muted transition hover:text-ink md:inline">
              {item.label}
            </a>
          ))}
          <LiveOpenStatus hours={content.brand.hoursConfig} className="hidden lg:inline-flex" />
          <a
            href={`tel:${content.brand.phoneTel}`}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-mahogany px-4 text-sm font-semibold text-paper transition hover:bg-chile focus:outline-none focus:ring-2 focus:ring-chile focus:ring-offset-2"
          >
            Call
          </a>
        </nav>
      </div>
    </header>
  );
}

function ManagementBanner() {
  return (
    <section className="border-b border-line bg-night text-paper" aria-label="Ownership notice">
      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-xs font-semibold uppercase text-maize">{content.management.label}</p>
        <p className="max-w-3xl text-sm leading-6 text-paper/80 md:text-right">{content.management.body}</p>
      </div>
    </section>
  );
}

function Hero() {
  const hero = content.hero;

  return (
    <section className="texture overflow-hidden bg-canvas">
      <div className="mx-auto grid max-w-page items-center gap-5 px-5 pb-5 pt-8 md:min-h-[calc(100svh-150px)] md:grid-cols-[0.88fr_1.12fr] md:gap-10 md:px-8 md:pb-10 md:pt-10">
        <ScrollReveal className="flex flex-col items-start">
          <p className="mb-5 text-sm font-semibold uppercase text-chile">{hero.eyebrow}</p>
          <h1 className="display-tight text-[clamp(58px,15vw,170px)] font-bold uppercase text-mahogany">
            {hero.heading}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-8 text-muted md:text-2xl md:leading-9">{hero.sub}</p>
          <div className="mt-8 flex w-full gap-3 sm:w-auto">
            <a
              href={hero.primary.href}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-mahogany px-4 text-sm font-semibold text-paper transition hover:bg-chile focus:outline-none focus:ring-2 focus:ring-chile focus:ring-offset-2 sm:flex-none sm:px-7 sm:text-base"
            >
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-mahogany/30 bg-paper px-4 text-sm font-semibold text-ink transition hover:border-mahogany focus:outline-none focus:ring-2 focus:ring-chile focus:ring-offset-2 sm:flex-none sm:px-7 sm:text-base"
            >
              <span className="sm:hidden">Call / Directions</span>
              <span className="hidden sm:inline">{hero.secondary.label}</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="relative">
          <div className="relative overflow-hidden rounded-card border border-line bg-night shadow-soft">
            <HeroParallaxPhoto src={hero.image.src} alt={hero.image.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-night/5 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3">
              <div className="rounded-card bg-paper p-3 shadow-soft md:w-72 md:p-4">
                <p className="text-xs font-semibold uppercase text-chile">Tonight's mood</p>
                <p className="mt-1 text-sm font-semibold text-ink md:text-base">Warm room, handmade tortillas, margaritas at the bar.</p>
              </div>
              <LiveOpenStatus hours={content.brand.hoursConfig} className="self-start md:self-end" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section aria-label="El Molino trust signals" className="border-y border-line bg-paper">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-px px-5 py-3 md:grid-cols-4 md:px-8">
        {content.proof.map((item) => (
          <div key={item.label} className="min-h-24 bg-paper p-4 md:p-5">
            <p className="font-display text-3xl font-bold text-teal md:text-4xl">{item.value}</p>
            <p className="mt-1 text-xs font-medium uppercase leading-4 text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-page gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase text-chile">{content.story.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(42px,6vw,76px)] font-semibold leading-none text-mahogany">
            {content.story.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">{content.story.body}</p>
        </ScrollReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {content.story.points.map((point, index) => (
            <ScrollReveal
              key={point.title}
              delay={index * 0.06}
              className="rounded-card border border-line bg-canvas p-6 transition duration-500 hover:-translate-y-1 hover:border-maize/60 hover:shadow-soft"
            >
              <p className="font-display text-2xl font-semibold text-ink">{point.title}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{point.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuHighlights() {
  return (
    <section id="menu" className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <ScrollReveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-chile">{content.menu.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(44px,6vw,82px)] font-semibold leading-none text-mahogany">
              {content.menu.heading}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted">{content.menu.note}</p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.menu.categories.map((category, index) => (
            <ScrollReveal
              key={category.title}
              delay={index * 0.05}
              className="rounded-card border border-line bg-paper p-6 transition duration-500 hover:-translate-y-1 hover:border-clay/55 hover:shadow-soft md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-line pb-4">
                <h3 className="font-display text-3xl font-semibold text-ink">{category.title}</h3>
                <span className="h-2 w-10 rounded-full bg-maize" />
              </div>
              <div className="space-y-5">
                {category.items.map((item) => (
                  <div key={item.name} className="grid gap-1">
                    <p className="text-base font-semibold text-ink">{item.name}</p>
                    <p className="text-sm leading-6 text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 flex flex-col gap-3 rounded-card border border-line bg-night p-5 text-paper md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-paper/80">
            The full printed menu is still available while the HTML menu is confirmed item by item.
          </p>
          <a
            href={content.brand.menuPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-semibold text-ink transition hover:bg-canvas focus:outline-none focus:ring-2 focus:ring-maize focus:ring-offset-2 focus:ring-offset-night"
          >
            Current PDF menu
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ThreePaths() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-chile">Eat, drink, gather</p>
          <h2 className="mt-4 font-display text-[clamp(42px,6vw,76px)] font-semibold leading-none text-mahogany">
            One site for every reason people come in.
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {content.paths.map((path, index) => (
            <ScrollReveal
              key={path.title}
              delay={index * 0.06}
              className="group overflow-hidden rounded-card border border-line bg-canvas transition duration-500 hover:-translate-y-1 hover:border-maize/60 hover:shadow-soft"
            >
              <div className="h-72 overflow-hidden">
                <img src={path.image} alt={path.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-4xl font-semibold text-ink">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{path.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const b = content.brand;

  return (
    <section id="visit" className="bg-canvas py-20 pb-28 md:py-28">
      <div className="mx-auto grid max-w-page gap-10 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase text-chile">Visit El Molino</p>
          <h2 className="mt-4 font-display text-[clamp(42px,6vw,76px)] font-semibold leading-none text-mahogany">
            Dinner, drinks, and a clearer way to get here.
          </h2>
          <div className="mt-8 grid gap-5 rounded-card border border-line bg-paper p-6">
            <LiveOpenStatus hours={b.hoursConfig} className="self-start" />
            <div>
              <p className="text-sm font-semibold uppercase text-muted">Address</p>
              <p className="mt-2 text-lg font-semibold text-ink">{b.address.line1}</p>
              <p className="text-lg text-muted">{b.address.line2}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase text-muted">Phone</p>
              <a href={`tel:${b.phoneTel}`} className="mt-2 inline-flex text-lg font-semibold text-ink underline underline-offset-4">
                {b.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase text-muted">Hours</p>
              <div className="mt-3 grid gap-2">
                {b.hours.map((row) => (
                  <div key={row.days} className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-sm">
                    <span className="font-semibold text-ink">{row.days}</span>
                    <span className="text-right text-muted">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={b.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-mahogany px-6 text-sm font-semibold text-paper transition hover:bg-chile"
              >
                Get Directions
              </a>
              <a
                href={b.reserveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition hover:border-mahogany"
              >
                Reserve
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <MapEmbed
            address={`${b.address.line1}, ${b.address.line2}`}
            lat={b.geo.lat}
            lng={b.geo.lng}
            label={b.fullName}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const b = content.brand;

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <img src="/brand/el-molino-logo.png" alt="" className="h-16 w-auto" />
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{b.description}</p>
        </div>
        <div className="text-sm text-muted md:text-right">
          <p>{b.address.line1}, {b.address.line2}</p>
          <p className="mt-1">{b.phone}</p>
          <p className="mt-4">Prototype site, {year}</p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <ManagementBanner />
      <main>
        <Hero />
        <ProofStrip />
        <Story />
        <MenuHighlights />
        <ThreePaths />
        <ReviewCarousel />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
