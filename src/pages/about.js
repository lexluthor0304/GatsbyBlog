import React from 'react'
import { Link } from 'gatsby'
import Header from "../component/header"
import Footer from "../component/footer";

const AboutPage = () => {
    return(
        <div>
            <Header />
            <h1>About</h1>
            <h2>About me</h2>
            <p>want to contact me?<Link to="/contact">click here</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage