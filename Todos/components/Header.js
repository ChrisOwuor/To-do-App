import React from "react";
import { View, Text ,Button } from "react-native";

const Header = ({ title ,navigation }) => {
  return (
    <View className="pl-3 h-max flex justify-start flex-row pt-12  ">
      <Text className="text-2xl ">{title}</Text>
    </View>
  );
};

export default Header;
