import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
import { categoryList } from "../../const/index";

const NavList = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleClick(index) {
    setCurrentIndex(index);
    console.log("index", index);
    props.fetchList(currentIndex);
  }
  return (
    <View className="nav-list">
      {categoryList.map((v, index) => {
        return (
          <View
            className={["item", index === currentIndex ? "active" : ""]}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {v}
          </View>
        );
      })}
    </View>
  );
};
export default NavList;
