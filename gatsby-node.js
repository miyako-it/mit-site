// import { paginate } from 'gatsby-awesome-pagination';

const path = require(`path`)

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query ConnpassQuery {
      connpass {
        events {
          event_id
        }
      }
    }
  `)
  data.connpass.events.forEach(event => {
    const slug = event.event_id
    createPage({
      path: `/events/${slug}`,
      component: path.resolve(`src/templates/event.js`),
      context: {
        slug,
      },
    })
  })
}
