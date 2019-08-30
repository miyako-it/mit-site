import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

const Events = (props) => {
  const events = props.data.connpass.events
  console.log(events)
  return (
    <div className="my-4">
      <h1>開催したもくもく会・勉強会</h1>
      {events.map(event => {
        return (
          <li key={event.event_id} className="list-none my-8">
            <h3>{format(parseISO(event.started_at), 'PPP EEEE', { locale: ja })}</h3>
            <AniLink fade to={`/events/${event.event_id}`}>{event.title}</AniLink>
          </li>  
        )
      })}
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