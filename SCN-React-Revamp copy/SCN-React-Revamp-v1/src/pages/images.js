import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <p>Welcome to the Events Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Events
