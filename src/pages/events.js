import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

const Events = (props) => {
  const events = props.data.connpass.events
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mx-auto py-16">
        <h1 className="font-san font-bold text-gray-900 text-4xl text-left">開催したもくもく会・勉強会</h1>
      </div>
      <ul>
        {events.map(event => {
          return (
            <li key={event.event_id} className="list-none my-8">
              <h3 className="mb-2">{format(parseISO(event.started_at), 'PPP EEEE', { locale: ja })}</h3>
              <AniLink className="font-serif hover:text-gray-600 transition-color transition-300" fade to={`/events/${event.event_id}`}>{event.title}</AniLink>
            </li>  
          )
        })}
      </ul>
    </div>
  )
}

export default () => {
  const data = useStaticQuery(graphql`
    query EventsQuery {
      connpass {
        events {
          title
          event_id
          started_at
        }
      }
    }
  `)
  return(
    <Events data={data} />
  )
}