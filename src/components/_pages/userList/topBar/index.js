import {Toolbar, Container, IconButton, Typography, Divider, Stack} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

function UserListToolbar({
  handleRefresh = () => {}
}) {
  return (
    <Container 
      maxWidth='xl' 
      component='div'
      disableGutters
    >
      <Container maxWidth='xl' disableGutters>
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{ flexGrow: 1}}
          >
            Tài khoản người dùng
          </Typography>
          <Stack direction='row' spacing={1}>
            <IconButton
              color='defaultColor'
              onClick={handleRefresh}
            >
              <RefreshIcon/>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
      <Divider/>
    </Container>
  )
}

export default UserListToolbar;