export const finalizeTransaction = transactionId => ({
  type: 'FINALIZE_TRANSACTION',
  transactionId
});

export const deleteTransaction = transactionId => ({
  type: 'DELETE_TRANSACTION',
  transactionId
});

export const addTransaction = transaction => ({
  type: 'ADD_TRANSACTION',
  transaction
})
// add db calls