import React, { useState } from "react";
import { Colors } from "../commons";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { InputText } from "../components/inputs/InputText";
import { Button } from "../components/commons/Button";
import { useDispatch, useSelector } from "react-redux";
import { updatePlayer1, updatePlayer2 } from "../store/slices/players";
import { MyText } from "../components/text/MyText";
import { AvatarManager } from "../components/avatar/AvatarManager";

export const UpdatePlayerScreen = ({ route }) => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const [player, setPlayer] = useState(players[route.params.player]);

  const handleSave = () => {
    if (route.params.player === "player1") {
      dispatch(updatePlayer1(player));
    }
    if (route.params.player === "player2") {
      dispatch(updatePlayer2(player));
    }
  };
  const handleAvatarChange = (avatar) => {
    setPlayer((prev) => ({ ...prev, avatar: avatar }));
  };
  const dataChanged = () => {
    return (
      player.name !== players[route.params.player].name ||
      player.avatar !== players[route.params.player].avatar
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <MyText>Change player settings and save</MyText>
      </View>
      <InputText
        label={"Name"}
        value={player.name}
        onChange={(text) => {
          setPlayer((prev) => ({ ...prev, name: text }));
        }}
      />
      <AvatarManager image={player.avatar} onImageChange={handleAvatarChange} />
      <Button
        kind={"PRIMARY"}
        size={"DYNAMIC"}
        onPress={handleSave}
        disable={!dataChanged()}
        style={{ marginTop: 16 }}
      >
        Save
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    justifyContent: "center",
  },
  avatar_container: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatar_image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons_container: {
    marginLeft: 20,
  },
  button: {
    marginTop: 8,
  },
});
