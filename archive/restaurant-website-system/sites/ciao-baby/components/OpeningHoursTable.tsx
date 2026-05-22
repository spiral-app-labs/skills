// OpeningHoursTable — full-week hours rendered as day | time rows with hairline
// dividers. Shared promotion candidate (audit §11).

type Row = { day: string; time: string };

type Props = {
  heading?: string;
  rows: Row[];
  className?: string;
};

export function OpeningHoursTable({ heading, rows, className = '' }: Props) {
  return (
    <div className={className}>
      {heading && (
        <p className="mb-3 font-body text-body-sm font-medium text-ink-muted">
          {heading}
        </p>
      )}
      <dl className="text-body-sm">
        {rows.map((r) => (
          <div
            key={r.day}
            className="gusto-hours-row flex items-start justify-between gap-3 py-2.5"
          >
            <dt className="shrink-0 text-ink">{r.day}</dt>
            <dd className="text-right text-ink-muted">{r.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
