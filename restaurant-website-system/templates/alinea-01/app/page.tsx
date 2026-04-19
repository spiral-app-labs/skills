import { WarmGrayStripHeader } from '../components/WarmGrayStripHeader';
import { HeroWordmark } from '../components/HeroWordmark';
import { TockWidgetEmbed } from '../components/TockWidgetEmbed';
import { CampaignModal } from '../components/CampaignModal';
import { MailingListStrip } from '../components/MailingListStrip';
import { EditorialProseBlock } from '../components/EditorialProseBlock';
import { DiningTierCards } from '../components/DiningTierCards';
import { GalleryPreviewGrid } from '../components/GalleryPreviewGrid';
import { WarmGrayStripFooter } from '../components/WarmGrayStripFooter';
import { content } from '../content.example';

export default function HomePage() {
  return (
    <>
      <WarmGrayStripHeader />
      <CampaignModal />
      <main>
        <HeroWordmark />
        <TockWidgetEmbed />
        <MailingListStrip />
        <EditorialProseBlock
          heading={content.prose.heading}
          paragraphs={content.prose.paragraphs}
          image={content.prose.image}
          imageAlt={content.prose.imageAlt}
        />
        <DiningTierCards />
        <GalleryPreviewGrid />
        <TockWidgetEmbed headline={content.tock.headline} />
        <MailingListStrip />
      </main>
      <WarmGrayStripFooter />
    </>
  );
}
