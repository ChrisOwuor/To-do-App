import React from "react";
import { Text, View, Button } from "react-native";

const Task = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title="Tasks" onPress={() => navigation.navigate("Tasks")} />
    </View>
  );
};

export default Task;
