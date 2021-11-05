import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TemperatureInput = ({ data, temperature, setTemperature }) => {
  const [hasError, setHasError] = useState(false);
  const regex = /[^0-9, "."]/g;

  const handleChange = (value) => {
    (value && value < 34) || value > 42
      ? setHasError(true)
      : setHasError(false);
    setTemperature(value.replace(regex, ""));
  };

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
        onChangeText={handleChange}
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
