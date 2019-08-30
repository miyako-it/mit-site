import React from 'react'
import Headroom from 'react-headroom'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = (props) => (
    <Headroom style={{ zIndex: 100}}>
        <div className="px-8 md:px-24 shadow">
            <header className="max-w-5xl mx-auto h-24 w-full flex items-center justify-between bg-white">
                <AniLink fade to="/">
                    <h2 className="my-auto text-4xl">MIT</h2>
                </AniLink>
                <nav className="list-none my-auto flex items-center justify-between ">
                    <AniLink className="font-bold ml-8 hover:text-gray-600 transition-color transition-300" fade to="/events">Events</AniLink>
                    <AniLink className="font-bold ml-8 hover:text-gray-600 transition-color transition-300" fade to="/contact">Contact</AniLink>
                </nav>
            </header>
        </div>
    </Headroom>
)

export default Header
