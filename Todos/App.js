import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Navigation/HomeNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  );
};



export default App;
