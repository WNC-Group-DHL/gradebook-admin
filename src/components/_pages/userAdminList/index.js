import { useState, useEffect } from 'react';

import AdminUsersAPI from '../../../helpers/api/admin/users';
import UserLayoutContainer from './layoutContainer';
import DefaultLayout from '../../_layout/default';

export default function AdminAccountList() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setUsers([]);
    setIsLoaded(false);
    AdminUsersAPI.fetchAllAdmin()
    .then(
      (res) => {
        setIsLoaded(true);
        if (res.data.success) {
          setUsers(res.data.data.listUser);
        }
        else {
          throw new Error('Lỗi lấy danh sách')
        }        
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

  const onUpdateSuccess = (id, newData) => {
    const index = users.findIndex(x => x.id === id);
    if (index === -1) {
      // Not found
      return;
    }
    else {
      setUsers([
        ...users.slice(0,index),
        Object.assign({}, users[index], newData),
        ...users.slice(index + 1),
      ])
    }
  }

  return (
    <DefaultLayout>
      <UserLayoutContainer
        error={error}
        isLoaded={isLoaded}
        users={users}
        handleRefresh={handleRefresh}
        onUpdateSuccess={onUpdateSuccess}
      />
    </DefaultLayout>
  )
}
