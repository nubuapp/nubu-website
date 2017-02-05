import React, { Component, PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"

class Privacy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
      gradientDegree: 40,
      contentParallax: 0
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
        gradientDegree: 40 + (document.body.scrollTop / 20),
        contentParallax: (-Math.abs(document.body.scrollTop / 5))
      })
    }
  }

  render() {
    return (
      <Page { ...this.props } bodyExtraClass={ styles.privacyWrapper }>
        <div style={{height: '100vh', width: '100%', left: 0, top: 0, position: 'fixed', zIndex: '-1', background: `-webkit-linear-gradient(-${this.state.gradientDegree}deg, #121212 10%,#1f1f1f 100%)`}}></div>
      </Page>
    )
  }
}

Privacy.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Privacy
