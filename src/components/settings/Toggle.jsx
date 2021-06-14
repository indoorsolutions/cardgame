import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import { Colors } from "../../commons";
import { MyText } from "../text/MyText";

export const Toggle = (props) => {
  return (
    <View style={styles.toggle_container}>
      <MyText style={styles.text}>{props.text}</MyText>
      <Switch
        value={props.value}
        onValueChange={(value) => props.onChange(value)}
        trackColor={{ false: Colors.RED_LIGHT, true: Colors.GREEN_LIGHT }}
        thumbColor={props.value ? Colors.GREEN : Colors.RED}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggle_container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});
