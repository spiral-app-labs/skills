import { SplitHeader } from '../../components/SplitHeader';
import { DarkLeafHero } from '../../components/DarkLeafHero';
import { ContactPhotoRow } from '../../components/ContactPhotoRow';
import { ContactHeadlineBlock } from '../../components/ContactHeadlineBlock';
import { InfoCardsRow } from '../../components/InfoCardsRow';
import { ContactFormBlock } from '../../components/ContactFormBlock';
import { ContactStripFooter } from '../../components/ContactStripFooter';
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
        <ContactPhotoRow />
        <ContactHeadlineBlock />
        <InfoCardsRow />
        <ContactFormBlock />
      </main>
      <ContactStripFooter />
    </>
  );
}
