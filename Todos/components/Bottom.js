import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Task from "../Screens/Task";
import Settings from "../Screens/Settings";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={Task} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Home" component={Home} />
      <View className="flex-1">
        <View
          className="  p-2 absolute bottom-0 w-full flex flex-row justify-around bg-gray-400
 "
        >
          <TouchableNativeFeedback onPress={() => navigation.navigate("Tasks")}>
            <Text className=" rounded-lg p-3 ">Tasks</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Settings")}
          >
            <Text className=" rounded-lg p-3">Settings</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate("Profile")}
          >
            <Text className=" rounded-lg p-3">Profile</Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </Tab.Navigator>
  );
}
