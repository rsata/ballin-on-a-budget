import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import pendingTransactions from './pendingTransactions';
import finalizedTransactions from './finalizedTransactions';

export default combineReducers({
  pendingTransactions,
  finalizedTransactions,
  form: formReducer
});