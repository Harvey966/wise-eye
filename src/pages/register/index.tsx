import { View } from "@tarojs/components";
import { useState } from "react";
import WeValidator from "we-validator";
import { register, login } from "../../api/user";
import { AtButton, AtForm, AtIcon, AtInput } from "taro-ui";
import "./index.scss";
import Taro from "@tarojs/taro";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  function onSubmit() {
    let value = {
      username: username,
      password: password,
      confirmPwd: confirmPwd
    };
    console.log(value);
    console.log(rule);
    if (rule.checkData(value)) {
      console.log(1);
      register(value)
      .then((res) => {
        console.log("请求结果", res);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    } else {
      console.log(2);
    }
    if (!rule.checkData(value)) return;
  }
  function handleClick() {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  }
  const rule = new WeValidator({
    rules: {
      /* username: {
        required: true,
        minlength: 6,
        maxlength: 16
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 16
      },
      confirmPwd: {
        required: true,
        equalTo: 'password'
      } */
    },
    messages: {
      username: {
        required: "请输入用户名",
        minlength: "用户名过短，长度应为6-16位",
        maxlength: "用户名过长，长度应为6-16位"
      },
      password: {
        required: "请输入密码",
        minlength: "密码过短，长度应为6-16位",
        maxlength: "密码过长，长度应为6-16位"
      },
      confirmPwd: {
        required: "请输入确认密码",
        equalTo: '密码与确认密码不一致'
      },
    },
  });
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
        <AtInput
          name="confirmPwd"
          title="确认密码"
          type="password"
          placeholder="请输入确认密码"
          value={confirmPwd}
          onChange={(value: string) => {
            setConfirmPwd(value);
          }}
        />
        <AtButton className="btn" onClick={onSubmit}>
          注册
        </AtButton>
        <View className="mark" onClick={handleClick}>
          已有账号？立即去登录
        </View>
      </View>
    </>
  );
}
