import React from 'react'

const Footer = () => (
  <footer className="px-8 md:px-24 py-20 bg-neutral">
    <p className="mx-auto font-sans text-namari">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a className="underline_center" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </p>
  </footer>
)

export default Footer
