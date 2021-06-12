import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import cn from "react-native-classnames";
import { MyText } from "./text/MyText";
import { Colors } from "../commons";

export const Button = (props) => {
  const containerStyles = () => {
    return cn(styles, "button_container", {
      dynamic: props.size === "DYNAMIC",
      small: props.size === "SMALL",
      medium: props.size === "MEDIUM",
      inline: props.inline,
    });
  };
  const buttonStyles = () => {
    return cn(styles, "button", {
      primary: props.kind === "PRIMARY",
      error: props.kind === "ERROR",
      success: props.kind === "SUCCESS",
      secondary: props.kind === "SECONDARY",
      disable: props.disable,
    });
  };
  const textStyles = () => {
    return cn(styles, "button_text", {
      gray: props.kind === "SECONDARY" && !props.disable,
    });
  };
  const handleOnPress = () => {
    !props.disable && props.onPress && props.onPress();
  };
  return (
    <Pressable
      style={[containerStyles(), props?.style]}
      onPress={handleOnPress}
    >
      <View style={buttonStyles()}>
        <MyText style={textStyles()}>{props.children}</MyText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button_container: {
    height: 50,
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
  secondary: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderWidth: 1,
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
  dynamic: {
    width: "100%",
  },
  small: {
    width: 50,
  },
  medium: {
    width: 100,
  },
  inline: {
    height: 32,
  },
  button_text: {
    color: Colors.WHITE,
  },
  gray: {
    color: Colors.GRAY,
  },
});
