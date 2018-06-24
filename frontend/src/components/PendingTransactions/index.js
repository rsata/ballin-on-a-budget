import React from 'react';
import PendingTransaction from './PendingTransaction';

const PendingTransactionsList = props => {
  console.log(props);
  return (
    <div>
      <h3>Pending</h3>
      {props.data.pendingTransactions.map((t,i) => {
        return <PendingTransaction 
          key={t.id}
          data={t} 
          finalizeTransaction={props.finalizeTransaction} 
          deleteTransaction={props.deleteTransaction} 
          index={i}
        />;
      })}
    </div>
  );   
};

export default PendingTransactionsList;