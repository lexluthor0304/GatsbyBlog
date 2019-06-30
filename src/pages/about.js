import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'
import Head from '../component/head'
import aboutStyle from './about.module.scss'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <h2>About this site</h2>
            <p>Base on gatsby</p>
            <p>Host on <a href="https://www.netlify.com/" className={aboutStyle.a}>netlify</a></p>
            <p>About me</p>
            <p>A Chinese who working Tokyo.</p>
            <p>I'm graduated from Hosei University, Faculty of Letters, Arts and Sciences.</p>
            <p>Welcome to my Gatsby site~</p>
            <p>Want to contact me?<Link to="/contact" className={aboutStyle.a}> click here</Link></p>
        </Layout>
    )
}

export default AboutPage