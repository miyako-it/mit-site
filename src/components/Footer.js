import React from 'react'

const Footer = (props) => (
    <footer className="px-8 md:px-24 py-24">
      <p className="max-w-5xl mx-auto">
        © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
)

export default Footer
