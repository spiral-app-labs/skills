import { content } from '../content.example';
import { WordmarkBookendLayout } from '../components/WordmarkBookendLayout';
import { HomeIntroBlock } from '../components/HomeIntroBlock';
import { CocktailPhotoRow } from '../components/CocktailPhotoRow';
import { EditorialParagraphBlock } from '../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../components/AsymmetricMiniGallery';
import { NoPriceNamedList } from '../components/NoPriceNamedList';
import { NumberedEyebrow } from '../components/NumberedEyebrow';
import { BrandStoryParagraph } from '../components/BrandStoryParagraph';
import { EventsPreviewGrid } from '../components/EventsPreviewGrid';
import { ScrollRevealSubtle } from '../components/ScrollReveal';

// Home page — note the deliberate small-h1 + massive-wordmark-at-bottom bookend.
// The wordmark echo lives in WordmarkBookendLayout, NOT here.
//
// Aliveness retrofit (2026-04-20): below-hero sections wrapped in
// ScrollRevealSubtle (intensity 1 — modernist restraint). HomeIntroBlock is
// the hero-analogue here and stays unwrapped per aliveness-patterns.md §3.1.
export default function HomePage() {
  const h = content.home;
  return (
    <WordmarkBookendLayout>
      <HomeIntroBlock />
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
        <NumberedEyebrow number={h.numberedEyebrow.number} label={h.numberedEyebrow.label} displayLabel={h.occasionLabel} />
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
