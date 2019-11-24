import React from 'react'
import { graphql } from 'gatsby'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Seo from '../components/Seo'
import { BlogsPageQuery } from "../../types/graphql-types"
import { PageContextByPaginate } from "../../types/awesome-pagination"

import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

type Props = {
  data: BlogsPageQuery
  pageContext: PageContextByPaginate
}

const Blogs: React.FC<Props> = ({ data, pageContext }) => {
  const blogs = data.allEsaPost.edges
  const { previousPagePath, nextPagePath, numberOfPages } = pageContext

  return (
    <div className="px-8 md:px-24">
      <div className="max-w-5xl mx-auto">
        <Seo title="Blogs" />
        <div className="mx-auto py-16">
          <h1 className="font-san font-bold text-gray-900 text-4xl text-center">
            <p>ブログ</p>
          </h1>
        </div>
        <div className='my-8 flex justify-between'>
          {previousPagePath ? <AniLink className="font-serif underline_center"
            fade
            to={previousPagePath}>Previous</AniLink> : null}
          {numberOfPages > 1 ? Array.from({ length: numberOfPages }, (_, i) => {
            {
              if (i > 0) {
                return (
                  <AniLink className="font-serif underline_center"
                    fade
                    to={`/blogs/${i + 1}`}>{i + 1}</AniLink>
                )
              } else if (i === 0) {
                return (
                  <AniLink className="font-serif underline_center"
                    fade
                    to={`/blogs`}>1</AniLink>
                )
              }
            }
          }) : null}
          {nextPagePath ? <AniLink className="font-serif underline_center"
            fade
            to={nextPagePath}>Next</AniLink> : null}
        </div>
        <ul>
          {blogs.map(blog => {
            return (
              <li key={blog.node.id} className="list-none my-8 last:my-0 last:mt-8 flex flex-col">
                <time dateTime={blog.node.created_at} className="mb-2">
                  {format(parseISO(blog.node.created_at), `PPP EEEE`, {
                    locale: ja,
                  })}
                </time>
                <AniLink
                  className="font-serif hover:text-gray-600 transition-color transition-300"
                  fade
                  to={`/blogs/${blog.node.updated_at}`}
                >
                  {blog.node.name}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Blogs

export const data = graphql`
  query BlogsPage($skip: Int!, $limit: Int!) {
    allEsaPost(skip: $skip, limit: $limit) {
      edges {
        node {
          id
          name
          created_at
          updated_at(formatString: "Y/M/D/h/m/s")
        }
      }
    }
  }
`
