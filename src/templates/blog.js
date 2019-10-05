import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

export default function Template({ data }) {
  const blog = data.allEsaPost.edges[0].node
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-24">
      <Seo title={blog.name}/>
      <h1 className="my-8 font-sans font-bold text-2xl">{blog.name}</h1>
      <h2 className="my-4 font-sans text-md">{blog.created_at}</h2>
      <div
        className="font-serif break-all"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
query EsaBlogQuery($id: String) {
  allEsaPost(filter: {id: {eq: $id}}) {
    edges {
      node {
        name
        created_at(locale: "ja", fromNow: true, formatString: "Y年M月D日 h時:m分")
        updated_at(formatString: "Y/M/D/h/m/s", locale: "ja")
        body_html
      }
    }
  }
}
`
