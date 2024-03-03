import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Tabs from "./components/Tabs";
import Users from "./components/Users";
import Admin from "./components/Admin";
import PickList from "./components/PickList";
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

function App() {
  const queryClient = new QueryClient()

  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) {
        return parts.pop().split(';').shift();
      }
    }

  const csrftoken = getCookie('csrftoken');

  useEffect(() => {
    console.log('Checking if logged in')
    client.get("/api/users/")
    .then(function (res) {
      console.log('Logged in!!')
      setCurrentUser(true);
    })
    .catch(function(error) {
      console.log('NOT logged in!!')
      setCurrentUser(false);
    });
  }, []);

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/login/", {
        username: username,
        password: password,
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post("/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  if (currentUser) {
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

  // Show login page
    return (
    <div>
    {
        <div className="center">
          <Form onSubmit={e => submitLogin(e)}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username address</Form.Label>
              <Form.Control type="username" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
    }
    </div>
  );

}

export default App;
