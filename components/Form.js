import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import NameInput from "./FormParts/NameInput";
import DateInput from "./FormParts/DateInput";
import BloodGroupInput from "./FormParts/BloodGroupInput";
import TemperatureInput from "./FormParts/TemperatureInput";
import HasCovid from "./FormParts/HasCovid";

const Form = (props) => {
  let nameInputData = props.lang.fields[0];
  let dateInputData = props.lang.fields[1];
  let bloodGroupInputData = props.lang.fields[2];
  let temperatureInputData = props.lang.fields[3];
  let covidInputData = props.lang.fields[4];

  const [globalData, setGlobalData] = useState({});

  return (
    <View style={styles.main}>
      <NameInput
        data={nameInputData}
        type="name"
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <DateInput
        data={dateInputData}
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <BloodGroupInput
        data={bloodGroupInputData}
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <TemperatureInput
        data={temperatureInputData}
        type="temperature"
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <HasCovid
        data={covidInputData}
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <Pressable style={styles.button} onPress={() => console.log(globalData)}>
        <Text style={styles.text}>
          {props.selectedLanguage === "en" ? "Save" : "Сохранить"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    marginLeft: "60%",
    marginRight: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#2078e2",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default Form;
