import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DefaultLayout from '../../_layout/default';
import LayoutContainer from './components/layoutContainer';

import AdminUsersAPI from '../../../helpers/api/admin/users';

const mockUserData = {
  id: 1,
  avatarUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabsspeedsensors.com%2Fproduct%2Fsample-product-1%2F&psig=AOvVaw09yjnPg6YzIIkQKievAJRc&ust=1640853439410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDwx8XNiPUCFQAAAAAdAAAAABAD',
  name: 'tester',
  username: 'st@gmail.com',
  status: 'A',
  user_code: '18120001',
  lastActive: '2021-01-01 21:21:21',
  user_type: 'A'
}

export default function UserSingle() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData(userId);
  }, [userId]);

  const loadData = (userId) => {
    setUser({});
    setIsLoading(true);
    AdminUsersAPI.fetchUser(userId)
    .then((result) => {
      setUser(mockUserData);
      // Unauthorized / Not joined class 
      // API does not response with 403
      // but still 200 OK
      // if (result.data.success) {
      //   setClassroom(result.data.data);
      // } else {
      //   throw new Error(result.data.message);
      // }
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

  const handleRefresh = () => loadData(userId);

  return (
    <DefaultLayout>
      <LayoutContainer
        user={user}
        isLoading={isLoading}
        error={error}
        handleRefresh={handleRefresh}
      />
    </DefaultLayout>
  )
}
