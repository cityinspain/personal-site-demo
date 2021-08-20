import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import { Helmet } from "react-helmet";
export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges
    .filter((e) => e.node.frontmatter.type === "blog")
    .map((e) => <PostLink post={e.node} key={e.node.id} />);

  return (
    <div className="root">
      <Helmet>
        <meta charSet="utf-8" />
        <title>examplesite.dev</title>
      </Helmet>
      <div className="content-block">
        <div className="home-header">
          <h1>examplesite.dev</h1>
          <a href="/about">about</a>
          <a href="/contact">contact</a>
        </div>

        <p>An example copy of my personal site, using Gatsby.</p>
        <div>
          <h2>Blog posts</h2>
          <div>{posts}</div>
        </div>
      </div>
    </div>
  );
}

export const postsQuery = graphql`
  query blogPostsQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            type
          }
        }
      }
    }
  }
`;
