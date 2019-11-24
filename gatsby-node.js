'use strict'

const { paginate } = require(`gatsby-awesome-pagination`)

require(`ts-node`).register({
  compilerOptions: {
    module: `commonjs`,
    target: `esnext`,
  },
})

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
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

  const connpassEvents = conpass.data.connpass.events

  paginate({
    createPage, // The Gatsby `createPage` function
    items: connpassEvents, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: `/events`, // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/event-index.tsx`),
  })

  // createPagePerItem({
  //   createPage,
  //   items: connpassEvents,
  //   component: path.resolve(`src/templates/event-post.tsx`),
  //   itemToPath: `event_id`,
  //   itemToId: `event_id`,
  // })

  connpassEvents.forEach(event => {
    const slug = event.event_id
    createPage({
      path: `/events/${slug}`,
      component: path.resolve(`src/templates/event-post.tsx`),
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

  const allEsaPosts = esa.data.allEsaPost.edges

  paginate({
    createPage, // The Gatsby `createPage` function
    items: allEsaPosts, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: `/blogs`, // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog-index.tsx`),
  })

  allEsaPosts.forEach(blog => {
    const slug = blog.node.updated_at
    const id = blog.node.id
    createPage({
      path: `/blogs/${slug}`,
      component: path.resolve(`src/templates/blog-post.tsx`),
      context: {
        id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
