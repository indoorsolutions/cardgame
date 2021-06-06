import { createSlice } from "@reduxjs/toolkit";
import { Cards, Mode } from "../../commons";
import { shuffle } from "../../commons/utils";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    cards: Object.values(Cards),
    mode: Mode.SELECT,
    selectedCard: null,
    guessedCard: null,
  },
  reducers: {
    shuffleCards: (state) => {
      shuffle(state.cards);
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    selectCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    guessCard: (state, action) => {
      state.guessedCard = action.payload;
    },
    reset: (state) => {
      state.selectedCard = null;
      state.guessedCard = null;
      state.mode = Mode.SELECT;
      shuffle(state.cards);
    },
  },
});

export const { changeMode, guessCard, reset, selectCard, shuffleCards } =
  gameSlice.actions;
export default gameSlice.reducer;
