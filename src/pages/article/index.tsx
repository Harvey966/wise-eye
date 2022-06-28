import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.scss";

const listMock = {
  title: "媒体评宾利车位风波：已成反腐线索",
  content:
    "文字是人类用符号记录表达信息以传之久远的方式和工具。现代文字大多是记录语言的工具。人类往往先有口头的语言后产生书面文字，很多小语种，有语言但没有文字。文字的不同体现了国家和民族的书…"
};

const Article = () => {
  return (
    <View className="main">
      <AtIcon
        value="play"
        size="50"
        color="#C1C1C1"
        className="main__icon"
      ></AtIcon>
      <View className="main__title">{listMock.title}</View>
      <View className="main__content">{listMock.content}</View>
    </View>
  );
};
export default Article;
