import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import video from '../images/video.mp4'

const IndexPage = () => (
  <Layout>
    <div style={{backgroundColor: "black"}}>
    <SEO title="Home" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div style={{ width: "1000px", marginBottom: `1.45rem` }}>
      <video className='videoTag' autoPlay loop muted style={{maxWidth: '800px'}}>
        <source src={video} type='video/mp4' />
      </video>
    </div>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
)

export default IndexPage
