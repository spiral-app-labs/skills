// shared/ui-atoms/LiveMapEmbed.tsx
//
// Interactive Google Maps embed to replace static address strings.
// Includes a "Get Directions" CTA that opens the Google Maps directions flow
// in a new tab.
//
// Two modes:
//   - KEYED  — uses Google Maps Embed API with NEXT_PUBLIC_GMAPS_KEY (recommended, more styling control)
//   - KEYLESS — uses the legacy Google Maps query-string embed (no key needed, works out of the box)
//
// See research/aliveness-patterns.md §2.1 for register guidance (styled Mapbox
// for upscale, default Google for casual).

import type { CSSProperties } from 'react';

export type LiveMapEmbedProps = {
  /** Full street address, used as alt text + directions fallback */
  address: string;
  /** Optional search query for a keyless place embed */
  query?: string;
  /** Latitude (optional when using query) */
  lat?: number;
  /** Longitude (optional when using query) */
  lng?: number;
  /** Map zoom level, 1-20. Default 15 (neighborhood scale). */
  zoom?: number;
  /** Optional display label for the marker (shown on hover) */
  mapLabel?: string;
  /** Map aspect ratio. Default "16/10". CSS `aspect-ratio` value. */
  aspectRatio?: string;
  /** Additional className for the outer container */
  className?: string;
  /** Inline style for the outer container */
  style?: CSSProperties;
  /** "Get Directions" CTA label. Default "Get directions →" */
  ctaLabel?: string;
  /** Hide the CTA entirely (sometimes you want just the map) */
  hideCta?: boolean;
};

export function LiveMapEmbed({
  address,
  query,
  lat,
  lng,
  zoom = 15,
  mapLabel,
  aspectRatio = '16/10',
  className = '',
  style,
  ctaLabel = 'Get directions →',
  hideCta = false,
}: LiveMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_KEY;
  const coordinateQuery = lat != null && lng != null ? `${lat},${lng}` : null;
  const placeQuery = query || address;
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(coordinateQuery || placeQuery)}&zoom=${zoom}`
    : `https://maps.google.com/maps?q=${encodeURIComponent(coordinateQuery || placeQuery)}&z=${zoom}&output=embed`;
  const directionsHref = coordinateQuery
    ? `https://www.google.com/maps/dir/?api=1&destination=${coordinateQuery}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeQuery)}`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg ${className}`}
      style={{ aspectRatio, ...style }}
    >
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        title={mapLabel || `Map of ${address}`}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      {!hideCta && (
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white/95 hover:bg-white px-4 py-2 rounded-full text-sm font-medium text-black shadow-md transition-shadow hover:shadow-lg"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
