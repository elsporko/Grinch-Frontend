import React, { useState, useMemo } from 'react';
import Select from "react-select";
import { useQueries } from '@tanstack/react-query';
import GenericTable from './Table'
import { createColumnHelper } from '@tanstack/react-table'
import UserModal from './Modal'

const options = [
  {value: "", label: ""},
  {value: "mon", label: "Monday"},
  {value: "tue", label: "Tuesday"},
  {value: "wed", label: "Wednesday"},
  {value: "thu", label: "Thursday"},
  {value: "fri", label: "Friday"},
];

function Users() {

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
  const routes = useMemo(() => routesQuery.data);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (usersQuery.isLoading) return 'Loading users query...';

  if (usersQuery.error)
    return 'An error has occurred: ' + usersQuery.error.message;

  return (
      <>
      <div>
        <button onClick={() => toggle()}>Add User</button>
        <UserModal isOpen={isOpen} toggle={toggle}/>
      </div>
      <GenericTable data={usersQuery.data} columns={columns} />
      </>
  );

}
export default Users;
