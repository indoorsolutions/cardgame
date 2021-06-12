import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../commons";

export const MyText = (props) => {
  return <Text style={[styles.text, props?.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: Colors.GRAY_DARK,
  },
});
