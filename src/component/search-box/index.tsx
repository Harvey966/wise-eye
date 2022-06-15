import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { AtSearchBar, AtTabBar } from "taro-ui";
import "./index.scss";
import NewsList from "../../component/news-list";
import Taro from "@tarojs/taro";

export default function SearchBox() {
  const [value, setValue] = useState("");
  const changeSearch = (e) => {
    console.log(e);
  };
  function handleFocus() {
    Taro.navigateTo({
      url: "/pages/search/index",
    });
  }
  return (
    <View>
      <AtSearchBar className="fix" showActionButton value={value} onChange={changeSearch} onFocus={handleFocus} />
    </View>
  );
};
