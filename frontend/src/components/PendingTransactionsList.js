import React from 'react';
import PendingTransaction from './PendingTransaction';

const PendingTransactionsList = transactions => {
  // console.log(transactions.pendingTransactions.data.map(t => t)); //cool... 
  return (
    <div>
      {transactions.pendingTransactions.data.map((t,i) => {
        return <PendingTransaction 
          key={t.id}
          data={t} 
          finalizeTransaction={transactions.finalizeTransaction} 
          deleteTransaction={transactions.deleteTransaction} 
          index={i}
        />;
      })}
    </div>
  );   
};

export default PendingTransactionsList;