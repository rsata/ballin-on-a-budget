import React from 'react';

const PendingTransaction = props => {
  console.log(props)
  return (
    <div>      
      <ul>
        <li>{ props.data.name }</li>
        <li>{ (Math.round(props.data.amount *100)/100).toFixed(2) }</li>
        <li>{ props.data.date }</li>        
        <button onClick={() => props.finalizeTransaction(props.data.transaction_id)}>{String.fromCharCode(10003)}</button>
        <button onClick={() => props.deleteTransaction(props.data.transaction_id)}>{String.fromCharCode(10007)}</button>
      </ul>
    </div>
  );
};

export default PendingTransaction;