import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Gallery</h1>
    <p>Welcome to the Gallery</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Gallery
