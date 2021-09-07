import axios, { AxiosRequestConfig } from "axios";
import "@/mock";
import { BASE_URL, TIMEOUT } from "@/config/axios";
// 设置全局baseUrl以及默认配置
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 添加请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // console.log("请求被拦截");
    // console.log(config);
    config.headers.Authotization = localStorage.getItem("token");
    // options.headers={
    //   ...loadOptions.headers,
    //   Authotization:localStorage.getItem('token')
    // }
    return config;
  },
  error => {
    throw new Error(error);
  }
);

// 添加响应拦截
instance.interceptors.response.use(
  res => {
    console.log(res);
    return res.data;
  },
  error => {
    return error;
  }
);

export default instance;
