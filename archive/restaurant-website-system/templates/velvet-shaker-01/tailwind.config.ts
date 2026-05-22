import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':    t.color.canvas,
        'ink':       t.color.ink,
        'ink-low':   t.color.inkLow,
        'btn-bg':    t.color.buttonBg,
        'btn-ink':   t.color.buttonInk,
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display is responsive via clamp; massive on desktop, legible on mobile.
        'display':    [`clamp(56px, 10vw, ${t.type.display.size}px)`, { lineHeight: '1.2', fontWeight: '500' }],
        'display-mid':[`clamp(32px, 4.5vw, ${t.type.displayMid.size}px)`, { lineHeight: '1.2', fontWeight: '500' }],
        'h3-large':   [`${t.type.h3Large.size}px`, { lineHeight: `${t.type.h3Large.lineHeight}px`, fontWeight: '500' }],
        'h3':         [`${t.type.h3.size}px`, { lineHeight: `${t.type.h3.lineHeight}px`, fontWeight: '500' }],
        'h4':         [`${t.type.h4.size}px`, { lineHeight: `${t.type.h4.lineHeight}px`, fontWeight: '500' }],
        'body':       [`${t.type.body.size}px`, { lineHeight: `${t.type.body.lineHeight}px`, fontWeight: '500' }],
        'nav':        [`${t.type.nav.size}px`, { lineHeight: `${t.type.nav.lineHeight}px`, fontWeight: '500' }],
        'micro':      [`${t.type.micro.size}px`, { lineHeight: `${t.type.micro.lineHeight}px`, fontWeight: '500' }],
      },
      borderRadius: {
        input:  `${t.radius.input}px`,
        button: `${t.radius.button}px`,
      },
      maxWidth: {
        'prose-editorial': `${t.layout.proseWidth}px`,
        'shell':           `${t.layout.maxWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
