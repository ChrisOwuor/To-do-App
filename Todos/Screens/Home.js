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
    <View className="px-1 bg-white">
      <Text>Home</Text>
      {/* <FlatList
        data={todoData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("TaskDetails", item)}
          >
            <View className=" rounded-sm  mt-5 px-2  py-4 h-36 flex justify-start flex-row space-x-3 0">
              <View className="icon rounded-full bg-purple-500 h-12 aspect-square  justify-center items-center ">
                <Text className="text-3xl">{item.title.slice(0, 1)}</Text>
              </View>
              <View className="task   flex-1">
                <Text className="text-2xl pb-2 ">{item.title}</Text>
                <Text className="text-lg ">{item.content.slice(0, 50)}..</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};
export default Home;
