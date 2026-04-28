// HeroHoursSidebar — right-rail card with primary Book-a-Table CTA + full-week
// opening hours. Co-locates the "can I eat there tonight" and "how do I book"
// decisions into the first viewport. Shared promotion candidate (audit §11).
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus pill now sits above the
// full-week table as a live summary (dark-monolithic palette loves the tint).
// Keep the full table below so regulars still see "when do you open Friday".

import { BookATableButton } from './BookATableButton';
import { OpeningHoursTable } from './OpeningHoursTable';
import { LiveOpenStatus } from './LiveOpenStatus';
import { content } from '../content.example';

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
      <LiveOpenStatus hours={content.brand.hoursConfig} variant="pill" />
      <OpeningHoursTable heading={hoursHeading} rows={hours} />
    </aside>
  );
}
