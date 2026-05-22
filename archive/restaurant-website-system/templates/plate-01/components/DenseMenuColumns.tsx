'use client';

import type { MenuSection, MenuEntry } from '../content.example';
import { MenuItemRow } from './MenuItemRow';
import { MenuPhotoCallout } from './MenuPhotoCallout';

// DenseMenuColumns — two-column dense menu layout with irregular photo
// callouts. Signature pattern. Splits the `entries` array into two columns
// in order (odd → left, even → right) so photo callouts stay in their
// authored position relative to the surrounding items. Not a naive 2-col
// CSS grid because that would decouple photos from their neighbors.
export function DenseMenuColumns({ section }: { section: MenuSection }) {
  const left: MenuEntry[] = [];
  const right: MenuEntry[] = [];
  section.entries.forEach((entry, i) => {
    (i % 2 === 0 ? left : right).push(entry);
  });

  return (
    <div id={section.id} className="max-w-plate mx-auto px-5 md:px-10 pt-8 md:pt-12 pb-8 md:pb-12">
      <h2 className="font-display text-section-h2 font-medium text-ink mb-6 md:mb-8">
        {section.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-x-10 md:gap-x-16">
        <MenuColumn entries={left} />
        <MenuColumn entries={right} />
      </div>
    </div>
  );
}

function MenuColumn({ entries }: { entries: MenuEntry[] }) {
  return (
    <div>
      {entries.map((entry, i) =>
        entry.type === 'item' ? (
          <MenuItemRow
            key={`item-${i}`}
            name={entry.name}
            description={entry.description}
            price={entry.price}
          />
        ) : (
          <MenuPhotoCallout key={`photo-${i}`} src={entry.src} alt={entry.alt} />
        )
      )}
    </div>
  );
}
