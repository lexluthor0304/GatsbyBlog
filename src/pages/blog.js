import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../component/head'

import Layout from '../component/layout'
import blogStryles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY, h:mm:ss a")
          }
        }
      }
    }
  `)

    console.log(data)

    return(
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStryles.posts}>
              {data.allContentfulBlogPost.edges.map((edge) =>{
                return(
                  <li className={blogStryles.post}>
                    <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                    </Link>
                  </li>
                )
              })}
            </ol>
        </Layout>
    )
}

export default BlogPage