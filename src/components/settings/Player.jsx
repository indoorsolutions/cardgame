import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../commons/Button";
import { MyText } from "../text/MyText";
import { Avatar } from "../avatar/Avatar";

export const Player = (props) => {
  return (
    <View style={styles.player_container}>
      <Avatar image={props.avatar} />
      <MyText style={styles.player_name}>{props.name}</MyText>
      <Button
        kind={"SECONDARY"}
        size={"MEDIUM"}
        inline={true}
        onPress={props.onEditClick}
        style={styles.edit_button}
      >
        Edit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  player_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  player_name: {
    fontSize: 18,
    lineHeight: 24,
  },
  edit_button: {
    marginLeft: "auto",
  },
});
