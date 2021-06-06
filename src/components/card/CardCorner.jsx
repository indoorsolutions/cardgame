import React from "react";
import { StyleSheet, View } from "react-native";
import { MyText } from "../text/MyText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const CardCorner = (props) => {
  return (
    <View style={[styles.corner, props?.style]}>
      <MyText style={styles.card_text}>{props.text}</MyText>
      <MaterialCommunityIcons name={props.icon} color={props.color} size={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  corner: {
    justifyContent: "center",
    alignItems: "center",
  },
  card_text: {
    fontSize: 16,
  },
});
