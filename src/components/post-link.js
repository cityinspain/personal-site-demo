import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug} key={post.id}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default PostLink
