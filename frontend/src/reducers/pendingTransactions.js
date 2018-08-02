import data from '../data';

const PendingTransactionsList = (state={}, action) => {
  let newState;
  switch (action.type) {

    case 'PENDING_GET_TRANSACTIONS':
      console.log(action)
      newState = {
        ...state,
        pendingTransactions: action.data
      }
      return newState;
    
    case 'PENDING_FINALIZE_TRANSACTION':
      const finalizedTransaction = state.pendingTransactions.filter(transaction => transaction.id === action.transactionId);

      newState = {
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.id !== action.transactionId),
        finalizedTransactions: [...state.finalizedTransactions, finalizedTransaction[0]] // because filter returns an array and transactionId should be unique. There's probably a better way to do this...
      };
      return newState;
    
    case 'PENDING_ADD_TRANSACTION':
      newState = {
        ...state,
        pendingTransactions: state.pendingTransactions.concat(action.transaction)
      }
      return newState; // will do this later...
  
    case 'PENDING_DELETE_TRANSACTION':
      newState = {
        ...state,
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.transaction_id !== action.transactionId)
      };
      return newState;

    default:
      return state;
  }
};

export default PendingTransactionsList;
