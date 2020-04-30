import React from 'react'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Hamburger from './Hamburger'

const Header = props => (
  <Headroom style={{ zIndex: 100 }}>
    <div className="pl-8 pr-0 md:px-24 bg-neutral">
      <header className="flex items-center justify-between w-full h-12 mx-auto sm:h-24 text-namari">
        <AniLink fade to="/">
          <h2 className="my-auto font-sans text-lg sm:text-2xl hover:text-gray-600 transition-color transition-300">
            Mit Kyoto
          </h2>
        </AniLink>
        <nav className="flex items-center justify-between my-auto ">
          <AniLink
            className="hidden ml-8 font-serif underline_center md:inline-flex"
            fade
            to="/about"
          >
            <h4>About</h4>
          </AniLink>

          <AniLink
            className="hidden ml-8 font-serif underline_center md:inline-flex"
            fade
            to="/events"
          >
            <h4>Events</h4>
          </AniLink>
          <AniLink
            className="hidden ml-8 font-serif underline_center md:inline-flex"
            fade
            to="/blogs"
          >
            <h4>Blogs</h4>
          </AniLink>
          <Hamburger />
        </nav>
      </header>
    </div>
  </Headroom>
)

export default Header
