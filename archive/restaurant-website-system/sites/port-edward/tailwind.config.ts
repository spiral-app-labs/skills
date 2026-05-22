import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'canvas':      t.color.canvas,
        'canvas-dark': t.color.canvasDark,
        'canvas-alt':  t.color.canvasAlt,
        'ink':         t.color.ink,
        'ink-on-dark': t.color.inkOnDark,
        'ink-muted':   t.color.inkMuted,
        'hairline':    t.color.hairline,
        'accent':      t.color.accent,
        'accent-dark': t.color.accentDark,
        'river':       t.color.river,
        'brass':       t.color.brass,
      },
      fontFamily: {
        display: ['var(--font-imbue)', 'EB Garamond', 'Georgia', 'serif'],
        body:    ['var(--font-imbue)', 'EB Garamond', 'Georgia', 'serif'],
        script:  ['var(--font-labelle)', 'Brush Script MT', 'cursive'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-h1':      [`${t.type.heroH1.size}px`,      { lineHeight: `${t.type.heroH1.lineHeight}px`, letterSpacing: '0' }],
        'section-h2-lg':[`${t.type.sectionH2Lg.size}px`, { lineHeight: `${t.type.sectionH2Lg.lineHeight}px`, letterSpacing: '0' }],
        'section-h2':   [`${t.type.sectionH2.size}px`,   { lineHeight: `${t.type.sectionH2.lineHeight}px`, letterSpacing: '0' }],
        'section-h2-sm':[`${t.type.sectionH2Sm.size}px`, { lineHeight: `${t.type.sectionH2Sm.lineHeight}px`, letterSpacing: '0' }],
        'card-h3':      [`${t.type.cardH3.size}px`,      { lineHeight: `${t.type.cardH3.lineHeight}px`, letterSpacing: '0' }],
        'body':         [`${t.type.body.size}px`,   { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':      [`${t.type.bodySm.size}px`, { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'wordmark':     [`${t.type.wordmark.size}px`, { lineHeight: `${t.type.wordmark.lineHeight}px`, letterSpacing: '0' }],
        'eyebrow':      [`${t.type.eyebrow.size}px`, { lineHeight: `${t.type.eyebrow.lineHeight}px`, letterSpacing: '0' }],
        'nav-label':    [`${t.type.navLabel.size}px`, { lineHeight: `${t.type.navLabel.lineHeight}px` }],
        'button':       [`${t.type.button.size}px`, { lineHeight: `${t.type.button.lineHeight}px`, letterSpacing: '0' }],
        'script':       [`${t.type.script.size}px`, { lineHeight: `${t.type.script.lineHeight}px` }],
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
