import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Colors } from "../../commons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MyText } from "../text/MyText";
import { HorizontalLine } from "../commons/HorizontalLine";

export const MenuList = (props) => {
  return (
    <View style={styles.menu_list}>
      {props.items.map((item, index) => {
        return (
          <React.Fragment key={`${item.text}_${index}`}>
            <TouchableOpacity
              style={styles.menu_item}
              onPress={() => {
                item.onClick();
                props.onSelectPress();
              }}
            >
              {item.icon && (
                <MaterialCommunityIcons
                  name={item.icon}
                  color={Colors.RED}
                  size={16}
                  style={styles.icon}
                />
              )}
              <MyText style={styles.text}>{item.text}</MyText>
            </TouchableOpacity>
            {index < props.items.length - 1 && <HorizontalLine />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  menu_list: {
    position: "absolute",
    top: 72,
    left: 24,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 8,
    minWidth: 180,
    zIndex: 2,
  },
  menu_item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 16,
  },
});
