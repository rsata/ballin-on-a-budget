import { connect } from 'react-redux';
import PendingTransactionsList from '../components/PendingTransactions';
import { finalizeTransaction, deleteTransaction } from '../actions';

const mapStateToProps = state => ({
  data: state.pendingTransactions
});

const mapDispatchToProps = dispatch => ({
  finalizeTransaction: transactionId => dispatch(finalizeTransaction(transactionId)),
  deleteTransaction: transactionId => dispatch(deleteTransaction(transactionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTransactionsList);