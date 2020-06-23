import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class HeaderMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elHeight: 0,
      isTop: 'top',
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const elHeight = this.heroElement.clientHeight
      this.setState({ elHeight })
      if (window.scrollY > elHeight) {
        this.setState({ isTop: 'notTop' })
      } else {
        this.setState({ isTop: 'top' })
      }
    })
  }

  render() {
    const { isTop } = this.state

    return (
      <section className={`header ${isTop === 'top' ? 'light' : 'dark'}`}>
        <div
          className="hero--img"
          ref={(heroElement) => {
            this.heroElement = heroElement
          }}
        >
          <section className="hero--section-headings">
            <h1>Let your CRM do the work</h1>
            <h3>
              Automate your sales pipeline, ongoing work and projects,{' '}
              <span>easy as walk in the park</span>.
            </h3>
            <div className="cta-wrapper">
              <Link className="underscore--link" to="/form">
                learn more
              </Link>
            </div>
          </section>
        </div>
        <div className="header--inner">
          <Link to="/" className="logo"></Link>
          <nav className="nav">
            <li className="nav--item">
              <Link className="nav--item-link" to="/form">
                contact
              </Link>
            </li>
          </nav>
        </div>
      </section>
    )
  }
}
