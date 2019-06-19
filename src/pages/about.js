import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>About me</h2>
            <p>want to contact me?<Link to="/contact">click here</Link></p>
        </div>
    )
}

export default AboutPage