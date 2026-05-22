// ContactPanel — /contact page main block. Map + hours + CTAs + form-less direct lines.
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

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function ContactPanel() {
  return (
    <section className="bg-bg-cream py-20 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-eyebrow text-accent font-body uppercase tracking-[0.3em] mb-5">
            Direct lines
          </p>
          <h2 className="font-display text-section-h2 text-text-dark mb-8 leading-[1.05]">
            Three ways in.
          </h2>

          <div className="mb-8">
            <LiveOpenStatus hours={HOURS} variant="pill" />
          </div>

          <ul className="space-y-5">
            <li>
              <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-1">Reserve</div>
              <a
                href={content.links.reserve}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl text-text-dark hover:text-accent transition"
              >
                Toast Tables →
              </a>
            </li>
            <li>
              <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-1">Call</div>
              <a href={content.hero.secondaryCta.href} className="font-display text-2xl text-text-dark hover:text-accent transition">
                {content.contact.phone}
              </a>
            </li>
            <li>
              <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-1">Email</div>
              <a href={`mailto:${content.contact.email}`} className="font-display text-2xl text-text-dark hover:text-accent transition">
                {content.contact.email}
              </a>
            </li>
            <li>
              <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-1">Order</div>
              <a
                href={content.links.order}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl text-text-dark hover:text-accent transition"
              >
                Order online →
              </a>
            </li>
          </ul>

          <div className="mt-10 pt-10 border-t border-border-light">
            <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-2">Address</div>
            <p className="font-display text-2xl text-text-dark leading-snug">
              {content.contact.address}<br />
              {content.contact.addressLine2}
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-border-light">
            <div className="text-eyebrow text-accent font-body uppercase tracking-widest mb-4">Hours</div>
            <table className="w-full max-w-[420px]">
              <tbody>
                {content.hours.weekly.map((r, i) => (
                  <tr key={i} className="border-b border-border-light/60">
                    <td className="py-2 text-text-muted text-bodySm">{DAYS[i]}</td>
                    <td className="py-2 text-text-dark text-right font-body">
                      {fmt(r.open)} – {fmt(r.close)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <LiveMapEmbed
            address={content.contact.addressFull}
            lat={32.8367}
            lng={-97.2231}
            zoom={16}
            mapLabel={content.brand.wordmark}
            aspectRatio="4/5"
          />
        </div>
      </div>
    </section>
  );
}

function fmt(t: string) {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'pm' : 'am';
  const hh = ((h + 11) % 12) + 1;
  return m === 0 ? `${hh}:00 ${ampm}` : `${hh}:${String(m).padStart(2,'0')} ${ampm}`;
}
