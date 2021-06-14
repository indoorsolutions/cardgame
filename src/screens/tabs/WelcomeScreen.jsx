import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Heading } from "../../components/text/Heading";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../../components/commons/Button";
import { Colors } from "../../commons";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <MaterialCommunityIcons
          color={Colors.RED}
          name={"cards-playing-outline"}
          size={98}
        />
      </View>
      <View style={styles.title}>
        <Heading size={"H1"}>
          Welcome in
          <Heading size={"H1"} style={styles.red}>
            {" "}
            CardGame
          </Heading>
          .
        </Heading>
      </View>
      <View>
        <Heading size={"H2"}>
          Game is meant for two players. First player selects one of the four
          cards. Then he hands his phone to another player who has to guess
          which card was selected.
        </Heading>
      </View>
      <Button
        kind={"PRIMARY"}
        size={"DYNAMIC"}
        onPress={() => navigation.navigate("Game")}
        style={{ marginTop: 48 }}
      >
        Start now!
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  red: {
    color: Colors.RED,
  },
});
