import React from 'react';
import PendingTransaction from '../PendingTransactions/PendingTransaction.js';

const FinalTransactionsList = props => {
  console.log(props)
  if (!props.data) {    
    return (<div>Loading...</div>)
  }

  return (
    <div>
      <h3>Final</h3>   
      {props.data.finalizedTransactions.length === 0 ? <div>No finalized transactions.</div> : undefined}         
      {props.data.finalizedTransactions.map((t,i) => {
        return <PendingTransaction 
          key={i}
          data={t} 
          deleteTransaction={props.deleteTransaction} 
          index={i}
        />;
      })}
    </div>
  );   
};

export default FinalTransactionsList;