import { content } from '../content';
import { WordmarkBookendLayout } from '../components/WordmarkBookendLayout';
import { MassiveWordmarkHero } from '../components/MassiveWordmarkHero';
import { CocktailPhotoRow } from '../components/CocktailPhotoRow';
import { EditorialParagraphBlock } from '../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../components/AsymmetricMiniGallery';
import { NoPriceNamedList } from '../components/NoPriceNamedList';
import { OccasionsStaircase } from '../components/OccasionsStaircase';
import { BrandStoryParagraph } from '../components/BrandStoryParagraph';
import { EventsPreviewGrid } from '../components/EventsPreviewGrid';
import { ScrollRevealSubtle } from '../components/ScrollReveal';

// Home page — corrected 2026-04-22.
//
// Original recreation used a small h1 (HomeIntroBlock) and punted the display
// moment to the footer wordmark echo. Re-investigation of the source via
// scroll-video capture (frame-002 in /tmp/vs-vid) revealed the source ACTUALLY
// leads with a massive wordmark hero. The "bookend" is two massive wordmarks
// (top hero + footer echo), not small + big. Replaced HomeIntroBlock with
// MassiveWordmarkHero. Replaced single-label NumberedEyebrow with
// OccasionsStaircase (3 cards, mirroring the source's Romantic / Business /
// Parties row).
export default function HomePage() {
  const h = content.home;
  return (
    <WordmarkBookendLayout>
      <MassiveWordmarkHero />
      <ScrollRevealSubtle>
        <CocktailPhotoRow photos={h.cocktailPhotoRow} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <EditorialParagraphBlock paragraph={h.editorialParagraph} link={h.galleryLink} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <AsymmetricMiniGallery left={h.asymmetricGallery.left} right={h.asymmetricGallery.right} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <NoPriceNamedList items={h.cocktailsNoPrice} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <OccasionsStaircase
          eyebrow={{ number: h.numberedEyebrow.number, label: h.numberedEyebrow.label }}
          items={h.occasions}
        />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <BrandStoryParagraph paragraph={h.brandStory.paragraph} thumbnails={h.brandStory.thumbnails} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <EventsPreviewGrid label={h.events.label} items={h.events.items} />
      </ScrollRevealSubtle>
    </WordmarkBookendLayout>
  );
}
