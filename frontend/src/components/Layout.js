import React from 'react';
import { Link } from 'react-router-dom';
import PendingTransactions from '../containers/PendingTransactions';

const App = () => (
  <div>
    <h1>Ballin on a Budget</h1>
    <ul>
      <li><Link to='/pending'>Pending</Link></li>
      <li><Link to='/finalized'>Finalized</Link></li>
    </ul>
    <PendingTransactions />
  </div>
);

export default App;