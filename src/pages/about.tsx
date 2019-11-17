import React from 'react'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import Seo from '../components/Seo'
import Helmet from 'react-helmet'

const AboutPage : React.FC = () => {
  return (
    <>
      <Seo title="MIT" />
      <div className="max-w-5xl mx-auto px-8 md:px-24">
        <div className="mx-auto py-16">
          <h1 className="font-san font-bold text-gray-900 text-4xl text-center">
            About
          </h1>
        </div>
        <p className="mb-16 font-san font-medium text-gray-900 text-xl text-justify">
        京都でwebプログラムやAI、ブロックチェーンなどに興味がある方と繋がるためのグループです。
        デザインや、プログラミングを活用した実際のものづくりを通じて、スキルアップしていきたいと思っています。
        わいわいがやがやと、各種情報交換や技術サポートなどを互いにし合える空気を大切にしています。(心理的安全性の確保!!)
        ハッカソンに積極的に参加しているメンバーも多数在籍しています(^ム^)
        </p>
        <h2 className="mb-12 font-sans font-bold text-namari text-2xl text-left">Twitter</h2>
        <a className="twitter-timeline" data-height="600" href="https://twitter.com/AIAI03304476?ref_src=twsrc%5Etfw"></a>
      </div>
    </>
  )
}

export default AboutPage
