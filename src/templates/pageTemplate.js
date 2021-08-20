import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const url = typeof window !== "undefined" ? window.location.href : ""
  const pathname = url.split("/")[url.split("/").length - 1]

  function page(props) {
    // Split the pathname string into an array of sub-paths

    let myLocation = window.location.pathname.split("/").join("")

    if (myLocation === "") {
      myLocation = "Home"
    } else if (myLocation === "about-us") {
      myLocation = "About Us"
    } else if (myLocation === "services-training") {
      myLocation = "Services  & Training"
    } else if (myLocation === "carriages-wagons") {
      myLocation = "Carriages & Wagons"
    } else if (myLocation === "contact-us") {
      myLocation = "Contact Us"
    }

    return myLocation
  }

  return (
    <div className="root">
      <Helmet>
        <meta charSet="utf-8" />
        <title>cityinspain.dev</title>
      </Helmet>
      <div className="content-block">
        <a href="/">home</a>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
