import React from "react";
import { Text, View, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title="Profile" onPress={() => navigation.navigate("Tasks")} />
    </View>
  );
};

export default Profile;