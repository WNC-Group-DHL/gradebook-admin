import api from '../../';
import { getAuthConfig } from '../../';

const baseURL = '/classrooms';

export const fetchAll = () => {
  const config = getAuthConfig();
  return api.get(baseURL, config);
}

export const fetchClassroom = (classId) => {
  const config = getAuthConfig();
  return api.get(`${baseURL}/${classId}`, config);
}

export const editClassroom = async (id, newClassInfo) => {
  const config = getAuthConfig();
  return api.put(`${baseURL}/${id}`, newClassInfo, config);
}

const AdminClassesAPI = {
  fetchAll,
  fetchClassroom,
  editClassroom,
}

export default AdminClassesAPI;