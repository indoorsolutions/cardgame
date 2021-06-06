import React from "react";
import { StyleSheet, Text } from "react-native";

export const MyText = (props) => {
  return <Text style={[styles.text, props?.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#212121",
  },
});
