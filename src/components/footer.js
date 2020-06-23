import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer--inner">
          <div className="footer--cta">
            <div className="footer--cta-mail">
              <a href="mailto:office@salestrekker.com">
                office@salestrekker.com
              </a>
            </div>
            <div className="footer--cta-phone">
              <a href="tel:+610290377350">+61 02 9037 7350</a>
            </div>
          </div>
          <div className="footer--logo"></div>
          <div className="footer--nav">
            <div className="footer--nav-item">
              <Link to="">Terms of use</Link>
            </div>
            <div>&nbsp; | &nbsp;</div>
            <div className="footer--nav-item">
              <Link to="">Privacy policy</Link>
            </div>
          </div>
          <div className="footer--copy">
            Copyright © {new Date().getFullYear()}. All rights reserved
            Salestrekker Pty Ltd.
          </div>
        </div>
      </section>
    )
  }
}
