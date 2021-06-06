import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { H1 } from "../components/text/H1";
import { H2 } from "../components/text/H2";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../components/Button";
import { Colors } from "../commons";

export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <H1>Settings</H1>
      </View>

      <Button kind={"PRIMARY"} onPress={() => {}}>
        Save
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
