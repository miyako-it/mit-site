import React from 'react'
import Headroom from 'react-headroom'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Hamburger from './Hamburger'

const Header = props => (
  <Headroom style={{ zIndex: 100 }}>
    <div className="pl-8 pr-0 md:px-24 bg-neutral">
      <header className="mx-auto h-12 sm:h-24 w-full flex items-center justify-between text-namari">
        <AniLink fade to="/">
          <h2 className="my-auto font-sans text-lg sm:text-2xl hover:text-gray-600 transition-color transition-300">
            Mit Kyoto
          </h2>
        </AniLink>
        <nav className="my-auto flex items-center justify-between ">
          <AniLink
            className="font-serif ml-8 underline_center hidden md:inline-flex"
            fade
            to="/about"
          >
            <h4>About</h4>
          </AniLink>

          <AniLink
            className="font-serif ml-8 underline_center hidden md:inline-flex"
            fade
            to="/events"
          >
            <h4>Events</h4>
          </AniLink>
          <AniLink
            className="font-serif ml-8 underline_center hidden md:inline-flex"
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
