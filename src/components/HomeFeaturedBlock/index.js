import React, {PropTypes} from "react"

import styles from "./index.css"

const HomeFeaturedBlock = ({ title, description, image}) => {

  const blockTitle = {__html: title}

  return (
    <div className={ styles.featuredBlock }>
      <div className={ styles.featuredBlockContent }>
        <h2 className={ styles.header } dangerouslySetInnerHTML={ blockTitle } />
        <p>{ description }</p>
      </div>
      <div className={ styles.featuredBlockImage }>
        <img src={ image } alt="nubu app" className={ styles.phoneImage}/>
      </div>
    </div>
  )
}

HomeFeaturedBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default HomeFeaturedBlock