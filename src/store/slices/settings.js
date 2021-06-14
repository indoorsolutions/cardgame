import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    cardsNumber: 4,
    randomize: true,
  },
  reducers: {
    changeCardNumber: (state, action) => {
      state.cardsNumber = action.payload;
    },
    setRandomize: (state, action) => {
      state.randomize = action.payload;
    },
  },
});

export const { changeCardNumber, setRandomize } = settingsSlice.actions;
export default settingsSlice.reducer;
