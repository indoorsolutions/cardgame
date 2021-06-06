import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import {
  changeMode,
  selectCard,
  reset,
  guessCard,
  shuffleCards,
} from "../store/slices/game";
import { Card } from "../components/card/Card";
import { Badge } from "../components/Badge";
import { CardSides, Colors, Mode, Players } from "../commons";
import { MyText } from "../components/text/MyText";

export const GameScreen = () => {
  const mode = useSelector((state) => state.game.mode);
  const cards = useSelector((state) => state.game.cards);
  const selectedCard = useSelector((state) => state.game.selectedCard);
  const guessedCard = useSelector((state) => state.game.guessedCard);
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
          selectedCard === guessedCard ? Players.PLAYER2 : Players.PLAYER1
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
      <Badge>{mode === Mode.SELECT ? Players.PLAYER1 : Players.PLAYER2}</Badge>
      <MyText style={styles.message}>{getGameCurrentMessage()}</MyText>
      <View style={styles.cards_wrapper}>
        {cards.map((card, index) => {
          return (
            <Card
              key={card}
              kind={card}
              side={mode === Mode.GUESS ? CardSides.REVERS : CardSides.OBVERSE}
              onPress={() => handleCardPress(card)}
              selected={mode !== Mode.GUESS && selectedCard === card}
              guessed={guessedCard === card}
              onFlip={() => mode === Mode.GUESS && dispatch(shuffleCards())}
            />
          );
        })}
      </View>
      {mode === Mode.SELECT ? (
        <Button
          kind={"SUCCESS"}
          onPress={handleConfirm}
          disable={selectedCard === null}
        >
          Confirm
        </Button>
      ) : (
        <Button kind={"ERROR"} onPress={handleReset}>
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
