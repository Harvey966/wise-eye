import { View, WebView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton, AtForm, AtIcon, AtInput } from "taro-ui";
import { useRef, useState, useEffect } from "react";
import WeValidator from "we-validator";
import { login } from "../../api/user";
import { textToVoice, imageToText } from "../../api/ai";
import { testList } from "../../api/article";

import "./index.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const audio = useRef();
  const iframeRef = useRef();
  const [url, setUrl] = useState("http://localhost:8080/?base64=");
  // const [base64Data, setBase64Data] = useState("");
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
  useEffect(() => {
    // let query = Taro.createSelectorQuery();
    // const iframeDom = window.document.querySelector(".iframe");
    // console.log("iframeDom", iframeDom);
    // const webview = Taro.webview.create();
    // console.log("webview", webview);
    // testyuyin();
  });
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
  const testyuyin = () => {
    // console.dir(iframeRef.current);
    textToVoice("测试成功1231")
      .then((res) => {
        console.log("res", res);
        // setBase64Data(res);
        // const buffer = Taro.base64ToArrayBuffer(res);
        // setUrl("http://localhost:8080/?buffer=" + res);
        // const blob = new File([buffer], "test.wav", {
        //   type: "audio/wav",
        // });
        // console.log("blob", blob);
        // let blobUrl = window.URL.createObjectURL(blob);
        // console.log("blobUrl", blobUrl);
        // audio.current.src = blobUrl;
        // audio.current.play(iframeRef.current.contentWindow);
        // console.dir();
        // console.log("audio", audio);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const testJWT = () => {
    testList()
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  function onWebLoad(e) {
    console.log("webview e", e);
  }
  async function chooseImage() {
    const res1 = await Taro.chooseImage({});
    console.log("res", res1);
    const filePath = res1.tempFilePaths[0];
    console.log("filePath", filePath);
    const base64Data = Taro.getFileSystemManager().readFileSync(
      filePath,
      "base64"
    );
    imageToText({ image: base64Data }).then((res) => {
      console.log("res", res);
    });
  }
  return (
    <>
      <view className="webview">
        {/* <WebView src={url} onLoad={onWebLoad} style={{ opacity: 0 }} /> */}
        <iframe src={url} frameborder="0"></iframe>
      </view>
      <View className="title">Wise-eye</View>
      <audio src="audio" ref={audio}></audio>
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
        <button onClick={testyuyin}>测试语音</button>
        <button onClick={testJWT}>测试JWT</button>
        <button onClick={chooseImage}>上传图片</button>
      </View>
    </>
  );
}
