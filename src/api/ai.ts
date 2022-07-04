import { axios } from "taro-axios";
import { request } from "./config";
import { createQueryString } from "./utils";
// 拼接signature
function createUrl(path) {
  const url = "https://api-wuxi-1.cmecloud.cn:8443" + path;
  const queryString = createQueryString(path);
  return `${url}?${queryString}`;
}

// 文字 => 语音
export function textToVoice(text) {
  return request.post("/api/ai/tts", { text });
}

// 图片 => 文字
export function imageToText(params) {
  const url = createUrl("/api/ocr/v1/general");
  return axios.post(url, params);
}
