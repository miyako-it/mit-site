import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'

import * as xss from 'xss'

export default function Template({ data }) {
  const events = data.events
  const filterXSS = xss.filterXSS

  return (
    <div className="max-w-5xl mx-auto px-8 md:px-24">
      <Seo title={events.title} />
      <h1 className="my-8 font-sans font-bold text-2xl">{events.title}</h1>
      <h2 className="my-4 font-sans text-md">{events.catch}</h2>
      <article
        className="mt-16 font-serif break-all markdown-body"
        dangerouslySetInnerHTML={{ __html: filterXSS(events.description) }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query EventByID($slug: Int) {
    events(event_id: { eq: $slug }) {
      event_id
      title
      started_at
      place
      limit
      event_url
      catch
      description
    }
  }
`
