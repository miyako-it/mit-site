import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { ThemeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/core"

// Use at the root of your app
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
)

export default Layout
