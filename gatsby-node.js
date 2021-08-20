exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const pageTemplate = require.resolve("./src/templates/pageTemplate.js")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              type
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const getTemplateForType = type => {
    switch (type) {
      case "blog":
        return blogPostTemplate
      case "page":
        return pageTemplate
    }
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: getTemplateForType(node.frontmatter.type),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  result.data.allMarkdownRemark.edges
}
