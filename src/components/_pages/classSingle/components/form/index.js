import { Box, Paper, Container, Typography, Grid } from '@mui/material';
import ExtraClassInfo from '../extraInfo';
import ClassEditForm from './inputForm';

export function ClassEditFormPanel({
  classInfo = {},
  handleRefresh = () => {},
  onUpdateSuccess = () => {},
}) {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item lg={8} xs={12} order={{ xs: 2, lg: 1}}>
          <Paper>
            <Box padding={2}>
              <Typography>
                Chỉnh sửa thông tin
              </Typography>
              <Box>
                <ClassEditForm 
                  classInfo={classInfo}
                  onSuccess={onUpdateSuccess}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={12} order={{ xs: 1, lg: 2}}>
          <ExtraClassInfo
            classInfo={classInfo}
          />
        </Grid>
      </Grid>
    </Container> 
    
  )
}
