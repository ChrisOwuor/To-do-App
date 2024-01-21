import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";
import HomeNavigator from "../Navigation/HomeNavigator";

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={<HomeNavigator />} />
      <Drawer.Screen name="Profile" component={<Profile />} />
      <Drawer.Screen name="settings" component={<Settings />} />
    </Drawer.Navigator>
  );
}
