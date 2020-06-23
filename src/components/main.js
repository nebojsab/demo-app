import React, { Fragment, Component } from 'react'
import HeaderMain from './headerMain'
import InfoSection from '../sections/infoSection'
import BannerSection from '../sections/BannerSection'
import FeaturesSection from '../sections/featuresSection'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <HeaderMain />
        <InfoSection />
        <BannerSection />
        <FeaturesSection />
      </Fragment>
    )
  }
}
