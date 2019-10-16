import React from 'react'

const Footer = () => (
  <footer className="px-8 md:px-24 py-20 bg-neutral">
    <p className="mx-auto font-sans text-namari">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        className="hover:text-gray-600 transition-color transition-300"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
    </p>
  </footer>
)

export default Footer
