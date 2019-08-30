import React from "react"
import "../assets/css/tailwind.css"

const Layout = ({ children }) => (
  <>
    <div className="container mx-auto w-10/12">
      <main>{children}</main>
      <footer className="mt-8 mb-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

export default Layout
