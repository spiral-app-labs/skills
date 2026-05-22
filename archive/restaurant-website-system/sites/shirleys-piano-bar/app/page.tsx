import { content } from '../content.example';
import { WordmarkBookendLayout } from '../components/WordmarkBookendLayout';
import { PianoBarHero } from '../components/PianoBarHero';
import { CocktailPhotoRow } from '../components/CocktailPhotoRow';
import { EditorialParagraphBlock } from '../components/EditorialParagraphBlock';
import { AsymmetricMiniGallery } from '../components/AsymmetricMiniGallery';
import { NoPriceNamedList } from '../components/NoPriceNamedList';
import { OccasionsStaircase } from '../components/OccasionsStaircase';
import { BrandStoryParagraph } from '../components/BrandStoryParagraph';
import { ScrollRevealSubtle } from '../components/ScrollReveal';
import { TonightThisWeek } from '../components/TonightThisWeek';
import { GuestReviewSignals } from '../components/GuestReviewSignals';

export default function HomePage() {
  const h = content.home;
  return (
    <WordmarkBookendLayout>
      <PianoBarHero />
      <ScrollRevealSubtle>
        <TonightThisWeek label={h.events.label} items={h.events.items} cta={h.events.cta} />
      </ScrollRevealSubtle>
      <ScrollRevealSubtle>
        <GuestReviewSignals
          eyebrow={h.reviewProof.eyebrow}
          heading={h.reviewProof.heading}
          intro={h.reviewProof.intro}
          themes={h.reviewProof.themes}
        />
      </ScrollRevealSubtle>
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
    </WordmarkBookendLayout>
  );
}
