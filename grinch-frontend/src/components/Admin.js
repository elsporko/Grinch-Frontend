import React, { useState } from 'react';
import './css/table.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Admin() {
  const [admin, setAdmin] = useState(null)
  const {isLoading, error, data} = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch(
      'http://localhost:8000/api/users/').then(
        (res) => res.json(),
      ), 
  })

  return( <h1>Tadaaa</h1>);
};

export default Admin;
