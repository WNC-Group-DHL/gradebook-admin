import { useState } from 'react';
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination
} from '@mui/material';
import { filter } from 'lodash';

import { toast } from 'react-toastify';
import AdminClassesAPI from '../../../../helpers/api/admin/classes';

import SearchNotFound from '../../../_common/userTable/searchNotFound';

import UserListHead from '../../../_common/userTable/userListHead';
import UserListToolbar from '../../../_common/userTable/userListToolbar';
import UserTableRow from './tableRow';

import { getErrorMessage } from '../../../../helpers/error';
import { removeSigns } from '../../../../helpers/helper/stringHelper';

export default function ClassListTable({
  datas = [],
  handleRefresh = () => {},
  onUpdateSuccess = () => {},
}) {
  console.log(datas);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const isEmptyData = datas.length === 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = datas.map((n) => n.class_name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleDelete = (id) => () => {
    //Delete
    const classInfo = datas.find((x) => x.id === id)
    const updateData = {
      status: (classInfo.status === 'A') ? 'D' : 'A'
    }
    const toastLoadingId = toast.loading('??ang c???p nh???t');

    AdminClassesAPI.editClassroom(id, updateData)
    .then((res) => {
      toast.success('C???p nh???t th??nh c??ng');
      onUpdateSuccess(id, updateData)
    })
    .catch((err) => {
      toast.error(`L???i c???p nh???t - ${getErrorMessage(err)}`);
    })
    .finally(() => {
      toast.dismiss(toastLoadingId);
    })
  }

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - datas.length) : 0;

  const filteredUsers = applySortFilter(datas, getComparator(order, orderBy), filterName);

  const isNotFound = filteredUsers.length === 0;

  return (
    <Card>
      <UserListToolbar
        numSelected={selected.length}
        filterName={filterName}
        onFilterName={handleFilterByName}
      />

      <TableContainer>
        <Table>
          <UserListHead
            order={order}
            orderBy={orderBy}
            headLabel={TABLE_HEAD}
            rowCount={datas.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const { id, class_name } = row;
                const isItemSelected = selected.indexOf(class_name) !== -1;

                return (
                  <UserTableRow
                    key={row.id}
                    row={row}
                    selected={isItemSelected}
                    handleClick={handleClick}
                    handleDelete={handleDelete(id)}
                  />
                )
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          {isNotFound && (
            <TableBody>
              <TableRow>
                <TableCell align='center' colSpan={6} sx={{ py: 3 }}>
                  <SearchNotFound isEmpty={isEmptyData} searchQuery={filterName} />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={datas.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'className', label: 'L???p', alignRight: false },
  { id: 'subject', label: 'M??n', alignRight: false },
  { id: 'status', label: 'Tr???ng th??i', alignRight: false },
  { id: 'owner_name', label: 'Ng?????i t???o', alignRight: false },
  { id: 'created_at', label: 'Th???i gian t???o', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array, 
      (_data) => removeSigns(_data.class_name).toLowerCase().indexOf(
        removeSigns(query).toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}
