import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const date = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    return(
        <footer>
            <p>Created by {date.site.siteMetadata.author}, ©2019</p>
        </footer>
    )
}

export default Footer