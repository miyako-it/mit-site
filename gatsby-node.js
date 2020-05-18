'use strict'

const { paginate } = require(`gatsby-awesome-pagination`)
const Discord = require(`discord.js`)
const got = require(`got`)

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

exports.onPostBuild = async () => {
  const response = await got(
    `https://api.github.com/repos/${process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN}/${process.env.VERCEL_GITHUB_COMMIT_REPO}/git/commits/${process.env.VERCEL_GITHUB_COMMIT_SHA}`,
    { responseType: `json` }
  ).catch(error => {
    // eslint-disable-next-line no-console
    console.error(error.response.body)
  })

  const commitMessage = response === null || response === undefined ? `new vercel rebuild` : response.body.message
  const webhookClient = new Discord.WebhookClient(
    `711598552387682367`,
    `pSlCm-nxbZxev7rnE1eagwLmOaD1IwxXeEC7UfV7cYW8VRebf5kCWe0aldScPvwooDj3`
  )

  const embed = new Discord.MessageEmbed()
    .setTitle(commitMessage)
    .setColor(`#0099ff`)
    .setURL(process.env.VERCEL_URL)
    .setAuthor(
      process.env.VERCEL_GITHUB_COMMIT_AUTHOR_NAME,
      `https://github.com/${process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN}.png`,
      `https://github.com/${process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN}`
    )
    .addFields({
      name: `Latest commit`,
      value: `https://github.com/${process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN}/${process.env.VERCEL_GITHUB_COMMIT_REPO}/commit/${process.env.VERCEL_GITHUB_COMMIT_SHA}`,
    })
    .setTimestamp()

  await webhookClient.send(`new site rebuild`, {
    username: `vercel-build-webhook`,
    avatarURL: `https://i.insider.com/5e990b018427e9308029c328`,
    embeds: [embed],
  })
}
