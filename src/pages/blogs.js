import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Seo from "../components/Seo"

// import { parseISO, format } from 'date-fns'
// import { ja } from 'date-fns/locale'

const Events = () => {
  const data = useStaticQuery(graphql`
    query EsaQuery {
      allEsaPost {
        edges {
          node {
            id
            name
            created_at(locale: "ja", formatString: "Y年M月D日")
            updated_at(formatString: "Y/M/D/h/m/s")
          }
        }
      }
    }
  `)

  const blogs = data.allEsaPost.edges

  console.log(data)
  return (
    <div className="px-8 md:px-24">
      <div className="max-w-5xl mx-auto">
        <Seo title="Events"/>
        <div className="mx-auto py-16">
          <h1 className="font-san font-bold text-gray-900 text-4xl text-center">
            <p>ブログ</p>
          </h1>
        </div>
        <ul>
          {blogs.map(blog => {
            return (
              <li key={blog.node.id} className="list-none my-8">
                <h3 className="mb-2">{blog.node.created_at}</h3>
                <AniLink className="font-serif hover:text-gray-600 transition-color transition-300" fade to={`/blogs/${blog.node.updated_at}`}>{blog.node.name}</AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Events
