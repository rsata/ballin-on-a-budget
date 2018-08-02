import React from 'react';

const PendingTransaction = props => {
  return (
    <div>      
      <ul>
        <li>{ props.data.name }</li>
        <li>{ props.data.amount }</li>
        <li>{ props.data.date }</li>
        <button onClick={() => props.finalizeTransaction(props.data.id)}>{String.fromCharCode(10003)}</button>
        <button onClick={() => props.deleteTransaction(props.data.transaction_id)}>{String.fromCharCode(10007)}</button>
      </ul>
    </div>
  );
};

export default PendingTransaction;