import { request } from "./config";

export const getArticles = (params) => {
  return request.post("/api/article/getArticles", params);
};
