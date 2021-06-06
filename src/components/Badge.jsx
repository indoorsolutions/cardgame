import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import cn from "react-native-classnames";
import { MyText } from "./text/MyText";
import { Colors } from "../commons";

export const Badge = (props) => {
  return (
    <View style={styles.badge}>
      <MyText style={styles.badge_text}>{props.children}</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 100,
    backgroundColor: Colors.RED,
  },
  badge_text: {
    fontSize: 16,
    color: Colors.WHITE,
  },
});
