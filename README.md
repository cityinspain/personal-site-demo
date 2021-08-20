# personal-site-demo

A copy of the codebase for my [personal site](https://cityinspain.dev), but filled
with example content.

>Note: This code isn't necessarily up to date with what I have deployed. Some features
may be missing.


## Description

This project uses [Gatsby](https://gatsbyjs.com), a React based framework that's 
built with speed in mind, both in terms of performance and development time. Sites 
built with Gatsby are lightning fast, secure, and simple to deploy.

It utilizes the `gatsby-source-filesystem` and `gatsby-transformer-remark` plugins to 
support pages and blog posts written in Markdown.

Blog posts are written in Markdown, stored in the `src/blog-posts` directory, 
converted to HTML with `remark`, and then loaded into Gatsby's built-in GraphQL API.

## Why?

**Speed, convenience, and simplicity.**

Gatsby's rich plugin ecosystem and emphasis on developer experience abstracts away 
common features such as routing, and makes implementing extra features such as SEO or 
Shopify integration virtually effortless.

As for why my blog posts live in the repo? It's far simpler than utilizing a CMS.
I can write posts directly in my editor, and to post them, I just commit and push.
The site's deployed on [Netlify](https://netlify.com), and Github triggers a build
when I push to `main`. It takes less than 30 seconds for the build to finish and be
deployed. I've got one comprehensive system to manage everything on the site, and it
works well for me.

## Running

First, install the dependencies with
`npm install`

Then, start up the dev server with `npm run develop`

The site will be hosted on `localhost:8000`, and a GraphiQL interface can be
accessed at `localhost:8000/__graphql`


## Development

### Adding a page

There are two ways to add a page:

**React component**

Create a new React component in `src/pages` directory. Gatsby will, by default, 
generate a route based on the filename.

**Markdown**

Create a new Markdown file in `src/markdown-pages`. Copy the following to the top of 
the new file.

```yaml
---
slug: "/{path}"
date: "{date}"
title: "{title}"
type: "page"
---
```

Replace {path} with your desired path, relative to the site root. For example,
if you want the route to be `example.com/foo`, property `slug` should be
`"/foo"`.

Replace {date} with any date you like, i.e last updated, created, or nothing at all. 

Replace {title} with the desired page title.

Make sure `type` property is set to `"page"`

### Adding a blog post

Similar to the process above, but with important distinctions.

Create the new Markdown file in `src/blog-posts`.

```yaml
---
slug: "/blog/{path}"
date: "{date}"
title: "{title}"
type: "blog"
---
```

A blog post located at `example.com/blog/foo` should have property `slug` set to
`/blog/foo`. 

Make sure `type` property is set to `"blog"`