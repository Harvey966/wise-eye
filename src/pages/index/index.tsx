import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { AtIcon, AtSearchBar, AtTabBar } from "taro-ui";
import "./index.scss";
import HomePage from "../home-page";
import UseInfo from "../user-info";

function Index() {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
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
  function changeTab(index) {
    setCurrent(index);
  }
  return (
    <View>
      {visible && (
        <View className="at-row home__view">
          <View className="at-col at-col-1 at-col-auto">
            <AtIcon
              className="home__icon"
              value="chevron-left"
              size="30"
              color="#9F9F9F"
              onClick={() => setVisible(false)}
            ></AtIcon>
          </View>
          <View className="at-col">
            <AtSearchBar
              className="home__search"
              value={value}
              onChange={changeSearch}
              onFocus={() => setVisible(true)}
            />
          </View>
        </View>
      )}
      {current === 0 && !visible && (
        <>
          <AtSearchBar
            value={value}
            onChange={changeSearch}
            onFocus={() => setVisible(true)}
          />{" "}
          <HomePage />
        </>
      )}
      {current === 1 && !visible && <UseInfo />}
      {!visible && (
        <AtTabBar
          className="home__footer"
          tabList={[
            { title: "首页", iconType: "home", text: "100", max: 99 },
            { title: "个人主页", iconType: "user", text: "new" },
          ]}
          onClick={changeTab.bind(this)}
          current={current}
        />
      )}
    </View>
  );
}
export default Index;
