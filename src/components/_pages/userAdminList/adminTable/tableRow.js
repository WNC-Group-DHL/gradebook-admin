import {
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableCell,
  Typography,
  Chip,
} from '@mui/material';
import { USER_ACCOUNT_STATUS } from '../../../../helpers/constants';

import UserMoreMenu from '../../../_common/userTable/userMoreMenu';

export default function UserTableRow({
  row = {}, 
  selected = false, 
  handleClick = () => {},
  handleDelete = () => {}
}) {
  const { id, name, status, username, avatarUrl, lastActive } = row;
  let statusInfo = USER_ACCOUNT_STATUS[status];
  if (!statusInfo) {
    statusInfo = USER_ACCOUNT_STATUS['A'];
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
          isDisabled={statusInfo.isClassDisabled}
          onDeleteClick={handleDelete}
        />
      </TableCell>
    </TableRow>
  );
}