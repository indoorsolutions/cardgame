import React, { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuList } from "./MenuList";

export const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnPress = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <MenuButton onPress={handleOnPress} />
      {showMenu && (
        <MenuList items={props.items} onSelectPress={handleOnPress} />
      )}
    </>
  );
};
