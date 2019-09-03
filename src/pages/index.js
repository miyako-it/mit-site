import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Seo from "../components/Seo"

const IndexPage = (props) => {
  const fluid = props.data.allImageSharp.edges[0].node.fluid
  return (
  <div className="px-8 md:px-24">
    <div className=" mx-auto h-screen -mt-12 md:-mt-24 flex items-center justify-betweeen">
      <Seo title="MIT" />
      <div className="max-w-md lg:w-5/12">
        <h1 className="w-full font-sans font-bold text-namari text-4xl text-left leading-loose tracking-widest">
          みやこIT勉強会はもくもく会を毎月土曜日に開催しています
        </h1>
      </div>
      <Img className="hidden lg:block ml-auto -mr-8 md:-mr-24 xl:-mr-56 self-start w-8/12 xl:w-9/12 h-full border-b-24 border-neutral" fluid={fluid} alt="mitの象徴" />
    </div>
    <Img className="lg:hidden max-w-screen h-full mb-12 -mx-8 md:-mx-24" fluid={fluid} alt="mitの象徴" />
    <div className="mx-auto py-16">
      <h2 className="font-san font-bold text-namari text-2xl text-left">Up coming events</h2>
      <p className="mt-8 font-serif text-namari text-lg text-left">Coming soon…</p>
    </div>
  </div>
)}

export const query = graphql`
  query MyQuery {
    allImageSharp(filter: {fluid: {originalName: {eq: "img01.jpg"}}}) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
