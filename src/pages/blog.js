import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../component/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark{
            edges{
              node{
                frontmatter{
                  title
                }
                html
                excerpt
              }
            }
        }
    }
  `)

    console.log(data)

    return(
        <Layout>
            <h1>Blog</h1>
            <h2>Blog page</h2>
        </Layout>
    )
}

export default BlogPage