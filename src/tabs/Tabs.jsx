import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { GameScreen } from "../screens/GameScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SettingsScreen } from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Welcome"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Welcome: "information",
            Game: "cards-playing-outline",
            Settings: "cog-outline",
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tab.Screen name={"Game"} component={GameScreen} />
      <Tab.Screen name={"Welcome"} component={WelcomeScreen} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
