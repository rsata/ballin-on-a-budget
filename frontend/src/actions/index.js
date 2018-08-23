export const finalizeTransaction = transactionId => {
  fetch('http://localhost:3001/finalize-transaction', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({transactionId})
  })
    .then(r => console.log(r))
    .catch(err => console.log(err))
  return {
    type: 'PENDING_FINALIZE_TRANSACTION',
    transactionId
  }  
};

// export const finalizeTransaction = transactionId => ({
//   type: 'PENDING_FINALIZE_TRANSACTION',
//   transactionId
// });

export const deleteTransaction = transactionId => {
  fetch('http://localhost:3001/delete-transaction', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({transactionId})
  })
    .then(r => console.log(r))
    .catch(err => console.log(err))
  return {
    type: 'PENDING_DELETE_TRANSACTION',
    transactionId
  }
};

export const addTransaction = transaction => {
  fetch('http://localhost:3001/insert-transaction', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({transaction})
  })
    .then(r => console.log(r))
    .catch(err => console.log(err))
  return {
    type: 'PENDING_ADD_TRANSACTION',
    transaction
  }
};

export const getTransactions = data => ({
  type: 'GET_TRANSACTIONS',
  data
});

export const getFinalizedTransactions = data => ({
  type: 'FINALIZED_GET_TRANSACTIONS',
  data
});