import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './Layout';
import PendingTransactions from '../containers/PendingTransactions';
import FinalizedTransactions from '../containers/FinalizedTransactions';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Layout} />
        <Route path="/pending" component={PendingTransactions} />
        <Route path="/final" component={FinalizedTransactions} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;