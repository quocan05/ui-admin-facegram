/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseConfig } from 'src/configs/base-config';
import { EAuthToken } from 'src/variables/storage';

const requestHandler = (config: AxiosRequestConfig) => {
  const atk = localStorage.getItem(EAuthToken.ACCESS_TOKEN);

  const configHeaders = {
    Authorization: atk ? `Bearer ${atk}` : '',
    ...config.headers,
  };

  config.headers = configHeaders;

  config.params = {
    ...config.params,
  };

  return config;
};

const responseErrorHandler = async (err: AxiosError) => {
  return Promise.reject(err);
};

const responseSuccessHandler = async (response: AxiosResponse) => {
  return response;
};
const axiosInstance = axios.create({
  baseURL: baseConfig.baseURL,
});
axiosInstance.interceptors.request.use(requestHandler, (err) => Promise.reject(err));
axiosInstance.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export { axiosInstance as ApiClient };
