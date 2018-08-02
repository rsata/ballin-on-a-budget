import { connect } from 'react-redux';
import PendingTransactionsList from '../components/PendingTransactions';
import { finalizeTransaction, deleteTransaction, getTransactions } from '../actions';

const mapStateToProps = state => ({
  data: state.pendingTransactions
});

const mapDispatchToProps = dispatch => ({
  finalizeTransaction: transactionId => dispatch(finalizeTransaction(transactionId)),
  deleteTransaction: transactionId => dispatch(deleteTransaction(transactionId)),
  getTransactions: getTransactionsApi
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTransactionsList);

const getTransactionsApi = () => {
  fetch('http://localhost:3001/get-transactions', {
    method: 'POST'
  })
    .then(r => r.json)
    .then(r => console.log(r))
    .catch(err => console.log(err))
}