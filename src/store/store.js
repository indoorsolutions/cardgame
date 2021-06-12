import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settings";
import gameReducer from "./slices/game";
import playersReducer from "./slices/players";

export default configureStore({
  reducer: {
    game: gameReducer,
    players: playersReducer,
    settings: settingsReducer,
  },
});
