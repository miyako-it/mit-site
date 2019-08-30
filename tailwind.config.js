const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '120': '30rem'
      },
      fontFamily: {
        sans: [
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
          ...defaultTheme.fontFamily.serif,
          '游明朝体',
          'YuMincho',
          '游明朝',
          'Yu Mincho',
          'ヒラギノ明朝 ProN W3',
          'Hiragino Mincho ProN W3',
          'HiraMinProN-W3',
          'ヒラギノ明朝 ProN',
          'Hiragino Mincho ProN',
          'ヒラギノ明朝 Pro',
          'Hiragino Mincho Pro',
          'HGS明朝E',
          'ＭＳ Ｐ明朝',
          'MS PMincho'
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
