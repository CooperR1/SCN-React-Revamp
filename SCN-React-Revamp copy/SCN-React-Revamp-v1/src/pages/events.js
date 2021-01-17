import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Team = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Events</h1>
    <p>Welcome to the events page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Team
