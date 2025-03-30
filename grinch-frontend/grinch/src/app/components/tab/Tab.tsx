import { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Tab.scss';

interface TabProps {
  data_label: string;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ 'data_label': dataLabel, children }) => {
  return (
    <div data-label={dataLabel}>
      {children}
    </div>
  );
};
{/*
export class Tab extends Component<{}> {
  override render() {
    return (
      <div>
        <p>Welcome to Tab!</p>
        <ul>
          <li>
            <Link to="/">Tab root</Link>
          </li>
        </ul>
        <Route path="/" element={<div>This is the Tab root route.</div>} />
      </div>
    );
  }
}
*/}
export default Tab;
