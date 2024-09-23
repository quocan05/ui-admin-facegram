import { IUser } from 'src/interfaces/user-interface';
import { ApiClient } from './api-client';

export const getUsersPagination = async (limit?: number, offset?: number) => {
  const response = await ApiClient.get(`/admin/users?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await ApiClient.get(`/admin/users`);
  return response.data;
};

export const getUser = async (userId: IUser['_id']) => {
  const response = await ApiClient.get(`/users/${userId}`);
  return response.data;
};

export const createUser = async (data: IUser) => {
  const response = await ApiClient.post(`/auth/register`, data);
  return response.data;
};

export const editUser = async (userId: IUser['_id'], data: any) => {
  const response = await ApiClient.put(`/admin/users/${userId}`, data);
  return response.data;
};

export const deleteUser = async (userId: IUser['_id']) => {
  const response = await ApiClient.delete(`/admin/users/${userId}`);
  return response.data;
};
