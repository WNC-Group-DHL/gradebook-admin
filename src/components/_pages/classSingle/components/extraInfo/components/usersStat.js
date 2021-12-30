import {
  Box,
  Typography,
  Stack,
} from '@mui/material';

import { USER_CLASS_ROLES } from '../../../../../../helpers/constants';

export default function UserStats({usersInClass = []}) {
  const teacherUsers = usersInClass.filter(
    (teacher) => teacher.role === USER_CLASS_ROLES.TEACHER
  );
  const studentUsers = usersInClass.filter(
    (student) => student.role === USER_CLASS_ROLES.STUDENT
  );

  return (
    <Stack 
      direction='row'
      spacing={{ xs: 2, sm: 4, md: 8 }}
      my={1}
    >
      <NumberWithDecoratedLabel 
        label='Thành viên' 
        numberValue={usersInClass.length}
      />
      <NumberWithDecoratedLabel 
        label='Giáo viên' 
        numberValue={teacherUsers.length}
      />
      <NumberWithDecoratedLabel 
        label='Học sinh' 
        numberValue={studentUsers.length}
      />
    </Stack>
  )
}

function NumberWithDecoratedLabel({label, numberValue}) {
  return (
    <Box>
      <Typography>{label}</Typography>
      <Typography variant='h6'><b>{numberValue}</b></Typography>
    </Box>
  )
}