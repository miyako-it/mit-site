import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="px-8 md:px-24">{children}</main>
    <Footer />
  </>
)

export default Layout
