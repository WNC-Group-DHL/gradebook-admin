import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Box } from '@mui/material';

import AdminClassesAPI from '../../../helpers/api/admin/classes';

import DefaultLayout from '../../_layout/default';
import ClassroomListContainer from './classroomList';
import ClassroomListToolbar from './classroomListToolbar';
import NewClassroomDialog from './dialogs/addNew';

function ClassroomListPage() {
  const [classrooms, setClassrooms] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [isNewFormOpen, setIsNewFormOpen] = useState(false);

  useEffect(() => {
    loadClassrooms();
  }, []);

  const loadClassrooms = () => {
    setClassrooms([]);
    setIsLoaded(false);
    AdminClassesAPI.fetchAll()
    .then(
      (result) => {
        setIsLoaded(true);
        setClassrooms(result.data.data);
      },
    )
    .catch(
      (error) => {
        let res = {};
        if (error.response && error.response.data) {
          if (error.response.data) {
            res = {...error.response.data};
          }
          //Incase cannot request to server
          res.data = error.response.data;
          res.status = error.response.status;
        }
        else {
          res.message = error.message;
        }
        setIsLoaded(true);
        setError(res);
      }
    )
  }

  const onAddNewClassroomSuccess = (data) => {
    toast.success(data.message);
    loadClassrooms();
  }

  const onAddNewClassroomFailed = (err) => {
    let message = err.message; //Incase cannot request to server
    if (err.response && err.response.data) {
      message = err.response.data.message;
    }
    toast.error(message);
  }

  const onUpdateSuccess = (id, newData) => {
    const index = classrooms.findIndex(x => x.id === id);
    if (index === -1) {
      // Not found
      return;
    }
    else {
      setClassrooms([
        ...classrooms.slice(0,index),
        Object.assign({}, classrooms[index], newData),
        ...classrooms.slice(index + 1),
      ])
    }
  }

  return (
    <DefaultLayout>
      <ClassroomListToolbar
        handleRefresh = {loadClassrooms}
        handleOpenNewDialog = {() => {setIsNewFormOpen(true)}}
      />
      <Box mt={2}>
        <ClassroomListContainer 
          error = {error}
          isLoaded = {isLoaded}
          classrooms = {classrooms}
          handleRefresh = {() => {loadClassrooms()}}
          onUpdateSuccess = {onUpdateSuccess}
        />
      </Box>
      <NewClassroomDialog
        open={isNewFormOpen}
        onClose={() => {setIsNewFormOpen(false)}}
        onSuccess={onAddNewClassroomSuccess}
        onFailed={onAddNewClassroomFailed}
      />
    </DefaultLayout>
  );
}

export default ClassroomListPage;
