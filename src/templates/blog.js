import React from 'react'
import { graphql } from "gatsby"
import Layout from '../component/layout'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'


// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Head from '../component/head'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark ( fields: { slug: { eq: $slug } } ) {
            frontmatter{
                title
                date(formatString: "MMMM Do, YYYY")
                tags
            }
            html
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
            
        }
    }
`

// export const query = graphql`
//     query ($slug: String!) {
//         contentfulBlogPost(slug: {eq: $slug}) {
//             title
//             publishedDate(formatString: "MMMM Do, YYYY, h:mm:ss a")
//             body {
//                 json
//             }
//         }
//     }
// `

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            {props.data.markdownRemark.frontmatter.tags ? (
                <div className="TODOtags-container">
                  <ul className="TODOtaglist">
                    {props.data.markdownRemark.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

// const Blog = (props) => {
//     const options = {
//         renderNode: {
//             "embedded-asset-block": (node) => {
//                 const alt = node.data.target.fields.title['en-US']
//                 const url = node.data.target.fields.file['en-US'].url
//                 return <img alt={alt} src={url} />
//             }
//         }
//     }

//     return (
//         <Layout>
//             <Head title={props.data.contentfulBlogPost.title}/>
//             <h1>{props.data.contentfulBlogPost.title}</h1>
//             <p>{props.data.contentfulBlogPost.publishedDate}</p>
//             <div>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
//         </Layout>
//     )
// }

export default Blog