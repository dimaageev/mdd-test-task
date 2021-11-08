import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useValidator } from "../../validation/validator";

const NameInput = ({ data, type, globalData, setGlobalData }) => {
  const [hasError, handleChange, name, temperature] = useValidator();

  useEffect(() => {
    setGlobalData({ ...globalData, name: name });
  }, [name]);

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
        onChangeText={(value) => handleChange(value, type)}
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
