import { Container, Box } from '@mui/material';
import Loader from '../../../../_common/loader';
import ErrorPage from '../../../../_common/error';
import { ClassEditFormPanel } from '../form';
import ClassSingleToolbar from '../topbar';

function ClassroomContainer({
  error, isLoading, classroom,
  handleRefresh = () => {},
  onUpdateSuccess = () => {},
}) {
  if (error) {
    return <ErrorPage 
      code = {error.status}
      title = {error.title}
      details = {error.details}
      message = {error.message}/>
  } else if (isLoading) {
    return <Loader/>;
  } else {
    return (
      <Container maxWidth='xl'>
        <ClassSingleToolbar 
          classInfo={classroom}
          handleRefresh={handleRefresh}
          onUpdateSuccess={onUpdateSuccess}
        />
        <Box mt={2}>
          <ClassEditFormPanel 
            classInfo={classroom}
            handleRefresh={handleRefresh}
            onUpdateSuccess={onUpdateSuccess}
          />
        </Box>
      </Container>
    );
  }
}

export default ClassroomContainer;
