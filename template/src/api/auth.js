import apiPrefix from './apiPrefix';
import axiosInstance from './axios';

const loginApi = data => {
  return axiosInstance.post(apiPrefix.LOGIN, data);
};

export {loginApi};
