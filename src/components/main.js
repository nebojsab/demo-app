import React, { Fragment, Component } from 'react'
import InfoSection from '../sections/infoSection'
import BannerSection from '../sections/BannerSection'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <InfoSection />
        <BannerSection />
      </Fragment>
    )
  }
}
