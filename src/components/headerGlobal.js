import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class HeaderGlobal extends Component {
  render() {
    return (
      <section className="header dark">
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
