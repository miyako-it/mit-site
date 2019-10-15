import Typography from "typography"
import gray from 'gray-percentage'
const defaultTheme = require('tailwindcss/defaultTheme')

const theme = {
  title: 'mit-kyoto',
  baseFontSize: '18px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  headerFontFamily: [
    'Noto Sans JP',
    ...defaultTheme.fontFamily.sans,
    '游ゴシック体',
    'YuGothic',
    'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN W3',
    'HiraKakuProN-W3',
    'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ Pro',
    'Hiragino Kaku Gothic Pro',
    'Hiragino Sans',
    'メイリオ',
    'Meiryo',
    'Osaka',
    'ＭＳ Ｐゴシック',
    'MS PGothic'
  ],
  bodyFontFamily: [
    'Noto Serif JP',
    ...defaultTheme.fontFamily.serif,
    '游ゴシック体',
    'YuGothic',
    'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN W3',
    'HiraKakuProN-W3',
    'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ Pro',
    'Hiragino Kaku Gothic Pro',
    'Hiragino Sans',
    'メイリオ',
    'Meiryo',
    'Osaka',
    'ＭＳ Ｐゴシック',
    'MS PGothic'
  ],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 500,
  boldWeight: 700,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      color: '#364e96',
      padding: '0.5em 0',
      borderTop: 'solid 3px #364e96',
      borderBottom: 'solid 3px #364e96',
    },
    h2: {
      color: `${gray(16)}`,
    },
    h3: {
      marginBottom: '1rem',
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    p: {
      margin: `1rem 0 !important`,
      textAlign: 'justify',
      wordBreak: 'break-all',
    },
    ul: {
      marginTop: `1.75rem`,
      marginBottom: `1.75rem`,
    },
    li: {
      marginRight: `calc(1.75rem / 2)`,
    },
  }),
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
