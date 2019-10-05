import React from "react"

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className="bg-neutral min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">{children}</main>
    <Footer />
  </div>
)

export default Layout
