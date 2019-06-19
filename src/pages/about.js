import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'

const AboutPage = () => {
    return(
        <Layout>
            <h1>About</h1>
            <h2>About me</h2>
            <p>want to contact me?<Link to="/contact">click here</Link></p>
        </Layout>
    )
}

export default AboutPage