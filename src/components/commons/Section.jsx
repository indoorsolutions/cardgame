import React from "react";
import { StyleSheet, View } from "react-native";
import { MyText } from "../text/MyText";
import { Colors } from "../../commons";
import { HorizontalLine } from "./HorizontalLine";

export const Section = (props) => {
  return (
    <View style={styles.section}>
      <MyText style={styles.title}>{props.title}</MyText>
      <HorizontalLine />
      <View style={styles.content_wrapper}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    marginVertical: 12,
    padding: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: Colors.GRAY,
  },
  content_wrapper: {
    paddingVertical: 8,
  },
});
