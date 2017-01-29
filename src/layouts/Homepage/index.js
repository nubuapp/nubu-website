import React from "react"

import MailingList from "../../components/MailingList"
import Page from "../Page"

import styles from "./index.css"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <MailingList />
      <div className={ styles.phoneImage} />
    </Page>
  )
}

export default Homepage
