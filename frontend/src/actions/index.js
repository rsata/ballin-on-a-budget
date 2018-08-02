export const finalizeTransaction = transactionId => {
  type: 'FINALIZE_TRANSACTION',
  transactionId
};

export const deleteTransaction = transactionId => {
  type: 'DELETE_TRANSACTION',
  transactionId
};

export const getTransactions = () => {
  getTransactionsApi();
}

const getTransactionsApi = () => {
  fetch('http://localhost:3001/get-transactions')
    .then(r => r.json)
    .then(r => console.log(r))
    .catch(err => console.log(err))
}

// add db calls