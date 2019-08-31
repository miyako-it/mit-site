import React from 'react'
import Headroom from 'react-headroom'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = (props) => (
    <Headroom style={{ zIndex: 100}}>
        <div className="px-8 md:px-24 bg-neutral">
            <header className="mx-auto h-12 sm:h-24 w-full flex items-center justify-between text-namari">
                <AniLink fade to="/">
                    <h2 className="my-auto text-lg sm:text-2xl hover:text-gray-600 transition-color transition-300">Mit Kyoto</h2>
                </AniLink>
                <nav className="my-auto flex items-center justify-between ">
                    <AniLink className="ml-8 hover:text-gray-600 transition-color transition-300" fade to="/events">Events</AniLink>
                    <AniLink className="ml-8 hover:text-gray-600 transition-color transition-300" fade to="/contact">Contact</AniLink>
                </nav>
            </header>
        </div>
    </Headroom>
)

export default Header
