import { View } from "@tarojs/components";
import { useState } from "react";
import "./index.scss";
import NewsList from "../../component/news-list";

export default function HomePage() {
  return (
    <View>
      <NewsList />
    </View>
  );
};
