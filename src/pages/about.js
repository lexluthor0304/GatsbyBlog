import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'
import Head from '../component/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <h2>About me</h2>
            <p>want to contact me?<Link to="/contact">click here</Link></p>
        </Layout>
    )
}

export default AboutPage