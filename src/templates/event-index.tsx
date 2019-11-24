import React from 'react'
import { graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Seo from '../components/Seo'
import LinkList from '../components/LinkList'
import { EventsPageQuery } from "../../types/graphql-types"
import { PageContextByPaginate } from "../../types/awesome-pagination"

import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  data: EventsPageQuery
  pageContext: PageContextByPaginate
}

const Events: React.FC<Props> = ({ data, pageContext }) => {
  const events = data.allEvents.edges
  return (
    <div className="px-8 md:px-24">
      <div className="max-w-5xl mx-auto">
        <Seo title="Events" />
        <div className="mx-auto py-16 flex flex-col items-center">
          <h1 className="flex flex-col font-san font-bold text-gray-900 text-4xl text-center">
            <span className="mb-4">もくもく会</span>
            <span>勉強会</span>
          </h1>
          <h2>
            <a
              className="mt-16 underline_center"
              href="https://mit.connpass.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connpassでもイベントの告知しています
            </a>
          </h2>
        </div>
        <LinkList prefixPath='events' pageContext={pageContext} />
        <ul>
          {events.map((event) => {
            return (
              <li
                key={event.node.event_id}
                className="list-none my-8 last:my-0 last:mt-8 flex flex-col items-start"
              >
                <time dateTime={event.node.started_at} className="mb-2">
                  {format(parseISO(event.node.started_at), `PPP EEEE`, {
                    locale: ja,
                  })}
                </time>
                <AniLink
                  className="font-serif underline_center"
                  fade
                  to={`/events/${event.node.event_id}`}
                >
                  <h3>{event.node.title}</h3>
                </AniLink>
              </li>
            )
          })}
        </ul>
        <LinkList prefixPath='events' pageContext={pageContext} />
      </div>
    </div>
  )
}

export default Events

export const query = graphql`
  query EventsPage($skip: Int!, $limit: Int!) {
    allEvents(skip: $skip, limit: $limit) {
      edges {
        node {
          title
          event_id
          started_at
        }
      }
    }
  }
`
