import { View } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import SearchBox from "../../component/search-box";
import "./index.scss";
import NewsList from "../../component/news-list";

export default function HomePage() {
 /*  const [value, setValue] = useState("");
  const changeSearch = (e) => {
    console.log(e);
  };
  function handleFocus() {
    Taro.navigateTo({
      url: "/pages/search/index",
    });
  } */
  return (
    <View>
      <SearchBox />
      <NewsList />
    </View>
  );
};
