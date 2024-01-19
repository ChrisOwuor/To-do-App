import React from "react";
import { todoData } from "../Data/Data";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View className="p-1 bg-white">
      <FlatList
        data={todoData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("TaskDetails", item)}
          >
            <View className="bg-gray-200 rounded-sm  mt-5 px-2  py-4 h-28">
              <Text className="text-2xl pb-2 ">{item.title}</Text>
              <Text className="text-lg ">{item.content.slice(0, 50)}..</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
