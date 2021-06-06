import React from "react";
import { StyleSheet, Text } from "react-native";
import { MyText } from "./MyText";

export const H2 = (props) => {
  return <MyText style={[styles.h2, props.style]}>{props.children}</MyText>;
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
});
