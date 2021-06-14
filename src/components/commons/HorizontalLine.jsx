import React from "react";
import { StyleSheet, View } from "react-native";
import { MyText } from "../text/MyText";
import { Colors } from "../../commons";

export const HorizontalLine = () => {
  return <View style={styles.horizontal_line}></View>;
};

const styles = StyleSheet.create({
  horizontal_line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    marginVertical: 8,
  },
});
