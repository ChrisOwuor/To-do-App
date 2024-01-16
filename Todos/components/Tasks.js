import React from "react";
import { View, Text, FlatList } from "react-native";

function Tasks({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View className="bg-gray-200 rounded-sm  mt-5 px-2  py-4 h-28">
          <Text className="text-2xl pb-2 ">{item.title}</Text>
          <Text className="text-lg ">{item.content.slice(0, 50)}..</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default Tasks;
