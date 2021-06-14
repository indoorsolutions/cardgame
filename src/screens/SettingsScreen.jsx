import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../components/settings/Player";
import { setRandomize } from "../store/slices/settings";
import { Toggle } from "../components/settings/Toggle";
import { Section } from "../components/commons/Section";

export const SettingsScreen = ({ navigation }) => {
  const { player1, player2 } = useSelector((state) => state.players);
  const { randomize } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <Section title={"Players"}>
        <Player
          avatar={player1.avatar}
          name={player1.name}
          onEditClick={() => {
            navigation.navigate("UpdatePlayer", {
              player: "player1",
            });
          }}
        />
        <Player
          avatar={player2.avatar}
          name={player2.name}
          onEditClick={() => {
            navigation.navigate("UpdatePlayer", {
              player: "player2",
            });
          }}
        />
      </Section>
      <Section title={"Global"}>
        <Toggle
          value={randomize}
          text={"Shuffle cards after select"}
          onChange={(value) => dispatch(setRandomize(value))}
        />
      </Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    justifyContent: "flex-start",
    padding: 20,
    marginTop: 20,
  },
  title: {
    width: "100%",
    alignItems: "center",
  },
  switch_container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
