import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { AtSearchBar } from "taro-ui";
import "./index.scss";
import NewsList from "../../component/newsList";
import { login } from "../../api/user";

function Index() {
  const [value, setValue] = useState("");
  const changeSearch = (e) => {
    console.log(e);
  };
  useEffect(() => {
    login()
      .then((res) => {
        console.log("请求结果", res);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
  });
  return (
    <View className="main">
      <AtSearchBar value={value} onChange={changeSearch} />
      <NewsList />
    </View>
  );
}
export default Index;
