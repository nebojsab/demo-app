import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Select, PhoneInput, Input, Datepicker } from 'react-formik-ui'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

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
  status: Yup.string().required('Required'),
  propertyPrice: Yup.number()
    .min(999, 'Price to low')
    .max(10000000, 'Price to heigh')
    .required('Required'),
  mortgageAmount: Yup.string().required('Required'),
  term: Yup.string().required('Required'),
  interestRate: Yup.string().required('Required'),
  monthlyRepayment: Yup.string().required('Required'),
  closingDate: Yup.string().required('Required'),
})

export const LoanApplicationForm = () => (
  <div>
    <h1>Signup</h1>
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
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
          storeUserProfile(values)
        }, 400)
      }}
    >
      {(formik) => (
        <Form mode="themed" onSubmit={formik.handleSubmit}>
          {console.log(formik.isSubmitting)}
          <fieldset>
            <legend>Applicant information</legend>
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
            <Input name="firstName" label="Name" margin="normal" />
            <Input name="surName" label="Surname" margin="normal" />
            <Datepicker name="date" label="Date of birth" />
            <Input name="email" label="Email" margin="normal" type="email" />
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
          </fieldset>
          <fieldset>
            <legend>Address Mortgage information</legend>
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
            <Input name="term" label="Term (year)" margin="normal" />
            <Input name="interestRate" label="Interest rate" margin="normal" />
            <Input
              name="monthlyRepayment"
              label="Monthly repayment"
              margin="normal"
            />
            <Datepicker name="closingDate" label="Closing Date" />
          </fieldset>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            className="button"
          >
            Save
          </Button>
          <div>
            <React.Fragment>
              '
              {formik.isSubmitting ? (
                <CircularProgress color="inherit" size={20} />
              ) : null}
            </React.Fragment>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)
