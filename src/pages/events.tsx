import React from 'react'
import { graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Seo from '../components/Seo'

import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

const Events = ({ data }) => {
  const events = data.connpass.events
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
        <ul>
          {events.map(event => {
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
    </div>
  )
}

export default Events

export const query = graphql`
  query EventsPage {
    connpass {
      events {
        title
        event_id
        started_at
      }
    }
  }
`
