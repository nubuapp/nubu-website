import React from "react"

import Page from "../Page"

import styles from "./index.css"

const Homepage = (props) => {
  return (
    <Page { ...props } bodyExtraClass={ styles.homeBody } />
  )
}

export default Homepage
