import React from 'react'
import { graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'
import Seo from '../components/Seo'

import { parseISO, format, isBefore } from 'date-fns'
import { ja } from 'date-fns/locale'

const UpcomingEvents = ({ events, className }) => {
  const upcomingEvents = events.filter(event => {
    return isBefore(new Date(), parseISO(event.started_at))
  })
  if (Object.keys(upcomingEvents).length === 0) {
    return <></>
  } else {
    return (
      <div className={className}>
        <h2 className="font-sans font-bold text-namari text-2xl text-left">開催予定</h2>
        <ul className="mt-16 font-serif text-namari text-lg text-left">
          {upcomingEvents.map(event => {
            return (
              <li
                key={event.event_id}
                className="list-none my-8 last:my-0 last:mt-8 flex flex-col items-start"
              >
                <time dateTime={event.started_at} className="mb-2">
                  {format(parseISO(event.started_at), `PPP EEEE`, {
                    locale: ja,
                  })}
                </time>
                <AniLink
                  className="font-serif underline_center"
                  fade
                  to={`/events/${event.event_id}`}
                >
                  <h3>{event.title}</h3>
                </AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const IndexPage = ({ data }) => {
  const fluid = data.allImageSharp.edges[0].node.fluid
  const upcomingEvents = data.connpass.events
  return (
    <div className="px-8 md:px-24">
      <div className=" mx-auto h-screen -mt-12 md:-mt-24 flex items-center justify-betweeen">
        <Seo title="MIT" />
        <div className="max-w-md lg:w-5/12">
          <h1 className="w-full font-sans font-bold text-namari text-4xl text-left leading-loose tracking-widest">
            みやこIT勉強会はもくもく会を毎月土曜日に開催しています
          </h1>
        </div>
        <Img
          className="hidden lg:block ml-auto -mr-8 md:-mr-24 xl:-mr-56 self-start w-8/12 xl:w-9/12 h-full border-b-24 border-neutral"
          fluid={fluid}
          alt="会場の写真"
        />
      </div>
      <Img
        className="lg:hidden max-w-screen h-full mb-12 -mx-8 md:-mx-24"
        fluid={fluid}
        alt="会場の写真"
      />
      <UpcomingEvents className="mx-auto pt-10" events={upcomingEvents} />
    </div>
  )
}

export const query = graphql`
  query IndexPage {
    allImageSharp(filter: { fluid: { originalName: { eq: "img01.jpg" } } }) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    connpass {
      events {
        title
        event_id
        started_at
      }
    }
  }
`

export default IndexPage
