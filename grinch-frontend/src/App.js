import React from 'react';
import Tabs from "./components/Tabs";
import Users from "./components/Users";
import './App.css';

function App() {
  return (
    <div>
      <Tabs>
        <div label="Admin">
          Future home of activating pickup date, managing route names, view notes from users
        </div>
        <div label="Users">
          Add users, archive users, map users to routes
          <Users/>
        </div>
        <div label="Map">
          Visual representation of the map. Change owner of picklist entry
        </div>
        <div label="Communication">
          Chat among users
        </div>
      </Tabs>
    </div>
  );
}

export default App;
