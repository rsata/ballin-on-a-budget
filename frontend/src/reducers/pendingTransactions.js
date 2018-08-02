import data from '../data';

const PendingTransactionsList = (state = {
  pendingTransactions: data.pendingTransactions,
  finalizedTransactions: data.finalizedTransactions
}, action) => {
  let newState;
  switch (action.type) {

    case 'GET_PENDING_TRANSACTIONS':
      return state;
    
    case 'FINALIZE_TRANSACTION':
      const finalizedTransaction = state.pendingTransactions.filter(transaction => transaction.id === action.transactionId);

      newState = {
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.id !== action.transactionId),
        finalizedTransactions: [...state.finalizedTransactions, finalizedTransaction[0]] // because filter returns an array and transactionId should be unique. There's probably a better way to do this...
      };
      return newState;
    
      case 'ADD_TRANSACTION':
      newState = {
        ...state,
        pendingTransactions: state.pendingTransactions.concat(action.transaction)
      }
      return newState; // will do this later...
    
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

export default PendingTransactionsList;
