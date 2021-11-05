import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Form from "../components/Form";

const DiagnosticsScreen = (props) => {
  const { data } = props.route.params;

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <ScrollView>
      <View>
        <View style={styles.pickerContainer}>
          <Text style={styles.title}>Observation</Text>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={selectedLanguage}
              onValueChange={(value, index) => setSelectedLanguage(value)}
            >
              <Picker.Item label="🇺🇸 EN" value="english" />
              <Picker.Item label="🇷🇺 RU" value="russian" />
            </Picker>
          </View>
        </View>
        <Form
          lang={
            selectedLanguage === "russian"
              ? data.locales.ru
              : data.locales["en-us"]
          }
          selectedLanguage={selectedLanguage === "russian" ? "ru" : "en"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    marginLeft: 10,
  },
  picker: {
    width: "40%",
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default DiagnosticsScreen;
