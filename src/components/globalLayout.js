import React, { Fragment, Component } from 'react'
import { LoanApplicationForm } from '../forms/LoanApplicationForm'
import HeaderGlobal from './headerGlobal'

export default class GlobalLayout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderGlobal />
        <LoanApplicationForm />
      </Fragment>
    )
  }
}
