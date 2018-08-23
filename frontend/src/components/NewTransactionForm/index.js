import React from 'react';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';

const newTransactionForm = props => {
  const { handleSubmit, reset, pristine, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Transaction</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
          />
          <Field
            name="amount"
            component="input"
            type="number"
            placeholder="Amount"
          />
          <Field
            name="date"
            component="input"
            type="date"
          />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
      </div>      
    </form>
  )
}

export default reduxForm({
  form: 'newTransactionForm',
  initialValues: {
    date: moment().format("YYYY-MM-DD")
  }
})(newTransactionForm)