import React, { Fragment, Component } from 'react'
import map from 'lodash/map'
import size from 'lodash/size'
import data from './infos.json'
import organize from '../assets/images/organize.svg'
import collaboration from '../assets/images/online_collaboration.svg'
import automate from '../assets/images/reminder.svg'
import connect from '../assets/images/connection.svg'

export default class InfoSection extends Component {
  getItems = () => {
    const items = map(data, (item) => {
      return (
        <Fragment>
          <section className="info--wrap">
            <div className="info--image">
              <img
                src={`${window.location.origin}/assets/images/${item.src}`}
                alt="Dummy Image"
                className="card__image"
              />
            </div>
            <article className="info--text" id={item.id}>
              <h2 className="info--text-title">{item.title}</h2>
              <p className="info--text-desc">{item.description}</p>
            </article>
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
    return <div className="info--plh">{this.getItems()}</div>
  }
}
