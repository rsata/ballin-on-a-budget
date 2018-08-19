import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import transactions from './transactionReducers';

export default combineReducers({
  transactions,
  form: formReducer
});