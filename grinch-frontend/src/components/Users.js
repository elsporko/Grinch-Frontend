import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import Select from "react-select";
import MOCK_DATA from './constants/Mock_users.json';
import './css/table.css';

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
      Header: 'Username',
      accessor: 'username',
      Cell: e =><a href={String(e.value)}> {String(e.value)} </a>
    },
    {
      Header: 'Name',
      accessor: 'name',

    },
    {
      Header: 'Route',
      accessor: 'route',
      Cell: ({row})=> {
              return <Select options={options} defaultValue={{ label: row.original.route, value: row.original.route}}/>
              },
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Active',
      accessor: 'is_active',
      Cell: e =><a href={String(e.value)}> {String(e.value)} </a>
    },
  ];

function Users() {
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({ columns, data });
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
                    {cell.render('Cell')}</td>
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
