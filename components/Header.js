import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CE86F0",
    elevation: 10,
  },
  image: {
    width: "100%",
    height: 80,
    resizeMode: "center",
    marginHorizontal: 100,
    marginTop: 20,
  },
});

export default Header;
