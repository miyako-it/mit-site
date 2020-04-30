import React from 'react'
import { graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img, { FluidObject } from 'gatsby-image'
import Seo from '../components/Seo'
import { IndexPageQuery } from "../../types/graphql-types"

import { parseISO, format, isBefore } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  data: IndexPageQuery
}

const UpcomingEvents = ({ events, className }) => {
  const upcomingEvents = events.filter(event => {
    return isBefore(new Date(), parseISO(event.started_at))
  })
  if (Object.keys(upcomingEvents).length === 0) {
    return <></>
  } else {
    return (
      <div className={className}>
        <h2 className="font-sans text-2xl font-bold text-left text-namari">開催予定</h2>
        <ul className="mt-16 font-serif text-lg text-left text-namari">
          {upcomingEvents.map(event => {
            return (
              <li
                key={event.event_id}
                className="flex flex-col items-start my-8 list-none last:my-0 last:mt-8"
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
const IndexPage : React.FC<Props> = ({ data }) => {
  const fluid = data.allImageSharp.edges[0].node.fluid as FluidObject
  const upcomingEvents = data.connpass.events
  return (
    <div className="px-8 md:px-24">
      <div className="flex items-center h-screen mx-auto -mt-12 md:-mt-24 justify-betweeen">
        <Seo title="MIT" />
        <div className="max-w-md lg:w-5/12">
          <h1 className="w-full font-sans text-4xl font-bold leading-loose tracking-widest text-left text-namari">
            みやこIT勉強会はもくもく会を毎月土曜日に開催しています
          </h1>
        </div>
        <Img
          className="self-start hidden w-8/12 h-full ml-auto -mr-8 lg:block md:-mr-24 xl:-mr-56 xl:w-9/12 border-b-24 border-neutral"
          fluid={fluid}
          alt="会場の写真"
        />
      </div>
      <Img
        className="h-full mb-12 -mx-8 lg:hidden max-w-screen md:-mx-24"
        fluid={fluid}
        alt="会場の写真"
      />
      <UpcomingEvents className="pt-10 mx-auto mb-24" events={upcomingEvents} />
      <h2 className="mb-12 font-sans text-2xl font-bold text-left text-namari">Twitter</h2>
      <a className="twitter-timeline" data-height="600" href="https://twitter.com/AIAI03304476?ref_src=twsrc%5Etfw"></a>
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
