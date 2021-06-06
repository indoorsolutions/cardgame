import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { H1 } from "../components/text/H1";
import { H2 } from "../components/text/H2";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "../components/Button";
import { Colors } from "../commons";

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
        <H1>
          Welcome in
          <H1 style={styles.green}> CardGame</H1>.
        </H1>
      </View>
      <View>
        <H2>
          Game is meant for two players. First plauer selects one of the four
          cards. Then he hands his phone to another player who has to guess
          which card was selected.
        </H2>
      </View>
      <Button kind={"PRIMARY"} onPress={() => navigation.navigate("Game")}>
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
  green: {
    color: "#cf4444",
  },
});
