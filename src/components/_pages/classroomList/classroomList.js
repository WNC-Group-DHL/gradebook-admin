import { Button, Container } from '@mui/material';
import ErrorPage from '../../_common/error';
import Loader from '../../_common/loader';
import ClassListTable from './classTable';

function ClassroomListContainer({error, isLoaded, classrooms, handleRefresh}) {
  if (error) {
    return <ErrorPage 
      code = {error.status}
      title = {error.title}
      details = {error.details}
      message = {error.message}
      backToHome = {false}>
        <Button onClick={handleRefresh}>Tải lại</Button>
      </ErrorPage>;
  } else if (!isLoaded) {
    return <Loader/>;
  } else {
    return (
      <Container maxWidth='xl'>
        <ClassListTable
          datas={classrooms}
        />
      </Container>
    );
  }
}

export default ClassroomListContainer;
