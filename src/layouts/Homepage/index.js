import React, { Component, PropTypes } from "react"
import Svg from "react-svg-inline"

import Page from "../Page"
import HomeFeaturedBlock from "../../components/HomeFeaturedBlock"

import styles from "./index.css"
import availbleOnIphone from "../../components/icons/available-on-iphone.svg"

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
      gradientDegree: 40
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    this.isUnmounted = true;
  }

  handleScroll() {
    if (!this.isUnmounted) {
      this.setState({
        scrollPosition: document.body.scrollTop,
        gradientDegree: 40 + (document.body.scrollTop / 20)
      })
    }
  }

  render() {
    return (
      <Page { ...this.props }>
        <a href="https://appsto.re/gb/QRD_gb.i">
          <center>
            <Svg svg={ availbleOnIphone } className={ styles.availableOnIphone } />
          </center>
        </a>
        <div style={{height: '100vh', width: '100%', left: 0, top: 0, position: 'fixed', zIndex: '-1', background: `-webkit-linear-gradient(-${this.state.gradientDegree}deg, #121212 10%,#1f1f1f 100%)`}}></div>
        <div className={styles.featuredBlocks}>
          {
            this.props.head.featuredBlocks &&
            this.props.head.featuredBlocks.map((featuredBlock, key) => (
              <HomeFeaturedBlock
                key={key}
                title={featuredBlock.title}
                description={featuredBlock.description}
                image={featuredBlock.image}
              />
            ))
          }
        </div>
      </Page>
    )
  }
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Homepage
