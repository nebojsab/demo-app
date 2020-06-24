import React, { Component } from 'react'
import bannerIllustration from '../assets/images/banner_illustration.svg'
import bannerBcg from '../assets/images/banner-bcg.svg'
import email from '../assets/images/email.svg'
import form from '../assets/images/form.svg'
import logo from '../assets/images/logo.png'
import logoDark from '../assets/images/logo-dark.png'
import phone from '../assets/images/phone.svg'
import video from '../assets/images/video.svg'
import walk from '../assets/images/walk_in_the_park.svg'
import msg from '../assets/images/msg-sent.svg'

export default class BannerSection extends Component {
  render() {
    return (
      <section className="banner--section">
        <div className="banner--section-inner">
          <div className="banner--section-image"></div>
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
