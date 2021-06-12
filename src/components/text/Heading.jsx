import React from "react";
import { StyleSheet } from "react-native";
import { MyText } from "./MyText";
import cn from "react-native-classnames";

export const Heading = (props) => {
  return (
    <MyText
      style={[
        cn(styles, { h1: props.size === "H1", h2: props.size === "H2" }),
        props.style,
      ]}
    >
      {props.children}
    </MyText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 8,
  },
  h2: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
});
