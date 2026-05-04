import { SplitHeader } from '../../components/SplitHeader';
import { DarkLeafHero } from '../../components/DarkLeafHero';
import { ContactPhotoRow } from '../../components/ContactPhotoRow';
import { ContactHeadlineBlock } from '../../components/ContactHeadlineBlock';
import { InfoCardsRow } from '../../components/InfoCardsRow';
import { ContactFormBlock } from '../../components/ContactFormBlock';
import { ContactStripFooter } from '../../components/ContactStripFooter';
import { LiveMapEmbed } from '../../components/LiveMapEmbed';
import { content } from '../../content.example';

// Aliveness retrofit (2026-04-20): LiveMapEmbed slotted between the
// static InfoCardsRow and the contact form. Dark-canvas framing with
// rounded corners + soft border — matches bamzi's warm-tungsten register.

export default function ContactPage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          title={content.contactPage.hero.title}
          subtitle={content.contactPage.hero.subtitle}
          compact
        />
        <InfoCardsRow />
        <ContactHeadlineBlock />
        <ContactPhotoRow />
        <section className="bg-bg-white pb-16 px-6">
          <div className="max-w-[1000px] mx-auto">
            <LiveMapEmbed
              address={content.brand.address}
              lat={content.brand.geo.lat}
              lng={content.brand.geo.lng}
              zoom={15}
              mapLabel={`${content.brand.name} — ${content.brand.address}`}
              aspectRatio="16/9"
              className="rounded-card overflow-hidden border border-border-light shadow-sm"
            />
          </div>
        </section>
        <ContactFormBlock />
      </main>
      <ContactStripFooter />
    </>
  );
}
