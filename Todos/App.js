import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header.js";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./components/BottomNavigator.js";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mojo Music" />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default App;
