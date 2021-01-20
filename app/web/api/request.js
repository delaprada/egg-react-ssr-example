import { axiosInstance } from './config';
import qs from 'qs';

export const getAllUserRequest = () => {
  return axiosInstance.get('/users');
};

export const searchUserRequest = (id) => {
  return axiosInstance.get(`/users/${id}`);
};

export const createUserRequest = ({ username, age }) => {
  return axiosInstance.post(
    '/users',
    qs.stringify({
      username,
      age,
    })
  );
};

export const updateUserRequest = (id, age) => {
  return axiosInstance.put(
    `/users/${id}`,
    qs.stringify({
      age,
    })
  );
};

export const deleteUserRequest = (id) => {
  return axiosInstance.delete(`/users/${id}`);
};
