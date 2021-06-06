import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import cn from "react-native-classnames";
import { MyText } from "./text/MyText";
import { Colors } from "../commons";

export const Button = (props) => {
  const buttonStyles = () => {
    return cn(styles, "button", {
      primary: props.kind === "PRIMARY",
      error: props.kind === "ERROR",
      success: props.kind === "SUCCESS",
      disable: props.disable,
    });
  };
  return (
    <Pressable
      style={styles.button_container}
      onPress={props.disable ? () => {} : props.onPress}
    >
      <View style={buttonStyles()}>
        <MyText style={styles.button_text}>{props.children}</MyText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button_container: {
    width: "100%",
    height: 40,
    marginTop: 48,
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: Colors.BLUE,
  },
  success: {
    backgroundColor: Colors.GREEN,
  },
  error: {
    backgroundColor: Colors.RED,
  },
  disable: {
    backgroundColor: Colors.GRAY,
  },
  button_text: {
    color: Colors.WHITE,
  },
});
