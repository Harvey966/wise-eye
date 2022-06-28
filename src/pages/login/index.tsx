import { View } from "@tarojs/components";
import { useState } from "react";
import WeValidator from "we-validator";
import { login } from "../../api/user";
import { testList } from "../../api/article";
import { AtButton, AtForm, AtIcon, AtInput } from "taro-ui";
import "./index.scss";
import Taro from "@tarojs/taro";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit() {
    let value = {
      username: username,
      password: password,
    };
    console.log(value);
    console.log(rule);
    if (rule.checkData(value)) {
      login(value).then((res) => {
        console.log("res", res);
      });
    } else {
      console.log(2);
    }
    if (!rule.checkData(value)) return;
  }
  function handleClick() {
    Taro.navigateTo({
      url: "/pages/register/index",
    });
  }
  const rule = new WeValidator({
    rules: {
      username: {
        required: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      username: {
        required: "请输入用户名",
      },
      password: {
        required: "请输入密码",
      },
    },
  });
  const testJWT = () => {
    testList().then((res) => {
      console.log("res", res);
    });
  };
  return (
    <>
      <View className="title">Wise-eye</View>
      <View className="content">
        <AtInput
          name="username"
          title="用户名"
          type="text"
          placeholder="请输入用户名"
          value={username}
          onChange={(value: string) => {
            setUsername(value);
          }}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={(value: string) => {
            setPassword(value);
          }}
        />
        <AtButton className="btn" onClick={onSubmit}>
          登录
        </AtButton>
        <View className="mark" onClick={handleClick}>
          没有账号？立即去注册
        </View>
        <button onClick={testJWT}>测试JWT</button>
      </View>
    </>
  );
}
