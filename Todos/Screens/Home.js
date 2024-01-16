import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { todoData } from "../Data/Data";

const Home = () => {
  return (
    <View className="p-1">
      <Tasks data={todoData} />
    </View>
  );
};

export default Home;
