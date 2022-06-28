import { request } from "./config";

export const testList = () => {
  return request.post("/api/article/list");
};
