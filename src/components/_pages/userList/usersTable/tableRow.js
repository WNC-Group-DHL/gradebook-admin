import {
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableCell,
  Typography,
  Chip,
} from '@mui/material';

import UserMoreMenu from '../../../_common/userTable/userMoreMenu';

const statusMap = {
  'A': {
    color: 'success',
    text: 'Đã kích hoạt'
  },
  'I': {
    color: 'warning',
    text: 'Chưa Active'
  },
  'D': {
    color: 'error',
    text: 'Bị Lock'
  },
}

export default function UserTableRow({
  row = {}, 
  selected = false, 
  handleClick = () => {},
  handleDelete = () => {}
}) {
  const { id, name, student_code, status, username, avatarUrl, lastActive } = row;
  let statusInfo = statusMap[status];
  if (!statusInfo) {
    statusInfo = statusMap['A'];
  } 

  return (
    <TableRow
      hover
      key={id}
      tabIndex={-1}
      role='checkbox'
      selected={selected}
      aria-checked={selected}
    >
      <TableCell padding='checkbox'>
        <Checkbox
          checked={selected}
          onChange={(event) => handleClick(event, name)}
        />
      </TableCell>
      <TableCell component='th' scope='row' padding='none'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar alt={name} src={avatarUrl} />
          <Typography variant='subtitle2' noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align='left'>{username}</TableCell>
      <TableCell align='left'>{student_code}</TableCell>
      <TableCell align='left'>
        <Chip
          label={statusInfo.text}
          color={statusInfo.color}
        />
      </TableCell>
      <TableCell align='left'>{lastActive}</TableCell>
      <TableCell align='right'>
        <UserMoreMenu 
          userId={id}
          onDeleteClick={handleDelete}
        />
      </TableCell>
    </TableRow>
  );
}