import data from '../data';

const PendingTransactionsList = (state = {
  data
}, action) => {
  switch (action.type) {
    case 'FINALIZE_TRANSACTION':
      return state; // will do this later...
    case 'ADD_TRANSACTION':
      return state; // will do this later...
    case 'DELETE_TRANSACTION':
      console.log(action);
      // return state.data.filter((item, index) => index !== action.index);
      console.log(state);
      console.log(state.data.filter((item, index) => index !== action.index));

      return state;
    default:
      return state;
  }
};

export default PendingTransactionsList;
