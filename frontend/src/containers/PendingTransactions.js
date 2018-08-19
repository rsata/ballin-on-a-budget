import { connect } from 'react-redux';
import PendingTransactionsList from '../components/PendingTransactions';
import { finalizeTransaction, deleteTransaction, addTransaction, getTransactions } from '../actions';

const mapStateToProps = state => ({
  data: state.transactions
});

const mapDispatchToProps = dispatch => ({
  finalizeTransaction: transactionId => dispatch(finalizeTransaction(transactionId)),
  deleteTransaction: transactionId => dispatch(deleteTransaction(transactionId)),
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  getTransactions: () => getTransactionsApi(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTransactionsList);




const getTransactionsApi = (dispatch) => {
  fetch('http://localhost:3001/get-transactions', {
    method: 'POST'
  })
    .then(r => r.json())
    .then(r => dispatch(getTransactions(r)))
    .catch(err => console.log(err))
}