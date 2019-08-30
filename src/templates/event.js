import React from "react"
import { graphql } from "gatsby"


export default function Template({ data }) {
  const events = data.events
  return (
    <div className="blog-post">
      <h1 className="my-8 font-bold text-2xl">{events.title}</h1>
      <h2 className="my-4 text-md">{events.catch}</h2>
      <div
        className="font-serif"
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
