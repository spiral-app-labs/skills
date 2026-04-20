import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:             t.color.canvas,
        'canvas-green':     t.color.canvasGreenSection,
        'canvas-cream':     t.color.canvasCream,
        'canvas-peach':     t.color.canvasPeach,
        'accent-green':     t.color.accentGreen,
        'accent-brown':     t.color.accentBrown,
        'accent-orange':    t.color.accentOrange,
        'accent-orange-dark': t.color.accentOrangeDark,
        'tile-pink':        t.color.tilePink,
        'tile-blue':        t.color.tileBlue,
        'tile-lime':        t.color.tileLime,
        'tile-orange':      t.color.tileOrange,
        'tile-teal':        t.color.tileTeal,
        text:               t.color.text,
        'text-on-dark':     t.color.textOnDark,
        'text-on-green':    t.color.textOnGreen,
        'text-muted':       t.color.textMuted,
        divider:            t.color.divider,
      },
      fontFamily: {
        display: ['var(--font-passion-one)', 'Passion One', 'system-ui', 'sans-serif'],
        body:    ['var(--font-bricolage)', 'Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-h1':    [`clamp(52px, 7.5vw, ${t.type.heroH1.size}px)`,    { lineHeight: '1.1' }],
        'page-title': [`clamp(44px, 6vw, ${t.type.pageTitle.size}px)`,   { lineHeight: '1.08' }],
        'section-h2': [`clamp(36px, 5vw, ${t.type.sectionH2.size}px)`,   { lineHeight: '1.1' }],
        'dish-name':  [`${t.type.dishName.size}px`,  { lineHeight: `${t.type.dishName.lineHeight}px`, letterSpacing: `${t.type.dishName.tracking}px` }],
        'step-label': [`${t.type.stepLabel.size}px`, { lineHeight: `${t.type.stepLabel.lineHeight}px` }],
        'body':       [`${t.type.body.size}px`,      { lineHeight: `${t.type.body.lineHeight}px` }],
        'body-sm':    [`${t.type.bodySm.size}px`,    { lineHeight: `${t.type.bodySm.lineHeight}px` }],
        'button':     [`${t.type.button.size}px`,    { lineHeight: `${t.type.button.lineHeight}px`, letterSpacing: `${t.type.button.tracking}px` }],
        'nav-label':  [`${t.type.navLabel.size}px`,  { lineHeight: `${t.type.navLabel.lineHeight}px` }],
        'price':      [`${t.type.price.size}px`,     { lineHeight: `${t.type.price.lineHeight}px` }],
      },
      borderRadius: {
        pill:   `${t.radius.pill}px`,
        button: `${t.radius.button}px`,
        card:   `${t.radius.card}px`,
        tile:   `${t.radius.tile}px`,
        input:  `${t.radius.input}px`,
      },
      maxWidth: {
        shell: `${t.layout.maxWidth}px`,
        'prose-editorial': `${t.layout.proseWidth}px`,
      },
    },
  },
  plugins: [],
};

export default config;
