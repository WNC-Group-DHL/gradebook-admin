import {
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableCell,
  Typography,
  Chip,
} from '@mui/material';
import { getLocalDatetimeString } from '../../../../helpers/datetime';

import ClassMoreMenu from '../../../_common/classTable/classMoreMenu';

const statusMap = {
  'A': {
    color: 'success',
    text: 'Kích hoạt',
    isClassDisabled: false,
  },
  'D': {
    color: 'error',
    text: 'Đã vô hiệu',
    isClassDisabled: true,
  },
}

export default function UserTableRow({
  row = {}, 
  selected = false, 
  handleClick = () => {},
  handleDelete = () => {}
}) {
  const { 
    id: classId, 
    class_name: className,
    subject,
    status,
    description,
    created_at: createdAt,
    owner_avatar: ownerAvatar,
    owner_name: ownerName,
  } = row;
  let statusInfo = statusMap[status];
  if (!statusInfo) {
    statusInfo = statusMap['A'];
  } 

  return (
    <TableRow
      hover
      key={classId}
      tabIndex={-1}
      role='checkbox'
      selected={selected}
      aria-checked={selected}
    >
      <TableCell padding='checkbox'>
        <Checkbox
          checked={selected}
          onChange={(event) => handleClick(event, className)}
        />
      </TableCell>
      <TableCell align='left'>
        <Stack>
          <Typography variant='subtitle2' noWrap>
            <b>{className}</b>
          </Typography>
          <Typography variant='subtitle2' noWrap>
            {description}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align='left'>
        {subject}
      </TableCell>
      <TableCell align='left'>
        <Chip
          label={statusInfo.text}
          color={statusInfo.color}
        />
      </TableCell>
      <TableCell component='th' scope='row' padding='none'>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Avatar alt={ownerName} src={ownerAvatar} />
          <Stack>
            <Typography variant='subtitle1' noWrap>
              {ownerName}
            </Typography>
            <Typography variant='subtitle2' noWrap>
              {getLocalDatetimeString(createdAt)}
            </Typography>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell align='right'>
        <ClassMoreMenu 
          userId={classId}
          isDisabled={statusInfo.isClassDisabled}
          onDeleteClick={handleDelete}
        />
      </TableCell>
    </TableRow>
  );
}