import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import { EventByIdTempQuery } from "../../types/graphql-types"

import insane from 'insane' //xss対策
import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  data: EventByIdTempQuery
}

const EventByIdTemp: React.FC<Props> = ({ data }) => {
  const events = data.events
  const bodyHtml = insane(events.description)

  return (
    <div className="max-w-5xl px-8 mx-auto md:px-24">
      <Seo title={events.title} />
      <h1 className="my-8 font-sans text-2xl font-bold">
        <a
          className="underline_center"
          href={events.event_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {events.title}
        </a>
      </h1>
      <h2 className="my-4 font-sans text-md">{events.catch}</h2>
      <h3 className="mt-8 font-sans text-sm">
        <span>開催日時 ： </span>
        {format(parseISO(events.started_at), `PPP p`, {
          locale: ja,
        })}
        <span> 〜 </span>
        {format(parseISO(events.ended_at), `p EEEE`, {
          locale: ja,
        })}
      </h3>
      <h4 className="font-sans text-sm">
        <span>会場 ： </span>
        {events.place}
      </h4>
      <h4 className="font-sans text-sm">
        <span>住所 ： </span>
        {events.address}
      </h4>
      <article
        className="mt-16 font-serif break-all markdown-body"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query EventByIdTemp($slug: Int) {
    events(event_id: { eq: $slug }) {
      event_id
      title
      started_at
      ended_at
      place
      address
      event_url
      catch
      description
    }
  }
`

export default EventByIdTemp
