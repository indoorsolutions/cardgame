import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { Heading } from "../../components/text/Heading";
import { Button } from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../commons";
import { MyText } from "../../components/text/MyText";
import { Avatar } from "../../components/avatar/Avatar";

export const SettingsScreen = ({ navigation }) => {
  const { player1, player2 } = useSelector((state) => state.players);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.title}>
        <Heading size={"H1"}>Settings</Heading>
      </View>
      <View style={styles.player_container}>
        <Avatar image={player1.avatar} />
        <MyText style={styles.player_name}>{player1.name}</MyText>
        <Button
          kind={"SECONDARY"}
          size={"MEDIUM"}
          inline={true}
          onPress={() => {
            navigation.navigate("UpdatePlayer", {
              player: "player1",
            });
          }}
          style={styles.edit_button}
        >
          Edit
        </Button>
      </View>
      <View style={styles.player_container}>
        <Avatar image={player2.avatar} />
        <MyText style={styles.player_name}>{player2.name}</MyText>
        <Button
          kind={"SECONDARY"}
          size={"MEDIUM"}
          inline={true}
          onPress={() => {
            navigation.navigate("UpdatePlayer", {
              player: "player2",
            });
          }}
          style={styles.edit_button}
        >
          Edit
        </Button>
      </View>
      <Button kind={"PRIMARY"} onPress={() => {}}>
        Save
      </Button>
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
  player_container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  avatar_container: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderStyle: "solid",
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar_image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  player_name: {
    fontSize: 18,
    lineHeight: 24,
  },
  edit_button: {
    marginTop: 0,
    marginLeft: "auto",
  },
});
