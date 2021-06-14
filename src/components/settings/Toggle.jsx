import React from "react";
import { View, StyleSheet, SafeAreaView, Switch } from "react-native";
import { Heading } from "../../components/text/Heading";
import { Button } from "../../components/commons/Button";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../commons";
import { Player } from "../../components/settings/Player";
import { setRandomize } from "../../store/slices/settings";
import { MyText } from "../../components/text/MyText";

export const Toggle = (props) => {
  return (
    <View style={styles.toggle_container}>
      <MyText style={styles.text}>{props.text}</MyText>
      <Switch
        value={props.value}
        onValueChange={(value) => props.onChange(value)}
        trackColor={{ false: Colors.RED_LIGHT, true: Colors.GREEN_LIGHT }}
        thumbColor={props.value ? Colors.GREEN : Colors.RED}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toggle_container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});
