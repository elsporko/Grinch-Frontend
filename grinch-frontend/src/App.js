import React from 'react';
import Tabs from "./components/Tabs";
import Users from "./components/Users";
import Admin from "./components/Admin";
import PickList from "./components/PickList";
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Tabs>
          <div label="Admin">
            Future home of activating pickup date, managing route names, view notes from users
            <Admin/>
          </div>
          <div label="Users">
            Add users, archive users, map users to routes
            <Users/>
          </div>
          <div label="Map">
            Visual representation of the map. Change owner of picklist entry
            <Map/>
          </div>
          <div label="Pickup List">
            Text based list of pick up addresses
            <PickList/>
          </div>
          <div label="Communication">
            Chat among users
          </div>
        </Tabs>
      </QueryClientProvider>
    </div>
  );
}

export default App;
