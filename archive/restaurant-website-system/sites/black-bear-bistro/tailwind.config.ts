import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':      t.color.canvas,
        'canvas-alt':  t.color.canvasAlt,
        'ink':         t.color.ink,
        'ink-muted':   t.color.inkMuted,
        'accent':      t.color.accent,
        'accent-dark': t.color.accentDark,
        'accent-soft': t.color.accentSoft,
        'divider':     t.color.divider,
      },
      fontFamily: {
        display: ['var(--font-urbanist)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:    ['var(--font-urbanist)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-h1':    [`${t.type.heroH1.size}px`, { lineHeight: '1.0' }],
        'section-h2': [`${t.type.sectionH2.size}px`, { lineHeight: '1.05' }],
        'section-h3': [`${t.type.sectionH3.size}px`, { lineHeight: '1.1' }],
        'body':       [`${t.type.body.size}px`, { lineHeight: `${t.type.body.lineHeight}px` }], // 1.3× LOCKED
        'body-sm':    [`${t.type.bodySm.size}px`, { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'nav-label':  [`${t.type.navLabel.size}px`, { lineHeight: `${t.type.navLabel.lineHeight}px` }],
        'button':     [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px` }],
        'eyebrow':    [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        'plate':        `${t.layout.maxWidth}px`,
        'plate-narrow': `${t.layout.maxWidthNarrow}px`,
      },
    },
  },
  plugins: [],
};

export default config;
