import React from "react"
import { Link } from 'gatsby'
import Header from "../component/header"
import Footer from "../component/footer";

const IndexPage = () => {
    return(
        <div>
            <Header />
            <h1>Hello</h1>
            <h2>I am Lex</h2>
            <p>Need a developer <a href="/contact">contact me</a></p>
            <p>Need a developer <Link to="/contact">Contact me. </Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage