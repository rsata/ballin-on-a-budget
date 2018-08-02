import data from '../data';

const FinalizedTransactionsList = (state = {
  finalizedTransactions: data.finalizedTransactions
}, action) => {
  let newState;
  switch (action.type) {
    case 'GET_FINALIZED_TRANSACTIONS':
      return state;

      case 'ADD_TRANSACTION':
      return state; // will do this later...
    
      case 'DELETE_TRANSACTION':
      newState = {
        ...state,
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.id !== action.transactionId)
      };
      return newState;

    default:
      return state;
  }
};

export default FinalizedTransactionsList;
