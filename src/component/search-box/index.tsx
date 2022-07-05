import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtSearchBar } from "taro-ui";
import "./index.scss";

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
      <AtSearchBar
        className="fix"
        showActionButton
        value={value}
        onChange={changeSearch}
        onFocus={handleFocus}
      />
    </View>
  );
}
