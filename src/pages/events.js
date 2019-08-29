import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

const Events = (props) => {
  const events = props.data.connpass.events
  console.log(events)
  return (
    <div>
      {events.map(event => {
        return (
          <li key={event.event_id} className="list-none">
            <Link to={`/events/${event.event_id}`}>{event.title}</Link>
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
        }
      }
    }
  `)
  return(
    <Events data={data} />
  )
}