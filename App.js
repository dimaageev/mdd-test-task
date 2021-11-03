import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigator/navigator";
import Header from "./components/Header";
import DATA from "./data/data";

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <TabNavigator data={DATA} />
    </NavigationContainer>
  );
}
