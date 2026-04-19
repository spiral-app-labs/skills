import { WarmGrayStripHeader } from '../../components/WarmGrayStripHeader';
import { WarmGrayStripFooter } from '../../components/WarmGrayStripFooter';
import { GalleryMasonryGrid } from '../../components/GalleryMasonryGrid';
import { content } from '../../content.example';

export default function GalleryPage() {
  return (
    <>
      <WarmGrayStripHeader />
      <main>
        <section className="bg-canvas pt-24 pb-10 px-6 text-center">
          <h1 className="font-display text-page-title text-text italic">{content.galleryPage.title}</h1>
          <p className="mt-4 max-w-xl mx-auto text-body-sm text-text-muted">{content.galleryPage.subtitle}</p>
        </section>
        <GalleryMasonryGrid />
      </main>
      <WarmGrayStripFooter />
    </>
  );
}
