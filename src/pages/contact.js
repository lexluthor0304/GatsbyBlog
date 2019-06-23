import React from "react";
import Head from '../component/head'

import Layout from '../component/layout'

const ContactPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Contact"/>
      <h1>Contact</h1>
      <p>
        Contact me via{" "}
        <a href="https://github.com/lexluthor0304">Github : lexluthor</a>
      </p>        
      </Layout>

    </div>
  )
}

export default ContactPage;
