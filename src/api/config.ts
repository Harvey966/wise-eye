import Taro from "@tarojs/taro";
import { axios, AxiosInstance, AxiosRequestConfig } from "taro-axios";

/* const baseURL = "http://106.13.8.36/api"; */
const baseURL = "http://localhost:3333";

const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 3000, //超时配置
    // withCredentials: true, //跨域携带cookie
    ...config,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    async function (config: any) {
      // 在请求头中添加jwt
      try {
        const jwt = (await Taro.getStorage({ key: "jwt" })) || null;
        console.log("jwt", jwt);
        if (jwt.data) config.headers.Authorization = jwt.data;
      } catch (err) {
        Promise.resolve(err);
      }

      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // console.log("response", response);
      // 对响应数据做点什么
      return response.data;
    },
    (err) => {
      if (err.response.status === 401) {
        console.log("登陆信息失效");
        Taro.reLaunch({
          url: "/pages/login/index",
        });
      }
    }
  );
  return instance;
};
export const request = createAxiosByinterceptors({ baseURL });
