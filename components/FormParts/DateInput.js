import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateInput = ({ data, date, setDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <View>
      <View style={styles.textInfo}>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View>
        <Pressable onPress={showMode}>
          <Text style={styles.date}>{data.tip}</Text>
        </Pressable>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    width: "80%",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 30,
    color: "grey",
  },
  textInfo: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 30,
    marginRight: 15,
  },
});

export default DateInput;
