import { StatusBar } from "expo-status-bar";

import { View, Text } from "react-native";

const AddView = () => {
  return (
    <View>
      <Text className="mt-6 bg-teal-200 p-6 m-4 rounded-md">
        Welcome to juvie hugo
      </Text>
      <Text className="mt-6 bg-teal-200 p-6 m-4 rounded-md">
        I love this React native scli so much
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default AddView;
