import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import "./index.scss";
import NewsList from "../../component/news-list";
import NavList from "../../component/nav-list";
import { getArticles } from "../../api/article";

export default function HomePage() {
  const [query, setQuery] = useState({
    category_id: -1,
    limit: 10,
    offset: 0,
  });
  const [dataList, setDataList] = useState([]);
  const fetchList = async () => {
    const { list, offset } = await getArticles(query);
    setDataList(list);
    setQuery({
      ...query,
      offset,
    });
    console.log("list", list);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <View>
      <NavList
        fetchList={(currentIndex) => {
          setQuery({
            ...query,
            category_id: currentIndex - 1,
          });
          fetchList();
        }}
      />
      <NewsList dataList={dataList} />
    </View>
  );
}
