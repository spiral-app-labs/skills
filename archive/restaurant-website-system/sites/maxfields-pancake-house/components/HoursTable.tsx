// HoursTable — day/time rows. Shared candidate with bramble's opening-times;
// keep this simple for plate (unified, no split-by-service).
export function HoursTable({ hours }: { hours: { day: string; time: string }[] }) {
  return (
    <dl className="divide-y divide-divider">
      {hours.map((row) => (
        <div key={row.day} className="py-2.5 md:flex md:items-baseline md:justify-between md:gap-6">
          <dt className="text-body font-medium text-ink">{row.day}</dt>
          <dd className="mt-1 text-body text-ink-muted md:mt-0 md:max-w-[24rem] md:text-right">{row.time}</dd>
        </div>
      ))}
    </dl>
  );
}
