const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#77AF9C',
        secondary: '#285943',
        accent: '#b39b87',
        namari: '#011638',
        sakura: '#FFFFF3',
        neutral: '#f0fff6',
      },
      borderWidth: {
        24: '6rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '120': '30rem'
      },
      maxWidth: {
        initial: 'initial',
        screen: '100vw'
      },
      fontFamily: {
        sans: [
          'NotoSansJp',
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
        serif: [
          'NotoSerifJp',
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
      },
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')(),
    require('@tailwindcss/custom-forms'),
  ]
}
