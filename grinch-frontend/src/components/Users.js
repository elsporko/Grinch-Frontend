import React, { useState, useMemo } from 'react';
import Select from "react-select";
import './css/table.css';
import { useQuery, useQueries } from '@tanstack/react-query';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
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
      'http://localhost:8000/api/users/').then(
        (res) => res.json()
      )
    );
    }  

  function fetchRoutes(){
    return(
      fetch(
      'http://localhost:8000/api/routes/').then(
        (res) => res.json(),
      )
    )}  

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (usersQuery.isLoading) return 'Loading users query...';

  if (usersQuery.error)
    return 'An error has occurred: ' + usersQuery.error.message;

  return (
  <div className="p-2">
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  </div>
  );

}
export default Users;
