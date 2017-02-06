import React, { Component } from "react"

import Page from "../Page"

import styles from "./index.css"

class PressKit extends Component {
  constructor(props) {
    super(props);
    const scrollTop = (typeof document !== "undefined") ? document.body.scrollTop : null

    this.state = {
      scrollPosition: 0,
      gradientDegree: 40 + (scrollTop / 20)
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
    const scrollTop = (typeof document !== "undefined") ? document.body.scrollTop : null
    if (!this.isUnmounted) {
      this.setState({
        scrollPosition: scrollTop,
        gradientDegree: 40 + (scrollTop / 20)
      })
    }
  }

  render() {
    return (
      <Page { ...this.props } bodyExtraClass={ styles.pressKitWrapper }>
        <div style={{height: '100vh', width: '100%', left: 0, top: 0, position: 'fixed', zIndex: '-1', background: `-webkit-linear-gradient(-${this.state.gradientDegree}deg, #121212 10%,#1f1f1f 100%)`}}></div>
      </Page>
    )
  }
}

export default PressKit
