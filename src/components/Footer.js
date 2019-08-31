import React from 'react'

const Footer = (props) => (
    <footer className="px-8 md:px-24 py-24 bg-neutral">
      <p className="mx-auto text-namari">
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
)

export default Footer
