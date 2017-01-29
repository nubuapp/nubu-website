import React from "react"

import styles from "./index.css"

const MailingList = () => (
  <div id="mc_embed_signup" className={ styles.wrapper }>
    <form action="//nubu.us14.list-manage.com/subscribe/post?u=eb1327a1f807a88a138732c23&id=a47412c1f4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
          <input type="email" name="EMAIL" placeholder="Email address" className="required email" id="mce-EMAIL" />
          <input role='button' type="submit" value="Register" name="subscribe" id="mc-embedded-subscribe" className="button" />
        </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
          <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
        </div>
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_eb1327a1f807a88a138732c23_a47412c1f4" tabIndex="-1" /></div>
      </div>
    </form>
  </div>
)

export default MailingList