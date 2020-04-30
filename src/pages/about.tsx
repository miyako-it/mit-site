import React from 'react'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import Seo from '../components/Seo'
import Helmet from 'react-helmet'

const AboutPage : React.FC = () => {
  return (
    <>
      <Seo title="MIT" />
      <div className="max-w-5xl px-8 mx-auto md:px-24">
        <div className="py-16 mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 font-san">
            About
          </h1>
        </div>
        <p className="mb-16 text-xl font-medium text-justify text-gray-900 font-san">
        京都でwebプログラムやAI、ブロックチェーンなどに興味がある方と繋がるためのグループです。
        デザインや、プログラミングを活用した実際のものづくりを通じて、スキルアップしていきたいと思っています。
        わいわいがやがやと、各種情報交換や技術サポートなどを互いにし合える空気を大切にしています。(心理的安全性の確保!!)
        ハッカソンに積極的に参加しているメンバーも多数在籍しています(^ム^)
        </p>
        <h2 className="mb-12 font-sans text-2xl font-bold text-left text-namari">Twitter</h2>
        <a className="twitter-timeline" data-height="600" href="https://twitter.com/AIAI03304476?ref_src=twsrc%5Etfw"></a>
      </div>
    </>
  )
}

export default AboutPage
