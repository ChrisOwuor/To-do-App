import React from "react";
import { View, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View className=" flex-1 bg-green-200 flex-row ">
      <Text className="text-2xl">{title}</Text>
    </View>
  );
};

export default Header;
