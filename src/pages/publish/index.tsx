import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { AtSearchBar, AtTabBar } from "taro-ui";
import "./index.scss";
import NewsList from "../../component/news-list";
import { login } from "../../api/user";

function Index() {
  const [value, setValue] = useState("");
  const [current, setCurrent] = useState(1);
  const changeSearch = (e) => {
    console.log(e);
  };
  /* useEffect(() => {
    login()
      .then((res) => {
        console.log("请求结果", res);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
  }); */
  function handleClick(index) {
    console.log(index)
    setCurrent(index);
  }
  return (
    <View className='main'>
      <AtSearchBar value={value} onChange={changeSearch} />
      <NewsList />
      <AtTabBar
        className='home__footer'
        tabList={[
          { title: "首页", iconType: "home", text: "100", max: 99 },
          { title: "发布", iconType: "add" },
          { title: "个人主页", iconType: "user", text: "new" },
        ]}
        onClick={handleClick.bind(this)}
        current={current}
      />
    </View>
  );
}
export default Index;
