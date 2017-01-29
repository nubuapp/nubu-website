import React, { PropTypes } from "react"

import styles from "./index.css"

const Header = () => (
  <header className={ styles.header }>
    <div className={ styles.logo }>
      <img src="/assets/images/nubu.svg" alt="nubu" />
      <span>nubu</span>
    </div>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
