import React from 'react';
import Tabs from "./components/tabManager/TabManager";
import Tab from "./components/tab/Tab";
import Admin from "./components/admin/Admin";
//import Users from "./components/Users";
import './App.css';

const LocalTab: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => {
  return (
    <div data-label={label}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Tabs>
      <div data-label="Tab 1">Content 1</div>
      <div data-label="Tab 2">Content 2</div>
        {/*
      <Admin/>
        <Tab label="Admin">
          Future home of activating pickup date, managing route names, view notes from users
        </Tab>
        <Tab label="Users">
          Add users, archive users, map users to routes
        </Tab>
        <Tab label="Map">
          Visual representation of the map. Change owner of picklist entry
        </Tab>
        <Tab label="Communication">
          Chat among users
        </Tab>
        */}

      </Tabs>
    </div>
  );
}

export default App;


// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
/*
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="grinch" />
    </div>
  );
}

export default App;
*/