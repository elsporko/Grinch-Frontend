import React, { useState, useMemo } from 'react';
import Select from "react-select";
import './css/table.css';
import { useQuery, useQueries } from '@tanstack/react-query';
import GenericTable from './Table'
import {
  createColumnHelper,
} from '@tanstack/react-table'

const options = [
  {value: "", label: ""},
  {value: "mon", label: "Monday"},
  {value: "tue", label: "Tuesday"},
  {value: "wed", label: "Wednesday"},
  {value: "thu", label: "Thursday"},
  {value: "fri", label: "Friday"},
];

function Users() {
  type GrinchUsers = {
    username: string,
    name: string,
    route: string,
    email: string,
    active: string,
  }

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("username", {
      header: 'Username',
      cell: e =><a href={String(e.getValue())}> {String(e.getValue())} </a>
    }),
    columnHelper.accessor("name", {
      header: 'Name',
    }),
    columnHelper.accessor("route", {
      header: 'Route',
      cell: ({row})=> {
              return <Select options={options} defaultValue={{ label: row.original.route, value: row.original.route}}/>
              },
    }),
    columnHelper.accessor("email", {
      header: 'Email',
    }),
    columnHelper.accessor("Active", {
      header: 'active',
      cell: e =><a href={String(e.getValue())}> {String(e.getValue())} </a>
    }),
  ];


  function fetchUsers(){
    return(
      fetch(
      '/api/users/').then(
        (res) => res.json()
      )
    );
    }  

  function fetchRoutes(){
    return(
      fetch(
      '/api/routes/').then(
        (res) => res.json(),
      )
    )}  

  // Get active users and routes
  const [usersQuery, routesQuery] = useQueries({
    queries: [
      {
        queryKey: ['users'],
        queryFn: fetchUsers,
      },
      {
        queryKey: ['routes'],
        queryFn: fetchRoutes,
      },
    ]
  })

  const data = useMemo(() => usersQuery.data);

  if (usersQuery.isLoading) return 'Loading users query...';

  if (usersQuery.error)
    return 'An error has occurred: ' + usersQuery.error.message;


  return (
      <GenericTable data={data} columns={columns} />
  );

}
export default Users;
