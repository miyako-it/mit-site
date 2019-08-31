import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className="bg-neutral">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
