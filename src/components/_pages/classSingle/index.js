import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DefaultLayout from '../../_layout/default';
import ClassroomContainer from './components/layoutContainer';

import AdminClassesAPI from '../../../helpers/api/admin/classes';

export default function ClassSingle() {
  const { classId } = useParams();

  const [classroom, setClassroom] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadClassroom(classId);
  }, [classId]);

  const loadClassroom = (classId) => {
    setClassroom({});
    setError(null);
    setIsLoading(true);
    AdminClassesAPI.fetchClassroom(classId)
    .then((result) => {
      // Unauthorized / Not joined class 
      // API does not response with 403
      // but still 200 OK
      if (result.data.success) {
        setClassroom(result.data.data);
      } else {
        throw new Error(result.data.message);
      }
    })
    .catch((error) => {
      let err = {};
      if (error.response) {
        if (error.response.data) {
          err.status = error.response.status;
          err.message = error.response.data.message;
        } else {
          //Incase cannot request to server
          err.message = error.response.message;
        }
      } else {
        err.message = error.message;
      }
      setError(err);
    })
    .finally(() => setIsLoading(false));
  }

  const handleRefresh = () => loadClassroom(classId);

  const onUpdateSuccess = (updateInfo) => {
    setClassroom(Object.assign({}, classroom, updateInfo));
  }

  return (
    <DefaultLayout>
      <ClassroomContainer
        classroom={classroom}
        isLoading={isLoading}
        error={error}
        handleRefresh={handleRefresh}
        onUpdateSuccess={onUpdateSuccess}
      />
    </DefaultLayout>
  )
}
