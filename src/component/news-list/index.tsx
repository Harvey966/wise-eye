import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { addClickLog } from "../../api/user";
import "./index.scss";

const NewsList = (props) => {
  async function handleClick(item) {
    const res = await addClickLog({
      click_article_id: item.article_id,
      click_timestamp: new Date().getTime(),
    });
    console.log("res返回", res);
    Taro.navigateTo({
      url: `/pages/article/index?article=` + JSON.stringify(item),
    });
  }
  return (
    <View className="list">
      {props.dataList.map((v, index) => {
        return (
          <View
            className="item"
            key={v.article_id}
            onClick={() => {
              handleClick(v);
            }}
          >
            <View className="number">{index + 1}</View>
            <View className="title">{v.title}</View>
          </View>
        );
      })}
    </View>
  );
};
export default NewsList;
