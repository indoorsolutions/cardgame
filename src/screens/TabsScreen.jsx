import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WelcomeScreen } from "./tabs/WelcomeScreen";
import { GameScreen } from "./tabs/GameScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../commons";

const Tab = createBottomTabNavigator();

export const TabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Welcome"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Welcome: "information",
            Game: "cards-playing-outline",
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
      tabBarOptions={{ activeTintColor: Colors.RED }}
    >
      <Tab.Screen name={"Game"} component={GameScreen} />
      <Tab.Screen name={"Welcome"} component={WelcomeScreen} />
    </Tab.Navigator>
  );
};
