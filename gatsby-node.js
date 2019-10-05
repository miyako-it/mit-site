// import { paginate } from 'gatsby-awesome-pagination';

const path = require(`path`)

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions
  const conpass = await graphql(`
    query ConnpassQuery {
      connpass {
        events {
          event_id
        }
      }
    }
  `)
  conpass.data.connpass.events.forEach(event => {
    const slug = event.event_id
    createPage({
      path: `/events/${slug}`,
      component: path.resolve(`src/templates/event.js`),
      context: {
        slug,
      },
    })
  })

  const esa = await graphql(`
    query EsaPageQuery {
      allEsaPost {
        edges {
          node {
            id
            updated_at(formatString: "Y/M/D/h/m/s")
          }
        }
      }
    }
  `)

  esa.data.allEsaPost.edges.forEach(blog => {
    const slug = blog.node.updated_at
    const id = blog.node.id
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        id,
      },
    })
  })

}
