// import api from '../../';
// import { getAuthConfig } from '../../';

// const baseURL = '/user';

export const fetchAll = async () => {
  //const config = getAuthConfig();
  //return api.get(baseURL, config);
}

export const fetchUser = async (userId) => {
  //const config = getAuthConfig();
  //return api.get(`${baseURL}/${userId}`, config);
}

export const editUser = async (id, newUserInfo) => {
  // const config = getAuthConfig();
  
}

export const addAdminUser = async (id, newUserInfo) => {
  // const config = getAuthConfig();
  
}

const AdminUsersAPI = {
  fetchAll,
  fetchUser,
  editUser,
  addAdminUser,
}

export default AdminUsersAPI;