import { WarmGrayStripHeader } from '../components/WarmGrayStripHeader';
import { HeroWordmark } from '../components/HeroWordmark';
import { TockWidgetEmbed } from '../components/TockWidgetEmbed';
import { CampaignModal } from '../components/CampaignModal';
import { MailingListStrip } from '../components/MailingListStrip';
import { EditorialProseBlock } from '../components/EditorialProseBlock';
import { DiningTierCards } from '../components/DiningTierCards';
import { GalleryPreviewGrid } from '../components/GalleryPreviewGrid';
import { WarmGrayStripFooter } from '../components/WarmGrayStripFooter';
import { LiveMapEmbed } from '../components/LiveMapEmbed';
import { ScrollRevealSubtle } from '../components/ScrollReveal';
import { content } from '../content.example';

// Aliveness retrofit (2026-04-20):
// - Below-hero sections wrapped in ScrollRevealSubtle (intensity 1 — Michelin
//   discipline; no flashy movement per audit §12.4).
// - LiveMapEmbed added after the GalleryPreviewGrid. Alinea has no /contact
//   page, so the home doubles as the "find us" surface. Styled restrained
//   (simple rounded corners, no heavy shadow).
// - Hero stays unwrapped — first viewport must paint instantly per §3.1.

export default function HomePage() {
  return (
    <>
      <WarmGrayStripHeader />
      <CampaignModal />
      <main>
        <HeroWordmark />
        <ScrollRevealSubtle>
          <TockWidgetEmbed />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <MailingListStrip />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <EditorialProseBlock
            heading={content.prose.heading}
            paragraphs={content.prose.paragraphs}
            image={content.prose.image}
            imageAlt={content.prose.imageAlt}
          />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <DiningTierCards />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <GalleryPreviewGrid />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <section className="bg-bg-page px-6 md:px-10 py-16">
            <div className="max-w-[1100px] mx-auto">
              <LiveMapEmbed
                address={`${content.brand.address.line1}, ${content.brand.address.line2}`}
                lat={content.brand.geo.lat}
                lng={content.brand.geo.lng}
                zoom={15}
                mapLabel={`${content.brand.name} — ${content.brand.address.line2}`}
                aspectRatio="16/9"
                className="rounded-card overflow-hidden"
              />
            </div>
          </section>
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <TockWidgetEmbed headline={content.tock.headline} />
        </ScrollRevealSubtle>
        <ScrollRevealSubtle>
          <MailingListStrip />
        </ScrollRevealSubtle>
      </main>
      <WarmGrayStripFooter />
    </>
  );
}
