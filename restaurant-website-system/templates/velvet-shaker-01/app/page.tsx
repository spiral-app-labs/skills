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

// Home page — note the deliberate small-h1 + massive-wordmark-at-bottom bookend.
// The wordmark echo lives in WordmarkBookendLayout, NOT here.
export default function HomePage() {
  const h = content.home;
  return (
    <WordmarkBookendLayout>
      <HomeIntroBlock />
      <CocktailPhotoRow photos={h.cocktailPhotoRow} />
      <EditorialParagraphBlock paragraph={h.editorialParagraph} link={h.galleryLink} />
      <AsymmetricMiniGallery left={h.asymmetricGallery.left} right={h.asymmetricGallery.right} />
      <NoPriceNamedList items={h.cocktailsNoPrice} />
      <NumberedEyebrow number={h.numberedEyebrow.number} label={h.numberedEyebrow.label} displayLabel={h.occasionLabel} />
      <BrandStoryParagraph paragraph={h.brandStory.paragraph} thumbnails={h.brandStory.thumbnails} />
      <EventsPreviewGrid label={h.events.label} items={h.events.items} />
    </WordmarkBookendLayout>
  );
}
