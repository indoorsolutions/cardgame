import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settings";
import gameReducer from "./slices/game";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    game: gameReducer,
  },
});
