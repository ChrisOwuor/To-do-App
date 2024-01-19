import React from "react";
import { Text, View } from "react-native";
import Card from "../components/Card";

const TaskDetails = ({ route }) => {
  const { title, content } = route.params;

  return (
    <View className="flex-1  bg-white">
      <Card>
        <Text>{title}</Text>
        <Text>{content}</Text>
      </Card>
    </View>
  );
};

export default TaskDetails;
