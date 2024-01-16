import React from "react";
import { Button, Text, View } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title="Settings" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Settings;
