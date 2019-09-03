import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

export default function Template({ data }) {
  const events = data.events
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-24">
      <Seo title={events.title}/>
      <h1 className="my-8 font-sans font-bold text-2xl">{events.title}</h1>
      <h2 className="my-4 font-sans text-md">{events.catch}</h2>
      <div
        className="font-serif break-all"
        dangerouslySetInnerHTML={{ __html: events.description }}
      />
    </div>
  )
}
export const pageQuery = graphql`
query EventByID($slug: Int) {
  events(event_id: {eq: $slug}) {
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
