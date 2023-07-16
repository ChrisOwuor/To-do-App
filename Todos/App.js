import { StatusBar } from "expo-status-bar";
import { Text,  ScrollView } from "react-native";
import AddView from "./Hello";

export default function App() {
  return (
    <ScrollView className="outline outline-1 flex-1 align-top ">
      <View className="">

      </View>
      <Text className=" mt-6 bg-teal-200 p-6 m-4 rounded-md">
        Discover the world of limitless possibilities with react native
      </Text>
      <Text className=" mt-6 bg-teal-200 p-6 m-4 rounded-md">
        Discover the world of limitless possibilities with react native
      </Text>
      <Text className="mt-6 bg-teal-200 p-6 m-4 rounded-md ">I love this React native</Text>
      <AddView/>

      <StatusBar style="auto" />
    </ScrollView>
  );
}


