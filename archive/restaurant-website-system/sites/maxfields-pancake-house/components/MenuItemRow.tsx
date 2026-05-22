// MenuItemRow — atomic text-row: name bold / description muted / price right.
// Rendered inside DenseMenuColumns; styling lives in globals.css (.menu-row)
// so the hairline divider behavior is consistent.
export function MenuItemRow({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price?: string;
}) {
  return (
    <div className="menu-row">
      <div>
        <h3 className="text-[18px] font-medium text-ink leading-snug">{name}</h3>
        <p className="mt-1 text-body-sm text-ink-muted">{description}</p>
      </div>
      {price ? <div className="text-body font-medium text-ink whitespace-nowrap">{price}</div> : null}
    </div>
  );
}
