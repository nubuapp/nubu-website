import React from "react"
import Svg from "react-svg-inline"

import facebookSvg from "../icons/facebook.svg"
import twitterSvg from "../icons/twitter.svg"
import instagramSvg from "../icons/instagram.svg"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <div className={ styles.shareIcons }>
      <a href="https://facebook.com/nubuapp" className={ styles.shareIconLink }>
          <Svg svg={ facebookSvg } />
      </a>
      <a href="https://twitter.com/nubuapp" className={ styles.shareIconLink }>
        <Svg svg={ twitterSvg } />
      </a>
      <a href="https://instagram.com/nubuapp" className={ styles.shareIconLink }>
        <Svg svg={ instagramSvg } />
      </a>
    </div>
  </footer>
)

export default Footer
