import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../../commons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Avatar = (props) => {
  return (
    <View style={[styles.avatar_container, props?.style]}>
      {props.image ? (
        <Image source={{ uri: props.image }} style={styles.avatar_image} />
      ) : (
        <MaterialCommunityIcons
          name={"account"}
          color={Colors.GRAY}
          size={32}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar_container: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderStyle: "solid",
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    marginRight: 8,
    justifyContent: "center",
  },
  avatar_image: {
    width: 36,
    height: 36,
    borderRadius: 100,
  },
});
