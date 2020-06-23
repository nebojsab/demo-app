import React, { Component } from 'react'

export default class BannerSection extends Component {
  render() {
    return (
      <section className="banner--section">
        <div className="banner--section-inner">
          <div className="banner--section-image">
          </div>
          <div className="banner--section-text">
            <h2>Salestrekker application</h2>
            <p>
              Suitable for: Finance and Insurance, Accounting, Real Estate,
              Recruitment, Software Development, Project Management, Call
              Centers, Customer Service
            </p>
          </div>
        </div>
      </section>
    )
  }
}
