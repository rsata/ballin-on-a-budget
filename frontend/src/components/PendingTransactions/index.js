import React from 'react';
import PendingTransaction from './PendingTransaction';
import NewTransactionForm from '../NewTransactionForm';
import moment from 'moment';

const PendingTransactionsList = props => {
  const submit = (values) => {
    const t = {
      id: moment().unix(), // meh. use this as an id for now
      amount: Number(values.amount),
      date: values.date,
      name: values.name
    }
    props.addTransaction(t);
  }

  if (!props.data.pendingTransactions) return (<div><button onClick={props.getTransactions}>Get transactions</button>Loading...</div>)

  return (
    <div>
      <h3>Pending</h3>
      <button onClick={props.getTransactions}>Get transactions</button>
      <NewTransactionForm onSubmit={submit} />
      {props.data.pendingTransactions.map((t,i) => {
        return <PendingTransaction 
          key={i}
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