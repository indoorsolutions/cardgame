import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MyText } from "../text/MyText";
import { Colors } from "../../commons";

export const InputText = (props) => {
  return (
    <View style={styles.wrapper}>
      <MyText style={styles.label}>{props.label}</MyText>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 16,
  },
  input: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 4,
    marginTop: 4,
    backgroundColor: Colors.WHITE,
  },
  label: {
    color: Colors.GRAY,
  },
});
