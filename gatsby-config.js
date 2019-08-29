module.exports = {
  siteMetadata: {
    title: "Gatsby Starter - Dimension V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
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
