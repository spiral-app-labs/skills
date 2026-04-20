import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':      t.color.canvas,
        'canvas-dark': t.color.canvasDark,
        'ink':         t.color.ink,
        'ink-on-dark': t.color.inkOnDark,
        'ink-muted':   t.color.inkMuted,
        'hairline':    t.color.hairline,
      },
      fontFamily: {
        display: ['var(--font-imbue)', 'EB Garamond', 'Georgia', 'serif'],
        body:    ['var(--font-imbue)', 'EB Garamond', 'Georgia', 'serif'],
        script:  ['var(--font-labelle)', 'Brush Script MT', 'cursive'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // 150px H1 with deliberate responsive ramp: 150 → 96 → 72 → 56.
        'hero-h1':      [`clamp(56px, 13vw, ${t.type.heroH1.size}px)`,    { lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'section-h2-lg':[`clamp(48px, 8vw,  ${t.type.sectionH2Lg.size}px)`, { lineHeight: '1.0',  letterSpacing: '-0.01em' }],
        'section-h2':   [`clamp(36px, 6vw,  ${t.type.sectionH2.size}px)`, { lineHeight: '1.04', letterSpacing: '-0.008em' }],
        'section-h2-sm':[`clamp(32px, 4.5vw, ${t.type.sectionH2Sm.size}px)`, { lineHeight: '1.08', letterSpacing: '-0.006em' }],
        'card-h3':      [`clamp(28px, 3.2vw, ${t.type.cardH3.size}px)`,   { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'body':         [`${t.type.body.size}px`,   { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':      [`${t.type.bodySm.size}px`, { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'wordmark':     [`${t.type.wordmark.size}px`, { lineHeight: `${t.type.wordmark.lineHeight}px`, letterSpacing: `${t.type.wordmark.tracking}px` }],
        'eyebrow':      [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: `${t.type.eyebrow.tracking}px` }],
        'nav-label':    [`${t.type.navLabel.size}px`, { lineHeight: `${t.type.navLabel.lineHeight}px` }],
        'button':       [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px`, letterSpacing: `${t.type.button.tracking}px` }],
        'script':       [`clamp(24px, 2.8vw, ${t.type.script.size}px)`, { lineHeight: '1.1' }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        'shell': `${t.layout.maxWidth}px`,
        'prose-editorial': `${t.layout.proseWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
