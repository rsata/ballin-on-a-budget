export const finalizeTransaction = transactionId => ({
  type: 'FINALIZE_TRANSACTION',
  transactionId
});

export const deleteTransaction = transactionId => ({
  type: 'DELETE_TRANSACTION',
  transactionId
});

// add db calls