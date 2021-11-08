import React, { useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { useValidator } from "../../validation/validator";

const TemperatureInput = ({ data, type, globalData, setGlobalData }) => {
  const [hasError, handleChange, name, temperature] = useValidator();

  useEffect(() => {
    setGlobalData({ ...globalData, bodyTemperature: temperature });
  }, [temperature]);

  return (
    <View>
      <View style={styles.textInfo}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <TextInput
        style={{
          ...styles.tempInput,
          borderColor: hasError ? "red" : "black",
        }}
        keyboardType="decimal-pad"
        placeholder={data.tip}
        onChangeText={(value) => handleChange(value, type)}
        value={temperature.toString()}
        maxLength={4}
      />
      {((temperature && temperature < 34) || temperature > 42) && (
        <Text style={styles.errorText}>{data.validation.errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tempInput: {
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

export default TemperatureInput;
