import { axios, AxiosInstance, AxiosRequestConfig } from "taro-axios";

const baseURL = "http://106.13.8.36/api";

const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 1000, //超时配置
    // withCredentials: true, //跨域携带cookie
    ...config,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      // 在发送请求之前做些什么
      // console.log("config:", config);
      // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response.data;
  });
  return instance;
};
export const request = createAxiosByinterceptors({ baseURL });
