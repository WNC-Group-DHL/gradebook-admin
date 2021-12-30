import {
  Box,
  Typography,
} from '@mui/material';

import UserDisplayItem from '../../../../../_common/userDisplayItem';
import { getLocalDatetimeString } from '../../../../../../helpers/datetime';

export default function CreatorInfo({creator={}, createdAt}) {
  return (
    <Box my={1}>
      <Typography variant='subtitle2'>
        Tạo{createdAt ? <> vào <i>{getLocalDatetimeString(createdAt)}</i></>:null} bởi
      </Typography>
      <UserDisplayItem
        avatar={creator.avatar}
        fullname={creator.fullname}
      />
    </Box>
  )
}
