import React, { useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { Colors } from "../../commons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MyText } from "../text/MyText";
import { HorizontalLine } from "../commons/HorizontalLine";
import { MenuButton } from "./MenuButton";
import { MenuList } from "./MenuList";

export const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnPress = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <MenuButton onPress={handleOnPress}></MenuButton>
      {showMenu && (
        <MenuList items={props.items} onSelectPress={handleOnPress} />
      )}
    </>
  );
};

const styles = StyleSheet.create({});
