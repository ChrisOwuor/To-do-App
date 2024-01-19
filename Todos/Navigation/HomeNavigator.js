// StackNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import TaskDetails from "../Screens/TaskDetails";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header title={"Homes"} />,
          headerStyle: {
            height: 120,
            shadowColor:"#fff"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: " Task Detail " }}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
