import React from 'react';
import PendingTransaction from './PendingTransaction';
import NewTransactionForm from '../NewTransactionForm';
import moment from 'moment';

const PendingTransactionsList = props => {
  console.log(props);

  const submit = (values) => {
    const t = {
      id: moment().unix(), // meh. use this as an id for now
      amount: Number(values.amount),
      date: values.date,
      name: values.name
    }
    props.addTransaction(t);
  }

  return (
    <div>
      <h3>Pending</h3>
      <NewTransactionForm onSubmit={submit} />
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