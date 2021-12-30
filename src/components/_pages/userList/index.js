import { useState, useEffect } from 'react';

import AdminUsersAPI from '../../../helpers/api/admin/users';
import DefaultLayout from '../../_layout/default';
import UserLayoutContainer from './layoutContainer';

const usersMockData = [...Array(24)].map((_, index) => ({
  id: index,
  avatarUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fabsspeedsensors.com%2Fproduct%2Fsample-product-1%2F&psig=AOvVaw09yjnPg6YzIIkQKievAJRc&ust=1640853439410000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDwx8XNiPUCFQAAAAAdAAAAABAD',
  name: 'tester',
  username: 'st@gmail.com',
  status: 'A',
  student_code: '18120001',
  lastActive: '2021-01-01 21:21:21'
}));

export default function UserAccountList() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setUsers([]);
    setIsLoaded(false);
    AdminUsersAPI.fetchAll()
    .then(
      (result) => {
        setIsLoaded(true);
        setUsers(usersMockData);
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

  const handleRefresh = () => {
    loadData()
  }

  return (
    <DefaultLayout>
      <UserLayoutContainer
        error={error}
        isLoaded={isLoaded}
        users={users}
        handleRefresh={handleRefresh}
      />
    </DefaultLayout>
  )
}
