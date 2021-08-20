import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="root">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title} | cityinspain.dev</title>
      </Helmet>
      <div className="content-block">
        <a href="/" style={{ marginTop: "30px", display: "block" }}>
          home
        </a>
        <div className="blog-post-header">
          <h1>{frontmatter.title}</h1>
          <h4>{frontmatter.date}</h4>
        </div>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
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
