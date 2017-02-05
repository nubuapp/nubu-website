import React from "react"
import Svg from "react-svg-inline"

import MailingList from "../MailingList"

import facebookSvg from "../icons/facebook.svg"
import twitterSvg from "../icons/twitter.svg"
import instagramSvg from "../icons/instagram.svg"
import gitlabSvg from  "../icons/gitlab.svg"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <MailingList />
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
      <a href="https://gitlab.com/nubu" className={ styles.shareIconLink }>
        <Svg svg={ gitlabSvg } />
      </a>
    </div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/presskit">Press Kit</a></li>
      <li><a href="mailto:hello@nubu.io" target="_top">Get in touch</a></li>
    </ul>
  </footer>
)

export default Footer
