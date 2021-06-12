import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../commons";

export const CardReverse = () => {
  return (
    <View style={styles.reverse}>
      <MaterialCommunityIcons
        size={80}
        color={Colors.GRAY}
        name={"cards-playing-outline"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reverse: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 5,
    padding: 8,
    transform: [{ rotateY: "180deg" }],
  },
});
