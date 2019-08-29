import React from "react"
import { graphql } from "gatsby"


export default function Template({ data }) {
  const events = data.events
  return (
    <div className="blog-post mt-4">
      <h1 className="my-4 font-bold text-2xl text-white">{events.title}</h1>
      <h2 className="my-4 text-md text-white">{events.catch}</h2>
      <div
        className="blog-post-content"
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
