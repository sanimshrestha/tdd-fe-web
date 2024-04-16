import { configureStore } from "@reduxjs/toolkit";
import { drinkApi } from "./services/drinks";
import ui from "./features/ui";
import drinks from "./features/drinks";
import feedbackApi from "./services/feedbacks";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [drinkApi.reducerPath]: drinkApi.reducer,
      [feedbackApi.reducerPath]: feedbackApi.reducer,
      ui,
      drinks,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(drinkApi.middleware)
        .concat(feedbackApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
