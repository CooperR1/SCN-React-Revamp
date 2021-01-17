/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar/index"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar />

        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
                                  <a href="https://www.facebook.com/stanfordconcertnetwork/">Facebook</a>
          <br></br>
          <a href="https://www.instagram.com/stanford.concert.network/?hl=en">Instagram</a>
          <br></br>
          <a href="https://www.instagram.com/stanford.concert.network/?hl=en">Spotify?</a>
          <br></br>
          © {new Date().getFullYear()}, Stanford Concert Network

        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
