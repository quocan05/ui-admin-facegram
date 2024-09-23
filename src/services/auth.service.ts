import { IUserLogin } from 'src/interfaces/user-interface';
import { ApiClient } from './api-client';
import { RoutePaths } from 'src/routes/route-constant';

export const authLogout = async () => {
  await localStorage.clear();
  await sessionStorage.clear();
  window.location.href = RoutePaths.AUTH;
};

export const authLogoutNoPermission = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const authLogin = async (param: IUserLogin) => {
  const response = await ApiClient.post('/auth/login', param);
  return response.data;
};
