import React from 'react';

const PendingTransaction = props => {
  return (
    <div>      
      <ul>
        <li>{ props.data.p_name }</li>
        <li>{ (Math.round(props.data.p_amount *100)/100).toFixed(2) }</li>
        <li>{ props.data.p_date }</li>        
        <button onClick={() => props.finalizeTransaction(props.data.p_transaction_id)}>{String.fromCharCode(10003)}</button>
        <button onClick={() => props.deleteTransaction(props.data.p_transaction_id)}>{String.fromCharCode(10007)}</button>
      </ul>
    </div>
  );
};

export default PendingTransaction;