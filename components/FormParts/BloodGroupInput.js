import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const BloodGroupInput = ({ data, bloodGroup, setBloodGroup }) => {
  const bloodGroupPicker = data.options.map((item) => (
    <Picker.Item key={item.id} label={item.label} value={item.id} />
  ));

  return (
    <View>
      <View style={styles.textInfo}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.bloodPicker}>
        <Picker
          selectedValue={bloodGroup}
          onValueChange={(value) => setBloodGroup(value)}
        >
          {bloodGroupPicker}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bloodPicker: {
    width: "85%",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  textInfo: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 30,
    marginRight: 15,
  },
});

export default BloodGroupInput;
