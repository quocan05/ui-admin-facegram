import { IUser } from 'src/interfaces/user-interface';
import { ApiClient } from './api-client';
import { IPost } from 'src/interfaces/post-interface';

export const getAllPost = async () => {
  const response = await ApiClient.get(`/admin/posts`);
  return response.data;
};

export const filterPostByUserId = async (userId: IUser['_id']) => {
  const response = await ApiClient.get(`/admin/posts/filter?userId=${userId}`);
  return response.data;
};

export const deletePost = async (postId: IPost['_id']) => {
  const response = await ApiClient.delete(`/admin/posts/${postId}`);
  return response.data;
};

export const getPost = async (postId: IPost['_id']) => {
  const response = await ApiClient.get(`/admin/posts/${postId}`);
  return response.data;
};

export const editPost = async (postId: IPost['_id'], data: IPost) => {
  const response = await ApiClient.put(`/admin/posts/${postId}`, data);
  return response.data;
};
