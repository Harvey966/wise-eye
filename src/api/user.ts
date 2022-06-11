import { request } from "./config";

// 登陆
export const login = () => {
  return request.get("/user/login");
};

// 未读消息接口
export const noticeCount = (params) => {
  return request.get("leave/count");
};
