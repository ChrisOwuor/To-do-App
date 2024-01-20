// StackNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import TaskDetails from "../Screens/TaskDetails";
import Header from "../components/Header";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const AboutNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          header: () => <Header title="Mojo " />,
          headerStyle: { height: 8, backgroundColor: "red" },
        })}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: " Task Detail ", headerShadowVisible: false }}
      />
    </Stack.Navigator>
  );
};
export default AboutNavigator;
