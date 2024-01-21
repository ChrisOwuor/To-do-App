import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Navigation/HomeNavigator";
import MainDrawer from "./Drawer/Drawer";

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
};

export default App;
