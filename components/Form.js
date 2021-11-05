import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import NameInput from "./FormParts/NameInput";
import DateInput from "./FormParts/DateInput";
import BloodGroupInput from "./FormParts/BloodGroupInput";
import TemperatureInput from "./FormParts/TemperatureInput";
import HasCovid from "./FormParts/HasCovid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [bloodGroup, setBloodGroup] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [hasCovid, setHasCovid] = useState(false);

  let nameInputData = props.lang.fields[0];
  let dateInputData = props.lang.fields[1];
  let bloodGroupInputData = props.lang.fields[2];
  let temperatureInputData = props.lang.fields[3];
  let covidInputData = props.lang.fields[4];

  const diagnosticReport = {
    name: name,
    birthDate: date,
    bloodType: bloodGroup,
    bodyTemperature: temperature,
    hasCovid: hasCovid,
  };

  return (
    <View style={styles.main}>
      <NameInput data={nameInputData} name={name} setName={setName} />

      <DateInput data={dateInputData} date={date} setDate={setDate} />

      <BloodGroupInput
        data={bloodGroupInputData}
        bloodGroup={bloodGroup}
        setBloodGroup={setBloodGroup}
      />

      <TemperatureInput
        data={temperatureInputData}
        temperature={temperature}
        setTemperature={setTemperature}
      />

      <HasCovid
        data={covidInputData}
        hasCovid={hasCovid}
        setHasCovid={setHasCovid}
      />

      <Pressable
        style={styles.button}
        onPress={() => console.log(diagnosticReport)}
      >
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
