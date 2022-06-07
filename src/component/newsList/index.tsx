import { View, Text } from "@tarojs/components";
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

function NewsList() {
  return (
    <View className="list">
      {listMock.map((v, index) => {
        return (
          <View className="item" key={index}>
            <View className="number">{index + 1}</View>
            <View className="title">{v.title}</View>
          </View>
        );
      })}
    </View>
  );
}
export default NewsList;
