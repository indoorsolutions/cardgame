import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    cardsNumber: 4,
    randomize: false,
  },
  reducers: {
    changeCardNumber: (state, action) => {
      state.cardsNumber = action.payload;
    },
    enableRandomize: (state) => {
      state.randomize = true;
    },
    disableRandomize: (state) => {
      state.randomize = false;
    },
  },
});

export const { changeCardNumber, enableRandomize, disableRandomize } =
  settingsSlice.actions;
export default settingsSlice.reducer;
