'use client';

import type { MenuSection, MenuItemEntry, MenuPhotoEntry } from '../content.example';
import { MenuItemRow } from './MenuItemRow';
import { MenuPhotoCallout } from './MenuPhotoCallout';

// DenseMenuColumns — two-column dense menu layout with irregular photo
// callouts. Signature pattern. Splits the `entries` array into two columns
// in order (odd → left, even → right) so photo callouts stay in their
// authored position relative to the surrounding items. Not a naive 2-col
// CSS grid because that would decouple photos from their neighbors.
export function DenseMenuColumns({ section, index }: { section: MenuSection; index: number }) {
  const items = section.entries.filter((entry): entry is MenuItemEntry => entry.type === 'item');
  const photos = section.entries.filter((entry): entry is MenuPhotoEntry => entry.type === 'photo');
  const isFlipped = index % 2 === 1;
  const menuCard = (
    <div className="rounded-card border border-divider/70 bg-white/80 px-6 py-7 shadow-[0_18px_50px_rgba(30,30,28,0.06)] md:px-9 md:py-9">
      <h2 className="font-display text-section-h2 font-medium text-ink">
        {section.title}
      </h2>
      <div className="mt-5">
        {items.map((entry) => (
          <MenuItemRow
            key={entry.name}
            name={entry.name}
            description={entry.description}
            price={entry.price}
          />
        ))}
      </div>
    </div>
  );
  const photoColumn = photos.length > 0 && (
    <div className="flex h-full flex-col gap-5 md:gap-6">
      {photos.slice(0, 2).map((photo, photoIndex) => (
        <MenuPhotoCallout
          key={photo.alt}
          src={photo.src}
          alt={photo.alt}
          label={photoIndex === 0 ? menuLabel(section) : 'Chef special'}
          className="min-h-[260px] flex-1"
        />
      ))}
    </div>
  );

  return (
    <div id={section.id} className="max-w-plate mx-auto px-5 py-3 md:px-10 md:py-4 scroll-mt-24">
      <div className="grid items-stretch gap-5 md:grid-cols-[1.18fr_0.82fr] md:gap-6">
        {isFlipped && photoColumn}
        {menuCard}
        {!isFlipped && photoColumn}
      </div>
    </div>
  );
}

function menuLabel(section: MenuSection) {
  if (section.id === 'starters') return 'Starters';
  if (section.id === 'entrees') return 'Mains';
  if (section.id === 'specials') return 'Specials';
  if (section.id === 'vegan-vegetarian') return 'Vegan';
  return section.title;
}
