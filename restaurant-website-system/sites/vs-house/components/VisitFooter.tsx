// VisitFooter — combined visit panel + site footer.
// Block 4 #6: replaces the dead seasonal block with a real "open now" signal.
import Link from 'next/link';
import { content } from '../content';
import { LiveOpenStatus } from './LiveOpenStatus';
import { LiveMapEmbed } from './LiveMapEmbed';

const HOURS = {
  ranges: content.hours.weekly.map((r, i) => ({
    day: i as 0|1|2|3|4|5|6,
    open: r.open,
    close: r.close,
  })),
  timezone: content.hours.timezone,
};

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function VisitFooter() {
  return (
    <footer className="bg-bg-darker text-text-white">
      <section className="border-b border-border-dark">
        <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
          <div>
            <p className="text-eyebrow text-gold font-body uppercase tracking-[0.3em] mb-5">
              Plan your visit
            </p>
            <h2 className="font-display text-section-h2 leading-[1.05] tracking-tight mb-6">
              {content.contact.address}
            </h2>
            <p className="text-text-muted-dark text-body mb-8">
              {content.contact.addressLine2}
            </p>

            <div className="mb-10">
              <LiveOpenStatus hours={HOURS} variant="pill" />
            </div>

            <div className="space-y-2 text-body mb-10">
              {content.hours.weekly.map((r, i) => (
                <div key={i} className="flex items-baseline justify-between max-w-[320px] border-b border-border-dark/60 py-1.5">
                  <span className="text-text-muted-dark text-eyebrow tracking-widest">{DAYS[i]}</span>
                  <span className="font-body text-text-white">{fmt(r.open)} – {fmt(r.close)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={content.links.reserve}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-accent hover:bg-accent-dark text-text-white text-button rounded-button text-center transition"
              >
                Reserve a table
              </a>
              <a
                href={content.hero.secondaryCta.href}
                className="px-6 py-3.5 border border-text-white/30 hover:border-gold hover:text-gold text-text-white text-button rounded-button text-center transition"
              >
                {content.contact.phone}
              </a>
              <a
                href={content.links.order}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 border border-text-white/30 hover:border-gold hover:text-gold text-text-white text-button rounded-button text-center transition"
              >
                Order online
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <LiveMapEmbed
              address={content.contact.addressFull}
              lat={32.8367}
              lng={-97.2231}
              zoom={16}
              mapLabel={content.brand.wordmark}
              aspectRatio="1/1"
              ctaLabel="Get directions →"
            />
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="font-display text-2xl">
          {content.brand.wordmark}
          <span className="ml-3 text-text-muted-dark text-eyebrow tracking-widest font-body">{content.brand.subline}</span>
        </div>
        <nav className="flex md:justify-center gap-6 text-eyebrow tracking-widest font-body">
          <Link href="/menu"   className="hover:text-gold">Menu</Link>
          <Link href="/about"  className="hover:text-gold">Our Family</Link>
          <Link href="/contact" className="hover:text-gold">Visit</Link>
          <a href={content.links.giftCard} target="_blank" rel="noreferrer" className="hover:text-gold">Gift Cards</a>
        </nav>
        <div className="flex md:justify-end gap-4 text-eyebrow tracking-widest font-body">
          <a href={content.links.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
          <a href={content.links.facebook}  target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
        </div>
      </div>
      <div className="border-t border-border-dark text-text-muted-dark text-bodySm py-5 text-center">
        © {new Date().getFullYear()} V's House · A Vu family kitchen since 1982
      </div>
    </footer>
  );
}

function fmt(t: string) {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'p' : 'a';
  const hh = ((h + 11) % 12) + 1;
  return m === 0 ? `${hh}${ampm}` : `${hh}:${String(m).padStart(2,'0')}${ampm}`;
}
