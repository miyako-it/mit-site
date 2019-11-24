import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { PageContextByPaginate } from "../../types/awesome-pagination"

type Props = {
  prefixPath: string
  pageContext: PageContextByPaginate
}

const LinkList: React.FC<Props> = ({ prefixPath, pageContext }) => {
  const { previousPagePath, nextPagePath, numberOfPages } = pageContext
  return (
    <ul className='my-8 flex justify-between'>
      {previousPagePath ? <li key='previous'><AniLink className="font-serif underline_center"
        fade
        to={previousPagePath}>Previous</AniLink></li> : null}
      {numberOfPages > 1 ? Array.from({ length: numberOfPages }, (_, i) => {
        {
          if (i > 0) {
            return (
              <li key={i + 1}>
                <AniLink className="font-serif underline_center"
                  fade
                  to={`/${prefixPath}/${i + 1}`}>{i + 1}</AniLink>
              </li>
            )
          } else if (i === 0) {
            return (
              <li key='1'>
                <AniLink className="font-serif underline_center"
                  fade
                  to={`/${prefixPath}`}>1</AniLink>
              </li>
            )
          }
        }
      }) : null}
      {nextPagePath ? <li key='next'><AniLink className="font-serif underline_center"
        fade
        to={nextPagePath}>Next</AniLink></li> : null}
    </ul>
  )
}

export default LinkList
