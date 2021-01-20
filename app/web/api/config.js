import axios from 'axios';

export const baseUrl = '/';

const axiosInstance = axios.create({
  baseUrl: baseUrl,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  }
);

export {
  axiosInstance,
};