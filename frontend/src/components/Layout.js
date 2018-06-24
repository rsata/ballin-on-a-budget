import React from 'react';
import { Link } from 'react-router-dom';
import PendingTransactions from '../containers/PendingTransactions';

const Layout = props => (
  <div>
    <h1>Ballin on a Budget</h1>
    <ul>
      <li><Link to='/pending'>Pending</Link></li>
      <li><Link to='/final'>Final</Link></li>
    </ul>
    {props.location.pathname === '/' ? <PendingTransactions /> : undefined}
  </div>
);

export default Layout;