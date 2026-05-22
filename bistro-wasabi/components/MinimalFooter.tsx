import { content, links } from '../content';

export function MinimalFooter() {
  return (
    <footer className="px-8 md:px-10 py-10 border-t border-border/60">
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-ui-label text-text-muted">{content.footer.text}</p>
          <a
            href={links.phone}
            className="block text-item-name text-text transition-colors hover:text-text/80"
          >
            {content.brand.phone}
          </a>
          <a
            href={links.email}
            className="block text-body text-text-muted transition-colors hover:text-text"
          >
            {content.brand.email}
          </a>
        </div>

        <div className="space-y-3">
          {content.locations.map((location) => (
            <div key={location.name} className="grid grid-cols-[112px_1fr] gap-4">
              <p className="text-ui-label text-text-muted">{location.name}</p>
              <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {content.brand.hoursDisplay.map((row) => (
            <div key={row.day} className="grid grid-cols-[112px_1fr] gap-4">
              <p className="text-ui-label text-text-muted">{row.day}</p>
              <p className="text-body text-text-muted">{row.value}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
