import { View, Text } from "@tarojs/components";
import "./index.scss";
import NewsList from "../../component/newsList";

function Index() {
  return (
    <View className="main">
      <NewsList />
    </View>
  );
}
export default Index;
