import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'
import { EsaBlogTempQuery } from "../../types/graphql-types"

// import insane from 'insane' //xss対策
import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  data: EsaBlogTempQuery
}

const BlogTemplate : React.FC<Props> = ({ data }) => {
  const blog = data.allEsaPost.edges[0].node
  // const bodyHtml = insane(blog.body_html)

  return (
    <div className="max-w-5xl px-8 mx-auto md:px-24">
      <Seo title={blog.name} />
      <h1 className="my-8 font-sans text-2xl font-bold">{blog.name}</h1>
      <time dateTime={blog.created_at} className="my-4 font-sans text-md">
        {format(parseISO(blog.created_at), `PPP EEEE`, {
          locale: ja,
        })}
      </time>
      <div
        className="mt-16 font-serif break-all markdown-body"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query EsaBlogTemp($id: String) {
    allEsaPost(filter: { id: { eq: $id } }) {
      edges {
        node {
          name
          created_at
          updated_at(formatString: "Y/M/D/h/m/s", locale: "ja")
          body_html
        }
      }
    }
  }
`

export default BlogTemplate
