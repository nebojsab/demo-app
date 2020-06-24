import React, { Fragment, Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Select, PhoneInput, Input, Datepicker } from 'react-formik-ui'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

export default class LoanApplicationForm extends Component {
  constructor() {
    super()
    this.state = {
      submitted: false,
    }

    this.setSubmittedState = this.setSubmittedState.bind(this)
  }

  setSubmittedState(event) {
    this.setState({ submitted: true })
  }

  render() {
    const { submitted } = this.state

    const LoanApplicationSchema = Yup.object().shape({
      title: Yup.string().required('Required'),
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      surName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      date: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phoneNumber: Yup.string().required('Required'),
      status: Yup.string(),
      propertyPrice: Yup.number()
        .min(999, 'Price to low')
        .max(10000000, 'Price to heigh')
        .required('Required'),
      mortgageAmount: Yup.string(),
      term: Yup.string().required('Required'),
      interestRate: Yup.string(),
      monthlyRepayment: Yup.string().required('Required'),
      closingDate: Yup.string().required('Required'),
    })

    return (
      <Fragment>
        <section className="loan--app-form">
          <Formik
            initialValues={{
              title: '',
              firstName: '',
              surName: '',
              date: '',
              email: '',
              phoneNumber: '',
              status: '',
              propertyPrice: '',
              mortgageAmount: '',
              term: '',
              interestRate: '',
              monthlyRepayment: '',
              closingDate: '',
            }}
            validationSchema={LoanApplicationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values)
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2))
                resetForm({})
                setSubmitting(false)
                enableReinitialize(true)
                storeUserProfile(values)
              }, 400)
              this.setSubmittedState()
            }}
          >
            {(formik) => (
              <Form mode="themed" onSubmit={formik.handleSubmit}>
                {this.state.submitted !== true ? (
                  <Fragment>
                    <div className="form--img"></div>
                    <h1>Loan Application Form</h1>
                    <section className="section--form-wrap">
                      <div className="section--form-first">
                        <label>Applicant information</label>
                        <Input
                          name="firstName"
                          label="Name"
                          margin="normal"
                          className="material--input"
                        />
                        <Input name="surName" label="Surname" margin="normal" />
                        <Select
                          name="title"
                          label="Title"
                          placeholder="Select an Option"
                          options={[
                            { value: 'Mr', label: 'Mr' },
                            { value: 'Ms', label: 'Ms' },
                            { value: 'Mrs', label: 'Mrs' },
                            { value: 'Miss', label: 'Miss' },
                            { value: 'Other', label: 'Other' },
                          ]}
                        />
                        <Datepicker name="date" label="Date of birth" />
                        <Input
                          name="email"
                          label="Email"
                          margin="normal"
                          type="email"
                        />
                        <PhoneInput
                          name="phoneNumber"
                          label="Phone Number"
                          margin="normal"
                          preferredCountries={['au', 'nz']}
                        />
                        <Select
                          name="status"
                          label="Marital status"
                          placeholder="Select an Option"
                          options={[
                            { value: 'Single', label: 'Single' },
                            { value: 'Married', label: 'Married' },
                            { value: 'De Facto', label: 'De Facto' },
                            { value: 'Divorced', label: 'Divorced' },
                          ]}
                        />
                      </div>
                      <div className="section--form-second">
                        <label>Address Mortgage information</label>
                        <Input
                          name="propertyPrice"
                          label="Property price"
                          margin="normal"
                        />
                        <Input
                          name="mortgageAmount"
                          label="Mortgage amount"
                          margin="normal"
                        />
                        <Input
                          name="term"
                          label="Term (year)"
                          margin="normal"
                        />
                        <Input
                          name="interestRate"
                          label="Interest rate"
                          margin="normal"
                        />
                        <Input
                          name="monthlyRepayment"
                          label="Monthly repayment"
                          margin="normal"
                        />
                        <Datepicker name="closingDate" label="Closing Date" />
                      </div>
                    </section>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      fullWidth
                      className="button"
                      disabled={formik.isSubmitting}
                    >
                      Save
                      <React.Fragment>
                        {formik.isSubmitting ? (
                          <CircularProgress
                            className="button--spinner"
                            color="inherit"
                            size={20}
                          />
                        ) : null}
                      </React.Fragment>
                    </Button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <div className="form--img-sent"></div>
                    <h1>Form submited!</h1>
                  </Fragment>
                )}
              </Form>
            )}
          </Formik>
        </section>
      </Fragment>
    )
  }
}
