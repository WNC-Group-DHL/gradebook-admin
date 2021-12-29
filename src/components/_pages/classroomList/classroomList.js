import { Button, Container } from '@mui/material';
import ErrorPage from '../../_common/error';
import Loader from '../../_common/loader';
// import ClassroomListItem from './classroomListItem';
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
  } else if (isLoaded && classrooms.length === 0) {
    return <ErrorPage
      title = 'Chưa có lớp học'
      backToHome = {false}
    />
  } else {
    return (
      <Container maxWidth='xl'>
        {/* <Grid container spacing={3}>
          {classrooms.map(classroom => (
            <Grid
              key={classroom.id}
              item
              xs={12}
            >
              <ClassroomListItem classroom={classroom}/>
            </Grid>
          ))}
        </Grid> */}
        <ClassListTable
          datas={classrooms}
        />
      </Container>
    );
  }
}

export default ClassroomListContainer;
