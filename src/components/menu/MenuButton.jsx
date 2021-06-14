import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { Colors } from "../../commons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const MenuButton = (props) => {
  return (
    <Pressable style={styles.menu_button} onPress={props.onPress}>
      <MaterialCommunityIcons name={"menu"} color={Colors.GRAY} size={32} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menu_button: {
    marginTop: 16,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
});
