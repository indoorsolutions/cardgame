import React from "react";
import { StyleSheet, Text } from "react-native";
import { MyText } from "./MyText";

export const H1 = (props) => {
  return <MyText style={[styles.h1, props.style]}>{props.children}</MyText>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 8,
  },
});
