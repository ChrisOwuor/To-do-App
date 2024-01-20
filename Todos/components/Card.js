import React from "react";
import { Text, View } from "react-native";

export default function Card(props) {
  return (
    <View className=" rounded-sm  mt-5 px-2  py-4 h-28 mx-2 flex-1 mb-2 ">
      {props.children}
    </View>
  );
}
