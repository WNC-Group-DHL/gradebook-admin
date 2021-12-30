import { Paper, Box, Typography } from '@mui/material';
import CreatorInfo from './components/creatorInfo';
import UserStats from './components/usersStat';

export default function ExtraClassInfo({
  classInfo = {}
}) {
  const creatorInfo = {
    avatar: classInfo.owner_avatar,
    fullname: classInfo.owner_name,
  }
  console.log(classInfo)
  return (
    <Paper>
      <Box padding={2}>
        <Typography>
          Tóm tắt
        </Typography>
        <Box my={2}>
          <UserStats
            usersInClass={classInfo.listUser}
          />
        </Box>
        <Box my={2}>
          <CreatorInfo
            creator={creatorInfo}
            createdAt={classInfo.created_at}
          />
        </Box>
      </Box>
    </Paper>
  )
}