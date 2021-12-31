import api from '../../';
import { getAuthConfig } from '../../';

const baseURL = '/users';

export const fetchAll = async (fetchAdmin = false) => {
  const config = getAuthConfig();
  let userType = fetchAdmin ? 'A' : 'C';

  return api.get(`${baseURL}/${userType}`, config);
}

export const fetchAllAdmin = async () => {
  return fetchAll(true);
}

export const fetchUserById = async (userId) => {
  //const config = getAuthConfig();
  //return api.get(`${baseURL}/${userId}`, config);
}

export const editUser = async (id, newUserInfo) => {
  const config = getAuthConfig();
  const endpoint = '/update';
  return api.put(`${baseURL}${endpoint}/${id}`, newUserInfo, config);
}

export const resetPassword = async (id, newPasswordInfo) => {
  // const config = getAuthConfig();
  
}

export const addAdminUser = async (newUserInfo) => {
  const config = getAuthConfig();
  const endpoint = '/admin';
  return api.post(`${baseURL}${endpoint}`, newUserInfo, config);
}

const AdminUsersAPI = {
  fetchAll,
  fetchAllAdmin,
  fetchUserById,
  editUser,
  resetPassword,
  addAdminUser,
}

export default AdminUsersAPI;