import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
const IMAGES_QUERY = graphql`
  query {
    mobile: file(name: { eq: "mobile" }) {
      childImageSharp {
        fluid(quality: 85, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tablet: file(name: { eq: "tablet" }) {
      childImageSharp {
        fluid(quality: 85, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(name: { eq: "laptop" }) {
      childImageSharp {
        fluid(quality: 75, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktop: file(name: { eq: "desktop" }) {
      childImageSharp {
        fluid(quality: 75, maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default function Home() {
  const { mobile, tablet, laptop, desktop } = useStaticQuery(IMAGES_QUERY)
  const sources = [
    mobile.childImageSharp.fluid,
    {
      ...tablet.childImageSharp.fluid,
      media: `(min-width: 500px)`,
    },
    {
      ...laptop.childImageSharp.fluid,
      media: `(min-width: 1200px)`,
    },
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1600px)`,
    },
  ]
  console.log(sources)

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>
        Minimal Reproduction:
        <a href="https://github.com/gatsbyjs/gatsby/issues/29074">issue</a>
      </h1>
      <Image fluid={sources} />
    </main>
  )
}
