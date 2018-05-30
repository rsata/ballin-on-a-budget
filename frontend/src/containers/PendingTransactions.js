import { connect } from 'react-redux';
import PendingTransactionsList from '../components/PendingTransactionsList';
import { finalizeTransaction, deleteTransaction } from '../actions';

const mapStateToProps = state => ({
  pendingTransactions: state.pendingTransactions
});

const mapDispatchToProps = dispatch => ({
  finalizeTransaction: transactionId => dispatch(finalizeTransaction(transactionId)),
  deleteTransaction: transactionId => dispatch(deleteTransaction(transactionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingTransactionsList);