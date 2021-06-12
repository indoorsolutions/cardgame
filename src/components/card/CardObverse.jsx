import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../commons";
import { CardCorner } from "./CardCorner";

export const CardObverse = (props) => {
  return (
    <View style={[styles.obverse, props?.style]}>
      <View style={styles.align_left}>
        <CardCorner text={"A"} icon={props.icon} color={props.color} />
      </View>
      <View style={styles.center}>
        <MaterialCommunityIcons
          name={props.icon}
          color={props.color}
          size={48}
        />
      </View>
      <View style={styles.align_right}>
        <CardCorner
          text={"A"}
          icon={props.icon}
          color={props.color}
          style={styles.upside_down}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  obverse: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 5,
    padding: 8,
  },
  align_left: {
    width: "100%",
    alignItems: "flex-start",
  },
  align_right: {
    width: "100%",
    alignItems: "flex-end",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upside_down: {
    transform: [{ rotate: "180deg" }],
  },
});
