import { ImageResponse } from 'next/og';
import { content } from '../content';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background: '#f8efe2',
          color: '#1f1510',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ fontSize: 42, fontWeight: 900, color: '#d3361f' }}>{content.brand.fullName}</div>
          <div
            style={{
              borderRadius: 999,
              background: '#1f1510',
              color: '#fff7ec',
              padding: '14px 24px',
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            4.5 rating · 250+ reviews
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 950, letterSpacing: -2, maxWidth: 920 }}>
            Thin crust first. Deep dish when the table wants more.
          </div>
          <div style={{ marginTop: 30, fontSize: 32, lineHeight: 1.25, maxWidth: 900, color: '#5b473e' }}>
            {`${content.brand.address.line1}, ${content.brand.address.line2} · ${content.brand.phone}`}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 18, fontSize: 28, fontWeight: 800 }}>
          <span style={{ borderRadius: 999, background: '#ffffff', padding: '14px 22px' }}>Made-from-scratch thin crust</span>
          <span style={{ borderRadius: 999, background: '#ffffff', padding: '14px 22px' }}>Pasta dinners</span>
          <span style={{ borderRadius: 999, background: '#ffffff', padding: '14px 22px' }}>Beer & bar seats</span>
        </div>
      </div>
    ),
    size,
  );
}
