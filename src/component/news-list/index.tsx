import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const listMock = [
  {
    title: "媒体评宾利车位风波：已成反腐线索",
  },
  {
    title: "媒体评宾利车位风波：已成反腐线索",
  },
  {
    title: "媒体评宾利车位风波：已成反腐线索",
  },
  {
    title: "媒体评宾利车位风波：已成反腐线索",
  },
];

const NewsList = () => {
  function handleClick() {
    Taro.navigateTo({
      url: "/pages/article/index",
    });
  }
  return (
    <View className="list">
      {listMock.map((v, index) => {
        return (
          <View className="item" key={index} onClick={handleClick}>
            <View className="number">{index + 1}</View>
            <View className="title">{v.title}</View>
          </View>
        );
      })}
    </View>
  );
};
export default NewsList;
