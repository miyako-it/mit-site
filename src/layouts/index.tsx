import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { ThemeProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/core"

// Use at the root of your app
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className="bg-neutral min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
)

export default Layout
