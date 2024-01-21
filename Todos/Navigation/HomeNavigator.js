// StackNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import TaskDetails from "../Screens/TaskDetails";
import Header from "../components/Header";
import { View, Text } from "react-native";
import react from "react";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={(navigaion) => ({
          header: () => <Header title="Mojo" navigation={navigaion} />,
        })}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={() => ({
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
