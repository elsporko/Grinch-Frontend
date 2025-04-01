import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './Admin.scss';

const Admin: React.FC = (): React.ReactElement => {
    return (
      <div>
        <p>Future home of activating pickup date, managing route names, view notes from users</p>
        {/*<ul>
          <li>
            <Link to="/">Admin root</Link>
          </li>
        </ul>
        {
        <Routes>
          <Route path="/" element={<div>This is the Admin root route.</div>} />
        </Routes>
        */}

      </div>
    );
}

export default Admin;
