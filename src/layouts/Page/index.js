import React, { PropTypes } from "react"
import classnames from "classnames"

import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"

import Loading from "../../components/Loading"

import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
    bodyExtraClass
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { content: "article", property: "og:type" },
    { content: metaTitle, property: "og:title" },
    { content: joinUri(process.env.PHENOMIC_USER_URL, __url), property: "og:url" },
    { content: pkg.homepage + "/assets/images/phone-in-hand.jpg", property: "og:image" },
    { content: head.description, property: "og:description" },
    { content: "summary", name: "twitter:card" },
    { content: metaTitle, name: "twitter:title" },
    { content: `@${ pkg.twitter }`, name: "twitter:creator" },
    { content: head.description, name: "twitter:description" },
    { content: pkg.homepage + "/assets/images/phone-in-hand.jpg", name: "twitter:image" },
    { content: head.description, name: "description" },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer className={ classnames(styles.body, bodyExtraClass) }>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  bodyExtraClass: PropTypes.string
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
