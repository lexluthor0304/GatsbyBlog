import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'
import Head from '../component/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 Page"/>
            <h1>Page Not Found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound