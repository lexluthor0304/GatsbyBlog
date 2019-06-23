import React from 'react'
import { graphql } from "gatsby"
import Layout from '../component/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// export const query = graphql`
//     query ($slug: String!) {
//         markdownRemark ( fields: { slug: { eq: $slug } }) {
//             frontmatter{
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export const query = graphql`
    query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY, h:mm:ss a")
            body {
                json
            }
        }
    }
`

// const Blog = (props) => {
//     return (
//         <Layout>
//             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//             <p>{props.data.markdownRemark.frontmatter.date}</p>
//             <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
//         </Layout>
//     )
// }

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <div>{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}</div>
        </Layout>
    )
}

export default Blog