// HoursTable — day/time rows. Shared candidate with bramble's opening-times;
// keep this simple for plate (unified, no split-by-service).
export function HoursTable({ hours }: { hours: { day: string; time: string }[] }) {
  return (
    <dl className="divide-y divide-divider">
      {hours.map((row) => (
        <div key={row.day} className="flex items-baseline justify-between py-2.5">
          <dt className="text-body font-medium text-ink">{row.day}</dt>
          <dd className="text-body text-ink-muted">{row.time}</dd>
        </div>
      ))}
    </dl>
  );
}
