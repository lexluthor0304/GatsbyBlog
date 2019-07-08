import React from 'react'
import { Link } from 'gatsby'
import CountUp from 'react-countup';
import Layout from '../component/layout'
import Head from '../component/head'
import { Steps, Icon } from 'antd'
import 'antd/dist/antd.css';



const IndexPage = () => {
    const { Step } = Steps;
    return(
        <Layout>
            <Head title="Home"/>
            <p>
            <Steps>
            <Step status="start" title="Build the Site" icon={<Icon type="compass" />} />
            <Step status="finish" title="Coding" icon={<Icon type="solution" />} />
            <Step status="process" title="debugging" icon={<Icon type="loading" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
            </p>
            <h1>Hello</h1>
            <h2>I am Lex, this is my react blog</h2>
            <p>This is my first React project</p>
            <p>Welcome to my react site~</p>
            <p>Need a developer? <Link to="/contact">Contact me. </Link></p>
            <p><CountUp prefix={"爆発カウントダウン"} 
                start={10000+2} 
                end={0.00000001} 
                delay={0} 
                separator={","} 
                decimal={"."} 
                decimals={8} 
                duration={1000000}
                redraw={true}
                useEasing={true} 
                suffix={"です"}>
                {({ countUpRef }) => (
                <div>
                    <span ref={countUpRef} />
                </div>
            )}
            </CountUp>
            </p>
        </Layout>
    )
}

export default IndexPage