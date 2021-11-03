import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AppointmentsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Your Appointments 📅</Text>
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

export default AppointmentsScreen;
