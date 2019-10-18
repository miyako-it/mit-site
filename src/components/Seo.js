/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: `https://miyako-it.netlify.com/mitogp.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:image`,
          content: `mitogp.png`,
        },
      ].concat(meta)}
    >
      <script
        src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3"
        async
        defer
      >{`
        const crate = new Crate({
          server: '608608195740565514',
          channel: '608872744171601945',
          shard: 'https://disweb.dashflo.net'
        })
        crate.hide()
        setTimeout(() => {
          crate.show()
          crate.notify({
            content: 'みやこIT勉強会の公式サイトへようこそ！',
            timeout: 4000,
          })
          setTimeout(() => {
            crate.notify({
              content: '右下のアイコンからDiscordのチャットルームに入れます',
              timeout: 4000,
            })
            setTimeout(() => {
              crate.notify({
                content: 'メッセージを残していってね😉',
                timeout: 4000,
              })
            }, 2000)
          }, 2000)
        }, 5000)
      `}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
