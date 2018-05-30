export const finalizeTransaction = transactionId => ({
  type: 'FINALIZE_TRANSACTION',
  transactionId
});

export const deleteTransaction = index => ({
  type: 'DELETE_TRANSACTION',
  index
});

// add db calls