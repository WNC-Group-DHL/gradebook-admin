import {
  Toolbar, Container, Typography, Divider, 
  Grid, Box
  , Breadcrumbs,
  Link,
  Stack,
} from '@mui/material';

import {
  Link as RouterLink,
} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import ToggleDisableClass from './toggleDisableClass';

const AlignCenter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1)
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

function ClassSingleToolbar({
  classInfo = {},
  handleRefresh = () => {}
}) {
  return (
    <Container 
      maxWidth='xl' 
      component='div'
      disableGutters
    >
      <Toolbar>
        <Grid container>
          <Grid
            item md={8} xs={12}
          > 
            <AlignCenter>
              <Breadcrumbs>
                <LinkRouter underline='hover' color='inherit' to='/classes'>
                  Quản lý lớp 
                </LinkRouter>
              </Breadcrumbs>
              <Typography variant='subtitle1' component='div'>
                <b>/ {classInfo.class_name}</b>
              </Typography>
            </AlignCenter>
          </Grid>
          <Grid
            item md={4} xs={12}
          >
            <Stack
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              spacing={2}
            >
              <ToggleDisableClass
                classId={classInfo.id}
                classStatus={classInfo.status}
                onSuccess={handleRefresh}
              />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
      <Divider/>
    </Container>
  )
}

export default ClassSingleToolbar;
