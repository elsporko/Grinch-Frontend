import React, { useMemo, useEffect, useState } from 'react';
import { useReactTable } from '@tanstack/react-table';
import Select from "react-select";
import MOCK_DATA from './constants/Mock_users.json';
import './css/table.css';
import axios from 'axios';

const options = [
  {value: "", label: ""},
  {value: "mon", label: "Monday"},
  {value: "tue", label: "Tuesday"},
  {value: "wed", label: "Wednesday"},
  {value: "thu", label: "Thursday"},
  {value: "fri", label: "Friday"},
]

  const columns = [
    {
      header: 'Username',
      accessorKey: 'username',
      cell: e =><a href={String(e.value)}> {String(e.value)} </a>
    },
    {
      header: 'Name',
      accessorKey: 'name',

    },
    {
      header: 'Route',
      accessorKey: 'route',
      Cell: ({row})=> {
              return <Select options={options} defaultValue={{ label: row.original.route, value: row.original.route}}/>
              },
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'Active',
      accessorKey: 'is_active',
      cell: e =><a href={String(e.value)}> {String(e.value)} </a>
    },
  ];

function Users() {
  const [grinchUsers, setGrinchUsers] = useState(null)
  useEffect(() => {
    console.log('Calling to API')
    axios.get('http://localhost:8000/api/users/').then((response) => {
      setGrinchUsers(response.data)
    })
  }, []);

  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useReactTable({ columns, grinchUsers });

  console.log('data: ' + JSON.stringify(data))
  console.log('grinchUsers: ' + JSON.stringify(grinchUsers))

  {/* return( <h1>Tadaaa</h1>); */}
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

  return(
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map ((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row =>{
          prepareRow(row)
            return(
              <tr {...row.getRowProps()}>
                {row.cells.map((cell)  => {
                  return <td {...cell.getCellProps()}>
                    {cell.render('cell')}</td>
                })}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default Users;
