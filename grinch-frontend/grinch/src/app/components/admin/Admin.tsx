import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Tab from '../../components/tab/Tab';

import './Admin.scss';

export class Admin extends Component<{}, {}> {
  override render() {
    return (
      <Tab data_label="Admin">
      <div>
        <p>Welcome to Admin!</p>
        <ul>
          <li>
            <Link to="/">Admin root</Link>
          </li>
        </ul>
        <Route path="/" element={<div>This is the Admin root route.</div>} />
      </div>
      </Tab>
    );
  }
}

export default Admin;
