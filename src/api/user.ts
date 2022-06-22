import { request } from "./config";

// 登陆
export const login = () => {
  return request.get("/api/user/login");
};

// 注册
export const register = (params) => {
  return request.post("/api/user/register", params);
};

// 未读消息接口
export const noticeCount = (params) => {
  return request.get("leave/count");
};
