import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import cn from "react-native-classnames";
import { MyText } from "../text/MyText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Cards, CardSides, Colors } from "../../commons";
import { Animated } from "react-native";
import { CardCorner } from "./CardCorner";

export const CardReverse = (props) => {
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
