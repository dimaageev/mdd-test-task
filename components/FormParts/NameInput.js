import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NameInput = ({ data, name, setName }) => {
  const [hasError, setHasError] = useState(false);
  const regex = /[^A-Za-z, ""]/g;

  const handleChange = (value) => {
    value.length === data.validation.max
      ? setHasError(true)
      : setHasError(false);
    setName(value.replace(regex, ""));
    console.log(hasError, value.length, data.validation.max);
  };

  return (
    <View>
      <View style={styles.textInfo}>
        <Text style={styles.text}>{data.name}</Text>
        <Ionicons
          name="ios-information-circle-outline"
          size={22}
          onPress={() => {
            Alert.alert(data.description);
          }}
        />
      </View>
      <TextInput
        style={{
          ...styles.nameInput,
          borderColor: hasError ? "red" : "black",
        }}
        placeholder={data.tip}
        onChangeText={handleChange}
        value={name}
        maxLength={data.validation.max}
      />
      {name.length === data.validation.max && (
        <Text style={styles.errorText}>{data.validation.errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 30,
  },
  textInfo: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 30,
    marginRight: 15,
  },
  errorText: {
    color: "red",
    marginHorizontal: 30,
    marginTop: 0,
    marginBottom: 20,
  },
});

export default NameInput;
