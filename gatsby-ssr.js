/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require(`react`)

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="twitter"
      async
      defer
      type="text/javascript"
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    />,
  ])
}
