import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/commons/Button";
import {
  changeMode,
  selectCard,
  reset,
  guessCard,
  shuffleCards,
} from "../../store/slices/game";
import { Card } from "../../components/card/Card";
import { Badge } from "../../components/commons/Badge";
import { CardSides, Colors, Mode } from "../../commons";
import { MyText } from "../../components/text/MyText";
import { Avatar } from "../../components/avatar/Avatar";
import { Menu } from "../../components/menu/Menu";
import { switchPlayers } from "../../store/slices/players";

export const GameScreen = ({ navigation }) => {
  const { mode, cards, selectedCard, guessedCard } = useSelector(
    (state) => state.game
  );
  const { player1, player2 } = useSelector((state) => state.players);
  const { randomize } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const getGameCurrentMessage = () => {
    let message = "";
    switch (mode) {
      case Mode.SELECT:
        message =
          selectedCard === null ? "Select card!" : "Confirm and pass a device";
        break;
      case Mode.GUESS:
        message = "Guess a card!";
        break;
      case Mode.SCORE:
        message = `${
          selectedCard === guessedCard ? player2.name : player1.name
        } wins!`;
    }

    return message;
  };

  const handleCardPress = (card) => {
    if (mode === Mode.SELECT) {
      dispatch(selectCard(card));
    } else if (mode === Mode.GUESS) {
      dispatch(guessCard(card));
      dispatch(changeMode(Mode.SCORE));
    }
  };
  const handleConfirm = () => {
    dispatch(changeMode(Mode.GUESS));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Menu
        items={[
          {
            text: "Switch players",
            icon: "rotate-3d-variant",
            onClick: () => {
              dispatch(switchPlayers());
              dispatch(reset());
            },
          },
          {
            text: "Settings",
            icon: "cog-outline",
            onClick: () => {
              navigation.navigate("Settings");
            },
          },
        ]}
      />
      <Badge
        icon={
          <Avatar
            image={mode === Mode.SELECT ? player1.avatar : player2.avatar}
            style={{ borderColor: Colors.RED }}
          />
        }
        text={mode === Mode.SELECT ? player1.name : player2.name}
      />
      <MyText style={styles.message}>{getGameCurrentMessage()}</MyText>
      <View style={styles.cards_wrapper}>
        {cards.map((card) => {
          return (
            <Card
              key={card}
              kind={card}
              side={mode === Mode.GUESS ? CardSides.REVERS : CardSides.OBVERSE}
              onPress={() => handleCardPress(card)}
              selected={mode !== Mode.GUESS && selectedCard === card}
              guessed={guessedCard === card}
              onFlip={() =>
                mode === Mode.GUESS && randomize && dispatch(shuffleCards())
              }
            />
          );
        })}
      </View>
      {mode === Mode.SELECT ? (
        <Button
          kind={"SUCCESS"}
          onPress={handleConfirm}
          disable={selectedCard === null}
          size={"DYNAMIC"}
        >
          Confirm
        </Button>
      ) : (
        <Button kind={"ERROR"} onPress={handleReset} size={"DYNAMIC"}>
          Reset
        </Button>
      )}
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
  cards_wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
  },
  message: {
    fontSize: 14,
    margin: 8,
    color: Colors.GRAY,
  },
});
