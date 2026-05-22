import Link from 'next/link';
import { TopTriptychHeader } from '../../components/TopTriptychHeader';
import { BrambleWordmarkFooter } from '../../components/BrambleWordmarkFooter';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import { content } from '../../content.example';

export default function ReservePage() {
  const r = content.reservation;
  return (
    <>
      <TopTriptychHeader />
      <main className="bg-bg-dark min-h-screen pt-32 pb-20 px-6">
        <section className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-address text-text-muted-cream">Book your table</p>
            <h1 className="font-display text-section-h1 text-text-cream" style={{ fontWeight: 300 }}>
              {r.heading}
            </h1>
            <p className="text-body text-text-muted-cream max-w-xl mx-auto">{r.body}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {[r.primaryCta, r.secondaryCta, r.callCta].map((cta, index) => (
              <Link
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noreferrer' : undefined}
                className={
                  index === 0
                    ? 'px-6 py-3.5 rounded-button bg-text-cream text-text-dark hover:bg-white text-button transition-colors'
                    : 'px-6 py-3.5 rounded-button border border-text-cream/50 text-text-cream hover:bg-text-cream/10 text-button transition-colors'
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <LiveMapEmbed
              address={content.brand.address}
              lat={content.brand.geo.lat}
              lng={content.brand.geo.lng}
              zoom={15}
              mapLabel={content.brand.name}
              aspectRatio="16/9"
            />
          </div>
        </section>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
