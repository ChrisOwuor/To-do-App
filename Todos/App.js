import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header.js";


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mojo Music" />
      <View style={styles.content}>
        <Text>Main Content Goes Here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"blue"
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default App;
