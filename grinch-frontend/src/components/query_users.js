import React, { useState } from 'react';
import Select from "react-select";
import './css/table.css';
import { useQuery } from '@tanstack/react-query';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
{/*
import MOCK_DATA from './constants/Mock_users.json';
import axios from 'axios';
*/}

{/*
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
  */}

function Users() {
  const [Users, setUsers] = useState(null)

  // Get data from API
  {/*
  useEffect(() => {
    console.log('Calling to API')
    (async() => {
      await axios.get('http://localhost:8000/api/users/').then
        ((response) => {
          setUsers(response.data)
          }
        )
       }
    )}, []);

  const data = useMemo(() => MOCK_DATA, []);

  console.log('data: ' + JSON.stringify(data))
  */}

  const {isLoading, error, users} = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch(
      'http://localhost:8000/api/users/').then(
        (res) => res.json(),
      ), 
  })

  console.log('Users: ' + JSON.stringify(Users))
  return( <h1>Tadaaa</h1>);

  {/*
  const table = useReactTable({
    Users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

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
*/}

}
export default Users;
