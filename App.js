import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabsScreen } from "./src/screens/TabsScreen";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createStackNavigator } from "@react-navigation/stack";
import { UpdatePlayerScreen } from "./src/screens/UpdatePlayerScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer styles={styles}>
        <Stack.Navigator initialRouteName={"CardGame"}>
          <Stack.Screen
            name={"CardGame"}
            component={TabsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={"Settings"}
            component={SettingsScreen}
            options={{ title: "Settings" }}
          />
          <Stack.Screen
            name={"UpdatePlayer"}
            component={UpdatePlayerScreen}
            options={{ title: "Update Player" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
