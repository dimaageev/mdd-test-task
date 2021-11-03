import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppointmentsScreen from "../screens/AppointmentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DiagnosticsScreen from "../screens/DiagnosticsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Appointments") {
            iconName = "documents";
          } else if (route.name === "Profile") {
            iconName = "person-sharp";
          } else if (route.name === "Diagnostics") {
            iconName = "ios-construct-sharp";
          }
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          marginVertical: 10,
        },
      })}
    >
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Diagnostics"
        component={DiagnosticsScreen}
        initialParams={{ data: props.data }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
