import React from 'react';
import Tabs from "./components/tabManager/TabManager";
import Tab from "./components/tab/Tab";
import Admin from "./components/admin/Admin";
import Users from "./components/users/Users";
import Map from './components/map/Map';
import PickupList from './components/pickupList/PickupList';
import Communications from './components/communications/Communications';
import './App.css';

function App() {
  return (
    <div>
      <Tabs>
      <div data-label="Admin"><Admin /></div>
      <div data-label="Users"><Users /></div>
      <div data-label="Map"><Map /></div>
      <div data-label="Pickup List"><PickupList /></div>
      <div data-label="Communications"><Communications /></div>

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