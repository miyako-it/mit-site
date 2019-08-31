require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `みやこIT勉強会`,
    description: `みやこIT勉強会 official site.`,
    author: `koji ishimoto`,
    siteUrl: `https://miyako-it.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://miyako-it.netlify.com`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      }
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/index.js`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'みやこIT勉強会',
        short_name: 'MIT',
        start_url: '/',
        background_color: '#f0fff6',
        theme_color: '#f0fff6',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://connpass.com/api/v1/event/?series_id=7278&order=2&count=100",
          rootKey: "connpass",
          schemas: {
            connpass: `
              results_returned: Int
              results_available: Int
              results_start: Int
              events: [events]
            `,
            events: `
              event_id: Int
              title: String
              catch: String
              description: String
              event_url: String
              hash_tag: String
              started_at: String
              ended_at: String
              limit: Int
              event_type: String
              series: [series]	
              address: String
              place: String
              lat: Float
              lon: Float
              owner_id: Int
              owner_nickname: String
              owner_display_name: String
              accepted: Int
              waiting: Int
              updated_at: String
            `,
            series: `
              id: Int
              title: String
              url: String
            `
        }
      }
    }
  ],
}
