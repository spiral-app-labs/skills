import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':          t.color.canvas,
        'strip-warm':      t.color.stripWarm,
        'strip-warm-dark': t.color.stripWarmDark,
        'bg-muted':        t.color.bgMuted,
        'text':            t.color.text,
        'text-strip':      t.color.textStrip,
        'text-muted':      t.color.textMuted,
        'tock-blue':       t.color.tockBlue,
        'divider':         t.color.divider,
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'EB Garamond', 'Garamond', 'serif'],
        body:    ['var(--font-eb-garamond)', 'Garamond', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'hero-wordmark': [`clamp(64px, 10vw, ${t.type.heroWordmark.size}px)`, { lineHeight: '1.08' }],
        'page-title':    [`clamp(44px, 6vw, ${t.type.pageTitle.size}px)`,  { lineHeight: '1.23' }],
        'section-h2':    [`clamp(32px, 4.5vw, ${t.type.sectionH2.size}px)`, { lineHeight: '1.3' }],
        'section-h3':    [`clamp(26px, 3.5vw, ${t.type.sectionH3.size}px)`, { lineHeight: '1.33' }],
        'card-label':    [`${t.type.cardLabel.size}px`, { lineHeight: `${t.type.cardLabel.lineHeight}px` }],
        'body':          [`${t.type.body.size}px`, { lineHeight: `${t.type.body.lineHeight}px` }], // 19.2 / 34.56 = 1.8×
        'body-sm':       [`${t.type.bodySm.size}px`, { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'nav-label':     [`${t.type.navLabel.size}px`, { lineHeight: `${t.type.navLabel.lineHeight}px`, letterSpacing: `${t.type.navLabel.tracking}px` }],
        'button':        [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px`, letterSpacing: `${t.type.button.tracking}px` }],
        'eyebrow':       [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        'prose-editorial': `${t.layout.proseWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
