// HeroHoursSidebar — right-rail card with primary Book-a-Table CTA + full-week
// opening hours. Co-locates the "can I eat there tonight" and "how do I book"
// decisions into the first viewport. Shared promotion candidate (audit §11).

import { BookATableButton } from './BookATableButton';
import { OpeningHoursTable } from './OpeningHoursTable';

type Row = { day: string; time: string };

type Props = {
  ctaLabel: string;
  ctaHref: string;
  hoursHeading: string;
  hours: Row[];
  className?: string;
};

export function HeroHoursSidebar({
  ctaLabel,
  ctaHref,
  hoursHeading,
  hours,
  className = '',
}: Props) {
  return (
    <aside
      className={`flex h-full flex-col gap-6 rounded-card bg-surface p-6 ${className}`}
    >
      <BookATableButton label={ctaLabel} href={ctaHref} />
      <OpeningHoursTable heading={hoursHeading} rows={hours} />
    </aside>
  );
}
