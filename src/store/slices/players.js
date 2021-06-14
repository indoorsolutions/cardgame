import { createSlice } from "@reduxjs/toolkit";
import { Players } from "../../commons";
import { isStringNotEmpty } from "../../commons/utils";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
    player1: {
      name: Players.PLAYER1,
      avatar: null,
    },
    player2: {
      name: Players.PLAYER2,
      avatar: null,
    },
  },
  reducers: {
    updatePlayer1: (state, action) => {
      const { name, avatar } = action.payload;
      const newPlayer = {
        name: isStringNotEmpty(name) ? name : state.player1.name,
        avatar: avatar ? avatar : state.player1.avatar,
      };
      state.player1 = newPlayer;
    },
    updatePlayer2: (state, action) => {
      const { name, avatar } = action.payload;
      const newPlayer = {
        name: isStringNotEmpty(name) ? name : state.player2.name,
        avatar: avatar ? avatar : state.player1.avatar,
      };
      state.player2 = newPlayer;
    },
    switchPlayers: (state) => {
      const { player1, player2 } = state;
      state.player1 = player2;
      state.player2 = player1;
    },
  },
});

export const { updatePlayer1, updatePlayer2, switchPlayers } =
  playersSlice.actions;
export default playersSlice.reducer;
