import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../component/layout'
import blogStryles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark{
            edges{
              node{
                frontmatter{
                  title
                  date
                }
                fields {
                  slug
                }
              }
            }
        }
    }
  `)

    console.log(data)

    return(
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStryles.posts}>
              {data.allMarkdownRemark.edges.map((edge) =>{
                return(
                  <li className={blogStryles.post}>
                    <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                    </Link>
                  </li>
                )
              })}
            </ol>
        </Layout>
    )
}

export default BlogPage