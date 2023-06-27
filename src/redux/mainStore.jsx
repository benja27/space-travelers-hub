import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./rockets/rocketSlice";
import missionReducer from "./missions/missionSlice";

const store = configureStore({
  reducer: {
    rockets : rocketSlice,
    missions : missionReducer
  }
})

export default store