// import data from '../data';

const TransactionsList = (state={
  pendingTransactions: [],
  finalizedTransactions: []
}, action) => {
  let newState;
  switch (action.type) {

    case 'GET_TRANSACTIONS':
      const pendingTransactions = action.data.filter(t => t.transaction_status === 0)
      const finalizedTransactions = action.data.filter(t => t.transaction_status === 5)
      newState = {
        ...state,
        pendingTransactions,
        finalizedTransactions
      }
      return newState;
    
    case 'PENDING_FINALIZE_TRANSACTION':      
      const finalizedTransaction = state.pendingTransactions.filter(transaction => transaction.p_transaction_id === action.transactionId);

      newState = {
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.p_transaction_id !== action.transactionId),
        finalizedTransactions: [...state.finalizedTransactions, finalizedTransaction[0]] // because filter returns an array and transactionId should be unique. There's probably a better way to do this...
      };
      console.log(newState)
      return newState;
    
    case 'PENDING_ADD_TRANSACTION':
      const newTransaction = action.transaction
      newState = {
        ...state,
        pendingTransactions: [...state.pendingTransactions, newTransaction]
      }
      console.log(newState)
      return newState;
  
    case 'PENDING_DELETE_TRANSACTION':
      newState = {
        ...state,
        pendingTransactions: state.pendingTransactions.filter(transaction => transaction.p_transaction_id !== action.transactionId)
      };
      console.log(newState)
      return newState;

    case 'FINALIZED_GET_TRANSACTIONS':
      console.log(action)
      return state;


    default:
      return state;
  }
};

export default TransactionsList;
