import React, {useState, useMemo} from 'react';
import { useQueries } from '@tanstack/react-query';
import GenericTable from './Table'
import { createColumnHelper } from '@tanstack/react-table'
import UserModal from './Modal'

function PickList(){

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('pickup_date', {
      header: 'Pickup date',
    }),
    columnHelper.accessor('route', {
      header: 'Route',
    }),
    columnHelper.accessor('name',{
      header: 'Customer Name',
    }),
    columnHelper.accessor('home_phone',{
      header: 'Phone',
      cell: e => <a href={'tel:'+String(e.getValue())}> {String(e.getValue())} </a>
    }),
    columnHelper.accessor('street_address',{
      header: 'Address',}),
    columnHelper.accessor('where_is_it',{
      header: 'Tree location',
    }),
    columnHelper.accessor('client_comment',{
      header: 'Customer Comment',
    }),
    columnHelper.accessor('admin_comment',{
      header: 'Grinch Comment',
    }),
  ];

  const fetchPickList = async () => {
    return(fetch('/api/picklist/').then((res) => res.json()));
  }

  const [pickListQuery] = useQueries({
    queries: [
      {
      queryKey: ['picklist'],
      queryFn: fetchPickList
      },
    ],
  });

  return(
      <div>
      {pickListQuery.data && <GenericTable data={pickListQuery.data} columns={columns} />}
      {pickListQuery.isError && pickListQuery.error.message}
      {pickListQuery.isLoading && <div>Loading</div>}
      </div>
  )
}

export default PickList
