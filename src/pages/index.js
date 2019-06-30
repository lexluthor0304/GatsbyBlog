import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'

import Head from '../component/head'

const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I am Lex, this is my react blog</h2>
            <p>This is my first React project</p>
            <p>Welcome to my react site~</p>
            <p>Need a developer? <Link to="/contact">Contact me. </Link></p>
        </Layout>
    )
}

export default IndexPage