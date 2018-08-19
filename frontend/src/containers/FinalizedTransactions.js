import { connect } from 'react-redux';
import FinalTransactionsList from '../components/FinalizedTransactions';
import { deleteTransaction, addTransaction, getFinalizedTransactions } from '../actions';

const mapStateToProps = state => ({
  data: state.transactions
});

const mapDispatchToProps = dispatch => ({
  deleteTransaction: transactionId => dispatch(deleteTransaction(transactionId)),
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  getFinalizedTransactions: () => dispatch(getFinalizedTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalTransactionsList);



