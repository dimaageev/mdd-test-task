import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const HasCovid = ({ data, hasCovid, setHasCovid }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        color="#2078e2"
        status={hasCovid ? "checked" : "unchecked"}
        onPress={() => {
          setHasCovid(!hasCovid);
        }}
      />
      <Text style={styles.text}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    width: "80%",
    marginHorizontal: 15,
  },
});

export default HasCovid;
