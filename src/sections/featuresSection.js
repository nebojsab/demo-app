import React, { Fragment, Component } from 'react'
import map from 'lodash/map'
import size from 'lodash/size'
import data from './features.json'
import app from '../assets/images/app.svg'
import client from '../assets/images/client.svg'
import marketing from '../assets/images/marketing.svg'
import teamChat from '../assets/images/team-chat.svg'
import voip from '../assets/images/voip.svg'
import workflow from '../assets/images/workflow.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class FeaturesSection extends Component {
  getItems = () => {
    const items = map(data, (item) => {
      return (
        <Fragment>
          <section className="feature--card">
            <img
              src={`${window.location.origin}/assets/images/${item.src}`}
              alt="Dummy Image"
              className="feature--card-image"
            />
            <div className="feature--info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </section>
        </Fragment>
      )
    })

    if (size(items) !== 0) {
      return <Fragment>{items}</Fragment>
    } else {
      return null
    }
  }

  render() {
    return (
      <Fragment>
        <section className="feature--section">
          <h1>KEY FEATURES MAKING YOUR WORK EASIER</h1>
          <div className="feature--section-inner">{this.getItems()}</div>
          <div className="cta-wrapper">
            <Link className="underscore--link" to="">
              and many more...
            </Link>
          </div>
        </section>
      </Fragment>
    )
  }
}
