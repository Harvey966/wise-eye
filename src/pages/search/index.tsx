import { View } from "@tarojs/components";
import { useState } from "react";
import { AtSearchBar } from "taro-ui";
import "./index.scss";

export default function Search() {
  const [keyword, setKeyword] = useState('')
  function onChange (value) {
    setKeyword(value)
  }
  function onActionClick () {
    console.log('开始搜索')
  }
  return (
    <View>
      <AtSearchBar
        showActionButton
        value={keyword}
        onChange={onChange.bind(this)}
        onActionClick={onActionClick.bind(this)}
      />
    </View>
  );
}
