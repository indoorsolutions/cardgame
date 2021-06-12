import React from "react";
import { StyleSheet, View } from "react-native";
import { MyText } from "./text/MyText";
import { Colors } from "../commons";

export const Badge = (props) => {
  return (
    <View style={styles.badge}>
      <View style={styles.icon}>{props.icon}</View>
      <MyText style={styles.badge_text}>{props.text}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    borderRadius: 100,
    backgroundColor: Colors.RED,
  },
  badge_text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
