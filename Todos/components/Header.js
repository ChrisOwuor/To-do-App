import React from "react";
import { View, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View className="justify-start ">
      <Text className="text-2xl">{title}</Text>
    </View>
  );
};

export default Header;
