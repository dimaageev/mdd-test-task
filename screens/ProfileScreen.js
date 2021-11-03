import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Your Profile 👤</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
